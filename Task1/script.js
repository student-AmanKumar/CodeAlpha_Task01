
document.addEventListener("DOMContentLoaded", function(){

    "use strict";


    /* ========================================================
       ROOT
    ======================================================== */

    const gallery =
        document.getElementById("bkxGallery");

    if(!gallery) return;


    /* ========================================================
       IMAGE DATABASE
       Add your images here.
       No need to manually create thumbnails.
    ======================================================== */

    const images = [

        {
            image:"gallery imgs/img1.jpg",
            category:"NATURE",
            filter:"nature",
            collection:"Nature",
            description:
                 "Every story begins with a little touch of nature.",
            story:
                "Every story begins with a little touch of nature.",
            location:" Aligarh · Uttar Pradesh"
        },

        {
            image:"gallery imgs/img2.jpeg",
            category:"CULTURE",
            filter:"culture",
            collection:"Village Streets",
            // description:
            //     "Traditional homes, familiar streets and everyday moments passed through generations.",
            story:
                "Old traditions quietly live inside ordinary homes, streets and conversations.",
            location:"Village Streets"
        },

        {
            image:"gallery imgs/img3.jpg",
            category:"CULTURE",
            filter:"culture",
            collection:"Playing in the Fields",
            description:
                "A joyful village moment where children enjoy a friendly match in the open fields, surrounded by laughter, friendship and the simple charm of rural life.",
            story:
                "Laughter, teamwork and endless energy fill the open fields of the village, where every game becomes a cherished memory.",
            location:"Fields of Play"
        },

        {
            image:"gallery imgs/img4.jpg",
            category:"VILLAGE LIFE",
            filter:"life",
            collection:"Ruralway",
            description:
                "Simple village life, open fields and the timeless charm of a bullock cart making its way through the fields.",
            story:
                "The beauty of village life often lives in its simplest and quietest moments.",
            location:"Bhamori Khurd"
        },

        {
            image:"gallery imgs/img5.jpg",
            category:"VILLAGE EVENING",
            filter:"culture",
            collection:"Sunset",
            description:
                "A peaceful sunset by the village canal, where golden light, flowing water and open fields create a beautiful rural evening.",
            story:
                "As the sun slowly sets, the golden sky stretches across the fields, bringing a quiet and beautiful end to the day.",
            location:"Bhamori Khurd"
        },

        {
            image:"gallery imgs/img6.jpeg",
            category:"PEOPLE",
            filter:"people",
            collection:"Togetherness",
            description:
                "Farmers working together in the fields, keeping the traditions and spirit of village life alive.",
            story:
                "Together in the fields, people work side by side, sharing the effort, rhythm and spirit of village life.",
            location:"Bhamori Khurd"
        },

        {
            image:"gallery imgs/img7.jpg",
            category:"NATURE",
            filter:"nature",
            collection:"Nature",
            description:
                "Soft sunset light, quiet fields and the peaceful charm of village life.",
            story:
                "Before the day becomes busy, the village has its own quiet language.",
            location:"Bhamori Khurd"
        },

        {
            image:"gallery imgs/img8.jpg",
            category:"FARMING",
            filter:"life",
            collection:"Ploughing",
            description:
                "Farmers and their oxen at work in the fields, a timeless scene of village life.",
            story:
                "Guided by a farmer’s hands, the oxen move through the soil, carrying forward an age-old rhythm of village lif.",
            location:"Bhamori Khurd"
        },

        /* =====================================================
           OPTIONAL EXTRA IMAGES
           Replace these paths with your real files.
        ===================================================== */

        {
            image:"gallery imgs/img9.jpeg",
            category:"NATURE",
            filter:"life",
            collection:"Blooming Fields",
            description:
                " Blooming mustard fields, golden flowers and the fresh beauty of village life.",
            story:
                "Golden mustard flowers sway gently in the breeze, filling the fields with colour and life.",
            location:"Bhamori Khurd"
        },

        {
            image:"gallery imgs/img10.jpg",
            category:"FARMING",
            filter:"nature",
            collection:"Agriculture",
            description:
                "A tractor gently ploughing the fertile fields of Bhamori Khurd, as graceful white egrets gather behind, turning an everyday farming moment into a beautiful scene of village life..",
            story:
                "Farming is woven into the identity of the village and the lives of its families.",
            location:"Bhamori Fields"
        },

        {
            image:"gallery imgs/img11.jpg",
            category:"AGRICULTURE",
            filter:"culture",
            collection:"Farming",
            description:
                "A golden evening across the wheat fields, where the soft light and gentle breeze bring the quiet beauty of Bhamori Khurd to life.",
            story:
                "As evening settles over the wheat fields, the soft light turns the countryside into a peaceful golden scene.",
            location:"Bhamori Khurd"
        },

        // add more img here
          {
            image:"gallery imgs/img12.jpg",
            category:"CULTURE",
            filter:"culture",
            collection:"Village Food",
            description:
                "Traditional village food, homemade with love and filled with the authentic taste of Bhamori Khurd.",
            story:
                "From the warmth of the traditional stove to the aroma filling the air, village food brings everyone together around simple flavours, shared moments and the taste of home.",
            location:"Bhamori Khurd"
        },
          {
            image:"gallery imgs/img13.jpg",
            category:"CULTURE",
            filter:"culture",
            collection:"Rustic Cooking",
            description:
                "Freshly cooked with simple ingredients, old traditions and the warmth of village life.",
            story:
                "On the traditional stove, a simple meal slowly comes together, filling the home with warmth, aroma and the comforting taste of village life.",
            location:"Bhamori Khurd"
        },
          {
            image:"gallery imgs/img14.jpg",
            category:"NATURE",
            filter:"culture",
            collection:"Serenity",
            description:
                "Cool shade, quiet moments and the simple comfort of village life beneath the trees.",
            story:
                "Beneath the wide shade of old trees, time seems to slow down, offering a peaceful place to rest, talk and enjoy the simple moments of village life.",
            location:"Bhamori Khurd"
        },
          {
            image:"gallery imgs/img15.jpg",
            category:"AGRICULTURE",
            filter:"culture",
            collection:"Farming",
            description:
                "Fields in motion, as the tractor works through the soil, carrying the rhythm of everyday village life.",
            story:
                "As the tractor moves steadily through the fields, the soil turns and the farmer’s hard work prepares the land for a new season of growth.",
            location:"Bhamori Khurd"
        },
          {
            image:"gallery imgs/img16.jpg",
            category:"NATURE",
            filter:"culture",
            collection:"Blooming",
            description:
                "Bright mustard flowers blooming across the fields, adding a cheerful touch to the beauty of rural life.",
            story:
                "As the sun dips behind the horizon, the mustard flowers glow in golden light, turning the quiet fields into a beautiful evening scene.",
            location:"Bhamori Khurd"
        },
          {
            image:"gallery imgs/img17.jpg",
            category:"NATURE",
            filter:"culture",
            collection:"Goldenhour",
            description:
                "A warm evening filled with lights, traditions, laughter and togetherness.",
            story:
                "As the day fades away, the fields grow quiet, wrapped in the soft light and peaceful rhythm of a village evening.",
            location:"Bhamori Khurd"
        },
          {
            image:"gallery imgs/img18.jpg",
            category:"CULTURE",
            filter:"culture",
            collection:"Pastoral",
            description:
                "Under the trees, a peaceful gathering of cows captures the quiet rhythm of village life.",
            story:
                "As evening settles in, the cows rest peacefully, adding a gentle rhythm to the quiet village.",
            location:"Bhamori Khurd"
        },
          {
            image:"gallery imgs/img19.jpg",
            category:"AGRICULTURE",
            filter:"culture",
            collection:"Farming",
            description:
                "Across the open fields, the tractor moves steadily, shaping the soil for another season of growth.",
            story:
                "Through the open fields, the tractor keeps moving as the work continues and the soil is prepared for the days ahead.",
            location:"Bhamori Khurd"
        },
          {
            image:"gallery imgs/img20.jpg",
            category:"AGRICULTURE",
            filter:"culture",
            collection:"Irrigation",
            description:
                "Fresh water flowing through the fields, nurturing the crops and bringing life to the countryside",
            story:
                "As the final moments of the day unfold, fresh water flows gently through the fields, nourishing the crops and carrying the quiet rhythm of village life forward. From the first bloom to the evening fields, every little moment becomes a part of the story.",
            location:"Bhamori Khurd"
        }

    ];


    /* ========================================================
       ELEMENTS
    ======================================================== */

    const mainImage =
        gallery.querySelector("#bkxMainImage");

    const imageBox =
        gallery.querySelector("#bkxImageBox");

    const title =
        gallery.querySelector("#bkxTitle");

    const description =
        gallery.querySelector("#bkxDescription");

    const category =
        gallery.querySelector("#bkxImageCategory");

    const imageLocation =
        gallery.querySelector("#bkxImageLocation");

    const currentNumber =
        gallery.querySelector("#bkxCurrent");

    const totalNumber =
        gallery.querySelector("#bkxTotal");

    const sideNumber =
        gallery.querySelector("#bkxSideNumber");

    const sideTotal =
        gallery.querySelector("#bkxSideTotal");

    const sideProgress =
        gallery.querySelector("#bkxSideProgress");

    const rightTitle =
        gallery.querySelector("#bkxRightTitle");

    const rightText =
        gallery.querySelector("#bkxRightText");

    const rightLocation =
        gallery.querySelector("#bkxRightLocation");

    const metaCollection =
        gallery.querySelector("#bkxMetaCollection");

    const metaNumber =
        gallery.querySelector("#bkxMetaNumber");

    const progressBar =
        gallery.querySelector("#bkxProgressBar");

    const progressPercent =
        gallery.querySelector("#bkxProgressPercent");

    const playButton =
        gallery.querySelector("#bkxPlay");

    const thumbsContainer =
        gallery.querySelector("#bkxThumbs");

    const categories =
        [
            ...gallery.querySelectorAll(
                ".bkx-category"
            )
        ];

    const nextButtons =
        [
            ...gallery.querySelectorAll(
                ".bkx-next"
            )
        ];

    const prevButtons =
        [
            ...gallery.querySelectorAll(
                ".bkx-prev"
            )
        ];

    const thumbNext =
        gallery.querySelector(
            ".bkx-thumb-next"
        );

    const thumbPrev =
        gallery.querySelector(
            ".bkx-thumb-prev"
        );


    /* ========================================================
       STATE
    ======================================================== */

    let current = 0;

    let filteredIndexes =
        images.map((_,index)=>index);

    let autoPlay = null;

    let playing = true;

    let touchStartX = 0;

    let changeTimer = null;

    let toastTimer = null;


    /* ========================================================
       HELPERS
    ======================================================== */

    function pad(number){

        return String(number)
            .padStart(2,"0");

    }


    function getThumbs(){

        return [
            ...gallery.querySelectorAll(
                ".bkx-thumb"
            )
        ];

    }


    /* ========================================================
       DYNAMIC THUMBNAILS
       IMPORTANT:
       This fixes original thumbnail/index mismatch.
    ======================================================== */

    function renderThumbnails(){

        if(!thumbsContainer) return;

        thumbsContainer.innerHTML = "";

        images.forEach((item,index)=>{

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "bkx-thumb";

            button.dataset.index =
                index;

            button.setAttribute(
                "aria-label",
                `Open ${item.title}`
            );

            button.innerHTML = `

                <img
                    src="${item.image}"
                    alt="${item.title}"
                    loading="lazy"
                    draggable="false"
                >

                <span></span>

            `;

            button.addEventListener(
                "click",
                function(){

                    changeImage(index);

                }
            );

            thumbsContainer.appendChild(button);

        });

    }


    /* ========================================================
       TOTAL
    ======================================================== */

    const total =
        images.length;

    if(totalNumber)
        totalNumber.textContent =
            pad(total);

    if(sideTotal)
        sideTotal.textContent =
            pad(total);

    const storyCount =
        gallery.querySelector(
            "#bkxStoryCount"
        );

    if(storyCount){

        storyCount.textContent =
            total < 10
            ? "0" + total
            : total;
    }


    /* ========================================================
       ACTIVE THUMBNAIL
       Uses actual image index.
    ======================================================== */

    function updateThumbState(){

        const thumbs =
            getThumbs();

        thumbs.forEach((thumb)=>{

            const index =
                Number(
                    thumb.dataset.index
                );

            const active =
                index === current;

            thumb.classList.toggle(
                "active",
                active
            );

            const bar =
                thumb.querySelector("span");

            if(bar){

                bar.style.width =
                    active
                    ? "100%"
                    : "0";
            }

        });

    }


    /* ========================================================
       SAFE THUMBNAIL SCROLL
       IMPORTANT:
       No scrollIntoView().
       This prevents whole page jumping.
    ======================================================== */

    function scrollActiveThumb(){

        const thumbs =
            getThumbs();

        const active =
            thumbs.find(
                thumb =>
                Number(
                    thumb.dataset.index
                ) === current
            );

        if(!active || !thumbsContainer)
            return;

        const containerRect =
            thumbsContainer.getBoundingClientRect();

        const activeRect =
            active.getBoundingClientRect();

        const leftOverflow =
            activeRect.left -
            containerRect.left;

        const rightOverflow =
            activeRect.right -
            containerRect.right;

        if(leftOverflow < 0){

            thumbsContainer.scrollBy({
                left:leftOverflow - 15,
                behavior:"smooth"
            });

        }

        else if(rightOverflow > 0){

            thumbsContainer.scrollBy({
                left:rightOverflow + 15,
                behavior:"smooth"
            });

        }

    }


    /* ========================================================
       UPDATE IMAGE
    ======================================================== */

    function changeImage(index){

        if(!images.length)
            return;

        index =
            Number(index);

        if(Number.isNaN(index))
            index = 0;

        current =
            (
                index +
                images.length
            ) %
            images.length;

        const data =
            images[current];

        if(!data)
            return;


        clearTimeout(changeTimer);

        if(imageBox){

            imageBox.classList.add(
                "bkx-change"
            );
        }


        changeTimer =
            setTimeout(()=>{

                if(mainImage){

                    mainImage.src =
                        data.image;

                    mainImage.alt =
                        data.title;
                }

                if(title){

                    title.textContent =
                        data.title;
                }

                if(description){

                    description.textContent =
                        data.description ||
                        "A beautiful memory from Bhamori Khurd.";
                }

                if(category){

                    category.textContent =
                        data.category ||
                        "VILLAGE LIFE";
                }

                if(imageLocation){

                    imageLocation.textContent =
                        data.location ||
                        "Bhamori Khurd";
                }

                if(rightLocation){

                    rightLocation.textContent =
                        data.location ||
                        "Aligarh · Uttar Pradesh";
                }

                if(rightTitle){

                    rightTitle.innerHTML =
                        `Where ordinary moments
                         become <em>memories.</em>`;
                }

                if(rightText){

                    rightText.textContent =
                        data.story ||
                        data.description ||
                        "Every frame carries a small piece of village life.";
                }

                if(metaCollection){

                    metaCollection.textContent =
                        data.collection ||
                        data.category ||
                        "Village Life";
                }


                const number =
                    pad(current + 1);


                if(currentNumber){

                    currentNumber.textContent =
                        number;
                }

                if(sideNumber){

                    sideNumber.textContent =
                        number;
                }

                if(metaNumber){

                    metaNumber.textContent =
                        `${number} / ${pad(total)}`;
                }


                const percent =
                    Math.round(
                        (
                            (current + 1) /
                            total
                        ) * 100
                    );


                if(progressBar){

                    progressBar.style.width =
                        percent + "%";
                }

                if(sideProgress){

                    sideProgress.style.height =
                        percent + "%";
                }

                if(progressPercent){

                    progressPercent.textContent =
                        percent + "%";
                }


                if(imageBox){

                    imageBox.classList.remove(
                        "bkx-change"
                    );
                }

                updateThumbState();

                scrollActiveThumb();

            },180);


        /*
         * Save preference only when user actually
         * explores an image.
         */

        if(
            data.filter &&
            (
                data.filter === "nature" ||
                data.filter === "culture" ||
                data.filter === "life"
            )
        ){

            bkxSavePreference(
                data.filter,
                false
            );

        }

        resetAutoPlay();

    }


    /* ========================================================
       NEXT
    ======================================================== */

    function next(){

        if(!filteredIndexes.length)
            return;

        const position =
            filteredIndexes.indexOf(
                current
            );

        const nextPosition =
            position === -1
            ? 0
            : (
                position + 1
            ) %
            filteredIndexes.length;

        changeImage(
            filteredIndexes[nextPosition]
        );

    }


    /* ========================================================
       PREVIOUS
    ======================================================== */

    function previous(){

        if(!filteredIndexes.length)
            return;

        const position =
            filteredIndexes.indexOf(
                current
            );

        const previousPosition =
            position <= 0
            ? filteredIndexes.length - 1
            : position - 1;

        changeImage(
            filteredIndexes[
                previousPosition
            ]
        );

    }


    /* ========================================================
       ARROWS
    ======================================================== */

    nextButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                function(){

                    next();

                }
            );

        }
    );

    prevButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                function(){

                    previous();

                }
            );

        }
    );


    /* ========================================================
       THUMB ARROWS
       Horizontal container only.
       NEVER scrolls page.
    ======================================================== */

    thumbNext?.addEventListener(
        "click",
        function(){

            thumbsContainer?.scrollBy({

                left:150,

                behavior:"smooth"

            });

        }
    );


    thumbPrev?.addEventListener(
        "click",
        function(){

            thumbsContainer?.scrollBy({

                left:-150,

                behavior:"smooth"

            });

        }
    );


    /* ========================================================
       CATEGORY FILTER
    ======================================================== */

    categories.forEach(
        button => {

            button.addEventListener(
                "click",
                function(){

                    categories.forEach(
                        btn =>
                        btn.classList.remove(
                            "active"
                        )
                    );

                    this.classList.add(
                        "active"
                    );


                    const filter =
                        this.dataset.filter;


                    if(filter === "all"){

                        filteredIndexes =
                            images.map(
                                (_,index)=>index
                            );

                    }else{

                        filteredIndexes =
                            images
                            .map(
                                (item,index)=>({
                                    item,
                                    index
                                })
                            )
                            .filter(
                                object =>
                                object.item.filter ===
                                filter
                            )
                            .map(
                                object =>
                                object.index
                            );

                    }


                    if(
                        filteredIndexes.length
                    ){

                        /*
                         * Only change the image.
                         * No scrollIntoView.
                         */

                        changeImage(
                            filteredIndexes[0]
                        );

                        bkxShowToast(
                            "Showing " +
                            (
                                filter === "all"
                                ? "all village memories"
                                : filter.toUpperCase() +
                                  " memories"
                            )
                        );

                    }

                }
            );

        }
    );


    /* ========================================================
       AUTOPLAY
    ======================================================== */

    function startAutoPlay(){

        clearInterval(
            autoPlay
        );

        if(!playing)
            return;

        autoPlay =
            setInterval(
                next,
                5500
            );

    }


    function resetAutoPlay(){

        if(!playing)
            return;

        clearInterval(
            autoPlay
        );

        startAutoPlay();

    }


    /* ========================================================
       PLAY / PAUSE
    ======================================================== */

    function updatePlayButton(){

        if(!playButton)
            return;


        if(playing){

            playButton.innerHTML =
                `
                    <i class="fa-solid fa-pause"></i>
                    <span>PAUSE STORY</span>
                `;

            playButton.setAttribute(
                "aria-label",
                "Pause slideshow"
            );

        }else{

            playButton.innerHTML =
                `
                    <i class="fa-solid fa-play"></i>
                    <span>PLAY STORY</span>
                `;

            playButton.setAttribute(
                "aria-label",
                "Play slideshow"
            );

        }

    }


    playButton?.addEventListener(
        "click",
        function(){

            playing =
                !playing;

            updatePlayButton();


            if(playing){

                startAutoPlay();

            }else{

                clearInterval(
                    autoPlay
                );

            }

        }
    );


    /* ========================================================
       HOVER PAUSE
    ======================================================== */

    imageBox?.addEventListener(
        "mouseenter",
        function(){

            if(playing){

                clearInterval(
                    autoPlay
                );

            }

        }
    );


    imageBox?.addEventListener(
        "mouseleave",
        function(){

            if(playing){

                startAutoPlay();

            }

        }
    );


    /* ========================================================
       TOUCH SWIPE
    ======================================================== */

    imageBox?.addEventListener(
        "touchstart",
        function(event){

            if(
                event.changedTouches &&
                event.changedTouches[0]
            ){

                touchStartX =
                    event.changedTouches[0]
                    .screenX;

            }

        },
        {
            passive:true
        }
    );


    imageBox?.addEventListener(
        "touchend",
        function(event){

            if(
                !event.changedTouches ||
                !event.changedTouches[0]
            )
                return;


            const endX =
                event.changedTouches[0]
                .screenX;

            const distance =
                touchStartX -
                endX;


            if(
                Math.abs(distance) < 45
            )
                return;


            if(distance > 0)
                next();
            else
                previous();

        },
        {
            passive:true
        }
    );


    /* ========================================================
       KEYBOARD
       Only active when gallery is in viewport/focused area.
       Prevents arrow keys from affecting unrelated controls.
    ======================================================== */

    document.addEventListener(
        "keydown",
        function(event){

            const rect =
                gallery.getBoundingClientRect();

            const visible =
                rect.bottom > 0 &&
                rect.top <
                window.innerHeight;

            if(!visible)
                return;


            if(
                event.key === "ArrowRight" ||
                event.key === "ArrowLeft"
            ){

                const activeTag =
                    document.activeElement?.tagName;

                if(
                    activeTag === "INPUT" ||
                    activeTag === "TEXTAREA" ||
                    activeTag === "SELECT"
                )
                    return;

                event.preventDefault();

                if(
                    event.key === "ArrowRight"
                )
                    next();
                else
                    previous();

            }


            if(
                event.key === " " &&
                document.activeElement !==
                playButton
            ){

                const activeTag =
                    document.activeElement?.tagName;

                if(
                    activeTag === "INPUT" ||
                    activeTag === "TEXTAREA"
                )
                    return;

                event.preventDefault();

                playButton?.click();

            }

        }
    );


    /* ========================================================
       SMART MEMORY
    ======================================================== */

    const BKX_PREF_KEY =
        "BKX_MEMORY_PREFERENCES";


    function bkxDefaultPreferences(){

        return {

            nature:0,
            culture:0,
            life:0

        };

    }


    function bkxGetPreferences(){

        try{

            const saved =
                JSON.parse(
                    localStorage.getItem(
                        BKX_PREF_KEY
                    )
                );

            return {

                ...bkxDefaultPreferences(),

                ...(saved || {})

            };

        }catch{

            return bkxDefaultPreferences();

        }

    }


    function bkxSavePreference(
        filter,
        updateRecommendation = true
    ){

        if(
            filter !== "nature" &&
            filter !== "culture" &&
            filter !== "life"
        )
            return;


        const prefs =
            bkxGetPreferences();


        prefs[filter] =
            Number(
                prefs[filter] || 0
            ) + 1;


        try{

            localStorage.setItem(
                BKX_PREF_KEY,
                JSON.stringify(prefs)
            );

        }catch{

            /* localStorage may be disabled */

        }


        if(updateRecommendation){

            bkxUpdateRecommendation();

        }

    }


    function bkxUpdateRecommendation(){

        const prefs =
            bkxGetPreferences();


        const preferred =
            Object.keys(prefs)
            .sort(
                (a,b) =>
                prefs[b] - prefs[a]
            )[0];


        const smartTitle =
            gallery.querySelector(
                "#bkxSmartTitle"
            );

        const smartText =
            gallery.querySelector(
                "#bkxSmartText"
            );

        const smartAction =
            gallery.querySelector(
                "#bkxSmartAction"
            );


        if(
            !smartTitle ||
            !smartText
        )
            return;


        const recommendations = {

            nature:{

                title:
                    "You seem to enjoy Nature Stories 🌿",

                text:
                    "Explore more fields, greenery and peaceful village landscapes.",

                filter:"nature"

            },

            culture:{

                title:
                    "Culture seems to be your favourite 🏡",

                text:
                    "Discover traditions, celebrations and stories from generations.",

                filter:"culture"

            },

            life:{

                title:
                    "Village Life caught your attention ❤️",

                text:
                    "Take a closer look at the people and everyday moments of Bhamori.",

                filter:"life"

            }

        };


        const data =
            recommendations[
                preferred
            ];


        if(!data)
            return;


        smartTitle.textContent =
            data.title;

        smartText.textContent =
            data.text;


        if(smartAction){

            smartAction.onclick =
                function(){

                    this.classList.add(
                        "bkx-smart-clicked"
                    );

                    setTimeout(
                        ()=>{
                            this.classList.remove(
                                "bkx-smart-clicked"
                            );
                        },
                        350
                    );


                    const button =
                        gallery.querySelector(
                            `.bkx-category[data-filter="${data.filter}"]`
                        );


                    if(button){

                        button.click();

                    }


                    bkxShowToast(
                        "Your recommended " +
                        data.filter +
                        " memories are ready."
                    );

                };

        }

    }


    /* ========================================================
       SMART TOAST
    ======================================================== */

    function bkxShowToast(
        message =
        "A special village memory is ready to explore."
    ){

        const toast =
            gallery.querySelector(
                "#bkxSmartToast"
            );

        const messageElement =
            gallery.querySelector(
                "#bkxToastMessage"
            );


        if(!toast)
            return;


        if(messageElement){

            messageElement.textContent =
                message;

        }


        clearTimeout(
            toastTimer
        );


        toast.classList.remove(
            "bkx-toast-show"
        );


        /*
         * Restart progress animation.
         */

        void toast.offsetWidth;


        toast.classList.add(
            "bkx-toast-show"
        );


        toastTimer =
            setTimeout(
                function(){

                    toast.classList.remove(
                        "bkx-toast-show"
                    );

                },
                3800
            );

    }


    /* ========================================================
       LIVING GALLERY — REAL TIME
    ======================================================== */

    function bkxUpdateLivingGallery(){

        const now =
            new Date();


        const hours =
            now.getHours();


        let period;
        let icon;
        let liveTitle;
        let liveText;


        if(
            hours >= 5 &&
            hours < 12
        ){

            period = "MORNING";
            icon = "🌅";

            liveTitle =
                "Golden Morning in Bhamori";

            liveText =
                "A peaceful beginning to another day in the village.";

        }

        else if(
            hours >= 12 &&
            hours < 17
        ){

            period = "AFTERNOON";
            icon = "☀️";

            liveTitle =
                "Life Under The Village Sun";

            liveText =
                "Fields, streets and everyday village life continue.";

        }

        else if(
            hours >= 17 &&
            hours < 20
        ){

            period = "EVENING";
            icon = "🌇";

            liveTitle =
                "Golden Hours in Bhamori";

            liveText =
                "The village slows down as the evening light arrives.";

        }

        else{

            period = "NIGHT";
            icon = "🌙";

            liveTitle =
                "Quiet Memories After Dark";

            liveText =
                "The streets become calm and the village settles into silence.";

        }


        const formattedTime =
            now.toLocaleTimeString(
                "en-IN",
                {
                    hour:"2-digit",
                    minute:"2-digit",
                    hour12:true
                }
            );


        const timeElement =
            gallery.querySelector(
                "#bkxLiveTime"
            );

        const periodElement =
            gallery.querySelector(
                "#bkxLivePeriod"
            );

        const iconElement =
            gallery.querySelector(
                "#bkxLivingIcon"
            );

        const titleElement =
            gallery.querySelector(
                "#bkxLivingTitle"
            );

        const textElement =
            gallery.querySelector(
                "#bkxLivingText"
            );


        if(timeElement)
            timeElement.textContent =
                formattedTime;

        if(periodElement)
            periodElement.textContent =
                period;

        if(iconElement)
            iconElement.textContent =
                icon;

        if(titleElement)
            titleElement.textContent =
                liveTitle;

        if(textElement)
            textElement.textContent =
                liveText;

    }


    /* ========================================================
       INITIALIZATION
    ======================================================== */

    renderThumbnails();

    bkxUpdateRecommendation();

    bkxUpdateLivingGallery();

    setInterval(
        bkxUpdateLivingGallery,
        60000
    );


    /*
     * First image.
     */

    changeImage(0);

    updatePlayButton();

    startAutoPlay();
/* =========================================================
   BKX — SCROLL REVEAL ENGINE
   Uses only existing HTML elements
========================================================= */

function bkxInitScrollAnimations(){

    const revealSelectors = [
        ".bkx-head",
        ".bkx-kicker",
        ".bkx-title-row",
        ".bkx-category-nav",
        ".bkx-stage",
        ".bkx-side-left",
        ".bkx-visual",
        ".bkx-side-right",
        ".bkxv-connect",
        ".bkx-footer-internship-note",
        ".bkx-internship-note"
    ];

    const revealElements = [];

    revealSelectors.forEach((selector)=>{

        gallery
            .querySelectorAll(selector)
            .forEach((element)=>{

                if(!revealElements.includes(element)){
                    revealElements.push(element);
                }

            });

    });


    /* -----------------------------------------
       Add reveal classes
    ----------------------------------------- */

    revealElements.forEach((element,index)=>{

        element.classList.add("bkx-scroll-reveal");

        const delay =
            Math.min(index * 65, 390);

        element.style.setProperty(
            "--bkx-reveal-delay",
            delay + "ms"
        );

    });


    /* -----------------------------------------
       Intersection Observer
    ----------------------------------------- */

    if(
        !("IntersectionObserver" in window)
    ){

        revealElements.forEach(element=>{
            element.classList.add(
                "bkx-revealed"
            );
        });

        return;
    }


    const observer =
        new IntersectionObserver(
            function(entries){

                entries.forEach(entry=>{

                    if(!entry.isIntersecting) return;

                    entry.target.classList.add(
                        "bkx-revealed"
                    );

                    /*
                       Once revealed, stop observing.
                       This prevents animation from
                       repeatedly firing while scrolling.
                    */

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold:.12,

                rootMargin:
                    "0px 0px -8% 0px"
            }
        );


    revealElements.forEach(element=>{
        observer.observe(element);
    });

}


/* =========================================================
   START SCROLL ANIMATIONS
========================================================= */

bkxInitScrollAnimations();

   

});


