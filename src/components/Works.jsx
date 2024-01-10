import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";
import { projects } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    soure_code_link,
  }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          className="xs:w-[360px] w-full bg-tertiary p-5 rounded-2xl"
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <div className="relative w-full h-[230px]">
            <img
              loading="lazy"
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-imag_hover mx-2">
              <div
                onClick={() => window.open(soure_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full cursor-pointer flex justify-center items-center"
              >
                <img
                  loading="lazy"
                  src={github}
                  alt="github"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
              {/* live preview */}
              <div
                onClick={() => window.open(soure_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full cursor-pointer flex justify-center items-center"
              >
                <img
                  loading="lazy"
                  src={github}
                  alt="github"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </Tilt>
      </motion.div>
    );
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> MY WORK</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w3-xl leading-[30px]"
        >
          Follwoing project showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to the code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
