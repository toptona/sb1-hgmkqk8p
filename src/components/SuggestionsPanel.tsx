import React from 'react';
import { KeywordSuggestion } from '../types';
import { Lightbulb } from 'lucide-react';

interface SuggestionsPanelProps {
  suggestions: KeywordSuggestion[];
  onSuggestionClick: (keyword: string) => void;
}

export const SuggestionsPanel: React.FC<SuggestionsPanelProps> = ({
  suggestions,
  onSuggestionClick,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="h-5 w-5 text-yellow-500" />
        <h2 className="text-lg font-semibold">Keyword Suggestions</h2>
      </div>
      <div className="space-y-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion.keyword)}
            className="w-full text-left p-2 hover:bg-gray-50 rounded-md flex items-center justify-between group"
          >
            <span className="text-gray-700 group-hover:text-gray-900">
              {suggestion.keyword}
            </span>
            <span className="text-sm text-gray-500">
              {suggestion.relevanceScore}%
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};