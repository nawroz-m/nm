<template>
  <v-row justify="center" align="center" class="my-16">
    <v-col cols="12" sm="8" md="12" xl="6">
      <Hero :hero="hero" />
      <MyProccess :data="MyProcessData" />
      <RecentProjects :data="RecentProjectsData" />
      <Career :data="CareerData" />
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
          text: "Scroll to the projects",
          id: "#p",
        },
        image: { path: "./nawroz.png", alt: "Nawroz Mohammadi" },
        about_me:
          "A skilled full-stack developer specializing in creating user-friendly, responsive, and scalable websites that address real-world needs. From simple landing pages to complex web apps.",
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
          path: "./microscope.png",
          alt: "Make fun of proccess",
        },
      },
      RecentProjectsData: [
        {
          title: "Muamelat & It's Dashboard",
          description:
            "A specialized LegalTech module offered by New Mind. Designed for the seamless management of complex, multi-stage legal and financial transactions that leverages AI and NLP.",
          image: {
            source: "./muamelat_main_page.png",
            path: "https://www.mecellem.com/en/products/muamelat",
            description: "",
          },
        },

        {
          title: "AI Data Vault",
          description: "AI-powered sales conversation insights",
          image: {
            source: "./AI-Data-Vault.png",
            path: "https://admin-live.data-vault.vretail.space/",
            description: "",
          },
        },
        {
          title: "V-retail Landing",
          description: "The landing page of V-retail.",
          image: {
            source: "./v-retail-landing.png",
            path: "https://www.vretail.space/",
            description: "",
          },
        },
        {
          title: "Mukavela Dashboard",
          description:
            "Sophisticated, AI-driven Contract Lifecycle Management (CLM) system designed to transform traditional, static legal contracts into dynamic and actionable workflows.",
          image: {
            source: "./mukavele_main_page.png",
            path: "https://www.mecellem.com/en/products/mukavele",
            description: "",
          },
        },

        {
          title: "V-retail Product",
          description: "The V-retail product and it's dashboard",
          image: {
            source: "./v-retail-product.png",
            path: "https://admin-staging.core.vretail.space/",
            description: "",
          },
        },

        {
          title: "IIC Lab",
          description: "The officail website of Ink In Caps.",
          image: {
            source: "./iic-lab.png",
            path: "https://iiclab.com/",
            description: "",
          },
        },

        {
          title: "DocXter",
          description: "A smart AI base web app to chat with your document.",
          image: {
            source: "./DocXter.png",
            path: "https://docxter.app/",
            description: "",
          },
        },
        {
          title: "Mecellem Addin",
          description:
            "A word add-in for Muamelat and Mahfuz document editor using React.js",
          image: {
            source: "./Mecellem-addin.png",
            path: "https://www.mecellem.com/en/products/mukavele",
            description: "",
          },
        },
        {
          title: "Link",
          description: "A Unified Platform Management for Ink In Caps.",
          image: {
            source: "./link.png",
            path: "https://link.iiclab.com/",
            description: "",
          },
        },

        {
          title: "CloudRedux",
          description: "The official website of CloudRedux.",
          image: {
            source: "./CloudRedux.png",
            path: "https://cloudredux.com/",
            description: "",
          },
        },

        {
          title: "Mecellem Pusula",
          description: "A legal contract fields.",
          image: {
            source: "./Mecelem-Pusula.png",
            path: "https://pusula.mecellem.com/",
            description: "",
          },
        },

        {
          title: "Tinkertale",
          description:
            "An admin system for Tinkertale to manage their ecommerce site.",
          image: {
            source: "./tinkertale.png",
            path: "#tinkertale",
            description: "",
          },
        },

        {
          title: "Hatke Music ",
          description:
            "An Online platform for the musical friendship jus like Hatke.",
          image: {
            source: "./Hatke_Music.png",
            path: "https://www.youtube.com/channel/UCvT28okAet-3JWOwbcwSMqQ",
            description: "",
          },
        },
        {
          title: "Smart Ship Hub",
          description:
            "A digital platform for remote fleet management & on demand cloud services.",
          image: {
            source: "./Smart_Ship_Hub.png",
            path: "https://smartshiphub.com/",
            description: "",
          },
        },
        {
          title: "Mini Projects",
          description:
            "I have completed some mini projects included public and private tab to learn more about it.",
          image: {
            source: "./Mini_Projects.png",
            path: "https://github.com/nawroz-m",
            description: "",
          },
        },
      ],
      CareerData: [
        {
          company: "Laatulakki Oy",
          role: "Full-stack developer",
          date: "Aug 2021 - Oct 2023",
        },
        {
          company: "Ink In Caps",
          role: "Software Development Engineer",
          date: "Oct 2023 - Dec 2024",
        },
        {
          company: "Next Smart Move",
          role: "Frontend Developer",
          date: "Dec 2024 - Present",
        },
      ],

      letsWorkTogether: {
        title: "What is next",
        subtitle: "Lets work together.",
        email: "nawroz.mohammadi.officiao@gmail.com",
        paragraph:
          "If you're looking for a full-stack developer to work on your project or need advice on your tech stack, feel free to reach out to me at <a class=text-decoration-none  href=mailto:nawroz.mohammadi.official@gmail.com>nawroz.mohammadi.official@gmail.com</a>. I'm currently available for any web application or software development projects. <br><br>Whether you need a custom API, a complex database architecture, or a modern front-end interface, I have the skills and experience to deliver high-quality results.",
      },
    };
  },
};
</script>
