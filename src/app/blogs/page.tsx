import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";

const BlogPage = async() => {
    const res = await fetch("http://localhost:5000/blogs");
    const blogs = await res.json();
    return (
        <div>
             <h1 className="text-3xl text-center my-5 font-bold">
        Explore All<span className="text-teal-600">Blog</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div>
        {blogs.map((blog:Blog) => <BlogCard key={blog.id} blog={blog}/>)}
      </div>
        </div>
    );
};

export default BlogPage;