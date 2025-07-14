import React from "react";
import Blogs from "./Blogs";
import Seo from "./Seo";

const BlogsPage = () => {
  return (
    <>
    <Seo
        title="Blogs | Spark Tech Digital"
        description="Explore our recent digital marketing, branding, and web development projects delivered to satisfied clients."
      />
      <Blogs />
    </>
  );
};

export default BlogsPage;
