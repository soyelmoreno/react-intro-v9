function Pizza(props) {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Pizza;

// Could also do a named export if you wanted to export multiple components
// from a single file
// export function Pizza() {}
// or
// export const Pizza = () => {}
