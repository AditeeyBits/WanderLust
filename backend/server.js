        const express = require('express');
        const cors = require('cors');
        const axios = require('axios');
        require('dotenv').config();

        console.log('Checking API Keys:', {
            weatherKey: process.env.WEATHER_API_KEY?.substring(0, 4) + '...',
            amadeusId: process.env.AMADEUS_CLIENT_ID?.substring(0, 4) + '...',
            amadeusSecret: process.env.AMADEUS_CLIENT_SECRET?.substring(0, 4) + '...'
        });

        const app = express();

        app.use(cors());
        app.use(express.json());

        const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
        const AMADEUS_CLIENT_ID = process.env.AMADEUS_CLIENT_ID;
        const AMADEUS_CLIENT_SECRET = process.env.AMADEUS_CLIENT_SECRET;
        const AMADEUS_BASE_URL_V1 = 'https://test.api.amadeus.com/v1';
        const AMADEUS_BASE_URL_V2 = 'https://test.api.amadeus.com/v2';

        let amadeusToken = null;
        let tokenExpiration = null;


            console.log('Checking Amadeus credentials:', {
            clientId: process.env.AMADEUS_CLIENT_ID ? 'Present' : 'Missing',
            clientSecret: process.env.AMADEUS_CLIENT_SECRET ? 'Present' : 'Missing'
        });

        if (!AMADEUS_CLIENT_ID || !AMADEUS_CLIENT_SECRET) {
            console.error('Missing Amadeus API credentials in .env file');
            process.exit(1);
        }
        // Hardcoded distances from Bangalore (in km)
        const distancesFromBangalore = {

                'Mumbai, India': 842,
                'Delhi, India': 1740,
                'Chennai, India': 284,
                'Kolkata, India': 1561,
                'Hyderabad, India': 572,
                'Pune, India': 841,
                'Ahmedabad, India': 1235,
                'Jaipur, India': 1760,
                'Lucknow, India': 1854,
                'Goa, India': 565,
                'Mysore, India': 144,
                'Karachi, Pakistan': 1727,
                'Lahore, Pakistan': 2064,
                'Dhaka, Bangladesh': 1862,
                'Kathmandu, Nepal': 1593,
                'Colombo, Sri Lanka': 702,
                'Malé, Maldives': 1082,
                'Dubai, UAE': 2704,
                'Abu Dhabi, UAE': 2764,
                'Doha, Qatar': 2946,
                'Muscat, Oman': 2491,
                'Kuwait City, Kuwait': 3541,
                'Riyadh, Saudi Arabia': 3772,
                'Jeddah, Saudi Arabia': 4122,
                'Tehran, Iran': 3794,
                'Baghdad, Iraq': 4260,
                'Damascus, Syria': 5211,
                'Istanbul, Turkey': 6337,
                'Bangkok, Thailand': 2484,
                'Singapore': 3173,
                'Kuala Lumpur, Malaysia': 2889,
                'Jakarta, Indonesia': 3643,
                'Beijing, China': 4745,
                'Shanghai, China': 4785,
                'Hong Kong': 3663,
                'Taipei, Taiwan': 4814,
                'Hanoi, Vietnam': 3146,
                'Phnom Penh, Cambodia': 2846,
                'Yangon, Myanmar': 1916,
                'Tokyo, Japan': 6595,
                'Osaka, Japan': 6421,
                'Seoul, South Korea': 5617,
                'Ulaanbaatar, Mongolia': 4938,
                'London, UK': 8026,
                'Manchester, UK': 7954,
                'Birmingham, UK': 7918,
                'Edinburgh, UK': 8311,
                'Paris, France': 7894,
                'Marseille, France': 7762,
                'Lyon, France': 7755,
                'Berlin, Germany': 7340,
                'Munich, Germany': 7078,
                'Frankfurt, Germany': 7280,
                'Hamburg, Germany': 7481,
                'Madrid, Spain': 8786,
                'Barcelona, Spain': 8554,
                'Valencia, Spain': 8734,
                'Rome, Italy': 7473,
                'Milan, Italy': 7293,
                'Venice, Italy': 7220,
                'Zurich, Switzerland': 7441,
                'Geneva, Switzerland': 7422,
                'Brussels, Belgium': 7849,
                'Amsterdam, Netherlands': 7758,
                'Copenhagen, Denmark': 7270,
                'Oslo, Norway': 7229,
                'Stockholm, Sweden': 7251,
                'Helsinki, Finland': 7040,
                'Athens, Greece': 6582,
                'Lisbon, Portugal': 8804,
                'Vienna, Austria': 7102,
                'Dublin, Ireland': 8454,
                'Reykjavik, Iceland': 9482,
                'Moscow, Russia': 5913,
                'Saint Petersburg, Russia': 6042,
                'Kiev, Ukraine': 5784,
                'Cairo, Egypt': 6082,
                'Alexandria, Egypt': 6238,
                'Casablanca, Morocco': 8600,
                'Marrakech, Morocco': 8770,
                'Lagos, Nigeria': 7273,
                'Abuja, Nigeria': 7051,
                'Nairobi, Kenya': 4885,
                'Cape Town, South Africa': 7968,
                'Johannesburg, South Africa': 7728,
                'Durban, South Africa': 7550,
                'Addis Ababa, Ethiopia': 4795,
                'Accra, Ghana': 7462,
                'New York, USA': 13373,
                'Los Angeles, USA': 14534,
                'Chicago, USA': 13436,
                'Houston, USA': 14628,
                'San Francisco, USA': 14152,
                'Dallas, USA': 14428,
                'Miami, USA': 14792,
                'Toronto, Canada': 13192,
                'Vancouver, Canada': 12341,
                'Montreal, Canada': 13452,
                'Mexico City, Mexico': 16157,
                'São Paulo, Brazil': 14124,
                'Rio de Janeiro, Brazil': 14414,
                'Buenos Aires, Argentina': 15784,
                'Lima, Peru': 16642,
                'Santiago, Chile': 16672,
                'Bogotá, Colombia': 15291,
                'Quito, Ecuador': 15690,
                'Sydney, Australia': 9291,
                'Melbourne, Australia': 9414,
                'Brisbane, Australia': 9036,
                'Perth, Australia': 7805,
                'Adelaide, Australia': 8927,
                'Auckland, New Zealand': 11880,
                'Wellington, New Zealand': 11480,
                'Christchurch, New Zealand': 11592,
                'Fiji': 11750,
                'Honolulu, Hawaii': 12658,
                'Anchorage, Alaska': 10934,
                'Antarctica (McMurdo Station)': 12580,
                'Tashkent, Uzbekistan': 3746,
                'Baku, Azerbaijan': 4020,
                'Almaty, Kazakhstan': 3361,
                'Ashgabat, Turkmenistan': 3214,
                'Tbilisi, Georgia': 4500,
                'Manila, Philippines': 4726,
                'Ho Chi Minh City, Vietnam': 3180,
                'Vientiane, Laos': 2830,
                'Ulan-Ude, Russia': 5005,
                'Warsaw, Poland': 6524,
                'Prague, Czech Republic': 7041,
                'Budapest, Hungary': 6897,
                'Belgrade, Serbia': 6823,
                'Bucharest, Romania': 6330,
                'Zagreb, Croatia': 7111,
                'Sofia, Bulgaria': 6587,
                'Bratislava, Slovakia': 7100,
                'Ljubljana, Slovenia': 7253,
                'Sarajevo, Bosnia & Herzegovina': 6955,
                'Vilnius, Lithuania': 6885,
                'Riga, Latvia': 7052,
                'Tallinn, Estonia': 7240,
                'Chisinau, Moldova': 6425,
                'Podgorica, Montenegro': 6905,
                'Skopje, North Macedonia': 6738,
                'Tirana, Albania': 6802,
                'Washington D.C., USA': 13479,
                'Boston, USA': 13425,
                'Seattle, USA': 12482,
                'Las Vegas, USA': 14568,
                'San Diego, USA': 14472,
                'Phoenix, USA': 14651,
                'Denver, USA': 13856,
                'Philadelphia, USA': 13409,
                'Ottawa, Canada': 13295,
                'Calgary, Canada': 12167,
                'Winnipeg, Canada': 12789,
                'Edmonton, Canada': 12094,
                'Guadalajara, Mexico': 15824,
                'Monterrey, Mexico': 15462,
                'Cancún, Mexico': 16322,
                'Algiers, Algeria': 7730,
                'Tunis, Tunisia': 7175,
                'Dakar, Senegal': 9772,
                'Luanda, Angola': 7635,
                'Harare, Zimbabwe': 6748,
                'Kampala, Uganda': 5302,
                'Dar es Salaam, Tanzania': 5270,
                'Gaborone, Botswana': 7294,
                'Maputo, Mozambique': 6134,
                'Medellín, Colombia': 15324,
                'Caracas, Venezuela': 14970,
                'La Paz, Bolivia': 16078,
                'Asunción, Paraguay': 15680,
                'Montevideo, Uruguay': 15642,
                'Hobart, Australia': 9863,
                'Darwin, Australia': 6205,
                'Canberra, Australia': 9248,
                'Port Moresby, Papua New Guinea': 6530,
                'Nouméa, New Caledonia': 9765,
                'Apia, Samoa': 11820,
                'Nukuʻalofa, Tonga': 12030,
                'Nuuk, Greenland': 10840,
                'Stanley, Falkland Islands': 15432,
                'Porto-Novo, Benin': 7332,
                'Bissau, Guinea-Bissau': 9644,
                'Honiara, Solomon Islands': 10123,
                'Papeete, French Polynesia': 14621,
                'Majuro, Marshall Islands': 10930,
                'Palikir, Micronesia': 10292,
                'Yamoussoukro, Côte d\'Ivoire': 8354,
                'Gitega, Burundi': 5846,
                'Djibouti City, Djibouti': 4872,
                'Funafuti, Tuvalu': 11085,
                'Suva, Fiji': 11792
        };

        // Cities list for autocomplete
        const cities = Object.keys(distancesFromBangalore);

        // Endpoint to get city suggestions
        app.get('/api/cities/suggest/:query', (req, res) => {
            const { query } = req.params;
            const suggestions = cities.filter(city => 
                city.toLowerCase().startsWith(query.toLowerCase())
            ).slice(0, 5); // Limit to 5 suggestions
            res.json(suggestions);
        });

        // Distance endpoint
        app.post('/api/distance', (req, res) => {
            try {
                const { destination } = req.body;
                const distance = distancesFromBangalore[destination];
                
                if (distance) {
                    res.json({ distance: `${distance} km` });
                } else {
                    res.status(404).json({ error: 'Distance not available for this city' });
                }
            } catch (error) {
                res.status(500).json({ error: 'Failed to calculate distance' });
            }
        });

     // Weather API endpoint

     app.get('/api/weather/:city', async (req, res) => {
        const city = req.params.city;
        
        try {
            // Check if the city exists in our distances list
            if (!distancesFromBangalore.hasOwnProperty(city)) {
                throw new Error('City not found in our database');
            }
    
            // Extract just the city name without the country
            const cityName = city.split(',')[0];
            
            const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
            
            if (!WEATHER_API_KEY) {
                throw new Error('Weather API key is not configured');
            }
    
            // Log the API request URL and parameters
            console.log('Weather API Request:', {
                cityName,
                url: 'https://api.openweathermap.org/data/2.5/weather',
                params: {
                    q: cityName,
                    appid: 'HIDDEN',
                    units: 'metric'
                }
            });
    
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather`, {
                    params: {
                        q: cityName,
                        appid: WEATHER_API_KEY,
                        units: 'metric'
                    }
                }
            );
    
            // Log the raw API response
            console.log('Weather API Response:', {
                status: response.status,
                data: response.data,
                hasMain: !!response.data?.main,
                hasWeather: !!response.data?.weather
            });
    
            // Validate response data
            if (!response.data?.main || !response.data?.weather?.[0]) {
                throw new Error('Invalid response structure from Weather API');
            }
    
            // Simplified response with only requested data
            const weatherData = {
                city: city,
                currentTemp: Math.round(response.data.main.temp),
                description: response.data.weather[0].description,
                icon: response.data.weather[0].icon,
                temp_min: Math.round(response.data.main.temp_min),
                temp_max: Math.round(response.data.main.temp_max)
            };
    
            // Log the formatted response
            console.log('Formatted Weather Data:', weatherData);
    
            res.json(weatherData);
    
        } catch (error) {
            // Enhanced error logging
            console.error('Weather API Error:', {
                city: city,
                message: error.message,
                status: error.response?.status,
                data: error.response?.data,
                stack: error.stack,
                responseStructure: error.response ? {
                    hasData: !!error.response.data,
                    hasMain: !!error.response?.data?.main,
                    hasWeather: !!error.response?.data?.weather
                } : 'No response object'
            });
    
            res.status(error.response?.status || 500).json({ 
                error: 'Failed to fetch weather data',
                details: error.response?.data?.message || error.message,
                city: city
            });
        }
    });  


            // City to IATA code mapping
            const cityToIATACode = {
                'Mumbai, India': 'BOM',
                'Delhi, India': 'DEL',
                'Chennai, India': 'MAA',
                'Kolkata, India': 'CCU',
                'Hyderabad, India': 'HYD',
                'Pune, India': 'PNQ',
                'Ahmedabad, India': 'AMD',
                'Jaipur, India': 'JAI',
                'Lucknow, India': 'LKO',
                'Goa, India': 'GOI',
                'Mysore, India': 'MYQ',
                'Karachi, Pakistan': 'KHI',
                'Lahore, Pakistan': 'LHE',
                'Dhaka, Bangladesh': 'DAC',
                'Kathmandu, Nepal': 'KTM',
                'Colombo, Sri Lanka': 'CMB',
                'Malé, Maldives': 'MLE',
                'Dubai, UAE': 'DXB',
                'Abu Dhabi, UAE': 'AUH',
                'Doha, Qatar': 'DOH',
                'Muscat, Oman': 'MCT',
                'Kuwait City, Kuwait': 'KWI',
                'Riyadh, Saudi Arabia': 'RUH',
                'Jeddah, Saudi Arabia': 'JED',
                'Tehran, Iran': 'IKA',
                'Baghdad, Iraq': 'BGW',
                'Damascus, Syria': 'DAM',
                'Istanbul, Turkey': 'IST',
                'Bangkok, Thailand': 'BKK',
                'Singapore': 'SIN',
                'Kuala Lumpur, Malaysia': 'KUL',
                'Jakarta, Indonesia': 'CGK',
                'Beijing, China': 'PEK',
                'Shanghai, China': 'PVG',
                'Hong Kong': 'HKG',
                'Taipei, Taiwan': 'TPE',
                'Hanoi, Vietnam': 'HAN',
                'Phnom Penh, Cambodia': 'PNH',
                'Yangon, Myanmar': 'RGN',
                'Tokyo, Japan': 'HND',
                'Osaka, Japan': 'KIX',
                'Seoul, South Korea': 'ICN',
                'Ulaanbaatar, Mongolia': 'ULN',
                'London, UK': 'LHR',
                'Manchester, UK': 'MAN',
                'Birmingham, UK': 'BHX',
                'Edinburgh, UK': 'EDI',
                'Paris, France': 'CDG',
                'Marseille, France': 'MRS',
                'Lyon, France': 'LYS',
                'Berlin, Germany': 'BER',
                'Munich, Germany': 'MUC',
                'Frankfurt, Germany': 'FRA',
                'Hamburg, Germany': 'HAM',
                'Madrid, Spain': 'MAD',
                'Barcelona, Spain': 'BCN',
                'Valencia, Spain': 'VLC',
                'Rome, Italy': 'FCO',
                'Milan, Italy': 'MXP',
                'Venice, Italy': 'VCE',
                'Zurich, Switzerland': 'ZRH',
                'Geneva, Switzerland': 'GVA',
                'Brussels, Belgium': 'BRU',
                'Amsterdam, Netherlands': 'AMS',
                'Copenhagen, Denmark': 'CPH',
                'Oslo, Norway': 'OSL',
                'Stockholm, Sweden': 'ARN',
                'Helsinki, Finland': 'HEL',
                'Athens, Greece': 'ATH',
                'Lisbon, Portugal': 'LIS',
                'Vienna, Austria': 'VIE',
                'Dublin, Ireland': 'DUB',
                'Reykjavik, Iceland': 'KEF',
                'Moscow, Russia': 'SVO',
                'Saint Petersburg, Russia': 'LED',
                'Kiev, Ukraine': 'KBP',
                'Cairo, Egypt': 'CAI',
                'Alexandria, Egypt': 'HBE',
                'Casablanca, Morocco': 'CMN',
                'Marrakech, Morocco': 'RAK',
                'Lagos, Nigeria': 'LOS',
                'Abuja, Nigeria': 'ABV',
                'Nairobi, Kenya': 'NBO',
                'Cape Town, South Africa': 'CPT',
                'Johannesburg, South Africa': 'JNB',
                'Durban, South Africa': 'DUR',
                'Addis Ababa, Ethiopia': 'ADD',
                'Accra, Ghana': 'ACC',
                'New York, USA': 'JFK',
                'Los Angeles, USA': 'LAX',
                'Chicago, USA': 'ORD',
                'Houston, USA': 'IAH',
                'San Francisco, USA': 'SFO',
                'Dallas, USA': 'DFW',
                'Miami, USA': 'MIA',
                'Toronto, Canada': 'YYZ',
                'Vancouver, Canada': 'YVR',
                'Montreal, Canada': 'YUL',
                'Mexico City, Mexico': 'MEX',
                'São Paulo, Brazil': 'GRU',
                'Rio de Janeiro, Brazil': 'GIG',
                'Buenos Aires, Argentina': 'EZE',
                'Lima, Peru': 'LIM',
                'Santiago, Chile': 'SCL',
                'Bogotá, Colombia': 'BOG',
                'Quito, Ecuador': 'UIO',
                'Sydney, Australia': 'SYD',
                'Melbourne, Australia': 'MEL',
                'Brisbane, Australia': 'BNE',
                'Perth, Australia': 'PER',
                'Adelaide, Australia': 'ADL',
                'Auckland, New Zealand': 'AKL',
                'Wellington, New Zealand': 'WLG',
                'Christchurch, New Zealand': 'CHC',
                'Fiji': 'NAN',
                'Honolulu, Hawaii': 'HNL',
                'Anchorage, Alaska': 'ANC',
                'Antarctica (McMurdo Station)': 'MCM',
                'Tashkent, Uzbekistan': 'TAS',
                'Baku, Azerbaijan': 'GYD',
                'Almaty, Kazakhstan': 'ALA',
                'Ashgabat, Turkmenistan': 'ASB',
                'Tbilisi, Georgia': 'TBS',
                'Manila, Philippines': 'MNL',
                'Ho Chi Minh City, Vietnam': 'SGN',
                'Vientiane, Laos': 'VTE',
                'Ulan-Ude, Russia': 'UUD',
                'Warsaw, Poland': 'WAW',
                'Prague, Czech Republic': 'PRG',
                'Budapest, Hungary': 'BUD',
                'Belgrade, Serbia': 'BEG',
                'Bucharest, Romania': 'OTP',
                'Zagreb, Croatia': 'ZAG',
                'Sofia, Bulgaria': 'SOF',
                'Bratislava, Slovakia': 'BTS',
                'Ljubljana, Slovenia': 'LJU',
                'Sarajevo, Bosnia & Herzegovina': 'SJJ',
                'Vilnius, Lithuania': 'VNO',
                'Riga, Latvia': 'RIX',
                'Tallinn, Estonia': 'TLL',
                'Chisinau, Moldova': 'KIV',
                'Podgorica, Montenegro': 'TGD',
                'Skopje, North Macedonia': 'SKP',
                'Tirana, Albania': 'TIA',
                'Washington D.C., USA': 'IAD',
                'Boston, USA': 'BOS',
                'Seattle, USA': 'SEA',
                'Las Vegas, USA': 'LAS',
                'San Diego, USA': 'SAN',
                'Phoenix, USA': 'PHX',
                'Denver, USA': 'DEN',
                'Philadelphia, USA': 'PHL',
                'Ottawa, Canada': 'YOW',
                'Calgary, Canada': 'YYC',
                'Winnipeg, Canada': 'YWG',
                'Edmonton, Canada': 'YEG',
                'Guadalajara, Mexico': 'GDL',
                'Monterrey, Mexico': 'MTY',
                'Cancún, Mexico': 'CUN',
                'Algiers, Algeria': 'ALG',
                'Tunis, Tunisia': 'TUN',
                'Dakar, Senegal': 'DSS',
                'Luanda, Angola': 'LAD',
                'Harare, Zimbabwe': 'HRE',
                'Kampala, Uganda': 'EBB',
                'Dar es Salaam, Tanzania': 'DAR',
                'Gaborone, Botswana': 'GBE',
                'Maputo, Mozambique': 'MPM',
                'Medellín, Colombia': 'MDE',
                'Caracas, Venezuela': 'CCS',
                'La Paz, Bolivia': 'LPB',
                'Asunción, Paraguay': 'ASU',
                'Montevideo, Uruguay': 'MVD',
                'Hobart, Australia': 'HBA',
                'Darwin, Australia': 'DRW',
                'Canberra, Australia': 'CBR',
                'Port Moresby, Papua New Guinea': 'POM',
                'Nouméa, New Caledonia': 'NOU',
                'Apia, Samoa': 'APW',
                'Nukuʻalofa, Tonga': 'TBU',
                'Nuuk, Greenland': 'GOH',
                'Stanley, Falkland Islands': 'PSY',
                'Porto-Novo, Benin': 'COO',
                'Bissau, Guinea-Bissau': 'OXB',
                'Honiara, Solomon Islands': 'HIR',
                'Papeete, French Polynesia': 'PPT',
                'Majuro, Marshall Islands': 'MAJ',
                'Palikir, Micronesia': 'PNI',
                'Yamoussoukro, Côte d\'Ivoire': 'ABJ',
                'Gitega, Burundi': 'BJM',
                'Djibouti City, Djibouti': 'JIB',
                'Funafuti, Tuvalu': 'FUN',
                'Suva, Fiji': 'SUV'
            };

     
       // Token generation function using v1
       async function getAmadeusToken() {
        try {
            // Check if we have a valid token
            if (amadeusToken && tokenExpiration && Date.now() < tokenExpiration) {
                return amadeusToken;
            }
    
            console.log('Requesting new Amadeus token...');
            
            const response = await axios({
                method: 'POST',
                url: `${AMADEUS_BASE_URL_V1}/security/oauth2/token`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: new URLSearchParams({
                    grant_type: 'client_credentials',
                    client_id: AMADEUS_CLIENT_ID,
                    client_secret: AMADEUS_CLIENT_SECRET
                }).toString()
            });
    
            console.log('Token received successfully');
            amadeusToken = response.data.access_token;
            tokenExpiration = Date.now() + (response.data.expires_in * 1000);
            
            return amadeusToken;
        } catch (error) {
            console.error('Token Generation Error:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status
            });
            throw new Error('Failed to get Amadeus token');
        }
    }
    

           
            // Test endpoint for Amadeus token
            app.get('/api/test-amadeus-token', async (req, res) => {
                try {
                    const token = await getAmadeusToken();
                    res.json({ 
                        success: true, 
                        message: 'Token generated successfully',
                        tokenExists: !!token
                    });
                } catch (error) {
                    res.status(500).json({
                        success: false,
                        error: error.message
                    });
                }
            });

            // Function to convert city names to IATA codes
            function getCityIATACode(cityName) {
                // Check if the city exists in our cityToIATACode mapping
                if (cityToIATACode.hasOwnProperty(cityName)) {
                    return cityToIATACode[cityName];
                }
                throw new Error(`City not found: ${cityName}`);
            }


            
            app.post('/api/flights/search', async (req, res) => {
                try {
                    // Get a fresh token
                    const token = await getAmadeusToken();
                    if (!token) {
                        throw new Error('Failed to obtain authorization token');
                    }

                    const {
                        origin,
                        destination,
                        departureDate,
                        returnDate,
                        adults = 1,
                        travelClass = 'ECONOMY'
                    } = req.body;
            
                    // Log the initial request parameters
                    console.log('Flight Search Request:', {
                        origin,
                        destination,
                        departureDate,
                        returnDate,
                        adults,
                        travelClass,
                        tokenPresent: !!token
                    });
            
            
                    // Add date validation
                    const today = new Date();
                    const departure = new Date(departureDate);
                    const return_ = returnDate ? new Date(returnDate) : null;
            
                    // Validate dates
                    if (departure < today) {
                        throw new Error('Departure date must be in the future');
                    }
                    if (return_ && return_ <= departure) {
                        throw new Error('Return date must be after departure date');
                    }
            
                    // Convert city names to IATA codes
                    const originIATA = getCityIATACode(origin);
                    const destinationIATA = getCityIATACode(destination);
            
                    // Log the converted IATA codes
                    console.log('Converted IATA codes:', {
                        origin: `${origin} -> ${originIATA}`,
                        destination: `${destination} -> ${destinationIATA}`
                    });
            
                    // Format the request parameters
                    const searchParams = {
                        originLocationCode: originIATA,
                        destinationLocationCode: destinationIATA,
                        departureDate: departureDate,
                        adults: parseInt(adults, 10),
                        travelClass: travelClass.toUpperCase(),
                        max: 250,
                        nonStop: false,
                        currencyCode: 'USD'
                    };
            
                    // Add return date if it exists
                    if (returnDate) {
                        searchParams.returnDate = returnDate;
                    }
            
                    // Using v2 endpoint for flight search
                    const response = await axios({
                        method: 'GET',
                        url: `${AMADEUS_BASE_URL_V2}/shopping/flight-offers`,
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        },
                        params: searchParams
                    });
            
                    // Log successful response
                    console.log('Amadeus API Response:', {
                        status: response.status,
                        dataLength: response.data.data?.length || 0,
                        meta: response.data.meta
                    });
            
                    res.json(response.data);
                } catch (error) {
                    // Enhanced error handling
                    const errorDetails = error.response?.data?.errors?.[0] || {};
                    const errorMessage = error.response ? 
                        (errorDetails.detail || 'Failed to fetch flight data') : 
                        error.message;
            
                    console.error('Flight Search Error:', {
                        message: errorMessage,
                        status: error.response?.status,
                        errorCode: errorDetails.code,
                        errorTitle: errorDetails.title,
                        params: error.config?.params
                    });
            
                    res.status(error.response?.status || 400).json({
                        error: errorMessage,
                        details: errorDetails.detail || error.message,
                        code: errorDetails.code,
                        title: errorDetails.title
                    });
                }
            });

            
            // Test endpoint for all APIs
        app.get('/api/test-all', async (req, res) => {
            const results = {
                weather: false,
                amadeus: false,
                errors: []
            };

            try {
                // Test weather API
                const weatherResponse = await axios.get(
                    `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=London&days=1`
                );
                results.weather = true;
            } catch (error) {
                results.errors.push({
                    api: 'weather',
                    error: error.message,
                    details: error.response?.data
                });
            }

            try {
                // Test Amadeus API
                const token = await getAmadeusToken();
                results.amadeus = true;
            } catch (error) {
                results.errors.push({
                    api: 'amadeus',
                    error: error.message,
                    details: error.response?.data
                });
            }

            res.json(results);
        });



            const PORT = process.env.PORT || 3002;
            app.listen(PORT, () => {
                console.log(`Server running on port ${PORT}`);
            });




