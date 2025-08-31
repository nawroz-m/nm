<template>
  <section id="p" class="projects-section py-16">
    <div class="container mx-auto px-md-4 px-0">
      <!-- Section Header -->
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-4">
          Projects
          <span class="accent-text">+</span>
        </h2>
        <p class="section-subtitle">
          A showcase of my work delivering innovative solutions across various
          industries
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div
          v-for="(projectGroup, groupIndex) in data"
          :key="groupIndex"
          class="project-group"
        >
          <!-- <div class="projects-row"> -->
          <div class="project-card">
            <a
              :href="projectGroup.image.path"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              <div class="project-image-container">
                <img
                  :src="projectGroup.image.source"
                  :alt="projectGroup.title"
                  class="project-image"
                  loading="lazy"
                />
                <div class="project-overlay">
                  <div class="project-overlay-content">
                    <h3 class="project-title">{{ projectGroup.title }}</h3>
                    <p class="project-description">
                      {{ projectGroup.description }}
                    </p>
                    <div class="project-cta">
                      <span class="view-project">View Project</span>
                      <v-icon class="arrow-icon">mdi-arrow-right</v-icon>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <!-- </div> -->
        </div>
      </div>

      <!-- Call to Action -->
      <div class="cta-section text-center mt-16">
        <p class="cta-text mb-4">
          Interested in working together? Let's discuss your next project.
        </p>
        <a href="mailto:nawroz.mohammadi.official@gmail.com" class="cta-button">
          Get In Touch
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RecentProjects",
  props: ["data"],
  data() {
    return {
      // Component data if needed
    };
  },
};
</script>

<style lang="scss" scoped>
.projects-section {
  // background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -7.1rem;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23e2e8f0" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.1;
    pointer-events: none;
    width: 100vw;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: clamp(2.5rem, 2rem + 2.5vw, 4rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.02em;

  .accent-text {
    color: #5e99ff;
    font-weight: 800;
  }
}

.section-subtitle {
  font-size: 1.25rem;
  color: #8e9aaa;
  font-weight: 400;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.projects-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  align-items: start;
}

.project-group {
  &:last-child {
    margin-bottom: 0;
  }
}

.projects-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  align-items: start;
}

.project-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
}

.project-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.project-image-container {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/10;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(30, 41, 59, 0.95) 0%,
    rgba(30, 41, 59, 0.85) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 2rem;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-overlay-content {
  text-align: center;
  color: #ffffff;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.3;
  color: #ffffff;
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #e2e8f0;
  opacity: 0.9;
}

.project-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #5e99ff;

  .view-project {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .arrow-icon {
    font-size: 1rem;
    transition: transform 0.2s ease;
  }
}

.project-card:hover .arrow-icon {
  transform: translateX(4px);
}

.cta-section {
  position: relative;
  z-index: 2;
  background: #ffffff;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.cta-text {
  font-size: 1.25rem;
  color: #475569;
  font-weight: 500;
  line-height: 1.6;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #5e99ff 0%, #4f7cff 100%);
  color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px -1px rgba(94, 153, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(94, 153, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
}

// Responsive Design
@media (max-width: 768px) {
  .projects-section {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: clamp(2rem, 1.5rem + 2.5vw, 3rem);
  }

  .section-subtitle {
    font-size: 1.125rem;
  }

  .projects-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-card {
    margin-bottom: 1rem;
  }

  .cta-section {
    padding: 2rem 1.5rem;
    margin: 0 1rem;
  }
}

@media (max-width: 480px) {
  .projects-section {
    padding: 0rem;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .project-overlay {
    padding: 1.5rem;
  }

  .project-title {
    font-size: 1.25rem;
  }

  .project-description {
    font-size: 0.875rem;
  }
}

// Dark mode support
@media (prefers-color-scheme: dark) {
  .projects-section {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);

    &::before {
      opacity: 0.1;
    }
  }

  .section-title {
    color: #f1f5f9;
  }

  .section-subtitle {
    color: #94a3b8;
  }

  .project-card {
    background: #1e293b;
    border: 1px solid #334155;
  }

  .cta-section {
    background: #1e293b;
    border: 1px solid #334155;
  }

  .cta-text {
    color: #cbd5e1;
  }
}
</style>
