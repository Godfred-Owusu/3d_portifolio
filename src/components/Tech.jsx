import { BallCanvas } from "./canvas/index";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/constants";

const Tech = () => {
  return (
    <div className="flex flex-row justify-center items-center flex-wrap gap-10">
      {technologies.map((technology, index) => (
        <div key={index} className="h-28 w-28">
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
