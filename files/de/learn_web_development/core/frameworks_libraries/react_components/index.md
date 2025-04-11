---
title: Komponenten unserer React-App erstellen
short-title: React components
slug: Learn_web_development/Core/Frameworks_libraries/React_components
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}

Derzeit ist unsere App ein Monolith. Bevor wir sie funktional gestalten können, müssen wir sie in handhabbare, beschreibende Komponenten unterteilen. React hat keine strikten Regeln dafür, was eine Komponente ist und was nicht – das bleibt Ihnen überlassen! In diesem Artikel zeigen wir Ihnen eine sinnvolle Möglichkeit, unsere App in Komponenten aufzuteilen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie mit der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Command Line</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        Eine sinnvolle Möglichkeit, unsere To-Do-Liste-App in Komponenten zu unterteilen.
      </td>
    </tr>
  </tbody>
</table>

## Unsere erste Komponente definieren

Es kann zunächst schwierig erscheinen, eine Komponente zu definieren, bis Sie etwas Praxis haben, aber das Wesentliche ist:

- Wenn es einen offensichtlichen "Abschnitt" Ihrer App darstellt, ist es wahrscheinlich eine Komponente
- Wenn es oft wiederverwendet wird, ist es wahrscheinlich eine Komponente.

Dieser zweite Punkt ist besonders wertvoll: Aus häufig verwendeten UI-Elementen eine Komponente zu machen, ermöglicht es Ihnen, Ihren Code an einer Stelle zu ändern und diese Änderungen überall zu sehen, wo die Komponente verwendet wird. Sie müssen nicht sofort alles in Komponenten aufteilen. Lassen Sie uns den zweiten Punkt als Inspiration nehmen und eine Komponente aus dem am meisten wiederverwendeten, wichtigsten Teil der UI erstellen: ein To-Do-Listenelement.

## Erstellen eines `<Todo />`

Bevor wir eine Komponente erstellen können, sollten wir eine neue Datei dafür erstellen. Tatsächlich sollten wir ein Verzeichnis nur für unsere Komponenten anlegen. Stellen Sie sicher, dass Sie sich im Stammverzeichnis Ihrer App befinden, bevor Sie diese Befehle ausführen!

```bash
# create a `components` directory
mkdir src/components
# within `components`, create a file called `Todo.jsx`
touch src/components/Todo.jsx
```

Vergessen Sie nicht, Ihren Entwicklungsserver neu zu starten, wenn Sie ihn angehalten haben, um die vorherigen Befehle auszuführen!

Lassen Sie uns eine `Todo()` Funktion in `Todo.jsx` hinzufügen. Hier definieren wir eine Funktion und exportieren sie:

```jsx
function Todo() {}

export default Todo;
```

Das ist soweit in Ordnung, aber unsere Komponente sollte etwas Nützliches zurückgeben! Gehen Sie zurück zu `src/App.jsx`, kopieren Sie das erste [`<li>`](/de/docs/Web/HTML/Reference/Elements/li) aus der ungeordneten Liste und fügen Sie es in `Todo.jsx` ein, sodass es so aussieht:

```jsx
function Todo() {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked />
        <label className="todo-label" htmlFor="todo-0">
          Eat
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">Eat</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">Eat</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;
```

Jetzt haben wir etwas, das wir verwenden können. Fügen Sie in `App.jsx` die folgende Zeile oben in die Datei ein, um `Todo` zu importieren:

```jsx
import Todo from "./components/Todo";
```

Mit dieser importierten Komponente können Sie alle `<li>` Elemente in `App.jsx` durch `<Todo />` Komponentenaufrufe ersetzen. Ihr `<ul>` sollte so aussehen:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  <Todo />
  <Todo />
  <Todo />
</ul>
```

Wenn Sie zu Ihrer App zurückkehren, fällt Ihnen etwas Unangenehmes auf: Ihre Liste wiederholt jetzt die erste Aufgabe dreimal!

![Unsere To-Do-Liste-App, mit sich wiederholenden To-Do-Komponenten, weil das Label fest in der Komponente codiert ist](todo-list-repeating-todos.png)

Wir wollen nicht nur essen; wir haben andere Dinge zu tun. Als nächstes sehen wir uns an, wie wir unterschiedliche Komponentenaufrufe dazu bringen können, einzigartigen Inhalt zu rendern.

## Eine einzigartige `<Todo />` erstellen

Komponenten sind mächtig, weil sie es uns ermöglichen, Teile unserer UI wiederzuverwenden und uns auf eine Quelle dieser UI zu beziehen. Das Problem ist, dass wir typischerweise nicht alle Teile jeder Komponente wiederverwenden wollen; wir wollen die meisten Teile wiederverwenden und kleine Stücke ändern. Hier kommen die Props ins Spiel.

### Was steckt in einem `name`?

Um die Namen der Aufgaben zu verfolgen, die wir erledigen möchten, sollten wir sicherstellen, dass jede `<Todo />` Komponente einen einzigartigen Namen rendert.

Vergeben Sie in `App.jsx` jedem `<Todo />` ein `name` Prop. Verwenden Sie die Namen unserer bisherigen Aufgaben:

```jsx
<Todo name="Eat" />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

Wenn sich Ihr Browser aktualisiert, sehen Sie... genau das Gleiche wie zuvor. Wir haben unserem `<Todo />` einige Props gegeben, aber wir verwenden sie noch nicht. Lassen Sie uns zu `Todo.jsx` zurückgehen und das beheben.

Ändern Sie zuerst Ihre `Todo()` Funktionsdefinition, damit sie `props` als Parameter akzeptiert. Sie können `console.log()` Ihre Props testen, um sicherzustellen, dass sie korrekt von der Komponente empfangen werden.

Sobald Sie sicher sind, dass Ihre Komponente ihre Props erhält, können Sie jeden Vorkommen von `Eat` durch Ihr `name` Prop ersetzen, indem Sie `props.name` lesen. Denken Sie daran: `props.name` ist ein JSX-Ausdruck, daher müssen Sie ihn in geschweifte Klammern setzen.

Wenn Sie alles zusammenfügen, sollte Ihre `Todo()` Funktion so aussehen:

```jsx
function Todo(props) {
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id="todo-0" type="checkbox" defaultChecked={true} />
        <label className="todo-label" htmlFor="todo-0">
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;
```

_Jetzt_ sollte Ihr Browser drei einzigartige Aufgaben anzeigen. Ein weiteres Problem bleibt jedoch: Sie sind alle standardmäßig angekreuzt.

![Unsere To-Do-Liste, mit unterschiedlichen To-Do-Labels, jetzt werden sie als Props an die Komponenten übergeben](todo-list-unique-todos.png)

### Ist es `completed`?

In unserer ursprünglichen statischen Liste war nur `Eat` angekreuzt. Wieder einmal wollen wir _den größten Teil_ der UI, die eine `<Todo />` Komponente ausmacht, wiederverwenden, aber eine Sache ändern. Das ist wieder eine gute Aufgabe für ein weiteres Prop! Geben Sie Ihrem ersten `<Todo />` Aufruf ein booleanes Prop von `completed` und lassen Sie die anderen beiden, wie sie sind.

```jsx
<Todo name="Eat" completed />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

Wie zuvor müssen wir zu `Todo.jsx` zurückkehren, um diese Props tatsächlich zu nutzen. Ändern Sie das `defaultChecked` Attribut des `<input />`, sodass sein Wert dem `completed` Prop entspricht. Sobald Sie fertig sind, liest das `<input />` Element der Todo-Komponente so:

```jsx
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```

Und Ihr Browser sollte aktualisiert werden, um nur `Eat` als angekreuzt anzuzeigen:

![Unsere To-Do-Liste-App, nun mit unterschiedlichen angekreuzten Zuständen - einige Kontrollkästchen sind angekreuzt, andere nicht](todo-list-differing-checked-states.png)

Wenn Sie das `completed` Prop jeder `<Todo />` Komponente ändern, wird Ihr Browser die äquivalent gerenderten Kontrollkästchen entsprechend ankreuzen oder entkreuzen.

### Geben Sie mir etwas `id`, bitte

Wir haben noch _ein anderes_ Problem: Unsere `<Todo />` Komponente gibt jeder Aufgabe ein `id` Attribut von `todo-0`. Das ist aus ein paar Gründen schlecht:

- [`id` Attribute](/de/docs/Web/HTML/Reference/Global_attributes/id) müssen eindeutig sein (sie werden als eindeutige Bezeichner für Dokumentfragmente verwendet, von CSS, JavaScript usw.).
- Wenn `id`s nicht eindeutig sind, kann die Funktionalität von [Label-Elementen](/de/docs/Web/HTML/Reference/Elements/label) beeinträchtigt werden.

Das zweite Problem betrifft unsere App gerade. Wenn Sie auf das Wort "Sleep" neben dem zweiten Kontrollkästchen klicken, wird das "Eat"-Kontrollkästchen anstelle des "Sleep"-Kontrollkästchens umgeschaltet. Das liegt daran, dass jedes Label-Element des Kontrollkästchens ein `htmlFor` Attribut von `todo-0` hat. Die Labels erkennen nur das erste Element mit einem bestimmten `id` Attribut, was das Problem verursacht, das Sie beim Klicken auf die anderen Labels sehen.

Wir hatten eindeutige `id` Attribute, bevor wir die `<Todo />` Komponente erstellt haben. Lassen Sie uns sie wiederherstellen und dem Format `todo-i` folgen, wobei `i` mit jeder Zunahme um eins größer wird. Aktualisieren Sie die `Todo` Komponenteninstanzen in `App.jsx`, um `id` Props hinzuzufügen, wie folgt:

```jsx
<Todo name="Eat" id="todo-0" completed />
<Todo name="Sleep" id="todo-1" />
<Todo name="Repeat" id="todo-2" />
```

> [!NOTE]
> Das `completed` Prop steht hier zuletzt, weil es ein boolesches ohne Zuweisung ist. Das ist rein eine stilistische Konvention. Die Reihenfolge der Props spielt keine Rolle, da Props JavaScript-Objekte sind, und JavaScript-Objekte ungeordnet sind.

Geben Sie nun in `Todo.jsx` das `id` Prop an. Es muss den Wert des `id` Attributs des `<input />`-Elements ersetzen sowie den Wert des `htmlFor` Attributs des `<label>`:

```jsx
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>
```

Mit diesen Korrekturen wird das Klicken auf die Labels neben jedem Kontrollkästchen das tun, was wir erwarten – die Kontrollkästchen neben diesen Labels an- und abkreuzen.

## Bis jetzt alles gut?

Wir machen bisher guten Gebrauch von React, aber wir könnten es besser machen! Unser Code ist wiederholend. Die drei Zeilen, die unsere `<Todo />` Komponente rendern, sind fast identisch, mit nur einem Unterschied: dem Wert jedes Props.

Wir können unseren Code mit einer der Grundfunktionen von JavaScript bereinigen: Iteration. Um Iteration zu verwenden, sollten wir zuerst über unsere Aufgaben nachdenken.

## Aufgaben als Daten

Jede unserer Aufgaben enthält derzeit drei Informationsstücke: ihren Namen, ob sie angekreuzt wurde, und ihre eindeutige ID. Diese Daten lassen sich gut auf ein Objekt abbilden. Da wir mehr als eine Aufgabe haben, würde ein Array von Objekten gut dazu dienen, diese Daten darzustellen.

Deklarieren Sie in `src/main.jsx` eine neue `const` unterhalb des abschließenden Imports, aber über `ReactDOM.createRoot()`:

```jsx
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
```

> [!NOTE]
> Wenn Ihr Texteditor ein [ESLint](https://eslint.org/) Plugin hat, sehen Sie möglicherweise eine Warnung zu dieser `DATA` Konstante. Diese Warnung stammt von der ESLint-Konfiguration, die von der Vite-Vorlage bereitgestellt wird, die wir verwendet haben, und sie gilt nicht für diesen Code. Sie können die Warnung sicher unterdrücken, indem Sie `// eslint-disable-next-line` in die Zeile über der `DATA` Konstante einfügen.

Als nächstes werden wir `DATA` als Prop an `<App />` übergeben, genannt `tasks`. Aktualisieren Sie Ihre `<App />` Komponentenaufruf in `src/main.jsx`, sodass er so aussieht:

```jsx
<App tasks={DATA} />
```

Das `DATA` Array ist nun innerhalb der App-Komponente als `props.tasks` verfügbar. Sie können `console.log()` verwenden, um zu überprüfen, wenn Sie möchten.

> **Hinweis:** `ALL_CAPS` Konstantennamen haben keine besondere Bedeutung in JavaScript; sie sind eine Konvention, die anderen Entwicklern signalisiert "diese Daten werden sich nach ihrer Definition hier nie ändern".

## Rendering mit Iteration

Um unser Array von Objekten zu rendern, müssen wir jedes Objekt in eine `<Todo />` Komponente umwandeln. JavaScript gibt uns eine Array-Methode, um Elemente in etwas anderes zu transformieren: [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

Erstellen Sie innerhalb `App.jsx` eine neue `const` über der `return` Anweisung der `App()` Funktion, die `taskList` genannt wird. Beginnen wir damit, jede Aufgabe im `props.tasks` Array in ihren Namen zu transformieren. Der `?.` Operator ermöglicht uns das [optionale Ketten](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), um zu überprüfen, ob `props.tasks` `undefined` oder `null` ist, bevor versucht wird, ein neues Array von Aufgabennamen zu erstellen:

```jsx
const taskList = props.tasks?.map((task) => task.name);
```

Versuchen wir, alle Kinder des `<ul>` durch `taskList` zu ersetzen:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  {taskList}
</ul>
```

Das bringt uns ein Stück näher dahin, alle Komponenten wieder anzuzeigen, aber wir haben noch mehr zu tun: Der Browser rendert derzeit den Namen jeder Aufgabe als einfachen Text. Uns fehlt die HTML-Struktur – die `<li>` und ihre Kontrollkästchen und Schaltflächen!

![Unsere To-Do-Liste-App mit den To-Do-Bezeichnern, die einfach nur in einer Reihe bünden](todo-list-unstructured-names.png)

Um dies zu beheben, müssen wir eine `<Todo />` Komponente aus unserer `map()` Funktion zurückgeben — denken Sie daran, dass JSX JavaScript ist, sodass wir es neben anderem, bekannteren JavaScript-Syntax verwenden können. Versuchen wir das Folgende statt dem, was wir bereits haben:

```jsx
const taskList = props.tasks?.map((task) => <Todo />);
```

Werfen Sie einen weiteren Blick auf Ihre App; jetzt sehen unsere Aufgaben mehr aus wie zuvor, aber sie fehlen die Bezeichnungen der Aufgaben. Denken Sie daran, dass jede Aufgabe, die wir drüber mappen, die Eigenschaften `id`, `name` und `completed` enthält, die wir in unsere `<Todo />` Komponente übergeben möchten. Wenn wir dieses Wissen zusammenfügen, erhalten wir Code wie diesen:

```jsx
const taskList = props.tasks?.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));
```

Nun sieht die App aus wie zuvor, und unser Code ist weniger wiederholend.

## Eindeutige Schlüssel

Da React nun unsere Aufgaben aus einem Array rendert, muss es nachverfolgen, welche welche ist, um sie richtig darzustellen. React versucht, mit seinen eigenen Vermutungen die Dinge im Auge zu behalten, aber wir können ihm helfen, indem wir ein `key` Prop an unsere `<Todo />` Komponenten übergeben. `key` ist ein spezielles Prop, das von React verwaltet wird – Sie können das Wort `key` nicht für einen anderen Zweck verwenden.

Da Schlüssel eindeutig sein sollten, werden wir die `id` jedes Aufgabenobjekts als dessen Schlüssel wiederverwenden. Aktualisieren Sie Ihre `taskList` Konstante so:

```jsx
const taskList = props.tasks?.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));
```

**Sie sollten immer einen eindeutigen Schlüssel an alles übergeben, das Sie mit Iteration rendern.** Im Browser ändert sich nichts Offensichtliches, aber wenn Sie keine eindeutigen Schlüssel verwenden, wird React Warnungen an Ihre Konsole ausgeben und Ihre App kann sich seltsam verhalten!

## Den Rest der App in Komponenten aufteilen

Da wir unsere wichtigste Komponente sortiert haben, können wir den Rest unserer App in Komponenten umwandeln. Indem wir uns daran erinnern, dass Komponenten entweder offensichtliche Teile der UI, wiederverwendete Teile der UI oder beides sind, können wir zwei weitere Komponenten erstellen:

- `<Form />`
- `<FilterButton />`

Da wir wissen, dass wir beide brauchen, können wir einige der Dateien zusammen in einem Terminalbefehl erstellen. Führen Sie diesen Befehl in Ihrem Terminal aus und achten Sie darauf, dass Sie sich im Stammverzeichnis Ihrer App befinden:

```bash
touch src/components/{Form,FilterButton}.jsx
```

### Die `<Form />`

Öffnen Sie `components/Form.jsx` und machen Sie Folgendes:

- Deklarieren Sie eine `Form()` Funktion und exportieren Sie sie am Ende der Datei.
- Kopieren Sie die `<form>` Tags und alles dazwischen aus `App.jsx` und fügen Sie sie in die `return` Anweisung von `Form()` ein.

Ihre `Form.jsx` Datei sollte so aussehen:

```jsx
function Form() {
  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
```

### Der `<FilterButton />`

Machen Sie dieselben Schritte, die Sie bei der Erstellung von `Form.jsx` gemacht haben, in `FilterButton.jsx`, aber benennen Sie die Komponente `FilterButton()` und kopieren Sie den HTML-Code für die erste Schaltfläche innerhalb von `<div className="filters btn-group stack-exception">` aus `App.jsx` in die `return` Anweisung.

Die Datei sollte so aussehen:

```jsx
function FilterButton() {
  return (
    <button type="button" className="btn toggle-btn" aria-pressed="true">
      <span className="visually-hidden">Show </span>
      <span>all </span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
```

> [!NOTE]
> Möglicherweise stellen Sie fest, dass wir hier denselben Fehler machen, den wir zuerst bei der `<Todo />` Komponente gemacht haben, indem jede Schaltfläche gleich ist. Das ist in Ordnung! Wir werden diese Komponente später in [Zurück zu den Filter-Schaltflächen](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons) beheben.

## Alle unsere Komponenten importieren

Lassen Sie uns unsere neuen Komponenten verwenden. Fügen Sie einige weitere `import` Anweisungen oben in `App.jsx` hinzu und referenzieren Sie die Komponenten, die wir gerade erstellt haben. Aktualisieren Sie dann die `return` Anweisung der `App()` Funktion, um unsere Komponenten zu rendern.

Wenn Sie fertig sind, liest `App.jsx` so:

```jsx
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  const taskList = props.tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
```

Damit sollte Ihre React-App im Grunde so rendern wie zuvor, aber mit Ihren glänzenden neuen Komponenten.

## Zusammenfassung

Und das war's für diesen Artikel — wir haben ausführlich behandelt, wie man seine App schön in Komponenten aufteilt und diese effizient rendert. Als nächstes schauen wir uns das Handling von Events in React an und beginnen mit dem Hinzufügen von Interaktivität.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}
