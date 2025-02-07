"use server"

export const createBlog =async (data:FormData) => {
    const res = fetch("http://localhost:5000/blogs",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    });

    const blogInfo = (await res).json();
    return blogInfo
}