export type NavItem = {
    id: number;
    label: string;
    link: string;
    subItems?: NavItem[];
  };
  
  export const defaultNavItems: NavItem[] = [
    {
      id: 1,
      label: "Home",
      link: "/",
    },
    {
      id: 2,
      label: "For jobseekers",
      link: "#",
      subItems: [
        {
          id: 21,
          label: "New Jobs",
          link: "#",
        },
        {
          id: 22,
          label: "Applied Jobs",
          link: "#",
        },
      ],
    },
    {
        id: 3,
        label: "For clients",
        link: "#",
        subItems: [
          {
            id: 31,
            label: "Packages",
            link: "#",
          },
          {
            id: 32,
            label: "Testimony",
            link: "#",
          },
        ],
      },
      {
        id: 4,
        label: "Sectors",
        link: "#",
        subItems: [
          {
            id: 41,
            label: "Information Technology",
            link: "#",
          },
          {
            id: 42,
            label: "Healthcare",
            link: "#",
          },
          {
            id: 43,
            label: "Business",
            link: "#",
          },
          {
            id: 44,
            label: "HR",
            link: "#",
          },
          {
            id: 45,
            label: "Marketing",
            link: "#",
          },
        ],
      },
      {
        id: 5,
        label: "Resources",
        link: "#",
        subItems: [
          {
            id: 51,
            label: "Resume Review",
            link: "#",
          },
          {
            id: 52,
            label: "ATS Scanner",
            link: "#",
          },
          {
            id: 53,
            label: "Remote Guide",
            link: "#",
          },
        ],
      },
  ];
  