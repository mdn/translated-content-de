---
title: "React Interaktivität: Bearbeiten, Filtern, bedingtes Rendering"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Da wir uns dem Ende unserer React-Reise nähern (zumindest vorerst), werden wir die letzten Feinheiten an den Hauptfunktionen unserer To-Do-Listen-App hinzufügen. Dies beinhaltet die Möglichkeit, vorhandene Aufgaben zu bearbeiten und die Liste der Aufgaben zwischen allen, abgeschlossenen und unvollständigen Aufgaben zu filtern. Unterwegs werden wir uns das bedingte Rendering der Benutzeroberfläche ansehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a>,
          Kenntnisse über das
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
        Erlernen des bedingten Renderings in React und Implementierung von Listenfiltern und einer Bearbeitungsoberfläche in unserer App.
      </td>
    </tr>
  </tbody>
</table>

## Den Namen einer Aufgabe bearbeiten

Wir haben noch keine Benutzeroberfläche zum Bearbeiten des Namens einer Aufgabe. Das werden wir gleich angehen. Zunächst können wir zumindest eine Funktion `editTask()` in `App.jsx` implementieren. Sie wird ähnlich wie `deleteTask()` sein, da sie eine `id` benötigt, um das Zielobjekt zu finden, sie wird jedoch auch eine `newName` Eigenschaft enthalten, die den neuen Namen darstellt, auf den die Aufgabe aktualisiert werden soll. Wir verwenden [`Array.prototype.map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map) anstelle von [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), weil wir ein neues Array mit einigen Änderungen zurückgeben möchten, anstatt etwas aus dem Array zu löschen.

Fügen Sie die Funktion `editTask()` in Ihre `<App />` Komponente ein, an der gleichen Stelle wie die anderen Funktionen:

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

Übergeben Sie `editTask` in unsere `<Todo />` Komponenten als Prop auf die gleiche Weise, wie wir es mit `deleteTask` gemacht haben:

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

Um den Nutzern das Bearbeiten einer Aufgabe zu ermöglichen, müssen wir eine Benutzeroberfläche bereitstellen. Importieren Sie zuerst `useState` in die `<Todo />` Komponente, ähnlich wie wir es zuvor mit der `<App />` Komponente getan haben:

```jsx
import { useState } from "react";
```

Wir werden dies verwenden, um einen `isEditing` Zustand mit einem Standardwert von `false` festzulegen. Fügen Sie die folgende Zeile direkt am Anfang Ihrer `<Todo />` Komponentendefinition hinzu:

```jsx
const [isEditing, setEditing] = useState(false);
```

Als Nächstes denken wir die `<Todo />` Komponente neu. Von nun an möchten wir, dass sie eines von zwei möglichen "Templates" anzeigt, anstatt des einzigen Templates, das sie bisher verwendet hat:

- Das "Ansicht"-Template, wenn wir nur eine Aufgabe ansehen; dies haben wir im Tutorial bisher verwendet.
- Das "Bearbeitungs"-Template, wenn wir eine Aufgabe bearbeiten. Wir werden dieses gleich erstellen.

Kopieren Sie diesen Codeblock in die `Todo()` Funktion, unterhalb Ihres `useState()` Hooks, aber oberhalb der `return` Anweisung:

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

Wir haben nun die beiden unterschiedlichen Template-Strukturen — "Bearbeitungs" und "Ansicht" — in zwei separaten Konstanten definiert. Dies bedeutet, dass die `return` Anweisung von `<Todo />` jetzt repetitiv ist — sie enthält auch eine Definition des "Ansichts"-Templates. Wir können dies sauberer gestalten, indem wir **bedingtes Rendering** verwenden, um zu bestimmen, welches Template die Komponente zurückgibt und somit in der Benutzeroberfläche gerendert wird.

## Bedingtes Rendering

In JSX können wir eine Bedingung verwenden, um zu ändern, was vom Browser gerendert wird. Um eine Bedingung in JSX zu schreiben, können wir einen [ternären Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) verwenden.

Im Falle unserer `<Todo />` Komponente ist unsere Bedingung "Wird diese Aufgabe bearbeitet?" Ändern Sie die `return` Anweisung innerhalb von `Todo()`, damit sie so aussieht:

```jsx
return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
```

Ihr Browser sollte alle Aufgaben wie zuvor rendern. Um das Bearbeitungstemplate zu sehen, müssen Sie den Standard `isEditing`-Zustand in Ihrem Code vorläufig von `false` auf `true` ändern; wir werden im nächsten Abschnitt sehen, wie der Bearbeiten-Button dies umschalten kann!

## Umschalten der `<Todo />` Templates

Endlich sind wir bereit, unsere letzte Kernfunktion interaktiv zu machen. Zuerst möchten wir `setEditing()` mit einem Wert von `true` aufrufen, wenn ein Benutzer den "Bearbeiten"-Button in unserem `viewTemplate` drückt, damit wir die Templates umschalten können.

Aktualisieren Sie den "Bearbeiten"-Button im `viewTemplate` wie folgt:

```jsx
<button type="button" className="btn" onClick={() => setEditing(true)}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>
```

Nun fügen wir den gleichen `onClick`-Handler auch dem "Abbrechen"-Button im `editingTemplate` hinzu, allerdings setzen wir `isEditing` auf `false`, um wieder zum Ansichtstemplate zurückzukehren.

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

Mit diesem Code sollten Sie in der Lage sein, die "Bearbeiten" und "Abbrechen" Buttons in Ihren Aufgaben zu drücken, um zwischen den Templates zu wechseln.

![Die Aufgabe "Essen" zeigt das Ansichtstemplate mit verfügbaren Buttons zum Bearbeiten und Löschen](view.png)

![Die Aufgabe "Essen" zeigt das Bearbeitungstemplate mit einem Eingabefeld, um einen neuen Namen einzugeben, und verfügbaren Buttons zum Abbrechen und Speichern](edit.png)

Der nächste Schritt ist, die Bearbeitungsfunktionalität tatsächlich funktionieren zu lassen.

## Bearbeiten über die Benutzeroberfläche

Ein Großteil dessen, was wir jetzt tun werden, wird die Arbeiten widerspiegeln, die wir in `Form.jsx` durchgeführt haben: während der Nutzer in unser neues Eingabefeld tippt, müssen wir den eingegebenen Text verfolgen; sobald sie das Formular abschicken, müssen wir einen Callback-Prop nutzen, um unseren Zustand mit dem neuen Namen der Aufgabe zu aktualisieren.

Wir beginnen mit einem neuen Hook zum Speichern und Festlegen des neuen Namens. Bleiben Sie in `Todo.jsx`, und fügen Sie das Folgende unterhalb des bestehenden Hooks hinzu:

```jsx
const [newName, setNewName] = useState("");
```

Als Nächstes erstellen Sie eine `handleChange()` Funktion, die den neuen Namen festlegt; fügen Sie diese unterhalb der Hooks aber vor den Templates hinzu:

```jsx
function handleChange(e) {
  setNewName(e.target.value);
}
```

Nun aktualisieren wir das `<input />` Feld unseres `editingTemplate`, indem wir ihm ein `value` Attribut mit `newName` zuweisen und unsere `handleChange()` Funktion an sein `onChange` Ereignis binden. Aktualisieren Sie es folgendermaßen:

```jsx
<input
  id={props.id}
  className="todo-text"
  type="text"
  value={newName}
  onChange={handleChange}
/>
```

Schließlich müssen wir eine Funktion erstellen, die das `onSubmit` Ereignis des Bearbeitungsformulars behandelt. Fügen Sie Folgendes direkt unterhalb von `handleChange()` hinzu:

```jsx
function handleSubmit(e) {
  e.preventDefault();
  props.editTask(props.id, newName);
  setNewName("");
  setEditing(false);
}
```

Denken Sie daran, dass unser `editTask()` Callback-Prop sowohl die ID der Aufgabe, die wir bearbeiten, als auch deren neuen Namen benötigt.

Binden Sie diese Funktion an das `submit` Ereignis des Formulars, indem Sie den folgenden `onSubmit` Handler zum `<form>` im `editingTemplate` hinzufügen:

```jsx
<form className="stack-small" onSubmit={handleSubmit}>
```

Sie sollten jetzt in der Lage sein, eine Aufgabe in Ihrem Browser zu bearbeiten. An diesem Punkt sollte Ihre `Todo.jsx` Datei wie folgt aussehen:

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

## Zurück zu den Filterbuttons

Da unsere Hauptfunktionen nun vollständig sind, können wir an unsere Filterbuttons denken. Derzeit wiederholen sie das Label "All", und sie haben keine Funktionalität! Wir werden einige der Fähigkeiten, die wir mit unserer `<Todo />` Komponente angewendet haben, erneut anwenden, um:

- Einen Hook zum Speichern des aktiven Filters zu erstellen.
- Ein Array von `<FilterButton />` Elementen zu rendern, das es den Nutzern ermöglicht, den aktiven Filter zwischen allen, abgeschlossenen und unvollständigen Aufgaben zu wechseln.

### Hinzufügen eines Filter-Hooks

Fügen Sie Ihrer `App()` Funktion einen neuen Hook hinzu, der einen Filter liest und setzt. Wir möchten, dass der Standardfilter `All` ist, da anfänglich alle unsere Aufgaben angezeigt werden sollten:

```jsx
const [filter, setFilter] = useState("All");
```

### Definieren unserer Filter

Unser Ziel ist jetzt zweifach:

- Jeder Filter sollte einen einzigartigen Namen haben.
- Jeder Filter sollte ein einzigartiges Verhalten haben.

Ein JavaScript-Objekt wäre eine großartige Möglichkeit, Namen mit Verhaltensweisen zu verknüpfen: jeder Schlüssel ist der Name eines Filters; jede Eigenschaft ist das Verhalten, das mit diesem Namen verknüpft ist.

Am Anfang von `App.jsx`, unterhalb unserer Importe, aber oberhalb der `App()` Funktion, fügen wir ein Objekt namens `FILTER_MAP` hinzu:

```jsx
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};
```

Die Werte von `FILTER_MAP` sind Funktionen, die wir verwenden werden, um das `tasks` Datenarray zu filtern:

- Der `All` Filter zeigt alle Aufgaben, also geben wir `true` für alle Aufgaben zurück.
- Der `Active` Filter zeigt Aufgaben, deren `completed` Eigenschaft `false` ist.
- Der `Completed` Filter zeigt Aufgaben, deren `completed` Eigenschaft `true` ist.

Fügen Sie unter unserer vorherigen Ergänzung Folgendes hinzu — hier verwenden wir die Methode [`Object.keys()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys), um ein Array von `FILTER_NAMES` zu sammeln:

```jsx
const FILTER_NAMES = Object.keys(FILTER_MAP);
```

> [!NOTE]
> Wir definieren diese Konstanten außerhalb unserer `App()` Funktion, weil sie, wenn sie innerhalb definiert wären, jedes Mal neu berechnet würden, wenn die `<App />` Komponente neu gerendert wird, und das wollen wir nicht. Diese Informationen werden sich nie ändern, egal was unsere Anwendung macht.

### Rendern der Filter

Da wir jetzt das `FILTER_NAMES` Array haben, können wir es verwenden, um alle drei Filter zu rendern. Innerhalb der `App()` Funktion können wir eine Konstante namens `filterList` erstellen, die wir verwenden, um unser Array von Namen zu durchlaufen und eine `<FilterButton />` Komponente zurückzugeben. Denken Sie daran, hier brauchen wir auch Schlüssel.

Fügen Sie das Folgende unter Ihrer `taskList` Konstantendeklaration hinzu:

```jsx
const filterList = FILTER_NAMES.map((name) => (
  <FilterButton key={name} name={name} />
));
```

Nun werden wir die drei wiederholten `<FilterButton />`s in `App.jsx` durch diesen `filterList` ersetzen. Ersetzen Sie das Folgende:

```jsx
<FilterButton />
<FilterButton />
<FilterButton />
```

Mit diesem:

```jsx-nolint
{filterList}
```

Das wird noch nicht funktionieren. Wir haben vorher noch ein wenig Arbeit zu erledigen.

### Interaktive Filter

Um unsere Filterbuttons interaktiv zu machen, sollten wir überlegen, welche Props sie verwenden müssen.

- Wir wissen, dass der `<FilterButton />` melden sollte, ob er derzeit gedrückt ist, und er sollte gedrückt werden, wenn sein Name mit dem aktuellen Wert unseres Filterzustands übereinstimmt.
- Wir wissen, dass der `<FilterButton />` einen Callback benötigt, um den aktiven Filter festzulegen. Wir können unseren `setFilter` Hook direkt nutzen.

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

Ähnlich wie wir es zuvor mit unserer `<Todo />` Komponente gemacht haben, müssen wir jetzt `FilterButton.jsx` aktualisieren, um die Props zu verwenden, die wir ihm gegeben haben. Machen Sie dies für jeden der folgenden Punkte und denken Sie daran, geschweifte Klammern zu verwenden, um diese Variablen zu lesen!

- Ersetzen Sie `all` durch `{props.name}`.
- Setzen Sie den Wert von `aria-pressed` auf `{props.isPressed}`.
- Fügen Sie einen `onClick` Handler hinzu, der `props.setFilter()` mit dem Namen des Filters aufruft.

Wenn alles erledigt ist, sollte Ihre `FilterButton.jsx` Datei so aussehen:

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

Besuchen Sie erneut Ihren Browser. Sie sollten sehen, dass die verschiedenen Buttons ihre entsprechenden Namen erhalten haben. Wenn Sie auf einen Filterbutton drücken, sollten Sie sehen, dass sein Text einen neuen Umriss annimmt — dies zeigt Ihnen an, dass er ausgewählt wurde. Und wenn Sie sich den Page Inspector Ihres DevTools ansehen, während Sie die Buttons klicken, werden Sie sehen, dass sich die Werte des `aria-pressed` Attributs entsprechend ändern.

![Die drei Filterbuttons der App - alle, aktiv und abgeschlossen - mit einem Fokus-Highlight um "abgeschlossen"](filter-buttons.png)

Unsere Buttons filtern die Aufgaben in der Benutzeroberfläche jedoch noch nicht! Machen wir das fertig.

### Aufgaben in der Benutzeroberfläche filtern

Derzeit durchläuft unsere `taskList` Konstante in `App()` den Aufgabenstatus und gibt eine neue `<Todo />` Komponente für alle Aufgaben zurück. Das ist nicht das, was wir wollen! Eine Aufgabe sollte nur gerendert werden, wenn sie in den Ergebnissen des angewendeten Filters enthalten ist. Bevor wir über den Aufgabenstatus mappen, sollten wir ihn filtern (mit [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)), um Objekte zu eliminieren, die wir nicht rendern möchten.

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

Um zu entscheiden, welche Callback-Funktion in `Array.prototype.filter()` verwendet werden soll, greifen wir auf den Wert in `FILTER_MAP` zu, der dem Schlüssel unseres Filterzustands entspricht. Wenn der Filter zum Beispiel `All` ist, wird `FILTER_MAP[filter]` zu `() => true` evaluiert.

Die Auswahl eines Filters in Ihrem Browser entfernt nun die Aufgaben, die nicht seinen Kriterien entsprechen. Auch die Anzahl im Überschrift über der Liste wird sich ändern, um die Liste zu reflektieren!

![Die App mit den Filterbuttons an Ort und Stelle. "Aktiv" ist hervorgehoben, daher werden nur die aktiven Aufgaben angezeigt.](filtered-todo-list.png)

## Zusammenfassung

Das war's also — unsere App ist nun funktional komplett. Allerdings können wir, jetzt, wo wir alle unsere Funktionen implementiert haben, einige Verbesserungen vornehmen, um sicherzustellen, dass eine breitere Benutzergruppe unsere App nutzen kann. Unser nächster Artikel rundet unsere React-Tutorials ab, indem er die Einbeziehung von Fokusmanagement in React betrachtet, was die Benutzerfreundlichkeit verbessern und Verwirrung für sowohl Tastaturnutzer als auch Screenreader-Nutzer reduzieren kann.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
