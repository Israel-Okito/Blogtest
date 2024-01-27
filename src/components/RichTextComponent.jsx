import Image from 'next/image'
import React from 'react'
import { urlForImage } from '../../sanity/lib/image'
import Link from 'next/link'

export const RichTextComponent = {

    types:{
        image:({value})=>{
            return(
                    <div className='relative w-full h-96 m-2 sm:m-10 mx-auto'>
                         <Image
                             src={urlForImage(value).url()}
                             alt={value.alt || "image d'un blog"}
                            //  width={700}
                            //  height={700}
                             fill
                             className="object-contain"
                         />
                   </div>
            )
        }
    },
    
    marks: {
        // Ex. 1: custom renderer for the em / italics decorator
        em: ({children}) => <em className=" font-semibold">{children}</em>,
    
        // Ex. 2: rendering a custom `link` annotation
        link: ({value, children}) => {
          const rel = !value.href.startsWith("/")
            ? "noreferrer noopener"
            : undefined;
          return (
            <Link
                 href={value?.href} 
                 rel={rel} 
                 className='text-xl underline underline-offset-4 decoration-purple-500 hover:decoration-black  dark:text-blue-500 dark:decoration-slate-500 dark:font-bold p-1'
            >
              {children}
            </Link>
          )
        },
      },

      block: {
        // Ex. 1: customizing common block types
        h1: ({children}) => <h1 className=" text-2xl sm:text-4xl md:text-5xl  py-3 sm:py-10 font-bold">{children}</h1>,
       
        h2: ({children}) => <h1 className="text-xl sm:text-3xl md:text-4xl py-3 sm:py-10 font-bold">{children}</h1>,
       
        h3: ({children}) => <h1 className="text-sm sm:text-2xl md:text-3xl py-3 sm:py-10 font-bold">{children}</h1>,
       
        h4: ({children}) => <h1 className="text-sm sm:text-xl md:text-2xl py-3 sm:py-10 font-bold">{children}</h1>,
       
     
        blockquote: ({children}) => <blockquote className="border-l-purple-500 border-l-4 pl-4 py-5 my-5">{children}</blockquote>,
    
        // Ex. 2: rendering custom styles
        // customHeading: ({children}) => (
        //   <h2 className="text-lg text-primary text-purple-700">{children}</h2>
        // ),
      },

      list: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>,
        number: ({children}) => <ol className="mt-lg list-decimal">{children}</ol>,
    
        // Ex. 2: rendering custom lists
        checkmarks: ({children}) => <ol className="m-auto text-lg">{children}</ol>,
      },

      listItem: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <li style={{listStyleType: 'disclosure-closed'}}>{children}</li>,
    
        // Ex. 2: rendering custom list items
        checkmarks: ({children}) => <li>✅ {children}</li>,
      },
    
  

}