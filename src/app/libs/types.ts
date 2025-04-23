export const WEBSITE_NAME = 'Game News'

// Common app constants
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
export const API_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

// Page metadata
export const DEFAULT_META_DESCRIPTION =
  'Join discussions on a variety of topics with our modern forum platform'
export const DEFAULT_META_KEYWORDS = 'forum, discussion, community, social'

// Route paths
export const ROUTES = {
  HOME: '/',
  RECENT: '/recent',
  POPULAR: '/popular',
  CATEGORIES: '/categories',
  CATEGORY: (slug: string) => `/categories/${slug}`,
  THREAD: (categorySlug: string, threadSlug: string) =>
    `/categories/${categorySlug}/threads/${threadSlug}`,
  CREATE_THREAD: (categorySlug: string) => `/categories/${categorySlug}/create`,
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  ABOUT: '/about',
  TERMS: '/terms',
  PRIVACY: '/privacy',
  CONTACT: '/contact',
}

// Common interfaces
export interface User {
  id: string
  username: string
  email?: string
  avatar?: string
  createdAt: Date
  role: 'user' | 'moderator' | 'admin'
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  threadCount: number
  imageUrl?: string
}

export interface Thread {
  id: string
  title: string
  slug: string
  content: string
  author: User
  category: Category
  createdAt: Date
  updatedAt: Date
  replyCount: number
  viewCount: number
  isPinned: boolean
  isLocked: boolean
  imageUrl?: string
}

export interface Reply {
  id: string
  content: string
  author: User
  threadId: string
  createdAt: Date
  updatedAt: Date
  isEdited: boolean
}

// Reusable component props
export interface ButtonProps {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
  className?: string
}

// Common error messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  UNAUTHORIZED: 'You must be signed in to perform this action.',
  FORBIDDEN: "You don't have permission to perform this action.",
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION: 'Please check your input and try again.',
}

// Pagination defaults
export const ITEMS_PER_PAGE = 10
export const MAX_PAGES_DISPLAYED = 5
