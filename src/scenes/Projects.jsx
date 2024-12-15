import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title ,subtitle, github ,live}) => {
  const overlayStyles = `absolute shadow-md shadow-[#040c16] h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {subtitle} 
        </p>
        <div><a href={github} target="_blank" rel="noopener noreferrer">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-dark-grey text-gray-700 font-bold text-lg"
          >
        
          </button>
        </a>
        </div>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48 mt-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">FO</span>OD
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="font-playfair mt-8 mb-10">
          Check All My Favorite Food and Drinks!
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center shadow-md shadow-[#040c16]">
        <motion.div
          className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* SNACKS IMAGES */}
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            <img src="../assets/snack1.jpeg" alt="Snack 1" className="w-full h-full object-cover" />
          </div>

          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            <img src="../assets/snack2.jpeg" alt="Snack 2" className="w-full h-full object-cover" />
          </div>

          {/* DRINKS IMAGES */}
          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            <img src="../assets/drink1.jpeg" alt="Drink 1" className="w-full h-full object-cover" />
          </div>

          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            <img src="../assets/drink2.jpeg" alt="Drink 2" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
