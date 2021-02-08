const data = [
    {
        id: 1,
        section: "Landscape",
        pic: "img/lge/landscape/DJI_0006.jpg",
        alt: "Redhook, Brooklyn",
        caption: "The abandonded silo. Red Hook, Brooklyn",
    },
    {
        id: 2,
        section: "Landscape",
        pic: "img/lge/landscape/DJI_0059.jpg",
        alt: "Bruno Trucking sign. Gowanus, Brooklyn",
        caption: "Bruno Trucking Sales sign. Gowanus, Brooklyn",
    },
    {
        id: 3,
        section: "Landscape",
        pic: "img/lge/landscape/vanpac02.jpg",
        alt: "Vanderbilt and Pacific Brooklyn, NY",
        caption: "This no longer exists, a story of gentrification. Prospect Heights, Brooklyn",
    },
    {
        id: 4,
        section: "Landscape",
        pic: "img/lge/landscape/TOTR_Sunset.jpg",
        alt: "Southern view from Top of the Rock, NYC",
        caption: "View from the Top of the Rock. Rockefeller Center, NYC",
    },
    {
        id: 5,
        section: "Landscape",
        pic: "img/lge/landscape/5points.jpg",
        alt: "5points Queens, NY",
        caption: "This no longer exists, a story of gentrification. 5Pointz, Long Island City Queens, NY for: Vice Magazine",
    },
    {
        id: 6,
        section: "Landscape",
        pic: "img/lge/landscape/DJI_0075.jpg",
        alt: "Brooklyn Navy Yard solar project from above",
        caption: "Brooklyn Navy Yard Solar system built by: Solar Energy Systems",
    },
    {
        id: 7,
        section: "Landscape",
        pic: "img/lge/landscape/AviatorColor.jpg",
        alt: "Aviator rink Brooklyn, NY",
        caption: "Aviator Sports Center. Floyd Bennett Field, Brooklyn",
    },
    {
        id: 8,
        section: "Landscape",
        pic: "img/lge/landscape/Charlie.jpg",
        alt: "Hiking in the White Mountain range",
        caption: "Foggy Morning, White Mountain National Forest",
    },
    {
        id: 9,
        section: "Landscape",
        pic: "img/lge/landscape/larahotrock.jpg",
        alt: "Sunbather, Antigua, W.I.",
        caption: "Sunbathing on the hot rock. Antigua W.I.",
    },
    {
        id: 10,
        section: "Landscape",
        pic: "img/lge/landscape/oia2.jpg",
        alt: "Oia SanTorini, Greece",
        caption: "Sunset in Oia. San Torini, Greece",
    },
    {
        id: 11,
        section: "Landscape",
        pic: "img/lge/landscape/hfscrowd.jpg",
        alt: "HFStival front row",
        caption: "All access pass, a view from the stage. WHFStival, RFK Stadium Washington D.C.",
    }
]


function imagesForCarousel(image) {
    // Create HTML elements needed for each carousel image
    const figure = document.createElement("figure");
    const picture = document.createElement("picture");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    // Append newly created elements to the DOM
    const landscapePort = document.querySelector('#landscapePort');
    landscapePort.append(figure);
    figure.append(picture);
    picture.append(img);
    figure.append(figcaption);
    //Set content and attributes
    img.setAttribute("class", 'portfolio__img');
    img.setAttribute("src", image.pic);
    img.setAttribute("alt", image.alt);
    // add the caption to figcaption
    figcaption.innerHTML = image.caption;
}

data.forEach(image => imagesForCarousel(image));
