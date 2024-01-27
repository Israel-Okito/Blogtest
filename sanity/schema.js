import { author } from "./schemas/author";
import { comment } from "./schemas/comment";
import { post } from "./schemas/post";
import { tag } from "./schemas/tag";

export const schema = {
  types: [post, tag, comment, author],
}
