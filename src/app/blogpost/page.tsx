import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  category: string;
}

const BlogPostCard: React.FC<BlogPost> = ({
  id,
  title,
  content,
  imageUrl,
  date,
  category,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md overflow-hidden w-[300] transition-transform duration-300 hover:scale-105">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
          {category}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{content}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-500">{date}</p>

          <Link
            href={`/blogpage/${id}`}
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Introduction to Next.js: An Overview",
    content:
      "Learn the basics of Next.js and start building awesome React applications.",
    category: "Nextjs",
    imageUrl: "/images/nex.jpg",
    date: "Dec 20, 2024",
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS",
    content:
      "Dive deep into Tailwind CSS and create beautiful, responsive designs with ease.",
    category: "Tailwind",
    imageUrl: "/images/tai.jpg",
    date: "Dec 25, 2024",
  },
  {
    id: "3",
    title: "The Power of TypeScript",
    content:
      "Discover how TypeScript can improve your JavaScript development experience.",
    category: "Typescript",
    imageUrl: "/images/typescript.jpg",
    date: "Dec 26, 2024",
  },
  {
    id: "4",
    title: "Optimizing React Performance",
    content:
      "Learn techniques to improve the performance of your React applications.",
    category: "React",
    imageUrl: "/images/rea.png",
    date: "Dec 27, 2024",
  },
  {
    id: "5",
    title: "Introduction to Python",
    content:
      "Python is a beginner-friendly, versatile programming language ideal for web development, data analysis, AI, and more.",
    category: "Python",
    imageUrl: "/images/python.png",
    date: "Dec 28, 2024",
  },
  {
    id: "6",
    title: "Responsive Design Best Practices",
    content:
      "Master the art of creating websites that look great on any device.",
    category: "Web Design",
    imageUrl: "/images/web.jpg",
    date: "Dec 29, 2024",
  },
];

const Blog: React.FC = () => {
  return (
    <Layout>
      {/* Banner Section */}
      <div className="relative text-black">
        <Image
          src="/images/banner.jpg"
          alt="Contact Banner"
          height={800}
          width={1600}
          className="w-full h-full md:h-[400px] object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold text-fuchsia-900">
          Blog
        </h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
          <p className="text-gray-800 text-xs md:text-xl flex items-center">
            <Link href="/" className="font-bold hover:underline">
              Home
            </Link>
            <span className="font-bold mx-2">{">"}</span>
            <Link href="/" className=" hover:underline">
              Blog
            </Link>
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="text-center mb-12 mt-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Blog Posts
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-400 font-semibold">
          Explore our latest articles and insights
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
