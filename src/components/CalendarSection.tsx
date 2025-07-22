import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Plus, Bell, ExternalLink } from 'lucide-react';

interface CalendarSectionProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const CalendarSection: React.FC<CalendarSectionProps> = ({ activeCategory, setActiveCategory }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const categories = [
    { id: 'all', name: 'الكل', color: 'bg-gray-500' },
    { id: 'salaries', name: 'الرواتب', color: 'bg-green-600' },
    { id: 'events', name: 'المناسبات', color: 'bg-blue-600' },
    { id: 'education', name: 'التعليم', color: 'bg-blue-500' },
    { id: 'ramadan', name: 'رمضان', color: 'bg-green-500' },
    { id: 'tests', name: 'الاختبارات', color: 'bg-blue-500' },
  ];

  const events = [
    {
      id: 1,
      title: 'صرف حساب المواطن',
      date: `${new Date().getFullYear()}-01-15`,
      category: 'salaries',
      description: 'موعد صرف الدفعة الشهرية لحساب المواطن',
      source: 'وزارة الموارد البشرية',
      isUpcoming: true,
    },
    {
      id: 2,
      title: 'اليوم الوطني السعودي',
      date: `${new Date().getFullYear()}-09-23`,
      category: 'events',
      description: 'ذكرى توحيد المملكة العربية السعودية',
      source: 'الهيئة العامة للترفيه',
      isUpcoming: false,
    },
    {
      id: 3,
      title: 'بداية الفصل الدراسي الثاني',
      date: `${new Date().getFullYear()}-02-01`,
      category: 'education',
      description: 'بداية الدراسة للفصل الدراسي الثاني',
      source: 'وزارة التعليم',
      isUpcoming: true,
    },
  ];

  const filteredEvents = activeCategory === 'all' 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <section id="calendar" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            التقويم التفاعلي
          </h2>
          <p className="text-xl text-gray-600">
            تصفح المواعيد والمناسبات المهمة بطريقة سهلة وتفاعلية
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Events List */}
          <div className="lg:col-span-2 space-y-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                        {event.isUpcoming && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                            قريباً
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{event.description}</p>
                      <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-500">
                        <span>📅 {new Date(event.date).toLocaleDateString('ar-SA')}</span>
                        <span>📋 {event.source}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <button 
                        onClick={() => {
                          alert('تم إضافة الموعد إلى تقويمك الشخصي!');
                        }}
                        className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                        <span>أضف لتقويمي</span>
                      </button>
                      <button 
                        onClick={() => {
                          alert('تم تفعيل التنبيه لهذا الموعد!');
                        }}
                        className="flex items-center space-x-2 rtl:space-x-reverse text-indigo-600 hover:text-indigo-700 transition-colors"
                      >
                        <Bell className="h-4 w-4" />
                        <span>ذكرني</span>
                      </button>
                    </div>
                    <button 
                      onClick={() => {
                        window.open('https://www.hrsd.gov.sa', '_blank');
                      }}
                      className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600 hover:text-gray-700 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>المصدر</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mini Calendar */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">التقويم الشهري</h3>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {['س', 'ج', 'خ', 'أ', 'ث', 'ن', 'ح'].map((day) => (
                <div key={day} className="p-2 text-gray-600 font-medium">
                  {day}
                </div>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <div
                  key={i + 1}
                  className={`p-2 hover:bg-gray-100 rounded-lg cursor-pointer ${
                    i + 1 === 15 ? 'bg-green-500 text-white' : ''
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">الحدث القادم</h4>
              <p className="text-sm text-green-700">صرف حساب المواطن - 15 يناير</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};