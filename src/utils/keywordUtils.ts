import { Keyword, KeywordSuggestion } from '../types';

export const calculateDifficulty = (searchVolume: number, competition: number): number => {
  return Math.min(Math.round((searchVolume * competition) / 100), 100);
};

export const generateSuggestions = (seed: string): KeywordSuggestion[] => {
  const baseWords = ['how to', 'best', 'vs', 'tutorial', 'guide', 'review'];
  return baseWords.map((word) => ({
    keyword: `${word} ${seed}`,
    relevanceScore: Math.round(Math.random() * 100),
  }));
};