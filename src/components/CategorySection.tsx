import React from 'react';
import { Users, GraduationCap, Briefcase, Heart, DollarSign, Calendar, TrendingUp, Shield } from 'lucide-react';

export const CategorySection: React.FC = () => {
  const categories = [
    {
      id: 'students',
      title: 'للطلاب',
      description: 'تقويم شامل للتعليم والاختبارات',
      icon: GraduationCap,
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      events: ['بداية الفصل الدراسي', 'مواعيد الاختبارات', 'إجازات المدارس'],
      count: 25
    },
    {
      id: 'employees',
      title: 'للموظفين',
      description: 'مواعيد الرواتب والإجازات الرسمية',
      icon: Briefcase,
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
      events: ['صرف الرواتب', 'الإجازات الرسمية', 'مواعيد الحج'],
      count: 18
    },
    {
      id: 'families',
      title: 'للأسر',
      description: 'مناسبات وأحداث تهم الأسرة السعودية',
      icon: Heart,
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      events: ['المناسبات الوطنية', 'إجازات المدارس', 'الفعاليات الترفيهية'],
      count: 32
    },
    {
      id: 'retirees',
      title: 'للمتقاعدين',
      description: 'مواعيد صرف المعاشات والدعم',
      icon: Shield,
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
      events: ['صرف المعاشات', 'الدعم الحكومي', 'الخدمات الصحية'],
      count: 12
    },
    {
      id: 'entrepreneurs',
      title: 'لرواد الأعمال',
      description: 'مواعيد مهمة للأعمال والاستثمار',
      icon: TrendingUp,
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      events: ['مواعيد الضرائب', 'الفعاليات التجارية', 'برامج الدعم'],
      count: 15
    },
    {
      id: 'citizens',
      title: 'حساب المواطن',
      description: 'مواعيد صرف حساب المواطن والدعم',
      icon: DollarSign,
      color: 'bg-teal-500',
      hoverColor: 'hover:bg-teal-600',
      events: ['صرف حساب المواطن', 'الدعم الإضافي', 'برنامج ساند'],
      count: 8
    }
  ];

  return (
    <section id="categories" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            التقويم حسب الفئة
          </h2>
          <p className="text-xl text-gray-600">
            اختر فئتك لتحصل على تقويم مخصص يناسب احتياجاتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className={`${category.color} h-2 w-full`}></div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${category.color} ${category.hoverColor} p-3 rounded-xl transition-colors duration-200`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {category.count} موعد
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>

                <div className="space-y-2 mb-6">
                  {category.events.map((event, index) => (
                    <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{event}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => {
                    alert(`سيتم توجيهك إلى تقويم ${category.title} قريباً!`);
                  }}
                  className={`w-full ${category.color} ${category.hoverColor} text-white py-3 rounded-xl font-semibold transition-all duration-200 group-hover:scale-105`}
                >
                  عرض التقويم
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Category Builder */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              أنشئ تقويمك المخصص
            </h3>
            <p className="text-gray-600">
              اختر المواضيع التي تهمك لتحصل على تقويم مخصص حسب اهتماماتك
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {['الرواتب', 'التعليم', 'المناسبات', 'الصحة', 'الرياضة', 'الترفيه', 'الأعمال', 'الدين'].map((topic) => (
              <label key={topic} className="flex items-center space-x-3 rtl:space-x-reverse p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" />
                <span className="text-gray-700">{topic}</span>
              </label>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-200">
              أنشئ تقويمي المخصص
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};