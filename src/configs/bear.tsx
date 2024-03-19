import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: "i-la:dragon",
        excerpt: "Hey there! I'm Your Future Version..."
      },
      {
        id: "github-stats",
        title: "My Skills",
        file: "markdown/github-stats.md",
        icon: "i-icon-park-outline:github",
        excerpt: "These Are Your Moderne Skills You Need hehe :3 ..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: "i-octicon:browser",
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "Spuseum",
        title: "Spuseum",
        file: "readme/Spuseum.md",
        icon: "i-ri:gamepad-line",
        excerpt: "A Creative 3D Website for Museums Attraction ...",
        link: "https://spuseum.vercel.app"
      },
      {
        id: "Amanshop",
        title: "Amanshop",
        file: "readme/Amanshop.md",
        icon: "i-fa-brands:vuejs",
        excerpt: "Advanced & Costimized Ecommerce Website With Admin Panal...",
        link: "https://amanshopdz.com"
      },
      {
        id: "Spudder",
        title: "Spudder",
        file: "readme/Spudder.md",
        icon: "i-gg:format-text",
        excerpt: "Spudder: A WEB3 Version Uber Algorythms Payments ...",
        link: "https://spudder.vercel.app"
      },
      {
        id: "Asirem",
        title: "Asirem",
        file: "readme/Asirem.md",
        icon: "i-ri:newspaper-fill",
        excerpt: "A Beautiful Landing Page With Assistant Chat Bot...",
        link: "https://asirem.amanshopdz.com"
      },

      {
        id: "Spinecraft",
        title: "Spinecraft",
        file: "readme/Spinecraft.md",
        icon: "i-akar-icons:sword",
        excerpt: "Spinecraft: a Mincraft Game Using Threejs ...",
        link: "https://spinecraft.vercel.app"
      }
    ]
  }
];

export default bear;
