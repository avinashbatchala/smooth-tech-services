<!-- src/pages/JobsPage.vue -->
<template>
  <div class="jobs-page">
    <section class="page-header">
      <div class="container">
        <h1>Career Opportunities</h1>
        <p>Join our team and work with the best in the industry</p>
      </div>
    </section>

    <section class="section filter-section">
      <div class="container">
        <div class="jobs-filter">
          <div class="search-box">
            <input
                type="text"
                v-model="searchQuery"
                placeholder="Search job titles or keywords..."
                class="form-control"
            >
          </div>
          <div class="filter-controls">
            <select v-model="selectedLocation" class="form-control">
              <option value="">All Locations</option>
              <option v-for="location in locations" :key="location" :value="location">
                {{ location }}
              </option>
            </select>
            <select v-model="selectedDepartment" class="form-control">
              <option value="">All Departments</option>
              <option v-for="department in departments" :key="department" :value="department">
                {{ department }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <section class="section jobs-section">
      <div class="container">
        <div v-if="filteredJobs.length > 0">
          <div v-for="job in filteredJobs" :key="job.id" class="job-card">
            <div class="job-header">
              <h3>{{ job.title }}</h3>
              <span
                  :class="['job-type',
                  job.type === 'Full-time' ? 'full-time' :
                  job.type === 'Part-time' ? 'part-time' : 'contract'
                ]"
              >
                {{ job.type }}
              </span>
            </div>
            <div class="job-details">
              <div class="job-meta">
                <span><i class="icon-location"></i> {{ job.location }}</span>
                <span><i class="icon-department"></i> {{ job.department }}</span>
                <span><i class="icon-salary"></i> {{ job.salary }}</span>
              </div>
              <p class="job-description">{{ job.description }}</p>
              <div class="job-skills">
                <span class="skill-tag" v-for="skill in job.skills" :key="skill">{{ skill }}</span>
              </div>
            </div>
            <div class="job-footer">
              <router-link :to="`/jobs/${job.id}`" class="btn">View Details</router-link>
              <span class="job-posted">Posted {{ formatDate(job.posted) }}</span>
            </div>
          </div>
        </div>
        <div v-else class="no-jobs">
          <Banner type="info">
            <h3>No Jobs Found</h3>
            <p>We couldn't find any jobs matching your search criteria. Try adjusting your filters or check back soon for new opportunities.</p>
          </Banner>
        </div>
      </div>
    </section>

    <section class="section why-join-section">
      <div class="container">
        <h2 class="section-title">Why Join TechConsult</h2>
        <div class="grid grid-3">
          <div class="benefit-card">
            <div class="benefit-icon">
              <i class="icon-growth"></i>
            </div>
            <h3>Professional Growth</h3>
            <p>Work on diverse projects across industries and technologies to rapidly expand your skill set.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">
              <i class="icon-flexibility"></i>
            </div>
            <h3>Work Flexibility</h3>
            <p>Enjoy flexible work arrangements including remote options and work-life balance.</p>
          </div>
          <div class="benefit-card">
            <div class="benefit-icon">
              <i class="icon-benefits"></i>
            </div>
            <h3>Comprehensive Benefits</h3>
            <p>Competitive compensation, healthcare, retirement plans, and continuous learning opportunities.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section team-culture-section">
      <div class="container">
        <div class="culture-grid">
          <div class="culture-image">
            <img src="https://via.placeholder.com/600x400" alt="Team collaboration">
          </div>
          <div class="culture-content">
            <h2>Our Culture</h2>
            <p>At TechConsult, we believe in creating an environment where innovation thrives and every team member can make a meaningful impact. We celebrate diversity of thought, background, and experience as essential elements of our success.</p>
            <p>Our collaborative culture encourages knowledge sharing, mentorship, and continuous improvement. We invest in our people because we know that their growth drives our growth.</p>
            <router-link to="/about" class="btn btn-outline mt-3">Learn More About Us</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container">
        <Banner type="primary">
          <h2>Don't see the right fit?</h2>
          <p>We're always looking for talented professionals to join our team.</p>
          <a href="#" class="btn btn-light mt-3">Submit Your Resume</a>
        </Banner>
      </div>
    </section>
  </div>
</template>

<script>
import Banner from '@/components/common/Banner.vue';

export default {
  name: 'JobsPage',
  components: {
    Banner
  },
  data() {
    return {
      searchQuery: '',
      selectedLocation: '',
      selectedDepartment: '',
      locations: ['New York, NY', 'San Francisco, CA', 'Austin, TX', 'Remote'],
      departments: ['Engineering', 'Product', 'Design', 'Sales', 'Marketing', 'Operations'],
      jobs: [
        {
          id: 1,
          title: 'Senior Full Stack Developer',
          type: 'Full-time',
          location: 'San Francisco, CA',
          department: 'Engineering',
          salary: '$120,000 - $150,000',
          description: 'We are seeking an experienced full stack developer to join our engineering team. You will work on challenging problems and help build our next generation of products.',
          skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'AWS'],
          posted: '2023-06-10'
        },
        {
          id: 2,
          title: 'UX/UI Designer',
          type: 'Full-time',
          location: 'Remote',
          department: 'Design',
          salary: '$90,000 - $110,000',
          description: 'Join our product design team to create exceptional user experiences across web and mobile platforms. You will collaborate with product managers and engineers throughout the design process.',
          skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'UI Animation'],
          posted: '2023-06-05'
        },
        {
          id: 3,
          title: 'DevOps Engineer',
          type: 'Full-time',
          location: 'Austin, TX',
          department: 'Engineering',
          salary: '$110,000 - $140,000',
          description: 'Help build and maintain our cloud infrastructure, CI/CD pipelines, and deployment automation. You will play a key role in ensuring the reliability and performance of our systems.',
          skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Docker'],
          posted: '2023-05-28'
        },
        {
          id: 4,
          title: 'Product Marketing Manager',
          type: 'Full-time',
          location: 'New York, NY',
          department: 'Marketing',
          salary: '$95,000 - $120,000',
          description: 'Drive the go-to-market strategy for our products. You will work closely with product, sales, and customer success teams to develop compelling positioning and messaging.',
          skills: ['Product Marketing', 'Content Strategy', 'Market Research', 'Campaign Management'],
          posted: '2023-05-22'
        },
        {
          id: 5,
          title: 'Data Scientist',
          type: 'Contract',
          location: 'Remote',
          department: 'Engineering',
          salary: '$70 - $90 per hour',
          description: 'Join our data science team to extract insights from complex datasets and build predictive models. This is a 6-month contract with possibility of extension or conversion to full-time.',
          skills: ['Python', 'SQL', 'Machine Learning', 'Data Visualization', 'Statistics'],
          posted: '2023-06-15'
        },
      ]
    };
  },
  computed: {
    filteredJobs() {
      let result = this.jobs;

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        result = result.filter(job =>
            job.title.toLowerCase().includes(query) ||
            job.description.toLowerCase().includes(query) ||
            job.skills.some(skill => skill.toLowerCase().includes(query))
        );
      }

      if (this.selectedLocation) {
        result = result.filter(job => job.location === this.selectedLocation);
      }

      if (this.selectedDepartment) {
        result = result.filter(job => job.department === this.selectedDepartment);
      }

      return result;
    }
  },
  methods: {
    formatDate(dateStr) {
      const postedDate = new Date(dateStr);
      const today = new Date();
      const diffTime = Math.abs(today - postedDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        return 'yesterday';
      } else if (diffDays < 7) {
        return `${diffDays} days ago`;
      } else if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
      } else {
        return postedDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        });
      }
    }
  }
};
</script>

<style scoped>
.filter-section {
  padding-top: 2rem;
  padding-bottom: 0;
}

.jobs-filter {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.filter-controls {
  display: flex;
  gap: 1rem;
}

.job-card {
  background-color: white;
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.job-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.job-type {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.job-type.full-time {
  background-color: var(--color-success-light);
  color: var(--color-success);
}

.job-type.part-time {
  background-color: var(--color-warning-light);
  color: var(--color-warning);
}

.job-type.contract {
  background-color: var(--color-info-light);
  color: var(--color-info);
}

.job-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--color-text-light);
}

.job-meta i {
  margin-right: 0.3rem;
}

.job-description {
  margin-bottom: 1rem;
}

.job-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.skill-tag {
  background-color: var(--color-light);
  color: var(--color-text);
  padding: 0.2rem 0.6rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
}

.job-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.job-posted {
  font-size: 0.85rem;
  color: var(--color-text-light);
}

.no-jobs {
  margin: 2rem 0;
}

.why-join-section {
  background-color: var(--color-light);
}

.benefit-card {
  background-color: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  text-align: center;
  height: 100%;
  box-shadow: var(--shadow-sm);
}

.benefit-icon {
  background-color: var(--color-primary);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
}

.culture-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.culture-image img {
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
}

@media (max-width: 992px) {
  .filter-controls {
    flex-direction: column;
  }

  .culture-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .job-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .job-meta {
    flex-direction: column;
    gap: 0.5rem;
  }

  .job-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>