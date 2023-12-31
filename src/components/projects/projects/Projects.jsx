import classes from "./Projects.module.scss";
import image1 from "../../../assets/project/orpl/ORPL_LS.png";
import weather1 from "../../../assets/project/weather/weather_LS.png";

import shop from "../../../assets/project/e-commerce/shop-cart_LS.png";

import littleLemon from "../../../assets/project/little-lemon/little-lemon_LS.png";

import SecondaryHeading from "../../ui/SecondaryHeading";
import HeadingTertiary from "../../ui/HeadingTertiary";

import { useNavigate } from "react-router-dom";

import { FaReact, FaSass, FaFigma } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

import { ProjectCard, ProjectCardReverse } from "../../ui/ProjectCard";

import { ButtonOutline, ButtonLink } from "../../ui/ButtonOutline";

function Projects() {
  const navigate = useNavigate();

  return (
    <section className={classes.projects} id="projects">
      <SecondaryHeading>My projects</SecondaryHeading>
      <div className={classes["projects__container"]}>
        <div className={classes["project"]}>
          <HeadingTertiary className={classes["project__title"]}>
            01. oranous robotics
          </HeadingTertiary>
          <ProjectCardReverse>
            <div className={classes["project__image"]}>
              <img src={image1} alt="" />
            </div>
            <div className={classes["project__content"]}>
              <HeadingTertiary className={classes["project__title"]}>
                01. oranous robotics
              </HeadingTertiary>
              <p className={classes["project__text"]}>
                A fully responsive company website that seamlessly integrates
                e-commerce features with an interactive blog section. The
                platform includes secure integrated payment processing,
                specialized admin controls for effortless blog management, and
                user-friendly comment functionality.
              </p>
              <div className={classes["project__stack"]}>
                <FaReact></FaReact>
                <FaSass></FaSass>
              </div>
              <div className={classes.btns}>
                <ButtonOutline
                  onClick={() => {
                    navigate("/project/ouranos");
                  }}
                >
                  read more
                </ButtonOutline>
                <ButtonLink href="https://github.com/Bhavani-Bolloju/Ouranos-Project-website">
                  git hub
                </ButtonLink>
              </div>
            </div>
          </ProjectCardReverse>
        </div>
        <div className={classes["project"]}>
          <HeadingTertiary className={classes["project__title"]}>
            02. little lemon restaurant
          </HeadingTertiary>
          <ProjectCard>
            <div className={classes["project__image"]}>
              <img src={littleLemon} alt="" />
            </div>
            <div className={classes["project__content"]}>
              <HeadingTertiary className={classes["project__title"]}>
                02. little lemon
              </HeadingTertiary>
              <p className={classes["project__text"]}>
                Built a cool Little Lemon Restaurant online, where people can
                easily book a table. I used React skills I learned from a
                Coursera course to make it happen. The goal was simple: make it
                easy for customers to book online, so the restaurant doesn't
                have to rely only on walk-ins. By designing everything in Figma
                and using user-friendly tricks, I aimed to boost sales and keep
                customers coming back for more tasty experiences!
              </p>
              <div className={classes["project__stack"]}>
                <FaReact />
                <FaSass />
                <FaFigma />
                <IoLogoFirebase />
              </div>
              <div className={classes.btns}>
                <ButtonOutline
                  onClick={() => {
                    navigate("/project/littleLemon");
                  }}
                >
                  read more
                </ButtonOutline>
                <ButtonLink href="https://github.com/Bhavani-Bolloju/little-lemon-restaurant">
                  git hub
                </ButtonLink>
              </div>
            </div>
          </ProjectCard>
        </div>
        <div className={classes["project"]}>
          <HeadingTertiary className={classes["project__title"]}>
            03. Daily Weather
          </HeadingTertiary>
          <ProjectCardReverse>
            <div className={classes["project__image"]}>
              <img src={weather1} alt="" />
            </div>
            <div className={classes["project__content"]}>
              <HeadingTertiary className={classes["project__title"]}>
                03. Daily Weather
              </HeadingTertiary>
              <p className={classes["project__text"]}>
                Developed a web app using React.js and Redux to provide
                real-time weather data from open-source APIs. Created an
                intuitive interface for current conditions, hourly, and daily
                forecasts worldwide. Integrated interactive graphs using
                Recharts for visualizing hourly weather changes, enhancing user
                experience.
              </p>
              <div className={classes["project__stack"]}>
                <FaReact></FaReact>
                <FaSass></FaSass>
              </div>
              <div className={classes.btns}>
                <ButtonOutline
                  onClick={() => {
                    navigate("/project/weather");
                  }}
                >
                  read more
                </ButtonOutline>
                <ButtonLink href="https://github.com/Bhavani-Bolloju">
                  git hub
                </ButtonLink>
              </div>
            </div>
          </ProjectCardReverse>
        </div>
        <div className={classes["project"]}>
          <HeadingTertiary className={classes["project__title"]}>
            04. Shop Cart
          </HeadingTertiary>
          <ProjectCard>
            <div className={classes["project__image"]}>
              <img src={shop} alt="" />
            </div>
            <div className={classes["project__content"]}>
              <HeadingTertiary className={classes["project__title"]}>
                04. Shop Cart
              </HeadingTertiary>
              <p className={classes["project__text"]}>
                Developed a fully responsive e-commerce website that seamlessly
                integrates data from an open-source API. Key features include
                robust user authentication, detailed product pages, efficient
                product category filtering, and convenient cart management. My
                goal was to create a user-centric online shopping experience.
              </p>
              <div className={classes["project__stack"]}>
                <FaReact></FaReact>
                <FaSass></FaSass>
              </div>
              <div className={classes.btns}>
                <ButtonOutline
                  onClick={() => {
                    navigate("/project/shopCart");
                  }}
                >
                  read more
                </ButtonOutline>
                <ButtonLink href="https://github.com/Bhavani-Bolloju/E-commerce">
                  git hub
                </ButtonLink>
              </div>
            </div>
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}

export default Projects;
