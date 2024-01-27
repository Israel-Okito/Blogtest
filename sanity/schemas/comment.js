import { defineType } from "sanity";

export const comment = defineType({
 
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title:'Email',
        type: 'string',
      },
      {
        name: 'comment',
        title: 'Comment',
        type: 'text',
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
      },
      {
        name: 'post',
        title: 'Post',
        type: 'reference',
        to: [{ type: 'post' }], 
      },
    ],
})

