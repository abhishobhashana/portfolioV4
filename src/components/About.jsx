import React from "react";
import data from "../Data/Data.json";

export default function About() {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Redux",
    "Git",
    "Figma",
  ];
  return (
    <>
      <div
        className="flex flex-col lg:justify-center max-w-2xl lg:pt-24 lg:min-h-screen py-10 sm:m-auto sm:pt-20 p-8 gap-8"
        id="about"
      >
        <h1 className="text-3xl sm:text-4xl font-displayMedium tracking-tight dark:text-white text-secondary">
          {data.about.aboutTitle}
        </h1>
        <div className="flex flex-col gap-4 text-[17px] leading-6 text-light-grey-third dark:text-light-grey-third">
          <p>
            {data.about.detailIntro}{" "}
            <a
              href="https://www.thetfpl.com/"
              target="_blank"
              rel="noreferrer"
              className="underline-link cursor-pointer text-secondary dark:text-light-white-second"
            >
              {data.experience.techFlitter}
            </a>{" "}
            {data.about.detail}
          </p>
          <p>{data.about.detailSecond}</p>
          <p>{data.about.detailThird}</p>
          <span className="font-sansMedium text-secondary dark:text-light-white-second pt-2">
            {data.about.skills}
          </span>

          <ul className="w-fit skills-list grid lg:grid-rows-2 grid-flow-col sm:grid-rows-3 gap-x-14">
            {skills.map((skill, id) => {
              return (
                <li
                  key={id}
                  className="font-mono before:content-['▹'] relative before:mr-2 text-sm dark:text-light-grey-third text-light-grey-forth leading-loose"
                >
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
