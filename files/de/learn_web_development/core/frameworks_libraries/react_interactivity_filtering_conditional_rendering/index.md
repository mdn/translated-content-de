---
title: "React-Interaktivität: Bearbeiten, Filtern, bedingte Darstellung"
short-title: React-Bearbeitung, -Filterung, -bedingte UI
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/React_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}

Da wir uns dem Ende unserer React-Reise nähern (zumindest vorerst), werden wir die letzten Schliffe an den Hauptbereichen der Funktionalität unserer Todo-Listen-App vornehmen. Dazu gehört, dass Sie bestehende Aufgaben bearbeiten und die Liste der Aufgaben zwischen allen, erledigten und nicht erledigten Aufgaben filtern können. Unterwegs werden wir uns die bedingte UI-Darstellung ansehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie der
        <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Command Line</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Bedingte Darstellung in React und Implementierung von Listenfilterung und einer Bearbeitungs-UI in unserer App.
      </td>
    </tr>
  </tbody>
</table>

## Bearbeiten des Namens einer Aufgabe

Wir haben noch keine Benutzeroberfläche zum Bearbeiten des Namens einer Aufgabe. Dazu kommen wir gleich. Zunächst können wir zumindest eine `editTask()`-Funktion in `App.jsx` implementieren. Diese wird `deleteTask()` ähnlich sein, da sie eine `id` benötigt, um das Zielobjekt zu finden, aber sie wird auch eine `newName`-Eigenschaft benötigen, die den Namen enthält, um die Aufgabe zu aktualisieren. Wir verwenden [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) anstelle von [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), da wir ein neues Array mit einigen Änderungen zurückgeben möchten, anstatt etwas aus dem Array zu löschen.

Fügen Sie die `editTask()`-Funktion in Ihre `<App />`-Komponente an derselben Stelle wie die anderen Funktionen hinzu:

```jsx
function editTask(id, newName) {
  const editedTaskList = tasks.map((task) => {
    // if this task has the same ID as the edited task
    if (id === task.id) {
      // Copy the task and update its name
      return { ...task, name: newName };
    }
    // Return the original task if it's not the edited task
    return task;
  });
  setTasks(editedTaskList);
}
```

Geben Sie `editTask` auf die gleiche Weise als Prop in unsere `<Todo />`-Komponenten, wie wir es mit `deleteTask` gemacht haben:

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

Öffnen Sie jetzt `Todo.jsx`. Wir werden einige Umstrukturierungen vornehmen.

## Eine UI zum Bearbeiten

Um Benutzern das Bearbeiten einer Aufgabe zu ermöglichen, müssen wir ihnen eine Benutzeroberfläche dafür bereitstellen. Importieren Sie zunächst `useState` in die `<Todo />`-Komponente, wie wir es zuvor mit der `<App />`-Komponente getan haben:

```jsx
import { useState } from "react";
```

Wir werden dies verwenden, um einen `isEditing`-Zustand mit einem Standardwert von `false` festzulegen. Fügen Sie die folgende Zeile gleich am Anfang Ihrer `<Todo />`-Komponentendefinition hinzu:

```jsx
const [isEditing, setEditing] = useState(false);
```

Als nächstes überdenken wir die `<Todo />`-Komponente. Von nun an möchten wir, dass sie eine von zwei möglichen "Vorlagen" anzeigt, anstatt der einzigen Vorlage, die sie bisher verwendet hat:

- Die "Ansichts"-Vorlage, wenn wir eine Aufgabe nur ansehen; dies haben wir bisher im Tutorial verwendet.
- Die "Bearbeitungs"-Vorlage, wenn wir eine Aufgabe bearbeiten. Diese werden wir gleich erstellen.

Kopieren Sie diesen Codeblock in die `Todo()`-Funktion, unterhalb Ihres `useState()`-Hooks, aber oberhalb der `return`-Anweisung:

```jsx
const editingTemplate = (
  <form className="stack-small">
    <div className="form-group">
      <label className="todo-label" htmlFor={props.id}>
        New name for {props.name}
      </label>
      <input id={props.id} className="todo-text" type="text" />
    </div>
    <div className="btn-group">
      <button type="button" className="btn todo-cancel">
        Cancel
        <span className="visually-hidden">renaming {props.name}</span>
      </button>
      <button type="submit" className="btn btn__primary todo-edit">
        Save
        <span className="visually-hidden">new name for {props.name}</span>
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
        Edit <span className="visually-hidden">{props.name}</span>
      </button>
      <button
        type="button"
        className="btn btn__danger"
        onClick={() => props.deleteTask(props.id)}>
        Delete <span className="visually-hidden">{props.name}</span>
      </button>
    </div>
  </div>
);
```

Wir haben jetzt die zwei unterschiedlichen Vorlagenstrukturen - "Bearbeiten" und "Ansicht" - in zwei separaten Konstanten definiert. Das bedeutet, dass die `return`-Anweisung von `<Todo />` jetzt sich wiederholend ist - sie enthält auch eine Definition der "Ansichts"-Vorlage. Wir können dies bereinigen, indem wir **bedingte Darstellung** verwenden, um zu bestimmen, welche Vorlage die Komponente zurückgibt und somit in der UI angezeigt wird.

## Bedingte Darstellung

In JSX können wir eine Bedingung verwenden, um zu ändern, was vom Browser angezeigt wird. Um eine Bedingung in JSX zu schreiben, können wir einen [ternären Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

Im Fall unserer `<Todo />`-Komponente ist unsere Bedingung "Wird diese Aufgabe bearbeitet?" Ändern Sie die `return`-Anweisung in `Todo()`, damit sie folgendermaßen aussieht:

```jsx
return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
```

Ihr Browser sollte alle Ihre Aufgaben wie zuvor anzeigen. Um die Bearbeitungsvorlage zu sehen, müssen Sie jetzt den Standardzustand von `isEditing` in Ihrem Code von `false` auf `true` ändern; im nächsten Abschnitt werden wir uns damit beschäftigen, wie die Bearbeitungsschaltfläche dies umschalten kann!

## Umschalten der `<Todo />`-Vorlagen

Endlich sind wir bereit, unser letztes Kernmerkmal interaktiv zu machen. Zunächst möchten wir `setEditing()` mit dem Wert `true` aufrufen, wenn ein Benutzer die "Bearbeiten"-Schaltfläche in unserer `viewTemplate` drückt, damit wir die Vorlagen umschalten können.

Aktualisieren Sie die "Bearbeiten"-Schaltfläche in der `viewTemplate`-Vorlage wie folgt:

```jsx
<button type="button" className="btn" onClick={() => setEditing(true)}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Jetzt fügen wir den gleichen `onClick`-Handler zur "Abbrechen"-Schaltfläche in der `editingTemplate`-Vorlage hinzu, aber diesmal setzen wir `isEditing` auf `false`, damit wir zur Ansichtsvorlage zurückkehren.

Aktualisieren Sie die "Abbrechen"-Schaltfläche in der `editingTemplate`-Vorlage wie folgt:

```jsx
<button
  type="button"
  className="btn todo-cancel"
  onClick={() => setEditing(false)}>
  Cancel
  <span className="visually-hidden">renaming {props.name}</span>
</button>
```

Mit diesem Code sollten Sie in der Lage sein, die "Bearbeiten"- und "Abbrechen"-Schaltflächen in Ihren Aufgaben zu drücken, um zwischen den Vorlagen zu wechseln.

![Das "Eat"-Aufgabenelement zeigt die Ansichtsvorlage mit den verfügbaren Bearbeiten- und Löschen-Schaltflächen](view.png)

![Das "Eat"-Aufgabenelement zeigt die Bearbeitungsvorlage mit einem Eingabefeld zum Eingeben eines neuen Namens sowie den verfügbaren Abbrechen- und Speichern-Schaltflächen](edit.png)

Der nächste Schritt besteht darin, die Bearbeitungsfunktionalität tatsächlich funktionsfähig zu machen.

## Bearbeiten über die UI

Ein Großteil dessen, was wir jetzt tun werden, spiegelt die Arbeit wider, die wir in `Form.jsx` geleistet haben: Während der Benutzer in unser neues Eingabefeld tippt, müssen wir den eingegebenen Text nachverfolgen; sobald er das Formular übermittelt, müssen wir eine Callback-Prop verwenden, um unseren Zustand mit dem neuen Namen der Aufgabe zu aktualisieren.

Wir beginnen mit der Erstellung eines neuen Hooks zum Speichern und Festlegen des neuen Namens. Immer noch in `Todo.jsx`, setzen Sie das folgende unter den bestehenden Hook:

```jsx
const [newName, setNewName] = useState("");
```

Erstellen Sie als nächstes eine `handleChange()`-Funktion, die den neuen Namen festlegt; setzen Sie dies unter die Hooks, aber vor die Vorlagen:

```jsx
function handleChange(e) {
  setNewName(e.target.value);
}
```

Nun aktualisieren wir das `<input />`-Feld in unserer `editingTemplate`, indem wir ihm ein `value`-Attribut von `newName` geben und unsere `handleChange()`-Funktion an sein `onChange`-Event binden. Aktualisieren Sie es wie folgt:

```jsx
<input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
/>
```

Schließlich müssen wir eine Funktion erstellen, um das `onSubmit`-Ereignis des Bearbeitungsformulars zu verarbeiten. Fügen Sie das Folgende direkt unter `handleChange()` hinzu:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  props.editTask(props.id, newName);
  setNewName("");
  setEditing(false);
}
```

Denken Sie daran, dass unsere `editTask()`-Callback-Prop die ID der Aufgabe benötigt, die wir bearbeiten, sowie deren neuen Namen.

Binden Sie diese Funktion an das `submit`-Ereignis des Formulars, indem Sie den folgenden `onSubmit`-Handler zur `<form>` der `editingTemplate` hinzufügen:

```jsx
<form className="stack-small" onSubmit={handleSubmit}>
```

Sie sollten nun in der Lage sein, eine Aufgabe in Ihrem Browser zu bearbeiten. An diesem Punkt sollte Ihre `Todo.jsx`-Datei so aussehen:

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
          New name for {props.name}
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
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
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
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}>
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;
```

## Zurück zu den Filterschaltflächen

Da nun unsere Hauptfunktionen abgeschlossen sind, können wir uns unsere Filterschaltflächen ansehen. Derzeit wiederholen sie das Label "All" und haben keine Funktionalität! Wir werden einige Fähigkeiten aus unserer `<Todo />`-Komponente erneut anwenden, um:

- Einen Hook zu erstellen, der den aktiven Filter speichert.
- Ein Array von `<FilterButton />`-Elementen zu rendern, das es den Benutzern ermöglicht, den aktiven Filter zwischen allen, erledigten und unerledigten Aufgaben zu ändern.

### Einen Filter-Hook hinzufügen

Fügen Sie Ihrer `App()`-Funktion einen neuen Hook hinzu, der einen Filter liest und setzt. Wir möchten, dass der Standardfilter `All` ist, da zunächst alle Aufgaben angezeigt werden sollen:

```jsx
const [filter, setFilter] = useState("All");
```

### Unsere Filter definieren

Unser Ziel ist jetzt zweifach:

- Jeder Filter sollte einen eindeutigen Namen haben.
- Jeder Filter sollte ein einzigartiges Verhalten haben.

Ein JavaScript-Objekt wäre eine großartige Möglichkeit, Namen mit Verhaltensweisen zu verknüpfen: Jeder Schlüssel ist der Name eines Filters; jede Eigenschaft ist das Verhalten, das mit diesem Namen verknüpft ist.

Fügen wir oben in `App.jsx`, unterhalb unserer Importe, aber oberhalb unserer `App()`-Funktion, ein Objekt namens `FILTER_MAP` hinzu:

```jsx
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
```

Die Werte von `FILTER_MAP` sind Funktionen, die wir verwenden werden, um das `tasks`-Datenarray zu filtern:

- Der `All`-Filter zeigt alle Aufgaben, daher geben wir `true` für alle Aufgaben zurück.
- Der `Active`-Filter zeigt Aufgaben, deren `completed`-Eigenschaft `false` ist.
- Der `Completed`-Filter zeigt Aufgaben, deren `completed`-Eigenschaft `true` ist.

Fügen Sie unter unserer vorherigen Ergänzung das Folgende hinzu – hier verwenden wir die [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)-Methode, um ein Array von `FILTER_NAMES` zu sammeln:

```jsx
const FILTER_NAMES = Object.keys(FILTER_MAP);
```

> [!NOTE]
> Wir definieren diese Konstanten außerhalb unserer `App()`-Funktion, weil sie bei jeder Wiederverwendung der `<App />`-Komponente neu berechnet würden, wenn sie innerhalb von ihr definiert wären, und das wollen wir nicht. Diese Informationen ändern sich nie, egal was unsere Anwendung tut.

### Die Filter rendern

Jetzt, da wir das `FILTER_NAMES`-Array haben, können wir es verwenden, um alle unsere drei Filter zu rendern. Innerhalb der `App()`-Funktion können wir eine Konstante namens `filterList` erstellen, die wir verwenden, um über unser Array von Namen zu iterieren und eine `<FilterButton />`-Komponente zurückzugeben. Denken Sie daran, dass wir hier auch Schlüssel benötigen.

Fügen Sie das Folgende unter Ihrer `taskList`-Konstantendetermination hinzu:

```jsx
const filterList = FILTER_NAMES.map((name) => (
  <FilterButton key={name} name={name} />
));
```

Jetzt ersetzen wir die drei wiederholten `<FilterButton />` in `App.jsx` durch diese `filterList`. Ersetzen Sie Folgendes:

```jsx
<FilterButton />
<FilterButton />
<FilterButton />
```

Durch dies:

```jsx-nolint
{filterList}
```

Das wird noch nicht funktionieren. Wir haben zuerst noch ein bisschen Arbeit zu erledigen.

### Interaktive Filter

Damit unsere Filterschaltflächen interaktiv sind, sollten wir überlegen, welche Requisiten sie nutzen müssen.

- Wir wissen, dass die `<FilterButton />` anzeigen sollte, ob sie derzeit gedrückt ist, und sie sollte gedrückt sein, wenn ihr Name mit dem aktuellen Wert unseres Filterzustands übereinstimmt.
- Wir wissen, dass die `<FilterButton />` eine Callback-Funktion benötigt, um den aktiven Filter festzulegen. Wir können direkt unseren `setFilter`-Hook verwenden.

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

Genauso wie wir es zuvor mit unserer `<Todo />`-Komponente gemacht haben, müssen wir jetzt `FilterButton.jsx` aktualisieren, um die Requisiten zu nutzen, die wir ihr gegeben haben. Führen Sie jede der folgenden Änderungen durch und denken Sie daran, geschweifte Klammern zu verwenden, um diese Variablen zu lesen!

- Ersetzen Sie `all` durch `{props.name}`.
- Setzen Sie den Wert von `aria-pressed` auf `{props.isPressed}`.
- Fügen Sie einen `onClick`-Handler hinzu, der `props.setFilter()` mit dem Namen des Filters aufruft.

Mit all diesen Änderungen sollte Ihre `FilterButton.jsx`-Datei so aussehen:

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

Besuchen Sie erneut Ihren Browser. Sie sollten sehen, dass die verschiedenen Schaltflächen ihre jeweiligen Namen erhalten haben. Wenn Sie eine Filterschaltfläche drücken, sollten Sie sehen, dass ihr Text einen neuen Umriss annimmt — dies zeigt Ihnen, dass sie ausgewählt wurde. Und wenn Sie Ihr DevTool's Page Inspector beim Klicken auf die Schaltflächen betrachten, sehen Sie, wie sich die `aria-pressed`-Attributwerte entsprechend ändern.

![Die drei Filterschaltflächen der App - alle, aktiv und abgeschlossen - mit einem Fokus-Highlight um "abgeschlossen"](filter-buttons.png)

Unsere Schaltflächen filtern die Todos jedoch immer noch nicht in der Benutzeroberfläche! Lassen Sie uns dies abschließen.

### Aufgaben in der UI filtern

Momentan iteriert unsere `taskList`-Konstante in `App()` über den Aufgabenstatus und gibt für alle eine neue `<Todo />`-Komponente zurück. Das ist nicht das, was wir wollen! Eine Aufgabe sollte nur gerendert werden, wenn sie in den Ergebnissen des ausgewählten Filters enthalten ist. Bevor wir über den Aufgabenstatus iterieren, sollten wir ihn (mit [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)) filtern, um Objekte zu eliminieren, die wir nicht rendern möchten.

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

Um zu entscheiden, welche Callback-Funktion in `Array.prototype.filter()` verwendet werden soll, greifen wir auf den Wert in `FILTER_MAP` zu, der dem Schlüssel unseres Filterzustands entspricht. Wenn der Filter beispielsweise `All` ist, wird `FILTER_MAP[filter]` zu `() => true`.

Wenn Sie einen Filter in Ihrem Browser auswählen, werden nun die Aufgaben entfernt, die nicht den Kriterien entsprechen. Auch die Anzahl in der Überschrift oberhalb der Liste wird sich ändern, um die Liste widerzuspiegeln!

![Die App mit den angewendeten Filterschaltflächen. "Aktiv" ist hervorgehoben, sodass nur die aktiven Aufgaben angezeigt werden.](filtered-todo-list.png)

## Zusammenfassung

Das war's – unsere App ist jetzt funktional komplett. Jetzt, da wir alle Funktionen implementiert haben, können wir ein paar Verbesserungen vornehmen, um sicherzustellen, dass eine breitere Benutzergruppe unsere App nutzen kann. Unser nächster Artikel rundet unsere React-Tutorials ab, indem er sich mit der Einbeziehung des Fokusmanagements in React befasst, was die Benutzerfreundlichkeit verbessern und Verwirrung für Tastatur- und Screenreader-Benutzer verringern kann.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/React_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}
