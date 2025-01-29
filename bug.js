```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count:', count); // This will log the count after every render 
    //If this console.log is removed this will cause a infinite loop
    return () => {
      // Cleanup function (optional)
    };
  }, [count]); //The dependency array is missing

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```