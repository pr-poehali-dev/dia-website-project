import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Index = () => {
  const newBooks = [
    {
      id: 1,
      title: 'Тихие воды',
      author: 'Анна Волкова',
      genre: 'Современная проза',
      cover: 'https://cdn.poehali.dev/projects/3d194df5-859d-4e05-b4c2-238aba13488d/files/70227dc9-aef5-4f6a-b482-8033f8413f3d.jpg',
      status: 'Новинка'
    },
    {
      id: 2,
      title: 'Архитектура молчания',
      author: 'Дмитрий Серов',
      genre: 'Философия',
      cover: 'https://cdn.poehali.dev/projects/3d194df5-859d-4e05-b4c2-238aba13488d/files/4c6d0b74-44b6-4737-9fde-c2387eb961ba.jpg',
      status: 'Новинка'
    },
    {
      id: 3,
      title: 'Граница света',
      author: 'Елена Морская',
      genre: 'Поэзия',
      cover: 'https://cdn.poehali.dev/projects/3d194df5-859d-4e05-b4c2-238aba13488d/files/034f7974-2ac7-45c1-a1d4-d2d579147e7b.jpg',
      status: 'Скоро'
    }
  ];

  const announcements = [
    {
      id: 1,
      date: '15 декабря 2025',
      title: 'Презентация сборника "Зимние эскизы"',
      description: 'Встреча с авторами и обсуждение книги'
    },
    {
      id: 2,
      date: '20 декабря 2025',
      title: 'Новая серия "Современная классика"',
      description: 'Анонс новой издательской серии'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background">
      <Navigation />
      
      <main className="pt-20">
        <section className="container mx-auto px-4 py-20 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-cormorant font-bold text-primary mb-6">
              Издательский дом DIA
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Мы создаём книги, которые остаются. Лаконичность формы, глубина содержания.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/catalog">Каталог книг</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">О нас</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-cormorant font-bold text-primary">
              Последние выпуски
            </h2>
            <Button asChild variant="ghost" className="group">
              <Link to="/catalog" className="flex items-center gap-2">
                Все книги
                <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {newBooks.map((book, index) => (
              <Card 
                key={book.id} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant={book.status === 'Новинка' ? 'default' : 'secondary'}>
                      {book.status}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-cormorant font-semibold mb-2 text-primary">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">{book.author}</p>
                  <p className="text-xs text-muted-foreground">{book.genre}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 bg-secondary/20 rounded-3xl my-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-cormorant font-bold text-primary mb-12 text-center">
              Анонсы и события
            </h2>
            
            <div className="space-y-6">
              {announcements.map((announcement, index) => (
                <Card 
                  key={announcement.id}
                  className="hover:shadow-md transition-shadow animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Calendar" size={28} className="text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-2">{announcement.date}</p>
                      <h3 className="text-xl font-cormorant font-semibold text-primary mb-2">
                        {announcement.title}
                      </h3>
                      <p className="text-muted-foreground">{announcement.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl font-cormorant font-bold text-primary mb-6">
            Подпишитесь на новости
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Узнавайте первыми о новых изданиях, мероприятиях и специальных предложениях
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button className="bg-primary hover:bg-primary/90">
              Подписаться
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-cormorant font-bold text-primary mb-4">DIA</h3>
              <p className="text-sm text-muted-foreground">
                Издательский дом с 2010 года
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-primary">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">О нас</Link></li>
                <li><Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">Каталог</Link></li>
                <li><Link to="/contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-primary">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@dia-publishing.ru</li>
                <li>+7 (495) 123-45-67</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-primary">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Twitter" size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 DIA Publishing House. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;