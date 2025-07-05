// Navigation mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Fermer le menu mobile quand on clique sur un lien
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Animation au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observer les éléments à animer
    document.querySelectorAll('.skill-category, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Modal pour les détails des projets
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');

// Fermer le modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Fonction pour afficher les détails du projet
function showProjectDetails(projectType) {
    let content = '';
    
    switch(projectType) {
        case 'pokemon':
            content = `
                <h2>🎮 Pokémon Évasion - Détails Techniques</h2>
                <div class="project-details">
                    <h3>Description</h3>
                    <p>Un jeu d'action/arcade 2D développé en C avec SDL2. Le joueur incarne un Pokémon qui doit échapper aux Poké Balls tout en collectant des items pour survivre.</p>
                    
                    <h3>Fonctionnalités Principales</h3>
                    <ul>
                        <li><strong>6 Pokémon jouables</strong> : Chaque Pokémon a ses propres statistiques et capacités</li>
                        <li><strong>3 arènes différentes</strong> : Environnements variés avec obstacles uniques</li>
                        <li><strong>Système de vie et score</strong> : Gestion de la santé et comptage des points</li>
                        <li><strong>Timer et difficulté progressive</strong> : Le jeu devient plus difficile avec le temps</li>
                        <li><strong>Attaques normale et chargée</strong> : Système de combat avec deux types d'attaques</li>
                        <li><strong>Collecte d'items</strong> : Baies, Baies Dorées et Potions pour améliorer les performances</li>
                        <li><strong>Classement MySQL</strong> : Sauvegarde des meilleurs scores en base de données</li>
                        <li><strong>Contrôles multiples</strong> : Support clavier et souris</li>
                    </ul>
                    
                    <h3>Technologies Utilisées</h3>
                    <div class="tech-stack">
                        <span class="tech-item">C</span>
                        <span class="tech-item">SDL2</span>
                        <span class="tech-item">SDL2_Image</span>
                        <span class="tech-item">SDL2_Mixer</span>
                        <span class="tech-item">SDL2_TTF</span>
                        <span class="tech-item">MySQL</span>
                        <span class="tech-item">MinGW</span>
                    </div>
                    
                    <h3>Architecture</h3>
                    <p>Le projet est développé dans un fichier C unique pour simplifier la compilation et le déploiement. L'architecture inclut :</p>
                    <ul>
                        <li>Gestion des états de jeu (menu, jeu, pause, game over)</li>
                        <li>Système de rendu avec SDL2</li>
                        <li>Gestion des collisions et physique</li>
                        <li>Système audio avec effets sonores</li>
                        <li>Interface utilisateur avec polices personnalisées</li>
                        <li>Connexion à la base de données MySQL</li>
                    </ul>
                    
                    <h3>Défis Techniques</h3>
                    <ul>
                        <li>Optimisation des performances pour un gameplay fluide</li>
                        <li>Gestion de la mémoire avec SDL2</li>
                        <li>Intégration de la base de données MySQL</li>
                        <li>Cross-platform compatibility (Windows/Linux)</li>
                    </ul>
                </div>
            `;
            break;
    }
    
    modalContent.innerHTML = content;
    modal.style.display = "block";
}

// Animation du texte au chargement
document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.glitch');
    if (title) {
        title.style.opacity = '0';
        title.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            title.style.transition = 'opacity 1s ease, transform 1s ease';
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
        }, 500);
    }
    
    // Animation des étoiles en arrière-plan
    createStars();
});

// Fonction pour créer des étoiles animées
function createStars() {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: twinkle ${2 + Math.random() * 3}s infinite;
            opacity: ${0.3 + Math.random() * 0.7};
        `;
        starsContainer.appendChild(star);
    }
}

// Ajout de styles CSS pour les étoiles
const starStyles = document.createElement('style');
starStyles.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
    }
    
    .project-details h3 {
        color: var(--primary-color);
        margin: 1.5rem 0 0.5rem 0;
        font-size: 1.2rem;
    }
    
    .project-details ul {
        margin: 0.5rem 0 1rem 1.5rem;
    }
    
    .project-details li {
        margin-bottom: 0.5rem;
        color: var(--text-secondary);
    }
    
    .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;
    }
    
    .tech-item {
        background: rgba(0, 212, 255, 0.1);
        color: var(--primary-color);
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        border: 1px solid rgba(0, 212, 255, 0.3);
    }
`;
document.head.appendChild(starStyles);

// Smooth scroll pour les liens internes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation des compétences au hover
document.addEventListener('DOMContentLoaded', function() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}); 