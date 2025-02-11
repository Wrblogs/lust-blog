import type React from "react"
import Link from "next/link"
import Image from "next/image"

const BlogPostList: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Exploring the Hidden Beaches of Bali",
      image: "/placeholder.svg?height=400&width=600",
      excerpt: "Discover secluded paradises away from the crowds...",
      date: "2023-05-15",
    },
    {
      id: 2,
      title: "A Food Lover's Guide to Tokyo",
      image: "/placeholder.svg?height=400&width=600",
      excerpt: "Indulge in the best culinary experiences Japan has to offer...",
      date: "2023-05-10",
    },
    {
      id: 3,
      title: "Hiking the Inca Trail: A Journey to Machu Picchu",
      image: "/placeholder.svg?height=400&width=600",
      excerpt: "Follow in the footsteps of the ancient Incas...",
      date: "2023-05-05",
    },
    {
      id: 4,
      title: "Safari Adventure: Wildlife Spotting in Tanzania",
      image: "/placeholder.svg?height=400&width=600",
      excerpt: "Experience the thrill of seeing Africa's Big Five up close...",
      date: "2023-04-30",
    },
    {
      id: 5,
      title: "Island Hopping in Greece: A Mediterranean Dream",
      image: "/placeholder.svg?height=400&width=600",
      excerpt: "Sail through crystal-clear waters and explore picturesque villages...",
      date: "2023-04-25",
    },
  ]

  return (
    <div className="space-y-8">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row transition-transform duration-300 hover:scale-105"
        >
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={600}
            height={400}
            className="w-full md:w-1/3 h-48 md:h-auto object-cover"
          />
          <div className="p-6 md:w-2/3">
            <h2 className="text-2xl font-semibold mb-2 text-blue-600">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.date}</span>
              <Link href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogPostList

