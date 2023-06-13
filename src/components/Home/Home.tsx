import React, { FC } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className="bg-gray-900 text-white">
    <header className="w-full fixed top-0 left-0 z-[var(--z-fixed)] bg-black shadow-md">
      <nav className="nav bd_grid">
        <div>
          <a href="#" className="nav_logo">
            Loganathan
          </a>
        </div>
        <div className="nav_menu" id="nav_menu">
          <ul className="nav_list">
            <li className="nav_items">
              <a href="#home" className="nav_link active">
                Home
              </a>
            </li>
            <li className="nav_items">
              <a href="#about" className="nav_link active">
                About
              </a>
            </li>
            <li className="nav_items">
              <a href="#skills" className="nav_link active">
                Skills
              </a>
            </li>
            <li className="nav_items">
              <a href="#work" className="nav_link active">
                Work
              </a>
            </li>
            <li className="nav_items">
              <a href="#contact" className="nav_link active">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="nav_toggle" id="nav_toggle">
          <i className="bx bx-menu-alt-right"></i>
        </div>
      </nav>
    </header>
    <div className="container mx-auto py-12">
      <img
        src={require("../../assets/profile picture.jpeg")}
        alt="Profile"
        className="w-48 h-48 rounded-full mx-auto mb-4"
      />
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Loganathan R</h1>
        <h2 className="text-xl">Software Developer</h2>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-3xl mb-4">
          <u>About Me</u>
        </h3>
        <p className="py-4">
          I am a Professional software developer with 1.5 years of experience in
          full-stack web development. Skilled in Python, JavaScript, React, and
          Flutter. Strong problem-solving and communication skills.
        </p>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-3xl mb-4">
          <u>Skills</u>
        </h3>
        <ul className="list-disc list-inside py-4">
          <li>Python</li>
          <li>Angular</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>Flutter</li>
          <li>React</li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-3xl mb-4">
          <u>Experience</u>
        </h3>
        <ul className="mt-4">
          <li className="mb-4">
            <h4 className="text-xl font-bold">Software Developer</h4>
            <p className="text-lg">The PEN India - Chennai</p>
            <p className="text-sm">01/Mar/2023 - Present</p>
          </li>
          <li className="mb-4">
            <h4 className="text-xl font-bold">Software Developer</h4>
            <p className="text-lg">Peninsular Research Operation - Chennai</p>
            <p className="text-sm">01/Mar/2022 - 28/Feb/2023</p>
          </li>
          <li className="mb-4">
            <h4 className="text-xl font-bold">Part-Time COMPUTER OPERATOR</h4>
            <p className="text-lg">
              SRI SAKTHI SOCIAL ECONOMICAL AND EDUCATIONAL WELFARE TRUST (NGO) -
              Ayyampalayam
            </p>
            <p className="text-sm">15/May/2020 - 30/Nov/2020</p>
          </li>
          <li className="mb-4">
            <h4 className="text-xl font-bold">Part-Time COMPUTER OPERATOR</h4>
            <p className="text-lg">CO-OPERATIVE SOCIETY - P.Kosavapatty</p>
            <p className="text-sm">02/May/2016 - 31/Oct/2018</p>
          </li>
        </ul>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-3xl">
          <u>Education</u>
        </h3>
        <ul className="flex justify-center">
          <li className="mt-4 p-5">
            <p className="text-2xl">M.Sc. CS</p>
            <p className="text-lg">GTN Arts College, Dindigul</p>
            <p className="text-sm">2019-2021 [CGPA-7.55]</p>
          </li>
          <li className="mt-4 p-5">
            <p className="text-2xl">B.Sc. CS</p>
            <p className="text-lg">GTN Arts College, Dindigul</p>
            <p className="text-sm">2016-2019 [CGPA-6.70]</p>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-8 text-center">
      <h1 className="text-3xl mb-4">
        <u>Contact</u>
      </h1>
      <div className="mt-4">
        <div className="p-4 flex items-center flex-wrap justify-center">
          <a
            href="tel:+918489808561"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center mb-4 md:mr-4 text-white hover:text-gray-300"
          >
            <FaPhone className="mr-2 text-3xl" />
            <span>+91 8489808561</span>
          </a>
          <a
            href="mailto:loganathanrbl@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 inline-flex items-center mb-4 md:mr-4 text-white hover:text-gray-300"
          >
            <FaEnvelope className="mr-2 text-3xl" />
            <span>loganathanrbl@gmail.com</span>
          </a>
          <div className="p-2 inline-flex items-center mb-4 md:mr-4 text-white hover:text-gray-300">
            <FaMapMarkerAlt className="mr-2 text-3xl" />
            <span>Chennai</span>
          </div>
        </div>
        <div className="flex justify-center">
          <a
            href="http://wa.me/918489808561"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center mr-4 text-white hover:text-gray-300"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
          <a
            href="https://m.facebook.com/profile.php?id=100007833377528"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mr-4 text-white hover:text-gray-300"
          >
            <FaFacebook className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/r-loganathan-120916216/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center mr-4 text-white hover:text-gray-300"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://github.com/Logubabu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center mr-4 text-white hover:text-gray-300"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
    <br />
    {/* <footer className="bg-gray-900 py-3 text-white text-center">
      <p>
        Copyright © 2023{"  "}
        <b>
          <i> Loganathan R. </i>
        </b>
        {"  "}© All rights reserved.
      </p>
    </footer> */}
    <footer className="bg-[#0e2431] text-white text-center font-semibold py-8">
      <p className="text-2xl mb-4 animate-fade-down">
        <i>Loganathan R</i>
      </p>

      <div className="flex justify-center space-x-4 mb-4  animate__animated animate-fade-down animate__delay-2s">
        <a href="#" className="text-white text-lg my-2">
          <i className="bx bxl-facebook-circle"></i>
        </a>
        <a href="#" className="text-white text-lg my-2">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="#" className="text-white text-lg my-2">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="#" className="text-white text-lg my-2">
          <i className="bx bxl-github"></i>
        </a>
      </div>

      <p data-aos="fade-down" data-aos-delay="650">
        &#169; {new Date().getFullYear()} copyright all right reserved
      </p>
    </footer>
    <br />
  </div>
);

export default Home;
