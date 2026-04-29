"use client";

import { useState } from 'react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';

export default function Home() {
  // State untuk fitur pencarian
  const [searchTerm, setSearchTerm] = useState("");

  // Logika filter data berdasarkan input user
  const filteredProperties = properties.filter((rumah) =>
    rumah.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rumah.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* 1. NAVBAR SECTION */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏠</span>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">
              Rumah<span className="text-blue-600">Murah</span>
            </h1>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-blue-600 transition">Beli</a>
            <a href="#" className="hover:text-blue-600 transition">Sewa</a>
            <a href="#" className="hover:text-blue-600 transition">Tentang Kami</a>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-100">
            Titik Jual
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-8">
        
        {/* 2. HERO & SEARCH SECTION */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Temukan Hunian Masa Depan
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Pencarian properti terlengkap dan terpercaya di Indonesia.
          </p>
          
          <div className="max-w-md relative">
            <span className="absolute left-4 top-4 text-gray-400">🔍</span>
            <input 
              type="text" 
              placeholder="Cari berdasarkan lokasi atau nama..." 
              className="w-full p-4 pl-12 rounded-2xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-gray-700 transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p className="text-xs text-gray-400 mt-3 font-medium uppercase tracking-widest">
              Hasil: {filteredProperties.length} Properti Ditemukan
            </p>
          </div>
        </div>

        <hr className="mb-12 border-gray-100" />

        {/* 3. GRID PROPERTI SECTION */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((rumah) => (
              <PropertyCard key={rumah.id} item={rumah} />
            ))}
          </div>
        ) : (
          /* Pesan jika tidak ada hasil */
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100">
            <span className="text-5xl mb-4 block">🏝️</span>
            <h3 className="text-xl font-bold text-gray-800">Ups! Properti tidak ditemukan</h3>
            <p className="text-gray-500">Coba gunakan kata kunci pencarian yang lain.</p>
          </div>
        )}
      </div>

      {/* 4. FOOTER */}
      <footer className="bg-white border-t border-gray-100 mt-20 py-10">
        <div className="max-w-6xl mx-auto px-8 text-center text-gray-400 text-sm">
          © 2026 RumahImpian. Dibuat dengan ❤️ untuk Masa Depan.
        </div>
      </footer>

    </main>
  );
}