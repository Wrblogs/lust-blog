import Image from "next/image"

export const metadata = {
  title: "About Wanderlust - Our Story and Mission",
  description: "Learn about the Wanderlust team and our passion for travel and storytelling.",
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">About Wanderlust</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Wanderlust Team"
          width={600}
          height={400}
          className="rounded-lg mb-4 md:mb-0 md:mr-8"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Story</h2>
          <p className="mb-4 text-gray-600">
            Wanderlust was born out of a shared passion for travel and storytelling. Our team of avid travelers and
            writers came together with a mission to inspire and guide fellow adventurers around the globe.
          </p>
          <p className="text-gray-600">
            We believe that travel has the power to broaden horizons, foster understanding between cultures, and create
            lasting memories. Through our blog, we aim to share our experiences, provide valuable insights, and
            encourage others to explore the world's wonders.
          </p>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Inspire wanderlust and encourage responsible travel</li>
          <li>Provide practical tips and advice for travelers of all experience levels</li>
          <li>Showcase diverse destinations and cultures from around the world</li>
          <li>Foster a community of like-minded travelers and storytellers</li>
          <li>Promote sustainable and ethical travel practices</li>
        </ul>
      </div>
    </div>
  )
}

