## 📝 Task Tracker CLI

A simple Node.js command-line task tracker to manage your TODOs with features like **add**, **update**, **delete**, **list**, and **mark status** (todo, in-progress, done). Tasks are stored in a local `task.json` file.

---

## 📦 Requirements

- [Node.js](https://nodejs.org/) (v12+)
- File system access (creates `task.json` in the same directory)

---

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/task-tracker-cli.git
cd task-tracker-cli
````

2. Run with Node.js:

```bash
node tasktracker.js [command] [arguments]
```

---

## 📚 Commands

### ➕ Add a Task

```bash
node tasktracker.js add "Your task description here"
```

### 🧾 List Tasks

```bash
node tasktracker.js list              # List all tasks
node tasktracker.js list todo        # List only TODO tasks
node tasktracker.js list done        # List only DONE tasks
node tasktracker.js list in-progress # List only IN-PROGRESS tasks
```

### 🗑️ Delete a Task

```bash
node tasktracker.js delete [task_id]
```

Example:

```bash
node tasktracker.js delete 3
```

### 📝 Update a Task Description

```bash
node tasktracker.js update [task_id] "New task description"
```

Example:

```bash
node tasktracker.js update 2 "Finish assignment by Monday"
```

### ✅ Change Task Status

```bash
node tasktracker.js mark-todo [task_id]
node tasktracker.js mark-in-progress [task_id]
node tasktracker.js mark-done [task_id]
```

Examples:

```bash
node tasktracker.js mark-done 1
node tasktracker.js mark-in-progress 2
```

### 🆘 Help Command

```bash
node tasktracker.js help
```

Displays all available commands and their usage.

---
## Example of All Commands
```bash
# Adding a new task
node tasktrack.js add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
node tasktrack.js update 1 "Buy groceries and cook dinner"
node tasktrack.js delete 1

# Marking a task as in progress or done
node tasktrack.js mark-in-progress 1
node tasktrack.js mark-done 1

# Listing all tasks
node tasktrack.js list

# Listing tasks by status
node tasktrack.js list done
node tasktrack.js list todo
node tasktrack.js list in-progress
```
---

## 🗃️ Data Storage

All tasks are stored in a file named `task.json` in the root directory. Each task object contains:

* `id`: Unique task identifier
* `description`: Task content
* `status`: One of `todo`, `in-progress`, or `done`
* `createdAt`: Date and time the task was added
* `updatedAt`: Timestamp when the task was last modified

---

## 🧑‍💻 Example

```bash
node tasktracker.js add "Build a CLI Task Tracker"
node tasktracker.js list
node tasktracker.js mark-in-progress 1
node tasktracker.js update 1 "Build a CLI Task Tracker with status tracking"
```

---

## 📄 License

This project is open-source and free to use under the [MIT License](LICENSE).

---

## 💡 Author

Developed with ❤️ by [Arpan Rijal](https://github.com/arpanrijal) and Project from [roadmap](https://roadmap.sh/projects/task-tracker)
