import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { KeywordTable } from './components/KeywordTable';
import { SuggestionsPanel } from './components/SuggestionsPanel';
import { Keyword, KeywordSuggestion } from './types';
import { generateSuggestions } from './utils/keywordUtils';
import { Search } from 'lucide-react';

function App() {
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [suggestions, setSuggestions] = useState<KeywordSuggestion[]>([]);

  const handleSearch = (query: string) => {
    // Simulate API call with mock data
    const mockKeywords: Keyword[] = [
      {
        keyword: query,
        searchVolume: Math.floor(Math.random() * 50000),
        difficulty: Math.floor(Math.random() * 100),
        cpc: Number((Math.random() * 10).toFixed(2)),
      },
      // Generate some variations
      ...Array(4).fill(null).map((_, i) => ({
        keyword: `${query} ${['guide', 'tutorial', 'tips', 'best'][i]}`,
        searchVolume: Math.floor(Math.random() * 50000),
        difficulty: Math.floor(Math.random() * 100),
        cpc: Number((Math.random() * 10).toFixed(2)),
      })),
    ];

    setKeywords(mockKeywords);
    setSuggestions(generateSuggestions(query));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Search className="h-6 w-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Keyword Explorer</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {keywords.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <KeywordTable keywords={keywords} />
            </div>
            <div>
              <SuggestionsPanel
                suggestions={suggestions}
                onSuggestionClick={handleSearch}
              />
            </div>
          </div>
        )}

        {keywords.length === 0 && (
          <div className="text-center mt-12">
            <h2 className="text-xl text-gray-600">
              Enter a keyword above to start exploring
            </h2>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;