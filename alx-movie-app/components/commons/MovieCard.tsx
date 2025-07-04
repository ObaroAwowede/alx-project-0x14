import React from 'react';

export interface MovieCardProps {
  title: string;
  posterUrl: string;
  releaseYear?: number;
  onClick?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, posterUrl, releaseYear, onClick }) => {
  return (
    <div
      className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <img src={posterUrl} alt={`${title} Poster`} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {releaseYear && <p className="text-sm text-gray-500">{releaseYear}</p>}
      </div>
    </div>
  );
};