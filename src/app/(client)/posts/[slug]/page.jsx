
import Header from "@/components/Header";
import { VT323 } from "next/font/google";
import Link from "next/link";
import { notFound} from 'next/navigation'
import React from "react";
import { client } from "../../../../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "@/components/RichTextComponent";
import Comment from "@/components/Comment";
import Form from "@/components/Form";

const dateFont = VT323({ weight: "400", subsets: ["latin"] });


export async function generateStaticParams() {
  const query = `*[_type == "post"]
   {
    slug
   }
  `;

  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
 
  // le premier slug represente le slug de notre dossier posts
  return slugRoutes.map(slug => ({
    slug, 
  }))
}

async function getPost(slug) {
  
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    body,
    tags[]-> {
      _id,
      slug,
      name
    },
    'comments': *[_type == "comment" && post._ref == ^._id && _createdAt < now()]| order(_createdAt asc){
      _id, 
      name, 
      email, 
      comment, 
      _createdAt
  }
  }
  `;

  const post = await client.fetch(query);

  return post;
}

export const revalidate = 30;

const page = async ({ params }) => {

 

  // console.log(params, "parmas");
  const post = await getPost(params?.slug);
  // console.log(post, "post");
  

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Header title={post?.title} />
        <article className="px-10 space-y-4  pb-28">
             <span className={`${dateFont?.className} text-purple-500`}>
               {new Date(post?.publishedAt).toDateString()}
             </span>
             <div className="mt-5">
               {post?.tags?.map((tag) => (
                 <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
                   <span className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900">
                     #{tag.name}
                   </span>
                 </Link>
               ))}
             </div>
            {/*      
             <div className={richTextStyles}> */}
               <PortableText value={post?.body} components={RichTextComponent} />
              {/* </div> */} 
              <Comment comments={post.comments} />
              <Form _id={post._id} />
        </article>
    </div>
  );
};

export default page;



//pour recevoir l'image dans sanity .  sanity/lib/image.js on a exporté la function urlForImage
// const myPortableTextComponents = { 
//   types: {
//     image: ({ value }) => (
//       <Image
//       src={urlForImage(value).url()}
//       alt={value.alt || "image d'un blog"}
//       width={700}
//       height={700}
//       priority
//       className="my-10"
//       // placeholder="blur"
//       // blurDataURL={urlForImage(value).url()}
//       // loading="lazy"
//     />
//     ),
//   },
// };

const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
