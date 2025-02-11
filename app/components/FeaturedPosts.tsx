import type React from "react"
import Link from "next/link"
import Image from "next/image"

const FeaturedPosts: React.FC = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Exploring the Hidden Beaches of Bali",
      image: "/placeholder.svg?height=400&width=600",
      excerpt: "Discover secluded paradises away from the crowds...",
    },
    {
      id: 2,
      title: "A Food Lover's Guide to Tokyo",
      image: "/placeholder.svg?height=400&width=600",
      excerpt: "Indulge in the best culinary experiences Japan has to offer...",
    },
    {
      id: 3,
      title: "Hiking the Inca Trail: A Journey to Machu Picchu",
      image: "/placeholder.svg?height=400&width=600",
      excerpt: "Follow in the footsteps of the ancient Incas...",
    },
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedPosts

