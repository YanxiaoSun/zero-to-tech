import HomePage from "./components/HomePage.jsx";
import TextLabPage from "./components/TextLabPage.jsx";
import { useRoute } from "./router/useRoute.js";

export default function App() {
  const { path, navigate } = useRoute();
  const current = path.startsWith("/text-lab") ? "textlab" : "home";
  const onNavigate = (key) => navigate(key === "textlab" ? "/text-lab" : "/");

  return (
    <div className="app-shell">
      <div className="page-shell">
        <main className="page-content">
          {current === "home"
            ? <HomePage current={current} onNavigate={onNavigate} />
            : <TextLabPage current={current} onNavigate={onNavigate} />}
        </main>
      </div>
    </div>
  );
}
