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
      icon: "Building2",
      title: "Строительные экспертизы",
      description: "Техническая экспертиза зданий, сооружений и строительных конструкций"
    },
    {
      icon: "MapPin",
      title: "Землеустроительные экспертизы",
      description: "Определение границ земельных участков и их правовой статус"
    },
    {
      icon: "Cable",
      title: "Экспертиза сетей",
      description: "Исследование инженерных коммуникаций и сетевой инфраструктуры"
    },
    {
      icon: "Car",
      title: "Экспертиза автомобилей",
      description: "Оценка ущерба, технического состояния транспортных средств"
    },
    {
      icon: "Calculator",
      title: "Оценочные экспертизы",
      description: "Определение рыночной стоимости имущества и материальных ценностей"
    },
    {
      icon: "Footprints",
      title: "Трасологическая экспертиза",
      description: "Исследование следов, оставленных при контакте объектов"
    },
    {
      icon: "Shirt",
      title: "Экспертиза одежды",
      description: "Оценка качества, дефектов и соответствия нормам текстильных изделий"
    },
    {
      icon: "Sofa",
      title: "Экспертиза мебели",
      description: "Определение качества и выявление производственных недостатков"
    },
    {
      icon: "Plug",
      title: "Экспертиза электробытовых товаров",
      description: "Исследование бытовой техники и электроприборов"
    },
    {
      icon: "PenTool",
      title: "Почерковедческая экспертиза",
      description: "Идентификация личности по почерку и подписи"
    },
    {
      icon: "FileSearch",
      title: "Технико-криминалистическая экспертиза",
      description: "Исследование документов на предмет подделки и изменений"
    },
    {
      icon: "FileCheck",
      title: "Рецензия судебных экспертиз",
      description: "Независимая оценка качества проведённых экспертиз"
    },
    {
      icon: "Receipt",
      title: "Бухгалтерская экспертиза",
      description: "Анализ финансовой документации и бухгалтерского учёта"
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground border-b-4 border-accent animate-fade-in">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Shield" className="text-accent" size={32} />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight">ООО «Экспертиза ПРО»</span>
                <span className="text-xs opacity-90">Независимая судебная экспертиза</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-accent transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-accent transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-accent transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection("contact")} size="sm" className="hidden md:flex bg-accent hover:bg-accent/90 text-white">
              Заказать экспертизу
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold tracking-normal text-primary">
              Независимая судебная экспертиза
            </h1>
            <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
              Профессиональные экспертные исследования для судов, органов следствия и частных лиц. Лицензия Минюста России.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" onClick={() => scrollToSection("contact")} className="text-base h-12 px-8 bg-accent hover:bg-accent/90">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("services")} className="text-base h-12 px-8 border-primary text-primary hover:bg-primary hover:text-white">
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
            <Card className="p-8 text-center space-y-4 bg-card border-2 border-primary/20 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto border-2 border-primary/20">
                <Icon name="Award" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary">15+ лет опыта</h3>
              <p className="text-foreground">Проведено более 5000 экспертиз</p>
            </Card>
            <Card className="p-8 text-center space-y-4 bg-card border-2 border-primary/20 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto border-2 border-primary/20">
                <Icon name="Users" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary">Квалифицированные эксперты</h3>
              <p className="text-foreground">Специалисты с высшей категорией</p>
            </Card>
            <Card className="p-8 text-center space-y-4 bg-card border-2 border-primary/20 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto border-2 border-primary/20">
                <Icon name="FileCheck" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary">Все виды лицензий</h3>
              <p className="text-foreground">Аккредитация Минюста России</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Виды экспертиз</h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Полный спектр судебных экспертиз для решения любых задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 space-y-4 hover:shadow-lg transition-all duration-300 bg-card border-l-4 border-primary hover:border-accent"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Icon name={service.icon} className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold text-primary">{service.title}</h3>
                <p className="text-sm text-foreground">{service.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Связаться с нами</h2>
            <p className="text-lg text-foreground">
              Оставьте заявку, и мы свяжемся с вами в ближайшее время
            </p>
          </div>
          <Card className="p-8 md:p-12 space-y-8 bg-card border-2 border-primary/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Icon name="Phone" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-primary">Телефон</h4>
                    <p className="text-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-primary">Email</h4>
                    <p className="text-foreground">info@expertiza-pro.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-primary">Адрес</h4>
                    <p className="text-foreground">г. Москва, ул. Примерная, д. 1</p>
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
                <Button className="w-full h-11 bg-accent hover:bg-accent/90 text-white font-bold">Отправить заявку</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t-4 border-accent bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Shield" className="text-accent" size={24} />
              <span className="font-bold">ООО «Экспертиза ПРО»</span>
            </div>
            <p className="text-sm opacity-90">
              © 2024 ООО «Экспертиза ПРО». Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;