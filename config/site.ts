interface NavItem {
  label: string;
  href: string;
  color?:
    | "foreground"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
}

interface SiteConfig {
  name: string;
  description: string;
  navItems: NavItem[];
  navMenuItems: NavItem[];
  links?: {
    github?: string;
  };
}
const navItems = [
  {
    label: "Strona główna",
    href: "/",
  },
  {
    label: "Kategorie",
    href: "/categories",
  },
];

export const siteConfig: SiteConfig = {
  name: "Kulinaria",
  description: "Najlepsze przepisy!",
  navItems: navItems,
  navMenuItems: [
    ...navItems,
    {
      label: "Logout",
      href: "/logout",
      color: "primary",
    },
  ],
  links: {
    // github: "https://github.com/nextui-org/nextui",
  },
};
