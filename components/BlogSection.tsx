"use client";
import { formatDateToDayMonthYear } from "@/lib/formateData";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import React from "react";
import { Reveal } from "./Reveal";
import { socialLinks } from "@/data/socialLinks";

export const BlogSection = () => {
  return (
    <Reveal stagger={0.1} className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold ">Blogs</h2>
        <Link
          href={socialLinks.find((link) => link.name === "Blog")?.url || ""}
          target="_blank"
          className="text-sm relative group"
        >
          View All
          <span className="absolute z-[10] left-0 -bottom-0.5 h-[1.5px] w-0 bg-current transition-all duration-200 group-hover:w-full" />
          <span className="absolute left-0 -bottom-0.5 h-[1.5px] bg-current/10 w-full " />
        </Link>
      </div>
      <Suspense fallback={<SkeletonLoader />}>
        <Blogs />
      </Suspense>
    </Reveal>
  );
};

const Blogs = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const extractImageUrl = (content: string) => {
      const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
      return imgTagMatch ? imgTagMatch[1] : null;
    };

    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shivaydv"
        );
        const data = await res.json();
        const posts = data.items.slice(0, 4).map((item: any) => ({
          title: item.title,
          link: item.link,
          pubDate: new Date(item.pubDate),
          imageUrl: extractImageUrl(item.content),
        }));
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-2 ">
      {posts.map((post: any, index: number) => (
        <Link
          href={post.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg group duration-300 transition-all ease-in-out hover:bg-card "
        >
          <h1 className="">{post.title}</h1>
          <div className="text-sm text-muted-foreground">
            {formatDateToDayMonthYear(post.pubDate)}
          </div>
        </Link>
      ))}
    </div>
  );
};

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
      <div className="space-y-2  rounded-lg  ">
        <div className=" w-full h-3 bg-neutral-700 animate-pulse rounded-full"></div>
        <div className=" w-full h-3 bg-neutral-700 animate-pulse rounded-full"></div>
        <div className=" bg-neutral-700 w-16 h-3 animate-pulse rounded-full"></div>
      </div>
      <div className="space-y-2  rounded-lg  ">
        <div className=" w-full h-3 bg-neutral-700 animate-pulse rounded-full"></div>
        <div className=" w-full h-3 bg-neutral-700 animate-pulse rounded-full"></div>
        <div className=" bg-neutral-700 w-16 h-3 animate-pulse rounded-full"></div>
      </div>
      <div className="space-y-2  rounded-lg  ">
        <div className=" w-full h-3 bg-neutral-700 animate-pulse rounded-full"></div>
        <div className=" w-full h-3 bg-neutral-700 animate-pulse rounded-full"></div>
        <div className=" bg-neutral-700 w-16 h-3 animate-pulse rounded-full"></div>
      </div>
      <div className="space-y-2  rounded-lg  ">
        <div className=" w-full h-3 bg-neutral-700 animate-pulse rounded-full"></div>
        <div className=" w-full h-3 bg-neutral-700 animate-pulse rounded-full"></div>
        <div className=" bg-neutral-700 w-16 h-3 animate-pulse rounded-full"></div>
      </div>
    </div>
  );
};

export default Blogs;
