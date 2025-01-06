import Link from "next/link";
import { draftMode } from "next/headers";

import { getAllPosts } from "@/lib/api";

export default async function Page() {
  const { isEnabled } = await draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div>
      {isEnabled && (
        <h2>
          <Link href="/api/disable-draft">Disable Preview Mode</Link>
        </h2>
      )}
      <section>
        <h1>Blog.</h1>
      </section>
      {heroPost && (
        <section>
          <div>
            {/* <CoverImage title={title} slug={slug} url={coverImage.url} /> */}
          </div>
          <div>
            <div>
              <h3>
                <Link href={`/posts/${heroPost.slug}`}>{heroPost.title}</Link>
              </h3>
            </div>
            <div>
              <p>{heroPost.excerpt}</p>
              {/* {heroPost.author && (
                <Avatar
                  name={heroPost.author.name}
                  picture={heroPost.author.picture}
                />
              )} */}
            </div>
          </div>
        </section>
      )}
      <section>
        <h2>More Stories</h2>
        <div>
          {morePosts.map((post) => (
            <h3>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h3>
          ))}
        </div>
      </section>
    </div>
  );
}
