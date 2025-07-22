import React, { useState } from 'react';
import { Mail, Check, Bell, Smartphone, Calendar } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);

  const preferences = [
    { id: 'salaries', label: 'مواعيد الرواتب', icon: '💰' },
    { id: 'education', label: 'التقويم الدراسي', icon: '📚' },
    { id: 'events', label: 'المناسبات الوطنية', icon: '🎉' },
    { id: 'citizen', label: 'حساب المواطن', icon: '🏛️' },
    { id: 'health', label: 'المواعيد الصحية', icon: '⚕️' },
    { id: 'sports', label: 'الأحداث الرياضية', icon: '⚽' }
  ];

  const handleSubscribe = () => {
    if (email && selectedPreferences.length > 0) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const togglePreference = (id: string) => {
    setSelectedPreferences(prev => 
      prev.includes(id) 
        ? prev.filter(p => p !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ابق على اطلاع دائم
            </h2>
            <p className="text-xl text-gray-600">
              اشترك في تنبيهاتنا الذكية واحصل على إشعارات مخصصة حسب اهتماماتك
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Subscription Form */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  اختر اهتماماتك
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {preferences.map((pref) => (
                    <button
                      key={pref.id}
                      onClick={() => togglePreference(pref.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                        selectedPreferences.includes(pref.id)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="text-2xl">{pref.icon}</span>
                        <span className="text-gray-700 font-medium">{pref.label}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="أدخل بريدك الإلكتروني"
                      className="w-full p-4 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-right"
                    />
                    <Mail className="absolute right-4 top-4 h-5 w-5 text-gray-400" />
                  </div>
                  
                  <button
                    onClick={handleSubscribe}
                    disabled={!email || selectedPreferences.length === 0}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 ${
                      isSubscribed
                        ? 'bg-blue-500 text-white'
                        : email && selectedPreferences.length > 0
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isSubscribed ? (
                      <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
                        <Check className="h-5 w-5" />
                        <span>تم الاشتراك بنجاح!</span>
                      </div>
                    ) : (
                      'اشترك في التنبيهات'
                    )}
                  </button>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  ما ستحصل عليه
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="bg-green-100 p-3 rounded-xl">
                      <Bell className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">تنبيهات مخصصة</h4>
                      <p className="text-gray-600">إشعارات قبل المواعيد المهمة بوقت كافٍ</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Smartphone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">عبر جميع الأجهزة</h4>
                      <p className="text-gray-600">تنبيهات على الهاتف والإيميل والموقع</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="bg-purple-100 p-3 rounded-xl">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">تحديثات فورية</h4>
                      <p className="text-gray-600">أول من يعلم بأي تغييرات في المواعيد</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600 text-center">
                    🔒 نحترم خصوصيتك ولن نرسل رسائل غير مرغوب فيها
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};