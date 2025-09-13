import Link from 'next/link';
import styles from './page.module.css';

export default function SkillBound() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.navContent}>
            <div className={styles.logo}>
              Skill-Bound<span>.</span>
            </div>
            <nav className={styles.navLinks}>
              <Link href="#how-it-works" className={styles.navLink}>Как это работает</Link>
              <Link href="#features" className={styles.navLink}>Преимущества</Link>
              <Link href="#use-cases" className={styles.navLink}>Кейсы</Link>
            </nav>
            <Link href="/auth/signin" className={styles.navButton}>
              Sign In
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.heroGradient}>
        <div className={styles.navContainer}>
          <h1 className={styles.heroTitle}>
            Ваш вклад — <br /> это ваша доля
          </h1>
          <p className={styles.heroSubtitle}>
            Skill-Bound — это децентрализованный протокол, который превращает выполненную работу в гарантированную долю от будущего дохода проекта. Никаких сложных контрактов, только прозрачность и автоматизация на блокчейне.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/auth/signup" className={styles.ctaGradient}>
              Начать работу
            </Link>
            <Link href="#how-it-works" className={styles.learnMoreBtn}>
              Узнать больше
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className={`${styles.section} ${styles.howItWorks}`}>
        <div className={styles.navContainer}>
          <div className="text-center">
            <h2 className={styles.sectionTitle}>Как это работает?</h2>
            <p className={styles.sectionSubtitle}>Простой и прозрачный процесс в четыре шага, который навсегда останется в блокчейне.</p>
          </div>
          <div className={styles.stepsGrid}>
            <div className={styles.connectorLine}></div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Создайте Задачу</h3>
              <p className={styles.stepDescription}>Определите работу, навык и вознаграждение в "Contribution Points".</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Выполните Работу</h3>
              <p className={styles.stepDescription}>Контрибьютор выполняет задачу и отправляет результат на проверку.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Получите SBT</h3>
              <p className={styles.stepDescription}>После приемки работы на кошелек исполнителя минтится непередаваемый NFT.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Распределите Доход</h3>
              <p className={styles.stepDescription}>Доход проекта автоматически делится между всеми держателями SBT.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={styles.section}>
        <div className={styles.navContainer}>
          <div className="text-center">
            <h2 className={styles.sectionTitle}>Для команд будущего</h2>
            <p className={styles.sectionSubtitle}>Skill-Bound решает ключевые проблемы гибких и децентрализованных команд.</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Гарантированные Вознаграждения</h3>
              <p className={styles.featureDescription}>Забудьте про устные договоренности. Каждый вклад криптографически защищен и гарантирует долю в будущем успехе. Справедливость, встроенная в код.</p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Проверяемое Ончейн-Портфолио</h3>
              <p className={styles.featureDescription}>Ваш кошелек становится вашим резюме. Каждый SBT-токен — это неизменяемое доказательство вашего опыта, навыков и вклада в реальные проекты.</p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Абсолютная Прозрачность</h3>
              <p className={styles.featureDescription}>Кто, что и когда сделал? Вся история проекта и вклад каждого участника видны всем. Это повышает мотивацию и устраняет любые споры.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className={`${styles.section} ${styles.howItWorks}`}>
        <div className={styles.navContainer}>
          <div className="text-center">
            <h2 className={styles.sectionTitle}>Для кого это?</h2>
          </div>
          <div className={styles.useCasesGrid}>
            <div className={styles.useCaseItem}>
              <span className={styles.useCaseIcon}>🚀</span>
              <p className={styles.useCaseText}>Стартапы</p>
            </div>
            <div className={styles.useCaseItem}>
              <span className={styles.useCaseIcon}>🏛️</span>
              <p className={styles.useCaseText}>DAOs</p>
            </div>
            <div className={styles.useCaseItem}>
              <span className={styles.useCaseIcon}>🎮</span>
              <p className={styles.useCaseText}>Игровые Гильдии</p>
            </div>
            <div className={styles.useCaseItem}>
              <span className={styles.useCaseIcon}>🌍</span>
              <p className={styles.useCaseText}>Open-Source</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.section}>
        <div className={styles.navContainer}>
          <div className="text-center">
            <h2 className={styles.sectionTitle}>Готовы изменить правила игры?</h2>
            <p className={styles.sectionSubtitle}>
              Присоединяйтесь к будущему, где каждый вклад имеет значение и справедливо вознаграждается.
            </p>
            <Link href="/auth/signup" className={styles.ctaGradient}>
              Запустить приложение
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p className={styles.footerText}>&copy; 2025 Skill-Bound Protocol. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}