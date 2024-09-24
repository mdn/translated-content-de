---
title: "React-Interaktivität: Bearbeiten, Filtern, bedingte Darstellung"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Da wir uns dem Ende unserer React-Reise nähern (zumindest vorerst), fügen wir den letzten Schliff zu den Hauptfunktionen unserer To-Do-Liste hinzu. Dies umfasst die Möglichkeit, bestehende Aufgaben zu bearbeiten und die Liste der Aufgaben zwischen allen, erledigten und nicht erledigten Aufgaben zu filtern. Dabei betrachten wir auch die bedingte UI-Darstellung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a>, und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen,
          Kenntnis des
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminals/Befehlszeilen</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um über die bedingte Darstellung in React zu lernen und die Implementierung von Listenfiltern und einer Bearbeitungs-UI in unserer App zu erproben.
      </td>
    </tr>
  </tbody>
</table>

## Bearbeiten des Namens einer Aufgabe

Wir haben noch keine Benutzeroberfläche zum Bearbeiten des Namens einer Aufgabe. Dazu kommen wir gleich. Zunächst können wir zumindest eine `editTask()`-Funktion in `App.jsx` implementieren. Sie ist ähnlich wie `deleteTask()`, da sie eine `id` nimmt, um ihr Zielobjekt zu finden, aber sie nimmt auch eine `newName` Eigenschaft, die den neuen Namen enthält, zu dem die Aufgabe aktualisiert werden soll. Wir verwenden [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) anstelle von [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), da wir ein neues Array mit einigen Änderungen zurückgeben wollen, anstatt etwas aus dem Array zu entfernen.

Fügen Sie die `editTask()`-Funktion in Ihre `<App />`-Komponente ein, an derselben Stelle wie die anderen Funktionen:

```jsx
function editTask(id, newName) {
  const editedTaskList = tasks.map((task) => {
    // wenn diese Aufgabe dieselbe ID hat wie die bearbeitete Aufgabe
    if (id === task.id) {
      // Kopieren Sie die Aufgabe und aktualisieren Sie ihren Namen
      return { ...task, name: newName };
    }
    // Geben Sie die ursprüngliche Aufgabe zurück, wenn sie nicht die bearbeitete Aufgabe ist
    return task;
  });
  setTasks(editedTaskList);
}
```

Übergeben Sie `editTask` auf dieselbe Weise als Prop in unsere `<Todo />`-Komponenten wie `deleteTask`:

```jsx
const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    editTask={editTask}
  />
));
```

Öffnen Sie nun `Todo.jsx`. Wir werden nun etwas umstrukturieren.

## Eine UI zum Bearbeiten

Um Benutzern zu ermöglichen, eine Aufgabe zu bearbeiten, müssen wir eine Benutzeroberfläche bereitstellen, damit sie dies tun können. Importieren Sie zuerst `useState` in die `<Todo />`-Komponente, wie wir es zuvor mit der `<App />`-Komponente getan haben:

```jsx
import { useState } from "react";
```

Wir werden dies verwenden, um einen `isEditing` Zustand mit einem Standardwert von `false` festzulegen. Fügen Sie die folgende Zeile direkt am Anfang der Definition Ihrer `<Todo />`-Komponente hinzu:

```jsx
const [isEditing, setEditing] = useState(false);
```

Als nächstes denken wir die `<Todo />`-Komponente neu. Von nun an möchten wir, dass sie eines von zwei möglichen "Templates" anzeigt, anstatt des einzigen Templates, das sie bisher verwendet hat:

- Das "Ansicht"-Template, wenn wir nur ein To-Do anzeigen; dies ist das, was wir im Tutorial bisher verwendet haben.
- Das "Bearbeitungs"-Template, wenn wir ein To-Do bearbeiten. Dieses werden wir jetzt erstellen.

Kopieren Sie diesen Codeblock in die `Todo()`-Funktion, unterhalb Ihres `useState()`-Hooks, aber oberhalb der `return`-Anweisung:

```jsx
const editingTemplate = (
  <form className="stack-small">
    <div className="form-group">
      <label className="todo-label" htmlFor={props.id}>
        Neuer Name für {props.name}
      </label>
      <input id={props.id} className="todo-text" type="text" />
    </div>
    <div className="btn-group">
      <button type="button" className="btn todo-cancel">
        Abbrechen
        <span className="visually-hidden">Umbenennen von {props.name}</span>
      </button>
      <button type="submit" className="btn btn__primary todo-edit">
        Speichern
        <span className="visually-hidden">neuer Name für {props.name}</span>
      </button>
    </div>
  </form>
);
const viewTemplate = (
  <div className="stack-small">
    <div className="c-cb">
      <input
        id={props.id}
        type="checkbox"
        defaultChecked={props.completed}
        onChange={() => props.toggleTaskCompleted(props.id)}
      />
      <label className="todo-label" htmlFor={props.id}>
        {props.name}
      </label>
    </div>
    <div className="btn-group">
      <button type="button" className="btn">
        Bearbeiten <span className="visually-hidden">{props.name}</span>
      </button>
      <button
        type="button"
        className="btn btn__danger"
        onClick={() => props.deleteTask(props.id)}>
        Löschen <span className="visually-hidden">{props.name}</span>
      </button>
    </div>
  </div>
);
```

Wir haben jetzt die zwei verschiedenen Template-Strukturen – "editieren" und "ansicht" – innerhalb von zwei separaten Konstanten definiert. Dies bedeutet, dass die `return`-Anweisung von `<Todo />` jetzt redundant ist – sie enthält ebenfalls eine Definition des "Ansicht"-Templates. Wir können dies bereinigen, indem wir eine **bedingte Darstellung** verwenden, um zu bestimmen, welches Template die Komponente zurückgibt und somit in der UI dargestellt wird.

## Bedingte Darstellung

In JSX können wir eine Bedingung verwenden, um zu ändern, was vom Browser dargestellt wird. Um eine Bedingung in JSX zu schreiben, können wir einen [ternären Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

Im Fall unserer `<Todo />`-Komponente lautet unsere Bedingung "Wird diese Aufgabe bearbeitet?" Ändern Sie die `return`-Anweisung innerhalb von `Todo()`, sodass sie wie folgt aussieht:

```jsx
return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
```

Ihr Browser sollte jetzt alle Ihre Aufgaben wie zuvor darstellen. Um das Bearbeitungstemplate zu sehen, müssen Sie den Standardzustand `isEditing` vorübergehend von `false` auf `true` in Ihrem Code ändern; wir werden im nächsten Abschnitt darauf eingehen, den Bearbeiten-Button diese Änderung vornehmen zu lassen!

## Umschalten der `<Todo />` Templates

Endlich sind wir bereit, unser letztes Hauptmerkmal interaktiv zu machen. Zunächst möchten wir `setEditing()` mit einem Wert von `true` aufrufen, wenn ein Benutzer die Schaltfläche "Bearbeiten" in unserem `viewTemplate` drückt, damit wir die Templates umschalten können.

Aktualisieren Sie die "Bearbeiten"-Schaltfläche im `viewTemplate` wie folgt:

```jsx
<button type="button" className="btn" onClick={() => setEditing(true)}>
  Bearbeiten <span className="visually-hidden">{props.name}</span>
</button>
```

Jetzt fügen wir denselben `onClick`-Handler in der "Abbrechen"-Schaltfläche im `editingTemplate` hinzu, setzen dieses Mal jedoch `isEditing` auf `false`, sodass wir zurück zum Ansichtstemplate wechseln.

Aktualisieren Sie die "Abbrechen"-Schaltfläche im `editingTemplate` wie folgt:

```jsx
<button
  type="button"
  className="btn todo-cancel"
  onClick={() => setEditing(false)}>
  Abbrechen
  <span className="visually-hidden">Umbenennen von {props.name}</span>
</button>
```

Mit diesem Code sollten Sie in der Lage sein, die Schaltflächen "Bearbeiten" und "Abbrechen" in Ihren To-Do-Elementen zu drücken, um zwischen den Templates umzuschalten.

![Das Eat-To-Do-Element zeigt das Ansicht-Template mit verfügbaren Bearbeiten- und Löschen-Schaltflächen](view.png)

![Das Eat-To-Do-Element zeigt das Bearbeitungs-Template mit einem Eingabefeld für einen neuen Namen sowie verfügbaren Abbrechen- und Speichern-Tasten](edit.png)

Der nächste Schritt besteht darin, die Bearbeitungsfunktionalität tatsächlich zum Laufen zu bringen.

## Bearbeiten über die UI

Vieles, was wir gleich tun werden, wird die Arbeit widerspiegeln, die wir in `Form.jsx` gemacht haben: Wenn der Benutzer in unser neues Eingabefeld tippt, müssen wir den Text verfolgen, den er eingibt; nachdem er das Formular abgeschickt hat, müssen wir einen Rückruffunktions-Prop verwenden, um unseren Zustand mit dem neuen Namen der Aufgabe zu aktualisieren.

Zunächst erstellen wir einen neuen Hook, um den neuen Namen zu speichern und zu setzen. Immer noch in `Todo.jsx`, setzen Sie das folgende unter den bestehenden Hook:

```jsx
const [newName, setNewName] = useState("");
```

Erstellen Sie als Nächstes eine `handleChange()`-Funktion, die den neuen Namen setzt; platzieren Sie diese unter den Hooks, aber vor den Templates:

```jsx
function handleChange(e) {
  setNewName(e.target.value);
}
```

Nun aktualisieren wir das `<input />`-Feld unseres `editingTemplate`, setzen ein `value`-Attribut von `newName` und binden unsere `handleChange()`-Funktion an ihr `onChange`-Event. Aktualisieren Sie es wie folgt:

```jsx
<input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
/>
```

Schließlich müssen wir eine Funktion erstellen, um das `onSubmit`-Event des Bearbeitungsformulars zu handhaben. Fügen Sie das folgende direkt unterhalb von `handleChange()` hinzu:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  props.editTask(props.id, newName);
  setNewName("");
  setEditing(false);
}
```

Denken Sie daran, dass unser `editTask()`-Rückruf-Prop sowohl die ID der bearbeiteten Aufgabe als auch ihren neuen Namen benötigt.

Binden Sie diese Funktion an das `submit`-Event des Formulars, indem Sie den folgenden `onSubmit`-Handler dem `<form>` im `editingTemplate` hinzufügen:

```jsx
<form className="stack-small" onSubmit={handleSubmit}>
```

Sie sollten nun in der Lage sein, eine Aufgabe in Ihrem Browser zu bearbeiten. An diesem Punkt sollte Ihre `Todo.jsx`-Datei folgendermaßen aussehen:

```jsx
function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          Neuer Name für {props.name}
        </label>
        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          onClick={() => setEditing(false)}>
          Abbrechen
          <span className="visually-hidden">Umbenennen von {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Speichern
          <span className="visually-hidden">neuer Name für {props.name}</span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => {
            setEditing(true);
          }}>
          Bearbeiten <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}>
          Löschen <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;
```

## Zurück zu den Filter-Schaltflächen

Nun, da unsere Hauptfunktionen abgeschlossen sind, können wir über unsere Filter-Schaltflächen nachdenken. Momentan wiederholen sie die "Alle"-Beschriftung und haben keine Funktionalität! Wir werden einige Fähigkeiten, die wir in unserer `<Todo />`-Komponente verwendet haben, wieder anwenden, um:

- Einen Hook für die Speicherung des aktiven Filters zu erstellen.
- Ein Array von `<FilterButton />`-Elementen darzustellen, die es Benutzern ermöglichen, den aktiven Filter zwischen allen, erledigten und unerledigten Aufgaben zu ändern.

### Hinzufügen eines Filter-Hooks

Fügen Sie Ihrer `App()`-Funktion einen neuen Hook hinzu, der einen Filter liest und setzt. Wir möchten, dass der Standardfilter `All` ist, da anfangs alle unsere Aufgaben angezeigt werden sollen:

```jsx
const [filter, setFilter] = useState("All");
```

### Definieren unserer Filter

Unser Ziel ist derzeit zweifach:

- Jeder Filter sollte einen eindeutigen Namen haben.
- Jeder Filter sollte ein einzigartiges Verhalten haben.

Ein JavaScript-Objekt wäre eine großartige Möglichkeit, Namen mit Verhaltensweisen zu verknüpfen: jeder Schlüssel ist der Name eines Filters; jede Eigenschaft ist das Verhalten, das mit diesem Namen verknüpft ist.

Fügen Sie am oberen Rand von `App.jsx`, unter unseren Importen, aber über unserer `App()`-Funktion, ein Objekt namens `FILTER_MAP` hinzu:

```jsx
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
```

Die Werte von `FILTER_MAP` sind Funktionen, die wir verwenden werden, um das `tasks` Daten-Array zu filtern:

- Der `All`-Filter zeigt alle Aufgaben, daher geben wir `true` für alle Aufgaben zurück.
- Der `Active`-Filter zeigt Aufgaben, deren `completed`-Eigenschaft `false` ist.
- Der `Completed`-Filter zeigt Aufgaben an, deren `completed`-Eigenschaft `true` ist.

Fügen Sie unter unserer vorherigen Hinzufügung das folgende hinzu — hier verwenden wir die Methode [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), um ein Array von `FILTER_NAMES` zu sammeln:

```jsx
const FILTER_NAMES = Object.keys(FILTER_MAP);
```

> [!NOTE]
> Wir definieren diese Konstanten außerhalb unserer `App()`-Funktion, weil sie, wenn sie darin definiert wären, jedes Mal neu berechnet würden, wenn die `<App />`-Komponente neu gerendert wird, und das wollen wir nicht. Diese Informationen werden sich niemals ändern, egal, was unsere Anwendung tut.

### Darstellen der Filter

Jetzt, da wir das `FILTER_NAMES`-Array haben, können wir es verwenden, um alle drei unserer Filter darzustellen. Innerhalb der `App()`-Funktion können wir eine Konstante namens `filterList` erstellen, die wir verwenden werden, um über unser Array von Namen zu mappen und eine `<FilterButton />`-Komponente zurückzugeben. Denken Sie daran, dass wir hier auch Schlüssel benötigen.

Fügen Sie das folgende unterhalb Ihrer `taskList` Konstantendeklaration hinzu:

```jsx
const filterList = FILTER_NAMES.map((name) => (
  <FilterButton key={name} name={name} />
));
```

Nun ersetzen wir die drei sich wiederholenden `<FilterButton />`s in `App.jsx` durch diese `filterList`. Ersetzen Sie das folgende:

```jsx
<FilterButton />
<FilterButton />
<FilterButton />
```

Durch dieses:

```jsx-nolint
{filterList}
```

Das wird noch nicht funktionieren. Wir haben noch ein wenig mehr Arbeit zu leisten.

### Interaktive Filter

Um unsere Filter-Schaltflächen interaktiv zu machen, sollten wir überlegen, welche Props sie nutzen müssen.

- Wir wissen, dass der `<FilterButton />` melden sollte, ob er aktuell gedrückt ist, und er sollte gedrückt sein, wenn sein Name mit dem aktuellen Wert unseres Filter-Zustands übereinstimmt.
- Wir wissen, dass der `<FilterButton />` einen Rückruf benötigt, um den aktiven Filter zu setzen. Wir können direkt unseren `setFilter`-Hook nutzen.

Aktualisieren Sie Ihre `filterList`-Konstante wie folgt:

```jsx
const filterList = FILTER_NAMES.map((name) => (
  <FilterButton
    key={name}
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
  />
));
```

Auf die gleiche Weise, wie wir es zuvor bei unserer `<Todo />`-Komponente gemacht haben, müssen wir nun `FilterButton.jsx` aktualisieren, um die von uns gegebenen Props zu nutzen. Erledigen Sie dabei jedes der folgenden Dinge und denken Sie daran, geschweifte Klammern zu verwenden, um diese Variablen zu lesen!

- Ersetzen Sie `all` durch `{props.name}`.
- Setzen Sie den Wert von `aria-pressed` auf `{props.isPressed}`.
- Fügen Sie einen `onClick`-Handler hinzu, der `props.setFilter()` mit dem Namen des Filters aufruft.

Mit all dem sollte Ihre `FilterButton.jsx`-Datei so aussehen:

```jsx
function FilterButton(props) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}>
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
```

Besuchen Sie wieder Ihren Browser. Sie sollten sehen, dass die verschiedenen Schaltflächen ihre jeweiligen Namen erhalten haben. Wenn Sie eine Filter-Schaltfläche drücken, sollten Sie sehen, dass ihr Text einen neuen Umriss erhält — das zeigt Ihnen, dass sie ausgewählt wurde. Und wenn Sie den Page Inspector Ihres DevTools während Sie die Schaltflächen klicken betrachten, sehen Sie, wie sich die `aria-pressed`-Attributwerte entsprechend ändern.

![Die drei Filter-Schaltflächen der App - alle, aktiv, und abgeschlossen - mit einem Fokushervorhebung um abgeschlossen](filter-buttons.png)

Allerdings filtern unsere Schaltflächen die Todos in der Benutzeroberfläche immer noch nicht tatsächlich! Lassen Sie uns das zu Ende bringen.

### Filtern von Aufgaben in der Benutzeroberfläche

Momentan mappt unsere `taskList`-Konstante in `App()` über den Aufgaben-Zustand und gibt eine neue `<Todo />`-Komponente für alle zurück. Das ist nicht, was wir wollen! Eine Aufgabe sollte nur gerendert werden, wenn sie in den Ergebnissen der Anwendung des ausgewählten Filters enthalten ist. Bevor wir über den Aufgaben-Zustand mappen, sollten wir ihn filtern (mit [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)), um Objekte zu eliminieren, die wir nicht rendern wollen.

Aktualisieren Sie Ihre `taskList` wie folgt:

```jsx
const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
```

Um zu entscheiden, welche Rückruffunktion in `Array.prototype.filter()` verwendet werden soll, greifen wir auf den Wert in `FILTER_MAP` zu, der dem Schlüssel unseres Filterzustands entspricht. Wenn der Filter zum Beispiel `All` ist, wird `FILTER_MAP[filter]` zu `() => true` ausgewertet.

Das Auswählen eines Filters im Browser wird nun die Aufgaben entfernen, die nicht den Kriterien entsprechen. Die Anzahl in der Überschrift über der Liste ändert sich ebenfalls entsprechend!

![Die App mit den Filter-Schaltflächen an Ort und Stelle. Aktiv ist hervorgehoben, daher werden nur die aktiven To-Do-Elemente angezeigt.](filtered-todo-list.png)

## Zusammenfassung

Das war's — unsere App ist nun funktional komplett. Da wir jedoch alle unsere Funktionen implementiert haben, können wir einige Verbesserungen vornehmen, um sicherzustellen, dass eine breitere Palette von Benutzern unsere App nutzen kann. Unser nächster Artikel schließt unsere React-Tutorials ab, indem er sich mit dem Fokusmanagement in React befasst, welches die Benutzerfreundlichkeit verbessern und Verwirrung reduzieren kann für sowohl Tastaturnutzer als auch Benutzer von Screenreadern.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
