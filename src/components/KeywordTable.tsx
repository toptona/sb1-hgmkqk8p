import React from 'react';
import { Keyword } from '../types';
import { TrendingUp, DollarSign, BarChart } from 'lucide-react';

interface KeywordTableProps {
  keywords: Keyword[];
}

export const KeywordTable: React.FC<KeywordTableProps> = ({ keywords }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Keyword
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                Search Volume
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center gap-1">
                <BarChart className="h-4 w-4" />
                Difficulty
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                CPC
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {keywords.map((keyword, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {keyword.keyword}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {keyword.searchVolume.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${keyword.difficulty}%`,
                        backgroundColor: keyword.difficulty > 66 ? '#ef4444' : keyword.difficulty > 33 ? '#f59e0b' : '#22c55e'
                      }}
                    />
                  </div>
                  <span>{keyword.difficulty}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${keyword.cpc.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};