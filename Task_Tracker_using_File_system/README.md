# Task Tracker CLI

![Task Tracker Banner](./image.png)

A simple command-line application to manage your tasks efficiently.

# Task Tracker CLI

## Features

- **Add Tasks**: Quickly add new tasks to your list
- **View Tasks**: See all your pending tasks at a glance
- **Remove Tasks**: Delete completed or unwanted tasks
- **Update Tasks**: Edit existing tasks as needed

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/arpanrijal/Task-Tracker-CLI.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Task-Tracker-CLI
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

Run the application:
```bash
node index.js
```

### Main Menu

The application provides a simple menu interface with these options:
1. Add Task
2. View Task
3. Remove Task
4. Update Task
5. Exit

### How It Works

- Tasks are saved locally in a `tasklist.txt` file
- The application maintains an index for your tasks in `indexnum.txt`
- All operations are performed through an intuitive command-line interface

## Example

```
---------------------Welcome to TASK TRACKER---------------------

1. Add Task    2. View Task    3. Remove Task    4.Update Task    5. Exit

Please Enter your option?
1
Enter your Task:
Complete the JavaScript project

------------------Data Added sucessfully!------------------

Would you like to continue or not?
Type 'Y' to go to main menu and 'N' or 'any key' to exit: Y

```

## Requirements

- Node.js (v12.0.0 or higher)
- npm (v6.0.0 or higher)

## File Structure

- `index.js` - Main application file
- `tasklist.txt` - Stores your tasks
- `indexnum.txt` - Maintains task indexing

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Built with Node.js
- Inspired by the need for a simple task management tool

---

Made with ❤️ by Arpan Rijal