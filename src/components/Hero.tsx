import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface HeroProps {
  currentDate: Date;
}

export const Hero: React.FC<HeroProps> = ({ currentDate }) => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ar-SA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ar-SA', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white py-20 relative overflow-hidden">
      {/* Logo Watermark */}
      <div className="absolute top-10 right-10 opacity-10">
        <img 
          src="/logo copy.png" 
          alt="شعار التقويم الوطني" 
          className="h-32 w-32 object-contain"
        />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-white rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-green-200 bg-gradient-to-r from-green-200 to-blue-200 bg-clip-text text-transparent">التقويم الوطني</span>
              <br />
              <span className="text-2xl md:text-3xl text-blue-100">نوحّد المواعيد... ونقرّبها إليك</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              دليلك الزمني الشامل لمتابعة مواعيد السعودية الرسمية: الرواتب، التعليم، المناسبات، الصحة، والرياضة – مجمّعة في مكان واحد ومحدّثة تلقائيًا.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => {
                  const element = document.querySelector('#calendar');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                اكتشف المواعيد
              </button>
              <button 
                onClick={() => {
                  const element = document.querySelector('#categories');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                تصفح الفئات
              </button>
            </div>
          </div>

          {/* Live Info Card */}
          <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-8 border border-white/30 shadow-2xl relative z-10">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">الوقت الحالي</h3>
              <p className="text-blue-200">{formatDate(currentDate)}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <Clock className="h-6 w-6 text-blue-200" />
                <div className="text-center">
                  <p className="text-sm text-blue-200">الساعة</p>
                  <p className="text-xl font-bold">{formatTime(currentDate)}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <MapPin className="h-6 w-6 text-blue-200" />
                <div className="text-center">
                  <p className="text-sm text-blue-200">المنطقة</p>
                  <p className="text-xl font-bold">الرياض</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                <p className="text-sm text-blue-200">المناسبات</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <Users className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                <p className="text-sm text-blue-200">المستخدمين</p>
                <p className="text-2xl font-bold">25K+</p>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <Clock className="h-8 w-8 mx-auto mb-2 text-blue-200" />
                <p className="text-sm text-blue-200">التحديثات</p>
                <p className="text-2xl font-bold">يومياً</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};