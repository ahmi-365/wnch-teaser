import SectionHeading from "@/common/component/element/SectionHeading";
import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import BlogList from "./component/BlogList";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Link from "next/link";
import Buttons from "@/common/component/element/Buttons";
import Feedback from "../Feedback";
import { ButtonSpot } from "@/common/component/element/ButtonSpot";

const Blog = () => {
  return (
    <div className="h-auto max-w-[1500px]  px-10 xl:px-20 pb-20">
      <ComponentTransition className="flex justify-center py-5">
        <SectionHeading title="Tech News" icon={<IoNewspaperOutline  size={30} />} />
      </ComponentTransition>
      <ComponentTransition delay={0.1} className="flex justify-center items-center flex-col">
        <h1 className="text-3xl md:text-5xl py-5 text-center bg-clip-text dark:bg-gradient-to-r from-white from-50% to-[#8f8f8f] bg-text md:w-[50%] text-transparent font-bold">
          Our Blog & News
        </h1>
        <p className="text-base md:text-2xl text-neutral-500 dark:text-neutral-300 md:w-[50%] text-center">
          Insights on provider matching, towing ops, and fleet management.
        </p>
      </ComponentTransition>
      <BlogList />
      <ComponentTransition className="w-full flex items-center justify-center gap-3 mt-5">
        <Link href='/blog' className="flex justify-center">
          <ButtonSpot
            title="View All Blog"
            className="!px-10 !py-4"
          />
        </Link>
      </ComponentTransition>
    </div>
  );
};

export default Blog;
