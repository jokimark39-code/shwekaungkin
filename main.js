document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Toggle Logic ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle active class to slide menu in/out
            navLinks.classList.toggle('active');
            
            // Optional: Animate hamburger bars to an 'X'
            hamburger.classList.toggle('is-active');
        });
    }

    // --- 2. Product Filtering Logic (for products.html) ---
    // Added here so it's ready globally as requested
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card.filterable');

    if (filterBtns.length > 0 && productCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active state from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active state to clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                // Filter cards based on data-category
                productCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block'; 
                        // Note: Because we use grid, display: block allows the grid container to naturally flow the items.
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});