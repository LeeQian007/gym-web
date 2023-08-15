import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePagetext from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function home({ setSelectedPage }: Props) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and main header */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="md:flex w-5/6 mx-auto items-center justify-center md:h-5/6"
      >
        {/* Main header */}
        <div className="mt-32 md:basis-3/5 z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20  md:before:content-evolvetext before:z-[-10]">
                <img src={HomePagetext} alt="home-page-text" />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-center mt-8 gap-8"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
              className="text-sm font-bold underline text-primary-500 hover:text-secondary-500 transition duration-200"
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* Image */}
        <div className="md:z-10 flex basis-3/5 justify-center md:ml-40 md:mt-16 ">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>
      {/* Sponsors */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full py-10 bg-primary-100">
          <div className="w-5/6 mx-auto">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="forbes-sponsor" />
              <img src={SponsorFortune} alt="forture-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default home;
