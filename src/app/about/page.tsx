import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <Layout>
      {/* Banner Image */}
      <div className="relative text-black">
        <Image
          src="/images/banner.jpg"
          alt="Contact Banner"
          height={800}
          width={1600}
          className="w-full h-full md:h-[400px] object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-6xl font-bold text-fuchsia-900">
          About
        </h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
          <p className="text-gray-800 text-xs md:text-xl flex items-center">
            <Link href="/" className="font-bold hover:underline">
              Home
            </Link>
            <span className="font-semibold mx-2">{">"}</span>
            <Link href="/" className=" hover:underline">
              About
            </Link>
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl sm:text-4xl xs:text-3xl font-bold mb-8 text-center text-gray-700 dark:text-white mt-10">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Image Section */}
          <Image
            src="/images/about2.jpeg"
            alt="Team"
            width={300}
            height={300}
            className="rounded-lg shadow-md h-[250] w-[500]"
            priority={true}
          />
          {/* Content Section */}
          <div className="prose lg:prose-xl dark:text-gray-400">
            <p className="text-sm">
              I&apos;m passionate about sharing knowledge and insights on web
              development, design, and technology. The goal of this blog is to
              provide you with valuable information, guidance, and the latest
              trends in the tech world.
            </p>
            <p className="mt-4 text-sm">
              Whether you&apos;re here to learn development, stay updated on
              industry news, or explore creative solutions to everyday challenges,
              there&apos;s something here for you. My aim is to inspire and inform
              through engaging and insightful content that adds value to your
              journey.
            </p>
            <p className="mt-4 text-sm">
              Thank you for visiting! If you have any suggestions, feedback, or
              topics you&apos;d like me to cover, feel free to reach out. Let&apos;s
              learn and grow together.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
