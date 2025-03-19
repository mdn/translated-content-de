---
title: Komponenten in unserer React-App
short-title: React components
slug: Learn_web_development/Core/Frameworks_libraries/React_components
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}

Derzeit ist unsere App ein Monolith. Bevor wir sie interaktiv gestalten können, müssen wir sie in überschaubare, beschreibende Komponenten unterteilen. React hat keine strikten Regeln dafür, was eine Komponente ist und was nicht – das liegt bei Ihnen! In diesem Artikel zeigen wir Ihnen eine sinnvolle Methode, um unsere App in Komponenten aufzuteilen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen, und der Verwendung der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Eingabeaufforderung/Terminal</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Eine sinnvolle Methode, um unsere To-do-Liste-App in Komponenten zu unterteilen.
      </td>
    </tr>
  </tbody>
</table>

## Definition unserer ersten Komponente

Eine Komponente zu definieren kann schwierig erscheinen, bis Sie etwas Übung haben, aber im Wesentlichen gilt:

- Wenn es einen offensichtlichen "Abschnitt" Ihrer App darstellt, ist es wahrscheinlich eine Komponente
- Wenn es oft wiederverwendet wird, ist es wahrscheinlich eine Komponente.

Der zweite Punkt ist besonders wertvoll: Eine Komponente aus häufig vorkommenden UI-Elementen zu erstellen, ermöglicht es Ihnen, Ihren Code an einer Stelle zu ändern und diese Änderungen überall dort zu sehen, wo diese Komponente verwendet wird. Sie müssen auch nicht sofort alles in Komponenten aufteilen. Lassen Sie uns den zweiten Punkt als Inspiration nehmen und eine Komponente aus dem am häufigsten verwendeten, wichtigsten Teil der Benutzeroberfläche: ein To-do-Listen-Element erstellen.

## Machen Sie ein `<Todo />`

Bevor wir eine Komponente erstellen können, sollten wir eine neue Datei dafür anlegen. Tatsächlich sollten wir ein Verzeichnis nur für unsere Komponenten erstellen. Stellen Sie sicher, dass Sie sich im Stammverzeichnis Ihrer App befinden, bevor Sie diese Befehle ausführen!

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

Das ist soweit in Ordnung, aber unsere Komponente sollte etwas Nützliches zurückgeben! Gehen Sie zurück zu `src/App.jsx`, kopieren Sie das erste [`<li>`](/de/docs/Web/HTML/Element/li) aus der ungeordneten Liste und fügen Sie es in `Todo.jsx` so ein, dass es wie folgt aussieht:

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

Jetzt haben wir etwas, das wir verwenden können. Fügen Sie in `App.jsx` folgende Zeile am Anfang der Datei hinzu, um `Todo` zu importieren:

```jsx
import Todo from "./components/Todo";
```

Mit dieser importierten Komponente können Sie alle `<li>` Elemente in `App.jsx` durch `<Todo />` Komponentenausrufe ersetzen. Ihr `<ul>` sollte so aussehen:

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

![Unsere To-do-Liste-App, bei der sich die To-do-Komponenten wiederholen, weil die Beschriftung in der Komponente fest codiert ist](todo-list-repeating-todos.png)

Wir wollen nicht nur essen; wir haben andere Dinge zu tun. Als Nächstes schauen wir, wie wir unterschiedliche Komponentenausrufe dazu bringen, einzigartigen Inhalt zu rendern.

## Machen Sie ein einzigartiges `<Todo />`

Komponenten sind mächtig, weil sie uns erlauben, Teile unserer Benutzeroberfläche wiederzuverwenden und an einer Stelle als Quelle dieser Benutzeroberfläche zu verweisen. Das Problem ist, dass wir nicht typischerweise den gesamten Inhalt jeder Komponente wiederverwenden möchten; wir möchten die meisten Teile wiederverwenden und kleine Stücke ändern. Hier kommen die Props ins Spiel.

### Was ist in einem `name`?

Um die Namen der Aufgaben, die wir abschließen möchten, zu verfolgen, sollten wir sicherstellen, dass jede `<Todo />` Komponente einen einzigartigen Namen rendert.

Geben Sie in `App.jsx` jeder `<Todo />` einen Namen-Prop. Lassen Sie uns die Namen unserer vorherigen Aufgaben verwenden:

```jsx
<Todo name="Eat" />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

Wenn Ihr Browser aktualisiert, werden Sie… das Gleiche wie vorher sehen. Wir haben unseren `<Todo />` einige Props gegeben, aber wir nutzen sie noch nicht. Gehen wir zu `Todo.jsx` zurück und beheben das.

Ändern Sie zuerst Ihre `Todo()` Funktionsdefinition, sodass sie `props` als Parameter nimmt. Sie können `console.log()` Ihren Props verwenden, um zu überprüfen, ob sie korrekt von der Komponente empfangen werden.

Sobald Sie sicher sind, dass Ihre Komponente ihre Props erhält, können Sie jede Instanz von `Eat` durch Ihren `name` Prop ersetzen, indem Sie `props.name` lesen. Denken Sie daran: `props.name` ist ein JSX-Ausdruck, daher müssen Sie ihn in geschweifte Klammern setzen.

Zusammengefügt sollte Ihre `Todo()` Funktion so aussehen:

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

_Jetzt_ sollte Ihr Browser drei einzigartige Aufgaben anzeigen. Ein weiteres Problem bleibt jedoch bestehen: Sie sind immer noch standardmäßig angekreuzt.

![Unsere To-do-Liste, mit unterschiedlichen To-do-Beschriftungen, die jetzt in die Komponenten als Props übergeben werden](todo-list-unique-todos.png)

### Ist es `completed`?

In unserer ursprünglichen statischen Liste war nur `Eat` angekreuzt. Wieder einmal möchten wir _den Großteil_ der Benutzeroberfläche, die eine `<Todo />` Komponente ausmacht, wiederverwenden, aber eine Sache ändern. Dafür ist ein weiterer Prop gut geeignet! Geben Sie Ihrem ersten `<Todo />` Aufruf einen booleschen Prop namens `completed`, und lassen Sie die anderen beiden wie sie sind.

```jsx
<Todo name="Eat" completed />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

Wie zuvor müssen wir zurück zu `Todo.jsx` gehen, um diese Props tatsächlich zu verwenden. Ändern Sie das `defaultChecked` Attribut im `<input />`, sodass sein Wert gleich dem `completed` Prop ist. Wenn Sie fertig sind, wird das `<input />` Element von Todo-Komponente so aussehen:

```jsx
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```

Und Ihr Browser sollte aktualisieren, um nur `Eat` als angekreuzt anzuzeigen:

![Unsere To-do-Liste-App, jetzt mit unterschiedlichen Ankreuzungszuständen - einige Kontrollkästchen sind angekreuzt, andere nicht](todo-list-differing-checked-states.png)

Wenn Sie den `completed` Prop jeder `<Todo />` Komponente ändern, wird Ihr Browser die entsprechend gerenderten Kontrollkästchen ankreuzen oder deren Ankreuzung entfernen.

### Geben Sie mir bitte eine `id`

Wir haben noch _ein weiteres_ Problem: Unsere `<Todo />` Komponente gibt jeder Aufgabe ein `id` Attribut von `todo-0`. Das ist aus mehreren Gründen schlecht:

- [`id` Attribute](/de/docs/Web/HTML/Global_attributes/id) müssen einzigartig sein (sie werden als eindeutige Bezeichner für Dokumentfragmente, von CSS, JavaScript usw. verwendet).
- Wenn `id`s nicht einzigartig sind, kann die Funktionalität von [Label-Elementen](/de/docs/Web/HTML/Element/label) beeinträchtigt werden.

Das zweite Problem wirkt sich gerade auf unsere App aus. Wenn Sie auf das Wort "Sleep" neben dem zweiten Kontrollkästchen klicken, wird das "Eat" Kontrollkästchen umgeschaltet, anstatt das "Sleep" Kontrollkästchen. Dies liegt daran, dass jedes Kontrollkästchen-`<label>` Element ein `htmlFor` Attribut von `todo-0` hat. Die `<label>`s erkennen nur das erste Element mit einem bestimmten `id` Attribut, was das Problem verursacht, das Sie sehen, wenn Sie auf die anderen Labels klicken.

Wir hatten einzigartige `id` Attribute, bevor wir die `<Todo />` Komponente erstellt haben. Lassen Sie uns sie zurückbringen, im Format `todo-i`, wobei `i` jedes Mal um eins größer wird. Aktualisieren Sie die `Todo` Komponenteninstanzen in `App.jsx`, um `id` Props hinzuzufügen, wie folgt:

```jsx
<Todo name="Eat" id="todo-0" completed />
<Todo name="Sleep" id="todo-1" />
<Todo name="Repeat" id="todo-2" />
```

> [!NOTE]
> Der `completed` Prop ist hier zuletzt, weil es sich um einen Boolean ohne Zuweisung handelt. Dies ist rein eine stilistische Konvention. Die Reihenfolge der Props spielt keine Rolle, da Props JavaScript-Objekte sind und JavaScript-Objekte ungeordnet sind.

Gehen Sie nun zurück zu `Todo.jsx` und nutzen Sie den `id` Prop. Er muss den Wert des `<input />` Elements `id` Attribut ersetzen, sowie den `htmlFor` Attributwert seines `<label>`:

```jsx
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>
```

Mit diesen Korrekturen wird das Klicken auf die Labels neben jedem Kontrollkästchen das tun, was wir erwarten – die Kontrollkästchen neben diesen Labels an- und abkreuzen.

## Bisher alles gut?

Wir machen bisher guten Gebrauch von React, aber wir könnten es besser machen! Unser Code ist wiederholend. Die drei Zeilen, die unsere `<Todo />` Komponente rendern, sind fast identisch, mit nur einem Unterschied: dem Wert jedes Props.

Wir können unseren Code mit einer der Kernfähigkeiten von JavaScript aufräumen: Iteration. Um Iteration zu verwenden, sollten wir unsere Aufgaben neu überdenken.

## Aufgaben als Daten

Jede unserer Aufgaben enthält derzeit drei Informationen: ihren Namen, ob sie angekreuzt wurde, und ihre eindeutige ID. Diese Daten lassen sich gut in ein Objekt übersetzen. Da wir mehr als eine Aufgabe haben, würde ein Array von Objekten gut zur Darstellung dieser Daten funktionieren.

Deklarieren Sie in `src/main.jsx` eine neue `const` unterhalb des letzten Imports, aber oberhalb von `ReactDOM.createRoot()`:

```jsx
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
```

> [!NOTE]
> Wenn Ihr Texteditor ein [ESLint](https://eslint.org/) Plugin hat, sehen Sie möglicherweise eine Warnung bei dieser `DATA` Konstante. Diese Warnung stammt aus der ESLint-Konfiguration, die von der Vite-Vorlage bereitgestellt wird, die wir verwendet haben, und sie gilt nicht für diesen Code. Sie können die Warnung sicher unterdrücken, indem Sie `// eslint-disable-next-line` in die Zeile über der `DATA` Konstante einfügen.

Als Nächstes übergeben wir `DATA` an `<App />` als Prop, genannt `tasks`. Aktualisieren Sie Ihren `<App />` Komponentenausruf in `src/main.jsx`, sodass er wie folgt aussieht:

```jsx
<App tasks={DATA} />
```

Das `DATA` Array ist jetzt in der App-Komponente als `props.tasks` verfügbar. Sie können es mit `console.log()` überprüfen, wenn Sie möchten.

> **Hinweis:** `ALL_CAPS` Konstantennamen haben keine spezielle Bedeutung in JavaScript; sie sind eine Konvention, die anderen Entwicklern mitteilt "diese Daten werden sich nicht ändern, nachdem sie hier definiert wurden".

## Rendering mit Iteration

Um unser Array von Objekten zu rendern, müssen wir jedes Objekt in eine `<Todo />` Komponente umwandeln. JavaScript gibt uns eine Array-Methode, um Elemente in etwas anderes zu transformieren: [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

Erstellen Sie in `App.jsx` eine neue `const` über der `App()` Funktion `return` Anweisung, die `taskList` genannt wird. Beginnen wir damit, jede Aufgabe im `props.tasks` Array in ihren `name` zu transformieren. Der `?.` Operator ermöglicht es uns, [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) durchzuführen, um zu überprüfen, ob `props.tasks` `undefined` oder `null` ist, bevor versucht wird, ein neues Array von Aufgabennamen zu erstellen:

```jsx
const taskList = props.tasks?.map((task) => task.name);
```

Versuchen wir, alle Kinder der `<ul>` mit `taskList` zu ersetzen:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  {taskList}
</ul>
```

Dies bringt uns etwas näher daran, alle Komponenten wieder anzuzeigen, aber wir haben noch mehr Arbeit zu tun: der Browser rendert derzeit jeden Aufgabennamen als einfachen Text. Uns fehlt unsere HTML-Struktur – das `<li>` und seine Kontrollkästchen und Schaltflächen!

![Unsere To-do-Liste-App, bei der die To-do-Element-Beschriftungen nur ohne Struktur auf einer Linie angezeigt werden](todo-list-unstructured-names.png)

Um dies zu beheben, müssen wir aus unserer `map()` Funktion eine `<Todo />` Komponente zurückgeben – denken Sie daran, dass JSX JavaScript ist, sodass wir es neben jeder anderen, vertrauteren JavaScript-Syntax verwenden können. Lassen Sie uns folgendes ausprobieren, anstatt was wir bereits haben:

```jsx
const taskList = props.tasks?.map((task) => <Todo />);
```

Schauen Sie sich Ihre App erneut an; jetzt sehen unsere Aufgaben wieder mehr wie zuvor aus, aber sie fehlen die Namen der eigentlichen Aufgaben. Denken Sie daran, dass jede Aufgabe, die wir durchlaufen, die `id`, `name` und `completed` Eigenschaften enthält, die wir in unsere `<Todo />` Komponente übergeben möchten. Wenn wir dieses Wissen zusammenfügen, erhalten wir folgendes Code:

```jsx
const taskList = props.tasks?.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));
```

Jetzt sieht die App so aus wie zuvor, und unser Code ist weniger wiederholend.

## Eindeutige Schlüssel

Jetzt, wo React unsere Aufgaben aus einem Array rendert, muss es nachverfolgen, welche welche ist, um sie korrekt zu rendern. React versucht, selbst zu raten, um Dinge zu verfolgen, aber wir können helfen, indem wir unserer `<Todo />` Komponente einen `key` Prop übergeben. `key` ist ein spezieller Prop, der von React verwaltet wird – Sie können das Wort `key` nicht für einen anderen Zweck verwenden.

Da Schlüssel einzigartig sein sollten, werden wir `id` jedes Aufgabenobjekts als seinen Schlüssel wiederverwenden. Aktualisieren Sie Ihre `taskList` Konstante wie folgt:

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

**Sie sollten immer einen eindeutigen Schlüssel für alles übergeben, was Sie mit Iteration rendern.** Es wird sich im Browser nichts Offensichtliches ändern, aber wenn Sie keine eindeutigen Schlüssel verwenden, wird React Warnungen an Ihre Konsole ausgeben und Ihre App könnte sich seltsam verhalten!

## Den Rest der App komponentisieren

Jetzt, wo wir unsere wichtigste Komponente sortiert haben, können wir den Rest unserer App in Komponenten verwandeln. Wenn man bedenkt, dass Komponenten entweder offensichtliche Bestandteile der Benutzeroberfläche, wiederverwendete Bestandteile der Benutzeroberfläche oder beides sind, können wir zwei weitere Komponenten erstellen:

- `<Form />`
- `<FilterButton />`

Da wir wissen, dass wir beide benötigen, können wir einige der Datei-Erstellungsarbeiten in einem Terminal-Befehl zusammenfassen. Führen Sie diesen Befehl in Ihrem Terminal aus und achten Sie darauf, dass Sie sich im Stammverzeichnis Ihrer App befinden:

```bash
touch src/components/{Form,FilterButton}.jsx
```

### Die `<Form />`

Öffnen Sie `components/Form.jsx` und führen Sie die folgenden Schritte aus:

- Deklarieren Sie eine `Form()` Funktion und exportieren Sie sie am Ende der Datei.
- Kopieren Sie die `<form>` Tags und alles dazwischen aus `App.jsx` und fügen Sie sie in die `return` Anweisung von `Form()` ein.

Ihre `Form.jsx` Datei sollte wie folgt aussehen:

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

Tun Sie dasselbe, was Sie getan haben, um `Form.jsx` zu erstellen, innerhalb von `FilterButton.jsx`, aber benennen Sie die Komponente `FilterButton()` und kopieren Sie das HTML für die erste Schaltfläche innerhalb von `<div className="filters btn-group stack-exception">` aus `App.jsx` in die `return` Anweisung.

Die Datei sollte wie folgt aussehen:

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
> Ihnen könnte auffallen, dass wir hier denselben Fehler machen wie bei der Erstellung der `<Todo />` Komponente, indem jede Schaltfläche identisch sein wird. Das ist in Ordnung! Wir werden diese Komponente später korrigieren, in [Zurück zu den Filter-Schaltflächen](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering#back_to_the_filter-buttons).

## Importieren all unserer Komponenten

Lassen Sie uns unsere neuen Komponenten nutzen. Fügen Sie oben in `App.jsx` einige weitere `import` Anweisungen hinzu und beziehen Sie sich auf die Komponenten, die wir gerade erstellt haben. Aktualisieren Sie dann die `return` Anweisung von `App()`, sodass sie unsere Komponenten rendert.

Wenn Sie fertig sind, wird `App.jsx` wie folgt aussehen:

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

Mit diesem Code sollte Ihre React-App im Wesentlichen gleich wie vorher rendern, aber mit Ihren glänzenden neuen Komponenten.

## Zusammenfassung

Das war's für diesen Artikel — wir sind ausführlich darauf eingegangen, wie wir Ihre App sinnvoll in Komponenten aufteilen und effizient rendern können. Als Nächstes werden wir uns mit der Ereignisbehandlung in React befassen und beginnen, einige Interaktivität hinzuzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries")}}
