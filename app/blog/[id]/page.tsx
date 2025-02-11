import Image from "next/image"

export const metadata = {
  title: "Blog Post Title - Wanderlust",
  description: "Read about this amazing travel experience on Wanderlust.",
}

export default function BlogPost({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the blog post data based on the ID
  const post = {
    id: params.id,
    title: "Exploring the Hidden Beaches of Bali",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Bali, known for its stunning beaches and vibrant culture, has so much more to offer beyond the popular tourist spots. In this post, we'll take you on a journey to discover some of the most secluded and breathtaking beaches that Bali has to offer.</p>
      <h2>1. Nyang Nyang Beach</h2>
      <p>Located in the Uluwatu area, Nyang Nyang Beach is a hidden gem that requires a bit of effort to reach. The reward? A pristine stretch of white sand, crystal-clear waters, and hardly any crowds.</p>
      <h2>2. Green Bowl Beach</h2>
      <p>Tucked away at the bottom of a cliff in Ungasan, Green Bowl Beach is a small but stunning beach known for its emerald-green waters and limestone caves.</p>
      <h2>3. Gunung Payung Beach</h2>
      <p>This secluded beach in South Kuta offers a peaceful retreat away from the bustling tourist areas. The dramatic cliffs surrounding the beach provide a picturesque backdrop for your beach day.</p>
      <p>Exploring these hidden beaches of Bali will give you a new perspective on the island's natural beauty and help you create unforgettable memories of your travels.</p>
    `,
    date: "2023-05-15",
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">{post.title}</h1>
      <p className="text-gray-600 mb-4">Published on {post.date}</p>
      <Image
        src={post.image || "/placeholder.svg"}
        alt={post.title}
        width={1200}
        height={600}
        className="w-full h-auto rounded-lg mb-8"
      />
      <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

