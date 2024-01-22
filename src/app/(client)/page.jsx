
import PostComponent from "@/components/PostComponent";
import { client } from "../../../sanity/lib/client";
import Header from "@/components/Header";

async function getPosts() {
  const query = `
  *[_type == "post"] {
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
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 30;

export default async function Home() {
  const posts = await getPosts();
  console.log(posts, "posts");

  return (
    <div>
      
      <Header titles="Articles" tags />
       <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div> 

    </div>
  );
}
