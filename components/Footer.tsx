import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { profile } from "console";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5" id="contact">
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
        <img
          src="footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div> */}
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]:">
          Prêt à discuter pour une{" "}
          <span className="text-purple">future collaboration </span>
          ensemble
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactez-moi et discutons de vos objectifs et de la manière dont je
          peux vous aider
        </p>
        <a href="mailto:alexzoonekynd@gmail.com">
          <MagicButton
            title="Contactez moi"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center ">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Alex
        </p>
        <div className="flex items-center md:gap-3  mt-6 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.url}>
                <img
                  src={profile.img}
                  alt={profile.id}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
