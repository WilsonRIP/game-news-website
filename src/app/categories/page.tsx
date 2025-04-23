import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BaseLayout } from '@/app/components/layout/base-layout';
import { ROUTES } from '@/app/libs/types';
import { GameNewsAPI } from '@/app/libs/game-api';

// Loading skeleton component
function CategorySkeleton() {
  return (
    <div className="animate-pulse border border-border rounded-lg overflow-hidden">
      <div className="bg-muted h-48 w-full"></div>
      <div className="p-4 space-y-2">
        <div className="h-6 bg-muted rounded w-1/3"></div>
        <div className="h-4 bg-muted rounded w-full"></div>
        <div className="h-4 bg-muted rounded w-2/3"></div>
        <div className="h-8 bg-muted rounded w-1/4 mt-4"></div>
      </div>
    </div>
  );
}

// Categories list component
async function CategoriesList() {
  // Fetch categories from API
  const categories = await GameNewsAPI.getCategories();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {categories.map((category) => (
        <div key={category.id} className="group border border-border rounded-lg overflow-hidden transition-all hover:shadow-md">
          <div className="relative h-48 w-full overflow-hidden">
            <Image 
              src={category.imageUrl || `https://source.unsplash.com/random/800x600/?${category.slug}`} 
              alt={category.name} 
              fill 
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="text-xl font-bold group-hover:text-primary">{category.name}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2">{category.description}</p>
            <div className="flex items-center justify-between pt-2">
              <span className="text-sm text-muted-foreground">{category.threadCount} articles</span>
              <Link href={ROUTES.CATEGORY(category.slug)} className="text-primary text-sm font-medium hover:underline inline-flex items-center">
                Browse <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CategoriesPage() {
  return (
    <BaseLayout>
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col space-y-2 mb-8">
            <h1 className="text-4xl font-bold">Game Categories</h1>
            <p className="text-muted-foreground">Explore gaming news by category</p>
          </div>
          
          <Suspense fallback={
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {Array(6).fill(0).map((_, index) => (
                <CategorySkeleton key={index} />
              ))}
            </div>
          }>
            <CategoriesList />
          </Suspense>
        </div>
      </section>
    </BaseLayout>
  );
}
