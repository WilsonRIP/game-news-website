import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
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

// Loading skeleton component
function ArticleSkeleton() {
  return (
    <div className="border-border animate-pulse overflow-hidden rounded-lg border">
      <div className="bg-muted h-48 w-full"></div>
      <div className="space-y-2 p-4">
        <div className="bg-muted h-4 w-1/4 rounded"></div>
        <div className="bg-muted h-6 w-3/4 rounded"></div>
        <div className="bg-muted h-4 w-full rounded"></div>
        <div className="bg-muted h-4 w-2/3 rounded"></div>
        <div className="flex justify-between pt-2">
          <div className="bg-muted h-4 w-20 rounded"></div>
          <div className="bg-muted h-4 w-24 rounded"></div>
        </div>
      </div>
    </div>
  )
}

// Category Articles List Component
async function CategoryArticlesList({
  categorySlug,
  page = 1,
}: {
  categorySlug: string
  page?: number
}) {
  // Fetch articles from API
  const { threads, total, totalPages } = await GameNewsAPI.getThreads({
    categorySlug,
    page,
    limit: 9,
    sortBy: 'latest',
  })

  if (threads.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-muted-foreground mb-4">
          No articles found in this category.
        </p>
        <Link href={ROUTES.CATEGORIES}>
          <Button>Browse all categories</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {threads.map((thread) => (
          <article
            key={thread.id}
            className="group border-border overflow-hidden rounded-lg border transition-all hover:shadow-md"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={
                  thread.imageUrl ||
                  `https://source.unsplash.com/random/800x600/?${categorySlug}`
                }
                alt={thread.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="space-y-2 p-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-xs">
                  {formatDate(thread.createdAt)}
                </span>
                <div className="flex items-center gap-1">
                  <div className="relative h-5 w-5 overflow-hidden rounded-full">
                    <Image
                      src={
                        thread.author.avatar ||
                        `https://source.unsplash.com/random/100x100/?portrait`
                      }
                      alt={thread.author.username}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs">{thread.author.username}</span>
                </div>
              </div>
              <h3 className="group-hover:text-primary line-clamp-2 text-xl font-bold">
                {thread.title}
              </h3>
              <p className="text-muted-foreground line-clamp-3 text-sm">
                {thread.content}
              </p>
              <div className="pt-2">
                <Link
                  href={`/article/${thread.slug}`}
                  className="text-primary text-sm font-medium hover:underline"
                >
                  Read more
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-2 text-sm">
            Page {page} of {totalPages} ({total} articles)
          </p>
          <div className="flex justify-center gap-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNumber =
                page <= 3
                  ? i + 1
                  : page >= totalPages - 2
                    ? totalPages - 4 + i
                    : page - 2 + i

              if (pageNumber > 0 && pageNumber <= totalPages) {
                return (
                  <Link
                    key={pageNumber}
                    href={`/categories/${categorySlug}?page=${pageNumber}`}
                  >
                    <Button
                      variant={pageNumber === page ? 'primary' : 'outline'}
                      size="sm"
                    >
                      {pageNumber}
                    </Button>
                  </Link>
                )
              }
              return null
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { page?: string }
}) {
  const { slug } = params
  const page = searchParams.page ? parseInt(searchParams.page) : 1

  // Fetch category data
  const category = await GameNewsAPI.getCategoryBySlug(slug)

  // If category not found, show 404
  if (!category) {
    notFound()
  }

  return (
    <BaseLayout>
      <section className="py-12">
        <div className="container">
          <Link
            href={ROUTES.CATEGORIES}
            className="hover:text-primary mb-4 inline-flex items-center text-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Categories
          </Link>

          {/* Category Header */}
          <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg">
            <Image
              src={
                category.imageUrl ||
                `https://source.unsplash.com/random/1200x400/?${category.slug}`
              }
              alt={category.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h1 className="mb-2 text-4xl font-bold">{category.name}</h1>
              <p className="max-w-2xl text-lg">{category.description}</p>
            </div>
          </div>

          <Suspense
            fallback={
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Array(9)
                  .fill(0)
                  .map((_, index) => (
                    <ArticleSkeleton key={index} />
                  ))}
              </div>
            }
          >
            <CategoryArticlesList categorySlug={slug} page={page} />
          </Suspense>
        </div>
      </section>
    </BaseLayout>
  )
}
