---
title: "Reaktivität in React: Bearbeiten, Filtern, bedingtes Rendern"
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/React_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}

Da wir uns dem Ende unserer Reise mit React nähern (zumindest vorerst), werden wir den letzten Schliff an die Hauptfunktionen in unserer Todo-Listen-App anbringen. Dazu gehört, Ihnen die Möglichkeit zu geben, bestehende Aufgaben zu bearbeiten und die Liste der Aufgaben zwischen allen, abgeschlossenen und unvollständigen Aufgaben zu filtern. Wir werden unterwegs das bedingte UI-Rendering betrachten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, sowie mit dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Bedingtes Rendern in React und Implementierung von Listenfiltern und einer Bearbeitungs-UI in unserer App.
      </td>
    </tr>
  </tbody>
</table>

## Bearbeiten des Namens einer Aufgabe

Wir haben noch keine Benutzeroberfläche zum Bearbeiten des Namens einer Aufgabe. Dazu kommen wir gleich. Zunächst können wir zumindest eine `editTask()`-Funktion in `App.jsx` implementieren. Sie wird der `deleteTask()`-Funktion ähnlich sein, da sie eine `id` benötigt, um das Zielobjekt zu finden, sie wird jedoch auch eine `newName`-Eigenschaft übernehmen, die den neuen Namen enthält, mit dem die Aufgabe aktualisiert wird. Wir verwenden [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) anstelle von [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), da wir ein neues Array mit einigen Änderungen zurückgeben möchten, anstatt etwas aus dem Array zu löschen.

Fügen Sie die `editTask()`-Funktion in Ihre `<App />`-Komponente ein, an der gleichen Stelle, an der sich die anderen Funktionen befinden:

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

Übergeben Sie `editTask` unseren `<Todo />`-Komponenten als Prop, auf die gleiche Weise wie `deleteTask`:

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

Öffnen Sie nun `Todo.jsx`. Wir werden etwas umstrukturieren.

## Eine Benutzeroberfläche zum Bearbeiten

Um den Benutzern das Bearbeiten einer Aufgabe zu ermöglichen, müssen wir ihnen eine Benutzeroberfläche dafür bereitstellen. Importieren Sie zunächst `useState` in die `<Todo />`-Komponente, wie wir es zuvor mit der `<App />`-Komponente gemacht haben:

```jsx
import { useState } from "react";
```

Wir werden dies verwenden, um einen `isEditing`-Status mit einem Standardwert von `false` festzulegen. Fügen Sie die folgende Zeile direkt am Anfang Ihrer `<Todo />`-Komponentendefinition hinzu:

```jsx
const [isEditing, setEditing] = useState(false);
```

Als nächstes denken wir über die `<Todo />`-Komponente nach. Von nun an möchten wir, dass sie eines von zwei möglichen "Templates" anzeigt, anstelle des einzigen Templates, das sie bisher verwendet:

- Das "Ansichts"-Template, wenn wir nur eine Todo ansehen; das ist das, was wir bisher im Tutorial verwendet haben.
- Das "Bearbeitungs"-Template, wenn wir eine Todo bearbeiten. Das werden wir jetzt erstellen.

Kopieren Sie diesen Codeblock in die `Todo()`-Funktion, unter Ihre `useState()`-Hook, aber über die `return`-Anweisung:

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

Wir haben nun die beiden unterschiedlichen Template-Strukturen – "Bearbeiten" und "Ansicht" – in zwei getrennten Konstanten definiert. Das bedeutet, dass die `return`-Anweisung von `<Todo />` jetzt überflüssig ist – sie enthält ebenfalls eine Definition des "Ansichts"-Templates. Wir können dies aufräumen, indem wir **bedingtes Rendern** verwenden, um festzulegen, welches Template die Komponente zurückgibt und somit in der Benutzeroberfläche gerendert wird.

## Bedingtes Rendern

In JSX können wir eine Bedingung verwenden, um zu ändern, was vom Browser gerendert wird. Um eine Bedingung in JSX zu schreiben, können wir einen [ternären Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

Im Fall unserer `<Todo />`-Komponente lautet unsere Bedingung: "Wird diese Aufgabe bearbeitet?" Ändern Sie die `return`-Anweisung in `Todo()`, sodass sie folgendermaßen aussieht:

```jsx
return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
```

Ihr Browser sollte alle Ihre Aufgaben wie zuvor rendern. Um das Bearbeitungstemplate zu sehen, müssen Sie vorerst in Ihrem Code den Standardstatus `isEditing` von `false` auf `true` ändern; wir werden im nächsten Abschnitt darauf eingehen, wie die Bearbeitungsschaltfläche dies umschalten kann!

## Umschalten der `<Todo />`-Vorlagen

Endlich sind wir bereit, unsere letzte Kernfunktion interaktiv zu machen. Zunächst möchten wir `setEditing()` mit einem Wert von `true` aufrufen, wenn ein Benutzer die "Bearbeiten"-Schaltfläche in unserem `viewTemplate` drückt, damit wir die Vorlagen wechseln können.

Aktualisieren Sie die "Bearbeiten"-Schaltfläche im `viewTemplate` so:

```jsx
<button type="button" className="btn" onClick={() => setEditing(true)}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Nun fügen wir denselben `onClick`-Handler zur "Abbrechen"-Schaltfläche im `editingTemplate` hinzu, jedoch diesmal setzen wir `isEditing` auf `false`, damit wir wieder zum Ansichts-Template wechseln können.

Aktualisieren Sie die "Abbrechen"-Schaltfläche im `editingTemplate` so:

```jsx
<button
  type="button"
  className="btn todo-cancel"
  onClick={() => setEditing(false)}>
  Cancel
  <span className="visually-hidden">renaming {props.name}</span>
</button>
```

Mit diesem Code sollten Sie in der Lage sein, die "Bearbeiten"- und "Abbrechen"-Schaltflächen in Ihren Todo-Einträgen zu drücken, um zwischen den Vorlagen umzuschalten.

![Das Todo-Element "essen" zeigt das Ansichtstemplate mit verfügbaren Bearbeitungs- und Lösch-Buttons](view.png)

![Das Todo-Element "essen" zeigt das Bearbeitungstemplate mit einem Eingabefeld für einen neuen Namen und verfügbaren Abbruch- und Speicher-Buttons](edit.png)

Der nächste Schritt besteht darin, die Bearbeitungsfunktionalität tatsächlich zum Laufen zu bringen.

## Bearbeiten über die Benutzeroberfläche

Viel von dem, was wir gleich tun werden, spiegelt die Arbeit wider, die wir in `Form.jsx` gemacht haben: Wenn der Benutzer in unser neues Eingabefeld tippt, müssen wir den eingegebenen Text verfolgen; sobald sie das Formular abschicken, müssen wir einen Callback-Prop verwenden, um unseren Status mit dem neuen Namen der Aufgabe zu aktualisieren.

Wir beginnen damit, einen neuen Hook zum Speichern und Setzen des neuen Namens zu erstellen. Immer noch in `Todo.jsx`, fügen Sie das Folgende unter dem bestehenden Hook hinzu:

```jsx
const [newName, setNewName] = useState("");
```

Erstellen Sie als nächstes eine `handleChange()`-Funktion, die den neuen Namen festlegt; setzen Sie diese unter die Hooks, aber vor die Templates:

```jsx
function handleChange(e) {
  setNewName(e.target.value);
}
```

Nun werden wir das `<input />`-Feld unseres `editingTemplate` aktualisieren und eine `value`-Eigenschaft von `newName` setzen und unsere `handleChange()`-Funktion an das `onChange`-Ereignis binden. Aktualisieren Sie es wie folgt:

```jsx
<input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
/>
```

Schließlich müssen wir eine Funktion erstellen, um das `onSubmit`-Ereignis des Bearbeitungsformulars zu behandeln. Fügen Sie das Folgende direkt unter `handleChange()` hinzu:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  props.editTask(props.id, newName);
  setNewName("");
  setEditing(false);
}
```

Denken Sie daran, dass unser `editTask()`-Callback-Prop die ID der Aufgabe benötigt, die wir bearbeiten, sowie ihren neuen Namen.

Binden Sie diese Funktion an das `submit`-Ereignis des Formulars, indem Sie den folgenden `onSubmit`-Handler zum `<form>` im `editingTemplate` hinzufügen:

```jsx
<form className="stack-small" onSubmit={handleSubmit}>
```

Sie sollten jetzt in der Lage sein, eine Aufgabe in Ihrem Browser zu bearbeiten. An diesem Punkt sollte Ihre `Todo.jsx`-Datei wie folgt aussehen:

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

## Zurück zu den Filter-Schaltflächen

Jetzt, da unsere Hauptfunktionen vollständig sind, können wir über unsere Filter-Schaltflächen nachdenken. Derzeit wiederholen sie das "All"-Label und haben keine Funktionalität! Wir werden einige Fähigkeiten, die wir in unserer `<Todo />`-Komponente verwendet haben, erneut anwenden, um:

- Einen Hook zum Speichern des aktiven Filters zu erstellen.
- Ein Array von `<FilterButton />`-Elementen zu rendern, die es den Benutzern ermöglichen, den aktiven Filter zwischen allen, abgeschlossenen und unvollständigen Aufgaben zu ändern.

### Hinzufügen eines Filter-Hooks

Fügen Sie Ihrer `App()`-Funktion einen neuen Hook hinzu, der einen Filter liest und setzt. Wir möchten, dass der Standardfilter `All` ist, da alle unsere Aufgaben zunächst angezeigt werden sollten:

```jsx
const [filter, setFilter] = useState("All");
```

### Definition unserer Filter

Unser Ziel ist es jetzt, zwei Dinge zu erreichen:

- Jeder Filter sollte einen eindeutigen Namen haben.
- Jeder Filter sollte ein einzigartiges Verhalten haben.

Ein JavaScript-Objekt wäre eine großartige Möglichkeit, Namen mit Verhaltensweisen zu verknüpfen: Jeder Schlüssel ist der Name eines Filters, jede Eigenschaft ist das Verhalten, das mit diesem Namen verbunden ist.

Fügen wir oben in `App.jsx`, unter unseren Imports, aber über unserer `App()`-Funktion, ein Objekt namens `FILTER_MAP` hinzu:

```jsx
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
```

Die Werte von `FILTER_MAP` sind Funktionen, die wir verwenden werden, um das `tasks`-Datenarray zu filtern:

- Der `All`-Filter zeigt alle Aufgaben an, also geben wir für alle Aufgaben `true` zurück.
- Der `Active`-Filter zeigt Aufgaben, deren `completed`-Eigenschaft `false` ist.
- Der `Completed`-Filter zeigt Aufgaben, deren `completed`-Eigenschaft `true` ist.

Fügen Sie das Folgende unter unserer vorherigen Ergänzung hinzu – hier verwenden wir die Methode [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), um ein Array von `FILTER_NAMES` zu sammeln:

```jsx
const FILTER_NAMES = Object.keys(FILTER_MAP);
```

> [!NOTE]
> Wir definieren diese Konstanten außerhalb unserer `App()`-Funktion, weil sie, wenn sie darin definiert wären, bei jedem Neurendern der `<App />`-Komponente neu berechnet würden, und das wollen wir nicht. Diese Informationen werden sich nicht ändern, egal was unsere Anwendung tut.

### Rendern der Filter

Jetzt, da wir das `FILTER_NAMES`-Array haben, können wir es verwenden, um alle drei unserer Filter zu rendern. Innerhalb der `App()`-Funktion können wir eine Konstante namens `filterList` erstellen, die wir verwenden werden, um über unser Array von Namen zu mappen und eine `<FilterButton />`-Komponente zurückzugeben. Denken Sie daran, dass wir hier auch Schlüssel benötigen.

Fügen Sie das Folgende unter Ihrer `taskList`-Konstanten-Deklaration hinzu:

```jsx
const filterList = FILTER_NAMES.map((name) => (
  <FilterButton key={name} name={name} />
));
```

Jetzt ersetzen wir die drei wiederholten `<FilterButton />` in `App.jsx` durch diese `filterList`. Ersetzen Sie das Folgende:

```jsx
<FilterButton />
<FilterButton />
<FilterButton />
```

Mit diesem:

```jsx-nolint
{filterList}
```

Dies wird noch nicht funktionieren. Wir haben zuerst noch etwas mehr zu tun.

### Interaktive Filter

Um unsere Filter-Schaltflächen interaktiv zu machen, sollten wir überlegen, welche Props sie nutzen müssen.

- Wir wissen, dass der `<FilterButton />` melden sollte, ob er derzeit gedrückt ist, und er sollte gedrückt sein, wenn sein Name mit dem aktuellen Wert unseres Filterstatus übereinstimmt.
- Wir wissen, dass der `<FilterButton />` einen Callback benötigt, um den aktiven Filter festzulegen. Wir können direkten Gebrauch von unserem `setFilter`-Hook machen.

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

In ähnlicher Weise wie zuvor mit unserer `<Todo />`-Komponente müssen wir jetzt `FilterButton.jsx` aktualisieren, um die Props zu nutzen, die wir ihr gegeben haben. Tun Sie jedes der folgenden Dinge, und denken Sie daran, geschweifte Klammern zu verwenden, um diese Variablen zu lesen!

- Ersetzen Sie `all` durch `{props.name}`.
- Setzen Sie den Wert von `aria-pressed` auf `{props.isPressed}`.
- Fügen Sie einen `onClick`-Handler hinzu, der `props.setFilter()` mit dem Namen des Filters aufruft.

Wenn all das erledigt ist, sollte Ihre `FilterButton.jsx`-Datei so aussehen:

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

Besuchen Sie Ihren Browser erneut. Sie sollten sehen, dass die verschiedenen Schaltflächen ihre jeweiligen Namen erhalten haben. Wenn Sie eine Filter-Schaltfläche drücken, sollten Sie sehen, dass ihr Text eine neue Umrandung erhält – dies zeigt Ihnen, dass sie ausgewählt wurde. Und wenn Sie den Seiteninspektor Ihres Developer-Tools öffnen, während Sie auf die Schaltflächen klicken, sehen Sie die `aria-pressed`-Attributwerte entsprechend ändern.

![Die drei Filter-Schaltflächen der App - alle, aktiv und abgeschlossen - mit einem Fokus-Highlight um abgeschlossen](filter-buttons.png)

Unsere Schaltflächen filtern jedoch noch nicht wirklich die Todos in der UI! Lassen Sie uns das abschließen.

### Filtern von Aufgaben in der UI

Derzeit mappt unsere `taskList`-Konstante in `App()` über den Aufgabenstatus und gibt eine neue `<Todo />`-Komponente für alle zurück. Das ist nicht, was wir wollen! Eine Aufgabe sollte nur gerendert werden, wenn sie in den Ergebnissen enthalten ist, die durch Anwenden des ausgewählten Filters erhalten wurden. Bevor wir über den Aufgabenstatus mappen, sollten wir ihn filtern (mit [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)), um Objekte zu eliminieren, die wir nicht rendern möchten.

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

Um zu entscheiden, welche Callback-Funktion wir in `Array.prototype.filter()` verwenden, greifen wir auf den Wert in `FILTER_MAP` zu, der dem Schlüssel unseres Filterstatus entspricht. Wenn der Filter beispielsweise `All` ist, wird `FILTER_MAP[filter]` zu `() => true` ausgewertet.

Die Wahl eines Filters in Ihrem Browser wird nun die Aufgaben entfernen, die seinen Kriterien nicht entsprechen. Auch die Anzahl in der Überschrift über der Liste wird sich ändern, um die Liste widerzuspiegeln!

![Die App mit den Filter-Schaltflächen an Ort und Stelle. Aktiv ist hervorgehoben, sodass nur die aktiven Todo-Elemente angezeigt werden.](filtered-todo-list.png)

## Zusammenfassung

Das war's also – unsere App ist jetzt funktional komplett. Jetzt, da wir alle unsere Features implementiert haben, können wir einige Verbesserungen vornehmen, um sicherzustellen, dass eine breitere Palette von Benutzern unsere App nutzen kann. Unser nächster Artikel rundet unsere React-Tutorials ab, indem wir uns mit dem Einbeziehen des Fokusmanagements in React beschäftigen, was die Benutzerfreundlichkeit verbessern und Verwirrung sowohl für Tastaturnutzer als auch für Screenreader-Benutzer verringern kann.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/React_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}
