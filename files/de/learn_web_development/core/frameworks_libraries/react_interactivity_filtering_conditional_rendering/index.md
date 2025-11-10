---
title: "React-Interaktivität: Bearbeiten, Filtern, bedingte Darstellung"
short-title: React-Bearbeitung, -Filterung, bedingte Benutzeroberfläche
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering
l10n:
  sourceCommit: 611edf6335e4a833a6f394d0d98b117e7b0a36bf
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/React_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}

Da wir uns dem Ende unserer React-Reise nähern (zumindest vorerst), fügen wir den Hauptfunktionsbereichen unserer Todo-Listen-App den letzten Schliff hinzu. Dies schließt die Möglichkeit ein, bestehende Aufgaben zu bearbeiten und die Liste der Aufgaben zwischen allen, abgeschlossenen und unerledigten Aufgaben zu filtern. Unterwegs betrachten wir die bedingte Darstellung der Benutzeroberfläche.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, sowie mit der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal-/Kommandozeilenumgebung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Bedingte Darstellung in React, sowie die Implementierung der Listenfilterung und einer Bearbeitungs-Benutzeroberfläche in unserer App.
      </td>
    </tr>
  </tbody>
</table>

## Den Namen einer Aufgabe bearbeiten

Wir haben noch keine Benutzeroberfläche zum Bearbeiten des Namens einer Aufgabe. Dazu kommen wir gleich. Zunächst können wir zumindest eine `editTask()`-Funktion in `App.jsx` implementieren. Sie wird `deleteTask()` ähnlich sein, da sie eine `id` benötigt, um ihr Zielobjekt zu finden, aber sie wird auch eine Eigenschaft `newName` enthalten, die den Namen enthält, zu dem die Aufgabe aktualisiert werden soll. Statt [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) verwenden wir [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), da wir ein neues Array mit einigen Änderungen zurückgeben wollen, anstatt etwas aus dem Array zu löschen.

Fügen Sie die `editTask()`-Funktion in Ihre `<App />` Komponente ein, an derselben Stelle wie die anderen Funktionen:

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

Übergeben Sie `editTask` an unsere `<Todo />` Komponenten als Prop, so wie wir es mit `deleteTask` gemacht haben:

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

## Eine Benutzeroberfläche für die Bearbeitung

Um den Benutzern das Bearbeiten einer Aufgabe zu ermöglichen, müssen wir eine Benutzeroberfläche bereitstellen, die dies ermöglicht. Importieren Sie zuerst `useState` in die `<Todo />` Komponente, wie wir es zuvor mit der `<App />` Komponente gemacht haben:

```jsx
import { useState } from "react";
```

Wir werden dies verwenden, um einen `isEditing`-Zustand mit einem Standardwert von `false` festzulegen. Fügen Sie die folgende Zeile direkt am Anfang Ihrer `<Todo />` Komponentendefinition hinzu:

```jsx
const [isEditing, setEditing] = useState(false);
```

Als nächstes überdenken wir die `<Todo />` Komponente. Von nun an wollen wir, dass sie eines von zwei möglichen "Templates" anzeigt, anstatt des einzigen Templates, das sie bisher genutzt hat:

- Das "Ansichts"-Template, wenn wir nur eine Todo anzeigen; das ist das, was wir bisher im Tutorial verwendet haben.
- Das "Bearbeitungs"-Template, wenn wir eine Todo bearbeiten. Wir sind dabei, dieses zu erstellen.

Kopieren Sie diesen Codeblock in die `Todo()` Funktion, unterhalb Ihres `useState()` Hooks, aber oberhalb der `return`-Anweisung:

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

Wir haben jetzt die beiden verschiedenen Template-Strukturen — "bearbeiten" und "ansehen" — innerhalb zweier separater Konstanten definiert. Das bedeutet, dass die `return`-Anweisung von `<Todo />` jetzt redundant ist — sie enthält auch eine Definition des "Ansichts"-Templates. Wir können dies bereinigen, indem wir **bedingte Darstellung** verwenden, um zu bestimmen, welches Template die Komponente zurückgibt und welches daher in der Benutzeroberfläche dargestellt wird.

## Bedingte Darstellung

In JSX können wir eine Bedingung verwenden, um zu ändern, was vom Browser dargestellt wird. Um eine Bedingung in JSX zu schreiben, können wir einen [ternären Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

Im Fall unserer `<Todo />` Komponente lautet unsere Bedingung: "Wird diese Aufgabe bearbeitet?" Ändern Sie die `return`-Anweisung in `Todo()`, sodass sie folgendermaßen aussieht:

```jsx
return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
```

Ihr Browser sollte alle Ihre Aufgaben genauso wie zuvor rendern. Um das Bearbeitungstemplate zu sehen, müssen Sie derzeit den Standardwert des `isEditing`-Zustands in Ihrem Code von `false` auf `true` ändern; wir werden im nächsten Abschnitt darauf eingehen, wie der Bearbeitungsbutton dies umschaltet!

## Umschalten der `<Todo />` Templates

Endlich sind wir bereit, unsere letzte Kernfunktion interaktiv zu machen. Zunächst möchten wir `setEditing()` mit einem Wert von `true` aufrufen, wenn ein Benutzer den "Bearbeiten"-Button in unserem `viewTemplate` drückt, damit wir die Templates umschalten können.

Aktualisieren Sie den "Bearbeiten"-Button im `viewTemplate` wie folgt:

```jsx
<button type="button" className="btn" onClick={() => setEditing(true)}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Nun fügen wir denselben `onClick` Handler zum "Abbrechen"-Button im `editingTemplate` hinzu, setzen jedoch diesmal `isEditing` auf `false`, sodass wir zurück zum Ansichts-Template schalten.

Aktualisieren Sie den "Abbrechen"-Button im `editingTemplate` wie folgt:

```jsx
<button
  type="button"
  className="btn todo-cancel"
  onClick={() => setEditing(false)}>
  Cancel
  <span className="visually-hidden">renaming {props.name}</span>
</button>
```

Mit diesem Code sollten Sie in der Lage sein, die "Bearbeiten" und "Abbrechen"-Buttons in Ihren Todo-Elementen zu drücken, um zwischen den Templates umzuschalten.

![Das "Essen"-Todo-Element zeigt das Ansichtstemplate mit verfügbaren Bearbeiten- und Löschen-Buttons](view.png)

![Das "Essen"-Todo-Element zeigt das Bearbeitungstemplate mit einem Eingabefeld zum Eingeben eines neuen Namens sowie verfügbaren Abbrechen- und Speichern-Buttons](edit.png)

Der nächste Schritt besteht darin, die Bearbeiten-Funktionalität tatsächlich zum Laufen zu bringen.

## Bearbeiten über die Benutzeroberfläche

Vieles von dem, was wir tun werden, spiegelt die Arbeit wider, die wir in `Form.jsx` gemacht haben: Wenn der Benutzer in unser neues Eingabefeld tippt, müssen wir den Text, den er eingibt, verfolgen; sobald er das Formular absendet, müssen wir einen Rückruf-Prop verwenden, um unseren Zustand mit dem neuen Namen der Aufgabe zu aktualisieren.

Wir beginnen, indem wir einen neuen Hook zum Speichern und Setzen des neuen Namens erstellen. Immer noch in `Todo.jsx`, fügen Sie das folgende unterhalb des bestehenden Hooks hinzu:

```jsx
const [newName, setNewName] = useState("");
```

Erstellen Sie als nächstes eine `handleChange()`-Funktion, die den neuen Namen setzen wird; fügen Sie dies unter den Hooks, aber vor den Templates hinzu:

```jsx
function handleChange(e) {
  setNewName(e.target.value);
}
```

Nun werden wir das `<input />`-Feld unseres `editingTemplate` aktualisieren, indem wir ihm ein `value`-Attribut von `newName` zuweisen und unsere `handleChange()`-Funktion an das `onChange`-Ereignis binden. Aktualisieren Sie es wie folgt:

```jsx
<input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
/>
```

Schließlich müssen wir eine Funktion erstellen, die das `onSubmit`-Ereignis des Bearbeitungsformulars behandelt. Fügen Sie das folgende direkt unter `handleChange()` hinzu:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  props.editTask(props.id, newName);
  setNewName("");
  setEditing(false);
}
```

Denken Sie daran, dass unser `editTask()` Rückruf-Prop die ID der Aufgabe benötigt, die wir bearbeiten, sowie deren neuen Namen.

Binden Sie diese Funktion an das `submit`-Ereignis des Formulars, indem Sie den folgenden `onSubmit` Handler zum `<form>` des `editingTemplate` hinzufügen:

```jsx
<form className="stack-small" onSubmit={handleSubmit}>
  {/* … */}
</form>
```

Sie sollten nun in der Lage sein, eine Aufgabe in Ihrem Browser zu bearbeiten. An dieser Stelle sollte Ihre `Todo.jsx` Datei so aussehen:

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

## Zurück zu den Filter-Buttons

Da unsere Hauptfunktionen nun vollständig sind, können wir über unsere Filter-Buttons nachdenken. Derzeit wiederholen sie das "Alle" Label und haben keine Funktionalität! Wir werden einige der Fähigkeiten, die wir in unserer `<Todo />` Komponente verwendet haben, erneut anwenden, um:

- Einen Hook zum Speichern des aktiven Filters zu erstellen.
- Ein Array von `<FilterButton />` Elementen zu rendern, das es Benutzern ermöglicht, den aktiven Filter zwischen alle, abgeschlossen und nicht abgeschlossen zu ändern.

### Hinzufügen eines Filter-Hooks

Fügen Sie Ihrer `App()` Funktion einen neuen Hook hinzu, der einen Filter liest und setzt. Wir möchten, dass der Standardfilter `Alle` ist, da zunächst alle unsere Aufgaben angezeigt werden sollen:

```jsx
const [filter, setFilter] = useState("All");
```

### Definieren unserer Filter

Unser Ziel im Moment ist zweifach:

- Jeder Filter sollte einen eindeutigen Namen haben.
- Jeder Filter sollte ein einzigartiges Verhalten haben.

Ein JavaScript-Objekt wäre eine großartige Möglichkeit, Namen mit Verhalten zu verknüpfen: jeder Schlüssel ist der Name eines Filters; jede Eigenschaft ist das Verhalten, das mit diesem Namen verbunden ist.

Fügen wir am Anfang von `App.jsx`, unterhalb unserer Importe, aber oberhalb unserer `App()` Funktion, ein Objekt namens `FILTER_MAP` hinzu:

```jsx
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
```

Die Werte von `FILTER_MAP` sind Funktionen, die wir verwenden, um das `tasks` Datenarray zu filtern:

- Der `Alle`-Filter zeigt alle Aufgaben an, daher geben wir für alle Aufgaben `true` zurück.
- Der `Aktiv`-Filter zeigt Aufgaben an, deren `completed`-Prop `false` ist.
- Der `Abgeschlossen`-Filter zeigt Aufgaben an, deren `completed`-Prop `true` ist.

Fügen Sie das folgende unterhalb unserer vorherigen Ergänzung hinzu — hier verwenden wir die [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) Methode, um ein Array von `FILTER_NAMES` zu sammeln:

```jsx
const FILTER_NAMES = Object.keys(FILTER_MAP);
```

> [!NOTE]
> Wir definieren diese Konstanten außerhalb unserer `App()` Funktion, denn wenn sie innerhalb davon definiert würden, würden sie jedes Mal, wenn die `<App />` Komponente neu gerendert wird, neu berechnet werden, und das wollen wir nicht. Diese Informationen werden sich nie ändern, egal was unsere Anwendung tut.

### Rendern der Filter

Da wir nun das `FILTER_NAMES`-Array haben, können wir es verwenden, um alle drei unserer Filter zu rendern. Innerhalb der `App()` Funktion können wir eine Konstante namens `filterList` erstellen, die wir verwenden werden, um über unser Array von Namen zu iterieren und eine `<FilterButton />` Komponente zurückzugeben. Denken Sie daran, dass wir hier auch Schlüssel benötigen.

Fügen Sie das folgende unterhalb Ihrer `taskList`-Konstantenerklärung hinzu:

```jsx
const filterList = FILTER_NAMES.map((name) => (
  <FilterButton key={name} name={name} />
));
```

Nun werden wir die drei wiederholten `<FilterButton />` in `App.jsx` durch diese `filterList` ersetzen. Ersetzen Sie das folgende:

```jsx
<div className="filters btn-group stack-exception">
  <FilterButton />
  <FilterButton />
  <FilterButton />
</div>
```

Mit dies:

```jsx
<div className="filters btn-group stack-exception">{filterList}</div>
```

Das wird noch nicht funktionieren. Wir haben noch ein bisschen Arbeit vor uns.

### Interaktive Filter

Um unsere Filter-Buttons interaktiv zu machen, sollten wir überlegen, welche Props sie nutzen müssen.

- Wir wissen, dass das `<FilterButton />` angeben sollte, ob es aktuell gedrückt ist, und es sollte gedrückt sein, wenn sein Name mit dem aktuellen Wert unseres Filterzustands übereinstimmt.
- Wir wissen, dass das `<FilterButton />` einen Rückruf benötigt, um den aktiven Filter zu setzen. Wir können unseren `setFilter` Hook direkt verwenden.

Aktualisieren Sie Ihre `filterList` Konstante wie folgt:

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

Auf die gleiche Weise wie zuvor mit unserer `<Todo />` Komponente müssen wir nun `FilterButton.jsx` aktualisieren, um die von uns übergebenen Props zu nutzen. Tun Sie Folgendes und denken Sie daran, geschweifte Klammern zu verwenden, um diese Variablen zu lesen!

- Ersetzen Sie `all` durch `{props.name}`.
- Setzen Sie den Wert von `aria-pressed` auf `{props.isPressed}`.
- Fügen Sie einen `onClick` Handler hinzu, der `props.setFilter()` mit dem Namen des Filters aufruft.

Mit all dem erledigt, sollte Ihre `FilterButton.jsx` Datei so aussehen:

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

Besuchen Sie erneut Ihren Browser. Sie sollten sehen, dass die verschiedenen Buttons ihre jeweiligen Namen erhalten haben. Wenn Sie auf einen Filterknopf klicken, sollte der Text eine neue Umrandung erhalten — das zeigt Ihnen, dass er ausgewählt wurde. Und wenn Sie den Page Inspector Ihres DevTools verwenden, während Sie die Buttons klicken, sehen Sie, wie sich die Werte des `aria-pressed` Attributs entsprechend ändern.

![Die drei Filter-Buttons der App - alle, aktiv und abgeschlossen - mit einem Fokus-Highlight um "abgeschlossen"](filter-buttons.png)

Unsere Buttons filtern die Todos auf der Benutzeroberfläche jedoch immer noch nicht! Beenden wir das.

### Aufgaben in der Benutzeroberfläche filtern

Derzeit iteriert unsere `taskList` Konstante in `App()` über den Aufgabenbestand und gibt eine neue `<Todo />` Komponente für alle von ihnen zurück. Das ist nicht, was wir wollen! Eine Aufgabe sollte nur dann gerendert werden, wenn sie in den Ergebnissen enthalten ist, die durch Anwendung des ausgewählten Filters entstehen. Bevor wir über den Aufgabenbestand iterieren, sollten wir ihn filtern (mit [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)), um Objekte zu eliminieren, die wir nicht rendern wollen.

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

Um zu entscheiden, welche Rückruffunktion in `Array.prototype.filter()` verwendet werden soll, greifen wir auf den Wert in `FILTER_MAP` zu, der dem Schlüssel unseres Filterzustands entspricht. Wenn der Filter zum Beispiel `Alle` ist, wird `FILTER_MAP[filter]` zu `() => true` evaluiert.

Wenn Sie nun in Ihrem Browser einen Filter auswählen, werden die Aufgaben entfernt, die seine Kriterien nicht erfüllen. Die Anzahl in der Überschrift oberhalb der Liste wird ebenfalls geändert, um die Liste widerzuspiegeln!

![Die App mit den Filter-Buttons an Ort und Stelle. Aktiv ist hervorgehoben, sodass nur die aktiven Todo-Elemente angezeigt werden.](filtered-todo-list.png)

## Zusammenfassung

Das war's also — unsere App ist jetzt funktional vollständig. Dennoch können wir, jetzt wo wir alle unsere Funktionen implementiert haben, einige Verbesserungen vornehmen, um sicherzustellen, dass eine breitere Benutzergruppe unsere App nutzen kann. Unser nächster Artikel rundet unsere React-Tutorials ab und beschäftigt sich mit der Einbeziehung der Fokussierungsverwaltung in React, die die Benutzerfreundlichkeit verbessern und die Verwirrung sowohl für nur mit der Tastatur arbeitende als auch für Screenreader-Benutzer verringern kann.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/React_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}
