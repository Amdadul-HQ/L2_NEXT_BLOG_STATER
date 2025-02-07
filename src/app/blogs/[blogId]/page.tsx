import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import { Blog } from "@/types";

export const generateStaticParams = async () => {
    const res = await fetch("http://localhost:5000/blogs");
    const blogs = await res.json();

    return blogs.slice(0,3).map((blog:Blog)=>({
        blogId:blog.id
    }))
}

export const generateMetadata = async({params}:{params:Promise<{blogId:string}>}) => {
    const blogId = await params.blogId;
    const res = await fetch(`http://localhost:5000/blogs/${blogId}`,{
        next:{
            revalidate:30
        }
    });
    const blog = await res.json();
    return {
        title:blog.title,
        description:blog.description
    }
}

const BlogDetailsPage = async({params}:{params:Promise<{blogId:string}>}) => {

    const blogId = (await params).blogId;
    const res = await fetch(`http://localhost:5000/blogs/${blogId}`,{
        next:{
            revalidate:30
        }
    });
    const blog = await res.json();
    return (
        <div>
            <BlogDetailsCard blog={blog}/>
        </div>
    );
};

export default BlogDetailsPage;