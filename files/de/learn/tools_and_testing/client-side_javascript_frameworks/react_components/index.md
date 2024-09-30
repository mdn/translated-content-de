---
title: Komponentisieren unserer React-App
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

An diesem Punkt ist unsere App ein Monolith. Bevor wir sie funktional gestalten können, müssen wir sie in handhabbare, beschreibende Komponenten aufteilen. React hat keine strengen Regeln dafür, was eine Komponente ist und was nicht – das liegt bei Ihnen! In diesem Artikel zeigen wir Ihnen eine sinnvolle Möglichkeit, unsere App in Komponenten aufzuteilen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen,
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Befehlszeile</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Eine sinnvolle Methode zeigen, wie unsere To-Do-Listen-App in Komponenten aufgeteilt werden kann.
      </td>
    </tr>
  </tbody>
</table>

## Definieren unserer ersten Komponente

Das Definieren einer Komponente kann knifflig erscheinen, bis Sie ein wenig Übung darin haben, aber das Wesentliche ist:

- Wenn es einen offensichtlichen "Block" Ihrer App darstellt, ist es wahrscheinlich eine Komponente.
- Wenn es oft wiederverwendet wird, ist es wahrscheinlich eine Komponente.

Dieser zweite Punkt ist besonders wertvoll: Aus häufig verwendeten UI-Elementen eine Komponente zu machen, ermöglicht es Ihnen, Ihren Code an einem Ort zu ändern und diese Änderungen überall dort zu sehen, wo diese Komponente verwendet wird. Sie müssen nicht sofort alles in Komponenten aufteilen. Lassen Sie uns den zweiten Punkt als Inspiration nehmen und eine Komponente aus dem am häufigsten verwendeten, wichtigsten Teil der Benutzeroberfläche erstellen: einem To-Do-Listen-Eintrag.

## Erstellen eines `<Todo />`

Bevor wir eine Komponente erstellen können, sollten wir eine neue Datei dafür erstellen. Tatsächlich sollten wir ein Verzeichnis nur für unsere Komponenten erstellen. Stellen Sie sicher, dass Sie sich im Root-Verzeichnis Ihrer App befinden, bevor Sie diese Befehle ausführen!

```bash
# create a `components` directory
mkdir src/components
# within `components`, create a file called `Todo.jsx`
touch src/components/Todo.jsx
```

Vergessen Sie nicht, Ihren Entwicklungsserver neu zu starten, wenn Sie ihn gestoppt haben, um die vorherigen Befehle auszuführen!

Fügen Sie eine `Todo()` Funktion in `Todo.jsx` hinzu. Hier definieren wir eine Funktion und exportieren sie:

```jsx
function Todo() {}

export default Todo;
```

Das ist bisher in Ordnung, aber unsere Komponente sollte etwas Nützliches zurückgeben! Gehen Sie zurück zu `src/App.jsx`, kopieren Sie das erste [`<li>`](/de/docs/Web/HTML/Element/li) aus der ungeordneten Liste und fügen Sie es in `Todo.jsx` ein, sodass es so aussieht:

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

Mit dieser Komponente importiert, können Sie alle `<li>`-Elemente in `App.jsx` durch `<Todo />`-Komponentenaufrufe ersetzen. Ihr `<ul>` sollte so aussehen:

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

![Unsere To-Do-Listen-App, mit sich wiederholenden To-Do-Komponenten, weil das Label in der Komponente fest codiert ist](todo-list-repeating-todos.png)

Wir wollen nicht nur essen; wir haben noch andere Dinge zu tun. Als nächstes untersuchen wir, wie wir verschiedene Komponentenaufrufe dazu bringen können, einzigartigen Inhalt anzuzeigen.

## Erstellen eines einzigartigen `<Todo />`

Komponenten sind mächtig, weil sie es uns ermöglichen, Teile unserer Benutzeroberfläche wiederzuverwenden und auf eine Quelle dieser Benutzeroberfläche zu verweisen. Das Problem ist, dass wir normalerweise nicht alles in jeder Komponente wiederverwenden wollen; wir möchten die meisten Teile und kleine Teile ändern. Hier kommen Props ins Spiel.

### Was ist in einem `name`?

Um die Namen der Aufgaben zu verfolgen, die wir erledigen möchten, sollten wir sicherstellen, dass jede `<Todo />`-Komponente einen einzigartigen Namen rendert.

Geben Sie in `App.jsx` jeder `<Todo />` einen Namens-Prop. Verwenden wir die Namen unserer vorherigen Aufgaben:

```jsx
<Todo name="Eat" />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

Wenn Ihr Browser aktualisiert wird, sehen Sie... genau das Gleiche wie zuvor. Wir haben unseren `<Todo />`-Komponenten einige Props gegeben, aber wir verwenden sie noch nicht. Gehen wir zurück zu `Todo.jsx` und beheben das.

Modifizieren Sie zunächst die Definition Ihrer `Todo()`-Funktion, sodass sie `props` als Parameter nimmt. Sie können `console.log()` Ihre Props verwenden, wenn Sie überprüfen möchten, ob sie von der Komponente korrekt empfangen werden.

Sobald Sie sicher sind, dass Ihre Komponente ihre Props erhält, können Sie jede Vorkommen von `Eat` durch Ihren `name`-Prop ersetzen, indem Sie `props.name` lesen. Denken Sie daran: `props.name` ist ein JSX-Ausdruck, also müssen Sie ihn in geschweifte Klammern einschließen.

Wenn Sie alles zusammenfügen, sollte Ihre `Todo()`-Funktion so aussehen:

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

![Unsere To-Do-Liste, mit unterschiedlichen Todo-Labels, jetzt, da sie als Props in die Komponenten übergeben werden](todo-list-unique-todos.png)

### Ist es `completed`?

In unserer ursprünglichen statischen Liste war nur `Eat` markiert. Wieder einmal wollen wir _meistens_ die UI, die eine `<Todo />`-Komponente ausmacht, wiederverwenden, aber eine Sache ändern. Das ist ein guter Job für ein weiteres Prop! Geben Sie Ihrem ersten `<Todo />`-Aufruf ein boolesches `completed`-Prop, und lassen Sie die anderen beiden so wie sie sind.

```jsx
<Todo name="Eat" completed />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

Wie zuvor, müssen wir zu `Todo.jsx` zurückkehren, um diese Props tatsächlich zu verwenden. Ändern Sie das `defaultChecked`-Attribut auf dem `<input />`, sodass sein Wert gleich dem `completed`-Prop ist. Sobald Sie fertig sind, wird das `<input />`-Element der `Todo`-Komponente so aussehen:

```jsx
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```

Und Ihr Browser sollte so aktualisiert werden, dass nur `Eat` markiert ist:

![Unsere To-Do-Listen-App, jetzt mit unterschiedlich aktivierten Zuständen - einige Kontrollkästchen sind aktiviert, andere nicht](todo-list-differing-checked-states.png)

Wenn Sie das `completed`-Prop jeder `<Todo />`-Komponente ändern, wird Ihr Browser die entsprechenden gerenderten Kontrollkästchen entsprechend aktivieren oder deaktivieren.

### Geben Sie mir etwas `id`, bitte

Wir haben noch _ein weiteres_ Problem: Unsere `<Todo />`-Komponente gibt jeder Aufgabe ein `id`-Attribut von `todo-0`. Das ist aus mehreren Gründen schlecht:

- [`id`-Attribute](/de/docs/Web/HTML/Global_attributes/id) müssen eindeutig sein (sie werden als eindeutige Kennungen für Dokumentfragmente verwendet, von CSS, JavaScript, etc.).
- Wenn `id`s nicht eindeutig sind, kann die Funktionalität von [Label-Elementen](/de/docs/Web/HTML/Element/label) fehlerhaft sein.

Das zweite Problem betrifft unsere App im Moment. Wenn Sie auf das Wort "Sleep" neben dem zweiten Kontrollkästchen klicken, wird das Kontrollkästchen "Eat" umgeschaltet, anstatt das Kontrollkästchen "Sleep". Dies liegt daran, dass jedes `<label>`-Element der Kontrollkästchen ein `htmlFor`-Attribut von `todo-0` hat. Die `<label>`s erkennen nur das erste Element mit einem gegebenen `id`-Attribut an, was das Problem verursacht, das Sie beim Klicken auf die anderen Labels sehen.

Vor der Erstellung der `<Todo />`-Komponente hatten wir eindeutige `id`-Attribute. Lassen Sie uns sie zurückbringen und der Formatierung `todo-i` folgen, wobei `i` jedes Mal um eins erhöht wird. Aktualisieren Sie die `Todo`-Komponenteninstanzen in `App.jsx`, um `id`-Props hinzuzufügen, wie folgt:

```jsx
<Todo name="Eat" id="todo-0" completed />
<Todo name="Sleep" id="todo-1" />
<Todo name="Repeat" id="todo-2" />
```

> [!NOTE]
> Das `completed`-Prop steht hier zuletzt, weil es ein Boolescher ist und keine Zuweisung hat. Dies ist rein eine stilistische Konvention. Die Reihenfolge der Props spielt keine Rolle, da Props JavaScript-Objekte sind und JavaScript-Objekte ungeordnet sind.

Gehen Sie nun zurück zu `Todo.jsx` und nutzen Sie das `id`-Prop. Es muss den Wert des `id`-Attributs im `<input />`-Element sowie den Wert des `htmlFor`-Attributs im `<label>`-Element ersetzen:

```jsx
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>
```

Mit diesen Korrekturen wird das Klicken auf die Labels neben jedem Kontrollkästchen das tun, was wir erwarten – die Kontrollkästchen neben diesen Labels aktivieren und deaktivieren.

## Bisher, so gut?

Bisher nutzen wir React gut, aber wir könnten es besser machen! Unser Code ist repetitiv. Die drei Zeilen, die unsere `<Todo />`-Komponente rendern, sind fast identisch, mit nur einem Unterschied: dem Wert jedes Props.

Wir können unseren Code mit einer der Kernfähigkeiten von JavaScript aufräumen: der Iteration. Um Iteration zu verwenden, sollten wir unsere Aufgaben neu überdenken.

## Aufgaben als Daten

Jede unserer Aufgaben enthält derzeit drei Informationen: ihren Namen, ob sie aktiviert ist, und ihre eindeutige ID. Diese Daten lassen sich gut in ein Objekt übersetzen. Da wir mehr als eine Aufgabe haben, wäre ein Array von Objekten gut geeignet, um diese Daten darzustellen.

Deklarieren Sie in `src/main.jsx` eine neue `const` unter dem letzten Import, aber über `ReactDOM.createRoot()`:

```jsx
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
```

> [!NOTE]
> Wenn Ihr Texteditor ein [ESLint](https://eslint.org/) Plugin hat, könnten Sie eine Warnung über diese `DATA`-Konstante sehen. Diese Warnung stammt von der ESLint-Konfiguration, die durch das von uns verwendete Vite-Template geliefert wird, und sie gilt nicht für diesen Code. Sie können die Warnung sicher unterdrücken, indem Sie `// eslint-disable-next-line` über der `DATA`-Konstante hinzufügen.

Als nächstes übergeben wir `DATA` an `<App />` als ein Prop namens `tasks`. Aktualisieren Sie Ihren `<App />`-Komponentenaufruf in `src/main.jsx`, sodass er so aussieht:

```jsx
<App tasks={DATA} />
```

Das `DATA`-Array ist jetzt innerhalb der App-Komponente als `props.tasks` verfügbar. Sie können `console.log()` verwenden, um es zu überprüfen, wenn Sie möchten.

> **Hinweis:** Konstantennamen in `ALL_CAPS` haben keine besondere Bedeutung in JavaScript; sie sind eine Konvention, die anderen Entwicklern sagt "diese Daten werden sich hier nach der Definition nicht ändern".

## Rendering mit Iteration

Um unser Array von Objekten zu rendern, müssen wir jedes Objekt in eine `<Todo />`-Komponente umwandeln. JavaScript gibt uns eine Array-Methode, um Elemente in etwas anderes zu transformieren: [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

Erstellen Sie in `App.jsx` eine neue `const` über der `return`-Anweisung der `App()`-Funktion, die `taskList` genannt wird. Beginnen wir damit, jede Aufgabe im `props.tasks`-Array in ihren `name` zu transformieren. Der `?.`-Operator erlaubt uns, eine [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) durchzuführen, um zu überprüfen, ob `props.tasks` `undefined` oder `null` ist, bevor Sie versuchen, ein neues Array von Aufgabennamen zu erstellen:

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

Dies bringt uns ein Stück weiter dahin, alle Komponenten wieder anzuzeigen, aber wir haben noch mehr zu tun: Der Browser rendert derzeit jeden Aufgabennamen als normalen Text. Uns fehlt unsere HTML-Struktur – die `<li>` und ihre Kontrollkästchen und Schaltflächen!

![Unsere To-Do-Listen-App mit den To-Do-Item-Labels, die einfach zusammengeschoben auf einer Linie angezeigt werden](todo-list-unstructured-names.png)

Um dies zu beheben, müssen wir eine `<Todo />`-Komponente aus unserer `map()`-Funktion zurückgeben – denken Sie daran, dass JSX JavaScript ist, sodass wir es zusammen mit jeder anderen, vertrauteren JavaScript-Syntax verwenden können. Versuchen wir das Folgende anstelle dessen, was wir bereits haben:

```jsx
const taskList = props.tasks?.map((task) => <Todo />);
```

Schauen Sie sich Ihre App noch einmal an; jetzt sehen unsere Aufgaben mehr aus wie früher, aber ihnen fehlen die Namen der Aufgaben selbst. Denken Sie daran, dass jede Aufgabe, die wir durchlaufen, die `id`, `name` und `completed`-Eigenschaften enthält, die wir an unsere `<Todo />`-Komponente übergeben möchten. Wenn wir dieses Wissen zusammenfügen, erhalten wir Code wie diesen:

```jsx
const taskList = props.tasks?.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));
```

Jetzt sieht die App aus wie zuvor, und unser Code ist weniger repetitiv.

## Einzigartige Schlüssel

Da React unsere Aufgaben jetzt aus einem Array rendert, muss es den Überblick behalten, welche welche ist, um sie korrekt darzustellen. React versucht, seine eigene Vermutung zu machen, um den Überblick zu behalten, aber wir können ihm helfen, indem wir ein `key`-Prop an unsere `<Todo />`-Komponenten übergeben. `key` ist ein spezielles Prop, das von React verwaltet wird – Sie können das Wort `key` für keinen anderen Zweck verwenden.

Da Schlüssel einzigartig sein sollten, werden wir die `id` jedes Aufgabenobjekts als seinen Schlüssel wiederverwenden. Aktualisieren Sie Ihre `taskList`-Konstante wie folgt:

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

**Sie sollten immer einen eindeutigen Schlüssel an alles übergeben, was Sie mit Iteration rendern.** In Ihrem Browser wird sich nichts Offensichtliches ändern, aber wenn Sie keine eindeutigen Schlüssel verwenden, wird React Warnungen in Ihre Konsole protokollieren und Ihre App kann sich seltsam verhalten!

## Komponentisieren des restlichen Teils der App

Da wir unsere wichtigste Komponente organisiert haben, können wir den Rest unserer App in Komponenten umwandeln. Erinnert man sich daran, dass Komponenten entweder offensichtliche Teile der Benutzeroberfläche, wiederverwendete Teile der Benutzeroberfläche oder beides sind, können wir zwei weitere Komponenten erstellen:

- `<Form />`
- `<FilterButton />`

Da wir wissen, dass wir beide benötigen, können wir einige der Dateierstellungsarbeiten zusammen in einem Terminalbefehl erledigen. Führen Sie diesen Befehl in Ihrem Terminal aus und achten Sie darauf, dass Sie sich im Root-Verzeichnis Ihrer App befinden:

```bash
touch src/components/{Form,FilterButton}.jsx
```

### Das `<Form />`

Öffnen Sie `components/Form.jsx` und führen Sie die folgenden Schritte aus:

- Deklarieren Sie eine `Form()`-Funktion und exportieren Sie sie am Ende der Datei.
- Kopieren Sie die `<form>`-Tags und alles dazwischen aus `App.jsx` und fügen Sie sie in die `return`-Anweisung von `Form()` ein.

Ihre Datei `Form.jsx` sollte so aussehen:

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

Machen Sie dasselbe, was Sie getan haben, um `Form.jsx` in `FilterButton.jsx` zu erstellen, aber nennen Sie die Komponente `FilterButton()` und kopieren Sie das HTML für die erste Schaltfläche innerhalb der `<div className="filters btn-group stack-exception">` aus `App.jsx` in die `return`-Anweisung.

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
> Möglicherweise bemerken Sie, dass wir hier denselben Fehler machen, den wir zuerst bei der `<Todo />`-Komponente gemacht haben, nämlich dass jede Schaltfläche gleich sein wird. Das ist in Ordnung! Wir werden diese Komponente später reparieren, in [Zurück zu den Filter-Schaltflächen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons).

## Importieren all unserer Komponenten

Lassen Sie uns unsere neuen Komponenten verwenden. Fügen Sie weitere `import`-Anweisungen oben in `App.jsx` hinzu und referenzieren Sie die Komponenten, die wir gerade erstellt haben. Dann aktualisieren Sie die `return`-Anweisung von `App()`, sodass sie unsere Komponenten rendert.

Wenn Sie fertig sind, wird `App.jsx` so aussehen:

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

Damit sollte Ihre React-App im Grunde genauso gerendert werden wie zuvor, aber mit Ihren glänzenden neuen Komponenten.

## Zusammenfassung

Das war's für diesen Artikel – wir sind ausführlich darauf eingegangen, wie Sie Ihre App sinnvoll in Komponenten aufteilen und diese effizient rendern können. Als nächstes werden wir uns mit der Ereignisbehandlung in React befassen und beginnen, ein wenig Interaktivität hinzuzufügen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
