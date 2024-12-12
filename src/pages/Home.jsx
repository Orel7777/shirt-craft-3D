import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { CustomButton } from "../components";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="../../public/threejs.png"
              alt="logo"
              className="object-contain w-8 h-8"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                CREATE <br className="hidden xl:block" />
                NOW.
              </h1>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-5"
            {...headContentAnimation}>
            <p className="max-w-md text-base font-normal text-gray-600">
              Transform your personal living space with our advanced 3D
              room visualization tool.{" "}
              <strong>Express your creativity</strong> and design your
              ideal environment.
            </p>
            <CustomButton
              type="filled"
              title="Start Design"
              handleClick={() => (state.intro = false)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
