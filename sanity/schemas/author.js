
import { defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "author Name",
      type: "string",
    },
    {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "name",
        },
      },
    {
        name: "image",
        title: "Image",
        type: "image",
        fields: [{ type: "text", name: "alt", title: "Alt" }],
        
    },
    {
      name: "bio",
      title: "author bio",
      type: "array",
      of: [
        { type: "block" },
      ]
    },

  ],
});