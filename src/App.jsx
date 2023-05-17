import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);

  if (people.length == 0) {
    return (
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button
            type="button"
            className="btn btn-block"
            onClick={() => setPeople(data)}
          >
            refresh list
          </button>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          clear list
        </button>
      </section>
    </main>
  );
};
export default App;
