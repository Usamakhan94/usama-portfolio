import { Fragment } from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      since: "Apr 2024 To Present",
      companyName: "Finnovator Tech",
      works: [
        "React js",
        "Next js",
        "Javascript",
        "Redux",
        "Jotai",
        "Node js",
        "Express",
        "MongoDB",
      ],
      responsibilities: ["", "", ""],
    },
    {
      title: "Frontend Developer",
      since: "Sep 2023 To Mar 2024",
      companyName: "Tafsol",
      works: [
        "React js",
        "Tailwind CSS",
        "Material UI",
        "Bootstrap",
        "Wordpress",
      ],
      responsibilities: ["", "", ""],
    },
    {
      title: "Frontend Web Developer",
      since: "Oct 2022 To Sep 2023",
      companyName: "WebEmaX",
      works: [
        "HTML",
        "CSS",
        "JS",
        "Bootstrap",
        "Tailwind CSS",
        "Laravel",
        "Wordpress",
      ],
      responsibilities: ["", "", ""],
    },
  ];
  return (
    <section>
      <div className="container">
        <h2 className=" text-2xl text-center mb-8 uppercase font-sans">
          Experience
        </h2>
        <div className="grid grid-cols-2 gap-10 relative isolate">
          {experiences.map((item, index) => {
            if (index % 2 == 0) {
              return (
                <Fragment key={index + 1}>
                  <div className="">{item.companyName}</div>
                  <div className="bg-gray-400 flex flex-col gap-2 rounded-sm border-gray-500 border relative">
                    <h5 className="w-full px-4 py-2 border-b border-gray-500 font-medium text-md">
                      {item.title}
                    </h5>
                    <ul className="p-4">
                      <li>Hello</li>
                    </ul>
                    <div className="absolute -left-[1.875rem] top-0 w-5 h-5 rounded-full border-gray-300 bg-card border-2" />
                  </div>
                </Fragment>
              );
            } else {
              return (
                <Fragment key={index + 1}>
                  <div className="bg-gray-400 flex flex-col gap-2 rounded-sm border-gray-500 border relative">
                    <h5 className="w-full p-4 border-b border-gray-500 font-medium text-md">
                      {item.title}
                    </h5>
                    <ul className="p-4">
                      <li>Hello</li>
                    </ul>
                    <div className="absolute -right-[2rem] top-0 w-5 h-5 rounded-full border-gray-300 bg-card border-2" />
                  </div>
                  <div className="">{item.companyName}</div>
                </Fragment>
              );
            }
          })}
          <div className="absolute -z-10 bg-gray-300 w-0.5 h-full left-1/2 top-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
