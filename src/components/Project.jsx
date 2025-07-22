import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="project-card">
        <h3>🛒 React E-Commerce App</h3>
        <p>API-based product listing, add to cart, login/register with token auth.</p>
        <a href="https://github.com/jayliftt/react-ecom">GitHub</a> | 
        <a href="https://react-ecom-demo.netlify.app">Live</a>
      </div>

      <div className="project-card">
        <h3>💪 Gym Product Website</h3>
        <p>Static website using HTML, CSS, JavaScript with localStorage-based cart.</p>
        <a href="https://github.com/Jay-Dabasara/gym-ecommerce-site">GitHub</a> | 
        <a href="https://gym-web-demo.netlify.app">Live</a>
      </div>

      <div className="project-card">
        <h3>📊 Expense Tracker</h3>
        <p>Add/delete expense with LocalStorage + chart view using JavaScript.</p>
        <a href="https://github.com/Jay-Dabasara/my-expense-tracker">GitHub</a> | 
        <a href="https://expense-app-demo.netlify.app">Live</a>
      </div>
    </section>
  );
};

export default Projects;
