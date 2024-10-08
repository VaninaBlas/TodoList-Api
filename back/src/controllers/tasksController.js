let tasks = [
  { id: 1, title: "Aprender Node.js", completed: false },
  { id: 2, title: "Desarrollar una app React", completed: true },
];

//obtener todas las tareas
const getTasks = (req, res) => {
  res.json(tasks);
};

const getTasksById = (req, res) => {
  const task = tasks.find((x) => x.id == parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ mesagge: "Tarea no encontrada" });
  }
  res.json(task);
};

const createTask = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(404).json({ mesagge: "el titulo es requerido" });
  }

  const newtask = {
    id: tasks.length + 1,
    title: title,
    completed: false,
  };

  tasks.push(newtask);
  res.status(200).json(tasks);
};

const updateTask = (req, res) => {
  const task = tasks.find((x) => x.id == parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }

  const { title, completed } = req.body;
  if (title != undefined) {
    task.title = title;
  }
  if (completed !== undefined) {
    task.completed = completed;
  }
  res.json(task);
};

const deleteTask = (req, res) => {
  const task = tasks.findIndex((x) => x.id == parseInt(req.params.id));
  if (task === -1) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }
  tasks.splice(task, 1);
  res.status(204).send();
};

module.exports = {
  getTasks,
  getTasksById,
  createTask,
  updateTask,
  deleteTask,
};
