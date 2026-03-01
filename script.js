// ===== script.js - Template Loja de Roupas =====
// JavaScript modular para loja de roupas

(function() {
    "use strict";

    // ----- CONFIGURAÇÃO CENTRALIZADA (EDITAR AQUI) -----
    const CONFIG = {
        // Número do WhatsApp (com código do país, sem +)
        whatsappNumber: "5511999999999",
        
        // Mensagem padrão para consultas
        whatsappMessage: "Olá! Quero saber mais sobre as roupas.",
        
        // Nome da loja
        storeName: "Moda & Estilo",
        
        // Email para newsletter (simulado)
        newsletterEmail: "contato@modaestilo.com.br"
    };

    // ----- FUNÇÃO PARA ATUALIZAR TODOS OS LINKS WHATSAPP -----
    function updateWhatsappLinks() {
        const wppLinks = document.querySelectorAll('a[href*="wa.me"]');
        
        wppLinks.forEach(link => {
            // Preserva links com data-custom="true"
            if (link.getAttribute('data-custom') === 'true') return;
            
            // Pega o texto existente se houver parâmetro personalizado
            let currentHref = link.getAttribute('href');
            let customMessage = '';
            
            // Se já tem ?text=, extrai e mantém a mensagem personalizada
            if (currentHref.includes('?text=')) {
                customMessage = currentHref.split('?text=')[1];
            }
            
            // Se não tem mensagem personalizada, usa a padrão
            if (!customMessage) {
                customMessage = encodeURIComponent(CONFIG.whatsappMessage);
            }
            
            // Constrói o novo href
            const baseUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${customMessage}`;
            link.setAttribute('href', baseUrl);
        });
    }

    // ----- MENU MOBILE -----
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            // Alternar ícone
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Fechar menu ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });

        // Fechar ao clicar fora
        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !menuToggle.contains(event.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // ----- EFEITO NA NAVBAR AO ROLAR -----
    const navbar = document.getElementById('navbar');
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll();

    // ----- SCROLL SUAVE -----
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ----- ANIMAÇÃO DE ENTRADA -----
    function initScrollReveal() {
        const elements = document.querySelectorAll('.service-card, .testimonial-card, .diff-item, .about-grid > *, .featured-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(25px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // ----- NEWSLETTER FORM -----
    function initNewsletter() {
        const form = document.getElementById('newsletterForm');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = this.querySelector('input[type="email"]').value;
                
                // Validação simples
                if (email && email.includes('@')) {
                    // Feedback visual
                    const button = this.querySelector('button');
                    const originalText = button.textContent;
                    button.textContent = 'Enviado!';
                    button.style.background = '#4caf50';
                    
                    // Simula envio (aqui você integraria com seu sistema)
                    console.log(`Newsletter cadastrado: ${email}`);
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.style.background = '';
                        form.reset();
                        
                        // Mensagem de sucesso flutuante
                        showToast('Obrigado! Você receberá nossas novidades.');
                    }, 2000);
                } else {
                    alert('Por favor, digite um e-mail válido.');
                }
            });
        }
    }

    // ----- TOAST NOTIFICATION -----
    function showToast(message) {
        // Cria elemento toast se não existir
        let toast = document.querySelector('.toast-notification');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast-notification';
            toast.style.cssText = `
                position: fixed;
                bottom: 100px;
                right: 30px;
                background: var(--primary-color);
                color: white;
                padding: 1rem 2rem;
                border-radius: 50px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                z-index: 9999;
                animation: slideIn 0.3s ease;
                font-weight: 500;
            `;
            document.body.appendChild(toast);
        }
        
        toast.textContent = message;
        toast.style.display = 'block';
        
        setTimeout(() => {
            toast.style.display = 'none';
        }, 3000);
    }

    // ----- ADICIONAR ANIMAÇÃO CSS -----
    function addAnimations() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // ----- CONTADOR DE VISUALIZAÇÕES (OPCIONAL) -----
    function trackCategoryClick() {
        const categoryButtons = document.querySelectorAll('.btn-card-wpp');
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const category = this.closest('.service-card')?.querySelector('h3')?.textContent;
                console.log(`Categoria consultada: ${category}`);
            });
        });
    }

    // ----- ATUALIZAR ANO NO FOOTER AUTOMATICAMENTE -----
    function updateFooterYear() {
        const footerYear = document.querySelector('.footer-bottom p');
        if (footerYear) {
            const currentYear = new Date().getFullYear();
            footerYear.innerHTML = footerYear.innerHTML.replace(/\d{4}/, currentYear);
        }
    }

    // ----- INICIALIZAÇÃO -----
    document.addEventListener('DOMContentLoaded', () => {
        initSmoothScroll();
        initScrollReveal();
        updateWhatsappLinks();
        initNewsletter();
        trackCategoryClick();
        updateFooterYear();
        addAnimations();
        
        // Adiciona classe para identificar que é loja de roupas
        document.body.classList.add('moda-loaded');
        
        console.log(`👕 Template ${CONFIG.storeName} carregado com sucesso!`);
    });

    // ----- ATUALIZA WHATSAPP CASO MUDE CONFIG -----
    window.updateWpp = updateWhatsappLinks;

    // Expor configuração para edição via console
    window.MODA_CONFIG = CONFIG;
})();