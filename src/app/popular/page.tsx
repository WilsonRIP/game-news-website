import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Flame } from 'lucide-react';
import { BaseLayout } from '@/app/components/layout/base-layout';
import { GameNewsAPI } from '@/app/libs/game-api';
import { Button } from '@/app/components/ui/button';

// Utility for formatting dates
function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

// Format view count with K/M suffix for large numbers
function formatViewCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M views`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K views`;
  }
  return `${count} views`;
}

// Loading skeleton component
function ArticleSkeleton() {
  return (
    <div className="animate-pulse flex flex-col md:flex-row gap-4 p-4 border border-border rounded-lg">
      <div className="bg-muted h-40 w-full md:w-1/3 rounded-md"></div>
      <div className="space-y-2 flex-1">
        <div className="h-4 bg-muted rounded w-1/4"></div>
        <div className="h-6 bg-muted rounded w-3/4"></div>
        <div className="h-4 bg-muted rounded w-full"></div>
        <div className="h-4 bg-muted rounded w-2/3"></div>
        <div className="flex justify-between pt-2">
          <div className="h-4 bg-muted rounded w-20"></div>
          <div className="h-4 bg-muted rounded w-24"></div>
        </div>
      </div>
    </div>
  );
}

// Popular articles list component
async function PopularArticlesList({ page = 1 }: { page?: number }) {
  // Fetch articles from API
  const { threads, total, totalPages } = await GameNewsAPI.getThreads({
    page,
    limit: 10,
    sortBy: 'popular'
  });
  
  return (
    <div className="space-y-6">
      {threads.map((thread, index) => (
        <article key={thread.id} className="group border border-border rounded-lg overflow-hidden hover:shadow-md transition-all">
          <div className="flex flex-col md:flex-row">
            <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
              <Image 
                src={thread.imageUrl || `https://source.unsplash.com/random/800x600/?gaming`} 
                alt={thread.title} 
                fill 
                className="object-cover transition-transform group-hover:scale-105"
              />
              {index < 3 && (
                <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-bold">
                  #{index + 1}
                </div>
              )}
            </div>
            <div className="p-4 md:p-6 flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                  {thread.category.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {formatViewCount(thread.viewCount)}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary">
                {thread.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {thread.content}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden">
                    <Image 
                      src={thread.author.avatar || `https://source.unsplash.com/random/100x100/?portrait`} 
                      alt={thread.author.username} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-medium">{thread.author.username}</span>
                  <span className="text-xs text-muted-foreground">• {formatDate(thread.createdAt)}</span>
                </div>
                <Link href={`/article/${thread.slug}`}>
                  <Button variant="outline" size="sm">Read Article</Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
      
      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Page {page} of {totalPages} ({total} articles)
          </p>
          <div className="flex justify-center gap-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const pageNumber = page <= 3 
                ? i + 1 
                : page >= totalPages - 2 
                  ? totalPages - 4 + i 
                  : page - 2 + i;
              
              if (pageNumber > 0 && pageNumber <= totalPages) {
                return (
                  <Link key={pageNumber} href={`/popular?page=${pageNumber}`}>
                    <Button 
                      variant={pageNumber === page ? "default" : "outline"} 
                      size="sm"
                    >
                      {pageNumber}
                    </Button>
                  </Link>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PopularPage({ 
  searchParams 
}: { 
  searchParams: { page?: string } 
}) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  
  return (
    <BaseLayout>
      <section className="py-12">
        <div className="container">
          <div className="flex items-center gap-2 mb-8">
            <Flame className="h-6 w-6 text-primary" />
            <h1 className="text-4xl font-bold">Popular Articles</h1>
          </div>
          
          <Suspense fallback={
            <div className="space-y-6">
              {Array(5).fill(0).map((_, index) => (
                <ArticleSkeleton key={index} />
              ))}
            </div>
          }>
            <PopularArticlesList page={page} />
          </Suspense>
        </div>
      </section>
    </BaseLayout>
  );
}
