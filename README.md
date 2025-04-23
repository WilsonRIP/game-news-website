# Game News Website

A modern, responsive website for displaying gaming news articles built with Next.js and TypeScript.

## Features

- Modern, responsive design with dark mode support
- Article listing with card-based UI
- Category-based browsing
- Dynamic article pages with rich content
- TypeScript for improved type safety

## Project Structure

- `/src/app/data/news/`: JSON files containing article data
- `/src/app/data/news.ts`: Utility functions for fetching and filtering news data
- `/src/app/types/`: TypeScript interfaces for data models
- `/src/app/page.tsx`: Homepage displaying all articles
- `/src/app/news/[slug]/page.tsx`: Dynamic routes for individual articles
- `/src/app/categories/page.tsx`: Page for browsing articles by category

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Extending the Website

### Adding Articles

To add a new article, create a new JSON file in the `/src/app/data/news/` directory with the following structure:

```json
{
  "slug": "unique-article-slug",
  "title": "Article Title",
  "author": "Author Name",
  "date": "YYYY-MM-DD",
  "categories": ["Category1", "Category2"],
  "content": "Article content goes here. Can include multiple paragraphs."
}
```

### Adding Features

Some potential enhancements for this project:

1. Add image support for articles
2. Implement a search function
3. Add user authentication for comments
4. Integrate with a CMS for easier content management
5. Add social sharing functionality

## License

MIT
