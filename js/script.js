const { createApp } = Vue
createApp({
    data() {
        return {
            slideCorrente: 0,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },
    methods: {
        slidePrecedente() {
            if(this.slideCorrente>0) {
                this.slideCorrente--;
            } else {
                this.slideCorrente = this.slides.length - 1;
            }
        },
        slideSuccessiva() {
            if(this.slideCorrente < this.slides.length - 1) {
                this.slideCorrente++;
            } else {
                this.slideCorrente = 0;
            }
        },
        cambiaSlide(i) {
            this.slideCorrente = i;
        },
        getSlideClass(i) {
            return (i == this.slideCorrente) ? "thumb active" : "thumb";
        },
        fermaAutoplay() {
            clearInterval( this.autoScroll );
            this.autoScroll = null;
        },
        avvioAutoplay() {
            this.autoScroll = setInterval(()=>{
            this.slideSuccessiva();
            }, 1000);
        }
    },
    mounted() {
        console.log("App montata", this.slides);

        this.avvioAutoplay();
    }
}).mount('#app')