---
title: Unsere React-App in Komponenten aufteilen
short-title: React components
slug: Learn_web_development/Core/Frameworks_libraries/React_components
l10n:
  sourceCommit: 611edf6335e4a833a6f394d0d98b117e7b0a36bf
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}

Zu diesem Zeitpunkt ist unsere App ein Monolith. Bevor wir sie funktional machen können, müssen wir sie in handhabbare, beschreibende Komponenten aufteilen. React hat keine festen Regeln dafür, was eine Komponente ist und was nicht – das bleibt Ihnen überlassen! In diesem Artikel zeigen wir Ihnen einen sinnvollen Weg, unsere App in Komponenten aufzuteilen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen sowie dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Ein sinnvoller Ansatz zur Aufteilung unserer To-do-Listen-App in Komponenten.
      </td>
    </tr>
  </tbody>
</table>

## Unsere erste Komponente definieren

Das Definieren einer Komponente kann schwierig erscheinen, bis Sie etwas Übung darin haben, aber im Wesentlichen gilt:

- Wenn es einen offensichtlichen "Block" Ihrer App darstellt, ist es wahrscheinlich eine Komponente.
- Wenn es oft wiederverwendet wird, ist es wahrscheinlich eine Komponente.

Dieser zweite Punkt ist besonders wertvoll: Wenn Sie aus häufigen UI-Elementen eine Komponente machen, können Sie Ihren Code an einer Stelle ändern und diese Änderungen überall sehen, wo die Komponente verwendet wird. Sie müssen nicht sofort alles in Komponenten aufteilen. Lassen Sie uns den zweiten Punkt als Inspiration nehmen und aus dem am häufigsten wiederverwendeten, wichtigsten Teil der UI eine Komponente machen: ein To-do-Listen-Element.

## Ein `<Todo />` erstellen

Bevor wir eine Komponente erstellen können, sollten wir eine neue Datei dafür anlegen. Tatsächlich sollten wir ein Verzeichnis nur für unsere Komponenten erstellen. Stellen Sie sicher, dass Sie sich im Stammverzeichnis Ihrer App befinden, bevor Sie diese Befehle ausführen!

```bash
# create a `components` directory
mkdir src/components
# within `components`, create a file called `Todo.jsx`
touch src/components/Todo.jsx
```

Vergessen Sie nicht, Ihren Entwicklungsserver neu zu starten, falls Sie ihn für die vorherigen Befehle gestoppt haben!

Fügen Sie eine `Todo()`-Funktion in `Todo.jsx` hinzu. Hier definieren wir eine Funktion und exportieren sie:

```jsx
function Todo() {}

export default Todo;
```

Das ist bisher in Ordnung, aber unsere Komponente sollte etwas Nützliches zurückgeben! Gehen Sie zurück zu `src/App.jsx`, kopieren Sie das erste [`<li>`](/de/docs/Web/HTML/Reference/Elements/li) aus der ungeordneten Liste und fügen Sie es in `Todo.jsx` ein, sodass es folgendermaßen aussieht:

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

Jetzt haben wir etwas, das wir verwenden können. Fügen Sie in `App.jsx` die folgende Zeile am Anfang der Datei hinzu, um `Todo` zu importieren:

```jsx
import Todo from "./components/Todo";
```

Mit dieser importierten Komponente können Sie alle `<li>`-Elemente in `App.jsx` durch `<Todo />`-Komponentenaufrufe ersetzen. Ihre `<ul>` sollte folgendermaßen aussehen:

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

Wenn Sie zu Ihrer App zurückkehren, werden Sie etwas Unangenehmes bemerken: Ihre Liste wiederholt jetzt die erste Aufgabe dreimal!

![Unsere To-do-Listen-App, mit sich wiederholenden To-do-Komponenten, da das Label in der Komponente hartcodiert ist](todo-list-repeating-todos.png)

Wir wollen nicht nur essen; wir haben noch andere Dinge zu erledigen. Als nächstes schauen wir uns an, wie wir unterschiedliche Komponentenaufrufe einzigartige Inhalte rendern lassen können.

## Ein einzigartiges `<Todo />` erstellen

Komponenten sind mächtig, weil sie es uns ermöglichen, Teile unserer UI wiederzuverwenden und an einer Stelle auf die Quelle dieser UI zu verweisen. Das Problem ist, dass wir normalerweise nicht das gesamte einer Komponente wiederverwenden wollen; wir wollen die meisten Teile wiederverwenden und kleine Teile ändern. Hier kommen Props ins Spiel.

### Was steckt in einem `name`?

Um die Namen der Aufgaben, die wir erledigen möchten, zu verfolgen, sollten wir sicherstellen, dass jede `<Todo />`-Komponente einen eindeutigen Namen rendert.

Geben Sie in `App.jsx` jeder `<Todo />` ein Name-Prop. Verwenden wir die Namen unserer Aufgaben, die wir vorher hatten:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  <Todo name="Eat" />
  <Todo name="Sleep" />
  <Todo name="Repeat" />
</ul>
```

Wenn Ihr Browser aktualisiert wird, sehen Sie… genau dasselbe wie vorher. Wir haben unseren `<Todo />` einige Props gegeben, aber wir verwenden sie noch nicht. Gehen wir zurück zu `Todo.jsx` und beheben das.

Zuerst modifizieren Sie die Definition Ihrer `Todo()`-Funktion so, dass sie `props` als Parameter annimmt. Sie können `console.log()` verwenden, um Ihre Props zu überprüfen, wenn Sie möchten, dass sie von der Komponente korrekt empfangen werden.

Sobald Sie sicher sind, dass Ihre Komponente ihre Props erhält, können Sie jede Vorkommen von `Eat` durch Ihr `name`-Prop ersetzen, indem Sie `props.name` lesen. Denken Sie daran: `props.name` ist ein JSX-Ausdruck, daher müssen Sie ihn in geschweifte Klammern setzen.

Zusammengenommen sollte Ihre `Todo()`-Funktion folgendermaßen aussehen:

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

_Jetzt_ sollte Ihr Browser drei einzigartige Aufgaben anzeigen. Ein weiteres Problem bleibt jedoch: Sie sind alle standardmäßig aktiviert.

![Unsere To-do-Liste, mit verschiedenen To-do-Labels, da sie jetzt als Props in die Komponenten übergeben werden](todo-list-unique-todos.png)

### Ist es `completed`?

In unserer ursprünglichen statischen Liste war nur `Eat` aktiviert. Auch hier wollen wir den _größten_ Teil der UI, aus der eine `<Todo />`-Komponente besteht, wiederverwenden, aber eine Sache ändern. Das ist ein guter Job für ein weiteres Prop! Geben Sie Ihrem ersten `<Todo />`-Aufruf ein boolesches Prop von `completed`, und lassen Sie die anderen beiden so wie sie sind.

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  <Todo name="Eat" completed />
  <Todo name="Sleep" />
  <Todo name="Repeat" />
</ul>
```

Wie zuvor müssen wir zu `Todo.jsx` zurückkehren, um diese Props tatsächlich zu verwenden. Ändern Sie das `defaultChecked`-Attribut im `<input />`, sodass sein Wert dem `completed`-Prop entspricht. Sobald Sie fertig sind, wird das `<input />`-Element der Todo-Komponente folgendermaßen aussehen:

```jsx
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```

Und Ihr Browser sollte aktualisiert werden, sodass nur `Eat` ausgewählt ist:

![Unsere To-do-Listen-App, jetzt mit unterschiedlichen Überprüfungszuständen - einige Kontrollkästchen sind ausgewählt, andere nicht](todo-list-differing-checked-states.png)

Wenn Sie das `completed`-Prop jeder `<Todo />`-Komponente ändern, wird Ihr Browser die entsprechenden gerenderten Kontrollkästchen entsprechend aktivieren oder deaktivieren.

### Gimme some `id`, please

Wir haben noch _ein_ weiteres Problem: Unsere `<Todo />`-Komponente gibt jeder Aufgabe ein `id`-Attribut von `todo-0`. Dies ist aus mehreren Gründen schlecht:

- [`id`-Attribute](/de/docs/Web/HTML/Reference/Global_attributes/id) müssen eindeutig sein (sie werden als eindeutige Bezeichner für Dokumentfragmente, durch CSS, JavaScript usw. verwendet).
- Wenn `id`s nicht eindeutig sind, kann die Funktionalität von [label-Elementen](/de/docs/Web/HTML/Reference/Elements/label) brechen.

Das zweite Problem betrifft derzeit unsere App. Wenn Sie auf das Wort "Sleep" neben dem zweiten Kontrollkästchen klicken, werden Sie feststellen, dass das Kontrollkästchen "Eat" umgeschaltet wird, anstelle des Kontrollkästchens "Sleep". Dies liegt daran, dass das `<label>`-Element jedes Kontrollkästchens ein `htmlFor`-Attribut von `todo-0` hat. Die `<label>`s erkennen nur das erste Element mit einem bestimmten `id`-Attribut, was das von Ihnen beim Klicken auf die anderen Labels gesehene Problem verursacht.

Wir hatten eindeutige `id`-Attribute, bevor wir die `<Todo />`-Komponente erstellt haben. Lassen Sie uns diese zurückbringen, indem wir das Format von `todo-i` befolgen, wobei `i` jedes Mal um eins erhöht wird. Aktualisieren Sie die `Todo`-Komponenteninstanzen in `App.jsx`, um `id`-Props hinzuzufügen, wie folgt:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  <Todo name="Eat" id="todo-0" completed />
  <Todo name="Sleep" id="todo-1" />
  <Todo name="Repeat" id="todo-2" />
</ul>
```

> [!NOTE]
> Das `completed`-Prop steht hier zuletzt, weil es ein Boolesches ohne Zuordnung ist. Dies ist rein eine stilistische Konvention. Die Reihenfolge der Props spielt keine Rolle, da Props JavaScript-Objekte sind und JavaScript-Objekte nicht sortiert sind.

Gehen Sie nun zurück zu `Todo.jsx` und verwenden Sie das `id`-Prop. Es muss den Wert des `id`-Attributs des `<input />`-Elements sowie den Wert des `htmlFor`-Attributs seines `<label>` ersetzen:

```jsx
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>
```

Mit diesen Korrekturen werden die Kontrollkästchen beim Klicken auf die Labels neben den Kontrollkästchen wie erwartet aktiviert und deaktiviert.

## Bisher, so gut?

Bisher machen wir guten Gebrauch von React, aber wir könnten es besser machen! Unser Code ist repetitiv. Die drei Zeilen, die unsere `<Todo />`-Komponente rendern, sind fast identisch, mit nur einem Unterschied: dem Wert jedes Props.

Wir können unseren Code mit einer der Kernfunktionen von JavaScript bereinigen: Iteration. Um Iteration zu verwenden, sollten wir zunächst unsere Aufgaben überdenken.

## Aufgaben als Daten

Jede unserer Aufgaben enthält derzeit drei Informationen: ihren Namen, ob sie ausgewählt wurde und ihre eindeutige ID. Diese Daten lassen sich gut in einem Objekt darstellen. Da wir mehr als eine Aufgabe haben, wäre ein Array von Objekten eine gute Möglichkeit, diese Daten darzustellen.

Deklarieren Sie in `src/main.jsx` eine neue `const` unterhalb des letzten Imports, aber oberhalb von `ReactDOM.createRoot()`:

```jsx
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
```

> [!NOTE]
> Wenn Ihr Texteditor ein [ESLint](https://eslint.org/)-Plugin hat, sehen Sie möglicherweise eine Warnung zu dieser `DATA`-Konstanten. Diese Warnung stammt aus der von uns verwendeten ESLint-Konfiguration des Vite-Templates und gilt nicht für diesen Code. Sie können die Warnung sicher unterdrücken, indem Sie `// eslint-disable-next-line` über die `DATA`-Konstante hinzufügen.

Als nächstes werden wir `DATA` als `tasks`-Prop an `<App />` übergeben. Aktualisieren Sie Ihren `<App />`-Komponentenaufruf in `src/main.jsx`, sodass er folgendermaßen aussieht:

```jsx
<App tasks={DATA} />
```

Das `DATA`-Array ist jetzt innerhalb der App-Komponente als `props.tasks` verfügbar. Sie können `console.log()` verwenden, um es zu überprüfen, wenn Sie möchten.

> **Hinweis:** `ALL_CAPS`-Konstantennamen haben in JavaScript keine besondere Bedeutung; sie sind eine Konvention, die anderen Entwicklern sagt: "Diese Daten werden sich nach ihrer Definition hier nie ändern".

## Rendering mit Iteration

Um unser Array von Objekten zu rendern, müssen wir jedes Objekt in eine `<Todo />`-Komponente umwandeln. JavaScript gibt uns eine Array-Methode, um Elemente in etwas anderes zu transformieren: [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

Erstellen Sie in `App.jsx` eine neue `const` über der `return`-Anweisung der `App()`-Funktion namens `taskList`. Beginnen wir damit, jede Aufgabe im `props.tasks`-Array in ihren `name` zu transformieren. Der `?.`-Operator ermöglicht es uns, [optional chaining](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) durchzuführen, um zu überprüfen, ob `props.tasks` `undefined` oder `null` ist, bevor versucht wird, ein neues Array von Aufgabennamen zu erstellen:

```jsx
const taskList = props.tasks?.map((task) => task.name);
```

Versuchen wir, alle Kinder des `<ul>` mit `taskList` zu ersetzen:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  {taskList}
</ul>
```

Das bringt uns einen Teil des Weges zurück zur Darstellung aller Komponenten, aber wir haben noch mehr Arbeit zu erledigen: Der Browser rendert derzeit den Namen jeder Aufgabe als Klartext. Uns fehlt die HTML-Struktur – das `<li>` mit seinen Kontrollkästchen und Buttons!

![Unsere To-do-Listen-App zeigt die To-do-Element-Labels nur gebündelt auf einer Linie](todo-list-unstructured-names.png)

Um dies zu beheben, müssen wir eine `<Todo />`-Komponente aus unserer `map()`-Funktion zurückgeben – denken Sie daran, dass JSX wie JavaScript ist, daher können wir es zusammen mit allen anderen, vertrauteren JavaScript-Syntaxen verwenden. Lassen Sie uns Folgendes anstelle dessen versuchen, was wir bereits haben:

```jsx
const taskList = props.tasks?.map((task) => <Todo />);
```

Schauen Sie erneut auf Ihre App; jetzt sehen unsere Aufgaben mehr so aus wie früher, aber sie fehlen die Namen der Aufgaben selbst. Denken Sie daran, dass jede Aufgabe, über die wir iterieren, die `id`-, `name`- und `completed`-Eigenschaften enthält, die wir in unsere `<Todo />`-Komponente übergeben möchten. Wenn wir dieses Wissen zusammenbringen, erhalten wir Code wie diesen:

```jsx
const taskList = props.tasks?.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));
```

Jetzt sieht die App aus wie früher, und unser Code ist weniger repetitiv.

## Eindeutige Schlüssel

Jetzt, da React unsere Aufgaben aus einem Array rendert, muss es nachverfolgen, welche welche ist, um sie korrekt zu rendern. React versucht, eigene Vermutungen anzustellen, um Dinge zu verfolgen, aber wir können ihm helfen, indem wir ein `key`-Prop an unsere `<Todo />`-Komponenten übergeben. `key` ist ein spezielles Prop, das von React verwaltet wird – Sie können das Wort `key` für keinen anderen Zweck verwenden.

Da Schlüssel eindeutig sein sollten, werden wir die `id` jedes Aufgabenobjekts wiederverwenden als seinen Schlüssel. Aktualisieren Sie Ihre `taskList`-Konstante wie folgt:

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

**Sie sollten immer einen eindeutigen Schlüssel an alles, was Sie mit Iteration rendern, übergeben.** Nichts Offensichtliches wird sich in Ihrem Browser ändern, aber ohne eindeutige Schlüssel wird React Warnungen an Ihre Konsole ausgeben und Ihre App könnte sich seltsam verhalten!

## Die restliche App in Komponenten aufteilen

Jetzt, da wir unsere wichtigste Komponente sortiert haben, können wir den Rest unserer App in Komponenten umwandeln. Wenn wir uns daran erinnern, dass Komponenten entweder offensichtliche oder wiederverwendete UI-Teile oder beides sind, können wir zwei weitere Komponenten erstellen:

- `<Form />`
- `<FilterButton />`

Da wir wissen, dass wir beide benötigen, können wir einige der Datei-Erstellungsarbeiten zusammen in einen Terminalbefehl stapeln. Führen Sie diesen Befehl in Ihrem Terminal aus und achten Sie darauf, dass Sie sich im Stammverzeichnis Ihrer App befinden:

```bash
touch src/components/{Form,FilterButton}.jsx
```

### Das `<Form />`

Öffnen Sie `components/Form.jsx` und tun Sie Folgendes:

- Deklarieren Sie eine `Form()`-Funktion und exportieren Sie sie am Ende der Datei.
- Kopieren Sie die `<form>`-Tags und alles dazwischen aus `App.jsx` und fügen Sie sie in die `return`-Anweisung von `Form()` ein.

Ihre `Form.jsx`-Datei sollte folgendermaßen aussehen:

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

### Das `<FilterButton />`

Machen Sie dasselbe, was Sie getan haben, um `Form.jsx` in `FilterButton.jsx` zu erstellen, aber nennen Sie die Komponente `FilterButton()` und kopieren Sie das HTML für den ersten Button innerhalb von `<div className="filters btn-group stack-exception">` von `App.jsx` in die `return`-Anweisung.

Die Datei sollte folgendermaßen aussehen:

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
> Sie könnten bemerken, dass wir hier denselben Fehler machen wie anfangs für die `<Todo />`-Komponente, indem wir jeden Button gleich machen. Das ist in Ordnung! Wir werden diese Komponente später fixieren, in [Back to the filter buttons](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons).

## Alle unsere Komponenten importieren

Lassen Sie uns unsere neuen Komponenten nutzen. Fügen Sie oben in `App.jsx` einige weitere `import`-Anweisungen hinzu und verweisen Sie auf die neu erstellten Komponenten. Dann aktualisieren Sie die `return`-Anweisung von `App()`, sodass sie unsere Komponenten rendert.

Wenn Sie fertig sind, wird `App.jsx` folgendermaßen aussehen:

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

Mit diesem Stand sollte Ihre React-App im Wesentlichen gleich wie vorher, jedoch mit Ihren glänzenden neuen Komponenten gerendert werden.

## Zusammenfassung

Und das war's für diesen Artikel – wir haben ausführlich behandelt, wie Sie Ihre App sinnvoll in Komponenten aufteilen und effizient rendern. Als Nächstes werden wir uns mit der Behandlung von Ereignissen in React befassen und beginnen, etwas Interaktivität hinzuzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning", "Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}
