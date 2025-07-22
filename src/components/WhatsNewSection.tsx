import React from 'react';
import { Clock, TrendingUp, AlertCircle, Star, ChevronRight } from 'lucide-react';

export const WhatsNewSection: React.FC = () => {
  const updates = [
    {
      id: 1,
      title: `صرف حساب المواطن - يناير ${new Date().getFullYear()}`,
      description: `سيتم صرف دفعة شهر يناير يوم الأحد 14 يناير ${new Date().getFullYear()}`,
      type: 'urgent',
      time: '2 ساعات',
      icon: AlertCircle,
      color: 'bg-red-500'
    },
    {
      id: 2,
      title: `موسم الرياض ${new Date().getFullYear()}`,
      description: 'انطلاق فعاليات موسم الرياض بأكثر من 100 فعالية مختلفة',
      type: 'event',
      time: '5 ساعات',
      icon: Star,
      color: 'bg-purple-500'
    },
    {
      id: 3,
      title: 'بداية الفصل الدراسي الثاني',
      description: 'تبدأ الدراسة للفصل الثاني في جميع المدارس يوم 4 فبراير',
      type: 'education',
      time: '1 يوم',
      icon: TrendingUp,
      color: 'bg-blue-500'
    }
  ];

  const quickStats = [
    { label: 'المواعيد القادمة', value: '47', change: '+5' },
    { label: 'التحديثات اليوم', value: '3', change: '+1' },
    { label: 'المستخدمين النشطين', value: '2.8K', change: '+127' },
    { label: 'التنبيهات المرسلة', value: '15.6K', change: '+892' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            وش الجديد؟
          </h2>
          <p className="text-xl text-gray-600">
            آخر التحديثات والمواعيد المهمة في مكان واحد
          </p>
        </div>

        {/* Latest Updates */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {updates.map((update) => (
            <div key={update.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${update.color} p-2 rounded-lg`}>
                    <update.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    منذ {update.time}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {update.title}
                </h3>
                <p className="text-gray-600 mb-4">{update.description}</p>
                
                <button className="flex items-center space-x-2 rtl:space-x-reverse text-green-600 hover:text-green-700 font-medium">
                  <span>اقرأ المزيد</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 mb-2">{stat.label}</div>
              <div className="text-xs text-green-600 font-medium">{stat.change}</div>
            </div>
          ))}
        </div>

        {/* Trending Topics */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            الموضوعات الأكثر بحثاً
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { topic: 'موعد صرف حساب المواطن', searches: '12,450' },
              { topic: 'بداية الفصل الدراسي', searches: '8,230' },
              { topic: 'موسم الرياض 2024', searches: '6,890' },
              { topic: 'إجازة اليوم الوطني', searches: '5,670' },
              { topic: 'مواعيد الاختبارات', searches: '4,320' },
              { topic: 'صرف رواتب المعلمين', searches: '3,150' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{item.topic}</span>
                </div>
                <span className="text-sm text-gray-500">{item.searches}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};