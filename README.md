# DevStack — Build Your Ideal Development Stack

🔗 **Live Demo:** [dev-stack-react-project-05.netlify.app](https://dev-stack-react-project-05.netlify.app/)
📦 **Repository:** [github.com/sanzidakhatunbd/devStuck-project-with-react](https://github.com/sanzidakhatunbd/devStuck-project-with-react)

## About the Project

DevStack is a responsive web application that helps developers explore popular
web development technologies and build their own custom tech stack. Users can
browse technologies across categories like Frontend, Backend, Database,
Language, Styling, DevOps, and Tools, and add the ones they like to a personal
"Your Stack" panel — with the ability to remove items individually or clear
the whole stack at once.

## Tech Stack

- **React.js** — component-based UI
- **TypeScript** — type safety across components and data
- **Tailwind CSS** — utility-first styling
- **React-Toastify** — toast notifications for user actions
- **Vite** — fast build tool and dev server

## Key Features

1. **Interactive Stack Builder** — Browse 15 technologies across 7 categories
   in a responsive card grid, and add/remove them from a live "Your Stack"
   sidebar with real-time count updates.
2. **Smart Duplicate Prevention** — Each technology can only be added once;
   trying to add it again shows a warning toast instead of creating a
   duplicate, and the card button updates to "✓ Added to Stack".
3. **Fully Responsive, Themeable UI** — The layout adapts smoothly from
   mobile (single column, hamburger navbar) to desktop (multi-column grid),
   and the entire brand gradient (orange → pink → violet) is defined in one
   place so the whole site can be re-themed by changing a single value.

## Q&A

**1. What is JSX, and why is it used in React?**

Answer: JSX is a syntax used in React that allows us to write HTML-like code inside JavaScript. I use JSX to create and structure the UI of my React components.

**2. What is the difference between props and state?**

Answer: Props are used to pass data from a parent component to a child component. Props are read-only. State is used to store data inside a component, and it can change when the user interacts with the application.

**3. What does the useState hook do, and where did you use it in this project?**

Answer: The useState hook is used to create and manage state in a React component. In this project, I used useState to store and update data that can change, such as my selected technologies or stack.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**

Answer: The useEffect hook is used to perform side effects in a component, such as fetching data after the component renders. In this project, the technology data is loaded from a local JSON file as a Promise and read using React's `use()` hook inside a `Suspense` boundary, which is a newer alternative to the classic `useEffect` + `useState` data-fetching pattern — it achieves the same result (loading data without blocking the UI) while letting React manage the loading state automatically through the Suspense fallback.

**5. Why does every item in a .map() list need a unique key prop?**

Answer: Every item needs a unique key so React can identify each item properly. It helps React efficiently update the list when the data changes.

**6. What is conditional rendering? Show one place you used it.**

Answer: Conditional rendering means showing something in the UI based on a condition. In my project, I used it to show an empty stack message when no technology was selected. One example in this project is the "Your Stack" panel in `SelectStock.tsx`:

```tsx
{count === 0 ? (
    <p className="text-sm text-gray-400">Your stack is empty.</p>
) : (
    // render the list of selected technologies
)}
```

If no technology has been selected yet, it shows an empty-state message; otherwise, it renders the actual list of selected items.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

Answer: We pass data from a parent to a child using props. To send something back from the child to the parent, we can pass a function as a prop and call that function from the child component.

```tsx
// Parent
<Child onSelect={handleSelect} />

// Child
<button onClick={() => onSelect(technology)}>
    Add
</button>
```

Here, Parent → Child = props, and Child → Parent = callback function passed through props.
