# revamp-react-assignment-4

1. Is JSX mandatory for React?
     No, JSX is not mandatory for React. It is a syntax extension that makes writing React components easier and more readable by resembling HTML.
2. Is ES6 mandatory for React?
     No, ES6 is not mandatory for React. React can work with older versions of JavaScript. However, ES6 features like class, arrow functions, let/const, destructuring, and modules make React code more modern.
3. {TitleComponent} vs {} vs {} in JSX
     {TitleComponent}: Used to render a React component (e.g., <TitleComponent />) inside JSX. It refers to the component itself.
      Example: <Header>{TitleComponent}</Header>

     {}: Used for embedding dynamic JavaScript expressions inside JSX, like variables, functions, or calculations.
      Example: <h1>{name}</h1>

      {} inside {}: Not valid in JSX; it causes a syntax error. Use a single pair of {} for JavaScript expressions.
4. How can I write comments in JSX?
     {/* This is a JSX comment */}
5. What is <React.Fragment></React.Fragment> and <></>
     <React.Fragment></React.Fragment>:
         A component used to group multiple elements without adding an extra DOM node.
     <>...</> (Short Syntax):
         A shorthand for <React.Fragment>. It works the same way but is more concise.
6. What is Virtual DOM?
   Virtual DOM is duplicate format of real DOM.
7. What is Reconciliation in React?
      Reconciliation in React is the process of comparing the current virtual DOM with the previous one to identify changes.
8. What is React Fiber?
     React Fiber is a reimplementation of React's core algorithm that enables incremental rendering.
9. Why do we need keys in React? When do we need keys in React?
     Why we need keys in React:
        Keys help React identify which items in a list are changed, added, or removed.
     When we need keys in React:
        Keys are required when rendering lists of elements using the map() function.
10. Can we use index as keys in React?
       Yes, index can be used as a key in React, but it is not recommended if the list can change (e.g., items are reordered, added, or removed).
11. What is props in React?
    Props (short for "properties") in React are used to pass data from a parent component to a child component.
12.  What is a Config Driven UI?
        A Config Driven UI is a user interface that is dynamically generated or customized based on configuration data, rather than being hardcoded.
