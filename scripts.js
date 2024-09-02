document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const countrySelect = document.getElementById('country');
    const stateSelect = document.getElementById('state');
    const phoneInput = document.getElementById('phone');
    const phoneExtension = document.getElementById('phoneExtension');
    const maxDate = new Date().toISOString().split("T")[0];
    document.getElementById('dateOfBirth').setAttribute('max', maxDate);
    const formPages = document.querySelectorAll('.form-page');
    const nextButton = document.getElementById('nextButton');
    const submitButton = document.querySelector('.submit-btn');
    let currentPage = 0;
    

    // Populate country dropdown
    const countries = {
        "Select your country": "",
        "Argentina": "+54",
        "Australia": "+61",
        "Brazil": "+55",
        "Canada": "+1",
        "China": "+86",
        "France": "+33",
        "Germany": "+49",
        "India": "+91",
        "Indonesia": "+62",
        "Israel": "+972",
        "Italy": "+39",
        "Japan": "+81",
        "Malaysia": "+60",
        "Mexico": "+52",
        "Netherlands": "+31",
        "New Zealand": "+64",
        "Norway": "+47",
        "Saudi Arabia": "+966",
        "Singapore": "+65",
        "South Africa": "+27",
        "South Korea": "+82",
        "Spain": "+34",
        "Sweden": "+46",
        "Switzerland": "+41",
        "Turkey": "+90",
        "United Arab Emirates": "+971",
        "United Kingdom": "+44",
        "United States": "+1"
    };

    for (let country in countries) {
        const option = document.createElement('option');
        option.value = country;
        option.text = country;
        countrySelect.appendChild(option);
    }

    // Update phone prefix based on selected country
    countrySelect.addEventListener('change', function () {
        phoneExtension.textContent = countries[this.value] || '+1'; // Default to +1 if no country is selected
        phoneInput.value = '';
        
        if (this.value === 'India') {
            addStateOptions(['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal']);
        } else if (this.value === 'United States') {
            addStateOptions(['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']);
        } else if (this.value === 'Australia') {
            addStateOptions(['New South Wales', 'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia', 'Australian Capital Territory', 'Northern Territory']);
        } else if (this.value === 'Canada') {
            addStateOptions(['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan']);
        } else if (this.value === 'Argentina') {
            addStateOptions(['Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'CABA', 'Córdoba', 'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán']);
        } else if (this.value === 'Brazil') {
            addStateOptions(['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']);
        } else if (this.value === 'China') {
            addStateOptions(['Anhui', 'Beijing', 'Chongqing', 'Fujian', 'Gansu', 'Guangdong', 'Guangxi', 'Guizhou', 'Hainan', 'Hebei', 'Heilongjiang', 'Henan', 'Hong Kong', 'Hubei', 'Hunan', 'Jiangsu', 'Jiangxi', 'Jilin', 'Liaoning', 'Macau', 'Ningxia', 'Qinghai', 'Shaanxi', 'Shandong', 'Shanghai', 'Shanxi', 'Sichuan', 'Tianjin', 'Xiangxi', 'Xinjiang', 'Xizang', 'Yunnan', 'Zhejiang']);
        } else if (this.value === 'France') {
            addStateOptions(['Auvergne-Rhône-Alpes', 'Bourgogne-Franche-Comté', 'Brittany', 'Centre-Val de Loire', 'Corsica', 'Grand Est', 'Hauts-de-France', 'Île-de-France', 'Normandy', 'Nouvelle-Aquitaine', 'Occitanie', 'Pays de la Loire', 'Provence-Alpes-Côte d\'Azur']);
        } else if (this.value === 'Germany') {
            addStateOptions(['Baden-Württemberg', 'Bavaria', 'Berlin', 'Brandenburg', 'Bremen', 'Hamburg', 'Hesse', 'Lower Saxony', 'Mecklenburg-Vorpommern', 'North Rhine-Westphalia', 'Rhineland-Palatinate', 'Saarland', 'Saxony', 'Saxony-Anhalt', 'Schleswig-Holstein', 'Thuringia']);
        } else if (this.value === 'India') {
            addStateOptions(['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal']);
        } else if (this.value === 'Indonesia') {
            addStateOptions(['Aceh', 'Bali', 'Bangka Belitung', 'Banten', 'Bengkulu', 'Gorontalo', 'Jakarta', 'Jambi', 'Jawa Barat', 'Jawa Tengah', 'Jawa Timur', 'Kalimantan Barat', 'Kalimantan Selatan', 'Kalimantan Tengah', 'Kalimantan Timur', 'Kalimantan Utara', 'Kepulauan Riau', 'Lampung', 'Maluku', 'Maluku Utara', 'Nusa Tenggara Barat', 'Nusa Tenggara Timur', 'Papua', 'Papua Barat', 'Riau', 'Sulawesi Barat', 'Sulawesi Selatan', 'Sulawesi Tengah', 'Sulawesi Tenggara', 'Sulawesi Utara', 'Yogyakarta']);
        } else if (this.value === 'Israel') {
            addStateOptions(['Central District', 'Haifa District', 'Jerusalem District', 'Northern District', 'Southern District', 'Tel Aviv District']);
        } else if (this.value === 'Italy') {
            addStateOptions(['Abruzzo', 'Basilicata', 'Calabria', 'Campania', 'Emilia-Romagna', 'Friuli Venezia Giulia', 'Lazio', 'Liguria', 'Lombardy', 'Marche', 'Molise', 'Piedmont', 'Puglia', 'Sardinia', 'Sicily', 'Tuscany', 'Trentino-Alto Adige', 'Umbria', 'Valle d\'Aosta', 'Veneto']);
        } else if (this.value === 'Japan') {
            addStateOptions(['Aichi', 'Akita', 'Aomori', 'Chiba', 'Ehime', 'Fukui', 'Fukuoka', 'Fukushima', 'Gifu', 'Gunma', 'Hiroshima', 'Hokkaido', 'Hyogo', 'Ibaraki', 'Ishikawa', 'Ishikawa', 'Kagawa', 'Kagoshima', 'Kanagawa', 'Kochi', 'Kumamoto', 'Kyoto', 'Mie', 'Miyagi', 'Miyazaki', 'Nagano', 'Nagasaki', 'Nagasaki', 'Nara', 'Niigata', 'Oita', 'Okayama', 'Okinawa', 'Osaka', 'Saga', 'Saitama', 'Shiga', 'Shimane', 'Shizuoka', 'Tochigi', 'Tokushima', 'Tokyo', 'Tottori', 'Toyama', 'Wakayama', 'Yamagata', 'Yamaguchi', 'Yamanashi']);
        } else if (this.value === 'Malaysia') {
            addStateOptions(['Johor', 'Kedah', 'Kelantan', 'Malacca', 'Negeri Sembilan', 'Pahang', 'Penang', 'Perak', 'Perlis', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu', 'Kuala Lumpur', 'Labuan', 'Putrajaya']);
        } else if (this.value === 'Mexico') {
            addStateOptions(['Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Mexico State', 'Mexico City', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas']);
        } else if (this.value === 'Netherlands') {
            addStateOptions(['Drenthe', 'Flevoland', 'Friesland', 'Gelderland', 'Groningen', 'Limburg', 'North Brabant', 'North Holland', 'Overijssel', 'South Holland', 'Utrecht', 'Zeeland']);
        } else if (this.value === 'New Zealand') {
            addStateOptions(['Auckland', 'Bay of Plenty', 'Canterbury', 'Gisborne', 'Hawke\'s Bay', 'Manawatu-Wanganui', 'Marlborough', 'Nelson', 'Northland', 'Otago', 'Southland', 'Taranaki', 'Tasman', 'Waikato', 'Wellington']);
        } else if (this.value === 'Norway') {
            addStateOptions(['Akershus', 'Aust-Agder', 'Buskerud', 'Finnmark', 'Hedmark']);
        } else if (this.value === 'Singapore') {
            addStateOptions(['Central Region', 'East Region', 'North Region', 'North-East Region', 'West Region']);
        } else if (this.value === 'South Africa') {
            addStateOptions(['Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga', 'Northern Cape', 'North West', 'Western Cape']);
        } else if (this.value === 'South Korea') {
            addStateOptions(['Busan', 'Chungcheongbuk-do', 'Chungcheongnam-do', 'Daegu', 'Daejeon', 'Gangwon-do', 'Gwangju', 'Incheon', 'Jeju-do', 'Jeollabuk-do', 'Jeollanam-do', 'Sejong', 'Seoul', 'Ulsan']);
        } else if (this.value === 'Spain') {
            addStateOptions(['Andalusia', 'Aragon', 'Asturias', 'Balearic Islands', 'Basque Country', 'Canary Islands', 'Cantabria', 'Castile and León', 'Castile-La Mancha', 'Catalonia', 'Extremadura', 'Galicia', 'La Rioja', 'Madrid', 'Murcia', 'Navarre', 'Valencia']);
        } else if (this.value === 'Sweden') {
            addStateOptions(['Blekinge', 'Dalarna', 'Gävleborg', 'Gotland', 'Halland', 'Jämtland', 'Jönköping', 'Kalmar', 'Kronoberg', 'Norrbotten', 'Orebro', 'Ostergötland', 'Skåne', 'Sodermanland', 'Stockholm', 'Uppsala', 'Västerbotten', 'Västernorrland', 'Västmanland', 'Västra Götaland']);
        } else if (this.value === 'Switzerland') {
            addStateOptions(['Aargau', 'Appenzell Ausserrhoden', 'Appenzell Innerrhoden', 'Basel-Landschaft', 'Basel-Stadt', 'Bern', 'Fribourg', 'Geneva', 'Glarus', 'Graubünden', 'Jura', 'Lucerne', 'Neuchâtel', 'Nidwalden', 'Obwalden', 'Schaffhausen', 'Schwyz', 'Solothurn', 'St. Gallen', 'Thurgau', 'Ticino', 'Uri', 'Valais', 'Vaud', 'Zug', 'Zurich']);
        } else if (this.value === 'Turkey') {
            addStateOptions(['Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara', 'Antalya', 'Ardahan', 'Artvin', 'Aydın', 'Balıkesir', 'Bartın', 'Batman', 'Bayburt', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale', 'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Düzce', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Iğdır', 'Isparta', 'İstanbul', 'İzmir', 'Kahramanmaraş', 'Karabük', 'Karaman', 'Kars', 'Kastamonu', 'Kayseri', 'Kırıkkale', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Mardin', 'Mersin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Osmaniye', 'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Şanlıurfa', 'Şırnak', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Uşak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak']);
        } else if (this.value === 'United Arab Emirates') {
            addStateOptions(['Abu Dhabi', 'Ajman', 'Dubai', 'Fujairah', 'Ras Al Khaimah', 'Sharjah', 'Umm Al-Quwain']);
        } else if (this.value === 'United Kingdom') {
            addStateOptions(['England', 'Northern Ireland', 'Scotland', 'Wales']);
        } else if (this.value === 'United States') {
            addStateOptions(['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']);
        }
        
        // Add similar conditions for other countries as needed.
    });

    function clearStateOptions() {
        while (stateSelect.firstChild) {
            stateSelect.removeChild(stateSelect.firstChild);
        }
    }

    // Function to add state options
    function addStateOptions(states) {
        stateSelect.innerHTML = '';
        states.forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });
    }


    function showPage(pageIndex) {
        formPages.forEach((page, index) => {
            page.style.display = index === pageIndex ? 'block' : 'none';
        });
    }

    function validatePage1() {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const country = document.getElementById('country').value;
        const state = document.getElementById('state').value;
        const phone = document.getElementById('phone').value.trim();
        const department = document.querySelector('input[name="department"]:checked');
        const gender = document.querySelector('input[name="gender"]:checked');
        const dateOfBirth = document.getElementById('dateOfBirth').value;

        if (!firstName || !lastName || !email || !password || !confirmPassword || !country || !state || !phone || !department || !gender || !dateOfBirth) {
            alert('Please fill in all required fields on Page 1.');
            return false;
        }
    
            // Validate name fields
            const nameRegex = /^[A-Za-z]+$/;
            if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
                alert('Name fields must contain only alphabets.');
                return false;
            }
    
            // Validate email
            const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address (e.g., abc@gmail.com).');
                return false;
            }
    
            // Validate password
            const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(password)) {
                alert('Password must be at least 8 characters long, including one uppercase letter, one number, and one special character.');
                return false;
            }
    
            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return false;
            }
    
            // Validate date
            const currentDate = new Date().toISOString().split('T')[0];
            if (dateOfBirth > currentDate) {
                alert('Date of Birth cannot be in the future.');
                return false;
            }
    
            // Validate phone number
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(phone)) {
                alert('Phone number must be 10 digits long.');
                return false;
            }
    
            return true;

        } 

        function validatePage2() {
        const collegeName = document.getElementById('collegeName')?.value.trim();
        const events = document.querySelector('input[name="events"]:checked');
        const topics = document.getElementById('topics')?.value.trim();
        const teamName = document.getElementById('teamName')?.value.trim();
        const paymentOption = document.querySelector('input[name="paymentOption"]:checked');
        const receipt = document.getElementById('receipt')?.files.length;

            if (!collegeName || !topics || !teamName ) {
                alert('Please fill in all required fields on Page 2.');
                return false;
            }

            // Validate college details
            if (!collegeName) {
                alert('College name is required.');
                return false;
            }
    
            if (!topics) {
                alert('Topics field cannot be empty.');
                return false;
            }
    
            if (!teamName) {
                alert('Team name is required.');
                return false;
            }

    
           return true;
        }

        showPage(currentPage);

        nextButton.addEventListener('click', function () {
            if (validatePage1()) {
                currentPage++;
                showPage(currentPage);
            }
        });
    
        submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (validatePage2()) {
        alert('Form submitted successfully!');
        window.location.href = 'thankyou.html';
    }
});
    });
    
