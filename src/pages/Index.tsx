import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: "Scale",
      title: "Судебная экспертиза",
      description: "Комплексная судебная экспертиза для гражданских и уголовных дел"
    },
    {
      icon: "FileText",
      title: "Экспертиза документов",
      description: "Почерковедческая, техническая экспертиза документов"
    },
    {
      icon: "Microscope",
      title: "Криминалистическая экспертиза",
      description: "Трасологическая, баллистическая и другие виды экспертиз"
    },
    {
      icon: "Building2",
      title: "Строительно-техническая",
      description: "Оценка качества строительных работ и материалов"
    },
    {
      icon: "Car",
      title: "Автотехническая экспертиза",
      description: "Исследование ДТП, оценка ущерба транспортных средств"
    },
    {
      icon: "Cpu",
      title: "Компьютерно-техническая",
      description: "Исследование цифровых носителей и программного обеспечения"
    }
  ];

  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border animate-fade-in">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-primary" size={28} />
              <span className="text-xl font-semibold tracking-tight">СудЭксперт</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection("contact")} size="sm" className="hidden md:flex">
              Заказать экспертизу
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
              Независимая судебная экспертиза
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-normal">
              Профессиональные экспертные исследования для судов, органов следствия и частных лиц
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" onClick={() => scrollToSection("contact")} className="text-base h-12 px-8">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("services")} className="text-base h-12 px-8">
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section 
        id="about" 
        data-animate 
        className={`py-20 px-6 bg-muted/30 transition-all duration-700 ${
          visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center space-y-4 bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
                <Icon name="Award" className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-semibold">15+ лет опыта</h3>
              <p className="text-muted-foreground">Проведено более 5000 экспертиз</p>
            </Card>
            <Card className="p-8 text-center space-y-4 bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
                <Icon name="Users" className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-semibold">Квалифицированные эксперты</h3>
              <p className="text-muted-foreground">Специалисты с высшей категорией</p>
            </Card>
            <Card className="p-8 text-center space-y-4 bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto">
                <Icon name="FileCheck" className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl font-semibold">Все виды лицензий</h3>
              <p className="text-muted-foreground">Аккредитация Минюста России</p>
            </Card>
          </div>
        </div>
      </section>

      <section 
        id="services" 
        data-animate 
        className={`py-20 px-6 transition-all duration-700 ${
          visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Виды экспертиз</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр судебных экспертиз для решения любых задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 bg-card border-border hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon name={service.icon} className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="contact" 
        data-animate 
        className={`py-20 px-6 bg-muted/30 transition-all duration-700 ${
          visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Связаться с нами</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          <Card className="p-8 md:p-12 space-y-8 bg-card border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Телефон</h4>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@sudexpert.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Адрес</h4>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <textarea 
                    className="w-full px-4 py-2.5 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring min-h-[100px] transition-all"
                    placeholder="Опишите вашу задачу"
                  />
                </div>
                <Button className="w-full h-11 transition-all hover:scale-105">Отправить заявку</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-primary" size={24} />
              <span className="font-semibold">СудЭксперт</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Центр судебной экспертизы. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
