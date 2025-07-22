import React from 'react';
import { Bell, Calendar, Search, Smartphone, Users, Shield, Download, Globe } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Bell,
      title: 'التنبيهات الذكية',
      description: 'احصل على تنبيهات مخصصة قبل المواعيد المهمة',
      color: 'bg-yellow-500'
    },
    {
      icon: Calendar,
      title: 'التقويم التفاعلي',
      description: 'تقويم سهل الاستخدام مع خيارات التصفية المتقدمة',
      color: 'bg-blue-500'
    },
    {
      icon: Search,
      title: 'البحث الذكي',
      description: 'محرك بحث يفهم أسئلتك ويجيب عليها مباشرة',
      color: 'bg-purple-500'
    },
    {
      icon: Smartphone,
      title: 'متوافق مع الجوال',
      description: 'تصميم مثالي للهواتف الذكية والأجهزة اللوحية',
      color: 'bg-green-500'
    },
    {
      icon: Users,
      title: 'مخصص لكل فئة',
      description: 'تقاويم مخصصة للطلاب والموظفين والأسر',
      color: 'bg-red-500'
    },
    {
      icon: Shield,
      title: 'مصادر رسمية',
      description: 'جميع المعلومات من مصادر حكومية موثوقة',
      color: 'bg-indigo-500'
    },
    {
      icon: Download,
      title: 'تصدير التقويم',
      description: 'أضف المواعيد إلى تقويمك الشخصي بضغطة واحدة',
      color: 'bg-orange-500'
    },
    {
      icon: Globe,
      title: 'تحديثات مستمرة',
      description: 'نحدث المعلومات باستمرار لضمان الدقة',
      color: 'bg-teal-500'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            لماذا التقويم الوطني؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            منصة متكاملة تجمع كل ما تحتاجه من مواعيد ومناسبات في مكان واحد، بتصميم عصري وميزات متقدمة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25,000+</div>
              <div className="text-green-100">مستخدم نشط</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">موعد ومناسبة</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1.2M+</div>
              <div className="text-green-100">تنبيه مرسل</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">دقة المعلومات</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};