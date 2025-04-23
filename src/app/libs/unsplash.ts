// Unsplash API integration
// For a production app, you would need to sign up for an Unsplash API key at https://unsplash.com/developers
// This implementation uses the public API which has rate limits

// Define the base URL and parameters
const UNSPLASH_BASE_URL = 'https://api.unsplash.com'
const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || ''

export interface UnsplashImage {
  id: string
  url: string
  alt_description: string
  user: {
    name: string
    username: string
    profile_url: string
  }
}

/**
 * Fetch random gaming images from Unsplash
 * @param query - Search query (e.g., 'gaming', 'rpg', 'esports')
 * @param count - Number of images to fetch
 */
export async function getGamingImages(
  query: string = 'gaming',
  count: number = 1
): Promise<UnsplashImage[]> {
  try {
    // For demo purposes, if no API key is provided, use public URL format
    if (!ACCESS_KEY) {
      // Public URL format as fallback (has limitations)
      const images: UnsplashImage[] = []
      for (let i = 0; i < count; i++) {
        // Create a unique identifier to avoid caching
        const uniqueId = `${i}-${Date.now()}`
        images.push({
          id: `public-${uniqueId}`,
          url: `https://source.unsplash.com/random/800x600/?${query}&sig=${uniqueId}`,
          alt_description: `${query} image`,
          user: {
            name: 'Unsplash',
            username: 'unsplash',
            profile_url: 'https://unsplash.com',
          },
        })
      }
      return images
    }

    // If API key is available, use the official API
    const response = await fetch(
      `${UNSPLASH_BASE_URL}/photos/random?query=${query}&count=${count}&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.statusText}`)
    }

    const data = await response.json()

    return data.map((image: UnsplashImage) => ({
      id: image.id,
      url: image.url,
      alt_description: image.alt_description || `${query} image`,
      user: {
        name: image.user.name,
        username: image.user.username,
        profile_url: image.user.profile_url,
      },
    }))
  } catch (error) {
    console.error('Error fetching images from Unsplash:', error)
    // Return fallback image URLs in case of error
    return Array(count).fill({
      id: `fallback-${Date.now()}`,
      url: `https://source.unsplash.com/random/800x600/?${query}`,
      alt_description: `${query} image (fallback)`,
      user: {
        name: 'Unsplash',
        username: 'unsplash',
        profile_url: 'https://unsplash.com',
      },
    })
  }
}
