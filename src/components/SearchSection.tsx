import React, { useState } from 'react';
import { Search, Mic, Filter, Calendar, DollarSign, GraduationCap, Heart } from 'lucide-react';

interface SearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchSection: React.FC<SearchSectionProps> = ({ searchQuery, setSearchQuery }) => {
  const [isListening, setIsListening] = useState(false);

  const quickSearches = [
    { icon: DollarSign, text: 'متى صرف حساب المواطن؟', color: 'text-green-600' },
    { icon: GraduationCap, text: 'متى بداية الترم الثاني؟', color: 'text-blue-600' },
    { icon: Calendar, text: 'متى العيد القادم؟', color: 'text-purple-600' },
    { icon: Heart, text: 'متى موسم الرياض؟', color: 'text-red-600' },
  ];

  const handleVoiceSearch = () => {
    setIsListening(true);
    // Simulate voice search
    setTimeout(() => {
      setIsListening(false);
      setSearchQuery('متى صرف حساب المواطن؟');
    }, 2000);
  };

  return (
    <section id="search" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ابحث عن أي موعد تريده
          </h2>
          <p className="text-xl text-gray-600">
            محرك بحث ذكي يفهم أسئلتك ويجيب عليها مباشرة
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="اكتب سؤالك هنا... مثل: متى صرف الراتب؟"
              className="w-full pr-10 pl-20 py-4 text-right text-lg border-2 border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center space-x-2 rtl:space-x-reverse">
              <button
                onClick={handleVoiceSearch}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isListening ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Mic className="h-5 w-5" />
              </button>
              <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                <Filter className="h-5 w-5" />
              </button>
            </div>
          </div>
          {isListening && (
            <div className="mt-4 text-center">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-red-700">جاري الاستماع...</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Searches */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            بحث سريع - الأسئلة الشائعة
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(search.text)}
                className="flex items-center justify-center space-x-3 rtl:space-x-reverse p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 group"
              >
                <search.icon className={`h-6 w-6 ${search.color} group-hover:scale-110 transition-transform duration-200`} />
                <span className="text-gray-700 group-hover:text-gray-900">{search.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-green-800 mb-4">نتائج البحث:</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-gray-900 mb-2">صرف حساب المواطن</h5>
                  <p className="text-gray-600 mb-3">
                    يتم صرف حساب المواطن في الأسبوع الأول من كل شهر هجري
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">المصدر: وزارة الموارد البشرية</span>
                    <button 
                      onClick={() => {
                        alert('تم إضافة الموعد إلى تقويمك!');
                      }}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                    >
                      أضف إلى تقويمي
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};