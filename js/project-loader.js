// Project Loader - Universal functions for all pages
let allProjects = [];

// Load projects from JSON file
async function loadProjects() {
    try {
        const response = await fetch('data/projects.json');
        const data = await response.json();
        allProjects = data.projects;
        return allProjects;
    } catch (error) {
        console.error('Error loading projects:', error);
        return [];
    }
}

// Display featured projects (for home page)
function displayFeaturedProjects() {
    const container = document.getElementById('featured-projects-container');
    if (!container) return;

    const featuredProjects = allProjects.filter(project => project.featured);

    if (featuredProjects.length === 0) {
        container.innerHTML = '<p>No featured projects found.</p>';
        return;
    }

    const projectsHTML = featuredProjects.map(project => `
        <div class="project-card" onclick="openProjectModal('${project.id}')">
            <div class="project-icon">
                <i class="fas fa-${project.icon}"></i>
            </div>
            <h3>${project.title}</h3>
            <p class="project-description">${project.description}</p>

            <div class="project-highlights">
                ${project.highlights.map(highlight => `
                    <div class="highlight">
                        <span class="highlight-value">${highlight.value}</span>
                        <span class="highlight-label">${highlight.label}</span>
                    </div>
                `).join('')}
            </div>

            <div class="project-tools">
                ${project.tools.slice(0, 3).map(tool => `<span class="tool">${tool}</span>`).join('')}
            </div>

            <div class="project-links">
                <a href="${project.links.github}" class="link-btn" onclick="event.stopPropagation()" target="_blank">
                    <i class="fab fa-github"></i> Code
                </a>
                ${project.links.demo !== '#' ? `
                <a href="${project.links.demo}" class="link-btn" onclick="event.stopPropagation()" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Demo
                </a>
                ` : ''}
            </div>
        </div>
    `).join('');

    container.innerHTML = projectsHTML;
}

// Display all projects with filtering (for projects page)
function displayAllProjects() {
    const analyticalContainer = document.getElementById('analytical-container');
    const developmentContainer = document.getElementById('development-container');

    if (!analyticalContainer || !developmentContainer) return;

    const analyticalProjects = allProjects.filter(project => project.projectType === "analytical");
    const developmentProjects = allProjects.filter(project => project.projectType === "development");

    displayProjectSection('analytical-container', analyticalProjects);
    displayProjectSection('development-container', developmentProjects);
}

// Display projects in specific container
function displayProjectSection(containerId, projects) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (projects.length === 0) {
        container.innerHTML = '<p class="no-projects">No projects found in this category.</p>';
        return;
    }

    const projectsHTML = projects.map(project => `
        <div class="project-page-card" data-categories="${project.category.join(' ')}" onclick="openProjectModal('${project.id}')">
            <div class="project-page-icon">
                <i class="fas fa-${project.icon}"></i>
            </div>
            <h3>${project.title}</h3>
            <p class="project-page-description">${project.description}</p>

            <div class="project-page-highlights">
                ${project.highlights.map(highlight => `
                    <div class="project-highlight">
                        <span class="project-highlight-value">${highlight.value}</span>
                        <span class="project-highlight-label">${highlight.label}</span>
                    </div>
                `).join('')}
            </div>

            <div class="project-page-tools">
                ${project.tools.map(tool => `<span class="project-tool">${tool}</span>`).join('')}
            </div>

            <div class="project-page-links">
                <a href="${project.links.github}" class="project-link-btn" onclick="event.stopPropagation()" target="_blank">
                    <i class="fab fa-github"></i> Code
                </a>
                ${project.links.demo !== '#' ? `
                <a href="${project.links.demo}" class="project-link-btn" onclick="event.stopPropagation()" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Demo
                </a>
                ` : ''}
            </div>
        </div>
    `).join('');

    container.innerHTML = projectsHTML;
}

// Filter functionality for projects page
function filterProjects(category) {
    if (category === 'all') {
        displayAllProjects();
        return;
    }

    const filteredAnalytical = allProjects.filter(project =>
        project.projectType === "analytical" && project.category.includes(category)
    );

    const filteredDevelopment = allProjects.filter(project =>
        project.projectType === "development" && project.category.includes(category)
    );

    displayProjectSection('analytical-container', filteredAnalytical);
    displayProjectSection('development-container', filteredDevelopment);
}

// Setup filter functionality
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            const filter = button.dataset.filter;
            filterProjects(filter);
        });
    });
}

// Open project modal (works on both pages)
function openProjectModal(projectId) {
    const project = allProjects.find(p => p.id === projectId);
    if (!project) return;

    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <div class="modal-header">
            <div class="modal-icon">
                <i class="fas fa-${project.icon}"></i>
            </div>
            <div>
                <h2>${project.title}</h2>
                <div class="modal-tools">
                    ${project.tools.map(tool => `<span class="tool">${tool}</span>`).join('')}
                </div>
            </div>
        </div>

        <div class="modal-body">
            <div class="key-metrics">
                ${project.metrics.map(metric => `
                    <div class="metric-card">
                        <div class="metric-value">${metric.value}</div>
                        <div class="metric-label">${metric.label}</div>
                    </div>
                `).join('')}
            </div>

            <div class="insights-section">
                <h3>What I Discovered</h3>
                <div class="insights-grid">
                    ${project.insights.map(insight => `
                        <div class="insight-item">
                            <i class="fas fa-lightbulb"></i>
                            <div>
                                <p>${insight}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="learning-section">
                <h3>What I Learned</h3>
                <ul class="learning-list">
                    ${project.whatILearned.map(learning => `<li>${learning}</li>`).join('')}
                </ul>
            </div>

            <div class="challenges-section">
                <h3>Challenges I Faced</h3>
                <ul class="challenges-list">
                    ${project.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-links">
                <a href="${project.links.github}" class="btn btn-primary" target="_blank">
                    <i class="fab fa-github"></i> View Code
                </a>
                ${project.links.demo !== '#' ? `
                <a href="${project.links.demo}" class="btn btn-secondary" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
                ` : ''}
            </div>
        </div>
    `;

    document.getElementById('project-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Modal close functionality
function setupModalClose() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Initialize based on page
async function initializeProjects() {
    await loadProjects();

    // Check which page we're on and call appropriate function
    if (document.getElementById('featured-projects-container')) {
        displayFeaturedProjects(); // Home page
    }

    if (document.getElementById('analytical-container')) {
        displayAllProjects(); // Projects page
        setupFilters(); // Only on projects page
    }

    setupModalClose(); // Works on both pages
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initializeProjects);