import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock } from 'lucide-react'
import { BaseLayout } from '@/app/components/layout/base-layout'
import { GameNewsAPI } from '@/app/libs/game-api'
import { Button } from '@/app/components/ui/button'

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

// Pagination component
function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number
  totalPages: number
}) {
  const pageNumbers = []

  // Logic to show limited page numbers with ellipsis
  const maxPagesToShow = 5

  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2))
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1)

  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="mt-8 flex justify-center gap-1">
      <Link href={`/recent?page=${Math.max(1, currentPage - 1)}`}>
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          &laquo;
        </Button>
      </Link>

      {startPage > 1 && (
        <>
          <Link href={`/recent?page=1`}>
            <Button
              variant={1 === currentPage ? 'primary' : 'outline'}
              size="sm"
            >
              1
            </Button>
          </Link>
          {startPage > 2 && (
            <span className="text-muted-foreground flex items-center px-2">
              ...
            </span>
          )}
        </>
      )}

      {pageNumbers.map((number) => (
        <Link key={number} href={`/recent?page=${number}`}>
          <Button
            variant={number === currentPage ? 'primary' : 'outline'}
            size="sm"
          >
            {number}
          </Button>
        </Link>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="text-muted-foreground flex items-center px-2">
              ...
            </span>
          )}
          <Link href={`/recent?page=${totalPages}`}>
            <Button
              variant={totalPages === currentPage ? 'primary' : 'outline'}
              size="sm"
            >
              {totalPages}
            </Button>
          </Link>
        </>
      )}

      <Link href={`/recent?page=${Math.min(totalPages, currentPage + 1)}`}>
        <Button
          variant="outline"
          size="sm"
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          &raquo;
        </Button>
      </Link>
    </div>
  )
}

// Article list component
async function RecentArticlesList({ page = 1 }: { page?: number }) {
  // Fetch articles from API
  const { threads, total, totalPages } = await GameNewsAPI.getThreads({
    page,
    limit: 9,
    sortBy: 'latest',
  })

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
                  `https://source.unsplash.com/random/800x600/?gaming`
                }
                alt={thread.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="space-y-2 p-4">
              <span className="bg-primary/10 text-primary inline-block rounded px-2 py-1 text-xs font-medium">
                {thread.category.name}
              </span>
              <h3 className="group-hover:text-primary line-clamp-2 text-xl font-bold">
                {thread.title}
              </h3>
              <p className="text-muted-foreground line-clamp-3 text-sm">
                {thread.content}
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-muted-foreground text-xs">
                  {formatDate(thread.createdAt)}
                </span>
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

      {/* Client-side pagination would be implemented with a client component */}
      <div className="mt-8 flex justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-2 text-sm">
            Page {page} of {totalPages} ({total} articles)
          </p>
          {/* Use the Pagination component */}
          <Pagination currentPage={page} totalPages={totalPages} />
        </div>
      </div>
    </div>
  )
}

export default async function RecentPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page: pageString } = await searchParams
  const page = pageString ? parseInt(pageString) : 1

  return (
    <BaseLayout>
      <section className="py-12">
        <div className="container">
          <div className="mb-8 flex items-center gap-2">
            <Clock className="text-primary h-6 w-6" />
            <h1 className="text-4xl font-bold">Latest News</h1>
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
            <RecentArticlesList page={page} />
          </Suspense>
        </div>
      </section>
    </BaseLayout>
  )
}
