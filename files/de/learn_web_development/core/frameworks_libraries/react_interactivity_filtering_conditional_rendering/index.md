---
title: "React-Interaktivität: Bearbeitung, Filterung, bedingte Darstellung"
short-title: React-Bearbeitung, Filterung, bedingte UI
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/React_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}

Da wir uns dem Ende unserer React-Reise nähern (zumindest vorerst), fügen wir die letzten Details in die Hauptbereiche der Funktionalität unserer To-Do-Listen-App hinzu. Dazu gehört die Möglichkeit, bestehende Aufgaben zu bearbeiten und die Liste der Aufgaben zwischen allen, erledigten und unerledigten Aufgaben zu filtern. Dabei betrachten wir die bedingte UI-Darstellung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal-/Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Bedingte Darstellung in React und die Implementierung von Listenfilterung sowie einer Bearbeitungs-UI in unserer App.
      </td>
    </tr>
  </tbody>
</table>

## Bearbeiten des Namens einer Aufgabe

Wir haben noch keine Benutzeroberfläche zum Bearbeiten des Namens einer Aufgabe. Dazu kommen wir gleich. Zunächst können wir mindestens eine `editTask()`-Funktion in `App.jsx` implementieren. Diese wird ähnlich wie `deleteTask()` sein, da sie eine `id` für das Zielobjekt entgegennimmt, aber sie wird auch eine `newName`-Eigenschaft enthalten, die den neuen Namen der Aufgabe enthält. Anstelle von [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) verwenden wir [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), da wir ein neues Array mit einigen Änderungen zurückgeben möchten, anstatt etwas aus dem Array zu löschen.

Fügen Sie die `editTask()`-Funktion in Ihre `<App />` Komponente ein, und zwar an derselben Stelle wie die anderen Funktionen:

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

Übergeben Sie `editTask` auf die gleiche Weise wie `deleteTask` in unsere `<Todo />`-Komponenten als Prop:

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

Öffnen Sie nun `Todo.jsx`. Wir werden einige Refaktorierungen vornehmen.

## Eine UI zum Bearbeiten

Um Benutzern das Bearbeiten einer Aufgabe zu ermöglichen, müssen wir eine Benutzeroberfläche bereitstellen. Importieren Sie zunächst `useState` in die `<Todo />`-Komponente, wie wir es zuvor mit der `<App />`-Komponente getan haben:

```jsx
import { useState } from "react";
```

Wir verwenden dies, um einen `isEditing`-State mit einem Standardwert von `false` festzulegen. Fügen Sie die folgende Zeile direkt am Anfang der `<Todo />`-Komponentendefinition hinzu:

```jsx
const [isEditing, setEditing] = useState(false);
```

Als Nächstes überdenken wir die `<Todo />`-Komponente. Ab jetzt möchten wir, dass sie einen von zwei möglichen "Templates" anzeigt, anstatt des einzigen, das sie bisher verwendet hat:

- Das "Ansichts"-Template, wenn wir ein ToDo nur anzeigen; dies haben wir im Tutorial schon verwendet.
- Das "Bearbeitungs"-Template, wenn wir ein ToDo bearbeiten. Dieses werden wir jetzt erstellen.

Kopieren Sie diesen Codeblock in die `Todo()`-Funktion, unterhalb des `useState()`-Hooks, aber oberhalb der `return`-Anweisung:

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

Wir haben jetzt die beiden unterschiedlichen Template-Strukturen — "Bearbeitung" und "Ansicht" — innerhalb von zwei separaten Konstanten definiert. Das bedeutet, dass die `return`-Anweisung von `<Todo />` jetzt repetitiv ist — sie enthält auch eine Definition des "Ansichts"-Templates. Wir können dies bereinigen, indem wir eine **bedingte Darstellung** verwenden, um zu bestimmen, welches Template die Komponente zurückgibt und dementsprechend in der UI rendert.

## Bedingte Darstellung

In JSX können wir eine Bedingung verwenden, um zu ändern, was vom Browser dargestellt wird. Um eine Bedingung in JSX zu schreiben, können wir einen [ternären Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

Im Fall unserer `<Todo />`-Komponente lautet unsere Bedingung "Wird diese Aufgabe bearbeitet?". Ändern Sie die `return`-Anweisung in `Todo()`, sodass sie so aussieht:

```jsx
return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
```

Ihr Browser sollte alle Ihre Aufgaben wie zuvor darstellen. Um das Bearbeitungstemplate zu sehen, müssen Sie zunächst den Standardwert von `isEditing` in Ihrem Code von `false` auf `true` ändern; wir werden im nächsten Abschnitt darauf eingehen, wie der "Bearbeiten"-Button dies umschalten kann!

## Umschalten der `<Todo />`-Templates

Endlich sind wir bereit, unser letztes Kernmerkmal interaktiv zu machen. Zunächst möchten wir `setEditing()` mit einem Wert von `true` aufrufen, wenn ein Benutzer den "Bearbeiten"-Button in unserem `viewTemplate` drückt, damit wir die Templates umschalten können.

Aktualisieren Sie den "Bearbeiten"-Button im `viewTemplate` folgendermaßen:

```jsx
<button type="button" className="btn" onClick={() => setEditing(true)}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Nun fügen wir denselben `onClick`-Handler dem "Abbrechen"-Button im `editingTemplate` hinzu, aber dieses Mal setzen wir `isEditing` auf `false`, damit es uns zurück zum Ansichtstemplate wechselt.

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

Mit diesem Code sollten Sie in der Lage sein, die "Bearbeiten"- und "Abbrechen"-Buttons in Ihren ToDo-Elementen zu drücken, um zwischen den Templates umzuschalten.

![Das "essen"-ToDo-Element zeigt das Ansichtstemplate mit verfügbaren Bearbeitungs- und Löschen-Buttons](view.png)

![Das "essen"-ToDo-Element zeigt das Bearbeitungstemplate mit einem Eingabefeld für einen neuen Namen sowie verfügbaren Abbrechen- und Speichern-Buttons](edit.png)

Der nächste Schritt besteht darin, die Bearbeitungsfunktion tatsächlich funktionsfähig zu machen.

## Bearbeiten über die UI

Vieles, was wir tun werden, wird die Arbeit widerspiegeln, die wir in `Form.jsx` geleistet haben: Während der Benutzer in unser neues Eingabefeld tippt, müssen wir den eingegebenen Text verfolgen; sobald er das Formular einreicht, müssen wir ein Rückruffunktion verwenden, um unseren State mit dem neuen Namen der Aufgabe zu aktualisieren.

Beginnen wir damit, einen neuen Hook zum Speichern und Setzen des neuen Namens zu erstellen. Immer noch in `Todo.jsx`, fügen Sie das Folgende unter dem bestehenden Hook hinzu:

```jsx
const [newName, setNewName] = useState("");
```

Erstellen Sie als Nächstes eine `handleChange()`-Funktion, die den neuen Namen festlegt; setzen Sie dies unterhalb der Hooks, aber vor den Templates:

```jsx
function handleChange(e) {
  setNewName(e.target.value);
}
```

Nun aktualisieren wir das `<input />`-Feld unseres `editingTemplate`, indem wir ein `value`-Attribut von `newName` festlegen und unsere `handleChange()`-Funktion an das `onChange`-Ereignis binden. Aktualisieren Sie es wie folgt:

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

Denken Sie daran, dass unser `editTask()`-Rückruffunktion die ID der Aufgabe, die wir bearbeiten, sowie deren neuen Namen benötigt.

Binden Sie diese Funktion an das `submit`-Ereignis des Formulars, indem Sie den folgenden `onSubmit`-Handler an das `<form>` des `editingTemplate` hinzufügen:

```jsx
<form className="stack-small" onSubmit={handleSubmit}>
```

Sie sollten nun in der Lage sein, eine Aufgabe in Ihrem Browser zu bearbeiten. Zu diesem Zeitpunkt sollte Ihre `Todo.jsx`-Datei wie folgt aussehen:

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

## Zurück zu den Filterknöpfen

Da unsere Hauptfunktionen abgeschlossen sind, können wir unsere Filterknöpfe überdenken. Derzeit wiederholen sie das Label "Alle" und haben keine Funktionalität! Wir werden einige der Fähigkeiten, die wir in unserer `<Todo />`-Komponente verwendet haben, erneut anwenden, um:

- Einen Hook zum Speichern des aktiven Filters zu erstellen.
- Ein Array von `<FilterButton />`-Elementen zu rendern, die es Benutzern ermöglichen, den aktiven Filter zwischen allen, abgeschlossenen und unvollständigen Aufgaben zu ändern.

### Hinzufügen eines Filterhooks

Fügen Sie Ihrer `App()`-Funktion einen neuen Hook hinzu, der einen Filter liest und setzt. Wir möchten, dass der Standardfilter `Alle` ist, da alle unsere Aufgaben zunächst angezeigt werden sollen:

```jsx
const [filter, setFilter] = useState("All");
```

### Definition unserer Filter

Unser Ziel ist derzeit zweifacher Natur:

- Jeder Filter sollte einen eindeutigen Namen haben.
- Jeder Filter sollte ein einzigartiges Verhalten haben.

Ein JavaScript-Objekt wäre eine großartige Möglichkeit, Namen mit Verhaltensweisen zu verknüpfen: Jeder Schlüssel ist der Name eines Filters; jede Eigenschaft ist das Verhalten, das mit diesem Namen verbunden ist.

Fügen wir am Anfang von `App.jsx`, unterhalb unserer Importe, aber oberhalb unserer `App()`-Funktion, ein Objekt namens `FILTER_MAP` hinzu:

```jsx
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
```

Die Werte von `FILTER_MAP` sind Funktionen, die wir verwenden werden, um das `tasks`-Datenarray zu filtern:

- Der `Alle`-Filter zeigt alle Aufgaben an, daher geben wir `true` für alle Aufgaben zurück.
- Der `Aktiv`-Filter zeigt Aufgaben an, deren `completed`-Eigenschaft `false` ist.
- Der `Abgeschlossen`-Filter zeigt Aufgaben an, deren `completed`-Eigenschaft `true` ist.

Unterhalb unserer vorherigen Ergänzung fügen wir das Folgende hinzu — hier verwenden wir die Methode [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), um ein Array von `FILTER_NAMES` zu sammeln:

```jsx
const FILTER_NAMES = Object.keys(FILTER_MAP);
```

> [!NOTE]
> Wir definieren diese Konstanten außerhalb unserer `App()`-Funktion, da sie, wenn sie innerhalb davon definiert wären, jedes Mal neu berechnet würden, wenn die `<App />`-Komponente neu gerendert wird, und das wollen wir nicht. Diese Informationen ändern sich nie, egal was unsere Anwendung tut.

### Darstellung der Filter

Nun, da wir das `FILTER_NAMES`-Array haben, können wir es verwenden, um alle unsere drei Filter zu rendern. Innerhalb der `App()`-Funktion können wir eine Konstante namens `filterList` erstellen, die wir verwenden, um über unser Array von Namen zu mappen und eine `<FilterButton />`-Komponente zurückzugeben. Denken Sie daran, hier werden auch Schlüssel benötigt.

Fügen Sie das Folgende unter Ihrer `taskList`-Konstantendeklaration hinzu:

```jsx
const filterList = FILTER_NAMES.map((name) => (
  <FilterButton key={name} name={name} />
));
```

Nun ersetzen wir die drei wiederholten `<FilterButton />`-Elemente in `App.jsx` durch diese `filterList`. Ersetzen Sie Folgendes:

```jsx
<FilterButton />
<FilterButton />
<FilterButton />
```

Mit diesem:

```jsx-nolint
{filterList}
```

Das wird noch nicht funktionieren. Wir haben noch ein bisschen mehr Arbeit zu erledigen.

### Interaktive Filter

Um unsere Filterknöpfe interaktiv zu machen, sollten wir überlegen, welche Props sie nutzen müssen.

- Wir wissen, dass der `<FilterButton />` berichten sollte, ob er derzeit gedrückt ist, und er sollte gedrückt sein, wenn sein Name mit dem aktuellen Wert unseres Filterzustands übereinstimmt.
- Wir wissen, dass der `<FilterButton />` einen Rückruf benötigt, um den aktiven Filter festzulegen. Wir können direkt unseren `setFilter`-Hook verwenden.

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

Wie wir es zuvor mit unserer `<Todo />`-Komponente getan haben, müssen wir jetzt `FilterButton.jsx` aktualisieren, um die Props zu nutzen, die wir ihm gegeben haben. Ersetzen Sie dazu folgende Elemente und denken Sie daran, geschweifte Klammern zu verwenden, um diese Variablen zu lesen!

- Ersetzen Sie `all` durch `{props.name}`.
- Setzen Sie den Wert von `aria-pressed` auf `{props.isPressed}`.
- Fügen Sie einen `onClick`-Handler hinzu, der `props.setFilter()` mit dem Namen des Filters aufruft.

Nachdem all das erledigt ist, sollte Ihre `FilterButton.jsx`-Datei so aussehen:

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

Besuchen Sie erneut Ihren Browser. Sie sollten sehen, dass die verschiedenen Knöpfe ihre jeweiligen Namen erhalten haben. Wenn Sie einen Filterknopf drücken, sollten Sie sehen, dass sein Text einen neuen Umriss erhält — das zeigt Ihnen, dass er ausgewählt wurde. Und wenn Sie im Seiteninspektor Ihres Entwicklerwerkzeugs die Knöpfe klicken, sehen Sie, dass sich die `aria-pressed`-Attributwerte entsprechend ändern.

![Die drei Filterknöpfe der App - alle, aktiv und abgeschlossen - mit einem Fokus-Highlight um abgeschlossen](filter-buttons.png)

Unsere Knöpfe filtern jedoch noch nicht tatsächlich die ToDos in der Benutzeroberfläche! Lassen Sie uns das abschließen.

### Aufgaben in der Benutzeroberfläche filtern

Derzeit mappt unsere `taskList`-Konstante in `App()` über den tasks-State und gibt eine neue `<Todo />`-Komponente für alle von ihnen zurück. Das ist nicht das, was wir wollen! Eine Aufgabe sollte nur dann gerendert werden, wenn sie in den Ergebnissen der Anwendung des ausgewählten Filters enthalten ist. Bevor wir über den tasks-State mappen, sollten wir ihn filtern (mit [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)), um Objekte zu eliminieren, die wir nicht rendern möchten.

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

Um zu entscheiden, welche Rückruffunktion wir in `Array.prototype.filter()` verwenden, greifen wir auf den Wert in `FILTER_MAP` zu, der dem Schlüssel unseres Filterzustands entspricht. Wenn der Filter beispielsweise `Alle` ist, wird `FILTER_MAP[filter]` zu `() => true` ausgewertet.

Die Auswahl eines Filters in Ihrem Browser entfernt jetzt die Aufgaben, die nicht den Kriterien entsprechen. Die Anzahl in der Überschrift über der Liste ändert sich ebenfalls, um die Liste widerzuspiegeln!

![Die App mit den Filterknöpfen an ihrem Platz. Aktiv ist hervorgehoben, sodass nur die aktiven ToDo-Elemente angezeigt werden.](filtered-todo-list.png)

## Zusammenfassung

Das war's also — unsere App ist jetzt funktional vollständig. Nachdem wir nun alle Funktionen umgesetzt haben, können wir einige Verbesserungen vornehmen, um sicherzustellen, dass eine breitere Benutzergruppe unsere App verwenden kann. Unser nächster Artikel rundet unsere React-Tutorials ab, indem wir uns mit der Einbindung des Fokusmanagements in React befassen, was die Benutzerfreundlichkeit verbessern und Verwirrung für Tastatur- und Screenreader-Nutzer reduzieren kann.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state","Learn_web_development/Core/Frameworks_libraries/React_accessibility", "Learn_web_development/Core/Frameworks_libraries")}}
