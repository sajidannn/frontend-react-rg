const App = () => {
  return (
    <div>
      <Student name={"Djarot Purnomo"} isStudent={true} />
    </div>
  );
};

function Student({ name, isStudent }) {
  const firstName = name.split(" ")[0];
  const status = isStudent ? "Student" : "Not student";

  return (
    <div>
      <p>Name: {name}</p>
      <p>First name: {firstName}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default App;
export { Student };
