// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Calculator Logic
class PricingCalculator {
    constructor() {
        this.basePrice = 29;
        this.userPrice = 2;
        this.storagePrice = 0.1; // per GB
        this.apiPrice = 0.001; // per 1000 calls
        this.supportMultipliers = {
            basic: 1,
            priority: 1.5,
            enterprise: 2
        };
        
        this.initializeElements();
        this.bindEvents();
        this.calculatePrice();
    }

    initializeElements() {
        this.usersSlider = document.getElementById('users');
        this.storageSlider = document.getElementById('storage');
        this.apiCallsSlider = document.getElementById('api-calls');
        this.supportSelect = document.getElementById('support');
        
        this.usersValue = document.getElementById('users-value');
        this.storageValue = document.getElementById('storage-value');
        this.apiCallsValue = document.getElementById('api-calls-value');
        
        this.totalPriceElement = document.getElementById('total-price');
        this.savingsAmountElement = document.getElementById('savings-amount');
    }

    bindEvents() {
        this.usersSlider.addEventListener('input', () => this.updateSliderValue('users'));
        this.storageSlider.addEventListener('input', () => this.updateSliderValue('storage'));
        this.apiCallsSlider.addEventListener('input', () => this.updateSliderValue('api-calls'));
        this.supportSelect.addEventListener('change', () => this.calculatePrice());
    }

    updateSliderValue(type) {
        const slider = document.getElementById(type);
        const valueElement = document.getElementById(`${type}-value`);
        
        let value = parseInt(slider.value);
        
        switch(type) {
            case 'users':
                valueElement.textContent = value;
                break;
            case 'storage':
                valueElement.textContent = `${value} GB`;
                break;
            case 'api-calls':
                valueElement.textContent = value.toLocaleString();
                break;
        }
        
        this.calculatePrice();
    }

    calculatePrice() {
        const users = parseInt(this.usersSlider.value);
        const storage = parseInt(this.storageSlider.value);
        const apiCalls = parseInt(this.apiCallsSlider.value);
        const support = this.supportSelect.value;
        
        // Calculate base costs
        let totalCost = this.basePrice;
        totalCost += users * this.userPrice;
        totalCost += storage * this.storagePrice;
        totalCost += (apiCalls / 1000) * this.apiPrice;
        
        // Apply support multiplier
        totalCost *= this.supportMultipliers[support];
        
        // Round to nearest dollar
        totalCost = Math.round(totalCost);
        
        // Calculate savings (compared to enterprise solution)
        const enterpriseCost = this.calculateEnterpriseCost(users, storage, apiCalls);
        const savings = Math.max(0, enterpriseCost - totalCost);
        
        this.updateDisplay(totalCost, savings);
    }

    calculateEnterpriseCost(users, storage, apiCalls) {
        // Simulate enterprise pricing
        let enterpriseCost = 199; // Base enterprise price
        enterpriseCost += Math.max(0, users - 25) * 5; // Additional users
        enterpriseCost += Math.max(0, storage - 1000) * 0.05; // Additional storage
        enterpriseCost += Math.max(0, apiCalls - 100000) * 0.0001; // Additional API calls
        return Math.round(enterpriseCost);
    }

    updateDisplay(price, savings) {
        // Animate price change
        this.animateValue(this.totalPriceElement, parseInt(this.totalPriceElement.textContent) || 0, price, 500);
        this.animateValue(this.savingsAmountElement, parseInt(this.savingsAmountElement.textContent.replace('$', '').replace(',', '')) || 0, savings, 500);
    }

    animateValue(element, start, end, duration) {
        const startTime = performance.now();
        const isPrice = element.id === 'total-price';
        
        function updateValue(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.round(start + (end - start) * easeOutCubic);
            
            if (isPrice) {
                element.textContent = currentValue;
            } else {
                element.textContent = `$${currentValue.toLocaleString()}`;
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateValue);
            }
        }
        
        requestAnimationFrame(updateValue);
    }
}

// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Intersection Observer for Animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Pricing Toggle Functionality
class PricingToggle {
    constructor() {
        this.toggle = document.getElementById('pricing-toggle');
        this.monthlyLabel = document.getElementById('monthly-label');
        this.yearlyLabel = document.getElementById('yearly-label');
        this.yearlySavings = document.getElementById('yearly-savings');
        
        // Original monthly prices
        this.originalPrices = {
            starter: 29,
            professional: 79,
            enterprise: 199
        };
        
        // Get all price elements
        this.priceElements = document.querySelectorAll('.amount');
        this.yearlySavingsCards = document.querySelectorAll('.yearly-savings');
        
        this.init();
    }

    init() {
        this.toggle.addEventListener('change', () => this.handleToggle());
        this.updateLabels();
        this.updatePrices();
    }

    handleToggle() {
        this.updatePrices();
        this.updateLabels();
        this.animateToggle();
    }

    updatePrices() {
        const isYearly = this.toggle.checked;
        
        // Calculate yearly prices (20% discount)
        const yearlyPrices = {
            starter: Math.round(this.originalPrices.starter * 0.8),
            professional: Math.round(this.originalPrices.professional * 0.8),
            enterprise: Math.round(this.originalPrices.enterprise * 0.8)
        };
        
        // Update each pricing card
        const pricingCards = document.querySelectorAll('.pricing-card');
        pricingCards.forEach((card, index) => {
            const priceElement = card.querySelector('.amount');
            const savingsElement = card.querySelector('.yearly-savings');
            
            if (priceElement) {
                let newPrice;
                let savingsAmount;
                
                switch(index) {
                    case 0: // Starter
                        newPrice = isYearly ? yearlyPrices.starter : this.originalPrices.starter;
                        savingsAmount = (this.originalPrices.starter - yearlyPrices.starter) * 12;
                        break;
                    case 1: // Professional
                        newPrice = isYearly ? yearlyPrices.professional : this.originalPrices.professional;
                        savingsAmount = (this.originalPrices.professional - yearlyPrices.professional) * 12;
                        break;
                    case 2: // Enterprise
                        newPrice = isYearly ? yearlyPrices.enterprise : this.originalPrices.enterprise;
                        savingsAmount = (this.originalPrices.enterprise - yearlyPrices.enterprise) * 12;
                        break;
                }
                
                // Animate price change
                this.animatePriceChange(priceElement, newPrice);
                
                // Update savings display
                if (savingsElement) {
                    const savingsText = savingsElement.querySelector('.savings-text');
                    if (savingsText) {
                        savingsText.textContent = `Save $${savingsAmount}/year`;
                    }
                    savingsElement.style.display = isYearly ? 'block' : 'none';
                }
            }
        });
    }

    animatePriceChange(element, newPrice) {
        const currentPrice = parseInt(element.textContent);
        const startTime = performance.now();
        const duration = 300;
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.round(currentPrice + (newPrice - currentPrice) * easeOutCubic);
            
            element.textContent = currentValue;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }

    updateLabels() {
        const isYearly = this.toggle.checked;
        
        if (isYearly) {
            this.monthlyLabel.classList.remove('active');
            this.yearlyLabel.classList.add('active');
            this.yearlySavings.style.display = 'inline-block';
        } else {
            this.monthlyLabel.classList.add('active');
            this.yearlyLabel.classList.remove('active');
            this.yearlySavings.style.display = 'none';
        }
    }

    animateToggle() {
        // Add a subtle animation to the pricing cards
        const pricingCards = document.querySelectorAll('.pricing-card');
        pricingCards.forEach((card, index) => {
            card.style.transform = 'scale(0.98)';
            card.style.transition = 'transform 0.2s ease';
            
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 100 + (index * 50));
        });
    }
}

// Initialize Calculator and Pricing Toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new PricingCalculator();
    new PricingToggle();
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Add click handlers for CTA buttons
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button, .btn-primary');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add a simple click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // In a real application, this would redirect to signup or show a modal
            alert('Thank you for your interest! This would redirect to the signup page.');
        });
    });
});

// Add hover effects for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const interactiveElements = document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card, .floating-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});
