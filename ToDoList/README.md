# 📝 React To-Do List App

Welcome to a clean and simple **React + Vite** powered To-Do List app!

Whether you're planning your day or tracking tasks, this app helps you:

- ✅ Add new tasks (with validation so you don’t add empty ones!)
- ❌ Remove tasks you’re done with or no longer need
- ✔️ Mark tasks as completed (and feel that satisfaction 😌)
- 🔍 Filter and sort tasks your way
- 💾 Keep your tasks saved in the browser using localStorage
- 🎨 Enjoy a user-friendly UI built with modular components and CSS modules

---

## 🛠️ Getting Started

Want to run it on your machine? It’s easy:

```bash
# 1. Clone the repo
git clone  https://github.com/sristi3227/Celebal_summer_Internship_Assignment2.git
cd ToDoList

# 2. Install the dependencies
npm install

# 3. Start the app locally
npm run dev
```

Now open [http://localhost:5173](http://localhost:5173) in your browser to get started!

---

## 📁 Project Structure

Here's a quick overview of the important files and folders:

```
src/
├── components/
│   ├── TaskForm.jsx           # Where you type and add tasks
│   ├── TaskList.jsx           # Shows the list of all your tasks
│   ├── TaskItem.jsx           # A single task with checkbox & delete
│   ├── TodoList.jsx           # Pulls it all together (main logic)
│   ├── TaskForm.module.css    # Scoped styles for TaskForm
│   ├── TaskItem.module.css    # Scoped styles for each task item
│   ├── TodoList.module.css    # Scoped styles for the main list
│   └── TodoList.css           # Optional global styling
├── utils/
│   └── localStorage.js        # Save and load your tasks from the browser
├── App.jsx                    # App entry point
├── main.jsx                   # Vite bootstrap file
```

---

## 🧪 How to Test It (Manually)

You can try out all the features with these simple steps:

| ✅ Action              | 💡 What to Do                                   | 🎯 What You'll See                            |
|------------------------|--------------------------------------------------|------------------------------------------------|
| Add a Task             | Type something in and click "Add"               | The task shows up below                       |
| Input Validation       | Try adding an empty task                        | You'll get an alert message                   |
| Mark Task Complete     | Click the checkbox next to a task               | Text gets a strikethrough                     |
| Delete a Task          | Click the 🗑️ (trash) icon beside a task         | That task is removed                          |
| Filter Tasks           | Use the dropdown to pick All / Active / Done   | List updates to show only selected tasks      |
| Sort Tasks             | Choose between Newest, Oldest, Completed First | The list reorders accordingly                 |
| Refresh the Page       | Reload your browser                             | Your tasks are still there! 🎉                |

---

## 🚀 Features at a Glance

- ✅ Real-time task validation
- ✔️ Completion marking
- ❌ Task deletion
- 🔄 Sorting (Newest / Oldest / Completed)
- 🔍 Filtering (All / Active / Completed)
- 💾 LocalStorage persistence
- 💅 Modular code with scoped CSS
- 🧼 Clean and minimal UI

---

## 🙋‍♀️ Author

--Sristi Mazumder


