document.addEventListener('DOMContentLoaded', () => {

    /*** 🔹 Hamburger Menu Toggle ***/
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    /*** 🔹 Smooth Scrolling ***/
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    /*** 🔹 Scroll-Up Button with Progress ***/
    const scrollUpBtn = document.getElementById('scrollUpBtn');
    const scrollProgress = document.querySelector('.scroll-progress');

    if (scrollUpBtn) {
        const updateScrollButton = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            // Show/hide button
            scrollUpBtn.classList.toggle('show', scrollTop > 300);

            // Update circular progress
            if (scrollProgress) {
                scrollProgress.style.background = `conic-gradient(#3498db ${scrollPercent}%, #ddd ${scrollPercent}%)`;
            }
        };

        scrollUpBtn.addEventListener('click', e => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('scroll', updateScrollButton);
        updateScrollButton();
    }

    /*** 🔹 Scroll Reveal Animations ***/
    const sections = document.querySelectorAll('.content-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add('hidden-section');
        observer.observe(section);
    });

    /*** 🔹 Typing Effect for Roles ***/
const roles = [
  "Backend Developer",
  "C# Developer",
  "ASP.NET MVC",
  "SQL Server Specialist",
  "Full-Stack Developer"
];
    let roleIndex = 0;
    let charIndex = 0;
    const roleElement = document.querySelector('.animated-role');

    const typeRole = () => {
        if (!roleElement) return;

        if (charIndex < roles[roleIndex].length) {
            roleElement.textContent += roles[roleIndex][charIndex++];
            setTimeout(typeRole, 100);
        } else {
            setTimeout(eraseRole, 2000);
        }
    };

    const eraseRole = () => {
        if (!roleElement) return;

        if (charIndex > 0) {
            roleElement.textContent = roles[roleIndex].substring(0, --charIndex);
            setTimeout(eraseRole, 50);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 500);
        }
    };

    if (roleElement) typeRole();

    /*** 🔹 Contact Form Validation (Email or Phone Required) ***/
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        const emailInput = contactForm.querySelector('input[name="email"]');
        const phoneInput = contactForm.querySelector('input[name="phone"]');

        contactForm.addEventListener('submit', e => {
            if (!emailInput.value.trim() && !phoneInput.value.trim()) {
                e.preventDefault();
                phoneInput.setCustomValidity('Please provide either your email or phone number.');
                phoneInput.reportValidity();
            } else {
                phoneInput.setCustomValidity('');
            }
        });

        [emailInput, phoneInput].forEach(input => {
            input.addEventListener('input', () => phoneInput.setCustomValidity(''));
        });
    }

});
