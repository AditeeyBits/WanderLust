// Function to search flights
async function searchFlights() {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
    const passengers = document.getElementById('passengers').value;
    const travelClass = document.getElementById('class').value;

    const resultsContainer = document.getElementById('search-results');
    
    try {
        // Show loading state
        resultsContainer.style.display = 'grid';
        resultsContainer.innerHTML = `
            <div class="result-card">
                <div class="loading">
                    <i class="fas fa-spinner fa-spin"></i>
                    <p>Searching flights...</p>
                </div>
            </div>
        `;

        const response = await fetch('http://localhost:3002/api/flights/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                origin,
                destination,
                departureDate,
                returnDate,
                adults: passengers,
                travelClass
            })
        });

        const data = await response.json();
        displayFlightResults(data);
    } catch (error) {
        console.error('Error searching flights:', error);
        resultsContainer.innerHTML = `
            <div class="result-card">
                <div class="error-message">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Unable to fetch flight information. Please try again.</p>
                </div>
            </div>
        `;
    }
}
function displayFlightResults(data) {
    const resultsContainer = document.getElementById('search-results');
    
    // Helper function to format time
    function formatTime(dateString) {
        return new Date(dateString).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false
        });
    }

    if (!data.data || data.data.length === 0) {
        resultsContainer.innerHTML = `
            <div class="result-card empty-results">
                <i class="fas fa-plane-slash"></i>
                <p>No flights found for the selected criteria.</p>
            </div>
        `;
        return;
    }

    const flights = data.data.slice(0, 5); // Display top 5 results
    
    resultsContainer.innerHTML = `
        <div class="results-wrapper">
            <h3 class="results-title"><i class="fas fa-plane"></i> Available Flights</h3>
            ${flights.map((flight, index) => `
                <div class="flight-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="flight-header">
                        <div class="airline-info">
                            <i class="fas fa-plane-departure"></i>
                            <span class="airline">${flight.validatingAirlineCodes[0]}</span>
                        </div>
                        <div class="price-tag">
                            <span class="currency">${flight.price.currency}</span>
                            <span class="amount">${flight.price.total}</span>
                        </div>
                    </div>
                    
                    <div class="flight-details">
                        <div class="route-info">
                            <div class="departure">
                                <h4>Departure</h4>
                                <div class="time">${formatTime(flight.itineraries[0].segments[0].departure.at)}</div>
                                <div class="location">${flight.itineraries[0].segments[0].departure.iataCode}</div>
                                <div class="date">${new Date(flight.itineraries[0].segments[0].departure.at).toLocaleDateString()}</div>
                            </div>
                            
                            <div class="flight-path">
                                <div class="duration">${flight.itineraries[0].duration.replace('PT', '')}</div>
                                <div class="path-line">
                                    <div class="line"></div>
                                    <i class="fas fa-plane"></i>
                                </div>
                                <div class="stops">${flight.itineraries[0].segments.length - 1} stop(s)</div>
                            </div>
                            
                            <div class="arrival">
                                <h4>Arrival</h4>
                                <div class="time">${formatTime(flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.at)}</div>
                                <div class="location">${flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.iataCode}</div>
                                <div class="date">${new Date(flight.itineraries[0].segments[flight.itineraries[0].segments.length - 1].arrival.at).toLocaleDateString()}</div>
                            </div>
                        </div>
                    </div>

                    <div class="flight-footer">
                        <div class="flight-info">
                            <span class="seats"><i class="fas fa-chair"></i> ${flight.numberOfBookableSeats} seats left</span>
                            <span class="cabin"><i class="fas fa-couch"></i> ${flight.travelerPricings[0].fareDetailsBySegment[0].cabin}</span>
                        </div>
                        <button class="book-btn" onclick="window.open('https://www.amadeus.com', '_blank')">
                            Book Now <i class="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}
// Search flights function
async function searchFlights() {
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departure-date').value;
    const returnDate = document.getElementById('return-date').value;
    const passengers = document.getElementById('passengers').value;
    const travelClass = document.getElementById('class').value;

    // Validate inputs
    if (!origin || !destination || !departureDate || !passengers) {
        alert('Please fill in all required fields');
        return;
    }

    const resultsContainer = document.getElementById('search-results');
    
    try {
        // Show loading state
        resultsContainer.style.display = 'grid';
        resultsContainer.innerHTML = `
            <div class="result-card">
                <div class="loading">
                    <i class="fas fa-spinner fa-spin"></i>
                    <p>Searching flights...</p>
                </div>
            </div>
        `;

        const response = await fetch('http://localhost:3002/api/flights/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                origin,
                destination,
                departureDate,
                returnDate,
                adults: passengers,
                travelClass
            })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch flight data');
        }

        const data = await response.json();
        displayFlightResults(data);
    } catch (error) {
        console.error('Error searching flights:', error);
        resultsContainer.innerHTML = `
            <div class="result-card">
                <div class="error-message">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Unable to fetch flight information. Please try again.</p>
                </div>
            </div>
        `;
    }
}

// Setup city autocomplete functionality
function setupCityAutocomplete(inputId) {
    const input = document.getElementById(inputId);
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'suggestions-dropdown';
    input.parentNode.appendChild(suggestionsContainer);

    let debounceTimer;

    input.addEventListener('input', async () => {
        const query = input.value.trim();
        
        // Clear previous timer
        clearTimeout(debounceTimer);

        if (query.length < 2) {
            suggestionsContainer.style.display = 'none';
            return;
        }

        // Set new timer
        debounceTimer = setTimeout(async () => {
            try {
                const response = await fetch(`http://localhost:3002/api/cities/suggest/${encodeURIComponent(query)}`);
                const suggestions = await response.json();
                
                if (suggestions.length > 0) {
                    suggestionsContainer.innerHTML = suggestions.map(city => `
                        <div class="suggestion-item">
                            <i class="fas fa-city"></i>
                            ${city}
                        </div>
                    `).join('');
                    suggestionsContainer.style.display = 'block';

                    // Add click handlers to suggestions
                    suggestionsContainer.querySelectorAll('.suggestion-item').forEach(item => {
                        item.addEventListener('click', () => {
                            input.value = item.textContent.trim();
                            suggestionsContainer.style.display = 'none';
                        });
                    });
                } else {
                    suggestionsContainer.style.display = 'none';
                }
            } catch (error) {
                console.error('Error fetching city suggestions:', error);
                suggestionsContainer.style.display = 'none';
            }
        }, 300); // 300ms delay for debouncing
    });

    // Handle keyboard navigation
    input.addEventListener('keydown', (e) => {
        const items = suggestionsContainer.querySelectorAll('.suggestion-item');
        const activeItem = suggestionsContainer.querySelector('.suggestion-item.active');
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (!activeItem) {
                    items[0]?.classList.add('active');
                } else {
                    const nextItem = activeItem.nextElementSibling;
                    if (nextItem) {
                        activeItem.classList.remove('active');
                        nextItem.classList.add('active');
                    }
                }
                break;
                
            case 'ArrowUp':
                e.preventDefault();
                if (activeItem) {
                    const prevItem = activeItem.previousElementSibling;
                    if (prevItem) {
                        activeItem.classList.remove('active');
                        prevItem.classList.add('active');
                    }
                }
                break;
                
            case 'Enter':
                if (activeItem) {
                    e.preventDefault();
                    input.value = activeItem.textContent.trim();
                    suggestionsContainer.style.display = 'none';
                }
                break;
                
            case 'Escape':
                suggestionsContainer.style.display = 'none';
                break;
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });

    // Add focus event to show suggestions if input has value
    input.addEventListener('focus', async () => {
        const query = input.value.trim();
        if (query.length >= 2) {
            const response = await fetch(`http://localhost:3002/api/cities/suggest/${encodeURIComponent(query)}`);
            const suggestions = await response.json();
            if (suggestions.length > 0) {
                suggestionsContainer.innerHTML = suggestions.map(city => `
                    <div class="suggestion-item">
                        <i class="fas fa-city"></i>
                        ${city}
                    </div>
                `).join('');
                suggestionsContainer.style.display = 'block';
            }
        }
    });
}

// Set minimum date for departure and return date inputs
function setupDateInputs() {
    const today = new Date().toISOString().split('T')[0];
    const departureInput = document.getElementById('departure-date');
    const returnInput = document.getElementById('return-date');
    
    departureInput.min = today;
    
    departureInput.addEventListener('change', () => {
        returnInput.min = departureInput.value;
        if (returnInput.value && returnInput.value < departureInput.value) {
            returnInput.value = departureInput.value;
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupCityAutocomplete('origin');
    setupCityAutocomplete('destination');
    setupDateInputs();
});