import Link from "next/link";
import { draftMode } from "next/headers";

import { Markdown } from "@/lib/markdown";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: any) {
  const { isEnabled } = await draftMode();
  const { slug } = await params;
  const { post, morePosts } = await getPostAndMorePosts(slug, isEnabled);

  return (
    <div>
      <h2>
        <Link href="/">Blog</Link>.
      </h2>
      <article>
        <h1>{post.title}</h1>
        <div>
          <Markdown content={post.content} />
        </div>

        {morePosts.length > 0 && (
          <section>
            <h2>More Stories</h2>
            <div>
              {morePosts?.map((post: any, index: number) => (
                <h3>
                  <Link key={index} href={`/posts/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
