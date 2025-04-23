import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowLeft,
  Eye,
  MessageSquare,
  CalendarDays,
  Share2,
} from 'lucide-react'
import { BaseLayout } from '@/app/components/layout/base-layout'
import { Button } from '@/app/components/ui/button'
import { GameNewsAPI } from '@/app/libs/game-api'
import { ROUTES } from '@/app/libs/types'

// Utility for formatting dates
function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

// Format view count with K/M suffix
function formatCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`
  }
  return count.toString()
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  // Fetch article data
  const article = await GameNewsAPI.getThreadBySlug(params.slug)

  // If article not found, show 404
  if (!article) {
    notFound()
  }

  // Fetch related articles (same category)
  const { threads: relatedArticles } = await GameNewsAPI.getThreads({
    categorySlug: article.category.slug,
    limit: 3,
  })

  // Filter out the current article
  const filteredRelatedArticles = relatedArticles
    .filter((related) => related.id !== article.id)
    .slice(0, 3)

  return (
    <BaseLayout>
      {/* Article Header */}
      <section className="bg-muted/30 py-8">
        <div className="container">
          <Link
            href={ROUTES.CATEGORY(article.category.slug)}
            className="hover:text-primary mb-4 inline-flex items-center text-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {article.category.name}
          </Link>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            {article.title}
          </h1>

          <div className="text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <div className="flex items-center">
              <div className="relative mr-2 h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={
                    article.author.avatar ||
                    `https://source.unsplash.com/random/100x100/?portrait`
                  }
                  alt={article.author.username}
                  fill
                  className="object-cover"
                />
              </div>
              <span>{article.author.username}</span>
            </div>

            <div className="flex items-center">
              <CalendarDays className="mr-1 h-4 w-4" />
              <span>{formatDate(article.createdAt)}</span>
            </div>

            <div className="flex items-center">
              <Eye className="mr-1 h-4 w-4" />
              <span>{formatCount(article.viewCount)} views</span>
            </div>

            <div className="flex items-center">
              <MessageSquare className="mr-1 h-4 w-4" />
              <span>{formatCount(article.replyCount)} comments</span>
            </div>

            <Link
              href={ROUTES.CATEGORY(article.category.slug)}
              className="inline-flex items-center"
            >
              <span className="bg-primary/10 text-primary inline-block rounded px-2 py-1 text-xs font-medium">
                {article.category.name}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              {/* Featured Image */}
              <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={
                    article.imageUrl ||
                    `https://source.unsplash.com/random/1200x675/?${article.category.slug}`
                  }
                  alt={article.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Article Main Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead">{article.content}</p>

                {/* Generate more fake content to make it look like a complete article */}
                <p>
                  The gaming community has been abuzz with excitement since the
                  announcement. Industry analysts predict this will have
                  significant implications for both casual and competitive
                  players alike.
                </p>

                <h2>What This Means for Players</h2>
                <p>
                  With these developments, players can expect a range of new
                  features and improvements to their gaming experience. The
                  technology behind this innovation showcases the rapid
                  advancement in gaming capabilities.
                </p>

                <p>
                  Early access participants have reported overwhelmingly
                  positive experiences, citing improved performance and exciting
                  new gameplay mechanics.
                </p>

                <blockquote>
                  &quot;This represents a paradigm shift in how we think about
                  gaming experiences. The attention to detail is
                  remarkable,&quot; said one industry expert who had early
                  hands-on time with the release.
                </blockquote>

                <h2>Looking to the Future</h2>
                <p>
                  As we look toward what&apos;s next, it&apos;s clear that this
                  is just the beginning of a new era in gaming. Developers have
                  hinted at roadmaps that include additional content updates and
                  feature enhancements in the coming months.
                </p>

                <p>
                  The community response has already been overwhelming, with
                  social media channels flooded with reactions and discussions
                  about potential strategies and discoveries.
                </p>

                <h2>Conclusion</h2>
                <p>
                  Whether you&apos;re a dedicated fan or a curious newcomer,
                  there&apos;s never been a more exciting time to be involved in
                  the gaming community. We&apos;ll continue to provide updates
                  as more information becomes available.
                </p>
              </div>

              {/* Social Sharing */}
              <div className="border-border mt-8 flex items-center gap-4 rounded-lg border p-4">
                <span className="text-sm font-medium">Share this article:</span>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    aria-label="Share on Twitter"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    aria-label="Share on Facebook"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    aria-label="Share on LinkedIn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" aria-label="Copy link">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Comments Section Placeholder */}
              <div className="mt-12">
                <h3 className="mb-4 text-xl font-bold">
                  Comments ({article.replyCount})
                </h3>
                <div className="border-border rounded-lg border p-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    Join the conversation about this article
                  </p>
                  <Button>Sign in to comment</Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Author Info */}
              <div className="border-border mb-6 rounded-lg border p-4">
                <h3 className="mb-4 text-lg font-bold">About the author</h3>
                <div className="mb-3 flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={
                        article.author.avatar ||
                        `https://source.unsplash.com/random/100x100/?portrait`
                      }
                      alt={article.author.username}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{article.author.username}</h4>
                    <p className="text-muted-foreground text-sm">
                      {article.author.role.charAt(0).toUpperCase() +
                        article.author.role.slice(1)}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  Gaming enthusiast and writer passionate about sharing the
                  latest news and insights from the gaming world.
                </p>
              </div>

              {/* Related Articles */}
              <div className="border-border rounded-lg border p-4">
                <h3 className="mb-4 text-lg font-bold">Related Articles</h3>
                <div className="space-y-4">
                  {filteredRelatedArticles.length > 0 ? (
                    filteredRelatedArticles.map((related) => (
                      <Link
                        key={related.id}
                        href={`/article/${related.slug}`}
                        className="group block"
                      >
                        <div className="flex gap-3">
                          <div className="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded">
                            <Image
                              src={
                                related.imageUrl ||
                                `https://source.unsplash.com/random/160x120/?${related.category.slug}`
                              }
                              alt={related.title}
                              fill
                              className="object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <div>
                            <h4 className="group-hover:text-primary line-clamp-2 text-sm font-medium">
                              {related.title}
                            </h4>
                            <p className="text-muted-foreground mt-1 text-xs">
                              {formatDate(related.createdAt)}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      No related articles found.
                    </p>
                  )}
                </div>

                <Link
                  href={ROUTES.CATEGORY(article.category.slug)}
                  className="mt-4 block"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    View more in {article.category.name}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}
