// Mock Game News API service
// In a production app, this would connect to your backend API

import { Category, Thread, User } from './types'

// Mock data for categories
const categories: Category[] = [
  {
    id: '1',
    name: 'RPG',
    slug: 'rpg',
    description:
      'Role-playing games featuring immersive storylines and character development',
    threadCount: 42,
    imageUrl: 'https://source.unsplash.com/random/800x600/?rpg',
  },
  {
    id: '2',
    name: 'FPS',
    slug: 'fps',
    description:
      'First-person shooters with fast-paced action and competitive gameplay',
    threadCount: 37,
    imageUrl: 'https://source.unsplash.com/random/800x600/?fps',
  },
  {
    id: '3',
    name: 'Strategy',
    slug: 'strategy',
    description:
      'Strategic thinking games that challenge your planning and decision-making',
    threadCount: 28,
    imageUrl: 'https://source.unsplash.com/random/800x600/?strategy',
  },
  {
    id: '4',
    name: 'Indie',
    slug: 'indie',
    description:
      'Independent games with unique art styles and innovative mechanics',
    threadCount: 31,
    imageUrl: 'https://source.unsplash.com/random/800x600/?indie',
  },
  {
    id: '5',
    name: 'E-Sports',
    slug: 'esports',
    description:
      'Competitive gaming news, tournaments, and professional players',
    threadCount: 24,
    imageUrl: 'https://source.unsplash.com/random/800x600/?esports',
  },
  {
    id: '6',
    name: 'Hardware',
    slug: 'hardware',
    description: 'Gaming devices, peripherals, and tech news',
    threadCount: 19,
    imageUrl: 'https://source.unsplash.com/random/800x600/?gaming-hardware',
  },
]

// Mock users for articles and threads
const users: User[] = [
  {
    id: '1',
    username: 'GameMaster',
    avatar: 'https://source.unsplash.com/random/100x100/?portrait-1',
    createdAt: new Date('2024-01-15'),
    role: 'admin',
  },
  {
    id: '2',
    username: 'PixelPro',
    avatar: 'https://source.unsplash.com/random/100x100/?portrait-2',
    createdAt: new Date('2024-02-20'),
    role: 'moderator',
  },
  {
    id: '3',
    username: 'LevelUpLarry',
    avatar: 'https://source.unsplash.com/random/100x100/?portrait-3',
    createdAt: new Date('2024-03-10'),
    role: 'user',
  },
  {
    id: '4',
    username: 'QuestQueen',
    avatar: 'https://source.unsplash.com/random/100x100/?portrait-4',
    createdAt: new Date('2024-04-05'),
    role: 'user',
  },
]

// Generate a list of news articles/threads
const generateThreads = (): Thread[] => {
  const threads: Thread[] = [
    {
      id: '1',
      title: 'Elden Ring DLC Shadow of the Erdtree Breaks Pre-order Records',
      slug: 'elden-ring-dlc',
      content:
        'The highly anticipated expansion has already broken records weeks before its release, with fans eager to explore new areas and face challenging bosses.',
      author: users[0],
      category: categories.find((c) => c.slug === 'rpg')!,
      createdAt: new Date('2025-06-15'),
      updatedAt: new Date('2025-06-15'),
      replyCount: 42,
      viewCount: 1538,
      isPinned: true,
      isLocked: false,
      imageUrl: 'https://source.unsplash.com/random/800x600/?fantasy',
    },
    {
      id: '2',
      title: 'Sony Announces PlayStation 6 Release Window and Specs',
      slug: 'playstation-6-announcement',
      content:
        'Sony has officially revealed the first details about the PlayStation 6, including its expected release date and impressive technical specifications.',
      author: users[1],
      category: categories.find((c) => c.slug === 'hardware')!,
      createdAt: new Date('2025-06-12'),
      updatedAt: new Date('2025-06-13'),
      replyCount: 37,
      viewCount: 2243,
      isPinned: true,
      isLocked: false,
      imageUrl: 'https://source.unsplash.com/random/800x600/?console',
    },
    {
      id: '3',
      title: 'World Championship Finals Set New Viewership Records',
      slug: 'esports-viewership-record',
      content:
        'The League of Legends World Championship finals broke all previous viewership records with over 45 million concurrent viewers across streaming platforms.',
      author: users[2],
      category: categories.find((c) => c.slug === 'esports')!,
      createdAt: new Date('2025-06-10'),
      updatedAt: new Date('2025-06-10'),
      replyCount: 28,
      viewCount: 1876,
      isPinned: false,
      isLocked: false,
      imageUrl: 'https://source.unsplash.com/random/800x600/?esports',
    },
    {
      id: '4',
      title: "Starfield's New Expansion Takes Players to Unexplored Galaxy",
      slug: 'starfield-expansion',
      content:
        'Bethesda releases its first major expansion for Starfield, offering a new star system with unique planets and storylines.',
      author: users[3],
      category: categories.find((c) => c.slug === 'rpg')!,
      createdAt: new Date('2025-06-09'),
      updatedAt: new Date('2025-06-09'),
      replyCount: 19,
      viewCount: 964,
      isPinned: false,
      isLocked: false,
      imageUrl: 'https://source.unsplash.com/random/800x600/?space',
    },
    {
      id: '5',
      title: "Indie Developer's First Game Becomes Overnight Sensation",
      slug: 'indie-game-success',
      content:
        "A solo developer's passion project climbs the Steam charts and receives acclaim for its innovative mechanics and art style.",
      author: users[1],
      category: categories.find((c) => c.slug === 'indie')!,
      createdAt: new Date('2025-06-08'),
      updatedAt: new Date('2025-06-08'),
      replyCount: 31,
      viewCount: 1245,
      isPinned: false,
      isLocked: false,
      imageUrl: 'https://source.unsplash.com/random/800x600/?pixel-art',
    },
    {
      id: '6',
      title: 'E3 Returns with In-Person Event After Years of Absence',
      slug: 'e3-returns',
      content:
        'The iconic gaming expo makes a triumphant return with major publishers showcasing their upcoming titles to enthusiastic crowds.',
      author: users[0],
      category: categories.find((c) => c.slug === 'rpg')!,
      createdAt: new Date('2025-06-07'),
      updatedAt: new Date('2025-06-07'),
      replyCount: 23,
      viewCount: 1089,
      isPinned: false,
      isLocked: false,
      imageUrl: 'https://source.unsplash.com/random/800x600/?gaming-expo',
    },
    {
      id: '7',
      title: 'Mobile Gaming Revenue Surpasses Console and PC Combined',
      slug: 'mobile-gaming-revenue',
      content:
        'New industry report shows mobile gaming continues its dominance with record-breaking revenue across global markets.',
      author: users[2],
      category: categories.find((c) => c.slug === 'hardware')!,
      createdAt: new Date('2025-06-06'),
      updatedAt: new Date('2025-06-06'),
      replyCount: 17,
      viewCount: 879,
      isPinned: false,
      isLocked: false,
      imageUrl: 'https://source.unsplash.com/random/800x600/?mobile-gaming',
    },
    {
      id: '8',
      title: 'New Competitive FPS Title Changes the Battle Royale Formula',
      slug: 'new-battle-royale',
      content:
        'A highly anticipated FPS introduces innovative mechanics that are changing how players approach the battle royale genre.',
      author: users[3],
      category: categories.find((c) => c.slug === 'fps')!,
      createdAt: new Date('2025-06-05'),
      updatedAt: new Date('2025-06-05'),
      replyCount: 26,
      viewCount: 1156,
      isPinned: false,
      isLocked: false,
      imageUrl: 'https://source.unsplash.com/random/800x600/?shooter',
    },
    {
      id: '9',
      title: 'Strategy Game Championships Showcase Top Global Talent',
      slug: 'strategy-championships',
      content:
        "The world's best strategy gamers compete in an international tournament with unprecedented prize pools.",
      author: users[1],
      category: categories.find((c) => c.slug === 'strategy')!,
      createdAt: new Date('2025-06-04'),
      updatedAt: new Date('2025-06-04'),
      replyCount: 15,
      viewCount: 732,
      isPinned: false,
      isLocked: false,
      imageUrl: 'https://source.unsplash.com/random/800x600/?strategy-game',
    },
    {
      id: '10',
      title: 'Gaming Accessibility Features Become Industry Standard',
      slug: 'gaming-accessibility',
      content:
        'Major publishers commit to implementing comprehensive accessibility options in all future releases.',
      author: users[0],
      category: categories.find((c) => c.slug === 'hardware')!,
      createdAt: new Date('2025-06-03'),
      updatedAt: new Date('2025-06-03'),
      replyCount: 29,
      viewCount: 1087,
      isPinned: false,
      isLocked: false,
      imageUrl: 'https://source.unsplash.com/random/800x600/?accessibility',
    },
  ]

  // Add more threads dynamically
  for (let i = 11; i <= 30; i++) {
    const categoryIndex = Math.floor(Math.random() * categories.length)
    const userIndex = Math.floor(Math.random() * users.length)
    const daysAgo = Math.floor(Math.random() * 30) + 1
    const date = new Date()
    date.setDate(date.getDate() - daysAgo)

    threads.push({
      id: i.toString(),
      title: `Generated Gaming News Article ${i}`,
      slug: `generated-article-${i}`,
      content: `This is an automatically generated article about gaming news with index ${i}.`,
      author: users[userIndex],
      category: categories[categoryIndex],
      createdAt: date,
      updatedAt: date,
      replyCount: Math.floor(Math.random() * 50),
      viewCount: Math.floor(Math.random() * 2000) + 500,
      isPinned: false,
      isLocked: false,
      imageUrl: `https://source.unsplash.com/random/800x600/?gaming-${i}`,
    })
  }

  return threads
}

// Pre-generate threads
const allThreads = generateThreads()

// API functions
export const GameNewsAPI = {
  // Categories
  getCategories: async (): Promise<Category[]> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))
    return categories
  },

  getCategoryBySlug: async (slug: string): Promise<Category | null> => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    return categories.find((category) => category.slug === slug) || null
  },

  // Threads / Articles
  getThreads: async (
    options: {
      categorySlug?: string
      page?: number
      limit?: number
      sortBy?: 'latest' | 'popular'
    } = {}
  ): Promise<{
    threads: Thread[]
    total: number
    page: number
    totalPages: number
  }> => {
    const { categorySlug, page = 1, limit = 10, sortBy = 'latest' } = options

    // Filter by category if needed
    let filteredThreads = [...allThreads]
    if (categorySlug) {
      filteredThreads = filteredThreads.filter(
        (thread) => thread.category.slug === categorySlug
      )
    }

    // Sort by date or popularity
    if (sortBy === 'latest') {
      filteredThreads.sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
      )
    } else if (sortBy === 'popular') {
      filteredThreads.sort((a, b) => b.viewCount - a.viewCount)
    }

    // Calculate pagination
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedThreads = filteredThreads.slice(startIndex, endIndex)
    const totalPages = Math.ceil(filteredThreads.length / limit)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return {
      threads: paginatedThreads,
      total: filteredThreads.length,
      page,
      totalPages,
    }
  },

  getThreadBySlug: async (slug: string): Promise<Thread | null> => {
    await new Promise((resolve) => setTimeout(resolve, 400))
    return allThreads.find((thread) => thread.slug === slug) || null
  },

  // Featured and trending content
  getFeaturedThreads: async (count: number = 3): Promise<Thread[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return allThreads
      .filter((thread) => thread.isPinned)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, count)
  },

  getPopularThreads: async (count: number = 5): Promise<Thread[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return [...allThreads]
      .sort((a, b) => b.viewCount - a.viewCount)
      .slice(0, count)
  },

  getRecentThreads: async (count: number = 5): Promise<Thread[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return [...allThreads]
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, count)
  },

  // Search functionality
  searchThreads: async (query: string): Promise<Thread[]> => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    const searchTerms = query.toLowerCase().split(' ')

    return allThreads.filter((thread) => {
      const titleMatches = searchTerms.some((term) =>
        thread.title.toLowerCase().includes(term)
      )
      const contentMatches = searchTerms.some((term) =>
        thread.content.toLowerCase().includes(term)
      )
      return titleMatches || contentMatches
    })
  },
}

// Trending games data
export interface GameData {
  id: string
  name: string
  rating: number
  imageUrl: string
  genre: string
  releaseDate?: string
}

export const trendingGames: GameData[] = [
  {
    id: '1',
    name: 'Elden Ring',
    rating: 5.0,
    imageUrl: 'https://source.unsplash.com/random/400x600/?fantasy-game',
    genre: 'RPG',
    releaseDate: '2022-02-25',
  },
  {
    id: '2',
    name: 'Horizon Forbidden West',
    rating: 4.0,
    imageUrl: 'https://source.unsplash.com/random/400x600/?robot-game',
    genre: 'Action RPG',
    releaseDate: '2022-02-18',
  },
  {
    id: '3',
    name: 'God of War Ragnarök',
    rating: 4.9,
    imageUrl: 'https://source.unsplash.com/random/400x600/?warrior-game',
    genre: 'Action-Adventure',
    releaseDate: '2022-11-09',
  },
  {
    id: '4',
    name: 'Zelda: Tears of the Kingdom',
    rating: 5.0,
    imageUrl: 'https://source.unsplash.com/random/400x600/?adventure-game',
    genre: 'Action-Adventure',
    releaseDate: '2023-05-12',
  },
  {
    id: '5',
    name: "Baldur's Gate 3",
    rating: 4.8,
    imageUrl: 'https://source.unsplash.com/random/400x600/?rpg-game',
    genre: 'RPG',
    releaseDate: '2023-08-03',
  },
]
