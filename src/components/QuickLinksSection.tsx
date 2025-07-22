import React from 'react';
import { Calendar, DollarSign, GraduationCap, Heart, Shield, Trophy, FileText, HelpCircle } from 'lucide-react';

export const QuickLinksSection: React.FC = () => {
  const quickLinks = [
    {
      title: 'مواعيد الرواتب',
      description: 'جدول شامل لمواعيد صرف الرواتب في القطاعين الحكومي والخاص',
      icon: DollarSign,
      link: '/salaries.html',
      color: 'bg-green-500'
    },
    {
      title: 'التقويم الدراسي',
      description: 'الخطة الدراسية الرسمية للعام 1446هـ مع مواعيد الفصول والإجازات',
      icon: GraduationCap,
      link: '/education.html',
      color: 'bg-blue-500'
    },
    {
      title: 'المناسبات الوطنية',
      description: 'دليل المناسبات الرسمية مثل اليوم الوطني ويوم التأسيس',
      icon: Heart,
      link: '/national-events.html',
      color: 'bg-red-500'
    },
    {
      title: 'جدول التطعيمات',
      description: 'الجدول الرسمي لتطعيم الأطفال حسب وزارة الصحة',
      icon: Shield,
      link: '/vaccination.html',
      color: 'bg-purple-500'
    },
    {
      title: 'الفعاليات الرياضية',
      description: 'أبرز البطولات والفعاليات الرياضية في السعودية',
      icon: Trophy,
      link: '/sports.html',
      color: 'bg-orange-500'
    },
    {
      title: 'دليل المواعيد',
      description: 'مركز شامل لجميع المقالات والمحتوى في الموقع',
      icon: FileText,
      link: '/articles.html',
      color: 'bg-indigo-500'
    },
    {
      title: 'الأسئلة الشائعة',
      description: 'إجابات لأكثر الأسئلة شيوعاً حول الموقع وخدماتنا',
      icon: HelpCircle,
      link: '/faq.html',
      color: 'bg-teal-500'
    },
    {
      title: 'شروط الاستخدام',
      description: 'الشروط والأحكام الخاصة باستخدام الموقع',
      icon: FileText,
      link: '/terms.html',
      color: 'bg-gray-500'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            استكشف محتوى الموقع
          </h2>
          <p className="text-xl text-gray-600">
            اختر القسم الذي يهمك للحصول على معلومات مفصلة ومحدثة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="group block bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300"
            >
              <div className={`${link.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <link.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {link.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {link.description}
              </p>
            </a>
          ))}
        </div>

        {/* Featured Content */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📅 رزنامة شهر محرم 1447هـ
            </h3>
            <p className="text-gray-700 mb-6">
              احصل على رزنامة شهر محرم بتصميم أنيق ومنسق، جاهزة للطباعة أو الاستخدام المكتبي
            </p>
            <a
              href="#calendar-sale"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#calendar-sale');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              اعرف المزيد
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};