
import Header from "@/components/Header";
import PostComponent from "@/components/PostComponent";
import React from "react";
import { client } from "../../../../../sanity/lib/client";

async function getPostsByTag(tag) {
  const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const posts = await client.fetch(query);
  return posts;
}

export const revalidate = 60;


const page = async ({ params }) => {
  const posts = await getPostsByTag(params.slug);
  console.log(posts, "posts by tag");
  return (
    <div>
      <Header title={`#${params?.slug}`} tags />
      <div>
        {posts?.length > 0 && posts?.map((post) => (
          <PostComponent key={post?._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default page;
