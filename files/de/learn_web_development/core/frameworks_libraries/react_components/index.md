---
title: Komponenten in unserer React-App erstellen
slug: Learn_web_development/Core/Frameworks_libraries/React_components
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}

Zum jetzigen Zeitpunkt ist unsere App ein Monolith. Bevor wir sie in Aktion bringen können, müssen wir sie in handhabbare, beschreibende Komponenten zerlegen. React hat keine festen Regeln dafür, was eine Komponente ist und was nicht – das bleibt Ihnen überlassen! In diesem Artikel zeigen wir Ihnen eine sinnvolle Möglichkeit, unsere App in Komponenten zu zerlegen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie aus der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Kommandzeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Eine sinnvolle Möglichkeit, unsere To-Do-Liste-App in Komponenten aufzuteilen.
      </td>
    </tr>
  </tbody>
</table>

## Unsere erste Komponente definieren

Eine Komponente zu definieren, kann knifflig erscheinen, bis man etwas Übung hat, aber im Wesentlichen gilt:

- Wenn es ein offensichtliches "Stück" Ihrer App darstellt, ist es wahrscheinlich eine Komponente.
- Wenn es häufig wiederverwendet wird, ist es wahrscheinlich eine Komponente.

Dieser zweite Punkt ist besonders wertvoll: Durch das Erstellen von Komponenten aus gemeinsamen UI-Elementen können Sie Ihren Code an einer Stelle ändern und diese Änderungen überall sehen, wo diese Komponente verwendet wird. Sie müssen nicht alles sofort in Komponenten zerlegen. Lassen Sie uns den zweiten Punkt als Inspirationsquelle nehmen und eine Komponente aus dem am häufigsten verwendeten, wichtigsten Teil der Benutzeroberfläche machen: einem To-Do-Listenelement.

## Erstellen Sie ein `<Todo />`

Bevor wir eine Komponente erstellen können, sollten wir eine neue Datei dafür erstellen. Tatsächlich sollten wir ein Verzeichnis nur für unsere Komponenten erstellen. Stellen Sie sicher, dass Sie sich im Stammverzeichnis Ihrer App befinden, bevor Sie diese Befehle ausführen!

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

Das ist bisher in Ordnung, aber unsere Komponente sollte etwas Nützliches zurückgeben! Gehen Sie zurück zu `src/App.jsx`, kopieren Sie das erste [`<li>`](/de/docs/Web/HTML/Element/li) aus der ungeordneten Liste und fügen Sie es in `Todo.jsx` ein, sodass es folgendermaßen aussieht:

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

Mit dieser importierten Komponente können Sie alle `<li>`-Elemente in `App.jsx` durch `<Todo />`-Komponentenaufrufe ersetzen. Ihr `<ul>` sollte folgendermaßen aussehen:

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

Wenn Sie zu Ihrer App zurückkehren, werden Sie etwas Unvorteilhaftes bemerken: Ihre Liste wiederholt jetzt dreimal die erste Aufgabe!

![Unsere To-Do-Listen-App, bei der To-Do-Komponenten wiederholt werden, da das Label hartcodiert in der Komponente ist](todo-list-repeating-todos.png)

Wir wollen nicht nur essen; wir haben noch andere Dinge zu tun – nun ja – zu erledigen. Als nächstes werden wir untersuchen, wie wir verschiedene Komponentenaufrufe einzigartigen Inhalt rendern lassen können.

## Ein einzigartiges `<Todo />` erstellen

Komponenten sind mächtig, weil sie es uns ermöglichen, Teile unserer Benutzeroberfläche wiederzuverwenden und auf eine Quelle für diese Benutzeroberfläche zu verweisen. Das Problem ist, dass wir in der Regel nicht das gesamte einer Komponente wiederverwenden möchten; wir wollen die meisten Teile wiederverwenden und kleine Stücke ändern. Hier kommen "props" ins Spiel.

### Was steckt in einem `name`?

Um die Namen der Aufgaben, die wir erledigen wollen, nachzuverfolgen, sollten wir sicherstellen, dass jede `<Todo />` Komponente einen eindeutigen Namen rendert.

Geben Sie in `App.jsx` jeder `<Todo />`-Komponente ein Namen-Prop. Verwenden Sie die Namen unserer vorherigen Aufgaben:

```jsx
<Todo name="Eat" />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

Wenn Ihr Browser aktualisiert wird, sehen Sie... genau dasselbe wie vorher. Wir haben unseren `<Todo />`-Komponenten einige Props gegeben, nutzen sie jedoch noch nicht. Lassen Sie uns zu `Todo.jsx` zurückkehren und das beheben.

Ändern Sie zuerst Ihre `Todo()`-Funktionsdefinition so, dass sie `props` als Parameter annimmt. Sie können `console.log()` Ihre Props verwenden, um zu überprüfen, ob sie korrekt von der Komponente empfangen werden.

Sobald Sie sich sicher sind, dass Ihre Komponente ihre Props erhält, können Sie jede Instanz von `Eat` durch Ihr `name` Prop ersetzen, indem Sie `props.name` lesen. Denken Sie daran: `props.name` ist ein JSX-Ausdruck, also müssen Sie ihn in geschweifte Klammern einschließen.

Insgesamt sollte Ihre `Todo()`-Funktion nun folgendermaßen aussehen:

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

_Jetzt_ sollte Ihr Browser drei einzigartige Aufgaben anzeigen. Ein weiteres Problem bleibt jedoch: Sie sind alle immer noch standardmäßig markiert.

![Unsere To-Do-Liste, mit verschiedenen To-Do-Labels, da sie als Props in die Komponenten übergeben werden](todo-list-unique-todos.png)

### Ist es `completed`?

In unserer ursprünglichen statischen Liste war nur `Eat` markiert. Wieder möchten wir den größten Teil der Benutzeroberfläche, die eine `<Todo />`-Komponente ausmacht, wiederverwenden, aber eine Sache ändern. Das ist eine gute Aufgabe für ein weiteres Prop! Geben Sie Ihrem ersten `<Todo />`-Aufruf ein boolesches `completed` Prop und lassen Sie die anderen beiden so, wie sie sind.

```jsx
<Todo name="Eat" completed />
<Todo name="Sleep" />
<Todo name="Repeat" />
```

Wie zuvor müssen wir zu `Todo.jsx` zurückkehren, um diese Props tatsächlich zu nutzen. Ändern Sie das `defaultChecked`-Attribut im `<input />`, damit dessen Wert dem `completed` Prop entspricht. Wenn Sie fertig sind, wird das `<input />`-Element der Todo-Komponente folgendermaßen aussehen:

```jsx
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```

Und Ihr Browser sollte aktualisiert werden, um nur `Eat` als markiert anzuzeigen:

![Unsere To-Do-Listen-App, jetzt mit unterschiedlichen Markierungszuständen - einige Checkboxen sind markiert, andere nicht](todo-list-differing-checked-states.png)

Wenn Sie das `completed` Prop jeder `<Todo />`-Komponente ändern, werden die entsprechenden gerenderten Kontrollkästchen im Browser entsprechend markiert oder entmarkiert.

### Geben Sie mir bitte `id`

Wir haben immer noch _ein weiteres_ Problem: Unsere `<Todo />`-Komponente gibt jeder Aufgabe ein `id`-Attribut von `todo-0`. Dies ist aus mehreren Gründen schlecht:

- `id`-Attribute müssen eindeutig sein (sie werden als eindeutige Bezeichner für Dokumentfragmente, von CSS, JavaScript usw. verwendet).
- Wenn `id`s nicht eindeutig sind, kann die Funktionalität von Label-Elementen beeinträchtigt werden.

Das zweite Problem betrifft unsere App im Moment. Wenn Sie auf das Wort "Sleep" neben dem zweiten Kontrollkästchen klicken, wird das Kontrollkästchen "Eat" umgeschaltet, anstatt das Kontrollkästchen "Sleep". Dies liegt daran, dass das `<label>`-Element jedes Kontrollkästchens ein `htmlFor`-Attribut von `todo-0` hat. Die `<label>`s erkennen nur das erste Element mit einem bestimmten `id`-Attribut an, was das bei den anderen Labels beobachtete Problem verursacht.

Wir hatten eindeutige `id`-Attribute, bevor wir die `<Todo />`-Komponente erstellt haben. Lassen Sie uns sie zurückbringen, indem wir das Format von `todo-i` folgen, wobei `i` jedes Mal um eins größer wird. Aktualisieren Sie die `Todo`-Komponenteninstanzen in `App.jsx`, um `id`-Props hinzuzufügen:

```jsx
<Todo name="Eat" id="todo-0" completed />
<Todo name="Sleep" id="todo-1" />
<Todo name="Repeat" id="todo-2" />
```

> [!NOTE]
> Das `completed` Prop steht hier zuletzt, weil es ein Boolean ohne Zuweisung ist. Dies ist rein eine stilistische Konvention. Die Reihenfolge der Props spielt keine Rolle, da Props JavaScript-Objekte sind und JavaScript-Objekte keine geordnete Reihenfolge haben.

Gehen Sie jetzt zurück zu `Todo.jsx` und machen Sie Gebrauch vom `id` Prop. Es muss den Wert des `id`-Attributs des `<input />`-Elements sowie den Wert des `htmlFor`-Attributs des `<label>` ersetzen:

```jsx
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>
```

Mit diesen Korrekturen wird das Anklicken der Labels neben jedem Kontrollkästchen das tun, was wir erwarten – die Kontrollkästchen neben diesen Labels ein- und ausschalten.

## Bisher, so gut?

Wir nutzen React bisher gut, aber wir könnten es besser machen! Unser Code ist repetitiv. Die drei Zeilen, die unsere `<Todo />`-Komponente rendern, sind fast identisch, mit nur einem Unterschied: dem Wert jedes Props.

Wir können unseren Code mit einer der Kernfähigkeiten von JavaScript bereinigen: Iteration. Um Iteration zu verwenden, müssen wir zunächst über unsere Aufgaben nachdenken.

## Aufgaben als Daten

Jede unserer Aufgaben enthält derzeit drei Informationen: ihren Namen, ob sie markiert wurde und ihre eindeutige ID. Diese Daten lassen sich gut in ein Objekt übertragen. Da wir mehr als eine Aufgabe haben, würde sich ein Array von Objekten gut zur Darstellung dieser Daten eignen.

Deklarieren Sie in `src/main.jsx` eine neue `const` unterhalb des letzten Imports, aber oberhalb von `ReactDOM.createRoot()`:

```jsx
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
```

> [!NOTE]
> Wenn Ihr Texteditor ein [ESLint](https://eslint.org/)-Plugin hat, sehen Sie möglicherweise eine Warnung zu dieser `DATA`-Konstanten. Diese Warnung stammt aus der mit dem Vite-Template gelieferten ESLint-Konfiguration, und sie gilt nicht für diesen Code. Sie können die Warnung sicher unterdrücken, indem Sie `// eslint-disable-next-line` oberhalb der `DATA`-Konstante hinzufügen.

Als Nächstes übergeben wir `DATA` als Prop mit dem Namen `tasks` an `<App />`. Aktualisieren Sie den `<App />`-Komponentenaufruf in `src/main.jsx`, sodass er wie folgt aussieht:

```jsx
<App tasks={DATA} />
```

Das `DATA`-Array ist nun in der App-Komponente als `props.tasks` verfügbar. Sie können `console.log()` verwenden, um es zu überprüfen, wenn Sie möchten.

> **Hinweis:** `ALL_CAPS` const-Namen haben in JavaScript keine spezielle Bedeutung; sie sind eine Konvention, die anderen Entwicklern mitteilt, dass "diese Daten, sobald sie hier definiert sind, sich nie wieder ändern werden".

## Rendering mit Iteration

Um unser Array von Objekten zu rendern, müssen wir jedes Objekt in eine `<Todo />`-Komponente umwandeln. JavaScript stellt uns eine Array-Methode zur Verfügung, um Elemente in etwas anderes zu transformieren: [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

Erstellen Sie in `App.jsx` über der `return`-Anweisung der `App()`-Funktion eine neue `const` namens `taskList`. Beginnen wir damit, jede Aufgabe im `props.tasks`-Array in ihren Namen zu verwandeln. Der `?.`-Operator ermöglicht es uns, eine [optionale Verkettung](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) durchzuführen, um zu überprüfen, ob `props.tasks` `undefined` oder `null` ist, bevor wir versuchen, ein neues Array mit Aufgabennamen zu erstellen:

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

Dies bringt uns ein Stück weit dahin, alle Komponenten wieder anzuzeigen, aber wir haben noch mehr Arbeit zu erledigen: Der Browser zeigt derzeit den Namen jeder Aufgabe als einfachen Text an. Uns fehlt die HTML-Struktur – das `<li>` und seine Kontrollkästchen und Schaltflächen!

![Unsere To-Do-Listen-App mit den To-Do-Item-Labels, die einfach zusammen auf einer Linie angezeigt werden](todo-list-unstructured-names.png)

Um dies zu beheben, müssen wir aus unserer `map()` Funktion eine `<Todo />` Komponente zurückgeben – denken Sie daran, dass JSX JavaScript ist, sodass wir es neben jeder anderen, bekannteren JavaScript-Syntax verwenden können. Versuchen wir das folgende anstelle dessen, was wir bereits haben:

```jsx
const taskList = props.tasks?.map((task) => <Todo />);
```

Schauen Sie sich Ihre App noch einmal an; jetzt sehen unsere Aufgaben mehr aus wie früher, aber ihnen fehlen die Namen der Aufgaben selbst. Denken Sie daran, dass jede Aufgabe, die wir abbilden, die `id`, `name` und `completed` Eigenschaften enthält, die wir in unsere `<Todo />` Komponente einfügen möchten. Wenn wir dieses Wissen zusammenfügen, erhalten wir Code wie diesen:

```jsx
const taskList = props.tasks?.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));
```

Jetzt sieht die App aus wie zuvor, und unser Code ist weniger repetitiv.

## Einzigartige Schlüssel

Da React unsere Aufgaben nun aus einem Array rendert, muss es verfolgen, welche Aufgabe welche ist, um sie korrekt rendern zu können. React versucht, seine eigene Schätzung zu machen, um Dinge zu verfolgen, aber wir können ihm helfen, indem wir einen `key` Prop an unsere `<Todo />` Komponenten übergeben. `key` ist ein spezieller Prop, der von React verwaltet wird – Sie können das Wort `key` nicht für andere Zwecke verwenden.

Da Schlüssel eindeutig sein sollten, werden wir die `id`-Eigenschaft jedes Aufgabenobjekts als seinen Schlüssel wiederverwenden. Aktualisieren Sie Ihre `taskList` Konstante wie folgt:

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

**Zu jedem Element, das Sie mit Iteration rendern, sollten Sie immer einen eindeutigen Schlüssel übergeben.** Nichts Offensichtliches wird sich in Ihrem Browser ändern, aber wenn Sie keine eindeutigen Schlüssel verwenden, wird React Warnungen in Ihre Konsole protokollieren und Ihre App kann sich seltsam verhalten!

## Den Rest der App in Komponenten umwandeln

Jetzt, da wir unsere wichtigste Komponente sortiert haben, können wir den Rest unserer App in Komponenten umwandeln. Wenn wir uns daran erinnern, dass Komponenten entweder offensichtliche Teile der Benutzeroberfläche, wiederverwendete Teile der Benutzeroberfläche oder beides sind, können wir zwei weitere Komponenten erstellen:

- `<Form />`
- `<FilterButton />`

Da wir wissen, dass wir beide benötigen, können wir einen Teil der Dateierstellungsarbeit zusammen in einem Terminalbefehl ausführen. Führen Sie diesen Befehl in Ihrem Terminal aus und achten Sie darauf, dass Sie sich im Stammverzeichnis Ihrer App befinden:

```bash
touch src/components/{Form,FilterButton}.jsx
```

### Die `<Form />`

Öffnen Sie `components/Form.jsx` und führen Sie Folgendes aus:

- Deklarieren Sie eine `Form()` Funktion und exportieren Sie sie am Ende der Datei.
- Kopieren Sie die `<form>` Tags und alles zwischen ihnen aus `App.jsx` und fügen Sie sie in die `return` Anweisung von `Form()` ein.

Ihre `Form.jsx` Datei sollte nun wie folgt aussehen:

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

Führen Sie in `FilterButton.jsx` die gleichen Schritte aus, die Sie zum Erstellen von `Form.jsx` ausgeführt haben, aber benennen Sie die Komponente `FilterButton()` und kopieren Sie das HTML für die erste Schaltfläche innerhalb von `<div className="filters btn-group stack-exception">` aus `App.jsx` in die `return` Anweisung.

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
> Möglicherweise bemerken Sie, dass wir hier denselben Fehler machen, den wir zuerst für die `<Todo />`-Komponente gemacht haben, nämlich dass jede Schaltfläche gleich sein wird. Das ist in Ordnung! Wir werden diese Komponente später beheben, in [Zurück zu den Filter-Schaltflächen](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons).

## Alle unsere Komponenten importieren

Lassen Sie uns von unseren neuen Komponenten profitieren. Fügen Sie weitere `import` Anweisungen am Anfang von `App.jsx` hinzu und referenzieren Sie die Komponenten, die wir gerade erstellt haben. Aktualisieren Sie dann die `return` Anweisung von `App()`, damit sie unsere Komponenten rendert.

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

Mit all dem sollte Ihre React-App im Grunde so angezeigt werden wie zuvor, aber unter Verwendung Ihrer neuen, glänzenden Komponenten.

## Zusammenfassung

Und das wäre es für diesen Artikel — wir haben ausführlich behandelt, wie man seine App in Komponenten zerlegt und sie effizient rendert. Als Nächstes werden wir uns mit dem Umgang mit Ereignissen in React befassen und damit beginnen, etwas Interaktivität hinzuzufügen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}
