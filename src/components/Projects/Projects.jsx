import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>FAQs</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};





// return (
//   <section className={styles.container} id="projects">
//     <h2 className={styles.title}>FAQs</h2>
//     <div className={styles.projects}>
//       {projects.map((project, id) => (
//         <div key={id} className={styles.projectTile}>
//           <div
//             className={styles.projectHeader}
//             onClick={() => toggleExpansion(id)}
//           >
//             <h3 className={styles.projectTitle}>{project.title}</h3>
//             {expandedId === id ? (
//               <MdKeyboardArrowUp className={styles.arrowIcon} />
//             ) : (
//               <MdKeyboardArrowDown className={styles.arrowIcon} />
//             )}
//           </div>
//           {expandedId === id && (
//             <div className={styles.projectContent}>
//               <p className={styles.expandedText}>{project.expandedText}</p>
//               <ul className={styles.skills}>
//                 {project.skills.map((skill, skillId) => (
//                   <li key={skillId} className={styles.skill}>
//                     {skill}
//                   </li>
//                 ))}
//               </ul>
//               <div className={styles.links}>
//                 <a href={project.demo} className={styles.link}>
//                   Demo
//                 </a>
//                 <a href={project.source} className={styles.link}>
//                   Source
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   </section>
// );


