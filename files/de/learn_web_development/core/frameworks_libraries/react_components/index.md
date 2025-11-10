---
title: Komponentenbildung unserer React-App
short-title: React components
slug: Learn_web_development/Core/Frameworks_libraries/React_components
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}

Im Moment ist unsere App ein Monolith. Bevor wir sie dazu bringen können, Dinge zu tun, müssen wir sie in handhabbare, beschreibende Komponenten zerlegen. React hat keine festen Regeln dafür, was eine Komponente ist und was nicht – das liegt bei Ihnen! In diesem Artikel zeigen wir Ihnen eine sinnvolle Möglichkeit, unsere App in Komponenten aufzuteilen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, sowie der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Command Line</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Eine sinnvolle Art, unsere Todo-Listen-App in Komponenten zu zerlegen.
      </td>
    </tr>
  </tbody>
</table>

## Definieren unserer ersten Komponente

Das Definieren einer Komponente kann knifflig erscheinen, bis Sie etwas Übung haben, aber das Wesentliche ist:

- Wenn es ein offensichtliches "Stück" Ihrer App darstellt, ist es wahrscheinlich eine Komponente
- Wenn es oft wiederverwendet wird, ist es wahrscheinlich eine Komponente.

Dieser zweite Punkt ist besonders wertvoll: Wenn Sie eine Komponente aus gemeinsamen UI-Elementen machen, können Sie Ihren Code an einer Stelle ändern und diese Änderungen überall dort sehen, wo die Komponente verwendet wird. Sie müssen nicht sofort alles in Komponenten aufbrechen. Lassen Sie uns vom zweiten Punkt inspirieren und eine Komponente aus dem am häufigsten wiederverwendeten, wichtigsten Teil der Benutzeroberfläche machen: einem Todo-Listenelement.

## Erstelle ein `<Todo />`

Bevor wir eine Komponente erstellen können, sollten wir eine neue Datei dafür erstellen. Tatsächlich sollten wir ein Verzeichnis nur für unsere Komponenten erstellen. Stellen Sie sicher, dass Sie sich im Stammverzeichnis Ihrer App befinden, bevor Sie diese Befehle ausführen!

```bash
# create a `components` directory
mkdir src/components
# within `components`, create a file called `Todo.jsx`
touch src/components/Todo.jsx
```

Vergessen Sie nicht, Ihren Entwicklungsserver neu zu starten, wenn Sie ihn gestoppt haben, um die vorherigen Befehle auszuführen!

Lassen Sie uns eine `Todo()`-Funktion in `Todo.jsx` hinzufügen. Hier definieren wir eine Funktion und exportieren sie:

```jsx
function Todo() {}

export default Todo;
```

Das ist soweit in Ordnung, aber unsere Komponente sollte etwas Nützliches zurückgeben! Gehen Sie zurück zu `src/App.jsx`, kopieren Sie das erste [`<li>`](/de/docs/Web/HTML/Reference/Elements/li) aus der ungeordneten Liste und fügen Sie es in `Todo.jsx` ein, sodass es folgendermaßen aussieht:

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

Nun haben wir etwas, das wir verwenden können. Fügen Sie in `App.jsx` die folgende Zeile oben in der Datei hinzu, um `Todo` zu importieren:

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

Wenn Sie zu Ihrer App zurückkehren, werden Sie etwas Unangenehmes bemerken: Ihre Liste wiederholt jetzt dreimal die erste Aufgabe!

![Unsere Todo-Listen-App, bei der Todo-Komponenten sich wiederholen, weil das Label in der Komponente hartkodiert ist](todo-list-repeating-todos.png)

Wir wollen nicht nur essen; wir haben andere Dinge zu tun. Als nächstes schauen wir uns an, wie wir unterschiedliche Komponentenaufrufe eindeutige Inhalte rendern lassen können.

## Erstellen eines eindeutigen `<Todo />`

Komponenten sind mächtig, weil sie es uns ermöglichen, Teile unserer Benutzeroberfläche wiederzuverwenden und auf einen einzigen Ort als Quelle dieser Benutzeroberfläche zu verweisen. Das Problem ist, dass wir in der Regel nicht jeden Teil der Komponente wiederverwenden wollen; wir möchten die meisten Teile wiederverwenden und kleine Stücke ändern. Hier kommen `props` ins Spiel.

### Was ist in einem `name`?

Um die Namen der Aufgaben, die wir erledigen möchten, zu verfolgen, sollten wir sicherstellen, dass jede `<Todo />`-Komponente einen eindeutigen Namen rendert.

Geben Sie jedem `<Todo />` in `App.jsx` eine `name`-Prop. Verwenden wir die Namen unserer Aufgaben, die wir zuvor hatten:

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

Wenn Ihr Browser aktualisiert wird, sehen Sie… genau dasselbe wie zuvor. Wir haben unserem `<Todo />` einige Props gegeben, aber wir verwenden sie noch nicht. Gehen wir zurück zu `Todo.jsx` und beheben das.

Ändern Sie zunächst Ihre `Todo()`-Funktionsdefinition, sodass sie `props` als Parameter nimmt. Sie können `console.log()` verwenden, um Ihre Props zu überprüfen, wenn Sie sicher sein möchten, dass sie korrekt empfangen werden.

Sobald Sie sicher sind, dass Ihre Komponente ihre Props erhält, können Sie jede Vorkommen von `Eat` durch Ihre `name`-Prop ersetzen, indem Sie `props.name` lesen. Denken Sie daran: `props.name` ist ein JSX-Ausdruck, daher müssen Sie ihn in geschweifte Klammern setzen.

Alles zusammengefügt sollte Ihre `Todo()`-Funktion so aussehen:

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

_Jetzt_ sollte Ihr Browser drei eindeutige Aufgaben anzeigen. Ein weiteres Problem bleibt jedoch: Sie sind immer noch standardmäßig aktiviert.

![Unsere Todo-Liste, jetzt mit unterschiedlichen Todo-Labels, die in die Komponenten als Props übergeben werden](todo-list-unique-todos.png)

### Ist es `completed`?

In unserer ursprünglichen statischen Liste war nur `Eat` aktiviert. Wieder einmal möchten wir die _meisten_ der UI, die eine `<Todo />`-Komponente bildet, wiederverwenden, aber eine Sache ändern. Das ist wieder eine gute Aufgabe für eine weitere Prop! Geben Sie Ihrem ersten `<Todo />`-Aufruf eine boolesche Prop von `completed` und lassen Sie die anderen beiden unverändert.

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

Wie zuvor müssen wir zu `Todo.jsx` zurückgehen, um diese Props tatsächlich zu verwenden. Ändern Sie das `defaultChecked`-Attribut auf dem `<input />`, sodass sein Wert gleich der `completed`-Prop ist. Sobald Sie fertig sind, liest das `<input />`-Element der Todo-Komponente so:

```jsx
<input id="todo-0" type="checkbox" defaultChecked={props.completed} />
```

Und Ihr Browser sollte aktualisieren, um nur `Eat` als aktiviert zu zeigen:

![Unsere Todo-Listen-App, jetzt mit unterschiedlichen Aktivierungsstatus - einige Kontrollkästchen sind aktiviert, andere nicht](todo-list-differing-checked-states.png)

Wenn Sie die `completed`-Prop jeder `<Todo />`-Komponente ändern, werden Ihre Browser die entsprechenden gerenderten Kontrollkästchen entsprechend aktivieren oder deaktivieren.

### Geben Sie mir bitte etwas `id`

Wir haben noch ein_anderes_Problem: Unsere `<Todo />`-Komponente gibt jeder Aufgabe ein `id`-Attribut von `todo-0`. Dies ist aus mehreren Gründen schlecht:

- [`id`-Attribute](/de/docs/Web/HTML/Reference/Global_attributes/id) müssen eindeutig sein (sie werden als eindeutige Bezeichner für Dokumentfragmente verwendet, von CSS, JavaScript usw.).
- Wenn `id`s nicht eindeutig sind, kann die Funktionalität von [Label-Elementen](/de/docs/Web/HTML/Reference/Elements/label) kaputtgehen.

Das zweite Problem betrifft unsere App im Moment. Wenn Sie auf das Wort "Sleep" neben dem zweiten Kontrollkästchen klicken, wird das Kontrollkästchen "Eat" umgeschaltet, anstatt das Kontrollkästchen "Sleep". Dies liegt daran, dass das `<label>`-Element jedes Kontrollkästchens ein `htmlFor`-Attribut von `todo-0` hat. Die `<label>`s erkennen nur das erste Element mit einem gegebenen `id`-Attribut, was das Problem verursacht, das Sie sehen, wenn Sie auf die anderen Labels klicken.

Wir hatten einzigartige `id`-Attribute, bevor wir die `<Todo />`-Komponente erstellt haben. Lassen Sie uns diese zurückbringen, indem wir dem Format `todo-i` folgen, wobei `i` jedes Mal um eins größer wird. Aktualisieren Sie die `Todo`-Komponenteninstanzen in `App.jsx`, um `id`-Props wie folgt hinzuzufügen:

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
> Die `completed`-Prop steht hier zuletzt, weil sie ein boolescher Wert ohne Zuweisung ist. Dies ist rein eine stilistische Konvention. Die Reihenfolge der Props spielt keine Rolle, da Props JavaScript-Objekte sind und JavaScript-Objekte ungeordnet sind.

Gehen Sie nun zurück zu `Todo.jsx` und verwenden Sie die `id`-Prop. Sie muss den Wert des `id`-Attributs auf dem `<input />`-Element sowie des `htmlFor`-Attributs auf seinem `<label>` ersetzen:

```jsx
<div className="c-cb">
  <input id={props.id} type="checkbox" defaultChecked={props.completed} />
  <label className="todo-label" htmlFor={props.id}>
    {props.name}
  </label>
</div>
```

Mit diesen Korrekturen an Ort und Stelle wird das Klicken auf die Labels neben den Kontrollkästchen das tun, was wir erwarten – die Kontrollkästchen neben diesen Labels ein- und ausschalten.

## Bis jetzt, alles gut?

Wir nutzen React bisher gut, aber wir könnten es besser machen! Unser Code ist repetitiv. Die drei Zeilen, die unsere `<Todo />`-Komponente rendern, sind fast identisch, mit nur einem Unterschied: dem Wert jeder Prop.

Wir können unseren Code mit einer der Kernfähigkeiten von JavaScript bereinigen: Iteration. Um Iteration zu verwenden, sollten wir unsere Aufgaben zunächst neu überdenken.

## Aufgaben als Daten

Jede unserer Aufgaben enthält derzeit drei Informationsstücke: ihren Namen, ob sie angekreuzt ist, und ihre eindeutige ID. Diese Daten lassen sich gut in ein Objekt übersetzen. Da wir mehr als eine Aufgabe haben, würde ein Array von Objekten gut zur Darstellung dieser Daten funktionieren.

Deklarieren Sie in `src/main.jsx` eine neue `const` unter dem letzten Import, aber über `ReactDOM.createRoot()`:

```jsx
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];
```

> [!NOTE]
> Wenn Ihr Texteditor ein [ESLint](https://eslint.org/)-Plugin hat, sehen Sie möglicherweise eine Warnung über diese `DATA`-Konstante. Diese Warnung kommt von der ESLint-Konfiguration, die von der Vite-Vorlage bereitgestellt wird, die wir verwendet haben, und sie gilt nicht für diesen Code. Sie können die Warnung sicher unterdrücken, indem Sie `// eslint-disable-next-line` in die Zeile über der `DATA`-Konstante einfügen.

Als nächstes werden wir `DATA` als eine Prop namens `tasks` an `<App />` übergeben. Aktualisieren Sie Ihren `<App />`-Komponentenaufruf innerhalb von `src/main.jsx`, um so auszusehen:

```jsx
<App tasks={DATA} />
```

Das `DATA`-Array ist jetzt innerhalb der App-Komponente als `props.tasks` verfügbar. Sie können `console.log()` verwenden, um es zu überprüfen, wenn Sie möchten.

> [!NOTE] > `ALL_CAPS` Konstante Namen haben keine spezielle Bedeutung in JavaScript; sie sind eine Konvention, die anderen Entwicklern sagt: "Diese Daten werden sich nie ändern, nachdem sie hier definiert wurden".

## Rendering mit Iteration

Um unser Array von Objekten zu rendern, müssen wir jedes Objekt in eine `<Todo />`-Komponente umwandeln. JavaScript bietet uns eine Array-Methode, um Elemente in etwas anderes zu transformieren: [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

Erstellen Sie innerhalb von `App.jsx` eine neue `const` oberhalb der `return`-Anweisung der `App()`-Funktion namens `taskList`. Lassen Sie uns damit beginnen, jede Aufgabe im `props.tasks`-Array in ihren `name` zu verwandeln. Der `?.`-Operator ermöglicht uns [optionales Chaining](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining), um zu überprüfen, ob `props.tasks` `undefined` oder `null` ist, bevor wir versuchen, ein neues Array mit Aufgabennamen zu erstellen:

```jsx
const taskList = props.tasks?.map((task) => task.name);
```

Lassen Sie uns versuchen, alle Kinder des `<ul>` durch `taskList` zu ersetzen:

```jsx
<ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  {taskList}
</ul>
```

Das bringt uns einen Teil des Weges dazu, alle Komponenten wieder anzuzeigen, aber wir haben noch mehr Arbeit zu tun: Der Browser rendert derzeit jeden Aufgabennamen als reinen Text. Uns fehlt unsere HTML-Struktur — das `<li>` und seine Kontrollkästchen und Schaltflächen!

![Unsere Todo-Listen-App, bei der die Todo-Item-Labels nur als zeichnungslose Zeichen auf einer Linie angezeigt werden](todo-list-unstructured-names.png)

Um dies zu beheben, müssen wir eine `<Todo />`-Komponente aus unserer `map()`-Funktion zurückgeben — denken Sie daran, dass JSX JavaScript ist, also können wir es neben jeder anderen, vertrauteren JavaScript-Syntax verwenden. Lassen Sie uns Folgendes anstelle dessen versuchen, was wir bereits haben:

```jsx
const taskList = props.tasks?.map((task) => <Todo />);
```

Sehen Sie sich Ihre App noch einmal an; jetzt sehen unsere Aufgaben mehr aus wie vorher, aber ihnen fehlen die Namen der Aufgaben selbst. Denken Sie daran, dass jede Aufgabe, über die wir iterieren, die `id`, `name` und `completed` Eigenschaften enthält, die wir in unserer `<Todo />`-Komponente übergeben möchten. Wenn wir dieses Wissen zusammenfügen, erhalten wir einen Code wie diesen:

```jsx
const taskList = props.tasks?.map((task) => (
  <Todo id={task.id} name={task.name} completed={task.completed} />
));
```

Jetzt sieht die App aus wie zuvor, und unser Code ist weniger repetitiv.

## Eindeutige Schlüssel

Jetzt, da React unsere Aufgaben aus einem Array rendert, muss es den Überblick darüber behalten, welche welche ist, um sie richtig zu rendern. React versucht, seine eigenen Vermutungen anzustellen, um den Überblick zu behalten, aber wir können es unterstützen, indem wir unserer `<Todo />`-Komponente einen `key`-Prop übergeben. `key` ist ein spezieller Prop, der von React verwaltet wird – Sie dürfen das Wort `key` nicht für andere Zwecke verwenden.

Da Schlüssel eindeutig sein sollten, werden wir die `id` jedes Aufgabenobjekts als seinen Schlüssel wiederverwenden. Aktualisieren Sie Ihre `taskList`-Konstante so:

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

**Sie sollten immer einen eindeutigen Schlüssel an alles übergeben, was Sie mit Iteration rendern.** Im Browser wird sich nichts Offensichtliches ändern, aber wenn Sie keine eindeutigen Schlüssel verwenden, wird React Warnungen in Ihre Konsole protokollieren, und Ihre App kann sich seltsam verhalten!

## Komponentisierung des Restes der App

Jetzt, wo wir unsere wichtigste Komponente geklärt haben, können wir den Rest unserer App in Komponenten verwandeln. Wenn wir bedenken, dass Komponenten entweder offensichtliche Teile der Benutzeroberfläche, wiederverwendete Teile der Benutzeroberfläche oder beides sind, können wir zwei weitere Komponenten erstellen:

- `<Form />`
- `<FilterButton />`

Da wir wissen, dass wir beides benötigen, können wir einige der Dateierstellungen mit einem Befehl im Terminal zusammenfassen. Führen Sie diesen Befehl in Ihrem Terminal aus und achten Sie darauf, dass Sie sich im Stammverzeichnis Ihrer App befinden:

```bash
touch src/components/{Form,FilterButton}.jsx
```

### Der `<Form />`

Öffnen Sie `components/Form.jsx` und führen Sie Folgendes aus:

- Deklarieren Sie eine `Form()`-Funktion und exportieren Sie sie am Ende der Datei.
- Kopieren Sie die `<form>`-Tags und alles dazwischen aus `App.jsx` und fügen Sie diese in die `return`-Anweisung von `Form()` ein.

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

### Der `<FilterButton />`

Führen Sie dieselben Schritte, die Sie für das Erstellen von `Form.jsx` durchgeführt haben, in `FilterButton.jsx` aus, aber benennen Sie die Komponente `FilterButton()` und kopieren Sie das HTML des ersten Buttons innerhalb `<div className="filters btn-group stack-exception">` von `App.jsx` in die `return`-Anweisung ein.

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
> Sie bemerken vielleicht, dass wir hier denselben Fehler machen wie zunächst bei der `<Todo />`-Komponente, indem wir jeden Button gleich machen. Das ist in Ordnung! Wir werden diese Komponente später in [Zurück zu den Filter-Schaltflächen](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering#back_to_the_filter_buttons) beheben.

## Importieren aller unserer Komponenten

Lassen Sie uns unsere neuen Komponenten verwenden. Fügen Sie einige weitere `import`-Anweisungen oben in `App.jsx` hinzu und referenzieren Sie die Komponenten, die wir gerade erstellt haben. Aktualisieren Sie dann die `return`-Anweisung von `App()`, sodass sie unsere Komponenten rendert.

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

Mit diesem Einstellung sollte Ihre React-App im Wesentlichen so rendern, wie sie es zuvor getan hat, aber unter Verwendung Ihrer neuen Komponenten.

## Zusammenfassung

Und das war's für diesen Artikel — wir sind eingehend darauf eingegangen, wie Sie Ihre App in Komponenten zerlegen und effizient rendern können. Als nächstes werden wir untersuchen, wie man Ereignisse in React handhabt und etwas Interaktivität hinzufügt.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning","Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state", "Learn_web_development/Core/Frameworks_libraries")}}
