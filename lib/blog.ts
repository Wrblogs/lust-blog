import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "blog")

export interface BlogPost {
  slug: string
  title: string
  date: string
  categories: string[]
  image: string
  excerpt: string
  content: string
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "")
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      ...(data as { title: string; date: string; categories: string[]; image: string; excerpt: string }),
      content,
    }
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      ...(data as { title: string; date: string; categories: string[]; image: string; excerpt: string }),
      content,
    }
  } catch (error) {
    console.error(`Error reading blog post: ${slug}`, error)
    return null
  }
}

