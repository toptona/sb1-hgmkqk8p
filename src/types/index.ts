export interface Keyword {
  keyword: string;
  searchVolume: number;
  difficulty: number;
  cpc: number;
}

export interface KeywordSuggestion {
  keyword: string;
  relevanceScore: number;
}