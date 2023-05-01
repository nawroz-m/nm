<template>
  <v-row justify="center" align="center" class="my-16">
    <v-col cols="12" sm="8" md="12" xl="6">
      <Hero :hero="hero" />
      <MySkillSet :mySkillset="mySkillset" />
      <MyProccess :data="MyProcessData" />
      <RecentProjects :data="RecentProjectsData" />
      <Career :data="CareerData" />
      <MySkillSet :mySkillset="about" />
      <CaseStudies :data="caseStudyData" />
      <LetsWorkTogether :data="letsWorkTogether" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      hero: {
        name: "Nawroz",
        button: {
          type: "scroll",
          text: "Scroll for more",
          id: "#myskillset",
        },
        image: { path: "/nawroz_bg-5.png", alt: "Nawroz Mohammadi" },
        about_me:
          "A skilled full-stack developer specializing in creating user-friendly, responsive, and scalable websites that address real-world needs. From simple landing pages to complex web apps, currently, I’m working on a healthcare management system called UmarJi which aims to streamline hospital management and improve patient outcomes.",
      },
      mySkillset: {
        title: "My Skillset",
        subtitle: "Frontend & <br>  backend developer.",
        button: {
          type: "scroll",
          text: "My proccess",
          id: "#myproccess",
        },
        paragraph:
          "A full stack developer with a passion for creating complex web applications that deliver exceptional user experiences. I specialize in building visually appealing web applications that seamlessly integrate front-end and back-end functionality.<br> I have had the opportunity to work with a diverse range of clients from various industries, allowing me to understand the unique challenges each project presents, and I am always excited to collaborate on new and exciting projects. Whether it's developing custom dashboards or innovative landing pages, I am dedicated to delivering high-quality products that meet and exceed client expectations.",
      },

      MyProcessData: {
        title: "Process",
        process: [
          {
            title: "Planing project",
            steps: [
              { text: "Define project goals" },
              { text: "Create backlogs" },
              { text: "Break down the features" },
            ],
          },
          {
            title: "Creating roadmap",
            steps: [
              { text: "Break down the features" },
              { text: "Create backlogs" },
            ],
          },

          {
            title: "Planning the release",
            steps: [
              { text: "Release objectives" },
              { text: "Release Plan" },
              { text: "Prioritize features" },
              { text: "Test and gather feedback" },
            ],
          },
          {
            title: "Planning the sprint",
            steps: [
              { text: "Prioritization" },
              { text: "Task planning" },
              { text: "Capacity planning" },
            ],
          },

          {
            title: "Daily stand-up",
            steps: [
              {
                text: "A short daily stand-up during the sprint to reassess progress",
              },
            ],
          },
          {
            title: "Sprint review",
            steps: [
              { text: "Review progress" },
              { text: "Reflect on areas for imporvement" },
            ],
          },
        ],
        image: {
          path: "/microscope.png",
          alt: "Make fun of proccess",
        },
      },
      RecentProjectsData: [
        [
          {
            title: "CloudRedux",
            image: { source: "/CloudRedux.png", path: "/", description: "" },
          },
          {
            title: "Tinkertale",
            image: { source: "/tinkertale.png", path: "/", description: "" },
          },
          {
            title: "DocXter",
            image: { source: "/DocXter.png", path: "/", description: "" },
          },
        ],
        [
          {
            title: "Hatke Music ",
            image: { source: "/Hatke_Music.png", path: "/", description: "" },
          },
          {
            title: "Smart Ship Hub",
            image: {
              source: "/Smart_Ship_Hub.png",
              path: "/",
              description: "",
            },
          },
          {
            title: "Mini Projects",
            image: {
              source: "/Mini_Projects.png",
              path: "/",
              description: "",
            },
          },
        ],
      ],
      CareerData: [
        {
          company: "Gesstell Technologies",
          role: "Full-stack developer",
          date: "Nov 2021 - Jun 2022",
        },
        {
          company: "CloudRedux",
          role: "Full-stack developer",
          date: "Nov 2022 - Present",
        },
      ],
      about: {
        title: "About me",
        subtitle: "Frontend & <br> backend beveloper.",
        button: {
          type: "link",
          text: "Let's connect on LinkedIn",
          link: "https://www.linkedin.com/in/nwrm/",
          icon: "linkedin",
        },
        paragraph:
          "I have a strong passion for developing web applications and efficient projects, and I never stop learning about new technologies to enhance my skills.<br><br> In my free time, I enjoy playing casual sports like bowling or volleyball with my friends. I feel fortunate to have a job that offers the flexibility to work from anywhere. You can find me on LinkedIn, where I share my projects and experiences.<br><br> I believe in the power of networking and enjoy connecting with others in my field to learn from and collaborate with.",
      },
      caseStudyData: [
        {
          title: "Node.js ",
          image: {
            source: "/myprojects.jpeg",
            path: "/",
          },
        },
        {
          title: "Node.js ",
          image: {
            source: "/myprojects.jpeg",
            path: "/",
          },
        },
      ],
      letsWorkTogether: {
        title: "What is next",
        subtitle: "Lets work together.",
        email: "nawroz678@gmail.com",
        paragraph:
          "If you're looking for a full-stack developer to work on your project or need advice on your tech stack, feel free to reach out to me at <a class=text-decoration-none  href=mailto:nawroz678@gmail.com>nawroz678@gmail.com</a>. I'm currently available for any web application or software development projects. <br><br>Whether you need a custom API, a complex database architecture, or a modern front-end interface, I have the skills and experience to deliver high-quality results.",
      },
    };
  },
};
</script>
