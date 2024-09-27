---
title: "React-Interaktivität: Bearbeiten, Filtern, konditionales Rendering"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Da wir uns dem Ende unserer React-Reise nähern (zumindest vorerst), werden wir die letzten Schliffe an den Hauptfunktionen unserer To-Do-Listen-App vornehmen. Dies beinhaltet die Möglichkeit, bestehende Aufgaben zu bearbeiten und die Liste der Aufgaben zwischen allen, abgeschlossenen und unvollständigen Aufgaben zu filtern. Auf dem Weg werden wir uns das konditionale UI-Rendering ansehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>, Kenntnisse im
          Umgang mit dem
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Erfahren, wie man konditionales Rendering in React implementiert und eine Listenfilterung und eine Bearbeitungs-UI in unserer App umsetzt.
      </td>
    </tr>
  </tbody>
</table>

## Bearbeiten des Namens einer Aufgabe

Wir haben noch keine Benutzeroberfläche zum Bearbeiten des Namens einer Aufgabe. Darauf kommen wir gleich zurück. Zunächst können wir zumindest eine `editTask()`-Funktion in `App.jsx` implementieren. Sie wird ähnlich wie `deleteTask()` sein, da sie eine `id` benötigt, um ihr Zielobjekt zu finden, aber sie wird auch eine `newName`-Eigenschaft haben, die den Namen enthält, um den die Aufgabe aktualisiert werden soll. Anstatt [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) verwenden wir [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map), da wir ein neues Array mit einigen Änderungen zurückgeben wollen, anstatt etwas aus dem Array zu löschen.

Fügen Sie die `editTask()`-Funktion in Ihre `<App />`-Komponente ein, und zwar an der Stelle, an der sich auch die anderen Funktionen befinden:

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

Geben Sie `editTask` an unsere `<Todo />`-Komponenten als eine Prop in der gleichen Weise weiter, wie wir es mit `deleteTask` getan haben:

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

Um den Nutzern das Bearbeiten einer Aufgabe zu ermöglichen, müssen wir ihnen eine Benutzeroberfläche dafür bieten. Zuerst importieren wir `useState` in die `<Todo />`-Komponente, wie wir es zuvor mit der `<App />`-Komponente gemacht haben:

```jsx
import { useState } from "react";
```

Wir werden dies verwenden, um einen `isEditing`-Status mit einem Standardwert von `false` festzulegen. Fügen Sie die folgende Zeile direkt am Anfang Ihrer `<Todo />`-Komponentendefinition hinzu:

```jsx
const [isEditing, setEditing] = useState(false);
```

Als Nächstes überdenken wir die `<Todo />`-Komponente. Ab jetzt möchten wir eine von zwei möglichen "Vorlagen" anzeigen, anstatt der einzelnen Vorlage, die bisher verwendet wurde:

- Die "Ansichts"-Vorlage, wenn wir nur eine Aufgabe ansehen; dies ist das, was wir bisher im Tutorial verwendet haben.
- Die "Bearbeitungs"-Vorlage, wenn wir eine Aufgabe bearbeiten. Diese erstellen wir jetzt.

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

Jetzt haben wir die beiden unterschiedlichen Vorlagenstrukturen — "edit" und "view" — in zwei separaten Konstanten definiert. Das bedeutet, dass die `return`-Anweisung von `<Todo />` jetzt repetitiv ist — sie enthält auch eine Definition der "view"-Vorlage. Wir können dies aufräumen, indem wir **konditionales Rendering** verwenden, um zu bestimmen, welche Vorlage die Komponente zurückgibt und somit in der UI gerendert wird.

## Konditionales Rendering

In JSX können wir eine Bedingung verwenden, um das, was vom Browser gerendert wird, zu ändern. Um eine Bedingung in JSX zu schreiben, können wir einen [ternären Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

Im Fall unserer `<Todo />`-Komponente lautet unsere Bedingung "Wird diese Aufgabe bearbeitet?" Ändern Sie die `return`-Anweisung in `Todo()`, damit sie wie folgt aussieht:

```jsx
return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
```

Ihr Browser sollte alle Ihre Aufgaben wie zuvor rendern. Um die Bearbeitungsvorlage anzuzeigen, müssen Sie vorerst den Standardwert von `isEditing` in Ihrem Code von `false` auf `true` ändern; wir werden im nächsten Abschnitt darauf schauen, wie die Bearbeitungsschaltfläche dies umschalten kann!

## Umschalten der `<Todo />`-Vorlagen

Endlich sind wir bereit, unsere letzte Kernfunktion interaktiv zu machen. Zu Beginn möchten wir `setEditing()` mit einem Wert von `true` aufrufen, wenn ein Benutzer die "Bearbeiten"-Schaltfläche in unserer `viewTemplate` drückt, damit wir die Vorlagen umschalten können.

Aktualisieren Sie die "Bearbeiten"-Schaltfläche im `viewTemplate` wie folgt:

```jsx
<button type="button" className="btn" onClick={() => setEditing(true)}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Jetzt fügen wir den gleichen `onClick`-Handler der "Abbrechen"-Schaltfläche im `editingTemplate` hinzu, aber diesmal setzen wir `isEditing` auf `false`, damit wir zurück zur Ansichtsvorlage wechseln.

Aktualisieren Sie die "Abbrechen"-Schaltfläche im `editingTemplate` wie folgt:

```jsx
<button
  type="button"
  className="btn todo-cancel"
  onClick={() => setEditing(false)}>
  Cancel
  <span className="visually-hidden">renaming {props.name}</span>
</button>
```

Mit diesem Code sollten Sie in der Lage sein, die "Bearbeiten"- und "Abbrechen"-Schaltflächen in Ihren To-Do-Elementen zu drücken, um zwischen den Vorlagen zu wechseln.

![Die Essens-Aufgabe zeigt die Ansichts-Vorlage mit Bearbeiten- und Löschen-Schaltflächen verfügbar](view.png)

![Die Essens-Aufgabe zeigt die Bearbeitungs-Vorlage mit einem Eingabefeld für einen neuen Namen sowie Abbrechen- und Speichern-Schaltflächen verfügbar](edit.png)

Der nächste Schritt besteht darin, die Bearbeitungsfunktionen tatsächlich zu aktivieren.

## Bearbeiten von der Benutzeroberfläche aus

Vieles von dem, was wir jetzt tun werden, wird die Arbeit in `Form.jsx` widerspiegeln: während der Benutzer in unser neues Eingabefeld tippt, müssen wir den Text verfolgen, den er eingibt; sobald er das Formular übermittelt, müssen wir eine Rückruf-Callback-Prop verwenden, um unseren Zustand mit dem neuen Namen der Aufgabe zu aktualisieren.

Wir beginnen damit, einen neuen Hook zum Speichern und Setzen des neuen Namens zu erstellen. Immer noch in `Todo.jsx`, fügen Sie das folgende unterhalb des bestehenden Hooks hinzu:

```jsx
const [newName, setNewName] = useState("");
```

Als Nächstes erstellen Sie eine `handleChange()`-Funktion, die den neuen Namen setzt; platzieren Sie diese unterhalb der Hooks, aber vor den Vorlagen:

```jsx
function handleChange(e) {
  setNewName(e.target.value);
}
```

Nun aktualisieren wir das `<input />`-Feld des `editingTemplate`, indem wir ein `value`-Attribut von `newName` festlegen und unsere `handleChange()`-Funktion an dessen `onChange`-Ereignis binden. Aktualisieren Sie es wie folgt:

```jsx
<input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
/>
```

Abschließend müssen wir eine Funktion erstellen, die das `onSubmit`-Ereignis des Bearbeitungsformulars verarbeitet. Fügen Sie das Folgende direkt unterhalb von `handleChange()` hinzu:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  props.editTask(props.id, newName);
  setNewName("");
  setEditing(false);
}
```

Denken Sie daran, dass unsere `editTask()`-Callback-Prop sowohl die ID der Aufgabe, die wir bearbeiten, als auch ihren neuen Namen benötigt.

Binden Sie diese Funktion an das `submit`-Ereignis des Formulars, indem Sie den folgenden `onSubmit`-Handler zu dem `<form>` im `editingTemplate` hinzufügen:

```jsx
<form className="stack-small" onSubmit={handleSubmit}>
```

Sie sollten jetzt in der Lage sein, eine Aufgabe in Ihrem Browser zu bearbeiten. An diesem Punkt sollte Ihre `Todo.jsx`-Datei so aussehen:

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

Da unsere Hauptfunktionen nun abgeschlossen sind, können wir über unsere Filter-Schaltflächen nachdenken. Derzeit wiederholen sie das Label "All" und haben keine Funktionalität! Wir werden einige der Fähigkeiten, die wir in unserer `<Todo />`-Komponente genutzt haben, erneut verwenden, um:

- Einen Hook für die Speicherung des aktiven Filters zu erstellen.
- Ein Array von `<FilterButton />`-Elementen zu rendern, die es den Benutzern ermöglichen, den aktiven Filter zwischen alle, abgeschlossen und unvollständig zu ändern.

### Einen Filter-Hook hinzufügen

Fügen Sie Ihrer `App()`-Funktion einen neuen Hook hinzu, der einen Filter liest und einstellt. Wir möchten, dass der Standardfilter `All` ist, da zu Beginn alle Aufgaben angezeigt werden sollen:

```jsx
const [filter, setFilter] = useState("All");
```

### Unsere Filter definieren

Unser Ziel ist derzeit zweifach:

- Jeder Filter sollte einen eindeutigen Namen haben.
- Jeder Filter sollte ein einzigartiges Verhalten haben.

Ein JavaScript-Objekt wäre eine großartige Möglichkeit, Namen mit Verhalten zu verknüpfen: Jeder Schlüssel ist der Name eines Filters; jede Eigenschaft ist das mit diesem Namen verbundene Verhalten.

Fügen Sie am Anfang von `App.jsx`, unterhalb unserer Importe, aber oberhalb von `App()`, ein Objekt namens `FILTER_MAP` hinzu:

```jsx
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
```

Die Werte von `FILTER_MAP` sind Funktionen, die wir verwenden werden, um das `tasks`-Datenarray zu filtern:

- Der `All`-Filter zeigt alle Aufgaben an, daher geben wir `true` für alle Aufgaben zurück.
- Der `Active`-Filter zeigt Aufgaben an, deren `completed`-Eigenschaft `false` ist.
- Der `Completed`-Filter zeigt Aufgaben an, deren `completed`-Eigenschaft `true` ist.

Fügen Sie das Folgende unterhalb unserer vorherigen Ergänzung hinzu — hier verwenden wir die [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)-Methode, um ein Array von `FILTER_NAMES` zu sammeln:

```jsx
const FILTER_NAMES = Object.keys(FILTER_MAP);
```

> [!NOTE]
> Wir definieren diese Konstanten außerhalb unserer `App()`-Funktion, da sie, wenn sie innerhalb definiert wären, jedes Mal neu berechnet würden, wenn die `<App />`-Komponente neu gerendert wird, und das wollen wir nicht. Diese Informationen werden sich nie ändern, egal was unsere Anwendung tut.

### Die Filter rendern

Da wir nun das `FILTER_NAMES`-Array haben, können wir es verwenden, um alle drei unserer Filter zu rendern. Innerhalb der `App()`-Funktion können wir eine Konstante namens `filterList` erstellen, die wir zum Mapping über unser Namensarray verwenden und eine `<FilterButton />`-Komponente zurückgeben können. Denken Sie daran, dass wir hier auch Schlüssel benötigen.

Fügen Sie das Folgende unterhalb Ihrer `taskList`-Konstantendeklaration hinzu:

```jsx
const filterList = FILTER_NAMES.map((name) => (
  <FilterButton key={name} name={name} />
));
```

Jetzt ersetzen wir die drei wiederholten `<FilterButton />`s in `App.jsx` durch diesen `filterList`. Ersetzen Sie das Folgende:

```jsx
<FilterButton />
<FilterButton />
<FilterButton />
```

Mit diesem:

```jsx-nolint
{filterList}
```

Das wird noch nicht funktionieren. Wir haben noch ein bisschen Arbeit vor uns.

### Interaktive Filter

Um unsere Filter-Schaltflächen interaktiv zu machen, sollten wir überlegen, welche Props sie verwenden müssen.

- Wir wissen, dass der `<FilterButton />` melden sollte, ob er aktuell gedrückt ist, und er sollte gedrückt sein, wenn sein Name dem aktuellen Wert unseres Filterstatus entspricht.
- Wir wissen, dass der `<FilterButton />` einen Callback benötigt, um den aktiven Filter einzustellen. Wir können unseren `setFilter`-Hook direkt verwenden.

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

Auf die gleiche Weise wie zuvor mit unserer `<Todo />`-Komponente müssen wir nun `FilterButton.jsx` aktualisieren, um die Props zu verwenden, die wir ihm gegeben haben. Ersetzen Sie jeweils das Folgende, und denken Sie daran, geschweifte Klammern zu verwenden, um diese Variablen zu lesen!

- Ersetzen Sie `all` durch `{props.name}`.
- Setzen Sie den Wert von `aria-pressed` auf `{props.isPressed}`.
- Fügen Sie einen `onClick`-Handler hinzu, der `props.setFilter()` mit dem Namen des Filters aufruft.

Nachdem all dies erledigt ist, sollte Ihre `FilterButton.jsx`-Datei so aussehen:

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

Besuchen Sie erneut Ihren Browser. Sie sollten sehen, dass die verschiedenen Schaltflächen ihre jeweiligen Namen erhalten haben. Wenn Sie eine Filter-Schaltfläche drücken, sollten Sie sehen, dass ihr Text eine neue Umrandung erhält — dies zeigt, dass sie ausgewählt wurde. Und wenn Sie im Seiteninspektor Ihrer DevTools die Schaltflächen anklicken, sehen Sie, wie sich die Werte des `aria-pressed`-Attributs entsprechend ändern.

![Die drei Filter-Schaltflächen der App - alle, aktiv und abgeschlossen - mit einem Hervorhebungshinweis um abgeschlossen](filter-buttons.png)

Allerdings filtern unsere Schaltflächen die Aufgaben in der UI noch nicht! Lassen Sie uns dies abschließen.

### Filtern von Aufgaben in der Benutzeroberfläche

Derzeit mappt unsere `taskList`-Konstante in `App()` über den Aufgabenstatus und gibt eine neue `<Todo />`-Komponente für alle zurück. Das ist nicht, was wir wollen! Eine Aufgabe sollte nur gerendert werden, wenn sie in den Ergebnissen der Anwendung des ausgewählten Filters enthalten ist. Bevor wir über den Aufgabenstatus mappen, sollten wir ihn filtern (mit [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)), um Objekte auszuschließen, die wir nicht rendern wollen.

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

Um zu entscheiden, welche Callback-Funktion in `Array.prototype.filter()` zu verwenden ist, greifen wir auf den Wert in `FILTER_MAP` zu, der dem Schlüssel unseres Filternzustands entspricht. Wenn der Filter zum Beispiel `All` ist, wird `FILTER_MAP[filter]` als `() => true` ausgewertet.

Wenn Sie in Ihrem Browser einen Filter auswählen, werden nun die Aufgaben entfernt, die nicht den Kriterien entsprechen. Die Zählung in der Überschrift über der Liste wird sich auch entsprechend ändern!

![Die App mit den Filter-Schaltflächen an ihrem Platz. Aktiv ist hervorgehoben, sodass nur die aktiven Aufgaben angezeigt werden.](filtered-todo-list.png)

## Zusammenfassung

Das war's also — unsere App ist jetzt funktional vollständig. Jetzt, da wir alle unsere Features implementiert haben, können wir einige Verbesserungen vornehmen, um sicherzustellen, dass eine breitere Palette von Benutzern unsere App verwenden kann. Unser nächster Artikel rundet unsere React-Tutorials ab, indem er sich mit der Einbeziehung von Fokusmanagement in React befasst, was die Benutzerfreundlichkeit verbessern und Verwirrung sowohl für Tastaturbenutzer als auch für Screenreader-Nutzer verringern kann.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
