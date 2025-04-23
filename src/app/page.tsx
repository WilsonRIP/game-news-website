import Link from 'next/link'
import Image from 'next/image'
import { Button } from './components/ui/button'
import { BaseLayout } from './components/layout/base-layout'
import { ROUTES } from './libs/types'
import { ArrowRight, Flame, Clock } from 'lucide-react'

export default function HomePage() {
  return (
    <BaseLayout>
      {/* Hero Section */}
      <section className="from-primary/10 to-background relative bg-gradient-to-b py-16 lg:py-24">
        <div className="container flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
          <div className="flex-1 space-y-6">
            <h1 className="animate-fade-in-up text-4xl font-bold lg:text-6xl">
              Your Gateway to Gaming Excellence
            </h1>
            <p className="text-muted-foreground animate-fade-in-up animation-delay-150 text-lg">
              Stay ahead with the latest news, reviews, and updates from the
              world of gaming.
            </p>
            <div className="animate-fade-in-up animation-delay-300 flex flex-wrap gap-4">
              <Link href={ROUTES.RECENT}>
                <Button size="lg" className="group">
                  Latest News{' '}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href={ROUTES.CATEGORIES}>
                <Button size="lg" variant="outline">
                  Explore Categories
                </Button>
              </Link>
            </div>
          </div>
          <div className="animate-fade-in relative h-[300px] w-full max-w-xl flex-1 lg:h-[400px]">
            <Image
              src="/images/hero-games.jpg"
              alt="Gaming hero image"
              fill
              priority
              className="rounded-lg object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="bg-background py-16">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Featured News</h2>
            <Link
              href={ROUTES.POPULAR}
              className="text-primary inline-flex items-center hover:underline"
            >
              View all <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Featured Article 1 */}
            <article className="group border-border overflow-hidden rounded-lg border transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/news-1.jpg"
                  alt="New RPG Release"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 p-4">
                <span className="bg-primary/10 text-primary inline-block rounded px-2 py-1 text-xs font-medium">
                  RPG
                </span>
                <h3 className="group-hover:text-primary line-clamp-2 text-xl font-bold">
                  Elden Ring&apos;s DLC Shadow of the Erdtree Breaks Pre-order
                  Records
                </h3>
                <p className="text-muted-foreground line-clamp-3 text-sm">
                  The highly anticipated expansion has already broken records
                  weeks before its release, with fans eager to explore new areas
                  and face challenging bosses.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-muted-foreground text-xs">
                    June 15, 2025
                  </span>
                  <Link
                    href="/article/elden-ring-dlc"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </article>

            {/* Featured Article 2 */}
            <article className="group border-border overflow-hidden rounded-lg border transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/news-2.png"
                  alt="Console Announcement"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 p-4">
                <span className="bg-primary/10 text-primary inline-block rounded px-2 py-1 text-xs font-medium">
                  Hardware
                </span>
                <h3 className="group-hover:text-primary line-clamp-2 text-xl font-bold">
                  Sony Announces PlayStation 6 Release Window and Specs
                </h3>
                <p className="text-muted-foreground line-clamp-3 text-sm">
                  Sony has officially revealed the first details about the
                  PlayStation 6, including its expected release date and
                  impressive technical specifications.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-muted-foreground text-xs">
                    June 12, 2025
                  </span>
                  <Link
                    href="/article/playstation-6-announcement"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </article>

            {/* Featured Article 3 */}
            <article className="group border-border overflow-hidden rounded-lg border transition-all hover:shadow-md">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/images/news-3.jpg"
                  alt="E-Sports Tournament"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 p-4">
                <span className="bg-primary/10 text-primary inline-block rounded px-2 py-1 text-xs font-medium">
                  E-Sports
                </span>
                <h3 className="group-hover:text-primary line-clamp-2 text-xl font-bold">
                  World Championship Finals Set New Viewership Records
                </h3>
                <p className="text-muted-foreground line-clamp-3 text-sm">
                  The League of Legends World Championship finals broke all
                  previous viewership records with over 45 million concurrent
                  viewers across streaming platforms.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-muted-foreground text-xs">
                    June 10, 2025
                  </span>
                  <Link
                    href="/article/esports-viewership-record"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mb-8 flex items-center gap-2">
            <Clock className="text-primary h-6 w-6" />
            <h2 className="text-3xl font-bold">Latest Articles</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Article 1 */}
            <article className="group flex flex-col gap-4 sm:flex-row">
              <div className="relative h-24 w-full flex-shrink-0 overflow-hidden rounded-md sm:w-32">
                <Image
                  src="/images/article-1.jpg"
                  alt="Game review"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <span className="text-muted-foreground text-xs">
                  June 9, 2025
                </span>
                <h3 className="group-hover:text-primary mt-1 text-lg font-semibold">
                  Starfield&apos;s New Expansion Takes Players to Unexplored
                  Galaxy
                </h3>
                <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">
                  Bethesda releases its first major expansion for Starfield,
                  offering a new star system with unique planets and storylines.
                </p>
              </div>
            </article>

            {/* Article 2 */}
            <article className="group flex flex-col gap-4 sm:flex-row">
              <div className="relative h-24 w-full flex-shrink-0 overflow-hidden rounded-md sm:w-32">
                <Image
                  src="/images/article-2.jpg"
                  alt="Game developer interview"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <span className="text-muted-foreground text-xs">
                  June 8, 2025
                </span>
                <h3 className="group-hover:text-primary mt-1 text-lg font-semibold">
                  Indie Developer&apos;s First Game Becomes Overnight Sensation
                </h3>
                <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">
                  A solo developer&apos;s passion project climbs the Steam
                  charts and receives acclaim for its innovative mechanics and
                  art style.
                </p>
              </div>
            </article>

            {/* Article 3 */}
            <article className="group flex flex-col gap-4 sm:flex-row">
              <div className="relative h-24 w-full flex-shrink-0 overflow-hidden rounded-md sm:w-32">
                <Image
                  src="/images/article-3.jpg"
                  alt="Gaming event"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <span className="text-muted-foreground text-xs">
                  June 7, 2025
                </span>
                <h3 className="group-hover:text-primary mt-1 text-lg font-semibold">
                  E3 Returns with In-Person Event After Years of Absence
                </h3>
                <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">
                  The iconic gaming expo makes a triumphant return with major
                  publishers showcasing their upcoming titles to enthusiastic
                  crowds.
                </p>
              </div>
            </article>

            {/* Article 4 */}
            <article className="group flex flex-col gap-4 sm:flex-row">
              <div className="relative h-24 w-full flex-shrink-0 overflow-hidden rounded-md sm:w-32">
                <Image
                  src="/images/article-4.jpg"
                  alt="Mobile gaming news"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <span className="text-muted-foreground text-xs">
                  June 6, 2025
                </span>
                <h3 className="group-hover:text-primary mt-1 text-lg font-semibold">
                  Mobile Gaming Revenue Surpasses Console and PC Combined
                </h3>
                <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">
                  New industry report shows mobile gaming continues its
                  dominance with record-breaking revenue across global markets.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-8 text-center">
            <Link href={ROUTES.RECENT}>
              <Button variant="outline" className="group">
                View all articles{' '}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Games */}
      <section className="bg-background py-16">
        <div className="container">
          <div className="mb-8 flex items-center gap-2">
            <Flame className="text-primary h-6 w-6" />
            <h2 className="text-3xl font-bold">Trending Games</h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {/* Game 1 */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/game-1.jpg"
                  alt="Elden Ring"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 p-3">
                  <h3 className="font-bold text-white">Elden Ring</h3>
                  <div className="mt-1 flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="h-4 w-4 fill-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-xs text-white">5.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Game 2 */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/game-2.jpg"
                  alt="Horizon Forbidden West"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 p-3">
                  <h3 className="font-bold text-white">
                    Horizon Forbidden West
                  </h3>
                  <div className="mt-1 flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4].map((star) => (
                        <svg
                          key={star}
                          className="h-4 w-4 fill-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg
                        className="h-4 w-4 fill-gray-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="ml-1 text-xs text-white">4.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Game 3 */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/game-3.jpg"
                  alt="God of War Ragnarök"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 p-3">
                  <h3 className="font-bold text-white">God of War Ragnarök</h3>
                  <div className="mt-1 flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="h-4 w-4 fill-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-xs text-white">4.9</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Game 4 */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/game-4.webp"
                  alt="The Legend of Zelda: Tears of the Kingdom"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 p-3">
                  <h3 className="font-bold text-white">
                    Zelda: Tears of the Kingdom
                  </h3>
                  <div className="mt-1 flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="h-4 w-4 fill-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-xs text-white">5.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Game 5 */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/game-5.webp"
                  alt="Baldur's Gate 3"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 p-3">
                  <h3 className="font-bold text-white">Baldur&apos;s Gate 3</h3>
                  <div className="mt-1 flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="h-4 w-4 fill-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-xs text-white">4.8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary/5 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold">Stay Updated with Game News</h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to receive the latest gaming news,
              exclusive content, and special offers directly to your inbox.
            </p>
            <div className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="sm:w-auto">Subscribe</Button>
            </div>
            <p className="text-muted-foreground mt-2 text-xs">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}
