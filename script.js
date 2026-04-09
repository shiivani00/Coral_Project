// =======================
// HOME PAGE CLICK
// =======================
document.querySelectorAll(".coral[data-reef]").forEach(coral => {
coral.addEventListener("click", function () {
const reef = this.dataset.reef;
window.location.href = `reef.html?reef=${reef}`;
});
});

// =======================
// BACK BUTTON
// =======================
function goBack() {
window.location.href = "index.html";
}

// =======================
// DATA
// only GBR for now
// =======================
const reefData = {
gbr: {
title: "The Great Barrier Reef",
info: "The Great Barrier Reef is the largest coral reef of the world. This reef features more than 400 species of coral that shelter over 1500 species of fish, and other aquatic lives.",
folder: "GBR",

    corals: [
        {
            name: "Acropora millepora",
            file: "acroporamillepora",
            textBlue: "They are found in the western and central Indo-Pacific. The color is variable and may be green with orange tipped branches, or pale pink, orange, plain green or blue. It is also collected for the reef aquarium trade.",
            textGreen: "The main threat affecting them is the destruction of the coral reefs where they live.",
            2006: {
                status: "Healthy",
                statusText: "In 2006, these corals were healthy and thriving across the Indo-Pacific regions."
            },
            2026: {
                status: "Stressed",
                statusText: "They are currently experiencing repeated bleaching and partial mortality."
            },
            2046: {
                status: "Critical",
                statusText: "By 2046, most of these corals are projected to become locally extinct in many regions."
            }
        },
        {
            name: "Pocillopora damicornis",
            file: "pocilloporadamicornis",
            textBlue: "Commonly known as the cauliflower coral, they are native to tropical and subtropical parts of the Indo-Pacific oceans. They are reef-building corals. In some regions, these corals are mined cement conversion",
            textGreen: "Coral reefs around the world are being destroyed and although this coral is common and relatively resilient, populations likely are in decline along with their habitat.",
            2006: {
                status: "Healthy",
                statusText: "In 2006, this coral was widely distributed and maintained stable populations."
            },
            2026: {
                status: "Stressed",
                statusText: "Currently, it is facing stress due to rising sea temperatures and bleaching events."
            },
            2046: {
                status: "Critical",
                statusText: "By 2046, populations are expected to decline significantly with only fragmented colonies remaining."
            }
        },
        {
            name: "Porites lutea",
            file: "poriteslutea",
            textBlue: "They are stony coral found growing on reefs in the Indo-Pacific region. They form microatolls in the intertidal zones which have been useed to study trends in sea leavels and sea water temperatures.",
            textGreen: "The growth rate of corals is influenced by various environmental conditions.",
            2006: {
                status: "Healthy",
                statusText: "In 2006, it was stable and widely distributed across reef systems."
            },
            2026: {
                status: "Healthy",
                statusText: "Currently, it remains relatively resilient despite increasing environmental stress."
            },
            2046: {
                status: "Healthy",
                statusText: "By 2046, it is expected to continue surviving as one of the more dominant species."
            }
        },
        {
            name: "Montipora digitata",
            file: "montiporadigitata",
            textBlue: "They are also known as finger coral and are a species of stony coral. They are usually pale cream, pale yellow or brown. They are primary reef building corals.",
            textGreen: "These corals are mostly unaffected by coral bleaching.The main threats faced by corals are related to climate change and ocean acidification.",
            2006: {
                status: "Healthy",
                statusText: "In 2006, it was healthy and commonly found across reefs."
            },
            2026: {
                status: "Stressed",
                statusText: "Currently, it is experiencing stress due to rising sea temperatures."
            },
            2046: {
                status: "Critical",
                statusText: "By 2046, it is expected to decline significantly in many regions."
            }
        },
        {
            name: "Turbinaria mesenterina",
            file: "turbinariamesenterina",
            textBlue: "They are commonly known as disc coral. They are native to the Indo-Pacific region. They thrive in turbid water, and are tolerant of high levels of sedimentation. They are collected for aquarium trade, with indonesia being its largest expoter.",
            textGreen: "The reefs where they live are being progressively damaged by raising sea levels. They are also susceptible to coral diseases and bleaching.",
            2006: {
                status: "Healthy",
                statusText: "In 2006, it was stable and widely present across reef environments."
            },
            2026: {
                status: "Stressed",
                statusText: "Currently, it is showing moderate resilience but facing increasing environmental pressure."
            },
            2046: {
                status: "Stressed",
                statusText: "By 2046, it is expected to persist but with reduced populations."
            }
        },
        {
            name: "Seriatopora hystrix",
            file: "seriatoporahystrix",
            textBlue: "They are a species of colonial stony coral. They form branching clumps and they are commonly known as thin birdsnest coral.",
            textGreen: "The threats include ocean acidification, climate change and habitat loss.",
            2006: {
                status: "Healthy",
                statusText: "In 2006, it was abundant and widely distributed."
            },
            2026: {
                status: "Stressed",
                statusText: "Currently, it is highly affected by bleaching and environmental changes."
            },
            2046: {
                status: "Critical",
                statusText: "By 2046, it is expected to become critically reduced across many regions."
            }
        }
        ]
    },

cr: {
title: "The Caribbean Coral Reef",
info: "The Caribbean Coral Reef is home to iconic corals like Elkhorn coral and brain corals. This reef is especially known for its crystal clear waters and colorful corals.",
folder: "CCR",
corals: [
{
name: "Acropora palmata",
file: "acroporapalmata",
textBlue: "Commonly known as Elkhorn Coral, they are an important reef-building coral in the Caribbean. The branching structure creates habitat and shelter for many other reef species.",
textGreen: "Elkhorn coral populations have rapidly declined by an estimated 97%. They remain a constantly threatened species.",
2006: { status: "Critical", statusText: "In 2006, this coral was already in critical condition due to disease and environmental stress." },
2026: { status: "Critical", statusText: "Currently, it remains critically endangered with very limited recovery observed." },
2046: { status: "Critical", statusText: "By 2046, it is expected to remain critically endangered with only small surviving populations." }
},
{
name: "Acropora cervicornis",
file: "acroporacervicornis",
textBlue: "They are one of the fastest growing fringe coral species in the Caribbean and because of this they serve as one of the most important reef-building corals.",
textGreen: "They are prone to bacterial infections and other threats, and are rapidly reducing in population.",
2006: { status: "Critical", statusText: "In 2006, populations had already declined drastically across the Caribbean." },
2026: { status: "Critical", statusText: "Currently, it continues to face severe threats from disease and warming waters." },
2046: { status: "Critical", statusText: "By 2046, it is likely to survive only in protected or restored areas." }
},
{
name: "Orbicella annularis",
file: "orbicellaannularis",
textBlue: "Commonly known as Boulder star coral, it is a species of coral abundantly found in the Caribbean. They have a comprehensive fossil record within Caribbean reefs.",
textGreen: "The chief threats faced by them are climate change and associated sea temperature rise.",
2006: { status: "Healthy", statusText: "In 2006, this coral maintained relatively stable populations across reefs." },
2026: { status: "Stressed", statusText: "Currently, it is under stress due to bleaching and environmental changes." },
2046: { status: "Critical", statusText: "By 2046, it is expected to face severe population decline across its range." }
},
{
name: "Diploria labyrinthiformis",
file: "diplorialabyrinthiformis",
textBlue: "They are commonly known as grooved brain coral, and are found in the western Atlantic Ocean and Caribbean Sea. It has a familiar brain-like appearance.",
textGreen: "They are likely to be stressed by climate change and warmer waters.",
2006: { status: "Healthy", statusText: "In 2006, it was stable and widely present across Caribbean reefs." },
2026: { status: "Stressed", statusText: "Currently, it is experiencing moderate stress due to changing ocean conditions." },
2046: { status: "Stressed", statusText: "By 2046, it is expected to persist but with reduced population levels." }
},
{
name: "Dendrogyra cylindrus",
file: "dendrogyracylindrus",
textBlue: "They are known as Pillar corals and are found in the Atlantic Ocean and Caribbean Sea. They are one of the few types of hard corals in which the polyps can commonly be seen feeding.",
textGreen: "This coral is particularly susceptible to both bleaching and white plague disease. They are critically endangered.",
2006: { status: "Stressed", statusText: "In 2006, this coral was already under stress and showing signs of decline." },
2026: { status: "Critical", statusText: "Currently, it is critically endangered with very few surviving colonies." },
2046: { status: "Critical", statusText: "By 2046, it is likely to be nearly extinct in the wild." }
},
{
name: "Porites astreoides",
file: "poritesastreoides",
textBlue: "They are commonly known as mustard hill coral. They are a common species in the Caribbean Sea. Microscopic algae live within the coral’s tissue.",
textGreen: "These corals are resistant to bleaching and diseases and remain one of the more resilient species.",
2006: { status: "Healthy", statusText: "In 2006, it was abundant and maintained healthy populations." },
2026: { status: "Healthy", statusText: "Currently, it remains stable and relatively resilient despite environmental stress." },
2046: { status: "Healthy", statusText: "By 2046, it is expected to continue surviving as one of the more dominant species." }
}
]
},

rs: {
    title: "The Red Sea Coral Reef",
    info: "The Red Sea is home to the world's second longest coral reef system after the Great Barrier Reef. This reef is often studied for its ability to withstand high water temperatures.",
    folder: "RS",
    corals: [
        {
            name: "Stylophora pistillata",
            file: "stylophorapistillata",
            textBlue: "Commonly known as hood coral or smooth cauliflower coral, they are found in the Indo-Pacific regions and are commonly used in scientific investigations.",
            textGreen: "The chief threats faced by corals in general are climate change, sea temperature rise, violent storms, and increasing susceptibility to coral diseases.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and thriving across the Red Sea." },
            2026: { status: "Healthy", statusText: "Currently, it continues to remain healthy due to higher thermal tolerance." },
            2046: { status: "Healthy", statusText: "By 2046, it is expected to remain one of the more resilient coral species." }
        },
        {
            name: "Pocillopora verrucosa",
            file: "pocilloporaverrucosa",
            textBlue: "They are commonly known as rasp coral or knob-coral. They are native to tropical and subtropical parts of the Pacific Ocean. A number of predators feeed on them.",
            textGreen: "Their populations are in decline along with their habitat. The main threats are climate change, ocean acidification, and rising temperature.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and widely distributed." },
            2026: { status: "Stressed", statusText: "Currently, it is experiencing stress due to rising sea temperatures." },
            2046: { status: "Critical", statusText: "By 2046, populations are expected to decline significantly." }
        },
        {
            name: "Montipora aequituberculata",
            file: "montiporaaequituberculata",
            textBlue: "They are a species of stony coral found commonly in shallow water in the Indo-Pacific region. They are home to many aquatic lives.",
            textGreen: "These corals are threatened by habitat destruction. Rising sea temperatures can cause bleaching, leaving them colorless.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and present across reef systems." },
            2026: { status: "Stressed", statusText: "Currently, it is showing stress due to increased bleaching events." },
            2046: { status: "Critical", statusText: "By 2046, it is expected to decline sharply across many regions." }
        },
        {
            name: "Galaxea fascicularis",
            file: "galaxeafascicularis",
            textBlue: "They are commonly known as octopus coral, fluorescence grass coral, and galaxy coral among various vernacular names. They are found in the Indo-Pacific regions.",
            textGreen: "They are likely to be stressed by climate change and warmer waters. They are common species but they take upto eight years to mature, making them vulnerable to rapid environmnetal changes.",
            2006: { status: "Healthy", statusText: "In 2006, populations were stable and widespread." },
            2026: { status: "Stressed", statusText: "Currently, it is experiencing moderate environmental stress." },
            2046: { status: "Critical", statusText: "By 2046, most of these corals are projected to become locally extinct in many regions." }
        },
        {
            name: "Lobophyllia corymbosa",
            file: "lobophylliacorymbosa",
            textBlue: "They are also known as lobed cactus coral or brain root coral. The type locality of Lobophyllia corymbosa is the Red Sea. They are also found in the Indo-Pacific regions.",
            textGreen: "Although they may seem more resilient, they are still prone to stress due to reef degradation.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and widely present." },
            2026: { status: "Stressed", statusText: "Currently, it is under increasing environmental stress." },
            2046: { status: "Stressed", statusText: "By 2046, it is expected to persist but in reduced numbers." }
        },
        {
            name: "Goniastrea retiformis",
            file: "goniastrearetiformis",
            textBlue: "They are a species of stony coral native to shallow water in the Indo-Pacific region. They form massive colonies that are domed, flat or columnar.",
            textGreen: "The main threats faced by corals are related to the destruction of their reef habitats and climate change, including extreme weather, rising temperatures and ocean acidification.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and widely distributed." },
            2026: { status: "Critical", statusText: "Currently, it is experiencing severe decline due to environmental pressures." },
            2046: { status: "Critical", statusText: "By 2046, it is expected to decline significantly across reefs." }
        }
    ]
},

ct: {
    title: "The Coral Triangle",
    info: "The Coral Triangle, known as the Amazon of the Seas, is crucial for global coral reef conservation and this area contains at least 500 species of reef-building corals.",
    folder: "CT",
    corals: [
        {
            name: "Acropora hyacinthus",
            file: "acroporahyacinthus",
            textBlue: "These corals were once thought to have a wide growing range but are now shown to be more restricted to the central Pacific and Australian coasts. The Crown-of-thorns starfish preferentially prey upon Acropora corals.",
            textGreen: "It is believed that their population is decreasing in line with the global decline in reefs. They are threatened by the global reduction of coral reefs, and the crown-of-thorns starfish.",
            2006: { status: "Healthy", statusText: "In 2006, it was abundant and thriving across reefs." },
            2026: { status: "Stressed", statusText: "Currently, it is experiencing stress due to bleaching and environmental change." },
            2046: { status: "Critical", statusText: "By 2046, it is expected to decline drastically in many areas." }
        },
        {
            name: "Acropora globiceps",
            file: "acroporaglobiceps",
            textBlue: "These corals have compact branches and occur in small colonies on the slopes of reefs along the western Pacific Ocean.",
            textGreen: "These corals are threatened by global reduction of coral reefs, the increase of sea temprature, and human activity.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and present across reef systems." },
            2026: { status: "Critical", statusText: "Currently, it is critically affected by bleaching and habitat loss." },
            2046: { status: "Critical", statusText: "By 2046, it is expected to become locally extinct in many regions." }
        },
        {
            name: "Euphyllia glabrescens",
            file: "euphylliaglabrescens",
            textBlue: "Their common name is torch coral. THis is due to their long sweeper tentacles tipped with potent cnidocytes. They are a commonly kept species in the aquariums.",
            textGreen: "They are widely distributed species, but they face stress due to habitat loss and destruction of reefs caused by environmental conditions and human activity.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and widely present." },
            2026: { status: "Stressed", statusText: "They are currently experiencing stress due to habitat loss." },
            2046: { status: "Critical", statusText: "By 2046, it is expected to decline significantly across reefs." }
        },
        {
            name: "Fungia fungites",
            file: "fungiafungites",
            textBlue: "Fungia is a genus of corals in the family Fungiidae, found growing in the Indo-Pacific coasts. The younger or smaller corals attach themselves to rocks while larger individuals detach themselves and become free living.",
            textGreen: "These corals are one of the more resilient species of coral and remain relatively stable and unaffected by natural causes.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and widespread." },
            2026: { status: "Healthy", statusText: "Currently, it remains relatively unaffected by environmental stress." },
            2046: { status: "Healthy", statusText: "By 2046, it is expected to remain stable across most regions." }
        },
        {
            name: "Tubastraea coccinea",
            file: "tubastraeacoccinea",
            textBlue: "They are popularly known as orange cup coral. These non-reef-building corals extend translucent tentacles at night. They can grow in complete darkness.",
            textGreen: "These corals are an invasive species and remain stable and resilient to bleaching.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and widely distributed." },
            2026: { status: "Healthy", statusText: "Currently, it remains largely unaffected by changing conditions." },
            2046: { status: "Healthy", statusText: "By 2046, it is expected to remain stable across reefs." }
        },
        {
            name: "Sinularia flexibilis",
            file: "sinulariaflexibilis",
            textBlue: "They are commonly known as spaghetti finger leather corals. This species is widespread throughout the western Pacific and eastern Indian Oceans. They are usually found in large colonies at depths between 1 and 15 meters.",
            textGreen: "Their population is increasing and they remain stable and unaffected by natural causes.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and common across reefs." },
            2026: { status: "Healthy", statusText: "Currently, it continues to remain resilient to environmental changes." },
            2046: { status: "Healthy", statusText: "By 2046, it is expected to remain stable in most regions." }
        }
    ]
},

mc: {
    title: "The Maldives Coral Reefs",
    info: "Maldives Coral Reefs are the seventh largest reef systems in the world. They are fundamental to Maldivian life as they form the structure of the island and act as natural protective barriers against rising sea levels.",
    folder: "MC",
    corals: [
        {
            name: "Acropora muricata",
            file: "acroporamuricata",
            textBlue: "Commonly called staghorn coral, they are found in the western Pacific Ocean and are collected for the reef aquarium trade.",
            textGreen: "They are threatened by coral reef decline, rising temperature, climate change, and human activity.",
            2006: { status: "Healthy", statusText: "In 2006, it was healthy and widely distributed." },
            2026: { status: "Stressed", statusText: "Currently, it is experiencing stress due to repeated bleaching events." },
            2046: { status: "Critical", statusText: "By 2046, it is expected to decline significantly across reefs." }
        },
        {
            name: "Acropora humilis",
            file: "acroporahumilis",
            textBlue: "They are also known as finger coral. They occur in tropical shallow reefs of the Indo-Pacific Ocean. They are mainly cream, blue, brown or purple in colour, and have branching cream or blue tips.",
            textGreen: "Their population is decreasing and they are threatened by reef reduction, bleaching and climate change.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and abundant." },
            2026: { status: "Stressed", statusText: "Currently, it is facing environmental stress due to warming waters." },
            2046: { status: "Critical", statusText: "By 2046, most of these corals are projected to become locally extinct in many regions." }
        },
        {
            name: "Porites lutea",
            file: "poriteslutea",
            textBlue: "They are a species of stony coral found growing in very shallow water on reefs in the Indo-Pacific region. They form massive structures and have been used to study trends in sea levels and sea water temperatures.",
            textGreen: "These corals are one of the more resilient species of coral and remain stable and relatively unaffected.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and widely present." },
            2026: { status: "Healthy", statusText: "Currently, it remains healthy and relatively resilient." },
            2046: { status: "Healthy", statusText: "By 2046, it is expected to continue maintaining stable populations." }
        },
        {
            name: "Favites abdita",
            file: "favitesabdita",
            textBlue: "They are also known as the larger star coral and are found in the Indo-Pacific Ocean. The International Union for Conservation of Nature has listed their conservation status as near-threatened.",
            textGreen: "This coral faces the same threats as other species: global warming, ocean acidification, and habitat degradation.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and widely distributed." },
            2026: { status: "Stressed", statusText: "They are currently experiencing repeated bleaching and partial mortality." },
            2046: { status: "Stressed", statusText: "By 2046, it is expected to persist but with reduced populations." }
        },
        {
            name: "Echinopora lamellosa",
            file: "echinoporalamellosa",
            textBlue: "They form colonies that are thin laminae arranged in whorls or tiers. They are found in the Indo-Pacific Oceans.",
            textGreen: "They are threatened by coral reef decline, temperature increase, climate change and human activity.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and present across reefs." },
            2026: { status: "Stressed", statusText: "Currently, it is experiencing stress due to bleaching events." },
            2046: { status: "Critical", statusText: "By 2046, it is expected to decline significantly." }
        },
        {
            name: "Pocillopora eydouxi",
            file: "pocilloporaeydouxi",
            textBlue: "It is known commonly as antler coral. They are found from the Indo-West Pacific to the Eastern Tropical Pacific. They are collected for aquarium trade.",
            textGreen: "Like other reef corals, they are threatened by habitat destruction and environmental changes.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and widely distributed." },
            2026: { status: "Stressed", statusText: "Currently, it is experiencing moderate stress due to environmental changes." },
            2046: { status: "Stressed", statusText: "By 2046, it is expected to persist but with reduced populations." }
        }
    ]
},

hc: {
    title: "The Hawaiian Coral Reef",
    info: "Hawaiian Coral Reef is a crucial site for global coral reef conservation. Its islands are home to one of the highest concentrations of endemic marine species anywhere on Earth.",
    folder: "HC",
    corals: [
        {
            name: "Montipora capitata",
            file: "montiporacapitata",
            textBlue: "They are commonly known as rice coral. They are reef-building species and is found in tropical parts of the Pacific Ocean.",
            textGreen: "Like other reef corals, they are threatened by habitat destruction. Rising sea temperatures can cause bleaching.",
            2006: { status: "Healthy", statusText: "In 2006, it was healthy and abundant across Hawaiian reefs." },
            2026: { status: "Stressed", statusText: "Currently, it is experiencing repeated bleaching and environmental stress." },
            2046: { status: "Critical", statusText: "By 2046, it is expected to decline significantly in many areas." }
        },
        {
            name: "Pocillopora meandrina",
            file: "pocilloporameandrina",
            textBlue: "Commonly known as Cauliflower coral, they are found in the Pacific Ocean and play a key role in reef formation.",
            textGreen: "These corals are increasingly affected by warming waters and recurring bleaching events.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and widely present." },
            2026: { status: "Stressed", statusText: "Currently, it is facing stress due to bleaching and warming waters." },
            2046: { status: "Critical", statusText: "By 2046, most of these corals are projected to become locally extinct in many regions." }
        },
        {
            name: "Porites compressa",
            file: "poritescompressa",
            textBlue: "They are also known as hump coral. They arefound in shallow lagoons in tropical parts of the Indian and Pacific Oceans. They often grow into large colonies which may be up to thousands of years old.",
            textGreen: "They are affected by rising sea temperatures but are more resistant to bleaching than many other corals.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and abundant." },
            2026: { status: "Healthy", statusText: "Currently, it remains relatively healthy despite some stress." },
            2046: { status: "Healthy", statusText: "By 2046, it is expected to remain stable compared to more sensitive species." }
        },
        {
            name: "Porites lobata",
            file: "poriteslobata",
            textBlue: "They are known by the common name lobe coral. They are found growing in tropical parts of Pacific Oceans and forms part of the coral reef biome. Several fish species live among the lobes of these corals.",
            textGreen: "They are one of the more resilient species of coral, though rising sea temperature may still cause bleaching.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and widely distributed." },
            2026: { status: "Stressed", statusText: "Currently, it is experiencing moderate stress due to bleaching." },
            2046: { status: "Stressed", statusText: "By 2046, it is expected to persist but with reduced populations." }
        },
        {
            name: "Leptastrea purpurea",
            file: "leptastreapurpurea",
            textBlue: "This coral is a genus of massive reef-building stony corals known primarily from the Indo-Pacific.They are reef-builders, and make up a significant portion of the coral reefs.",
            textGreen: "The main threats faced by corals are related to climate change and ocean acidification, but they widely remain unaffected.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and present across reefs." },
            2026: { status: "Stressed", statusText: "Currently, it remains relatively unaffected by environmental stress." },
            2046: { status: "Healthy", statusText: "By 2046, it is expected to remain stable in most areas." }
        },
        {
            name: "Cyphastrea ocellina",
            file: "cyphastreaocellina",
            textBlue: "They are stony corals with grooves that resemble the brain. Theyare mainly found in the Indian and Pacific Oceans. These corals are genus of massive reef-building stony corals.",
            textGreen: "These corals are one of the more resilient species of coral and remain stable and unaffected by bleaching and acidification.",
            2006: { status: "Healthy", statusText: "In 2006, it was stable and widely present." },
            2026: { status: "Healthy", statusText: "Currently, it continues to remain largely unaffected." },
            2046: { status: "Healthy", statusText: "By 2046, it is expected to remain stable across reefs." }
        }
    
    ]
}
}


// =======================
// PAGE STATE
// =======================
let currentReef = "gbr";
let currentYear = 2046;
let currentCoral = 0;

// =======================
// LOAD REEF PAGE
// =======================
if (window.location.pathname.includes("reef.html")) {
const params = new URLSearchParams(window.location.search);
currentReef = params.get("reef") || "gbr";
loadPage();
}

// =======================
// MAIN LOAD FUNCTION
// =======================
function loadPage() {
const reef = reefData[currentReef];

// set active year button
document.querySelectorAll(".year-buttons button").forEach(button => {
    button.classList.remove("active");

    if (button.textContent == currentYear) {
        button.classList.add("active");
    }
});

// title + info
document.getElementById("reef-page-title").textContent = reef.title;
document.getElementById("reef-info").textContent = reef.info;

// load all coral images
for (let i = 0; i < reef.corals.length; i++) {
    const coral = reef.corals[i];
    const status = coral[currentYear].status.toLowerCase();
    const imagePath = `Images/${reef.folder}/${coral.file}_${status}.png`;

    const coralBox = document.querySelector(`.coral${i + 1}`);
    if (!coralBox) continue;

    coralBox.style.backgroundImage = `url("${imagePath}")`;
    coralBox.style.backgroundSize = "contain";
    coralBox.style.backgroundRepeat = "no-repeat";
    coralBox.style.backgroundPosition = "center";

    // remove old active class before reassigning
    coralBox.classList.remove("active-coral");

    // keep selected coral lifted
    if (i === currentCoral) {
        coralBox.classList.add("active-coral");
    }

    // hover = always show label on hovered coral
    coralBox.onmouseenter = function () {
        const labelCard = document.getElementById("coral-label-card");
        const labelText = document.getElementById("coral-label-text");
        const displayArea = document.querySelector(".coral-display");

        labelText.textContent = coral.name;

        const coralRect = coralBox.getBoundingClientRect();
        const displayRect = displayArea.getBoundingClientRect();

        const leftPosition =
            coralRect.left - displayRect.left + (coralRect.width / 2) - (labelCard.offsetWidth / 2);

        const topPosition =
            coralRect.top - displayRect.top - 100;

        labelCard.style.left = `${leftPosition}px`;
        labelCard.style.top = `${topPosition}px`;
        labelCard.style.opacity = "1";
    };

    // mouse leave = return label to selected coral
    coralBox.onmouseleave = function () {
        const labelCard = document.getElementById("coral-label-card");
        const labelText = document.getElementById("coral-label-text");
        const displayArea = document.querySelector(".coral-display");
        const activeCoralBox = document.querySelector(`.coral${currentCoral + 1}`);
        const activeCoral = reef.corals[currentCoral];

        if (!activeCoralBox) {
            labelCard.style.opacity = "0";
            return;
        }

        labelText.textContent = activeCoral.name;

        const coralRect = activeCoralBox.getBoundingClientRect();
        const displayRect = displayArea.getBoundingClientRect();

        const leftPosition =
            coralRect.left - displayRect.left + (coralRect.width / 2) - (labelCard.offsetWidth / 2);

        const topPosition =
            coralRect.top - displayRect.top - 100;

        labelCard.style.left = `${leftPosition}px`;
        labelCard.style.top = `${topPosition}px`;
        labelCard.style.opacity = "1";
    };

    // click = make this coral active
    coralBox.onclick = function () {
        currentCoral = i;
        showCoralText();

        // remove active class from all reef corals
        document.querySelectorAll(".reef-panel .coral").forEach(c => {
            c.classList.remove("active-coral");
        });

        // keep clicked coral lifted
        coralBox.classList.add("active-coral");

        const labelCard = document.getElementById("coral-label-card");
        const labelText = document.getElementById("coral-label-text");
        const displayArea = document.querySelector(".coral-display");

        labelText.textContent = coral.name;

        const coralRect = coralBox.getBoundingClientRect();
        const displayRect = displayArea.getBoundingClientRect();

        const leftPosition =
            coralRect.left - displayRect.left + (coralRect.width / 2) - (labelCard.offsetWidth / 2);

        const topPosition =
            coralRect.top - displayRect.top - 100;

        labelCard.style.left = `${leftPosition}px`;
        labelCard.style.top = `${topPosition}px`;
        labelCard.style.opacity = "1";
    };
}

// show selected coral text
showCoralText();

// keep current selected coral active after page load / year change
setTimeout(() => {
    const activeCoralBox = document.querySelector(`.coral${currentCoral + 1}`);
    const labelCard = document.getElementById("coral-label-card");
    const labelText = document.getElementById("coral-label-text");
    const displayArea = document.querySelector(".coral-display");
    const activeCoral = reef.corals[currentCoral];

    if (!activeCoralBox) return;

    document.querySelectorAll(".reef-panel .coral").forEach(c => {
        c.classList.remove("active-coral");
    });

    activeCoralBox.classList.add("active-coral");
    labelText.textContent = activeCoral.name;

    const coralRect = activeCoralBox.getBoundingClientRect();
    const displayRect = displayArea.getBoundingClientRect();

    const leftPosition =
        coralRect.left - displayRect.left + (coralRect.width / 2) - (labelCard.offsetWidth / 2);

    const topPosition =
        coralRect.top - displayRect.top - 100;

    labelCard.style.left = `${leftPosition}px`;
    labelCard.style.top = `${topPosition}px`;
    labelCard.style.opacity = "1";
}, 50);
}

// =======================
// SHOW CENTER TEXT
// =======================
function showCoralText() {
const coral = reefData[currentReef].corals[currentCoral];

document.getElementById("coral-name").textContent = coral.name;
document.getElementById("text-blue").textContent = coral.textBlue;
document.getElementById("text-green").textContent = coral.textGreen;
document.getElementById("status-title").innerHTML = `<strong>Status: ${coral[currentYear].status}</strong>`;
document.getElementById("status-text").textContent = coral[currentYear].statusText;
document.getElementById("coral-label-text").textContent = coral.name;
}

// =======================
// YEAR BUTTON CLICK
// =======================
function changeYear(year) {
currentYear = year;
document.querySelectorAll(".year-buttons button").forEach(button => {
    button.classList.remove("active");

    if (button.textContent == year) {
        button.classList.add("active");
    }
});
loadPage();
}
