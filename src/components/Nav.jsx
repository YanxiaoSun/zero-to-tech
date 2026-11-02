import { site } from "../data/site.js";

// 顶部这一条（品牌 + 导航）——4.2 里它在 index.html 和 text-lab.html 各抄了一遍。
// 现在它是一个组件，整个项目只有这一份。
// 想加链接、改样式？只改这一处，两个页面自动一起跟着变。
export default function Nav({ current, onNavigate }) {
  return (
    <div className="hero-topline">
      <p className="brand-eyebrow">{site.brand}</p>
      <nav className="inline-links hero-nav">
        {site.navigation.map((item) => (
          <a
            key={item.key}
            href={item.path}
            className={"nav-link" + (current === item.key ? " active" : "")}
            onClick={(e) => { e.preventDefault(); onNavigate(item.key); }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
