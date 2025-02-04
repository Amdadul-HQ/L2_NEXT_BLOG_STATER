import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

export const generateStaticParams = async () => {
    return [
        {
            blogId:"1",
        },
        {
            blogId:"2",
        },
        {
            blogId:"3",
        }
    ]
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