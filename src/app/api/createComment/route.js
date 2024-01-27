
// import { client } from "../../../../sanity/lib/client"
import { NextResponse as res } from "next/server"
import { createClient } from '@sanity/client'
const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-17'
}
const client = createClient(config)

export  async function POST(req) {
  const { _id, name, email, comment } = await req.json()
  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
    })
  } catch (err) {
    console.error(err)
    return res.json({ message: `Couldn't submit comment`, err })
  }
  return res.json({ message: 'Comment submitted' })
}