import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  description: string;
  process: string[];
  image: string;
  tags: string[];
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'Ребрендинг digital-студии',
      category: 'Брендинг',
      description: 'Создание уникального визуального языка для технологичной студии',
      process: [
        'Исследование рынка и аудитории',
        'Разработка концепции и мудборда',
        'Создание фирменного стиля',
        'Дизайн всех точек контакта'
      ],
      image: 'https://cdn.poehali.dev/projects/e92a06f7-f81d-4a97-9a3d-c8c502addcfb/files/715042e4-9e70-443a-850a-91dd2e08571e.jpg',
      tags: ['Branding', 'Identity', 'Web Design']
    },
    {
      id: 2,
      title: 'E-commerce платформа',
      category: 'UI/UX',
      description: 'Проектирование интуитивного интерфейса для онлайн-магазина',
      process: [
        'Анализ поведения пользователей',
        'Построение user flow',
        'Прототипирование ключевых сценариев',
        'Визуальный дизайн и тестирование'
      ],
      image: 'https://cdn.poehali.dev/projects/e92a06f7-f81d-4a97-9a3d-c8c502addcfb/files/535c32d7-593c-4084-9243-2396c10bed5f.jpg',
      tags: ['UI/UX', 'E-commerce', 'Mobile']
    },
    {
      id: 3,
      title: 'Редакционная система',
      category: 'Product Design',
      description: 'Комплексное решение для управления контентом медиа-платформы',
      process: [
        'Интервью с редакторами',
        'Определение функциональных требований',
        'Создание дизайн-системы',
        'Итеративное улучшение интерфейса'
      ],
      image: 'https://cdn.poehali.dev/projects/e92a06f7-f81d-4a97-9a3d-c8c502addcfb/files/c488575a-b484-409d-b05c-bf08a10e3c63.jpg',
      tags: ['Product', 'CMS', 'Dashboard']
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-primary/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Portfolio
            </h1>
            <div className="flex gap-8">
              {['home', 'portfolio', 'about', 'blog', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'about' && 'Обо мне'}
                  {section === 'blog' && 'Блог'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="mb-4 text-sm px-4 py-2 bg-secondary/20 text-secondary border-secondary/30">
                  Креативный дизайнер
                </Badge>
                <h1 className="text-7xl font-bold leading-tight">
                  Создаю
                  <br />
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-float">
                    визуальные истории
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Превращаю идеи в запоминающиеся дизайн-решения с фокусом на детали и пользовательский опыт
                </p>
              </div>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
                >
                  Смотреть работы
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-primary/30 hover:bg-primary/5"
                >
                  Связаться
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl animate-float" />
              <div className="relative bg-card rounded-3xl p-8 border border-primary/10 backdrop-blur">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <Icon name="Sparkles" size={120} className="text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-6xl font-bold mb-4">Избранные кейсы</h2>
            <p className="text-xl text-muted-foreground">Детальный разбор процесса работы над проектами</p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((caseStudy, index) => (
              <Card 
                key={caseStudy.id}
                className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="mb-4 w-fit bg-accent text-accent-foreground border-primary/20">
                      {caseStudy.category}
                    </Badge>
                    <h3 className="text-4xl font-bold mb-4">{caseStudy.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{caseStudy.description}</p>
                    
                    <Button
                      variant="ghost"
                      onClick={() => setExpandedCase(expandedCase === caseStudy.id ? null : caseStudy.id)}
                      className="w-fit mb-6 text-primary hover:text-primary hover:bg-primary/5"
                    >
                      {expandedCase === caseStudy.id ? 'Скрыть процесс' : 'Показать процесс работы'}
                      <Icon 
                        name={expandedCase === caseStudy.id ? 'ChevronUp' : 'ChevronDown'} 
                        className="ml-2" 
                        size={20} 
                      />
                    </Button>

                    {expandedCase === caseStudy.id && (
                      <div className="space-y-4 animate-fade-in mb-6">
                        <h4 className="text-xl font-semibold">Процесс работы:</h4>
                        <div className="space-y-3">
                          {caseStudy.process.map((step, idx) => (
                            <div key={idx} className="flex gap-4 items-start">
                              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-semibold">
                                {idx + 1}
                              </div>
                              <p className="text-foreground/80 pt-1">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="outline"
                          className="border-primary/30 text-primary"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen py-32 px-6 bg-gradient-to-br from-accent/30 to-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl flex items-center justify-center border border-primary/10">
                <Icon name="User" size={120} className="text-primary/40" />
              </div>
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-6xl font-bold">Обо мне</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Я — креативный дизайнер с фокусом на создании уникальных визуальных решений. 
                  Мой подход сочетает художественное мышление с глубоким пониманием пользовательского опыта.
                </p>
                <p>
                  Более 7 лет работы с брендами и стартапами научили меня находить баланс между 
                  эстетикой и функциональностью. Каждый проект — это история, которую я рассказываю 
                  через дизайн.
                </p>
                <p>
                  Вдохновляюсь искусством, природой и технологиями. Верю, что хороший дизайн 
                  должен вызывать эмоции и решать реальные задачи.
                </p>
              </div>
              <div className="flex gap-4 pt-4">
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать резюме
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="min-h-screen py-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground">Мысли о дизайне, творчестве и процессе</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <Card 
                key={post}
                className="overflow-hidden border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10 cursor-pointer group"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="FileText" size={60} className="text-primary/40 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <Badge className="mb-3 bg-accent text-accent-foreground">Дизайн</Badge>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    Заголовок статьи {post}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Краткое описание статьи о дизайне, творчестве и процессе работы...
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Clock" size={16} className="mr-2" />
                    5 мин чтения
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-32 px-6 flex items-center">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="animate-fade-in space-y-6">
              <h2 className="text-7xl font-bold">
                Давайте создадим
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  что-то особенное
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Открыт для новых проектов, сотрудничества и интересных идей. 
                Напишите мне, и мы обсудим ваш проект.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all text-lg px-8"
              >
                <Icon name="Mail" className="mr-2" size={20} />
                hello@portfolio.com
              </Button>
            </div>

            <div className="flex gap-6 justify-center pt-8">
              {['Github', 'Linkedin', 'Twitter', 'Instagram'].map((social) => (
                <Button 
                  key={social}
                  size="icon"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/5 hover:border-primary/50 transition-all"
                >
                  <Icon name={social as any} size={20} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/10 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Portfolio. Все права защищены.</p>
            <p className="flex items-center gap-2">
              Создано с <Icon name="Heart" size={16} className="text-secondary" /> и вниманием к деталям
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;