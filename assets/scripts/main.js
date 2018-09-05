window.addEventListener('load', () => {
    document.querySelector('.loadingPanel').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.loadingPanel').style.display = 'none';
    }, 500);
    
    const
        navbarBurger = document.querySelector('.navbar-burger'),
        menu = document.getElementById(navbarBurger.dataset.target),
        headerHeight = document.getElementsByTagName('header')[0],
        scrollBtn = document.querySelector('.fa-chevron-down');

    navbarBurger.addEventListener('click', () => {
        navbarBurger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: headerHeight.clientHeight,
            behavior: 'smooth'
        });
    });
});