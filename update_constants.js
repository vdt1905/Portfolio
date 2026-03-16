const fs = require('fs');
const path = require('path');

const filePath = path.join('C:', 'Users', 'tande', 'OneDrive', 'Desktop', 'Portfolio', 'space-portfolio', 'constants', 'index.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Update SOCIALS
content = content.replace(
  /export const SOCIALS = \[[\s\S]*?\] as const;/,`export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/vanshtandel",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/vanshtandel",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com/vanshtandel",
  },
] as const;`
);

// Update LINKS
content = content.replace(
  /export const LINKS = \{[\s\S]*?\};/,
  `export const LINKS = {
  sourceCode: "https://github.com/vanshtandel/space-portfolio",
};`
);

// Update FOOTER_DATA
content = content.replace(
  /export const FOOTER_DATA = \[[\s\S]*?\] as const;/,
  `export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/vanshtandel",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/vanshtandel",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/vanshtandel",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:tandelvansh0511@gmail.com",
      },
    ],
  },
] as const;`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Constants updated successfully.");
