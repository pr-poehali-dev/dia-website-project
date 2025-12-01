import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

const Navigation = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'О издательстве' },
    { path: '/catalog', label: 'Каталог' },
    { path: '/contacts', label: 'Контакты' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-cormorant font-bold text-primary">
          DIA
        </Link>
        
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm transition-colors ${
                location.pathname === link.path
                  ? 'text-primary font-medium'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <span className="text-xl">☰</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;