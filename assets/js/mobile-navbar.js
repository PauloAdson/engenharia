class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        // this.handleClick = this.handleClick.bind(this);
        this.handleToggle = this.handleToggle.bind(this); // Fechar o menu através dos links
        this.handleLinkClick = this.handleLinkClick.bind(this); // Fechar o menu através dos links

        this.handleDocumentClick = this.handleDocumentClick.bind(this);
    }


    // Fechar o menu através dos links
    handleToggle() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    handleLinkClick(event) {
        // Impede que o clique no link propague para o documento
        event.stopPropagation();

        if (this.navList.classList.contains(this.activeClass)) {
            this.handleToggle();
        }
        
    } // Termina aqui

    handleDocumentClick(event) {
        // Verifica se o menu está ativo antes de lidar com o clique fora do menu
        if (this.mobileMenu.classList.contains(this.activeClass) && !this.mobileMenu.contains(event.target)) {
            this.navList.classList.remove(this.activeClass);
            this.mobileMenu.classList.remove(this.activeClass);
            this.animateLinks();
        }
    }
    


    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    addEventListeners() {
        this.mobileMenu.addEventListener("click", this.handleToggle);

        this.navLinks.forEach(link => {
            link.addEventListener("click", this.handleLinkClick);
        });

        document.addEventListener("click", this.handleDocumentClick);
    }


    init() {
        if (this.mobileMenu) {
            this.addEventListeners();
            // this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();