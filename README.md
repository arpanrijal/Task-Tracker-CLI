# Task Tracker CLI 🚀

![Task Tracker Banner](./Task_Tracker_using_File_system/image.png)

**Two implementations of a command-line task manager**:
1. **JSON Version**: Advanced version with status tracking (todo/in-progress/done) and timestamps
2. **Filesystem Version**: Simple version using text files for basic task management

[![Node Version](https://img.shields.io/badge/node-%3E%3D12.0.0-brightgreen)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features ✨

### JSON Version (`tasktrack.js`)
- ✅ Status tracking (todo/in-progress/done)
- 📅 Automatic timestamps (createdAt/updatedAt)
- 🔍 Filter tasks by status
- 🧩 Persistent JSON storage

### Filesystem Version (`index.js`)
- ✅ Simple text-based storage
- 🔢 Automatic task numbering
- 🏷️ Basic CRUD operations
- 📝 Plaintext task storage

## Feature Comparison 🔍

| Feature               | JSON Version (`tasktrack.js`) | Filesystem Version (`index.js`)|
|-----------------------|-------------------------------|--------------------------------|
| **Storage Method**    | JSON file (`task.json`)       | Text files (`tasklist.txt`)    |
| **Status Tracking**   | ✅ (todo/in-progress/done)    | ❌                            |
| **Timestamps**        | ✅ (createdAt/updatedAt)      | ❌                            |
| **Task Filtering**    | ✅ by status                  | ❌                            |
| **Data Structure**    | Complex objects               | Simple line-by-line text       |
| **Best For**          | Detailed task management      | Quick simple task lists        |


## Installation ⚡

```bash
git clone https://github.com/arpanrijal/TaskTrack_using_JSON.git
cd TaskTrack_using_JSON
```

## Usage 🖥️

### JSON Version (Advanced)

```bash
node tasktrack.js [command] [arguments]

# Add task
node tasktrack.js add "Write documentation"

# List tasks
node tasktrack.js list in-progress

# Update task
node tasktrack.js update 3 "Updated description"

# Change status
node tasktrack.js mark-done 1
```

### Filesystem Version (Basic)

```bash
node index.js

# Follow the menu:
# 1. Add Task
# 2. View Tasks
# 3. Remove Task
# 4. Update Task
# 5. Exit
```

## File Structure 📂

```
TaskTrack_using_JSON/
├── tasktrack.js        # JSON version (advanced)
├── task.json          # JSON task storage
├── index.js           # Filesystem version (basic)
├── tasklist.txt       # Filesystem task storage
├── indexnum.txt       # Task counter
└── README.md
```

## Example Workflow 🔄

### JSON Version
```bash
node tasktrack.js add "Complete project"
node tasktrack.js mark-in-progress 1
node tasktrack.js list
```

### Filesystem Version
```bash
node index.js
> 1 (Add Task)
> "Buy groceries"
> Y (Continue)
> 2 (View Tasks)
```

## Why Two Versions? 💡

This project demonstrates different Node.js storage approaches:
- **JSON Version**: Shows complex data structures with status tracking
- **Filesystem Version**: Illustrates basic file I/O operations

Originally created as part of the [roadmap.sh](https://roadmap.sh/projects/task-tracker) project roadmap.

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a pull request

## FAQ ❓

**Q:** Which version should I use?  
**A:** Use JSON version for serious task management, filesystem version for quick lists

**Q:** Can I use both simultaneously?  
**A:** Not recommended as they use different storage systems

**Q:** How do I back up my tasks?  
**A:** Simply copy `task.json` or `tasklist.txt` to another location

## License 📜

MIT © [Arpan Rijal](https://github.com/arpanrijal)
