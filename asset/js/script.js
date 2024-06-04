// ==================== STICKY NAVBAR ====================
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


// ==================== NAVBAR - BURGER MENU ====================

let burgermenu = document.querySelector('#burger-menu');
let navbar = document.querySelector('.navbar');

burgermenu.onclick = () => {
    burgermenu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    burgermenu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// ==================== SEARCH BOX - HOME SECTION ====================

document.addEventListener('DOMContentLoaded', function() {
    const homeSearchInput = document.querySelector('.search input'); 
    const homeClearIcon = document.querySelector('.search .clear-icon'); 

    function toggleClearIcon() {
        homeClearIcon.style.display = homeSearchInput.value ? 'block' : 'none'; 
    }
    
    toggleClearIcon();
    
    homeSearchInput.addEventListener('input', toggleClearIcon); 
    homeClearIcon.addEventListener('click', function() {
        homeSearchInput.value = ''; 
        toggleClearIcon(); 
    });
});

// ==================== FILTER OPTIONS - BROWSE HTML ====================

document.addEventListener('DOMContentLoaded', function() {
    const showButton = document.getElementById('show-button');
    const filterOptions = document.querySelector('.filters .options');
    const applyButton = document.querySelector('.filters .apply-button');

    showButton.addEventListener('click', function() {
        if (filterOptions.classList.contains('active')) {
            filterOptions.classList.remove('active');
            applyButton.classList.remove('active');
            showButton.innerHTML = "<i class='bx bx-chevron-down'></i>";
        } else {
            filterOptions.classList.add('active');
            applyButton.classList.add('active');
            showButton.innerHTML = "<i class='bx bx-chevron-up'></i>";
        }
    });
});
