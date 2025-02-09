// Comprehensive experiences data
const experiences = [
    {
        id: 1,
        title: "Adventure Seekers",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/23/ec/5c/solheimasandur-dc-wreck.jpg?w=1200&h=900&s=1",
        shortDesc: "Push your limits in the world's most thrilling locations",
        fullDesc: "From scaling hidden peaks to diving with sharks, discover adventures that will redefine your limits.",
        activities: [
            {
                name: "Ice Cave Exploration - Iceland",
                description: "Journey into crystal blue caves beneath Europe's largest glacier",
                duration: "4-6 hours",
                difficulty: "Moderate",
                price: "$199",
                includes: ["Expert guides", "Safety equipment", "Hot beverages", "Photo opportunities"],
                image: "https://www.lingerabroad.com/wp-content/uploads/2017/01/ICELAND-2016_1563.jpg"

            },
            {
                name: "Desert Stargazing Safari - Dubai",
                description: "Luxury camping under the stars with professional astronomers",
                duration: "Overnight",
                difficulty: "Easy",
                price: "$299",
                includes: ["Luxury tent", "Gourmet dinner", "Telescope session", "Sunrise yoga"],
                image: "https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/WBPMLIX6U5G6MW3ZNAD3KVGYWQ.jpg"

            },
            {
                name: "Volcano Helicopter Tour - Hawaii",
                description: "Witness active lava flows from a bird's eye view",
                duration: "2 hours",
                difficulty: "Easy",
                price: "$399",
                includes: ["Aerial tour", "Landing at secret locations", "Professional photos"],
                image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/7e/de/b0.jpg"

            }
        ]
    },
    {
        id: 2,
        title: "Cultural Immersion",
        image: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/ebenfxbj6pl87vhp8fqs?_a=BACADKGT",
        shortDesc: "Connect with ancient traditions and local communities",
        fullDesc: "Immerse yourself in authentic cultural experiences that go beyond typical tourism.",
        activities: [
            {
                name: "Secret Tea Ceremony - Kyoto",
                description: "Traditional tea ceremony in a 400-year-old hidden temple",
                duration: "3 hours",
                difficulty: "Easy",
                price: "$150",
                includes: ["Traditional dress rental", "Tea master session", "Temple tour", "Photo session"],
                image: "https://mai-ko.com/images/tea-ceremony/tea-ceremony-gion-02.jpg"

            },
            {
                name: "Moroccan Artisan Workshop",
                description: "Learn ancient crafts in the heart of Fez Medina",
                duration: "Full day",
                difficulty: "Easy",
                price: "$180",
                includes: ["Materials", "Lunch with artisans", "Take-home creation"],
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTroza28EZp695tI4jEXR-IQFxcB8NqNkvPqw&s"

            },
            {
                name: "Indigenous Amazon Experience",
                description: "Live with an indigenous tribe and learn their ways",
                duration: "3 days",
                difficulty: "Moderate",
                price: "$599",
                includes: ["Accommodation", "Traditional meals", "Ritual ceremonies", "Jungle skills"],
                image: "https://amazonfrontlines.org/wp-content/uploads/2024/06/strengthen-our-movement-sq.jpg"

            }
        ]
    },
    {
        id: 3,
        title: "Culinary Journeys",
        image: "https://www.tajsats.com/uploads/content/culinaryexcellence-img1.webp",
        shortDesc: "Explore world-class cuisine and hidden food scenes",
        fullDesc: "From street food tours to Michelin-starred experiences, discover the world through taste.",
        activities: [
            {
                name: "Hidden Tokyo Food Tour",
                description: "Access invitation-only restaurants and secret sake bars",
                duration: "5 hours",
                difficulty: "Easy",
                price: "$250",
                includes: ["7+ food stops", "Sake tasting", "Local food expert", "Secret venue access"],
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXIngAWOxdLBwyil1Fg7rgg7o1MtOyaCF7Fg&s"

            },
            {
                name: "Tuscan Villa Cooking Retreat",
                description: "Cook with local nonnas in a 16th-century villa",
                duration: "2 days",
                difficulty: "Easy",
                price: "$499",
                includes: ["Villa stay", "Wine tasting", "Cooking classes", "Market visits"],
                image: "https://cdn4.tuscanynowandmore.com/storage/app/uploads/public/75b/7b5/7b7/thumb__1920_0_0_0_auto.jpg"

            },
            {
                name: "Bangkok Street Food Safari",
                description: "Explore hidden streets and secret family recipes",
                duration: "4 hours",
                difficulty: "Easy",
                price: "$120",
                includes: ["10+ tastings", "Local guide", "Secret spots", "Recipe book"],
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKr1mCpqMOR3F1G8RDXTbDCmnNV3WxJJtYhQ&s"

            }
        ]
    },
    {
        id: 4,
        title: "Mindful Retreats",
        image: "https://scdn.aro.ie/Sites/50/anandaspa/uploads/images/PanelImages/General/Meditation_1.jpg",
        shortDesc: "Transform your mind and body in extraordinary locations",
        fullDesc: "Discover ancient healing practices and modern wellness techniques in stunning settings.",
        activities: [
            {
                name: "Himalayan Meditation Retreat",
                description: "Ancient practices in remote mountain monasteries",
                duration: "5 days",
                difficulty: "Moderate",
                price: "$899",
                includes: ["Monastery stay", "Daily practices", "Healing sessions", "Mountain guides"],
                image: "https://photos.tpn.to/of/fg/me/sr/1600x900.jpg"

            },
            {
                name: "Bali Sound Healing Journey",
                description: "Traditional sound healing in sacred water temples",
                duration: "1 day",
                difficulty: "Easy",
                price: "$199",
                includes: ["Healing session", "Temple access", "Traditional lunch", "Transport"],
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/10/51/3d/caption.jpg?w=1200&h=-1&s=1"

            },
            {
                name: "Dead Sea Wellness Experience",
                description: "Luxury spa treatments and floating meditation",
                duration: "3 days",
                difficulty: "Easy",
                price: "$699",
                includes: ["Spa treatments", "Floating sessions", "Yoga classes", "Healthy meals"],
                image: "https://m.economictimes.com/thumb/msid-63397071,width-1600,height-900,resizemode-4,imgsize-311447/soak-in-the-dead-sea-or-walk-the-calcite-cliff-in-turkey-here-are-the-best-wellness-getaways.jpg"

            }
        ]
    }
];

// Function to create experience cards
function createExperienceCards() {
    const container = document.querySelector('.experiences-container');
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing content
    
    experiences.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'experience-card';
        card.setAttribute('data-id', exp.id);
        
        card.innerHTML = `
            <img src="${exp.image}" alt="${exp.title}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${exp.title}</h3>
                <p class="card-description">${exp.shortDesc}</p>
                <div class="card-footer">
                    <span class="price">From ${exp.activities[0].price}</span>
                    <button class="explore-btn" data-id="${exp.id}">Explore More</button>
                </div>
            </div>
        `;
        
        container.appendChild(card);
        
        // Add click event to the explore button
        const exploreBtn = card.querySelector('.explore-btn');
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            showExperience(exp.id);
        });
    });
}

// Function to show experience details
function showExperience(id) {
    const exp = experiences.find(e => e.id === id);
    if (!exp) return;
    
    // Remove any existing expanded content
    const existingExpanded = document.querySelector('.expanded-content');
    if (existingExpanded) {
        existingExpanded.remove();
    }
    
    // Remove active class from all cards
    document.querySelectorAll('.experience-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Add active class to selected card
    const selectedCard = document.querySelector(`[data-id="${id}"]`);
    if (!selectedCard) return;
    selectedCard.classList.add('active');
    
    // Create expanded content
    const expandedContent = document.createElement('div');
    expandedContent.className = 'expanded-content active';
    
    expandedContent.innerHTML = `
        <button class="close-expanded" aria-label="Close details">&times;</button>
        <h2 class="section-title">${exp.title}</h2>
        <p class="section-subtitle">${exp.fullDesc}</p>
        
        <div class="activity-images">
            ${exp.activities.map(activity => `
                <img src="${activity.image}" 
                     alt="${activity.name}"
                     loading="lazy">
            `).join('')}
        </div>
        
        <div class="activities-grid">
            ${exp.activities.map(activity => `
                <div class="activity-card">
                    <div class="activity-header">
                        <h3 class="activity-title">${activity.name}</h3>
                        <span class="activity-price">${activity.price}</span>
                    </div>
                    <p>${activity.description}</p>
                    <div class="activity-details">
                        <div class="detail-item">
                            <i class="fas fa-clock"></i>
                            <span>${activity.duration}</span>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-mountain"></i>
                            <span>${activity.difficulty}</span>
                        </div>
                    </div>
                    <div class="includes">
                        <h4>Includes:</h4>
                        <ul>
                            ${activity.includes.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    // Insert expanded content after the current row
    const cardIndex = Array.from(selectedCard.parentElement.children).indexOf(selectedCard);
    const cardsPerRow = Math.floor(selectedCard.parentElement.offsetWidth / selectedCard.offsetWidth);
    const insertAfterIndex = Math.floor(cardIndex / cardsPerRow) * cardsPerRow + cardsPerRow - 1;
    const insertAfterElement = selectedCard.parentElement.children[insertAfterIndex] || selectedCard;
    
    insertAfterElement.insertAdjacentElement('afterend', expandedContent);
    
    // Add close button functionality
    const closeButton = expandedContent.querySelector('.close-expanded');
    closeButton.addEventListener('click', () => {
        expandedContent.remove();
        selectedCard.classList.remove('active');
    });
    
    // Smooth scroll to expanded content
    setTimeout(() => {
        expandedContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', createExperienceCards);