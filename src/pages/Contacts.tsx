import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@dia-publishing.ru',
      link: 'mailto:info@dia-publishing.ru'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      link: 'tel:+74951234567'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, ул. Литературная, 15',
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background">
      <Navigation />
      
      <main className="pt-20">
        <section className="container mx-auto px-4 py-20">
          <h1 className="text-6xl font-cormorant font-bold text-primary mb-6 text-center animate-fade-in">
            Контакты
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 animate-fade-in">
            Свяжитесь с нами любым удобным способом
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon name={info.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-cormorant font-semibold text-primary mb-3">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-cormorant font-bold text-primary mb-6 text-center">
                  Напишите нам
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                      placeholder="ivan@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                      placeholder="Расскажите, чем мы можем помочь..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <Icon name="MapPin" size={48} className="text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Карта офиса</p>
              </div>
            </div>
          </Card>
        </section>

        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-cormorant font-bold text-primary mb-6">
            Мы в соцсетях
          </h2>
          <div className="flex gap-6 justify-center">
            <a 
              href="#" 
              className="w-14 h-14 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
            >
              <Icon name="Instagram" size={28} className="text-primary" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
            >
              <Icon name="Facebook" size={28} className="text-primary" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
            >
              <Icon name="Twitter" size={28} className="text-primary" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          © 2025 DIA Publishing House. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Contacts;