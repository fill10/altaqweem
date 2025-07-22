import React from 'react';
import { Calendar, Phone, Mail, MapPin, Twitter, Instagram, Youtube, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'الروابط السريعة',
      links: [
        { name: 'الرئيسية', href: '#home' },
        { name: 'التقويم', href: '#calendar' },
        { name: 'البحث', href: '#search' },
        { name: 'الفئات', href: '#categories' },
        { name: 'التنبيهات', href: '#notifications' }
      ]
    },
    {
      title: 'الخدمات',
      links: [
        { name: 'حساب المواطن', href: '#citizen' },
        { name: 'التقويم الدراسي', href: '#education' },
        { name: 'المناسبات الوطنية', href: '#events' },
        { name: 'مواعيد الرواتب', href: '#salaries' },
        { name: 'التقويم الهجري', href: '#hijri' }
      ]
    },
    {
      title: 'الدعم',
      links: [
        { name: 'مركز المساعدة', href: '#help' },
        { name: 'الأسئلة الشائعة', href: '#faq' },
        { name: 'اتصل بنا', href: '#contact' },
        { name: 'تقرير مشكلة', href: '#report' },
        { name: 'اقتراحات', href: '#suggestions' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'تويتر', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'انستغرام', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { name: 'يوتيوب', icon: Youtube, href: '#', color: 'hover:text-red-500' },
    { name: 'فيسبوك', icon: Facebook, href: '#', color: 'hover:text-blue-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <img 
                src="/logo copy.png" 
                alt="شعار التقويم الوطني" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">التقويم الوطني</h3>
                <p className="text-sm text-gray-400">نوحّد المواعيد... ونقرّبها إليك</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              منصتك السعودية الشاملة لمعرفة كل ما يهمك من مواعيد ومناسبات، بدقة وتنظيم.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">altaqweem.contact@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          {/* New Footer Links Section */}
          <div className="bg-gray-100 rounded-lg p-6 mb-8 text-center">
            <div className="mb-4">
              <a href="/about.html" className="mx-2 text-blue-700 hover:text-blue-800 no-underline font-medium">من نحن</a>
              <span className="text-gray-500"> | </span>
              <a href="/privacy.html" className="mx-2 text-blue-700 hover:text-blue-800 no-underline font-medium">سياسة الخصوصية</a>
              <span className="text-gray-500"> | </span>
              <a href="/contact.html" className="mx-2 text-blue-700 hover:text-blue-800 no-underline font-medium">اتصل بنا</a>
              <span className="text-gray-500"> | </span>
              <a href="/advertise.html" className="mx-2 text-blue-700 hover:text-blue-800 no-underline font-medium">أعلن معنا</a>
              <span className="text-gray-500"> | </span>
              <a href="mailto:altaqweem.contact@gmail.com" className="mx-2 text-blue-700 hover:text-blue-800 no-underline font-medium">مركز المساعدة</a>
            </div>
            
            <div className="mb-3 text-gray-700">
              📬 تابعنا على تويتر: <a href="https://x.com/altaqweem_sa" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 no-underline font-medium">@altaqweem_sa</a>
            </div>
            
            <div className="mt-4 text-gray-700">
              المملكة العربية السعودية
            </div>
            
            <div className="mt-3 text-sm text-gray-600">
              هذا الموقع يستخدم ملفات تعريف الارتباط (Cookies) لتقديم أفضل تجربة للمستخدم.
            </div>
            
            <div className="mt-2 text-xs text-gray-600">
              جميع الحقوق محفوظة © {currentYear} التقويم الوطني
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-right mb-4 md:mb-0">
              <p className="text-gray-400">
                تم التطوير بعناية لخدمة المواطنين والمقيمين
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              هذا الموقع مصمم خصيصاً لخدمة المواطنين والمقيمين في المملكة العربية السعودية
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};