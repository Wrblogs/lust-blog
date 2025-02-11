import { getBlogPostBySlug } from "@/lib/blog"
import { notFound } from "next/navigation"
import Image from "next/image"
import { MDXRemote } from "next-mdx-remote/rsc"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: `${post.title} - Wanderlust`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">{post.title}</h1>
      <p className="text-gray-600 mb-4">Published on {post.date}</p>
      <div className="mb-4">
        {post.categories.map((category) => (
          <span
            key={category}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {category}
          </span>
        ))}
      </div>
      <Image
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        width={1200}
        height={600}
        className="w-full h-auto rounded-lg mb-8"
      />
      <div className="prose lg:prose-xl max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}

