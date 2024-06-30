import React from "react";
import data from "../Data/Data.json";
import Folder from "../Assets/icons/Folder";
import Link from "../Assets/icons/Link";

export default function Projects() {
  const projects = [
    {
      id: 0,
      title: data.projects.reactTemplate,
      link: "https://www.github.com/abhishobhashana/react-template",
      desc: "React-Template is easy to use, has all files having folder structure that makes it easily changeable.",
      tech: ["JavaScript", "React", "Tailwind CSS"],
    },
    {
      id: 1,
      title: data.projects.pxToRem,
      link: "https://www.github.com/abhishobhashana/px-to-rem",
      desc: "PX to REM Converter converts pixels to the CSS unit REM. The conversion is based on the default font-size of 16px pixel.",
      tech: ["JavaScript", "React", "Tailwind CSS"],
    },
    {
      id: 2,
      title: data.projects.resumeKeywords,
      link: "https://www.github.com/abhishobhashana/ResumeKeywords",
      desc: "Resume Keywords helps tailor your resume to individual job postings using AI and NLP. Provides most focused keywords from job description.",
      tech: ["JavaScript", "React", "Tailwind CSS"],
    },
    {
      id: 3,
      title: data.projects.codeEditor,
      link: "https://www.github.com/abhishobhashana/Code-Editor",
      desc: "An online code editor which supports HTML, CSS and JavaScript Development and Markdown editor for generating readme.",
      tech: ["JavaScript", "React", "Tailwind CSS"],
    },
  ];
  return (
    <>
      <div
        className="flex flex-col lg:justify-center max-w-4xl lg:pt-24 lg:min-h-screen py-10 sm:m-auto sm:pt-20 p-8 gap-8"
        id="projects"
      >
        <h1 className="text-3xl sm:text-4xl font-displayMedium tracking-tight dark:text-white text-secondary">
          {data.projects.projectsTitle}
        </h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8 text-md leading-6">
          {projects.map((project) => {
            return (
              <div
                className="grid gap-6 p-6 bg-white dark:bg-light-secondary shadow-lg rounded-lg"
                key={project.id}
              >
                <div className="flex items-center justify-between">
                  <Folder />
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <Link />
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="font-sansMedium dark:text-white text-secondary text-xl">
                    {project.title}
                  </h1>
                  <span className="text-[17px] text-light-grey-third dark:text-light-grey-forth">
                    {project.desc}
                  </span>
                  <code className="mt-4 text-sm dark:text-light-grey-third text-light-grey-second">
                    {project.tech.slice(",").join(" ")}
                  </code>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
