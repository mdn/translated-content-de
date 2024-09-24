---
title: Unser React-App in Komponenten aufteilen
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

An diesem Punkt ist unsere App ein Monolith. Bevor wir sie zum Laufen bringen können, müssen wir sie in handhabbare, beschreibende Komponenten zerlegen. React hat keine strengen Regeln dafür, was eine Komponente ist und was nicht – das liegt bei Ihnen! In diesem Artikel zeigen wir Ihnen eine sinnvolle Art und Weise, unsere App in Komponenten zu zerlegen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          sowie Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Kommandozeile</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Eine sinnvolle Art und Weise zu zeigen, wie unsere To-Do-Listen-App in Komponenten zerlegt werden kann.
      </td>
    </tr>
  </tbody>
</table>

## Definieren unserer ersten Komponente

Das Definieren einer Komponente kann schwierig erscheinen, bis Sie etwas Praxis haben, aber im Grunde lautet die Regel:

- Wenn es ein offensichtliches "Stück" Ihrer App darstellt, ist es wahrscheinlich eine Komponente
- Wenn es oft wiederverwendet wird, ist es wahrscheinlich eine Komponente.

Dieser zweite Punkt ist besonders wertvoll: Wenn Sie eine Komponente aus häufig verwendeten UI-Elementen erstellen, können Sie Ihren Code an einem Ort ändern und diese Änderungen überall sehen, wo die Komponente verwendet wird. Sie müssen nicht sofort alles in Komponenten aufteilen. Lassen Sie uns den zweiten Punkt als Inspiration nehmen und eine Komponente aus dem am häufigsten verwendeten und wichtigsten Teil der UI machen: einem To-Do-Listenelement.

## Erstellen eines `<Todo />`

Bevor wir eine Komponente erstellen können, sollten wir eine neue Datei dafür anlegen. Tatsächlich sollten wir ein Verzeichnis nur für unsere Komponenten erstellen. Stellen Sie sicher, dass Sie sich im Wurzelverzeichnis Ihrer App befinden, bevor Sie diese Befehle ausführen!

```bash
# Ein `components` Verzeichnis erstellen
mkdir src/components
# Innerhalb von `components`, eine Datei namens `Todo.jsx` erstellen
touch src/components/Todo.jsx
```

Vergessen Sie nicht, Ihren Entwicklungsserver neu zu starten, wenn Sie ihn angehalten haben, um die vorherigen Befehle auszuführen!

Lassen Sie uns eine `Todo()`-Funktion in `Todo.jsx` hinzufügen. Hier definieren wir eine Funktion und exportieren sie:

```jsx
function Todo() {}

export default Todo;
```

Das ist soweit in Ordnung, aber unsere Komponente sollte etwas Nützliches zurückgeben! Gehen Sie zurück zu `src/App.jsx`, kopieren Sie das erste [`<li>`](/de/docs/Web/HTML/Element/li) aus der ungeordneten Liste und fügen Sie es in `Todo.jsx` ein, sodass es wie folgt aussieht:

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

Jetzt haben wir etwas, das wir verwenden können. In `App.jsx`, fügen Sie die folgende Zeile am Anfang der Datei ein, um `Todo` zu importieren:

```jsx
import Todo from "./components/Todo";
```

Mit dieser importierten Komponente können Sie alle `<li>`-Elemente in `App.jsx` durch `<Todo />`-Komponentenaufrufe ersetzen. Ihre `<ul>` sollte wie folgt aussehen:

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

Wenn Sie zu Ihrer App zurückkehren, werden Sie etwas Unangenehmes bemerken: Ihre Liste wiederholt nun die erste Aufgabe dreimal!

![Unsere To-Do-Listen-App, in der die To-Do-Komponenten wiederholt werden, weil das Label in der Komponente fest codiert ist](todo-list-repeating-todos.png)

Wir wollen nicht nur essen; wir haben noch andere Dinge zu tun. Als nächstes schauen wir, wie wir unterschiedliche Komponentenanrufe einzigartigen Inhalt darstellen lassen können.

## Ein einzigartiges `<Todo />` erstellen

Komponenten sind mächtig, weil sie uns erlauben, Teile unserer UI wiederzuverwenden und uns auf einen Ort für die Quelle dieser UI zu beziehen. Das Problem ist, dass wir typischerweise nicht alles einer Komponente wiederverwenden wollen; wir wollen die meisten Teile wiederverwenden und kleine Teile ändern. Hier kommen `props` ins Spiel.

### Was steckt in einem `name`?

Um die Namen der Aufgaben, die wir erledigen wollen, zu verfolgen, sollten wir sicherstellen, dass jede `<Todo />`-Komponente einen einzigartigen Namen darstellt.

In `App.jsx` geben Sie jedem `<Todo />` eine `name`-Eigenschaft. Verwenden wir die Namen unserer Aufgaben, die wir vorher hatten:

```jsx
<Todo name="Eat" />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

Wenn Ihr Browser aktualisiert wird, sehen Sie… genau das gleiche wie vorher. Wir haben unseren `<Todo />` einige Props gegeben, aber wir verwenden sie noch nicht. Gehen wir zurück zu `Todo.jsx` und beheben das.

Zuerst ändern Sie die Definition Ihrer `Todo()`-Funktion, sodass sie `props` als Parameter nimmt. Sie können `console.log()` Ihre Props, wenn Sie überprüfen möchten, ob sie korrekt von der Komponente empfangen werden.

Sobald Sie sicher sind, dass Ihre Komponente ihre Props erhält, können Sie jedes Vorkommen von `Eat` mit Ihrem `name`-Prop ersetzen, indem Sie `props.name` lesen. Denken Sie daran: `props.name` ist ein JSX-Ausdruck, also müssen Sie ihn in geschweifte Klammern setzen.

Das Ganze zusammengefügt sollte Ihre `Todo()`-Funktion so aussehen:

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

_Jetzt_ sollte Ihr Browser drei einzigartige Aufgaben anzeigen. Ein weiteres Problem jedoch bleibt: Sie sind alle standardmäßig angekreuzt.

![Unsere To-Do-Liste, jetzt mit unterschiedlichen To-Do-Labels, da sie als Props in die Komponenten eingefügt werden](todo-list-unique-todos.png)

### Ist es `completed`?

In unserer ursprünglichen statischen Liste war nur `Eat` angekreuzt. Wieder einmal wollen wir _den Großteil_ der UI, die eine `<Todo />`-Komponente ausmacht, wiederverwenden, aber eine Kleinigkeit ändern. Dafür ist ein weiteres Prop ideal! Geben Sie Ihrem ersten `<Todo />`-Aufruf eine boolesche Prop von `completed`, und lassen Sie die anderen beiden, wie sie sind.

```jsx
<Todo name="Eat" completed />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

Wie zuvor, müssen wir zurück zu `Todo.jsx` gehen, um diese Props tatsächlich zu verwenden. Ändern Sie das `defaultChecked`-Attribut des `<input />`-Elements, sodass sein Wert dem `completed`-Prop entspricht. Sobald Sie fertig sind, wird das `<input />`-Element der Todo-Komponente so aussehen:

```jsx
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```

Und Ihr Browser sollte aktualisieren, um nur `Eat` als angekreuzt anzuzeigen:

![Unsere To-Do-Listen-App, jetzt mit unterschiedlichen angekreuzten Zuständen - einige Checkboxen sind angekreuzt, andere nicht](todo-list-differing-checked-states.png)

Wenn Sie das `completed`-Prop jeder `<Todo />`-Komponente ändern, wird Ihr Browser die entsprechenden gerenderten Checkboxen entsprechend markieren oder abwählen.

### Geben Sie mir etwas `id`, bitte

Wir haben noch _ein weiteres_ Problem: Unsere `<Todo />`-Komponente gibt jeder Aufgabe ein `id`-Attribut von `todo-0`. Dies ist aus mehreren Gründen schlecht:

- [`id`-Attribute](/de/docs/Web/HTML/Global_attributes/id) müssen einzigartig sein (sie werden als eindeutige Bezeichner für Dokumentfragmente, durch CSS, JavaScript, usw. verwendet).
- Wenn `id`s nicht einzigartig sind, kann die Funktionalität von [label-Elementen](/de/docs/Web/HTML/Element/label) kaputtgehen.

Das zweite Problem betrifft gerade unsere App. Wenn Sie auf das Wort "Sleep" neben der zweiten Checkbox klicken, werden Sie feststellen, dass die Checkbox "Eat" umschaltet, anstatt die Checkbox "Sleep". Dies liegt daran, dass jedes `<label>`-Element einer Checkbox ein `htmlFor`-Attribut von `todo-0` besitzt. Die `<label>`s erkennen nur das erste Element mit einem gegebenen `id`-Attribut, was das Problem verursacht, das Sie beim Klicken auf die anderen Labels sehen.

Wir hatten einzigartige `id`-Attribute, bevor wir die `<Todo />`-Komponente erstellt haben. Lassen Sie uns sie zurückbringen, indem wir dem Format `todo-i` folgen, wobei `i` mit jedem Mal um eins größer wird. Aktualisieren Sie die `Todo`-Komponenteninstanzen in `App.jsx`, um `id`-Props hinzuzufügen, wie folgt:

```jsx
<Todo name="Eat" id="todo-0" completed />
<Todo name="Sleep" id="todo-1" />
<Todo name="Repeat" id="todo-2" />
```

> [!NOTE]
> Das `completed`-Prop steht hier zuletzt, weil es ein Boolean ohne Zuweisung ist. Dies ist lediglich eine stilistische Konvention. Die Reihenfolge der Props spielt keine Rolle, da Props JavaScript-Objekte sind und JavaScript-Objekte ungeordnet sind.

Gehen Sie jetzt zurück zu `Todo.jsx` und verwenden Sie das `id`-Prop. Es muss den Wert des `id`-Attributs des `<input />`-Elements sowie den `htmlFor`-Attributwert seines `<label>`-Elements ersetzen:

```jsx
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>
```

Mit diesen Korrekturen an Ort und Stelle wird das Klicken auf die Labels neben jeder Checkbox das tun, was wir erwarten – die Checkboxen neben diesen Labels werden ein- bzw. ausgeblendet.

## Bisher so gut?

Wir machen bisher guten Gebrauch von React, aber wir könnten es besser machen! Unser Code ist redundant. Die drei Zeilen, die unsere `<Todo />`-Komponente rendern, sind fast identisch, mit nur einem Unterschied: dem Wert jedes Props.

Wir können unseren Code mit einer der Kernfähigkeiten von JavaScript aufräumen: Iteration. Um Iteration zu verwenden, sollten wir zuerst unsere Aufgaben neu überdenken.

## Aufgaben als Daten

Jede unserer Aufgaben enthält derzeit drei Informationen: ihren Namen, ob sie abgehakt wurde, und ihre eindeutige ID. Diese Daten lassen sich gut in ein Objekt übersetzen. Da wir mehr als eine Aufgabe haben, würde ein Array von Objekten gut zur Darstellung dieser Daten passen.

Deklarieren Sie in `src/main.jsx` eine neue `const` unterhalb des letzten Imports, aber oberhalb von `ReactDOM.createRoot()`:

```jsx
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
```

> [!NOTE]
> Wenn Ihr Texteditor ein [ESLint](https://eslint.org/)-Plugin hat, sehen Sie möglicherweise eine Warnung zu dieser `DATA`-Konstanten. Diese Warnung stammt aus der ESLint-Konfiguration, die durch das von uns verwendete Vite-Template bereitgestellt wird, und sie gilt nicht für diesen Code. Sie können die Warnung sicher unterdrücken, indem Sie `// eslint-disable-next-line` in die Zeile über der `DATA`-Const einfügen.

Als nächstes übergeben wir `DATA` als ein Prop an `<App />`, das `tasks` genannt wird. Aktualisieren Sie Ihren `<App />`-Komponentenaufruf in `src/main.jsx`, sodass er so aussieht:

```jsx
<App tasks={DATA} />
```

Das `DATA`-Array ist jetzt innerhalb der App-Komponente als `props.tasks` verfügbar. Sie können es `console.log()` anzeigen, wenn Sie möchten.

> **Hinweis:** Konstante Namen in `ALL_CAPS` haben keine besondere Bedeutung in JavaScript; sie sind eine Konvention, die anderen Entwicklern sagt: "Diese Daten werden sich nach der Definition hier nie ändern".

## Rendern mit Iteration

Um unser Array von Objekten zu rendern, müssen wir jedes Objekt in eine `<Todo />`-Komponente umwandeln. JavaScript gibt uns eine Array-Methode, um Elemente in etwas anderes zu transformieren: [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

Erstellen Sie innerhalb von `App.jsx` eine neue `const` oberhalb der `return`-Anweisung der `App()`-Funktion, die `taskList` genannt wird. Lassen Sie uns zunächst jede Aufgabe im `props.tasks`-Array in ihren `name` umwandeln. Der `?.`-Operator erlaubt uns, [optional chaining](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) zu verwenden, um zu überprüfen, ob `props.tasks` `undefined` oder `null` ist, bevor wir versuchen, ein neues Array von Aufgabennamen zu erstellen:

```jsx
const taskList = props.tasks?.map((task) => task.name);
```

Lassen Sie uns versuchen, alle Kinder von `<ul>` durch `taskList` zu ersetzen:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  {taskList}
</ul>
```

Das bringt uns ein Stück weiter zur erneuten Darstellung aller Komponenten, aber wir haben noch mehr zu tun: Der Browser rendert derzeit jeden Aufgabenamen als einfachen Text. Uns fehlt unsere HTML-Struktur — das `<li>` und seine Checkboxen und Schaltflächen!

![Unsere To-Do-Listen-App, bei der die To-Do-Element-Labels nur zusammenhängend auf einer Zeile dargestellt werden](todo-list-unstructured-names.png)

Um dies zu beheben, müssen wir eine `<Todo />`-Komponente aus unserer `map()`-Funktion zurückgeben — denken Sie daran, dass JSX JavaScript ist, sodass wir es zusammen mit jeder anderen, vertrauteren JavaScript-Syntax verwenden können. Lassen Sie uns Folgendes anstelle dessen versuchen, was wir bereits haben:

```jsx
const taskList = props.tasks?.map((task) => <Todo />);
```

Schauen Sie erneut auf Ihre App; jetzt sehen unsere Aufgaben eher so aus wie zuvor, aber ihnen fehlen die Namen der Aufgaben selbst. Denken Sie daran, dass jede Aufgabe, die wir durchlaufen, die `id`, `name`, und `completed`-Eigenschaften enthält, die wir in unsere `<Todo />`-Komponente übergeben wollen. Wenn wir dieses Wissen zusammenbringen, erhalten wir einen Code, der so aussieht:

```jsx
const taskList = props.tasks?.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));
```

Nun sieht die App wieder so aus, wie zuvor, und unser Code ist weniger repetitiv.

## Einzigartige Schlüssel

Jetzt, da React unsere Aufgaben aus einem Array rendert, muss es im Auge behalten, welche welche ist, um sie richtig darzustellen. React versucht, eigene Vermutungen anzustellen, um die Dinge im Auge zu behalten, aber wir können ihm helfen, indem wir einen `key`-Prop an unsere `<Todo />`-Komponenten übergeben. `key` ist ein spezieller Prop, der von React verwaltet wird – Sie können das Wort `key` nicht für einen anderen Zweck verwenden.

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

**Sie sollten immer einen eindeutigen Schlüssel an alles übergeben, was Sie mit Iteration rendern.** Im Browser wird sich nichts Offensichtliches ändern, aber wenn Sie keine eindeutigen Schlüssel verwenden, wird React Warnungen in Ihrer Konsole protokollieren und Ihre App kann sich seltsam verhalten!

## Komponentenbildung des Rests der App

Da wir unsere wichtigste Komponente sortiert haben, können wir den Rest unserer App in Komponenten umwandeln. In Erinnerung daran, dass Komponenten entweder offensichtliche Teile der UI, wiederverwendete Teile der UI oder beides sind, können wir zwei weitere Komponenten erstellen:

- `<Form />`
- `<FilterButton />`

Da wir wissen, dass wir beide benötigen, können wir einige der Datei-Erstellungsarbeiten in einem Terminalbefehl zusammenfassen. Führen Sie diesen Befehl in Ihrem Terminal aus und achten Sie darauf, dass Sie sich im Wurzelverzeichnis Ihrer App befinden:

```bash
touch src/components/{Form,FilterButton}.jsx
```

### Das `<Form />`

Öffnen Sie `components/Form.jsx` und machen Sie Folgendes:

- Deklarieren Sie eine `Form()`-Funktion und exportieren Sie sie am Ende der Datei.
- Kopieren Sie die `<form>`-Tags und alles dazwischen aus `App.jsx` und fügen Sie sie in die `return`-Anweisung der `Form()`-Funktion ein.

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

### Der `<FilterButton />`

Tun Sie das Gleiche, was Sie getan haben, um `Form.jsx` innerhalb von `FilterButton.jsx` zu erstellen, nennen Sie die Komponente jedoch `FilterButton()` und kopieren Sie das HTML für die erste Schaltfläche innerhalb von `<div className="filters btn-group stack-exception">` aus `App.jsx` in die `return`-Anweisung.

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
> Sie könnten bemerken, dass wir hier denselben Fehler machen wie zuerst bei der `<Todo />`-Komponente, nämlich dass jede Schaltfläche gleich sein wird. Das ist in Ordnung! Wir werden diese Komponente später beheben, in [Zurück zu den Filter-Schaltflächen](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons).

## Importieren all unserer Komponenten

Lassen Sie uns unsere neuen Komponenten nutzen. Fügen Sie einige weitere `import`-Anweisungen an den Anfang von `App.jsx` hinzu und verweisen Sie auf die Komponenten, die wir gerade erstellt haben. Aktualisieren Sie dann die `return`-Anweisung der `App()`-Funktion, sodass sie unsere Komponenten rendert.

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

Mit dieser Änderung sollte Ihre React-App im Wesentlichen genauso gerendert werden wie zuvor, nun jedoch unter Verwendung Ihrer neuen Komponenten.

## Zusammenfassung

Das war's für diesen Artikel – wir haben ausführlich behandelt, wie Sie Ihre App schön in Komponenten aufteilen und diese effizient rendern können. Als nächstes werden wir uns mit dem Umgang mit Ereignissen in React befassen und beginnen, interaktive Elemente hinzuzufügen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
