// QUOTES: wrap text in double quotes "like this" (apostrophes are fine inside them).
// If the text itself contains double quotes, or runs over several lines, use backticks `like this` instead.
var config = {
    style: "mapbox://styles/mbrait02/cmw5h74mz00cv01q29eshd1xb", // your Dark 2D style from Studio
    accessToken: "pk.eyJ1IjoibWJyYWl0MDIiLCJhIjoiY213YjRud2N3MGl1MzJ5cGxwMnkxeW1pOCJ9.NL0s5CReTQSIoskuKvWmWw",
    showMarkers: false, // true puts a pin at the center of each chapter
    markerColor: "#3FB1CE",
    //projection: "equirectangular",
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: "orange"
    },
    insetPosition: "bottom-right",
    theme: "light", // story cards and chart panels: "light" or "dark"
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    flySpeed: 0.6, // how fast the camera flies between stories (lower = slower)
    flyCurve: 1.6, // how far it zooms out mid-flight (higher = further)
    title: "Michael Braithwaite's portfolio", // double quotes, because the text contains an apostrophe
    subtitle: "This Mapbox storymap was customized using Claude Code. Everything else featured is entirely human created.",
    // About you: shown at the top of the page, above your stories.
    // Put your photo and resume in the "assets" folder (next to index.html) with these exact file names,
    // or change the names here to match. Leave anything blank ("") to hide it.
    about: {
        photo: "./assets/Headshot.jpg",
        photoAlt: "Michael Braithwaite",
        bio: `Michael is a journalist specializing in data reporting and creating interactive maps. His work has covered several beats, including crime, courts, transportation and education, and he's contributed to the newsroom's projects team.

Michael was selected for the Colorado Press Association's Rising Star Award in 2026 and won first place in the Best Data Journalism Reporting category as well.`,
        email: "michaeljbrait@gmail.com",   // e.g. "name@example.com"
        phone: "",   // e.g. "(555) 555-5555"
        links: [
            { label: "LinkedIn", url: "https://www.linkedin.com/in/mbrait/" },   // paste your profile address between the quotes
		{ label: "Twitter", url: "https://x.com/mbraitmedia" },   // paste your profile address between the quotes
        ],
        resume: "./assets/Resume.pdf",
        resumeButton: "Resume",
        workButton: "See Michael's work"
    },
    footer: `Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.`,
    chapters: [
        {
            id: "waymo",
            alignment: "left", // charts appear on the opposite side: "left" card -> charts on the right
            hidden: false,
            // tag: a short label above the headline, e.g. "Reporting + data", "Data + graphics", "Reporting"
            tag: "Reporting + data + mapping",
            title: "Riding Waymo vs. Uber or Lyft",
            // role: who did what, shown under the headline
            role: "Story and graphics by Michael Braithwaite",
            description: `A price analysis of riding Waymo in Denver versus riding Uber or Lyft.

Over the course of a week, multiple Denver Gazette staffers recorded the quoted price for Waymo, Uber and Lyft rides across different routes and at different times of the day. 

Once the data collection was complete, Michael compiled and analyzed the data to find that Waymo ride prices were not just competitive with Uber and Lyft; they were often cheaper.`,
            // Link preview for the published story, shown under the text.
            // url is required; image, title, description and site fill in the card like a social media share.
            link: {
                url: "https://www.denvergazette.com/2026/11/05/denver-waymo-uber-lyft-pricing/",
                image: "https://www.denvergazette.com/wp-content/uploads/2026/11/C82A9857_w-scaled-e1793685241810.jpg",
                title: "Is a Denver Waymo ride as cheap as Uber or Lyft? It’s not far off",
                description: "Waymo’s robotaxis have become a running joke in the Mile High City, but they’re also becoming an increasingly cost-effective transportation option when compared to competitors Uber and Lyft.",
                site: "The Denver Gazette"
            },
            // Charts shown beside this card, top to bottom. Remove the // to use a line.
            // height is in pixels (Datawrapper charts adjust their own height; Flourish ones keep it).
            charts: [
                { src: "https://datawrapper.dwcdn.net/1dYU5/2/", height: 450, title: "Short description of the chart" },

            ],
            location: {
                center: [-104.9875, 39.745783],
                zoom: 11.3,
                pitch: 0,   // 0 = straight down; higher numbers tilt the map
                bearing: 0  // 0 = north at the top
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            // Layers from your Studio style. "layer" must match the layer name in Studio exactly.
            // Enter: fade it in over 1 second. Exit: hide it again.
            onChapterEnter: [
                { layer: "waymoroutes", opacity: 1, duration: 1000 },
                { layer: "waymostops", opacity: 1, duration: 1000 },
                { layer: "waymolabels", opacity: 1, duration: 1000 }
            ],
            onChapterExit: [
                { layer: "waymoroutes", opacity: 0 },
                { layer: "waymostops", opacity: 0 },
                { layer: "waymolabels", opacity: 0 }
            ]
        },
       {
            id: "cmas",
            alignment: "right", // charts appear on the opposite side: "left" card -> charts on the right
            hidden: false,
            // tag: a short label above the headline, e.g. "Reporting + data", "Data + graphics", "Reporting"
            tag: "Data",
            title: "Analyzing Colorado's 2026 CMAS scores",
            // role: who did what, shown under the headline
            role: "Story by Nico Brambila; graphics by Michael Braithwaite",
            description: `This story analyzed the yearly release of Colorado's Colorado Measures of Academic Success (CMAS) standardized test scores for all public school districts throughout the state.

Along with other publications, we received the data under a two-day embargo. In that time, Michael isolated statewide and local trends, and created several graphics illustrating them that published within the story immediately when the embargo lifted.`,
            // Link preview for the published story, shown under the text.
            // url is required; image, title, description and site fill in the card like a social media share.
            link: {
                url: "https://www.denvergazette.com/2026/08/19/colorado-math-scores-hit-record-high-as-denver-area-districts-show-gains/",
                image: "https://www.denvergazette.com/wp-content/uploads/2026/08/080726-dg-news-School-2.jpg",
                title: "Colorado math scores hit record high as Denver-area districts show gains",
                description: `Math emerged as a bright spot in Colorado’s latest standardized test results, with students posting record scores in a subject where they have historically lagged behind English language arts.`,
                site: "The Denver Gazette"
            },
            // Charts shown beside this card, top to bottom. Remove the // to use a line.
            // height is in pixels (Datawrapper charts adjust their own height; Flourish ones keep it).
            charts: [
                { src: "https://public.flourish.studio/visualisation/30012587/", height: 450, title: "Short description of the chart" },

            ],
            location: {
                center: [-104.8388299, 39.0965125],
                zoom: 5,
                pitch: 0,   // 0 = straight down; higher numbers tilt the map
                bearing: 0  // 0 = north at the top
            },

            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [],
            onChapterExit: []
        },
            {
            id: "badroads",
            alignment: "left", // charts appear on the opposite side: "left" card -> charts on the right
            hidden: false,
            // tag: a short label above the headline, e.g. "Reporting + data", "Data + graphics", "Reporting"
            tag: "Reporting + graphics",
            title: "The sorry state of Colorado's rural roads",
            // role: who did what, shown under the headline
            role: "Story and graphics by Michael Braithwaite",
            description: `One of Michael's first data reporting stories, this one explored how Colorado's rural highways have fallen into disrepair due to a lack of state funds to maintain and repair them.

Michael drove out to Sterling, a city on Colorado's Eastern Plains, to spend a day with state Sen. Byron Pelton, who spent six hours giving Michael a first-hand experience on the worn-down state highway network east of Colorado's major metropolitan areas.

The story won first place for best data journalism reporting at the 2026 Colorado Press Association Better News Contest.`,
            // Link preview for the published story, shown under the text.
            // url is required; image, title, description and site fill in the card like a social media share.
            link: {
                url: "https://www.denvergazette.com/2025/08/07/rural-reckoning-colorado-highways-are-crumbling-and-so-is-the-funding-to-fix-them/",
                image: "https://www.denvergazette.com/wp-content/uploads/2026/01/b0cf3a2da1ea09a52ed75eb8ab3f4df3-scaled.jpg?resize=2048,1534",
                title: "Colorado highways are crumbling, and so is the funding to fix them",
                description: `Colorado highways across the state are falling into disarray. Gas tax revenue to fund upkeep has flattened while the cost to maintain and build roads has soared.`,
                site: "The Denver Gazette"
            },
            // Charts shown beside this card, top to bottom. Remove the // to use a line.
            // height is in pixels (Datawrapper charts adjust their own height; Flourish ones keep it).
            charts: [
                { image: "https://www.denvergazette.com/wp-content/uploads/2026/01/bee37ad8f67bb2da4e9eeadcbd2effac.jpg?resize=1536,924"},

            ],
            location: {
                center: [-103.25, 40.6134603],
                zoom: 9.5,
                pitch: 0,   // 0 = straight down; higher numbers tilt the map
                bearing: 0  // 0 = north at the top
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: "frpr",
            alignment: "right", // charts appear on the opposite side: "left" card -> charts on the right
            hidden: false,
            // tag: a short label above the headline, e.g. "Reporting + data", "Data + graphics", "Reporting"
            tag: "Mapping",
            title: "The Front Range Passenger Rail District changes",
            // role: who did what, shown under the headline
            role: "Story by Scott Weiser; mapping by Michael Braithwaite",
            description: `During the 2026 midterm election, Colorado voters in select areas decided the fate of a sales and use tax increase to fund passenger rail service development along the state's Front Range.

The measure had been in consideration for years, and had previously included a far larger tax district than the one that was signed into law months before Election Day.

But a breakdown in communication between the passenger rail authority and several county clerks resulting in some voters outside the revised district still seeing the issue on their 2026 ballots, prompting a two-day scramble to determine how to ensure that only the votes from those inside the new district would count.

This was Michael's first time creating custom geospatial maps on deadline.`,
            // Link preview for the published story, shown under the text.
            // url is required; image, title, description and site fill in the card like a social media share.
            link: {
                url: "https://www.denvergazette.com/2026/10/07/ballot-issue-for-passenger-rail-on-more-ballots-than-it-should-be/",
                image: "https://www.denvergazette.com/wp-content/uploads/2026/10/Train-Name_-CoCo-e1791049989546.jpeg",
                title: "800,000 voters wrongly sent ballots with passenger rail tax question",
                description: "County clerks in at least four metro Denver counties are scrambling to deal with the immediate confusion — and other potential ramifications — in the aftermath of some 800,000 voters receiving ballots with a sales tax hike question they shouldn’t be asked.",
                site: "The Denver Gazette"
            },
            location: {
                center: [-104.2, 39],
                zoom: 6.5,
                pitch: 0,   // 0 = straight down; higher numbers tilt the map
                bearing: 0  // 0 = north at the top
            },

            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                { layer: "frprboundary", opacity: 1, duration: 1000 }
            ],
            onChapterExit: [
                { layer: "frprboundary", opacity: 0 }
            ]
        },
       {
            id: "freeride",
            alignment: "left", // charts appear on the opposite side: "left" card -> charts on the right
            hidden: false,
            // tag: a short label above the headline, e.g. "Reporting + data", "Data + graphics", "Reporting"
            tag: "Reporting + data",
            title: "Illustrating RTD's reliance on the FreeRide for ridership",
            // role: who did what, shown under the headline
            role: "Story and data by Michael Braithwaite",
            description: `This was a news story that broke after a pre-meeting agenda showed that Denver's Regional Transportation District, which services the public buses and light rail, was considering cutting the city's free bus through its newly-reconstructed downtown pedestrian promenade.

Using public data on the agency's website, Michael showed just how much FreeRide outpaces the RTD's other bus routes in ridership, a metric the agency has struggled to bring back up since the COVID-19 pandemic.`,
            // Link preview for the published story, shown under the text.
            // url is required; image, title, description and site fill in the card like a social media share.
            link: {
                url: "https://www.denvergazette.com/2026/07/14/rtd-to-consider-ending-16th-street-freeride-service/",
                image: "https://hub.gazette.com/wp-content/uploads/2025/09/Screenshot-2025-09-11-at-12.40.46%E2%80%AFPM-1024x551.png",
                title: "RTD to consider ending 16th Street FreeRide service",
                description: `Nine months after 16th Street celebrated its full reopening, transit officials are weighing the fate of one of the promenade’s most notable features — the FreeRide.`,
                site: "The Denver Gazette"
            },
            // Charts shown beside this card, top to bottom. Remove the // to use a line.
            // height is in pixels (Datawrapper charts adjust their own height; Flourish ones keep it).
            charts: [
                { src: "https://datawrapper.dwcdn.net/tls0Y/3/", height: 450, title: "Short description of the chart" },

            ],
            location: {
                center: [-104.994244, 39.7477039],
                zoom: 14,
                pitch: 0,   // 0 = straight down; higher numbers tilt the map
                bearing: 0  // 0 = north at the top
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};