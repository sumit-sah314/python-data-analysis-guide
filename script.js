// Copy code functionality
function copyCode(button) {
    const codeBlock = button.nextElementSibling;
    const code = codeBlock.textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        // Change button text temporarily
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy code:', err);
        button.textContent = 'Error!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sidebar a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    // Highlight current section in navigation
    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -60% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
    
    // Add scroll-to-top functionality
    let scrollToTopBtn;
    
    // Create scroll to top button
    const createScrollButton = () => {
        scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = '↑';
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(scrollToTopBtn);
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };
    
    createScrollButton();
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
});

// Add styles for scroll to top button dynamically
const style = document.createElement('style');
style.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #2563eb, #1e40af);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    }
    
    .scroll-to-top.visible {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-to-top:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
    
    .scroll-to-top:active {
        transform: translateY(-1px);
    }
    
    .sidebar a.active {
        background-color: #eff6ff;
        border-left-color: #2563eb;
        color: #2563eb;
        font-weight: 600;
    }
    
    @media (max-width: 768px) {
        .scroll-to-top {
            bottom: 1rem;
            right: 1rem;
            width: 45px;
            height: 45px;
        }
    }
`;
document.head.appendChild(style);
