
        
        const products = [
            { id: 1, name: "MacBook Pro", price: 1999, category: "Electronics" },
            { id: 2, name: "Ergonomic Chair", price: 250, category: "Furniture" },
            { id: 3, name: "Wireless Mouse", price: 50, category: "Electronics" },
            { id: 4, name: "Oak Dining Table", price: 800, category: "Furniture" },
            { id: 5, name: "Mechanical Keyboard", price: 120, category: "Electronics" },
            { id: 6, name: "Leather Sofa", price: 1500, category: "Furniture" },
            { id: 7, name: "Monitor Stand", price: 45, category: "Accessories" }
        ];

        let currentSort = { column: null, direction: 'asc' };

        
        function renderTable() {
            const tableBody = document.getElementById('tableBody');
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const categoryTerm = document.getElementById('categoryFilter').value;

            
            let filteredData = products.filter(item => {
                const matchesSearch = item.name.toLowerCase().includes(searchTerm);
                const matchesCategory = categoryTerm === 'all' || item.category === categoryTerm;
                return matchesSearch && matchesCategory;
            });

            
            if (currentSort.column) {
                filteredData.sort((a, b) => {
                    const valA = a[currentSort.column];
                    const valB = b[currentSort.column];
                    
                    if (currentSort.direction === 'asc') {
                        return valA > valB ? 1 : -1;
                    } else {
                        return valA < valB ? 1 : -1;
                    }
                });
            }

            
            if (filteredData.length === 0) {
                tableBody.innerHTML = `<tr><td colspan="3" class="p-4 text-center text-gray-500">No products found.</td></tr>`;
            } else {
                tableBody.innerHTML = filteredData.map(product => `
                    <tr class="border-b hover:bg-gray-50 transition-colors">
                        <td class="p-3">${product.name}</td>
                        <td class="p-3"><span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">${product.category}</span></td>
                        <td class="p-3 font-semibold">$${product.price}</td>
                    </tr>
                `).join('');
            }
        }

       
        function handleSort(column) {
            if (currentSort.column === column) {
                currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
            } else {
                currentSort.column = column;
                currentSort.direction = 'asc';
            }
            
          
            document.getElementById('sort-name').innerText = currentSort.column === 'name' ? (currentSort.direction === 'asc' ? '↑' : '↓') : '↕';
            document.getElementById('sort-price').innerText = currentSort.column === 'price' ? (currentSort.direction === 'asc' ? '↑' : '↓') : '↕';
            
            renderTable();
        }

        document.getElementById('searchInput').addEventListener('input', renderTable);
        document.getElementById('categoryFilter').addEventListener('change', renderTable);

        renderTable();
    