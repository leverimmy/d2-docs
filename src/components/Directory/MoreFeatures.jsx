import React from "react";

import Features from "@site/src/components/Features/Features";

const moreFeatures = [
  {
    title: "Local CLI",
    description: "Robust CLI with watch mode. Completely offline workflow.",
    icon: "/features/containers.svg",
    href: "/tour/containers",
  },
  {
    title: "Most major OS's",
    description: "MacOS, Linux, and Windows. D2 is included in many popular package managers like Homebrew and Winget.",
    icon: "/features/containers.svg",
    href: "/tour/containers",
  },
  {
    title: "VSCode and Vim",
    description: "Official editor support for VSCode and Vim, with more coming soon.",
    icon: "/features/containers.svg",
    href: "/tour/containers",
  },
  {
    title: "Online playground",
    description: "Create and share diagrams quickly by going to our hosted Playground.",
    icon: "/features/containers.svg",
    href: "/tour/containers",
  },
  {
    title: "Containers",
    description: "First-class support for containers (grouping shapes in other shapes).",
    icon: "/features/containers.svg",
    href: "/tour/containers",
  },
  {
    title: "Images and Icons",
    description: "Import any image or icon online into your diagram",
    icon: "/features/images.svg",
    href: "/tour/icons",
  },
  {
    title: "Multiple layout engines",
    description: "Choose from 3 layout engines that uniquely handle different types of diagrams.",
    icon: "/features/images.svg",
    href: "/tour/icons",
  },
  {
    title: "Use any font",
    description: "To customize the font, simply pass in your own .ttf files.",
    icon: "/features/images.svg",
    href: "/tour/icons",
  },
  {
    title: "Autoformat",
    description: "Don't sweat style decisions like indentations and spacing, D2 has a built-in autoformatter.",
    icon: "/features/images.svg",
    href: "/tour/icons",
  },
  {
    title: "Language API",
    description: "Programmatically create diagrams by calling D2's language API.",
    icon: "/features/images.svg",
    href: "/tour/icons",
  },
  {
    title: "Interactive tooltips and links",
    description: "Hover over shapes to learn more, or click through to another page.",
    icon: "/features/images.svg",
    href: "/tour/icons",
  },
  {
    title: "Class shape",
    description: "UML Class diagrams are fully supported",
    icon: "/features/classes.svg",
    href: "/tour/classes",
  },
  {
    title: "Sequence diagrams",
    description: "Sequence diagrams are created by setting shape: sequence_diagram",
    icon: "/features/sequence_diagram.svg",
    href: "/tour/sequence-diagrams",
  },
  {
    title: "Themes",
    description: "D2 comes with many themes that make your diagram look professional",
    icon: "/features/theme.svg",
    href: "/tour/themes",
  },
  {
    title: "Extensions",
    description: "Explore official and community developed plugins and extensions",
    icon: "/features/extension.svg",
    href: "/tour/extensions",
  },
  {
    title: "Exports",
    description: "On the CLI, you may export .d2 into SVG, PNG, PDF.  More coming soon!",
    icon: "/features/exports.svg",
    href: "/tour/exports",
  },
  {
    title: "Cheat sheet",
    description: "Download our handy one-pager D2 syntax cheat sheet",
    icon: "/features/cheat-sheet.svg",
    href: "/tour/cheat-sheet",
  },
];

const MoreFeatures = () => {
  return (
    <>
      <Features features={moreFeatures} />
      <div className="Seperator" />
    </>
  );
};

export default MoreFeatures;
