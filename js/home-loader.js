// Simple Home Page Loader
async function loadAndDisplayProjects() {
    try {
        const response = await fetch('data/projects.json');
        const data = await response.json();
        const featuredProjects = data.projects.filter(project => project.featured);

        const container = document.getElementById('featured-projects-container');

        const projectsHTML = featuredProjects.map(project => `
            <div class="project-card" onclick="showProjectDetails('${project.id}')">
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
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// Global function for modal
window.showProjectDetails = async function(projectId) {
    try {
        const response = await fetch('data/projects.json');
        const data = await response.json();
        const project = data.projects.find(p => p.id === projectId);

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
                                <div><p>${insight}</p></div>
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
    } catch (error) {
        console.error('Error loading project details:', error);
    }
}

// Modal close functionality
function setupModalClose() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

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

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadAndDisplayProjects();
    setupModalClose();
});