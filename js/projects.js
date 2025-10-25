// All projects data with projectType classification
const allProjects = [
    // ========== ANALYTICAL PROJECTS ==========
    {
        id: "play-store-analysis",
        title: "Google Play Store App Analysis",
        description: "Market analysis to identify successful app strategies and high-opportunity categories",
        projectType: "analytical",
        category: ["python", "data-analysis", "business-intelligence", "analytical"],
        tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
        highlights: [
            {value: "13.6% → 0%", label: "Data Quality Improved"},
            {value: "200x", label: "Opportunity Ratio"},
            {value: "168x", label: "Install Advantage"}
        ],
        metrics: [
            {value: "13.6% → 0%", label: "Missing Data Handled"},
            {value: "200x", label: "Best Opportunity Ratio"},
            {value: "168x", label: "Free vs Paid Install Ratio"}
        ],
        insights: [
            "VIDEO_PLAYERS category = 200x better install-to-competition ratio",
            "Free apps = 168x more installs than paid apps",
            "Reviews & Installs = 0.63 correlation (strongest success driver)"
        ],
        businessImpact: [
            "Identified 3 high-opportunity categories for new app development",
            "Recommended free-first pricing strategy for market entry",
            "Provided data-driven category selection framework for investors"
        ],
        links: {
            github: "https://github.com/Rohit9964/Google-Play-Store-App-Analysis",
            demo: "https://nbviewer.org/github/Rohit9964/Google-Play-Store-App-Analysis/blob/main/Google%20Play%20Store%20App%20Analysis.ipynb"
        },
        icon: "mobile-alt"
    },
    {
        id: "astronomical-predictor",
        title: "Astronomical Events Predictor",
        description: "Machine learning model to predict astronomical events using multi-output Random Forest classifier",
        projectType: "analytical",
        category: ["python", "machine-learning", "data-science", "analytical"],
        tools: ["Python", "Random Forest", "Skyfield", "PVlib", "Pandas", "Scikit-learn"],
        highlights: [
            {value: "Multi-output", label: "Random Forest"},
            {value: "High Accuracy", label: "Model Performance"},
            {value: "Feature Engineering", label: "Celestial Mechanics"}
        ],
        metrics: [
            {value: "Multi-output", label: "Classifier Type"},
            {value: "High Accuracy", label: "Across Target Variables"},
            {value: "Robust Pipeline", label: "Data Processing"}
        ],
        insights: [
            "Designed and trained multi-output Random Forest classifier for event type, intensity, and visibility prediction",
            "Engineered predictive features using astronomical libraries (Skyfield, PVlib) for celestial mechanics",
            "Built complete data processing pipeline from collection to feature extraction",
            "Validated model performance achieving high accuracy across multiple target variables"
        ],
        businessImpact: [
            "Accurate prediction of astronomical events for educational and research purposes",
            "Demonstrated practical application of machine learning in astronomy",
            "Showcased robust data pipeline development and feature engineering skills"
        ],
        links: {
            github: "https://github.com/Rohit9964/astronomical-events-predictor",
            demo: "#"
        },
        icon: "star"
    },

    // ========== DEVELOPMENT PROJECTS ==========
    {
        id: "todo-rest-api",
        title: "To-Do List REST API",
        description: "Spring Boot REST API for task management with full CRUD functionality",
        projectType: "development",
        category: ["java", "backend", "web-development", "development"],
        tools: ["Java", "Spring Boot", "MySQL", "Maven", "REST API", "JPA"],
        highlights: [
            {value: "Spring Boot", label: "Framework"},
            {value: "Full CRUD", label: "Functionality"},
            {value: "REST API", label: "Architecture"}
        ],
        metrics: [
            {value: "Spring Boot", label: "Core Framework"},
            {value: "MySQL", label: "Database"},
            {value: "Maven", label: "Build Tool"}
        ],
        insights: [
            "Built Spring Boot REST API mastering core concepts: Beans, Dependency Injection, JPA Repositories",
            "Implemented complete CRUD functionality for task management endpoints",
            "Established database connectivity using Spring Data JPA with MySQL",
            "Managed dependencies with Maven and used GitHub for version control"
        ],
        businessImpact: [
            "Demonstrated backend development skills with modern Java frameworks",
            "Showcased understanding of RESTful API design and implementation",
            "Proved ability to work with databases and ORM principles"
        ],
        links: {
            github: "https://github.com/Rohit9964/todo-rest-api",
            demo: "#"
        },
        icon: "check-circle"
    },
    {
        id: "medical-inventory",
        title: "Medical Store Inventory System",
        description: "Java-based inventory management system with MySQL integration",
        projectType: "development",
        category: ["java", "database", "desktop-app", "development"],
        tools: ["Java", "MySQL", "JDBC", "OOP", "Collections Framework"],
        highlights: [
            {value: "Java OOP", label: "Architecture"},
            {value: "MySQL", label: "Database"},
            {value: "Inventory Tracking", label: "Features"}
        ],
        metrics: [
            {value: "Java Collections", label: "Data Handling"},
            {value: "JDBC", label: "Database Connectivity"},
            {value: "CRUD Operations", label: "Core Functionality"}
        ],
        insights: [
            "Built Java application with clean architecture for medical inventory management",
            "Utilized Java Collections Framework (ArrayList, TreeSet) for efficient data processing",
            "Applied OOP principles for modular and maintainable system design",
            "Integrated MySQL database via JDBC for reliable data persistence"
        ],
        businessImpact: [
            "Streamlined pharmacy operations with inventory tracking and low-stock alerts",
            "Demonstrated full-stack development capabilities from UI to database",
            "Showcased problem-solving skills in real-world application development"
        ],
        links: {
            github: "https://github.com/Rohit9964/medical-inventory-system",
            demo: "#"
        },
        icon: "medkit"
    }
];

// Display projects in separate sections
function displayProjects() {
    const analyticalProjects = allProjects.filter(project => project.projectType === "analytical");
    const developmentProjects = allProjects.filter(project => project.projectType === "development");

    displayProjectSection('analytical-container', analyticalProjects);
    displayProjectSection('development-container', developmentProjects);
}

// Display projects in a specific container
function displayProjectSection(containerId, projects) {
    const container = document.getElementById(containerId);

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

// Filter projects by category
function filterProjects(category) {
    if (category === 'all') {
        displayProjects();
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

// Keep all other functions the same (openProjectModal, setupModalClose)
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
                <h3>Key Insights</h3>
                <div class="insights-grid">
                    ${project.insights.map(insight => `
                        <div class="insight-item">
                            <i class="fas fa-chart-line"></i>
                            <div>
                                <p>${insight}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="actions-section">
                <h3>Business Impact</h3>
                <ul class="impact-list">
                    ${project.businessImpact.map(impact => `<li>${impact}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-links">
                <a href="${project.links.github}" class="btn btn-primary" target="_blank">
                    <i class="fab fa-github"></i> View Source Code
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

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
    setupFilters();
    setupModalClose();
});