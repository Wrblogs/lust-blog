import BlogPostList from "../components/BlogPostList"

export const metadata = {
  title: "Wanderlust Blog - Travel Stories and Tips",
  description: "Read our latest travel stories, tips, and destination guides.",
}

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Travel Blog</h1>
      <BlogPostList />
    </div>
  )
}

