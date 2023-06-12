import React, { FC } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className="bg-gray-900 text-white">
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

      <div className="mt-12">
        <h3 className="text-3xl">About Me</h3>
        <p>
          I am a Professional software developer with 1.5 years of experience in
          full-stack web development. Skilled in Python, JavaScript, React, and
          Flutter. Strong problem-solving and communication skills.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-3xl">Skills</h3>
        <ul className="list-disc list-inside">
          <li>Python</li>
          <li>Angular</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>Flutter</li>
          <li>React</li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-3xl">Experience</h3>
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

      <div className="mt-12">
        <h3 className="text-3xl">Education</h3>
        <ul>
          <li className="mt-4">
            <p className="text-xl">M.Sc. CS</p>
            <p className="text-lg">GTN Arts College, Dindigul</p>
            <p className="text-sm">2019-2021 [CGPA-7.55]</p>
          </li>
          <li className="mt-4">
            <p className="text-xl">B.Sc. CS</p>
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
        <a
          href="tel:+918489808561"
          target="_blank"
          className="inline-flex items-center mr-4 text-white hover:text-gray-300"
        >
          <FaPhone className="mr-2" />
          <span>+91 8489808561</span>
        </a>
        <br />
        <a
          href="mailto:loganathanrbl@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mr-4 text-white hover:text-gray-300"
        >
          <FaEnvelope className="mr-2" />
          <span>loganathanrbl@gmail.com</span>
        </a>
        <br />
        <a
          href="http://wa.me/918489808561"
          target="_blank"
          className="inline-flex items-center mr-4 text-white hover:text-gray-300"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/r-loganathan-120916216/"
          target="_blank"
          className="inline-flex items-center mr-4 text-white hover:text-gray-300"
        >
          <FaLinkedin className="text-3xl" />
        </a>
        <a
          href="https://github.com/Logubabu"
          target="_blank"
          className="inline-flex items-center mr-4 text-white hover:text-gray-300"
        >
          <FaGithub className="text-3xl" />
        </a>
      </div>
    </div>
    <br />
    <br />
  </div>
);

export default Home;
