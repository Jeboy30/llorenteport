import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <div id="about" className="border-solid border-5 border-white w-full h-full pt-2 pb-16 my-10">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"ṭ
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
             <span className="text-red">ABOUT</span>
          </p>
          <LineGradient width="w-1/2" />
          <p className="mt-10 mb-7 hover:scale-110 transition duration-500">
           Hi! My name is Jeboy Llorente, a 22-year-old aspiring developer from Lianga, Surigao del Sur. I am a 4th-year Computer Science student at Lianga NEMSU (North Eastern Mindanao State University), where I focus on enhancing my skills and knowledge in software development and technology.

I am passionate about solving problems through innovative solutions and enjoy working on projects that challenge me to grow. My goal is to contribute to meaningful projects and continuously improve my craft.

Feel free to explore my portfolio to see some of my work. Let's connect and collaborate!
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 hover:scale-110 transition duration-500"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-20 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 hover:scale-110 transition duration-500">
          As a 4th-year Computer Science student, I have gained valuable skills in software development, mobile application creation, and algorithm design. My thesis project, Smart Parking Space Reservation System for Campus Facilities, allowed me to develop innovative solutions to real-world problems, enhancing both my technical and problem-solving abilities.

I am proficient in programming languages like JavaScript, Python, and Java, with hands-on experience in tools like React Native, SQLite, and machine learning frameworks. My journey has been a blend of academic challenges and opportunities to grow, preparing me to contribute meaningfully to the tech industry.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 hover:scale-110 transition duration-500">
          As a 4th-year Computer Science student, I have focused on developing innovative solutions to real-world problems. My thesis project, Smart Parking Space Reservation System for Campus Facilities, showcased my ability to design algorithms and create efficient systems to address campus challenges.

Proficient in JavaScript, Python, and React Native, I specialize in building creative and impactful applications. My academic journey has fueled my passion for innovation and prepared me to tackle complex problems with fresh ideas and cutting-edge technology.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 hover:scale-110 transition duration-500">
          As a 4th-year Computer Science student, I have embraced imaginative problem-solving to create impactful solutions. My thesis project, Smart Parking Space Reservation System for Campus Facilities, reflects my ability to envision and implement creative systems that address everyday challenges.

With expertise in JavaScript, Python, and React Native, I enjoy turning ideas into functional, user-friendly applications. My journey has been defined by curiosity, innovation, and a drive to transform imaginative concepts into practical technologies.
            </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MySkills;