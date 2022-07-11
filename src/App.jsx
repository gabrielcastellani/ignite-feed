import "./global.css";
import styles from "./App.module.css";

import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gabriel Castellani de Oliveira"
            content="Meu conteudo"
          />
        </main>
      </div>
    </div>
  )
}

export default App
