"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProductDesign from "../../assets/product-design-bg-1.webp";
import Python_Tech from "./assets/python-tech.svg";
import Dotnet_Tech from "./assets/dotnet-tech.svg";
import Rails_Tech from "./assets/rails-tech.svg";
import Django_Tech from "./assets/django-tech.svg";
import Nodejs_Tech from "./assets/nodejs-tech.svg";
import Flutter_Tech from "./assets/flutter-tech.svg";
import Reactnative_Tech from "./assets/react-tech.svg";
import Swift_Tech from "./assets/swift-tech.svg";
import Kotlin_Tech from "./assets/kotlin-tech.svg";
import Java_Tech from "./assets/java-tech.svg";
import CSharp_Tech from "./assets/c-sharp-tech.svg";
import Html_Tech from "./assets/html-tech.svg";
import Javascript_Tech from "./assets/javascript-tech.svg";
import Angular_Tech from "./assets/angular-tech.svg";
import VueJS_Tech from "./assets/vuejs-tech.svg";
import Typescript_Tech from "./assets/typescript-tech.svg";
import Css_Tech from "./assets/css-tech.svg";
import Mongodb_Tech from "./assets/mongodb-tech.svg";
import Mysql_Tech from "./assets/mysql-tech.svg";
import Postgresql_Tech from "./assets/postgresql-tech.svg";
import Firebase_Tech from "./assets/firebase-tech.svg";
import Express_Tech from "./assets/express-tech.svg"

function StackSection() {
  // State to manage the active tab for tech stacks
  const [activeTab, setActiveTab] = useState("backend");

  // Content for each tech stack
  const techContent = {
    backend: (
      <div className="mt-4 md:mt-5 grid grid-cols-5 gap-4">
        {[
          { src: Python_Tech, name: "Python" },
          { src: Dotnet_Tech, name: ".NET" },
          { src: Rails_Tech, name: "Rails" },
          { src: Django_Tech, name: "Django" },
          { src: Nodejs_Tech, name: "Node.js" },
        ].map((milestone, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative group">
              <Image
                alt={milestone.name}
                width={70}
                height={70}
                src={milestone.src}
                className="m-2"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-all duration-200"></div>
            </div>
            <span className="mt-2 text-sm font-medium text-gray-700">
              {milestone.name}
            </span>
          </div>
        ))}
      </div>
    ),

    frontend: (
      <div className="mt-4 md:mt-5 grid grid-cols-5 gap-4">
        {[
          { src: Flutter_Tech, name: "Flutter" },
          { src: Reactnative_Tech, name: "React Native" },
          { src: Swift_Tech, name: "Swift" },
          { src: Kotlin_Tech, name: "Kotlin" },
          { src: Java_Tech, name: "Java" },
          { src: CSharp_Tech, name: "C#" },
          { src: Html_Tech, name: "HTML" },
          { src: Javascript_Tech, name: "JavaScript" },
          { src: Angular_Tech, name: "Angular" },
          { src: VueJS_Tech, name: "Vue.js" },
          { src: Typescript_Tech, name: "TypeScript" },
          { src: Css_Tech, name: "CSS" },
        ].map((milestone, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative group">
              <Image
                alt={milestone.name}
                width={50}
                height={50}
                src={milestone.src}
                className="m-2"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-all duration-200"></div>
            </div>
            <span className="mt-2 text-sm font-medium text-gray-700">
              {milestone.name}
            </span>
          </div>
        ))}
      </div>
    ),
    databases: (
      <div className="mt-4 md:mt-5 grid grid-cols-5 gap-4">
        {[
          { src: Mongodb_Tech, name: "MongoDB" },
          { src: Mysql_Tech, name: "MySQL" },
          { src: Postgresql_Tech, name: "PostgreSQL" },
          { src: Firebase_Tech, name: "Firebase" },
        ].map((milestone, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative group">
              <Image
                alt={milestone.name}
                width={70}
                height={70}
                src={milestone.src}
                className="m-2"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-all duration-200"></div>
            </div>
            <span className="mt-2 text-sm font-medium text-gray-700">
              {milestone.name}
            </span>
          </div>
        ))}
      </div>
    ),
    frameworks: (
      <div className="mt-4 md:mt-5 grid grid-cols-5 gap-4">
        {[
          { src: Angular_Tech, name: "Angular" },
          { src: VueJS_Tech, name: "Vue.js" },
          { src: Reactnative_Tech, name: "React" },
          { src: Express_Tech, name: "Express.js" },
        ].map((milestone, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative group">
              <Image
                alt={milestone.name}
                width={70}
                height={70}
                src={milestone.src}
                className="m-2"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-all duration-200"></div>
            </div>
            <span className="mt-2 text-sm font-medium text-gray-700">
              {milestone.name}
            </span>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <div className="bg-white pt-20 ">
      <div className="container mx-auto">
        {/* Background Image Section */}
        <div className="relative h-[calc(100vh-20vh)] bg-no-repeat bg-center bg-cover">
          {/* Background Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10 text-center rounded-2xl">
            <h1 className="text-6xl font-bold text-white p-20">
              We Have the Solutions That Your <br />
              Business Needs!
            </h1>
            <p className="text-xl text-white">
              Book a consultation and take a tour of what could change your
              business game!
            </p>
            <button className="px-10 py-2 mt-10 bg-primary text-black hover:bg-primaryHover transition-colors rounded-lg">
              Get Started
            </button>
          </div>

          {/* Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={ProductDesign}
              layout="fill"
              objectFit="cover"
              alt="ProductDesign"
              className="rounded-2xl"
            />
          </div>
        </div>

        {/* Tech Stacks Tab Section */}
        <div className="container mx-auto">
          <div className="p-10">
            <h2 className="text-5xl font-bold text-center mb-8 text-black">
              Our Mastered <span className="text-primary">Tech Stacks</span>
            </h2>
            <p className="text-center text-gray-600 mb-6 text-2xl">
              Dazzle your audience with our cutting-edge native iOS and Android
              apps, cross-platform solutions, and Progressive Web Apps.
              Leveraging our extensive expertise in key technologies, we craft
              feature-rich experiences that elevate your digital presence
            </p>

            {/* Tab Navigation */}
            <div className="flex justify-center gap-5 mb-8">
              {[
                { key: "backend", label: "Backend" },
                { key: "frontend", label: "Frontend" },
                { key: "databases", label: "Databases" },
                { key: "frameworks", label: "Frameworks" },
                { key: "devOps", label: "DevOps" },
                { key: "qualityassurance", label: "Quality Assurance" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  className={`${
                    activeTab === tab.key
                      ? "text-black border border-primary bg-primary p-3 px-5 rounded-lg"
                      : "text-black border border-primary p-3 px-5 rounded-lg hover:bg-primary hover:text-white hover:border-primary"
                  } text-lg font-medium transition-colors`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-6 ">{techContent[activeTab]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StackSection;
