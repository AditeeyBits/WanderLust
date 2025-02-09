class TravelPlanner {
    constructor() {
        this.baseUrl = 'http://localhost:3002/api';
        this.init();
    }

    async init() {
        const searchBtn = document.querySelector('.search-btn');
        const destinationInput = document.querySelector('.search-box input[type="text"]');
        
        // Create suggestions dropdown
        const suggestionsDropdown = document.createElement('div');
        suggestionsDropdown.className = 'suggestions-dropdown';
        suggestionsDropdown.style.display = 'none';
        document.querySelector('.search-container').appendChild(suggestionsDropdown);

        // Handle input changes
        destinationInput.addEventListener('input', async (e) => {
            const query = e.target.value.trim();
            if (query.length >= 1) {
                const suggestions = await this.getCitySuggestions(query);
                this.showSuggestions(suggestions, destinationInput, suggestionsDropdown);
            } else {
                suggestionsDropdown.style.display = 'none';
            }
        });

        // Close suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                suggestionsDropdown.style.display = 'none';
            }
        });

        // Handle search button click
        searchBtn.addEventListener('click', () => this.handleSearch(destinationInput.value));

        // Handle enter key
        destinationInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleSearch(destinationInput.value);
                suggestionsDropdown.style.display = 'none';
            }
        });
    }

    async getCitySuggestions(query) {
        try {
            const response = await fetch(`${this.baseUrl}/cities/suggest/${encodeURIComponent(query)}`);
            const suggestions = await response.json();
            return suggestions;
        } catch (error) {
            console.error('Error fetching suggestions:', error);
            return [];
        }
    }

    showSuggestions(suggestions, input, dropdown) {
        if (suggestions.length === 0) {
            dropdown.style.display = 'none';
            return;
        }

        dropdown.innerHTML = suggestions
            .map(city => `
                <div class="suggestion-item">
                    <i class="fas fa-map-marker-alt"></i>
                    ${city}
                </div>
            `)
            .join('');

        dropdown.style.display = 'block';

        // Handle suggestion clicks
        const suggestionItems = dropdown.querySelectorAll('.suggestion-item');
        suggestionItems.forEach(item => {
            item.addEventListener('click', () => {
                input.value = item.textContent.trim();
                dropdown.style.display = 'none';
                this.handleSearch(input.value);
            });
        });
    }

    async handleSearch(destination) {
        try {
            if (!destination) {
                throw new Error('Please enter a destination');
            }

            this.showLoadingState();

            const [distanceData, weatherData] = await Promise.all([
                this.getDistance(destination),
                this.getWeather(destination)
            ]);

            this.displayResults(distanceData, weatherData);
        } catch (error) {
            console.error('Error:', error);
            this.showError(error.message || 'Failed to fetch data');
        }
    }

    async getDistance(destination) {
        const response = await fetch(`${this.baseUrl}/distance`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ destination })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to fetch distance data');
        }
        return response.json();
    }

    async getWeather(city) {
        const response = await fetch(`${this.baseUrl}/weather/${encodeURIComponent(city)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        return response.json();
    }

    showLoadingState() {
        const resultsDiv = document.createElement('div');
        resultsDiv.className = 'results-container';
        resultsDiv.innerHTML = `
            <div class="loading-spinner">
                <i class="fas fa-spinner fa-spin"></i>
                <p>Finding information...</p>
            </div>
        `;
        this.updateResults(resultsDiv);
    }

    showError(message) {
        const resultsDiv = document.createElement('div');
        resultsDiv.className = 'results-container';
        resultsDiv.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <p>${message}</p>
            </div>
        `;
        this.updateResults(resultsDiv);
    }

    displayResults(distanceData, weatherData) {
        const resultsDiv = document.createElement('div');
        resultsDiv.className = 'results-container';
        
        resultsDiv.innerHTML = `
            <div class="distance-info">
                <i class="fas fa-route"></i>
                <h3>Distance from Bangalore</h3>
                <div class="distance-value">${distanceData.distance}</div>
            </div>
            <div class="weather-info">
                <i class="fas fa-cloud-sun"></i>
                <h3>Weather in ${weatherData.city}</h3>
                <div class="temperature">${Math.round(weatherData.currentTemp)}°C</div>
                <div class="description">${weatherData.description}</div>
            </div>
        `;
    
        this.updateResults(resultsDiv);
    }

    updateResults(resultsDiv) {
        const heroContent = document.querySelector('.hero-content');
        const existingResults = heroContent.querySelector('.results-container');
        if (existingResults) {
            existingResults.remove();
        }
        heroContent.appendChild(resultsDiv);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TravelPlanner();
});