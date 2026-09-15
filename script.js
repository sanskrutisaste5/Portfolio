/* =========================================================
   SANSKRUTI SASTE - PORTFOLIO
   JavaScript
========================================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* ================= ELEMENTS ================= */

    const header =
        document.querySelector(".header");

    const menuToggle =
        document.getElementById("menu-toggle");

    const navLinks =
        document.getElementById("nav-links");

    const navItems =
        document.querySelectorAll(".nav-link");

    const backToTop =
        document.getElementById("back-to-top");

    const currentYear =
        document.getElementById("current-year");


    /* ================= CURRENT YEAR ================= */

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* ================= MOBILE MENU ================= */

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("open");

            const icon =
                menuToggle.querySelector("i");

            if (navLinks.classList.contains("open")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

                menuToggle.setAttribute(
                    "aria-label",
                    "Close navigation"
                );

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            }

        });

    }


    /* ================= CLOSE MOBILE MENU ================= */

    navItems.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            const icon =
                menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        });

    });


    /* ================= HEADER SCROLL ================= */

    const handleScroll = () => {

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }


        /* Back to top */

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    };


    window.addEventListener(
        "scroll",
        handleScroll,
        { passive: true }
    );


    handleScroll();


    /* ================= BACK TO TOP ================= */

    if (backToTop) {

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* ================= ACTIVE NAVIGATION ================= */

    const sections =
        document.querySelectorAll("section[id]");


    const updateActiveNavigation = () => {

        const scrollPosition =
            window.scrollY + 150;

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            const sectionId =
                section.getAttribute("id");

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                navItems.forEach((item) => {

                    item.classList.remove("active");

                });

                const activeLink =
                    document.querySelector(
                        `.nav-link[href="#${sectionId}"]`
                    );

                if (activeLink) {

                    activeLink.classList.add("active");

                }

            }

        });

    };


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );


    updateActiveNavigation();


    /* ================= SCROLL REVEAL ================= */

    const revealElements =
        document.querySelectorAll(
            ".project-card, .skill-card, .stat-card, " +
            ".education-card, .certification-card, " +
            ".learning-item, .contact-card, " +
            ".timeline-content"
        );


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.1
            }
        );


    revealElements.forEach((element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(20px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        revealObserver.observe(element);

    });


    /* Add visible class styling dynamically */

    const style =
        document.createElement("style");

    style.textContent = `

        .project-card.visible,
        .skill-card.visible,
        .stat-card.visible,
        .education-card.visible,
        .certification-card.visible,
        .learning-item.visible,
        .contact-card.visible,
        .timeline-content.visible {

            opacity: 1 !important;

            transform: translateY(0) !important;

        }

    `;

    document.head.appendChild(style);


    /* ================= SMOOTH ANCHOR LINKS ================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach((anchor) => {

        anchor.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId === "#" ||
                !targetId
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                const headerHeight =
                    header.offsetHeight;

                const targetPosition =
                    target.offsetTop -
                    headerHeight;

                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }

        });

    });


    /* ================= PROJECT CARD TILT ================= */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach((card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                if (
                    window.innerWidth < 900
                ) {
                    return;
                }

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) / centerY) * -2;

                const rotateY =
                    ((x - centerX) / centerX) * 2;

                card.style.transform =
                    `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-7px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });


    /* ================= CONSOLE MESSAGE ================= */

    console.log(
        "%cHello! 👋",
        "font-size: 20px; font-weight: bold;"
    );

    console.log(
        "%cWelcome to Sanskruti's portfolio.",
        "font-size: 14px;"
    );

});