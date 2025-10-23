// All projects data in one place - no separate JSON file needed
const allProjects = [
    {
        id: "ecommerce-analysis",
        title: "E-commerce Customer Analysis",
        description: "Customer behavior and sales performance analysis to reduce churn",
        category: ["sql", "python", "dashboard"],
        tools: ["SQL", "Python", "Tableau", "Pandas"],
        highlights: [
            {value: "25% → 18%", label: "Churn Reduction"},
            {value: "$125K", label: "Annual Savings"},
            {value: "45%", label: "Retention Improvement"}
        ],
        metrics: [
            {value: "25% → 18%", label: "Churn Rate Reduction"},
            {value: "$125K", label: "Annual Cost Savings"},
            {value: "45%", label: "Retention Improvement"}
        ],
        insights: [
            "3+ purchases in first month = 60% higher retention",
            "AOV above $75 = 45% lower churn rate", 
            "45+ days between purchases = 3x churn risk"
        ],
        businessImpact: [
            "Implemented targeted email campaigns for at-risk customers",
            "Created customer segmentation for personalized marketing",
            "Reduced churn rate by 7 percentage points"
        ],
        links: {
            github: "https://github.com/yourname/ecommerce-analysis",
            demo: "https://public.tableau.com/your-dashboard"
        },
        icon: "shopping-cart"
        },
    {
        id: "covid-dashboard",
        title: "COVID-19 Data Visualization", 
        description: "Interactive dashboard tracking pandemic trends and vaccination rates",
        category: ["python", "dashboard"],
        tools: ["Python", "Plotly", "Pandas", "Requests"],
        highlights: [
            {value: "10K+", label: "Views"},
            {value: "Real-time", label: "Data"},
            {value: "5+", label: "Data Sources"}
        ],
        metrics: [
            {value: "10K+", label: "Dashboard Views"},
            {value: "Real-time", label: "Data Updates"},
            {value: "95%", label: "User Satisfaction"}
        ],
        insights: [
            "Vaccination rates correlated with case reduction",
            "Regional hotspots identified 2 weeks earlier",
            "Mobile usage dominated dashboard access"
        ],
        businessImpact: [
            "Provided real-time data for public health decisions",
            "Enabled trend forecasting for resource allocation", 
            "Improved public awareness through accessible visualization"
        ],
        links: {
            github: "https://github.com/yourname/covid-dashboard",
            demo: "https://your-name-covid-dashboard.streamlit.app"
        },
        icon: "heartbeat"
        },
    {
        id: "sales-analytics",
        title: "Sales Performance Dashboard",
        description: "Regional sales analysis and performance tracking with forecasting",
        category: ["sql", "dashboard"],
        tools: ["Power BI", "SQL", "DAX", "Excel"],
        highlights: [
            {value: "15%", label: "Revenue Increase"},
            {value: "15+", label: "KPIs Tracked"},
            {value: "Real-time", label: "Reporting"}
        ],
        metrics: [
            {value: "15%", label: "Revenue Growth"},
            {value: "20%", label: "Faster Reporting"},
            {value: "50+", label: "Users Served"}
        ],
        insights: [
            "West region outperforming others by 35%",
            "Q4 sales consistently 40% higher than Q1",
            "Product category A driving 60% of revenue"
        ],
        businessImpact: [
            "Enabled data-driven sales strategy decisions",
            "Reduced manual reporting time by 8 hours/week",
            "Improved regional performance visibility by 50%"
        ],
        links: {
            github: "https://github.com/yourname/sales-analytics",
            demo: "https://app.powerbi.com/your-dashboard"
        },
        icon: "chart-line"
    }
];

// Display projects in grid
function displayProjects(projects) {
    const container = document.getElementById('projects-container');
    
    if (projects.length === 0) {
        container.innerHTML = '<p>No projects found matching your filters.</p>';
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
                <a href="${project.links.demo}" class="project-link-btn" onclick="event.stopPropagation()" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Demo
                </a>
            </div>
        </div>
    `).join('');

    container.innerHTML = projectsHTML;
}

// Open project modal
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
                <a href="${project.links.demo}" class="btn btn-secondary" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            </div>
        </div>
    `;

    document.getElementById('project-modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
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

// Filter projects by category
function filterProjects(category) {
    if (category === 'all') {
        displayProjects(allProjects);
        return;
    }
    
    const filteredProjects = allProjects.filter(project => 
        project.category.includes(category)
    );
    
    displayProjects(filteredProjects);
}

// Close modal
function setupModalClose() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close when clicking outside modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    displayProjects(allProjects);
    setupFilters();
    setupModalClose();
});