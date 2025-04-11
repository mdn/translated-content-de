---
title: Komponentisierung unserer React-App
short-title: React components
slug: Learn_web_development/Core/Frameworks_libraries/React_components
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}

Bis zu diesem Punkt ist unsere App ein Monolith. Bevor wir sie dazu bringen können, etwas zu tun, müssen wir sie in handhabbare, beschreibende Komponenten zerlegen. React hat keine strikten Regeln dafür, was eine Komponente ist oder nicht – das liegt bei Ihnen! In diesem Artikel zeigen wir Ihnen eine sinnvolle Möglichkeit, unsere App in Komponenten zu zerlegen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen sowie dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Befehlszeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Eine sinnvolle Methode, unsere Todo-Listen-App in Komponenten zu zerlegen.
      </td>
    </tr>
  </tbody>
</table>

## Definieren unserer ersten Komponente

Das Definieren einer Komponente kann schwierig erscheinen, bis Sie etwas Übung haben, aber das Wesentliche ist:

- Wenn es einen offensichtlichen "Teil" Ihrer App darstellt, ist es wahrscheinlich eine Komponente.
- Wenn es oft wiederverwendet wird, ist es wahrscheinlich eine Komponente.

Dieser zweite Punkt ist besonders wertvoll: Aus häufig verwendeten UI-Elementen eine Komponente zu machen, ermöglicht es Ihnen, Ihren Code an einer Stelle zu ändern und diese Änderungen überall dort zu sehen, wo die Komponente verwendet wird. Sie müssen nicht sofort alles in Komponenten aufteilen. Lassen Sie uns den zweiten Punkt als Inspiration nehmen und eine Komponente aus dem am häufigsten wiederverwendeten, wichtigsten Teil der UI machen: einem Todo-Listen-Element.

## Erstellen eines `<Todo />`

Bevor wir eine Komponente erstellen können, sollten wir eine neue Datei dafür erstellen. Tatsächlich sollten wir ein Verzeichnis nur für unsere Komponenten erstellen. Stellen Sie sicher, dass Sie sich im Stammverzeichnis Ihrer App befinden, bevor Sie diese Befehle ausführen!

```bash
# create a `components` directory
mkdir src/components
# within `components`, create a file called `Todo.jsx`
touch src/components/Todo.jsx
```

Vergessen Sie nicht, Ihren Entwicklungsserver neu zu starten, wenn Sie ihn zum Ausführen der vorherigen Befehle gestoppt haben!

Lassen Sie uns eine `Todo()`-Funktion in `Todo.jsx` hinzufügen. Hier definieren wir eine Funktion und exportieren sie:

```jsx
function Todo() {}

export default Todo;
```

Das ist bisher in Ordnung, aber unsere Komponente sollte etwas Nützliches zurückgeben! Gehen Sie zurück zu `src/App.jsx`, kopieren Sie das erste [`<li>`](/de/docs/Web/HTML/Reference/Elements/li) aus der ungeordneten Liste und fügen Sie es in `Todo.jsx` ein, sodass es so aussieht:

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

Jetzt haben wir etwas, das wir verwenden können. Fügen Sie in `App.jsx` folgende Zeile am Anfang der Datei ein, um `Todo` zu importieren:

```jsx
import Todo from "./components/Todo";
```

Mit dieser importierten Komponente können Sie alle `<li>`-Elemente in `App.jsx` durch `<Todo />`-Komponentenaufrufe ersetzen. Ihre `<ul>`-Liste sollte so aussehen:

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

![Unsere Todo-Listen-App, mit sich wiederholenden Todo-Komponenten, da das Label in der Komponente fest kodiert ist](todo-list-repeating-todos.png)

Wir wollen nicht nur essen; wir haben noch andere Dinge zu – na ja – erledigen. Als nächstes schauen wir uns an, wie wir unterschiedliche Komponentenaufrufe einzigartigen Inhalt rendern lassen können.

## Erstellen eines einzigartigen `<Todo />`

Komponenten sind leistungsfähig, weil sie es uns ermöglichen, Teile unserer UI wiederzuverwenden und sich auf eine Stelle als Quelle dieser UI zu beziehen. Das Problem ist, dass wir normalerweise nicht alle Teile einer Komponente wiederverwenden wollen; wir wollen die meisten Teile wiederverwenden und kleine Teile ändern. Hier kommen Props ins Spiel.

### Was steckt in einem `name`?

Um die Namen der Aufgaben zu verfolgen, die wir erledigen möchten, sollten wir sicherstellen, dass jede `<Todo />`-Komponente einen einzigartigen Namen rendert.

Geben Sie in `App.jsx` jeder `<Todo />` einen Namens-Prop. Verwenden wir die Namen unserer vorherigen Aufgaben:

```jsx
<Todo name="Eat" />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

Wenn Ihr Browser aktualisiert, sehen Sie… genau dasselbe wie vorher. Wir haben unserer `<Todo />` einige Props gegeben, aber wir verwenden sie noch nicht. Lassen Sie uns zurück zu `Todo.jsx` gehen und das korrigieren.

Ändern Sie zuerst Ihre `Todo()`-Funktionsdefinition, damit sie `props` als Parameter nimmt. Sie können `console.log()` Ihre Props verwenden, wenn Sie überprüfen möchten, ob sie richtig von der Komponente empfangen werden.

Sobald Sie sich sicher sind, dass Ihre Komponente ihre Props erhält, können Sie jeden Auftritt von `Eat` durch Ihren `name`-Prop ersetzen, indem Sie `props.name` lesen. Denken Sie daran: `props.name` ist ein JSX-Ausdruck, also müssen Sie ihn in geschweifte Klammern setzen.

Wenn Sie all das zusammenfügen, sollte Ihre `Todo()`-Funktion so aussehen:

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

_Jetzt_ sollte Ihr Browser drei einzigartige Aufgaben anzeigen. Ein weiteres Problem bleibt jedoch bestehen: Sie sind alle standardmäßig angekreuzt.

![Unsere Todo-Liste, mit unterschiedlichen Todo-Labels, die jetzt in die Komponenten als Props übergeben werden](todo-list-unique-todos.png)

### Ist es `completed`?

In unserer ursprünglichen statischen Liste war nur `Eat` angekreuzt. Noch einmal wollen wir _die meisten_ UI-Elemente wiederverwenden, die eine `<Todo />`-Komponente ausmachen, aber eines ändern. Das ist ein guter Job für einen weiteren Prop! Geben Sie Ihrem ersten `<Todo />`-Aufruf einen booleschen Prop von `completed` und lassen Sie die anderen beiden wie sie sind.

```jsx
<Todo name="Eat" completed />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

Wie zuvor müssen wir zu `Todo.jsx` zurückkehren, um diese Props tatsächlich zu verwenden. Ändern Sie das `defaultChecked`-Attribut im `<input />`, damit sein Wert dem `completed`-Prop entspricht. Sobald Sie fertig sind, wird das `<input />`-Element der Todo-Komponente so aussehen:

```jsx
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```

Und Ihr Browser sollte aktualisiert werden, um nur `Eat` als angekreuzt zu zeigen:

![Unsere Todo-Listen-App, jetzt mit unterschiedlichen angekreuzten Zuständen - einige Checkboxen sind angekreuzt, andere nicht](todo-list-differing-checked-states.png)

Wenn Sie den `completed`-Prop jeder `<Todo />`-Komponente ändern, wird Ihr Browser die entsprechenden gerenderten Checkboxen entsprechend an- oder abkreuzen.

### Gib mir bitte eine `id`

Wir haben noch _ein weiteres_ Problem: Unsere `<Todo />`-Komponente gibt jeder Aufgabe ein `id`-Attribut von `todo-0`. Das ist aus ein paar Gründen schlecht:

- [`id`-Attribute](/de/docs/Web/HTML/Reference/Global_attributes/id) müssen einzigartig sein (sie werden als eindeutige Bezeichner für Dokumentfragmente, durch CSS, JavaScript usw. verwendet).
- Wenn `id`s nicht einzigartig sind, kann die Funktionalität von [Label-Elementen](/de/docs/Web/HTML/Reference/Elements/label) brechen.

Das zweite Problem betrifft unsere App gerade jetzt. Wenn Sie auf das Wort "Sleep" neben der zweiten Checkbox klicken, werden Sie bemerken, dass die "Eat"-Checkbox umgeschaltet wird, anstatt der "Sleep"-Checkbox. Das liegt daran, dass jedes `<label>`-Element einer Checkbox ein `htmlFor`-Attribut von `todo-0` hat. Die `<label>`s erkennen nur das erste Element mit einem gegebenen `id`-Attribut an, was das Problem verursacht, das Sie sehen, wenn Sie auf die anderen Labels klicken.

Vor der Erstellung der `<Todo />`-Komponente hatten wir einzigartige `id`-Attribute. Lassen Sie uns sie zurückbringen, indem wir dem Format `todo-i` folgen, wobei `i` jedes Mal um eins größer wird. Aktualisieren Sie die `Todo`-Komponenteninstanzen innerhalb von `App.jsx`, um `id`-Props hinzuzufügen, wie folgt:

```jsx
<Todo name="Eat" id="todo-0" completed />
<Todo name="Sleep" id="todo-1" />
<Todo name="Repeat" id="todo-2" />
```

> [!NOTE]
> Der `completed`-Prop ist hier zuletzt, weil er ein Boolean ohne Zuweisung ist. Das ist rein eine stilistische Konvention. Die Reihenfolge der Props spielt keine Rolle, da Props JavaScript-Objekte sind und JavaScript-Objekte ungeordnet sind.

Kehren Sie nun zu `Todo.jsx` zurück und nutzen Sie den `id`-Prop. Er muss den Wert des `id`-Attributs des `<input />`-Elements sowie den Wert des `htmlFor`-Attributs seines `<label>` ersetzen:

```jsx
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>
```

Mit diesen Korrekturen wird das Klicken auf die Labels neben jeder Checkbox das tun, was wir erwarten – die Checkboxen neben diesen Labels an- und abkreuzen.

## Alles in Ordnung bisher?

Wir machen bisher guten Gebrauch von React, aber wir könnten es besser machen! Unser Code ist repetitiv. Die drei Zeilen, die unsere `<Todo />`-Komponente rendern, sind fast identisch, mit nur einem Unterschied: dem Wert jedes Props.

Wir können unseren Code mit einer der Kernfähigkeiten von JavaScript aufräumen: Iteration. Um Iteration zu verwenden, sollten wir zuerst über unsere Aufgaben nachdenken.

## Aufgaben als Daten

Jede unserer Aufgaben enthält derzeit drei Informationen: ihren Namen, ob sie angekreuzt wurde, und ihre eindeutige ID. Diese Daten lassen sich gut in ein Objekt übersetzen. Da wir mehr als eine Aufgabe haben, würde ein Array von Objekten gut zur Darstellung dieser Daten passen.

Deklarieren Sie in `src/main.jsx` eine neue `const` unterhalb des letzten Imports, aber oberhalb von `ReactDOM.createRoot()`:

```jsx
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
```

> [!NOTE]
> Wenn Ihr Texteditor ein [ESLint](https://eslint.org/)-Plugin hat, sehen Sie möglicherweise eine Warnung zu dieser `DATA`-Konstante. Diese Warnung stammt aus der ESLint-Konfiguration, die von der Vite-Vorlage bereitgestellt wird, die wir verwendet haben, und sie gilt nicht für diesen Code. Sie können die Warnung sicher unterdrücken, indem Sie `// eslint-disable-next-line` zur Zeile oberhalb der `DATA`-Konstante hinzufügen.

Als Nächstes werden wir `DATA` an `<App />` als Prop namens `tasks` übergeben. Aktualisieren Sie Ihren `<App />`-Komponentenaufruf innerhalb von `src/main.jsx`, damit er so aussieht:

```jsx
<App tasks={DATA} />
```

Das `DATA`-Array ist nun innerhalb der App-Komponente als `props.tasks` verfügbar. Sie können `console.log()` verwenden, um es zu überprüfen, wenn Sie möchten.

> **Hinweis:** `ALL_CAPS`-Konstantennamen haben keine besondere Bedeutung in JavaScript; sie sind eine Konvention, die anderen Entwicklern sagt: "Diese Daten werden sich nach ihrer Definition hier nicht mehr ändern".

## Rendering mit Iteration

Um unser Array von Objekten zu rendern, müssen wir jedes Objekt in eine `<Todo />`-Komponente umwandeln. JavaScript gibt uns eine Array-Methode, um Elemente in etwas anderes zu transformieren: [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

Erstellen Sie innerhalb von `App.jsx` eine neue `const` oberhalb der `return`-Anweisung der `App()`-Funktion namens `taskList`. Beginnen wir damit, jede Aufgabe im `props.tasks`-Array in ihren `name` zu transformieren. Der `?.`-Operator erlaubt es uns, [Optional Chaining](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) zu verwenden, um zu überprüfen, ob `props.tasks` `undefined` oder `null` ist, bevor wir versuchen, ein neues Array von Aufgabennamen zu erstellen:

```jsx
const taskList = props.tasks?.map((task) => task.name);
```

Versuchen wir, alle Kinder der `<ul>` durch `taskList` zu ersetzen:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  {taskList}
</ul>
```

Das bringt uns ein Stück weiter, um alle Komponenten wieder anzuzeigen, aber wir haben noch mehr Arbeit zu leisten: Der Browser rendert derzeit den Namen jeder Aufgabe als reinen Text. Uns fehlt unsere HTML-Struktur – die `<li>` und ihre Checkboxen und Buttons!

![Unsere Todo-Listen-App mit den Task-Namen, die nur gebündelt in einer Zeile angezeigt werden](todo-list-unstructured-names.png)

Um dies zu beheben, müssen wir eine `<Todo />`-Komponente aus unserer `map()`-Funktion zurückgeben – erinnern Sie sich daran, dass JSX JavaScript ist, weshalb wir es zusammen mit jeder anderen, vertrauteren JavaScript-Syntax verwenden können. Lassen Sie uns folgendes ausprobieren, anstelle dessen, was wir bereits haben:

```jsx
const taskList = props.tasks?.map((task) => <Todo />);
```

Schauen Sie sich Ihre App erneut an; jetzt sehen unsere Aufgaben mehr so aus wie zuvor, aber ihnen fehlen die Namen der Aufgaben selbst. Denken Sie daran, dass jede Aufgabe, die wir durchgehen, die Eigenschaften `id`, `name` und `completed` enthält, die wir an unsere `<Todo />`-Komponente übergeben möchten. Wenn wir dieses Wissen zusammenfügen, erhalten wir Code wie diesen:

```jsx
const taskList = props.tasks?.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));
```

Jetzt sieht die App so aus, wie sie es zuvor tat, und unser Code ist weniger repetitiv.

## Einzigartige Schlüssel

Jetzt, da React unsere Aufgaben aus einem Array rendert, muss es nachverfolgen, welche Aufgabe welche ist, um sie ordnungsgemäß zu rendern. React versucht, seine eigenen Vermutungen anzustellen, um die Dinge nachzuverfolgen, aber wir können ihm helfen, indem wir unseren `<Todo />`-Komponenten einen `key`-Prop übergeben. `key` ist ein spezieller Prop, der von React verwaltet wird – Sie können das Wort `key` nicht für einen anderen Zweck verwenden.

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

**Sie sollten immer einen eindeutigen Schlüssel an alles übergeben, was Sie mit Iteration rendern.** Nichts Offensichtliches wird sich in Ihrem Browser ändern, aber wenn Sie keine eindeutigen Schlüssel verwenden, wird React Warnmeldungen in Ihre Konsole ausgeben und Ihre App kann sich seltsam verhalten!

## Die restliche App in Komponenten umwandeln

Jetzt, da wir unsere wichtigste Komponente sortiert haben, können wir den Rest unserer App in Komponenten umwandeln. Da Komponenten entweder offensichtliche UI-Teile, wiederverwendete UI-Teile oder beides sind, können wir zwei weitere Komponenten erstellen:

- `<Form />`
- `<FilterButton />`

Da wir wissen, dass wir beide benötigen, können wir einige der Dateierstellungsarbeiten in einem Terminalbefehl zusammenfassen. Führen Sie diesen Befehl in Ihrem Terminal aus, achten Sie darauf, dass Sie sich im Stammverzeichnis Ihrer App befinden:

```bash
touch src/components/{Form,FilterButton}.jsx
```

### Die `<Form />`

Öffnen Sie `components/Form.jsx` und machen Sie Folgendes:

- Deklarieren Sie eine `Form()`-Funktion und exportieren Sie sie am Ende der Datei.
- Kopieren Sie die `<form>`-Tags und alles dazwischen aus `App.jsx` und fügen Sie sie in die `return`-Anweisung von `Form()` ein.

Ihre `Form.jsx`-Datei sollte so aussehen:

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

### Die `<FilterButton />`

Machen Sie das gleiche wie bei `Form.jsx` in `FilterButton.jsx`, aber nennen Sie die Komponente `FilterButton()` und kopieren Sie den HTML-Code für den ersten Button innerhalb von `<div className="filters btn-group stack-exception">` von `App.jsx` in die `return`-Anweisung.

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
> Sie könnten bemerken, dass wir denselben Fehler machen wie anfangs bei der `<Todo />`-Komponente, in dem jeder Button gleich ist. Das ist in Ordnung! Wir werden diese Komponente später korrigieren, in [Zurück zu den Filter-Buttons](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons).

## Importieren all unserer Komponenten

Lassen Sie uns unsere neuen Komponenten nutzen. Fügen Sie einige weitere `import`-Anweisungen am Anfang von `App.jsx` hinzu und verweisen Sie auf die Komponenten, die wir gerade erstellt haben. Aktualisieren Sie dann die `return`-Anweisung von `App()`, damit sie unsere Komponenten rendert.

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

Mit diesem Schritt sollte Ihre React-App im Grunde genauso gerendert werden wie zuvor, aber unter Verwendung Ihrer neuen, glänzenden Komponenten.

## Zusammenfassung

Das war's für diesen Artikel — wir haben ausführlich behandelt, wie Sie Ihre App sinnvoll in Komponenten zerlegen und effizient rendern können. Als nächstes werden wir uns mit dem Umgang mit Ereignissen in React beschäftigen und anfangen, etwas Interaktivität hinzuzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}
