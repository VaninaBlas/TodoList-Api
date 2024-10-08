import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [task, setTassk] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const respnse = await axios.get("http://localhost:3001/tasks");
        setTassk(respnse.data);
        setLoading(false);
      } catch {
        setError("Error");
        setLoading(false);
      }
    };
    fetchTask();
  }, []);

  if (loading) {
    return <div>Cargando tareas...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      <ul>
        {task.length > 0 ? (
          task.map((t) => (
            <li key={t.id}>
              {t.title} - {task.completed ? "Completada" : "Pendiente"}
            </li>
          ))
        ) : (
          <li>No hay tareas disponibles</li>
        )}
      </ul>
    </div>
  );
}

export default App;
