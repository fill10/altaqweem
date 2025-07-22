import React from 'react';
import { Calendar, Download, Share2, ExternalLink } from 'lucide-react';

export const CalendarSaleSection: React.FC = () => {
  const shareLinks = [
    {
      name: 'واتساب',
      url: 'https://wa.me/?text=احصل%20على%20رزنامة%20محرم%201447هـ%20بتصميم%20جميل%20من%20هنا%20👉%20https://umabeeha.gumroad.com/l/yqfrvb',
      icon: 'https://img.icons8.com/color/32/000000/whatsapp--v1.png'
    },
    {
      name: 'X (تويتر)',
      url: 'https://x.com/intent/tweet?text=رزنامة%20محرم%201447هـ%20📅%20%0Aاحصل%20عليها%20الآن%20بتصميم%20منسق%20👉%20https://umabeeha.gumroad.com/l/yqfrvb',
      icon: 'https://img.icons8.com/color/32/000000/twitter--v1.png'
    },
    {
      name: 'تيليجرام',
      url: 'https://t.me/share/url?url=https://umabeeha.gumroad.com/l/yqfrvb&text=رزنامة%20شهر%20محرم%201447هـ%20📅%20للطباعة%20بشكل%20أنيق%20ومنظم',
      icon: 'https://img.icons8.com/color/32/000000/telegram-app--v1.png'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div id="calendar-sale" className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-12 w-12 text-green-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  📅 تقويم شهر محرم 1447هـ
                </h2>
              </div>
              <p className="text-xl text-gray-600">نسخة للطباعة</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <p className="text-lg text-gray-700 mb-6">
                احصل على <strong className="text-green-600">رزنامة شهر محرم</strong> من العام الهجري 1447هـ بصيغة PDF عالية الجودة، بتصميم أنيق ومنسّق، جاهز للطباعة أو الاستخدام المكتبي.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-2xl">📆</span>
                    <span className="text-gray-700">التواريخ الهجرية والميلادية</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-2xl">🌙</span>
                    <span className="text-gray-700">رأس السنة الهجرية – 1 محرم (7 يونيو 2025)</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-2xl">🕌</span>
                    <span className="text-gray-700">عاشوراء – 10 محرم (16 يونيو 2025)</span>
                  </div>
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-2xl">💰</span>
                    <span className="text-gray-700">مواعيد الرواتب والدعم ضمن الجدول الشهري</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 mb-6">
                <p className="text-2xl font-bold text-gray-900 mb-2">💡 السعر: 1 دولار فقط</p>
                <p className="text-gray-600">استثمار بسيط لتنظيم أفضل</p>
              </div>

              <a
                href="https://umabeeha.gumroad.com/l/yqfrvb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 rtl:space-x-reverse bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Download className="h-6 w-6" />
                <span>🔒 اشترِ الآن لتحميل الرزنامة</span>
                <ExternalLink className="h-5 w-5" />
              </a>

              <p className="mt-4 text-sm text-gray-600">
                * سيتم توجيهك إلى Gumroad لإتمام الدفع، ثم يمكنك تحميل الملف مباشرة.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  ✨ شارك النتيجة مع من تحب
                </h3>
                <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                  {shareLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                      title={`مشاركة عبر ${link.name}`}
                    >
                      <img src={link.icon} alt={`مشاركة ${link.name}`} className="w-8 h-8" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border-r-4 border-green-500">
                <p className="text-lg text-gray-800 font-medium text-center">
                  🌟 احصل على رزنامة شهر محرم 1447هـ بتصميم أنيق ومنظم — تمهيدًا لإطلاق الرزنامة الكاملة قريبًا! 🌙
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};