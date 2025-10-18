// Translations object - Complete portfolio content in 3 languages
const translations = {
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_about: "À propos",
        nav_skills: "Compétences",
        nav_projects: "Projets",
        nav_experience: "Expérience",
        nav_education: "Formation",
        nav_contact: "Contact",
        
        // Hero Section
        hero_title: "AI Engineer | Data Scientist | ML Engineer",
        hero_description: "Passionné par l'intelligence artificielle et l'apprentissage automatique, je conçois des solutions IA innovantes et automatise le cycle de développement logiciel.",
        hero_btn_projects: "Voir mes projets",
        hero_btn_contact: "Me contacter",
        
        // About Section
        about_title: "À propos de moi",
        about_greeting: "Bonjour ! Je suis <span class='highlight'>Yassine JADA</span>",
        about_p1: "AI Engineer passionné par l'intégration de l'IA dans des solutions applicatives innovantes. Spécialisé en Machine Learning, Deep Learning, NLP et IA générative, je développe des systèmes intelligents qui automatisent et optimisent les processus métiers.",
        about_p2: "Diplômé d'un Master en Sciences des Données et Génie Logiciel, j'ai travaillé sur des projets variés allant de la notation de crédit bancaire aux agents intelligents d'automatisation basés sur les LLMs. Mon expertise couvre l'ensemble du cycle de vie des projets IA, de l'analyse des données au déploiement de modèles en production.",
        stat_experience: "Années d'expérience",
        stat_projects: "Projets complétés",
        stat_certifications: "Certifications",
        about_btn_cv: "Télécharger CV",
        
        // Skills Section
        skills_title: "Compétences Techniques",
        
        // Projects Section
        projects_title: "Projets ML & AI",
        
        // Experience Section
        experience_title: "Expérience Professionnelle",
        
        // Education Section
        education_title: "Formation Académique",
        
        // Contact Section
        contact_title: "Contactez-moi"
    },
    
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_experience: "Experience",
        nav_education: "Education",
        nav_contact: "Contact",
        
        // Hero Section
        hero_title: "AI Engineer | Data Scientist | ML Engineer",
        hero_description: "Passionate about artificial intelligence and machine learning, I design innovative AI solutions and automate software development cycles.",
        hero_btn_projects: "View my projects",
        hero_btn_contact: "Contact me",
        
        // About Section
        about_title: "About Me",
        about_greeting: "Hello! I'm <span class='highlight'>Yassine JADA</span>",
        about_p1: "AI Engineer passionate about integrating AI into innovative application solutions. Specialized in Machine Learning, Deep Learning, NLP and generative AI, I develop intelligent systems that automate and optimize business processes.",
        about_p2: "Graduated with a Master's in Data Science and Software Engineering, I have worked on varied projects ranging from banking credit scoring to intelligent automation agents based on LLMs. My expertise covers the entire AI project lifecycle, from data analysis to deploying models in production.",
        stat_experience: "Years of experience",
        stat_projects: "Completed projects",
        stat_certifications: "Certifications",
        about_btn_cv: "Download CV",
        
        // Skills Section
        skills_title: "Technical Skills",
        
        // Projects Section
        projects_title: "ML & AI Projects",
        
        // Experience Section
        experience_title: "Professional Experience",
        
        // Education Section
        education_title: "Academic Background",
        
        // Contact Section
        contact_title: "Contact Me"
    },
    
    de: {
        // Navigation
        nav_home: "Startseite",
        nav_about: "Über mich",
        nav_skills: "Fähigkeiten",
        nav_projects: "Projekte",
        nav_experience: "Erfahrung",
        nav_education: "Bildung",
        nav_contact: "Kontakt",
        
        // Hero Section
        hero_title: "KI-Ingenieur | Data Scientist | ML-Ingenieur",
        hero_description: "Leidenschaftlich für künstliche Intelligenz und maschinelles Lernen entwickle ich innovative KI-Lösungen und automatisiere Softwareentwicklungszyklen.",
        hero_btn_projects: "Meine Projekte ansehen",
        hero_btn_contact: "Kontaktieren Sie mich",
        
        // About Section
        about_title: "Über mich",
        about_greeting: "Hallo! Ich bin <span class='highlight'>Yassine JADA</span>",
        about_p1: "KI-Ingenieur mit Leidenschaft für die Integration von KI in innovative Anwendungslösungen. Spezialisiert auf Machine Learning, Deep Learning, NLP und generative KI entwickle ich intelligente Systeme, die Geschäftsprozesse automatisieren und optimieren.",
        about_p2: "Mit einem Master-Abschluss in Datenwissenschaft und Software-Engineering habe ich an verschiedenen Projekten gearbeitet, von Kreditbewertungen im Bankwesen bis hin zu intelligenten Automatisierungsagenten auf Basis von LLMs. Meine Expertise umfasst den gesamten KI-Projektlebenszyklus, von der Datenanalyse bis zur Bereitstellung von Modellen in der Produktion.",
        stat_experience: "Jahre Erfahrung",
        stat_projects: "Abgeschlossene Projekte",
        stat_certifications: "Zertifizierungen",
        about_btn_cv: "Lebenslauf herunterladen",
        
        // Skills Section
        skills_title: "Technische Fähigkeiten",
        
        // Projects Section
        projects_title: "ML & KI Projekte",
        
        // Experience Section
        experience_title: "Berufserfahrung",
        
        // Education Section
        education_title: "Akademischer Hintergrund",
        
        // Contact Section
        contact_title: "Kontaktieren Sie mich"
    }
};

// Function to change language
function changeLanguage(lang) {
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Check if complete translations exist
    const translationData = typeof completeTranslations !== 'undefined' ? completeTranslations : translations;
    
    // Update all translatable elements (except typing-effect which is handled separately)
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        // Skip typing effect element - it will be handled separately below
        if (element.classList.contains('typing-effect')) {
            return;
        }
        if (translationData[lang] && translationData[lang][key]) {
            element.innerHTML = translationData[lang][key];
        }
    });
    
    // Update placeholders for form inputs
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translationData[lang] && translationData[lang][key]) {
            element.setAttribute('placeholder', translationData[lang][key]);
        }
    });
    
    // Update CV download link based on language
    const cvLink = document.querySelector('.cv-download-link');
    if (cvLink) {
        if (lang === 'fr') {
            cvLink.setAttribute('href', 'Yassine_JADA_CV.pdf');
            cvLink.setAttribute('download', 'Yassine_JADA_CV.pdf');
        } else {
            // Use English CV for both English and German
            cvLink.setAttribute('href', 'Yassine_JADA_CV_Eng.pdf');
            cvLink.setAttribute('download', 'Yassine_JADA_CV_Eng.pdf');
        }
    }
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update typing effect text with translated content
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement && translationData[lang] && translationData[lang].hero_title) {
        // Clear any existing typing animation
        if (window.typingTimeout) {
            clearTimeout(window.typingTimeout);
        }
        
        typingElement.textContent = '';
        const text = translationData[lang].hero_title;
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                window.typingTimeout = setTimeout(typeWriter, 50);
            }
        }
        
        window.typingTimeout = setTimeout(typeWriter, 300);
    }
}

// Initialize language buttons
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
    changeLanguage(savedLang);
    
    // Add click event to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
    
    // CV download handler - Mobile friendly
    const cvLink = document.querySelector('.cv-download-link');
    if (cvLink) {
        cvLink.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const downloadName = this.getAttribute('download');
            
            // Detect mobile
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            
            if (isMobile) {
                // On mobile: Open in new tab (allows user to download from browser menu)
                window.open(href, '_blank', 'noopener,noreferrer');
            } else {
                // On desktop: Force download
                fetch(href)
                    .then(response => response.blob())
                    .then(blob => {
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.style.display = 'none';
                        a.href = url;
                        a.download = downloadName;
                        document.body.appendChild(a);
                        a.click();
                        window.URL.revokeObjectURL(url);
                        document.body.removeChild(a);
                    })
                    .catch(() => {
                        window.open(href, '_blank');
                    });
            }
        });
    }
});

console.log('Multi-language support loaded! 🌍');
