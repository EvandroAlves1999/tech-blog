export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export const categories = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'DevOps',
  'Web Development',
] as const;

export type Category = typeof categories[number];