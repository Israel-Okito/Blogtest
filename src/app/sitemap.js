import { client } from "../../sanity/lib/client";

export default async function sitemap() {
   
    const query = `
    *[_type == "post"] {
      _id,
      _updatedAt
  
    }
    `;
  
  
    const data = await client.fetch(query);

    const postEntries = data.map(({_id, _updatedAt})=>({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${_id}`,
        lastModified: new Date(_updatedAt),
    //     // changeFrequency: 'yearly',
    //     // priority: 1,
    }))


    
   


    return [
        ...postEntries
    //   {
    //     url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    //     lastModified: new Date(),
    //     // changeFrequency: 'yearly',
    //     // priority: 1,
    //   },
    //   {
    //     url: 'https://acme.com/about',
    //     lastModified: new Date(),
    //     changeFrequency: 'monthly',
    //     priority: 0.8,
    //   },
    //   {
    //     url: 'https://acme.com/blog',
    //     lastModified: new Date(),
    //     changeFrequency: 'weekly',
    //     priority: 0.5,
    //   },
    ]
  }