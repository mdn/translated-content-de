---
title: "React-Interaktivität: Ereignisse und Zustand"
short-title: React-Ereignisse und -Zustand
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}

Nachdem unser Komponentenplan ausgearbeitet ist, ist es an der Zeit, unsere App von einer komplett statischen Benutzeroberfläche zu einer zu aktualisieren, die tatsächlich Interaktivität und Veränderungen ermöglicht. In diesem Artikel werden wir das tun und dabei in Ereignisse und Zustände eintauchen. Am Ende haben wir eine App, in der wir erfolgreich Aufgaben hinzufügen und löschen sowie Aufgaben als abgeschlossen kennzeichnen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie mit der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal-/Befehlszeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Umgang mit Ereignissen und Zustand in React und deren Nutzung, um zu beginnen, die Fallstudien-App interaktiv zu machen.
      </td>
    </tr>
  </tbody>
</table>

## Umgang mit Ereignissen

Wenn Sie bisher nur mit Vanilla-JavaScript gearbeitet haben, sind Sie es vielleicht gewohnt, eine separate JavaScript-Datei zu haben, in der Sie einige DOM-Knoten abfragen und Listener daran anhängen. Beispielsweise könnte eine HTML-Datei einen Button enthalten, wie dieser:

```html
<button type="button">Say hi!</button>
```

Und eine JavaScript-Datei könnte etwa so aussehen:

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("hi!");
});
```

In JSX lebt der Code, der die Benutzeroberfläche beschreibt, direkt neben unseren Ereignis-Listenern:

```jsx
<button type="button" onClick={() => alert("hi!")}>
  Say hi!
</button>
```

In diesem Beispiel fügen wir dem `<button>`-Element ein `onClick`-Attribut hinzu. Der Wert dieses Attributs ist eine Funktion, die einen Alert auslöst. Dies mag im Widerspruch zu Best Practices stehen, die empfehlen, keine Ereignis-Listener in HTML zu schreiben. Denken Sie jedoch daran: JSX ist kein HTML.

Das `onClick`-Attribut hat hier eine besondere Bedeutung: Es sagt React, dass eine bestimmte Funktion ausgeführt werden soll, wenn der Benutzer auf den Button klickt. Es gibt ein paar weitere Dinge zu beachten:

- Die {{Glossary("camel_case", "Camel-Case-Schreibweise")}} von `onClick` ist wichtig – JSX erkennt `onclick` nicht (wiederum, da es bereits in JavaScript für einen bestimmten Zweck verwendet wird, der verwandt, aber anders ist – Standard-`[`onclick`](/de/docs/Web/API/Element/click_event)`-Handler-Eigenschaften).
- Alle Brower-Ereignisse folgen diesem Format in JSX – `on`, gefolgt vom Namen des Ereignisses.

Lassen Sie uns dies auf unsere App anwenden, beginnend im `Form.jsx`-Komponenten.

### Umgang mit Formularübermittlung

Am Anfang der `Form()`-Komponentenfunktion (d.h. direkt unterhalb der Zeile `function Form() {`) erstellen Sie eine Funktion mit dem Namen `handleSubmit()`. Diese Funktion sollte [das Standardverhalten des `submit`-Ereignisses verhindern](/de/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behavior). Danach sollte sie ein `alert()` auslösen, das wahlweise gestaltet werden kann. Es sollte in etwa so aussehen:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  alert("Hello, world!");
}
```

Um diese Funktion zu nutzen, fügen Sie ein `onSubmit`-Attribut zum [`<form>`](/de/docs/Web/HTML/Reference/Elements/form)-Element hinzu und setzen Sie dessen Wert auf die `handleSubmit`-Funktion:

```jsx
<form onSubmit={handleSubmit}>
```

Wenn Sie nun in Ihren Browser zurückkehren und auf den "Hinzufügen"-Button klicken, wird Ihr Browser Ihnen ein Dialogfeld mit den Worten "Hello, world!" – oder dem, was Sie dort gewählt haben – anzeigen.

## Callback-Props

In React-Anwendungen ist Interaktivität selten auf nur eine Komponente beschränkt: Ereignisse, die in einer Komponente geschehen, beeinflussen andere Teile der App. Wenn wir anfangen, uns die Möglichkeit zu geben, neue Aufgaben zu erstellen, werden Dinge, die in der `<Form />`-Komponente passieren, die in `<App />` gerenderte Liste beeinflussen.

Unsere `handleSubmit()`-Funktion soll letztendlich helfen, eine neue Aufgabe zu erstellen, also benötigen wir einen Weg, Informationen von `<Form />` zu `<App />` zu übermitteln. Wir können Daten nicht vom Kind zum Elternteil auf die gleiche Weise übergeben, wie wir Daten vom Elternteil zum Kind über Standard-Props weitergeben. Stattdessen können wir eine Funktion in `<App />` schreiben, die einige Daten aus unserem Formular als Eingabe erwartet, und diese Funktion dann als Prop an `<Form />` übergeben. Diese Funktion-als-Prop wird als **Callback-Prop** bezeichnet. Sobald wir unsere Callback-Prop haben, können wir sie innerhalb von `<Form />` aufrufen, um die richtigen Daten an `<App />` zu senden.

### Bearbeitung der Formularübermittlung über Callbacks

Legen Sie in der Funktion `App()` in `App.jsx` eine Funktion mit dem Namen `addTask()` an, die einen einzigen Parameter `name` hat:

```jsx
function addTask(name) {
  alert(name);
}
```

Übergeben Sie dann `addTask()` als Prop an `<Form />`. Die Prop kann einen beliebigen Namen haben, aber wählen Sie einen, den Sie später verstehen werden. Etwas wie `addTask` funktioniert, weil es sowohl den Namen der Funktion als auch das, was die Funktion tun wird, widerspiegelt. Ihr `<Form />`-Komponentenaufruf sollte wie folgt aktualisiert werden:

```jsx
<Form addTask={addTask} />
```

Um diese Prop zu verwenden, müssen wir die Signatur der `Form()`-Funktion in `Form.jsx` ändern, sodass sie `props` als Parameter akzeptiert:

```jsx
function Form(props) {
  // ...
}
```

Schließlich können wir diese Prop innerhalb der `handleSubmit()`-Funktion in Ihrer `<Form />`-Komponente verwenden! Aktualisieren Sie es wie folgt:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask("Say hello!");
}
```

Wenn Sie im Browser auf den "Hinzufügen"-Button klicken, wird bewiesen, dass die `addTask()`-Callback-Funktion funktioniert, aber es wäre schön, wenn der Alert uns zeigen würde, was wir in unser Eingabefeld hineinschreiben! Das werden wir als Nächstes tun.

### Anmerkung: Eine Notiz zu Namenskonventionen

Wir haben die `addTask()`-Funktion in die `<Form />`-Komponente als Prop `addTask` übergeben, damit die Beziehung zwischen der `addTask()`-Funktion und der `addTask`-Prop so klar wie möglich bleibt. Beachten Sie jedoch, dass Prop-Namen nicht unbedingt etwas Bestimmtes sein müssen. Wir hätten `addTask()` unter jedem anderen Namen in `<Form />` übergeben können, zum Beispiel so:

```diff
- <Form addTask={addTask} />
+ <Form onSubmit={addTask} />
```

Das würde die `addTask()`-Funktion der `<Form />`-Komponente als Prop `onSubmit` verfügbar machen. Diese Prop könnte in `Form.jsx` so verwendet werden:

```diff
function handleSubmit(event) {
  event.preventDefault();
- props.addTask("Say hello!");
+ props.onSubmit("Say hello!");
}
```

Hier sagt uns das Präfix `on`, dass die Prop eine Callback-Funktion ist; `Submit` ist unser Hinweis darauf, dass ein Submit-Ereignis diese Funktion auslösen wird.

Während Callback-Props oft die Namen von bekannten Event-Handlern wie `onSubmit` oder `onClick` annehmen, können sie nahezu jeden beliebigen Namen haben, der ihre Bedeutung klar macht. Eine hypothetische `<Menu />`-Komponente könnte eine Callback-Funktion enthalten, die ausgeführt wird, wenn das Menü geöffnet wird, sowie eine separate Callback-Funktion, die ausgeführt wird, wenn es geschlossen wird:

```jsx
<Menu onOpen={() => console.log("Hi!")} onClose={() => console.log("Bye!")} />
```

Diese `on*`-Namenskonvention ist sehr verbreitet im React-Ökosystem, daher sollten Sie daran denken, während Sie weiter lernen. Der Klarheit halber werden wir in diesem Tutorial bei Prop-Namen wie `addTask` und ähnlichen Prop-Namen bleiben. Wenn Sie während dieses Abschnitts Prop-Namen geändert haben, stellen Sie sicher, dass Sie sie zurückändern, bevor Sie fortfahren!

## Daten speichern und ändern mit Zustand

Bisher haben wir Props verwendet, um Daten durch unsere Komponenten zu übergeben, und das hat uns gut gedient. Da wir jetzt jedoch mit Interaktivität umgehen, benötigen wir die Fähigkeit, neue Daten zu erstellen, sie zu speichern und später zu aktualisieren. Props sind nicht das richtige Werkzeug für diese Anforderungen, da sie unveränderlich sind – eine Komponente kann ihre eigenen Props nicht ändern oder erstellen.

Hier kommt der **Zustand** ins Spiel. Wenn wir Props als eine Möglichkeit betrachten, zwischen Komponenten zu kommunizieren, können wir Zustand als eine Möglichkeit sehen, Komponenten "Gedächtnis" zu geben – Informationen, die sie benötigen, zu behalten und zu aktualisieren.

React bietet eine spezielle Funktion, um Zustand in eine Komponente einzuführen, die passend `useState()` genannt wird.

> [!NOTE] > `useState()` gehört zu einer speziellen Kategorie von Funktionen, die als **Hooks** bezeichnet werden, von denen jede verwendet werden kann, um einer Komponente neue Funktionalität hinzuzufügen. Wir werden später weitere Hooks kennenlernen.

Um `useState()` zu verwenden, müssen wir es aus dem React-Modul importieren. Fügen Sie die folgende Zeile oben in Ihrer `Form.jsx`-Datei hinzu, über der Definition der `Form()`-Funktion:

```jsx
import { useState } from "react";
```

`useState()` nimmt ein einziges Argument entgegen, das den Anfangswert des Zustands bestimmt. Dieses Argument kann ein String, eine Zahl, ein Array, ein Objekt oder ein anderer JavaScript-Datentyp sein. `useState()` gibt ein Array mit zwei Elementen zurück. Das erste Element ist der aktuelle Wert des Zustands; das zweite Element ist eine Funktion, die verwendet werden kann, um den Zustand zu aktualisieren.

Lassen Sie uns einen `name`-Zustand erstellen. Schreiben Sie das Folgende über Ihrer `handleSubmit()`-Funktion, innerhalb von `Form()`:

```jsx
const [name, setName] = useState("Learn React");
```

Mehrere Dinge passieren in dieser Codezeile:

- Wir definieren eine Konstante `name` mit dem Wert `"Learn React"`.
- Wir definieren eine Funktion mit dem Namen `setName()`, deren Aufgabe es ist, `name` zu ändern.
- `useState()` gibt diese beiden Dinge in einem Array zurück, also verwenden wir die [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring), um sie in separaten Variablen zu erfassen.

### Zustand lesen

Sie können den `name`-Zustand sofort in Aktion sehen. Fügen Sie Ihrem Formular-Eingabefeld ein `value`-Attribut hinzu und setzen Sie dessen Wert auf `name`. Ihr Browser rendert "Learn React" in das Eingabefeld.

```jsx
<input
  type="text"
  id="new-todo-input"
  className="input input__lg"
  name="text"
  autoComplete="off"
  value={name}
/>
```

Ändern Sie "Learn React" in einen leeren String, wenn Sie fertig sind; das ist, was wir für unseren anfänglichen Zustand wünschen:

```jsx
const [name, setName] = useState("");
```

### Benutzereingaben lesen

Bevor wir den Wert von `name` ändern können, müssen wir die Benutzereingaben erfassen, während sie schreiben. Dafür können wir das `onChange`-Ereignis abhören. Lassen Sie uns eine `handleChange()`-Funktion schreiben und sie auf dem `<input />`-Element hören.

```jsx
// near the top of the `Form` component
function handleChange() {
  console.log("Typing!");
}

// …

// Down in the return statement
<input
  type="text"
  id="new-todo-input"
  className="input input__lg"
  name="text"
  autoComplete="off"
  value={name}
  onChange={handleChange}
/>;
```

Derzeit wird sich der Wert unserer Eingabe nicht ändern, wenn Sie versuchen, Text darin einzugeben, aber Ihr Browser wird das Wort "Typing!" in die JavaScript-Konsole protokollieren, sodass wir wissen, dass unser Ereignis-Listener an die Eingabe angehängt ist.

Um die Tasteneingaben des Benutzers zu lesen, müssen wir auf die `value`-Eigenschaft der Eingabe zugreifen. Dies können wir tun, indem wir das `event`-Objekt lesen, das `handleChange()` erhält, wenn es aufgerufen wird. `event` hat wiederum eine [`target`-Eigenschaft](/de/docs/Web/API/Event/target), die das Element repräsentiert, das das `change`-Ereignis ausgelöst hat. Das ist unsere Eingabe. `event.target.value` ist also der Text innerhalb der Eingabe.

Sie können diesen Wert mit `console.log()` sich in der Konsole Ihres Browsers anzeigen lassen. Versuchen Sie, die `handleChange()`-Funktion wie folgt zu aktualisieren, und tippen Sie in die Eingabe ein, um das Ergebnis in Ihrer Konsole zu sehen:

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

### Zustand aktualisieren

Protokollierung reicht nicht – wir möchten tatsächlich speichern, was der Benutzer eintippt und es in der Eingabe ausgeben! Ändern Sie Ihren `console.log()`-Aufruf in `setName()`, wie unten gezeigt:

```jsx
function handleChange(event) {
  setName(event.target.value);
}
```

Nun, wenn Sie in die Eingabe tippen, werden Ihre Tastenanschläge die Eingabe ausfüllen, wie Sie es erwarten würden.

Wir haben noch einen Schritt: Wir müssen unsere `handleSubmit()`-Funktion so ändern, dass sie `props.addTask` mit `name` als Argument aufruft. Erinnern Sie sich an unsere Callback-Prop? Dies wird dazu dienen, die Aufgabe an die `App`-Komponente zurückzusenden, sodass wir sie zu einem späteren Zeitpunkt zu unserer Liste der Aufgaben hinzufügen können. Als eine Frage der guten Praxis sollten Sie die Eingabe nach dem Absenden des Formulars löschen, also rufen wir `setName()` erneut mit einem leeren String auf, um dies zu tun:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask(name);
  setName("");
}
```

Endlich können Sie etwas in das Eingabefeld in Ihrem Browser eingeben und auf _Hinzufügen_ klicken – was auch immer Sie eingegeben haben, wird in einem Dialogfeld angezeigt.

Ihre `Form.jsx`-Datei sollte nun so aussehen:

```jsx
import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
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
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
```

> [!NOTE]
> Sie werden bemerken, dass Sie leere Aufgaben eintragen können, indem Sie einfach ohne Eingabe eines Aufgabennamens auf den `Hinzufügen`-Button klicken. Können Sie sich eine Möglichkeit vorstellen, dies zu verhindern? Als Hinweis: Sie müssen wahrscheinlich eine Art Prüfung in die `handleSubmit()`-Funktion einfügen.

## Alles zusammenfügen: Eine Aufgabe hinzufügen

Nachdem wir nun mit Ereignissen, Callback-Props und Hooks geübt haben, sind wir bereit, Funktionalität zu schreiben, die es einem Benutzer ermöglicht, über seinen Browser eine neue Aufgabe hinzuzufügen.

### Aufgaben als Zustand

Wir müssen `useState` in `App.jsx` importieren, damit wir unsere Aufgaben im Zustand speichern können. Fügen Sie Folgendes am Anfang Ihrer `App.jsx`-Datei hinzu:

```jsx
import { useState } from "react";
```

Wir möchten `props.tasks` in den `useState()`-Hook übergeben – das wird dessen Anfangszustand bewahren. Fügen Sie das Folgende direkt an den Anfang Ihrer `App()`-Funktionsdefinition hinzu:

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

Nun können wir unser `taskList`-Mapping ändern, sodass es das Ergebnis des Mappings von `tasks` anstelle von `props.tasks` ist. Ihre `taskList`-Konstantendeklaration sollte nun so aussehen:

```jsx
const taskList = tasks?.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
));
```

### Eine Aufgabe hinzufügen

Wir haben jetzt einen `setTasks`-Hook, den wir in unserer `addTask()`-Funktion verwenden können, um unsere Aufgabenliste zu aktualisieren. Es gibt jedoch ein Problem: Wir können das `name`-Argument der `addTask()`-Funktion nicht einfach in `setTasks` übergeben, da `tasks` ein Array von Objekten ist und `name` ein String. Wenn wir das versuchten, würde das Array durch den String ersetzt.

Zuerst müssen wir `name` in ein Objekt umwandeln, das die gleiche Struktur wie unsere vorhandenen Aufgaben hat. Innerhalb der `addTask()`-Funktion erstellen wir ein `newTask`-Objekt, das dem Array hinzugefügt werden soll.

Dann müssen wir ein neues Array mit dieser neuen Aufgabe erstellen und dann den Zustand der Aufgaben mit diesem neuen Zustand aktualisieren. Dafür können wir die Spread-Syntax verwenden, um [das bestehende Array zu kopieren](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copying_an_array) und unser Objekt am Ende hinzuzufügen. Dann übergeben wir dieses Array an `setTasks()`, um den Zustand zu aktualisieren.

Alles zusammengefasst, Ihre `addTask()`-Funktion sollte so aussehen:

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

Jetzt können Sie den Browser verwenden, um eine Aufgabe zu unseren Daten hinzuzufügen! Geben Sie irgendetwas in das Formular ein und klicken Sie auf "Hinzufügen" (oder drücken Sie die <kbd>Enter</kbd>-Taste) und Sie sehen Ihre neue Todo-Item in der Benutzeroberfläche erscheinen!

**Wir haben jedoch noch ein Problem**: Unsere `addTask()`-Funktion gibt jeder Aufgabe die gleiche `id`. Dies ist schlecht für die Barrierefreiheit und macht es unmöglich, dass React zukünftige Aufgaben mit der `key`-Prop unterscheidet. Tatsächlich wird React Ihnen eine Warnung in Ihrer DevTools-Konsole geben — "Warning: Encountered two children with the same key…"

Wir müssen das beheben. Eindeutige Kennungen zu erstellen, ist ein schwieriges Problem – eines, für das die JavaScript-Community einige hilfreiche Bibliotheken geschrieben hat. Wir werden [nanoid](https://github.com/ai/nanoid) verwenden, da es klein ist und funktioniert.

Stellen Sie sicher, dass Sie sich im Hauptverzeichnis Ihrer Anwendung befinden und führen Sie den folgenden Terminalbefehl aus:

```bash
npm install nanoid
```

> [!NOTE]
> Wenn Sie yarn verwenden, benötigen Sie stattdessen folgendes: `yarn add nanoid`.

Jetzt können wir `nanoid` verwenden, um eindeutige IDs für unsere neuen Aufgaben zu erstellen. Importieren Sie es zuerst, indem Sie die folgende Zeile oben in `App.jsx` hinzufügen:

```jsx
import { nanoid } from "nanoid";
```

Aktualisieren wir nun `addTask()`, sodass jede Aufgaben-ID zu einem Präfix `todo-` und einem eindeutigen von nanoid generierten String wird. Aktualisieren Sie Ihre Deklaration der `newTask`-Konstante zu diesem:

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

Speichern Sie alles und versuchen Sie, Ihre App erneut auszuführen – jetzt können Sie Aufgaben hinzufügen, ohne diese Warnung über doppelte IDs zu erhalten.

## Abstecher: Aufgaben zählen

Nun, da wir neue Aufgaben hinzufügen können, bemerken Sie vielleicht ein Problem: Unsere Überschrift lautet "3 tasks remaining", egal wie viele Aufgaben wir haben! Wir können dies beheben, indem wir die Länge von `taskList` zählen und den Text unserer Überschrift entsprechend ändern.

Fügen Sie dies innerhalb Ihrer `App()`-Definition hinzu, bevor die return-Anweisung erfolgt:

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

Es ist fast richtig, außer dass, wenn unsere Liste jemals eine einzige Aufgabe enthält, die Überschrift immer noch das Wort "tasks" verwenden wird. Wir können auch dies zu einer Variable machen. Aktualisieren Sie den Code, den Sie gerade hinzugefügt haben, wie folgt:

```jsx
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

Nun können Sie den Textinhalt der Listenüberschrift durch die Variable `headingText` ersetzen. Aktualisieren Sie Ihr `<h2>` wie folgt:

```jsx
<h2 id="list-heading">{headingText}</h2>
```

Speichern Sie die Datei, gehen Sie zurück zu Ihrem Browser und versuchen Sie, einige Aufgaben hinzuzufügen: Der Zähler sollte sich nun wie erwartet aktualisieren.

## Eine Aufgabe abschließen

Sie werden bemerken, dass, wenn Sie auf ein Kontrollkästchen klicken, es sich entsprechend ein- und ausschaltet. Als Feature von HTML weiß der Browser, wie er merkt, welche Kontrollkästchen-Eingaben aktiviert oder deaktiviert sind, ohne unsere Hilfe. Dieses Feature versteckt jedoch ein Problem: Das Umschalten eines Kontrollkästchens ändert den Zustand in unserer React-Anwendung nicht. Das bedeutet, dass der Browser und unsere App nun nicht mehr synchronisiert sind. Wir müssen unseren eigenen Code schreiben, um den Browser wieder mit unserer App zu synchronisieren.

### Den Bug beweisen

Bevor wir das Problem beheben, beobachten wir es beim Auftreten.

Wir beginnen damit, in unserer `App()`-Komponente eine `toggleTaskCompleted()`-Funktion zu schreiben. Diese Funktion wird einen `id`-Parameter haben, aber wir werden ihn erstmal nicht verwenden. Stattdessen werden wir das erste Element im Array in der Konsole protokollieren – wir werden beobachten, was geschieht, wenn wir es in unserem Browser markieren oder demarkieren:

Fügen Sie dies direkt über Ihrer `taskList`-Konstantendeklaration hinzu:

```jsx
function toggleTaskCompleted(id) {
  console.log(tasks[0]);
}
```

Anschließend fügen wir `toggleTaskCompleted` zu den Props jeder gerenderten `<Todo />`-Komponente in unserer `taskList`-Konstanten hinzu. Aktualisieren Sie es wie folgt:

```jsx
const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
  />
));
```

Gehen Sie nun in Ihre `Todo.jsx`-Komponente und fügen Sie Ihrem `<input />`-Element einen `onChange`-Handler hinzu. Dieser sollte eine anonyme Funktion verwenden, um `props.toggleTaskCompleted()` mit einem Parameter von `props.id` aufzurufen. Das `<input />` sollte nun so aussehen:

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

Speichern Sie alles und kehren Sie zu Ihrem Browser zurück und bemerken Sie, dass unsere erste Aufgabe, Essen, markiert ist. Öffnen Sie Ihre JavaScript-Konsole, klicken Sie dann auf das Kästchen neben Essen. Es demarkiert, wie wir es erwarten. Ihre JavaScript-Konsole wird jedoch etwas wie dies protokollieren:

```plain
Object { id: "task-0", name: "Eat", completed: true }
```

Das Kästchen demarkiert im Browser, aber unsere Konsole sagt uns, dass Essen immer noch abgeschlossen ist. Das werden wir als Nächstes reparieren!

### Den Browser mit unseren Daten synchronisieren

Lassen Sie uns unsere `toggleTaskCompleted()`-Funktion in `App.jsx` erneut besuchen. Wir wollen, dass es die `completed`-Eigenschaft nur der Aufgabe ändert, die umgeschaltet wurde, und alle anderen lassen wir unverändert. Um dies zu tun, werden wir mit `map()` über die Aufgabenliste gehen und nur diejenige ändern, die wir abgeschlossen haben.

Aktualisieren Sie Ihre `toggleTaskCompleted()`-Funktion wie folgt:

```jsx
function toggleTaskCompleted(id) {
  const updatedTasks = tasks.map((task) => {
    // if this task has the same ID as the edited task
    if (id === task.id) {
      // use object spread to make a new object
      // whose `completed` prop has been inverted
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  setTasks(updatedTasks);
}
```

Hier definieren wir eine `updatedTasks`-Konstante, die das ursprüngliche `tasks`-Array abbildet. Wenn die `id`-Eigenschaft der Aufgabe mit der an die Funktion übergebenen `id` übereinstimmt, verwenden wir die [Objekt-Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um ein neues Objekt zu erstellen, und schalten die `completed`-Eigenschaft dieses Objekts um, bevor wir es zurückgeben. Wenn es nicht übereinstimmt, geben wir das ursprüngliche Objekt zurück.

Dann rufen wir `setTasks()` mit diesem neuen Array auf, um unseren Zustand zu aktualisieren.

## Eine Aufgabe löschen

Das Löschen einer Aufgabe wird einem ähnlichen Muster folgen wie das Umschalten ihres abgeschlossenen Zustands: Wir müssen eine Funktion definieren, um unseren Zustand zu aktualisieren, und diese Funktion dann als Prop in `<Todo />` übergeben und sie aufrufen, wenn das richtige Ereignis eintritt.

### Der `deleteTask`-Callback-Prop

Wir werden damit beginnen, eine `deleteTask()`-Funktion in Ihrer `App`-Komponente zu schreiben. Wie `toggleTaskCompleted()` wird diese Funktion einen `id`-Parameter haben, und wir werden diesen `id` zuerst in der Konsole protokollieren. Fügen Sie Folgendes unterhalb von `toggleTaskCompleted()` hinzu:

```jsx
function deleteTask(id) {
  console.log(id);
}
```

Fügen Sie als Nächstes eine weitere Callback-Prop zu unserem Array von `<Todo />`-Komponenten hinzu:

```jsx
const taskList = tasks.map((task) => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
  />
));
```

In `Todo.jsx` wollen wir `props.deleteTask()` aufrufen, wenn der "Löschen"-Button gedrückt wird. `deleteTask()` muss die ID der Aufgabe kennen, die sie aufgerufen hat, damit sie die richtige Aufgabe aus dem Zustand löschen kann.

Aktualisieren Sie den "Löschen"-Button innerhalb von `Todo.jsx`, wie folgt:

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

Nun sollten beim Klicken auf einen der "Löschen"-Buttons in der App die ID der zugehörigen Aufgabe in Ihrer Browserkonsole protokolliert werden.

An diesem Punkt sollte Ihre `Todo.jsx`-Datei so aussehen:

```jsx
function Todo(props) {
  return (
    <li className="todo stack-small">
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
    </li>
  );
}

export default Todo;
```

## Aufgaben aus dem Zustand und der Benutzeroberfläche löschen

Da wir jetzt wissen, dass `deleteTask()` korrekt aufgerufen wird, können wir in `deleteTask()` unseren `setTasks()`-Hook aufrufen, um diese Aufgabe tatsächlich aus dem Zustand der App sowie visuell in der App-Benutzeroberfläche zu löschen. Da `setTasks()` ein Array als Argument erwartet, sollten wir ihm ein neues Array geben, das die bestehenden Aufgaben kopiert, _ausschließlich_ der Aufgabe, deren ID mit der in `deleteTask()` übergebenen übereinstimmt.

Dies ist eine perfekte Gelegenheit, um [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) zu verwenden. Wir können jede Aufgabe testen und eine Aufgabe aus dem neuen Array ausschließen, wenn ihre `id`-Prop mit dem `id`-Argument übereinstimmt, das in `deleteTask()` übergeben wurde.

Aktualisieren Sie die `deleteTask()`-Funktion innerhalb Ihrer `App.jsx`-Datei wie folgt:

```jsx
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}
```

Probieren Sie Ihre App erneut aus. Nun sollten Sie in der Lage sein, eine Aufgabe aus Ihrer App zu löschen!

An diesem Punkt sollte Ihre `App.jsx`-Datei so aussehen:

```jsx
import { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  const [tasks, setTasks] = useState(props.tasks);
  const taskList = tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
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

## Zusammenfassung

Das reicht für einen Artikel. Hier haben wir Ihnen einen Überblick darüber gegeben, wie React mit Ereignissen umgeht und wie es Zustand verwaltet. Wir haben Funktionalität implementiert, um Aufgaben hinzuzufügen, zu löschen und als abgeschlossen zu markieren. Wir sind fast da. Im nächsten Artikel werden wir die Funktionalität implementieren, um bestehende Aufgaben zu bearbeiten und die Liste der Aufgaben zwischen allen, abgeschlossenen und unvollständigen Aufgaben zu filtern. Wir werden unterwegs eine bedingte UI-Renderung betrachten.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}
