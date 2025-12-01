import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const values = [
    {
      icon: 'BookOpen',
      title: 'Качество',
      description: 'Проверенные методики и отличные авторы-преподаватели'
    },
    {
      icon: 'Languages',
      title: 'Многоязычие',
      description: 'Учебники по 6 основным европейским языкам'
    },
    {
      icon: 'GraduationCap',
      title: 'Эффективность',
      description: 'Современные подходы к обучению иностранным языкам'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-background">
      <Navigation />
      
      <main className="pt-20">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-cormorant font-bold text-primary mb-8 text-center animate-fade-in">
              О издательстве
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 animate-fade-in">
              <p className="text-xl leading-relaxed">
                <span className="font-cormorant text-3xl text-primary">DIA</span> — издательский дом, 
                основанный в 2010 году с миссией создания качественных учебных материалов для изучения иностранных языков.
              </p>
              
              <p className="leading-relaxed">
                За годы работы мы выпустили более 500 учебников по английскому, немецкому, 
                французскому, испанскому и итальянскому языкам. Наши пособия используются в ведущих 
                языковых школах и университетах России.
              </p>
              
              <p className="leading-relaxed">
                Мы работаем с лучшими преподавателями-лингвистами и носителями языка, 
                создавая учебники, которые действительно помогают освоить иностранный язык.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-cormorant font-bold text-primary mb-12 text-center">
            Наши ценности
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon name={value.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-cormorant font-semibold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 bg-secondary/20 rounded-3xl my-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-cormorant font-bold text-primary mb-8">
              В цифрах
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="text-5xl font-cormorant font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Изданных книг</p>
              </div>
              <div>
                <div className="text-5xl font-cormorant font-bold text-primary mb-2">15</div>
                <p className="text-muted-foreground">Лет на рынке</p>
              </div>
              <div>
                <div className="text-5xl font-cormorant font-bold text-primary mb-2">200+</div>
                <p className="text-muted-foreground">Авторов</p>
              </div>
            </div>
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

export default About;