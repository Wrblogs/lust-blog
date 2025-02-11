import Link from "next/link"
import FeaturedPosts from "./components/FeaturedPosts"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">Welcome to Wanderlust</h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover amazing travel destinations, tips, and stories from around the world.
        </p>
        <Link
          href="/blog"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Explore Our Blog
        </Link>
      </section>
      <FeaturedPosts />
    </div>
  )
}

