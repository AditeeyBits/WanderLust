// Comprehensive destinations data
const destinations = [
    {
        id: 1,
        name: "Paris, France",
        images: [
            "https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg",
            "https://www.aparisguide.com/louvre/louvre-museum001.jpg",
            "https://revivre-notre-dame.fr/wp-content/uploads/2021/11/DR-notre-dame-5310767_1920-1024x683.jpg"
        ],
        description: "Fall in love with Paris, where every cobblestone street tells a story and each arrondissement offers a new adventure. From rooftop champagne bars to hidden art galleries, discover why this magical city continues to captivate dreamers and artists alike.",
        tags: ["Romance", "Art", "Culture"],
        rating: 4.8,
        price: "$200/day",
        details: {
            bestTime: "Spring (April-June) or Fall (Sept-Oct)",
            attractions: [
                "Eiffel Tower",
                "Le Marais district",
                "Louvre Museum",
                "Montmartre & Sacré-Cœur",
                "Seine River cruise"
            ],
            culture: "Experience French living with café culture, art galleries, fashion, and historic architecture.",
            transportation: "Metro system, Vélib' bikes, and walking. Paris Visite pass recommended.",
            mustTry: [
                "Fresh pastries",
                "Wine tasting",
                "Garden picnics",
                "Macarons",
                "Rooftop dining"
            ]
        }
    },
    {
        id: 2,
        name: "Bali, Indonesia",
        images: [
            "https://unforgettabletravel.com/wp-content/uploads/2021/08/Bingin-beach-on-Bukit-Peninsula-Bali.jpg",
            "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180408231619/iStock-653953140.jpg",
            "https://theworldtravelguy.com/wp-content/uploads/2020/05/DJI_0910-3.jpg"
        ],
        description: "Discover paradise in Bali, where ancient temples meet pristine beaches and lush jungles. Experience spiritual awakening in Ubud, catch perfect waves in Uluwatu, and witness legendary sunsets at beach clubs.",
        tags: ["Paradise", "Adventure", "Beaches"],
        rating: 4.6,
        price: "$100/day",
        details: {
            bestTime: "April to October (Dry Season)",
            attractions: [
                "Tanah Lot Temple",
                "Ubud Monkey Forest",
                "Uluwatu Temple",
                "Bali Swings",
                "Munduk Waterfalls"
            ],
            culture: "Hindu traditions, daily offerings, traditional dance, and warm hospitality.",
            transportation: "Scooter rental ($5/day) or private drivers ($40/day)",
            mustTry: [
                "Jimbaran seafood",
                "Beach clubs",
                "Cooking class",
                "Healing sessions",
                "Island hopping"
            ]
        }
    },
    {
        id: 3,
        name: "Tokyo, Japan",
        images: [
            "https://www.universalweather.com/blog/wp-content/uploads/2019/07/tokyo-ops-7-19.jpg",
            "https://media.timeout.com/images/105749466/750/562/image.jpg",
            "https://t3.ftcdn.net/jpg/03/19/04/86/360_F_319048642_Bo4gEnNF7MwEIGPJFPocOFzVLxpAYvsa.jpg"
        ],
        description: "Step into the future in Tokyo, where neon-lit skyscrapers meet ancient temples, and robot restaurants coexist with traditional tea houses. Experience the world's most exciting metropolis where every district tells a unique story.",
        tags: ["Futuristic", "Culture", "Art"],
        rating: 4.7,
        price: "$150/day",
        details: {
            bestTime: "March-May or Oct-Nov",
            attractions: [
                "Shibuya Crossing",
                "teamLab Borderless",
                "Senso-ji Temple",
                "Shinjuku District",
                "Robot Restaurant"
            ],
            culture: "Ancient traditions blend with modern technology in a uniquely Japanese harmony.",
            transportation: "Efficient rail system with IC cards for easy travel.",
            mustTry: [
                "Late-night ramen",
                "Tsukiji sushi",
                "Robot Cafe",
                "Tea ceremony",
                "Karaoke"
            ]
        }
    },
    {
        id: 4,
        name: "Santorini, Greece",
        images: [
            "https://travelwandergrow.com/wp-content/uploads/2018/01/AdobeStock_264773707-scaled.jpeg",
            "https://www.thireasuites.com/blog/user/pages/01.home/04.santorini-sunset/santorini-sunset02.jpg",
            "https://tripwishlist.com/wp-content/uploads/2024/01/Crete-Best-Greek-Islands.png"
        ],
        description: "Perched on dramatic cliffs, Santorini is a canvas of white and blue perfection where luxury meets mythology. Float in infinity pools overlooking the caldera, wander through charming villages, and witness the world's most spectacular sunsets.",
        tags: ["Paradise", "Luxury", "Romance"],
        rating: 4.9,
        price: "$250/day",
        details: {
            bestTime: "May-June or Sept-Oct",
            attractions: [
                "Oia sunset views",
                "Infinity pools",
                "Blue-domed churches",
                "Volcanic beaches",
                "Ancient Akrotiri"
            ],
            culture: "Greek hospitality meets luxury living, with traditional tavernas and wine culture.",
            transportation: "Private tours, car services, ATVs, and water taxis.",
            mustTry: [
                "Wine tasting",
                "Fresh seafood",
                "Sailing trips",
                "Cooking class",
                "Caldera views"
            ]
        }
    },
    {
        id: 5,
        name: "New York City, USA",
        images: [
            "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
            "https://www.aroundtheworldl.com/wp-content/uploads/2015/04/DSC02105-1.jpg.webp",
            "https://assets.architecturaldigest.in/photos/62c2f9a5fbcacb5a1f2d3ce3/4:3/w_1363,h_1022,c_limit/Central%20Park%20Tower%20Exterior.jpg"
        ],
        description: "Experience the electric pulse of NYC, where every neighborhood is a new world and every moment is an opportunity. From hidden speakeasies to rooftop gardens, secret art galleries to Michelin-starred food trucks—the city that never sleeps always surprises.",
        tags: ["Art", "Culture", "Nightlife"],
        rating: 4.7,
        price: "$300/day",
        details: {
            bestTime: "May or Sept-Oct",
            attractions: [
                "SUMMIT One Vanderbilt",
                "East Village speakeasies",
                "High Line & Chelsea Market",
                "Rooftop movies",
                "Harlem jazz clubs"
            ],
            culture: "Global melting pot where arts, finance, food, and culture collide.",
            transportation: "Subway, Citi Bikes, rideshare apps, and yellow cabs.",
            mustTry: [
                "Brooklyn pizza",
                "Deli bagels",
                "Food truck tours",
                "Craft cocktails",
                "Chinatown dim sum"
            ]
        }
    },
    {
        id: 6,
        name: "Machu Picchu, Peru",
        images: [
            "https://www.incatrailmachu.com/img/machu-picchu-02-011.jpg",
            "https://www.savacations.com/wp-content/uploads/2014/09/Chile-Moai-Anakena-Beach.jpg",
            "https://travel.home.sndimg.com/content/dam/images/travel/fullset/2012/06/06/38/machu-picchu_ss_001.rend.hgtvcom.616.462.suffix/1491581850449.jpeg"
        ],
        description: "Journey to the mystical Lost City of the Incas, where ancient stones whisper secrets and misty peaks touch the clouds. Trek through the Sacred Valley, discover hidden temples, and witness a sunrise that will forever change how you see the world.",
        tags: ["Ancient", "Mountain Magic", "Adventure"],
        rating: 4.8,
        price: "$180/day",
        details: {
            bestTime: "May-Oct (Dry Season)",
            attractions: [
                "Sun Gate sunrise",
                "Moon Temple",
                "Sacred Valley",
                "Huayna Picchu",
                "Incan observatories"
            ],
            culture: "Living Incan traditions with weaving, ceremonies, and ancient practices.",
            transportation: "Scenic trains and hiking trails.",
            mustTry: [
                "Pachamanca feast",
                "Shaman ceremonies",
                "Local coffee",
                "Craft beer",
                "Andean healing"
            ]
        }
    },
    {
        id: 7,
        name: "Dubai, UAE",
        images: [
            "https://bsmedia.business-standard.com/_media/bs/img/article/2024-10/21/full/1729486826-6805.jpg",
            "https://travel.usnews.com/images/Burj_Khalifa_3_Getty.jpg",
            "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/b8/9c/3a.jpg"
        ],
        description: "Welcome to the city of tomorrow, where golden sunsets meet futuristic skylines. Dubai pushes the boundaries of possibility with underwater restaurants, indoor ski slopes, and hotels that touch the clouds—a playground where luxury knows no limits.",
        tags: ["Luxury", "Beaches", "Desert Glamour"],
        rating: 4.7,
        price: "$400/day",
        details: {
            bestTime: "Nov-March or July",
            attractions: [
                "Burj Khalifa",
                "Atlantis underwater suites",
                "World Islands",
                "Helicopter tours",
                "Desert safaris"
            ],
            culture: "Modern luxury meets Arabian tradition with gold-plated experiences.",
            transportation: "Luxury cars, chauffeurs, metro, and seaplanes.",
            mustTry: [
                "Arabic coffee",
                "Fusion dining",
                "Friday brunch",
                "Desert dining",
                "High tea"
            ]
        }
    },
    {
        id: 8,
        name: "Maldives",
        images: [
            "https://vajiram-prod.s3.ap-south-1.amazonaws.com/Key_Facts_about_Maldives_ac38a6f4f7.webp",
            "https://imgcdn.flamingotravels.co.in/Images/PlacesOfInterest/bioluminescent-beach-maldives.jpg",
            "https://cache.marriott.com/content/dam/marriott-renditions/MLEJS/mlejs-duplex-exterior-5267-hor-feat.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1920px:*"
        ],
        description: "Float in a world where turquoise meets infinity, where underwater restaurants serve champagne beneath passing manta rays, and where your private villa hovers between stars and sea. The Maldives isn't just paradise—it's paradise reimagined.",
        tags: ["Paradise", "Ocean Dreams", "Adventure"],
        rating: 4.9,
        price: "$500/day",
        details: {
            bestTime: "Dec-April or May-Nov",
            attractions: [
                "Overwater villas",
                "Underwater spa",
                "Bioluminescent beaches",
                "Private sandbanks",
                "Submarine dining"
            ],
            culture: "Luxury island life with focus on sustainability and local traditions.",
            transportation: "Seaplanes, yachts, and traditional dhonis.",
            mustTry: [
                "Floating breakfast",
                "Private chef dining",
                "Underwater wine",
                "Local cooking",
                "Sunset fishing"
            ]
        }
    }
];

// Function to create destination cards

function createDestinationCards() {
    const container = document.getElementById('destinations-container');
    
    destinations.forEach((destination, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        
        // Create image carousel HTML with dots
        const imagesHTML = destination.images.map((img, imgIndex) => `
            <img src="${img}" 
                alt="${destination.name} - Image ${imgIndex + 1}" 
                class="destination-image" 
                style="opacity: ${imgIndex === 0 ? '1' : '0'}"
                data-destination="${index}"
                data-index="${imgIndex}">
        `).join('');
        
        const dotsHTML = destination.images.map((_, imgIndex) => `
            <div class="carousel-dot ${imgIndex === 0 ? 'active' : ''}"
                 data-destination="${index}"
                 data-index="${imgIndex}"
                 onclick="changeImage(${index}, ${imgIndex})"></div>
        `).join('');

        slide.innerHTML = `
            <div class="destination-card">
                <div class="destination-tags">
                    ${destination.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="destination-images-carousel">
                    ${imagesHTML}
                    <div class="carousel-buttons">
                        ${dotsHTML}
                    </div>
                </div>
                <div class="destination-info">
                    <h3>${destination.name}</h3>
                    <p>${destination.description}</p>
                    <div class="basic-details">
                        <span>⭐ ${destination.rating}</span>
                        <span>💰 ${destination.price}</span>
                    </div>
                </div>
                <div class="destination-overlay">
                    <div class="destination-overlay-content">
                        <h3>${destination.name}</h3>
                        <p><strong>Best Time to Visit:</strong><br>${destination.details.bestTime}</p>
                        <p><strong>Must-See Attractions:</strong></p>
                        <ul>
                            ${destination.details.attractions.map(attraction => 
                                `<li>${attraction}</li>`).join('')}
                        </ul>
                        <p><strong>Local Culture:</strong><br>${destination.details.culture}</p>
                        <p><strong>Getting Around:</strong><br>${destination.details.transportation}</p>
                        <p><strong>Must-Try Experiences:</strong></p>
                        <ul>
                            ${destination.details.mustTry.map(item => 
                                `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(slide);
    });

    // Initialize Swiper
    const swiper = new Swiper('.destinations-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false, // Changed to false
        loop: true,
        loopedSlides: destinations.length * 2, // Double the number of slides
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
        watchSlidesProgress: true,
        loopFillGroupWithBlank: false,
        loopPreventsSlide: false
    });
}

// Function to change images in the destination cards
function changeImage(destinationIndex, newIndex) {
    const images = document.querySelectorAll(`img[data-destination="${destinationIndex}"]`);
    const dots = document.querySelectorAll(`.carousel-dot[data-destination="${destinationIndex}"]`);
    
    // Hide all images
    images.forEach(img => img.style.opacity = '0');
    
    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show selected image and activate corresponding dot
    images[newIndex].style.opacity = '1';
    dots[newIndex].classList.add('active');
}

// Start automatic image rotation for each destination
function startImageRotation() {
    destinations.forEach((_, destinationIndex) => {
        let currentIndex = 0;
        setInterval(() => {
            currentIndex = (currentIndex + 1) % 3; // Assuming 3 images per destination
            changeImage(destinationIndex, currentIndex);
        }, 5000); // Change image every 5 seconds
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createDestinationCards();
    startImageRotation();
});