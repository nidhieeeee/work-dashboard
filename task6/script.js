

// const apiUrl = "https://69c228767518bf8facbd6a17.mockapi.io/crud/form/user";

// const users = [
//   { "name": "Aarav Sharma", "email": "aarav@gmail.com", "bio": "Software Engineer and traveler", "gender": "male", "contry": "india", "state": "gujarat", "city": "ahmedabad", "pincode": "380001", "phone": "9876543210" },
//   { "name": "Emma Wilson", "email": "emma.w@outlook.com", "bio": "Digital nomad and coffee lover", "gender": "female", "contry": "usa", "state": "california", "city": "los angeles", "pincode": "900012", "phone": "12135550199" },
//   { "name": "Liam Smith", "email": "liam.smith@uk.co", "bio": "History buff and teacher", "gender": "male", "contry": "uk", "state": "england", "city": "london", "pincode": "SW1A1", "phone": "4420794609" },
//   { "name": "Priya Patel", "email": "priya.p@yahoo.com", "bio": "Classical dancer and foodie", "gender": "female", "contry": "india", "state": "maharashtra", "city": "mumbai", "pincode": "400001", "phone": "9123456780" },
//   { "name": "James Cook", "email": "j.cook@gmail.com", "bio": "Outdoor enthusiast and hiker", "gender": "male", "contry": "australia", "state": "nsw", "city": "sydney", "pincode": "200010", "phone": "6129876543" },
//   { "name": "Ananya Iyer", "email": "ananya.i@gmail.com", "bio": "Data Scientist and researcher", "gender": "female", "contry": "india", "state": "karnataka", "city": "bangalore", "pincode": "560001", "phone": "8887776665" },
//   { "name": "Noah Brown", "email": "noah.b@canada.ca", "bio": "Ice hockey fan and coach", "gender": "male", "contry": "canada", "state": "ontario", "city": "toronto", "pincode": "M5H2N", "phone": "14165550122" },
//   { "name": "Sophia Garcia", "email": "sophia.g@gmail.com", "bio": "Artist and muralist", "gender": "female", "contry": "usa", "state": "texas", "city": "austin", "pincode": "733010", "phone": "15125550144" },
//   { "name": "Rohan Mehra", "email": "rohan.m@gmail.com", "bio": "Cricket enthusiast and blogger", "gender": "male", "contry": "india", "state": "delhi", "city": "new delhi", "pincode": "110001", "phone": "9998887771" },
//   { "name": "Olivia Jones", "email": "olivia.j@uk.co", "bio": "Writer and creative editor", "gender": "female", "contry": "uk", "state": "scotland", "city": "edinburgh", "pincode": "EH11Y", "phone": "4413149601" },
//   { "name": "Arjun Das", "email": "arjun.das@gmail.com", "bio": "Musician and guitar player", "gender": "male", "contry": "india", "state": "west bengal", "city": "kolkata", "pincode": "700001", "phone": "9830012345" },
//   { "name": "Mia White", "email": "mia.white@gmail.com", "bio": "Yoga instructor and therapist", "gender": "female", "contry": "australia", "state": "victoria", "city": "melbourne", "pincode": "300011", "phone": "6139876543" },
//   { "name": "Ethan Hunt", "email": "e.hunt@gmail.com", "bio": "Adrenaline junkie and pilot", "gender": "male", "contry": "usa", "state": "florida", "city": "miami", "pincode": "331010", "phone": "13055550155" },
//   { "name": "Kavita Singh", "email": "kavita.s@gmail.com", "bio": "Corporate lawyer and runner", "gender": "female", "contry": "india", "state": "punjab", "city": "chandigarh", "pincode": "160001", "phone": "9814012345" },
//   { "name": "Lucas Scott", "email": "lucas.s@gmail.com", "bio": "Nature photographer", "gender": "male", "contry": "canada", "state": "bc", "city": "vancouver", "pincode": "V6B1A", "phone": "16045550188" },
//   { "name": "Sneha Reddy", "email": "sneha.r@gmail.com", "bio": "Tech enthusiast and gamer", "gender": "female", "contry": "india", "state": "telangana", "city": "hyderabad", "pincode": "500001", "phone": "9000012345" },
//   { "name": "William King", "email": "will.k@gmail.com", "bio": "Structural architect", "gender": "male", "contry": "uk", "state": "england", "city": "manchester", "pincode": "M11AE", "phone": "4416149602" },
//   { "name": "Zoe Miller", "email": "zoe.m@gmail.com", "bio": "Sustainable fashion designer", "gender": "female", "contry": "usa", "state": "new york", "city": "new york", "pincode": "100010", "phone": "12125550177" },
//   { "name": "Ishaan Verma", "email": "ishaan.v@gmail.com", "bio": "Marketing expert and speaker", "gender": "male", "contry": "india", "state": "uttar pradesh", "city": "lucknow", "pincode": "226001", "phone": "9415012345" },
//   { "name": "Ava Taylor", "email": "ava.t@gmail.com", "bio": "Professional pastry chef", "gender": "female", "contry": "australia", "state": "queensland", "city": "brisbane", "pincode": "400012", "phone": "6179876543" },
//   { "name": "Rajesh Gupta", "email": "rajesh.g@gmail.com", "bio": "Business owner and mentor", "gender": "male", "contry": "india", "state": "rajasthan", "city": "jaipur", "pincode": "302001", "phone": "9414012345" },
//   { "name": "Charlotte Green", "email": "char.g@gmail.com", "bio": "Marine biologist", "gender": "female", "contry": "canada", "state": "quebec", "city": "montreal", "pincode": "H2Z1A", "phone": "15145550199" },
//   { "name": "Benjamin Adams", "email": "ben.a@gmail.com", "bio": "Ancient history professor", "gender": "male", "contry": "usa", "state": "illinois", "city": "chicago", "pincode": "606010", "phone": "13125550133" },
//   { "name": "Deepika Rao", "email": "deepika.r@gmail.com", "bio": "Kathak dancer and teacher", "gender": "female", "contry": "india", "state": "tamil nadu", "city": "chennai", "pincode": "600001", "phone": "9840012345" },
//   { "name": "Henry Hill", "email": "henry.h@gmail.com", "bio": "Environmental geologist", "gender": "male", "contry": "uk", "state": "wales", "city": "cardiff", "pincode": "CF101", "phone": "4429204960" },
//   { "name": "Sanya Malhotra", "email": "sanya.m@gmail.com", "bio": "Aspiring actress and singer", "gender": "female", "contry": "india", "state": "madhya pradesh", "city": "indore", "pincode": "452001", "phone": "9826012345" },
//   { "name": "Sebastian Lee", "email": "seb.l@gmail.com", "bio": "Professional e-sports player", "gender": "male", "contry": "australia", "state": "wa", "city": "perth", "pincode": "600013", "phone": "6189876543" },
//   { "name": "Amelia Clark", "email": "amelia.c@gmail.com", "bio": "Pediatric nurse", "gender": "female", "contry": "usa", "state": "washington", "city": "seattle", "pincode": "981010", "phone": "12065550166" },
//   { "name": "Vikram Seth", "email": "vikram.s@gmail.com", "bio": "Fiction writer and poet", "gender": "male", "contry": "india", "state": "gujarat", "city": "surat", "pincode": "395001", "phone": "9825012345" },
//   { "name": "Harper Hall", "email": "harper.h@gmail.com", "bio": "Investigative journalist", "gender": "female", "contry": "canada", "state": "alberta", "city": "calgary", "pincode": "T2P1A", "phone": "14035550177" },
//   { "name": "Rahul Bose", "email": "rahul.b@gmail.com", "bio": "Commercial airline pilot", "gender": "male", "contry": "india", "state": "kerala", "city": "kochi", "pincode": "682001", "phone": "9447012345" },
//   { "name": "Evelyn Young", "email": "evelyn.y@gmail.com", "bio": "Astronomer and researcher", "gender": "female", "contry": "usa", "state": "arizona", "city": "phoenix", "pincode": "850010", "phone": "16025550188" },
//   { "name": "Daniel Wright", "email": "dan.w@gmail.com", "bio": "Fullstack web developer", "gender": "male", "contry": "uk", "state": "england", "city": "birmingham", "pincode": "B11QU", "phone": "4412149603" },
//   { "name": "Pooja Batwa", "email": "pooja@gmail.com", "bio": "I am tom boy and athlete", "gender": "female", "contry": "india", "state": "gujarat", "city": "ahmedabad", "pincode": "232323", "phone": "7418529630" },
//   { "name": "Jack Evans", "email": "jack.e@gmail.com", "bio": "Jazz musician and teacher", "gender": "male", "contry": "australia", "state": "sa", "city": "adelaide", "pincode": "500014", "phone": "6187876543" },
//   { "name": "Sita Ram", "email": "sita.ram@gmail.com", "bio": "Primary school teacher", "gender": "female", "contry": "india", "state": "bihar", "city": "patna", "pincode": "800001", "phone": "9934012345" },
//   { "name": "Samuel Baker", "email": "sam.b@gmail.com", "bio": "Organic farmer", "gender": "male", "contry": "canada", "state": "manitoba", "city": "winnipeg", "pincode": "R3C1A", "phone": "12045550166" },
//   { "name": "Abha Shah", "email": "abha.s@gmail.com", "bio": "General surgeon", "gender": "female", "contry": "india", "state": "gujarat", "city": "rajkot", "pincode": "360001", "phone": "9824012345" },
//   { "name": "David King", "email": "david.k@gmail.com", "bio": "Basketball coach", "gender": "male", "contry": "usa", "state": "georgia", "city": "atlanta", "pincode": "303010", "phone": "14045550111" },
//   { "name": "Maya Angelou", "email": "maya.a@gmail.com", "bio": "Poet and storyteller", "gender": "female", "contry": "uk", "state": "england", "city": "liverpool", "pincode": "L10AA", "phone": "4415149604" },
//   { "name": "Kabir Khan", "email": "kabir.k@gmail.com", "bio": "Film director and editor", "gender": "male", "contry": "india", "state": "maharashtra", "city": "pune", "pincode": "411001", "phone": "9822012345" },
//   { "name": "Luna Lovegood", "email": "luna.l@gmail.com", "bio": "Creative dreamer", "gender": "female", "contry": "uk", "state": "england", "city": "oxford", "pincode": "OX11A", "phone": "4418654960" },
//   { "name": "Leo Messi", "email": "leo.m@gmail.com", "bio": "Professional athlete", "gender": "male", "contry": "usa", "state": "florida", "city": "fort lauderdale", "pincode": "333010", "phone": "19545550122" },
//   { "name": "Zara Ali", "email": "zara.a@gmail.com", "bio": "AI researcher", "gender": "female", "contry": "india", "state": "telangana", "city": "warangal", "pincode": "506001", "phone": "9000055555" },
//   { "name": "Oscar Wilde", "email": "oscar.w@gmail.com", "bio": "Classical playwright", "gender": "male", "contry": "uk", "state": "ireland", "city": "dublin", "pincode": "D01A1", "phone": "3531496055" },
//   { "name": "Meera Bai", "email": "meera.b@gmail.com", "bio": "Folk singer", "gender": "female", "contry": "india", "state": "rajasthan", "city": "udaipur", "pincode": "313001", "phone": "9414055555" },
//   { "name": "George Bush", "email": "george.b@gmail.com", "bio": "Retired politician", "gender": "male", "contry": "usa", "state": "texas", "city": "dallas", "pincode": "752010", "phone": "12145550188" },
//   { "name": "Nora Fatehi", "email": "nora.f@gmail.com", "bio": "Professional dancer", "gender": "female", "contry": "canada", "state": "ontario", "city": "ottawa", "pincode": "K1P1A", "phone": "16135550133" },
//   { "name": "Steve Smith", "email": "steve.s@gmail.com", "bio": "Middle-order batsman", "gender": "male", "contry": "australia", "state": "nsw", "city": "newcastle", "pincode": "230010", "phone": "6124976543" },
//   { "name": "Indira Gandhi", "email": "indira.g@gmail.com", "bio": "Strategic leader", "gender": "female", "contry": "india", "state": "uttarakhand", "city": "dehradun", "pincode": "248001", "phone": "9412012345" }
// ];

// async function insertUsers() {
//   for (let user of users) {
//     try {
//       const res = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(user)
//       });

//       const data = await res.json();
//       console.log("Inserted:", data);
//     } catch (err) {
//       console.error("Error:", err);
//     }
//   }
// }

// insertUsers();


        const API_URL = "https://69c228767518bf8facbd6a17.mockapi.io/crud/form/user";
        let allUsers = [];
        let currentPage = 1;
        const rowsPerPage = 5;

        // Elements
        const listView = document.getElementById("listView");
        const formView = document.getElementById("formView");
        const tableBody = document.getElementById("table-body");
        const userForm = document.getElementById("userForm");
        const searchInput = document.getElementById("searchInput");
        const filterCountry = document.getElementById("filterCountry");
        const filterCity = document.getElementById("filterCity");

        // --- View Switching Logic ---
        function switchView(view) {
            if (view === 'list') {
                listView.classList.remove('hidden');
                formView.classList.add('hidden');
                document.getElementById('navHome').classList.add('border-b-2', 'border-white');
                document.getElementById('navAdd').classList.remove('border-b-2', 'border-white');
                loadUsers();
            } else {
                listView.classList.add('hidden');
                formView.classList.remove('hidden');
                document.getElementById('navAdd').classList.add('border-b-2', 'border-white');
                document.getElementById('navHome').classList.remove('border-b-2', 'border-white');
                if(!document.getElementById('userId').value) resetForm();
            }
        }

        // --- API & Data Handling ---
        async function loadUsers() {
            try {
                const response = await fetch(API_URL);
                allUsers = await response.json();
                populateFilters();
                renderTable();
            } catch (error) {
                tableBody.innerHTML = `<tr><td colspan="7" class="p-4 text-center text-red-500">Error loading data.</td></tr>`;
            }
        }

        function populateFilters() {
            const countries = [...new Set(allUsers.map(u => u.contry))].filter(Boolean);
            const cities = [...new Set(allUsers.map(u => u.city))].filter(Boolean);

            filterCountry.innerHTML = '<option value="">All Countries</option>' + 
                countries.map(c => `<option value="${c}">${c}</option>`).join("");
            filterCity.innerHTML = '<option value="">All Cities</option>' + 
                cities.map(c => `<option value="${c}">${c}</option>`).join("");
        }

        function renderTable() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedCountry = filterCountry.value;
            const selectedCity = filterCity.value;

            let filtered = allUsers.filter(user => {
                const matchesSearch = user.name.toLowerCase().includes(searchTerm) || user.email.toLowerCase().includes(searchTerm);
                const matchesCountry = !selectedCountry || user.contry === selectedCountry;
                const matchesCity = !selectedCity || user.city === selectedCity;
                return matchesSearch && matchesCountry && matchesCity;
            });

            const totalPages = Math.ceil(filtered.length / rowsPerPage);
            const start = (currentPage - 1) * rowsPerPage;
            const paginatedItems = filtered.slice(start, start + rowsPerPage);

            tableBody.innerHTML = paginatedItems.map(user => `
                <tr class="border-b hover:bg-gray-50">
                    <td class="p-4 font-medium">${user.name}</td>
                    <td class="p-4 text-blue-600">${user.email}</td>
                    <td class="p-4">${user.phone}</td>
                    <td class="p-4 capitalize">${user.gender || 'N/A'}</td>
                    <td class="p-4 truncate max-w-[120px] text-slate-500">${user.bio || ''}</td>
                    <td class="p-4 text-sm">${user.city}, ${user.contry}</td>
                    <td class="p-4">
                        <button onclick="editUser('${user.id}')" class="text-blue-500 hover:underline mr-3 font-semibold">Edit</button>
                        <button onclick="deleteUser('${user.id}')" class="text-red-500 hover:underline font-semibold">Delete</button>
                    </td>
                </tr>
            `).join("");

            document.getElementById("pageInfo").innerText = `Showing Page ${currentPage} of ${totalPages || 1}`;
            document.getElementById("prevBtn").disabled = currentPage === 1;
            document.getElementById("nextBtn").disabled = currentPage >= totalPages;
        }

        // --- CRUD Logic ---
        userForm.addEventListener("submit", async function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
            const id = data.id;

            // Validation
            let errors = [];
            if (data.name.length < 3) errors.push("Name must be 3+ chars.");
            if (!/^\d{10}$/.test(data.phone)) errors.push("Phone must be 10 digits.");
            if (!/^\d{6}$/.test(data.pincode)) errors.push("Pincode must be 6 digits.");

            if (errors.length > 0) return alert(errors.join("\n"));

            try {
                const btn = document.getElementById("submitBtn");
                btn.innerText = "Processing...";
                btn.disabled = true;

                const method = id ? "PUT" : "POST";
                const url = id ? `${API_URL}/${id}` : API_URL;

                await fetch(url, {
                    method: method,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                });

                alert("Success!");
                resetForm();
                switchView('list');
            } catch (err) {
                alert("Error saving user.");
            } finally {
                document.getElementById("submitBtn").disabled = false;
                document.getElementById("submitBtn").innerText = "Save User";
            }
        });

        async function deleteUser(id) {
            if(confirm("Delete this user?")) {
                await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
                loadUsers();
            }
        }

        function editUser(id) {
            const user = allUsers.find(u => u.id === id);
            if(!user) return;

            document.getElementById("formHeading").innerText = "Update User";
            document.getElementById("userId").value = user.id;
            document.getElementById("name").value = user.name;
            document.getElementById("email").value = user.email;
            document.getElementById("phone").value = user.phone;
            document.getElementById("bio").value = user.bio || '';
            document.getElementById("contry").value = user.contry;
            document.getElementById("state").value = user.state;
            document.getElementById("city").value = user.city;
            document.getElementById("pincode").value = user.pincode;

            const genderRadios = document.getElementsByName("gender");
            genderRadios.forEach(r => { if(r.value === user.gender) r.checked = true; });

            switchView('form');
        }

        function resetForm() {
            userForm.reset();
            document.getElementById("userId").value = "";
            document.getElementById("formHeading").innerText = "Add New User";
        }

        // --- Event Listeners ---
        searchInput.addEventListener("input", () => { currentPage = 1; renderTable(); });
        filterCountry.addEventListener("change", () => { currentPage = 1; renderTable(); });
        filterCity.addEventListener("change", () => { currentPage = 1; renderTable(); });
        document.getElementById("prevBtn").addEventListener("click", () => { if(currentPage > 1) { currentPage--; renderTable(); } });
        document.getElementById("nextBtn").addEventListener("click", () => { currentPage++; renderTable(); });

        // Initial Load
        document.addEventListener("DOMContentLoaded", loadUsers);
    