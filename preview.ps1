# Serves this folder at http://localhost so the story map can load its data files,
# then opens it in your browser. Close the window to stop. Started by "Preview map.cmd".

param([switch]$NoOpen)  # -NoOpen: serve without opening a browser

$root = (Resolve-Path $PSScriptRoot).Path.TrimEnd('\') + '\'
$types = @{
    '.html' = 'text/html; charset=utf-8'; '.js' = 'text/javascript; charset=utf-8'
    '.css' = 'text/css; charset=utf-8'; '.json' = 'application/json'; '.geojson' = 'application/geo+json'
    '.png' = 'image/png'; '.jpg' = 'image/jpeg'; '.jpeg' = 'image/jpeg'; '.svg' = 'image/svg+xml'; '.ico' = 'image/x-icon'; '.pdf' = 'application/pdf'
}

# Use the first free port from 8000 up
$listener = $null
foreach ($port in 8000..8010) {
    try {
        $listener = New-Object System.Net.HttpListener
        $listener.Prefixes.Add("http://localhost:$port/")
        $listener.Start()
        break
    } catch { $listener = $null }
}
if (-not $listener) { Write-Host 'Could not find a free port between 8000 and 8010.'; Read-Host 'Press Enter to close'; exit 1 }

$url = "http://localhost:$port/"
Write-Host "Your story map is at $url"
Write-Host 'Edit config.js, then refresh the browser to see changes. Close this window to stop.'
if (-not $NoOpen) { Start-Process $url }

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $response = $context.Response
    try {
        $path = [Uri]::UnescapeDataString($context.Request.Url.AbsolutePath).TrimStart('/')
        if ($path -eq '' -or $path.EndsWith('/')) { $path += 'index.html' }
        $file = [IO.Path]::GetFullPath((Join-Path $root $path))
        if ($file.StartsWith($root, [StringComparison]::OrdinalIgnoreCase) -and (Test-Path -LiteralPath $file -PathType Leaf)) {
            $bytes = [IO.File]::ReadAllBytes($file)
            $ext = [IO.Path]::GetExtension($file).ToLower()
            $response.ContentType = if ($types.ContainsKey($ext)) { $types[$ext] } else { 'application/octet-stream' }
            $response.Headers.Add('Cache-Control', 'no-store')  # always show your latest edits
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
        }
    } catch {
        $response.StatusCode = 500
    } finally {
        $response.Close()
    }
}
