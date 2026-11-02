import Nav from "./Nav.jsx";
import PageHeading from "./PageHeading.jsx";
import AnimatedCardGrid from "./AnimatedCardGrid.jsx";
import { home } from "../data/site.js";

export default function HomePage({ current, onNavigate }) {
  const { featuredWork, identity } = home;

  return (
    <AnimatedCardGrid className="dashboard-grid">
      {/* 复用：Nav 和 PageHeading 都和文字实验室共享，只是 PageHeading 的 props 换了内容 */}
      <article className="hero-stage panel-full">
        <Nav current={current} onNavigate={onNavigate} />
        <PageHeading title={home.heroTitle} subtitle={home.heroSubtitle} />
      </article>

      {/* 下面这两张卡只在首页用、也不复杂，就直接写在这儿——不必为了拆而拆 */}
      <article className="panel panel-full featured-work-panel card">
        <p className="section-kicker">{featuredWork.kicker}</p>
        <p className="featured-title">{featuredWork.title}</p>
        <p className="featured-copy">{featuredWork.copy}</p>
        <a
          className="featured-link"
          href="#"
          onClick={(e) => { e.preventDefault(); onNavigate(featuredWork.target); }}
        >
          <span className="featured-link-label">{featuredWork.linkLabel}</span>
          <span className="arrow">›</span>
        </a>
      </article>

      <article className="panel panel-full identity-panel card">
        <div className="identity-item">
          <p className="section-kicker">{identity.motto.label}</p>
          <p className="identity-value identity-quote">{identity.motto.value}</p>
        </div>
        <div className="identity-item">
          <p className="section-kicker">{identity.learning.label}</p>
          <p className="identity-value">{identity.learning.value}</p>
        </div>
      </article>
    </AnimatedCardGrid>
  );
}
