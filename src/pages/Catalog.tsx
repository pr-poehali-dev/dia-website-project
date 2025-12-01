import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Catalog = () => {
  const [selectedGenre, setSelectedGenre] = useState('Все');

  const genres = ['Все', 'Современная проза', 'Философия', 'Поэзия', 'Детектив', 'Эссе'];

  const books = [
    {
      id: 1,
      title: 'Тихие воды',
      author: 'Анна Волкова',
      genre: 'Современная проза',
      year: 2025,
      price: '890 ₽',
      cover: 'https://cdn.poehali.dev/projects/3d194df5-859d-4e05-b4c2-238aba13488d/files/70227dc9-aef5-4f6a-b482-8033f8413f3d.jpg',
      description: 'Роман о поиске себя в современном мире'
    },
    {
      id: 2,
      title: 'Архитектура молчания',
      author: 'Дмитрий Серов',
      genre: 'Философия',
      year: 2025,
      price: '950 ₽',
      cover: 'https://cdn.poehali.dev/projects/3d194df5-859d-4e05-b4c2-238aba13488d/files/4c6d0b74-44b6-4737-9fde-c2387eb961ba.jpg',
      description: 'Философские размышления о природе тишины'
    },
    {
      id: 3,
      title: 'Граница света',
      author: 'Елена Морская',
      genre: 'Поэзия',
      year: 2024,
      price: '690 ₽',
      cover: 'https://cdn.poehali.dev/projects/3d194df5-859d-4e05-b4c2-238aba13488d/files/034f7974-2ac7-45c1-a1d4-d2d579147e7b.jpg',
      description: 'Сборник стихотворений о границах восприятия'
    },
    {
      id: 4,
      title: 'Между строк',
      author: 'Михаил Северов',
      genre: 'Эссе',
      year: 2024,
      price: '790 ₽',
      cover: 'https://cdn.poehali.dev/projects/3d194df5-859d-4e05-b4c2-238aba13488d/files/70227dc9-aef5-4f6a-b482-8033f8413f3d.jpg',
      description: 'Эссе о литературе и культуре'
    },
    {
      id: 5,
      title: 'Тени прошлого',
      author: 'Ирина Белова',
      genre: 'Детектив',
      year: 2024,
      price: '850 ₽',
      cover: 'https://cdn.poehali.dev/projects/3d194df5-859d-4e05-b4c2-238aba13488d/files/4c6d0b74-44b6-4737-9fde-c2387eb961ba.jpg',
      description: 'Психологический детектив с неожиданной развязкой'
    },
    {
      id: 6,
      title: 'Осенние заметки',
      author: 'Петр Лесной',
      genre: 'Современная проза',
      year: 2023,
      price: '820 ₽',
      cover: 'https://cdn.poehali.dev/projects/3d194df5-859d-4e05-b4c2-238aba13488d/files/034f7974-2ac7-45c1-a1d4-d2d579147e7b.jpg',
      description: 'История о возвращении к истокам'
    }
  ];

  const filteredBooks = selectedGenre === 'Все' 
    ? books 
    : books.filter(book => book.genre === selectedGenre);

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background">
      <Navigation />
      
      <main className="pt-20">
        <section className="container mx-auto px-4 py-20">
          <h1 className="text-6xl font-cormorant font-bold text-primary mb-6 text-center animate-fade-in">
            Каталог книг
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12 animate-fade-in">
            Исследуйте нашу коллекцию литературных произведений
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in">
            {genres.map((genre) => (
              <Button
                key={genre}
                variant={selectedGenre === genre ? 'default' : 'outline'}
                onClick={() => setSelectedGenre(genre)}
                className={selectedGenre === genre ? 'bg-primary' : ''}
              >
                {genre}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredBooks.map((book, index) => (
              <Card 
                key={book.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
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
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{book.genre}</Badge>
                    <span className="text-sm text-muted-foreground">{book.year}</span>
                  </div>
                  <h3 className="text-2xl font-cormorant font-semibold mb-2 text-primary">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{book.author}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {book.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{book.price}</span>
                    <Button variant="outline" size="sm">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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

export default Catalog;