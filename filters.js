const filterSelect = document.getElementById('filterSelect');
const items = document.querySelectorAll('.item');

        // Function to apply filter based on the selected category
        function applyFilter(category) {
            items.forEach(item => {
                // Check if item matches the selected category
                if (category === 'all' || item.classList.contains(category)) {
                    item.classList.add('visible');
                } else {
                    item.classList.remove('visible');
                }
            });
        }

        // Event listener for filter change
        filterSelect.addEventListener('change', (event) => {
            const selectedCategory = event.target.value;
            applyFilter(selectedCategory);

            // Save the selected filter in localStorage
            localStorage.setItem('selectedFilter', selectedCategory);
        });

        // On page load, retrieve the filter from localStorage
        window.addEventListener('load', () => {
            const savedFilter = localStorage.getItem('selectedFilter') || 'all';
            filterSelect.value = savedFilter;
            applyFilter(savedFilter);
        });