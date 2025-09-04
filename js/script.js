document.addEventListener('DOMContentLoaded', () => {

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

    document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const scrollUpBtn = document.getElementById('scrollUpBtn');
    const scrollProgress = document.querySelector('.scroll-progress');

    if (scrollUpBtn) {
        const updateScrollButton = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            scrollUpBtn.classList.toggle('show', scrollTop > 300);

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

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    const emailInput = contactForm.querySelector('input[name="email"]');
    const phoneInput = contactForm.querySelector('input[name="phone"]');

    contactForm.addEventListener('submit', e => {
        e.preventDefault(); 

        const name = contactForm.name.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const message = contactForm.message.value.trim();

        if (!email && !phone) {
            alert('Please provide either your email or phone number.');
            return;
        }

        const subject = encodeURIComponent(`Message from ${name}`);
        let body = `Name: ${name}\n`;
        if (email) body += `Email: ${email}\n`;
        if (phone) body += `Phone: ${phone}\n`;
        body += `Message:\n${message}`;

        const mailtoLink = `mailto:youssefessam204@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    });

    [emailInput, phoneInput].forEach(input => {
        input.addEventListener('input', () => input.setCustomValidity(''));
    });
}


});
