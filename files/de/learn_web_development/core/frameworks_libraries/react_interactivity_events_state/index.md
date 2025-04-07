---
title: "React-Interaktivität: Events und Zustand"
short-title: React-Events und -Zustand
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}

Mit unserem durchdachten Komponentenplan ist es nun an der Zeit, unsere App von einer vollständig statischen Benutzeroberfläche zu einer zu aktualisieren, die tatsächlich Interaktivität erlaubt und Änderungen zulässt. In diesem Artikel werden wir dies tun, wobei wir unterwegs in Events und Zustand eintauchen und schließlich mit einer App enden, in der wir erfolgreich Aufgaben hinzufügen und löschen sowie Aufgaben als erledigt markieren können.

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
        Umgang mit Events und Zustand in React und deren Nutzung, um die Fallstudien-App interaktiv zu machen.
      </td>
    </tr>
  </tbody>
</table>

## Umgang mit Events

Falls Sie bisher nur reines JavaScript geschrieben haben, sind Sie möglicherweise daran gewöhnt, eine separate JavaScript-Datei zu haben, in der Sie einige DOM-Knoten abfragen und Listener an sie anhängen. Zum Beispiel könnte eine HTML-Datei einen Button enthalten, wie diesen hier:

```html
<button type="button">Say hi!</button>
```

Und eine JavaScript-Datei könnte etwa solchen Code enthalten:

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("hi!");
});
```

In JSX lebt der Code, der die Benutzeroberfläche beschreibt, direkt neben unseren Event-Listenern:

```jsx
<button type="button" onClick={() => alert("hi!")}>
  Say hi!
</button>
```

In diesem Beispiel fügen wir dem {{htmlelement("button")}}-Element ein `onClick`-Attribut hinzu. Der Wert dieses Attributs ist eine Funktion, die einen Alert auslöst. Dies mag im Widerspruch zu den Best Practices stehen, die besagen, dass Sie keine Event-Listener in HTML schreiben sollten, aber denken Sie daran: JSX ist kein HTML.

Das `onClick`-Attribut hat hier eine besondere Bedeutung: Es weist React an, eine bestimmte Funktion auszuführen, wenn der Benutzer auf den Button klickt. Es gibt ein paar weitere Dinge zu beachten:

- Die {{Glossary("camel_case", "camelCase-Schreibweise")}} von `onClick` ist wichtig — JSX erkennt `onclick` nicht (es wird bereits in JavaScript für einen bestimmten, verwandten, aber anderen Zweck verwendet — Standard-[`onclick`](/de/docs/Web/API/Element/click_event)-Handler-Eigenschaften).
- Alle Browser-Events folgen diesem Format in JSX – `on`, gefolgt vom Namen des Events.

Lassen Sie uns dies in unserer App anwenden, beginnend mit der `Form.jsx`-Komponente.

### Umgang mit der Formularübermittlung

Am Anfang der `Form()`-Komponentenfunktion (d.h. direkt unter der Zeile `function Form() {`) erstellen Sie eine Funktion namens `handleSubmit()`. Diese Funktion sollte [das Standardverhalten des `submit`-Events verhindern](/de/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behavior). Danach sollte sie einen `alert()` auslösen, der sagen kann, was immer Sie möchten. Es sollte am Ende etwa so aussehen:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  alert("Hello, world!");
}
```

Um diese Funktion zu verwenden, fügen Sie dem [`<form>`](/de/docs/Web/HTML/Element/form)-Element ein `onSubmit`-Attribut hinzu und setzen Sie dessen Wert auf die Funktion `handleSubmit`:

```jsx
<form onSubmit={handleSubmit}>
```

Wenn Sie jetzt zu Ihrem Browser zurückkehren und auf den "Add"-Button klicken, zeigt Ihr Browser ein Alert-Dialogfeld mit den Worten "Hello, world!" – oder was immer Sie dort schreiben wollten.

## Callback-Props

In React-Anwendungen ist Interaktivität selten auf nur eine Komponente beschränkt: Ereignisse, die in einer Komponente passieren, beeinflussen andere Teile der App. Wenn wir uns die Macht geben, neue Aufgaben zu erstellen, werden Ereignisse, die in der `<Form />`-Komponente passieren, die Liste beeinflussen, die in `<App />` gerendert wird.

Wir möchten, dass unsere Funktion `handleSubmit()` uns letztendlich hilft, eine neue Aufgabe zu erstellen. Daher benötigen wir eine Möglichkeit, Informationen von `<Form />` an `<App />` zu übergeben. Wir können nicht auf dieselbe Weise Daten vom Kind an den Eltern übergeben, wie wir Daten vom Elternteil an das Kind mithilfe von Standard-Props übergeben. Stattdessen können wir in `<App />` eine Funktion schreiben, die einige Daten von unserem Formular als Eingabe erwartet, und dann diese Funktion als Prop an `<Form />` übergeben. Diese Funktion-als-Prop wird als **Callback-Prop** bezeichnet. Sobald wir unsere Callback-Prop haben, können wir sie innerhalb von `<Form />` aufrufen, um die richtigen Daten an `<App />` zu senden.

### Umgang mit der Formularübermittlung über Callbacks

Erstellen Sie innerhalb der `App()`-Funktion in `App.jsx` eine Funktion namens `addTask()`, die einen einzelnen Parameter `name` hat:

```jsx
function addTask(name) {
  alert(name);
}
```

Als nächstes übergeben Sie `addTask()` als Prop in `<Form />`. Die Prop kann jeden beliebigen Namen haben, aber wählen Sie einen Namen, den Sie später verstehen. Etwas wie `addTask` funktioniert, weil es sowohl den Namen der Funktion als auch das, was die Funktion tun wird, widerspiegelt. Ihr `<Form />`-Komponentenaufruf sollte wie folgt aktualisiert werden:

```jsx
<Form addTask={addTask} />
```

Um diese Prop zu verwenden, müssen wir die Signatur der `Form()`-Funktion in `Form.jsx` ändern, sodass sie `props` als Parameter akzeptiert:

```jsx
function Form(props) {
  // ...
}
```

Schließlich können wir diese Prop innerhalb der Funktion `handleSubmit()` in Ihrer `<Form />`-Komponente verwenden! Aktualisieren Sie sie wie folgt:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask("Say hello!");
}
```

Das Klicken auf den "Add"-Button im Browser wird beweisen, dass die `addTask()`-Callback-Funktion funktioniert, aber es wäre schön, wenn der Alert uns zeigen würde, was wir in unser Eingabefeld tippen! Dies werden wir als nächstes tun.

### Hinweis: eine Anmerkung zu Namenskonventionen

Wir haben die Funktion `addTask()` als Prop `addTask` in die `<Form />`-Komponente übergeben, sodass die Beziehung zwischen der _Funktion_ `addTask()` und der _Prop_ `addTask` so klar wie möglich bleibt. Beachten Sie jedoch, dass Prop-Namen nichts Bestimmtes sein müssen. Wir hätten `addTask()` unter einem anderen Namen in `<Form />` übergeben können, wie zum Beispiel:

```diff
- <Form addTask={addTask} />
+ <Form onSubmit={addTask} />
```

Dies würde die Funktion `addTask()` als Prop `onSubmit` für die `<Form />`-Komponente verfügbar machen. Diese Prop könnte in `Form.jsx` wie folgt verwendet werden:

```diff
function handleSubmit(event) {
  event.preventDefault();
- props.addTask("Say hello!");
+ props.onSubmit("Say hello!");
}
```

Hier sagt uns das Präfix `on`, dass die Prop eine Callback-Funktion ist; `Submit` ist unser Hinweis darauf, dass ein Submit-Event diese Funktion auslösen wird.

Während Callback-Props oft die Namen vertrauter Event-Handler wie `onSubmit` oder `onClick` tragen, können sie fast beliebig benannt werden, solange ihr Zweck klar wird. Eine hypothetische `<Menu />`-Komponente könnte eine Callback-Funktion enthalten, die ausgeführt wird, wenn das Menü geöffnet wird, sowie eine separate Callback-Funktion, die ausgeführt wird, wenn es geschlossen wird:

```jsx
<Menu onOpen={() => console.log("Hi!")} onClose={() => console.log("Bye!")} />
```

Diese `on*`-Namenskonvention ist sehr häufig im React-Ökosystem, daher sollten Sie daran denken, während Sie weiter lernen. Um der Klarheit willen werden wir für den Rest dieses Tutorials bei `addTask` und ähnlichen Prop-Namen bleiben. Wenn Sie beim Lesen dieses Abschnitts Prop-Namen geändert haben, achten Sie darauf, sie vor dem Fortfahren zurückzusetzen!

## Daten mit Zustand speichern und ändern

Bisher haben wir Props verwendet, um Daten durch unsere Komponenten zu leiten, und das hat uns gut gedient. Da wir es jetzt jedoch mit Interaktivität zu tun haben, brauchen wir die Fähigkeit, neue Daten zu erstellen, sie zu speichern und später zu aktualisieren. Props sind nicht das richtige Werkzeug für diese Aufgabe, da sie unveränderlich sind — eine Komponente kann ihre eigenen Props weder ändern noch erstellen.

Hier kommt **Zustand** ins Spiel. Wenn wir an Props als eine Möglichkeit denken, zwischen Komponenten zu kommunizieren, können wir Zustand als eine Möglichkeit betrachten, Komponenten "Gedächtnis" zu geben – Informationen, an denen sie festhalten und die sie bei Bedarf aktualisieren können.

React bietet eine spezielle Funktion zum Einführen von Zustand in eine Komponente, die treffend `useState()` genannt wird.

> **Hinweis:** `useState()` ist Teil einer speziellen Kategorie von Funktionen, die als **Hooks** bezeichnet werden, von denen jede verwendet werden kann, um einer Komponente neue Funktionalität hinzuzufügen. Wir werden später noch weitere Hooks kennenlernen.

Um `useState()` zu verwenden, müssen wir es aus dem React-Modul importieren. Fügen Sie die folgende Zeile am Anfang Ihrer `Form.jsx`-Datei oberhalb der Definition der `Form()`-Funktion hinzu:

```jsx
import { useState } from "react";
```

`useState()` nimmt ein einzelnes Argument, das den Anfangswert des Zustands bestimmt. Dieses Argument kann ein String, eine Zahl, ein Array, ein Objekt oder jeder andere JavaScript-Datentyp sein. `useState()` gibt ein Array zurück, das zwei Elemente enthält. Das erste Element ist der aktuelle Wert des Zustands; das zweite Element ist eine Funktion, die verwendet werden kann, um den Zustand zu aktualisieren.

Lassen Sie uns einen `name`-Zustand erstellen. Schreiben Sie das Folgende oberhalb Ihrer `handleSubmit()`-Funktion innerhalb von `Form()`:

```jsx
const [name, setName] = useState("Learn React");
```

Es passieren einige Dinge in dieser Zeile Code:

- Wir definieren eine Konstante `name` mit dem Wert `"Learn React"`.
- Wir definieren eine Funktion, deren Aufgabe es ist, `name` zu ändern, genannt `setName()`.
- `useState()` gibt diese beiden Dinge in einem Array zurück, daher verwenden wir [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring), um sie in separaten Variablen zu erfassen.

### Zustand lesen

Sie können den `name`-Zustand sofort in Aktion sehen. Fügen Sie dem Eingabefeld des Formulars ein `value`-Attribut hinzu und setzen Sie es auf `name`. Ihr Browser wird "Learn React" im Eingabefeld rendern.

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

Ändern Sie "Learn React" zu einem leeren String, wenn Sie fertig sind; dies ist das, was wir für unseren Anfangszustand wollen:

```jsx
const [name, setName] = useState("");
```

### Benutzereingabe lesen

Bevor wir den Wert von `name` ändern können, müssen wir die Eingabe eines Benutzers erfassen, während er tippt. Dafür können wir das `onChange`-Event hören. Lassen Sie uns eine `handleChange()`-Funktion schreiben und sie im `<input />`-Element hören.

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

Derzeit wird sich der Wert unserer Eingabe nicht ändern, wenn Sie versuchen, Text darin einzugeben. Aber Ihr Browser wird das Wort "Typing!" in die JavaScript-Konsole protokollieren, sodass wir wissen, dass unser Event-Listener mit der Eingabe verbunden ist.

Um die Tastaturanschläge des Benutzers zu lesen, müssen wir auf die `value`-Eigenschaft des Eingabefelds zugreifen. Wir können dies tun, indem wir das `event`-Objekt lesen, das `handleChange()` erhält, wenn es aufgerufen wird. `event` hat wiederum [eine `target`-Eigenschaft](/de/docs/Web/API/Event/target), die das Element darstellt, das das `change`-Event ausgelöst hat. Das ist unsere Eingabe. Also ist `event.target.value` der Text innerhalb der Eingabe.

Sie können diesen Wert mit `console.log()` in der Konsole Ihres Browsers sehen. Versuchen Sie, die `handleChange()`-Funktion wie folgt zu aktualisieren und in der Eingabe zu tippen, um das Ergebnis in Ihrer Konsole zu sehen:

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

### Zustand aktualisieren

Protokollieren alleine reicht nicht — wir wollen tatsächlich das speichern, was der Benutzer tippt, und es in der Eingabe anzeigen! Ändern Sie Ihren `console.log()`-Aufruf zu `setName()`, wie unten gezeigt:

```jsx
function handleChange(event) {
  setName(event.target.value);
}
```

Jetzt, wenn Sie in die Eingabe tippen, werden Ihre Tastenanschläge die Eingabe ausfüllen, wie Sie es erwarten würden.

Wir haben noch einen weiteren Schritt: Wir müssen unsere `handleSubmit()`-Funktion so ändern, dass sie `props.addTask` mit `name` als Argument aufruft. Erinnern Sie sich an unsere Callback-Prop? Diese wird dazu dienen, die Aufgabe an die `App`-Komponente zurückzusenden, damit wir sie zu einem späteren Zeitpunkt unserer Aufgabenliste hinzufügen können. Aus Gründen der guten Praxis sollten Sie die Eingabe nach Absenden Ihres Formulars leeren. Daher rufen wir `setName()` erneut mit einem leeren String auf, um dies zu tun:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask(name);
  setName("");
}
```

Endlich können Sie etwas in das Eingabefeld Ihres Browsers eingeben und _Add_ klicken — was auch immer Sie eingegeben haben, wird in einem Alert-Dialogfeld erscheinen.

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
> Ihnen wird auffallen, dass Sie leere Aufgaben nur durch Drücken des `Add`-Buttons oder durch Drücken der ENTER-Taste hinzufügen können, ohne einen Aufgabennamen einzugeben. Können Sie sich eine Möglichkeit überlegen, das zu verhindern? Als Hinweis: Sie müssen wahrscheinlich eine Art Überprüfung in die `handleSubmit()`-Funktion einfügen.

## Alles zusammenführen: Eine Aufgabe hinzufügen

Jetzt, wo wir mit Events, Callback-Props und Hooks geübt haben, sind wir bereit, eine Funktionalität zu schreiben, die es einem Benutzer ermöglicht, eine neue Aufgabe über den Browser hinzuzufügen.

### Aufgaben als Zustand

Wir müssen `useState` in `App.jsx` importieren, damit wir unsere Aufgaben im Zustand speichern können. Fügen Sie das folgende am Anfang Ihrer `App.jsx`-Datei hinzu:

```jsx
import { useState } from "react";
```

Wir möchten `props.tasks` in den `useState()`-Hook übergeben – das wird den Anfangszustand erhalten. Fügen Sie das folgende direkt oben in Ihrer `App()`-Funktionsdefinition hinzu:

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

Jetzt können wir unser `taskList`-Mapping so ändern, dass es das Ergebnis des Mappings von `tasks` ist, anstatt von `props.tasks`. Ihre `taskList`-Konstantendeklaration sollte nun so aussehen:

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

Wir haben jetzt einen `setTasks`-Hook, den wir in unserer `addTask()`-Funktion verwenden können, um unsere Aufgabenliste zu aktualisieren. Es gibt jedoch ein Problem: Wir können `name` nicht einfach als Argument von `addTask()` in `setTasks` übergeben, weil `tasks` ein Array von Objekten ist und `name` ein String ist. Wenn wir versuchen würden, dies zu tun, würde das Array durch den String ersetzt werden.

Zuerst müssen wir `name` in ein Objekt setzen, das dieselbe Struktur wie unsere bestehenden Aufgaben hat. Innerhalb der `addTask()`-Funktion erstellen wir ein `newTask`-Objekt, das dem Array hinzugefügt werden soll.

Dann müssen wir ein neues Array mit dieser neuen Aufgabe erstellen und dann den Zustand der Aufgaben-Daten auf diesen neuen Zustand aktualisieren. Dazu können wir Spread-Syntax verwenden, um [das bestehende Array zu kopieren](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copying_an_array) und unser Objekt am Ende hinzuzufügen. Wir übergeben dann dieses Array an `setTasks()`, um den Zustand zu aktualisieren.

Wenn wir alles zusammenfügen, sollte Ihre `addTask()`-Funktion so aussehen:

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

Jetzt können Sie den Browser verwenden, um eine Aufgabe zu unseren Daten hinzuzufügen! Geben Sie irgendetwas in das Formular ein und klicken Sie auf "Add" (oder drücken Sie die <kbd>Enter</kbd>-Taste), und Sie sehen Ihr neues ToDo-Element in der Benutzeroberfläche erscheinen!

**Allerdings haben wir ein weiteres Problem**: Unsere `addTask()`-Funktion gibt jeder Aufgabe dieselbe `id`. Das ist schlecht für die Barrierefreiheit und macht es unmöglich für React, zukünftige Aufgaben mit der `key`-Prop zu unterscheiden. Tatsächlich wird React Ihnen im DevTools-Konsole eine Warnung geben — "Warning: Encountered two children with the same key…"

Wir müssen das beheben. Eindeutige Kennungen zu erstellen ist ein schwieriges Problem – eines, für das die JavaScript-Community einige hilfreiche Bibliotheken entwickelt hat. Wir verwenden [nanoid](https://github.com/ai/nanoid), weil es klein ist und funktioniert.

Stellen Sie sicher, dass Sie sich im Hauptverzeichnis Ihrer Anwendung befinden, und führen Sie den folgenden Terminalbefehl aus:

```bash
npm install nanoid
```

> [!NOTE]
> Wenn Sie Yarn verwenden, benötigen Sie stattdessen Folgendes: `yarn add nanoid`.

Jetzt können wir `nanoid` verwenden, um eindeutige IDs für unsere neuen Aufgaben zu erstellen. Importieren Sie es zuerst, indem Sie die folgende Zeile am Anfang der `App.jsx` hinzufügen:

```jsx
import { nanoid } from "nanoid";
```

Jetzt aktualisieren wir `addTask()`, sodass jede Aufgaben-ID ein Präfix `todo-` plus eine eindeutige Zeichenfolge wird, die von nanoid generiert wird. Aktualisieren Sie Ihre `newTask`-Konstantendeklaration auf diesen Wert:

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

Speichern Sie alles und probieren Sie Ihre App erneut – jetzt können Sie Aufgaben hinzufügen, ohne dass diese Warnung über doppelte IDs erscheint.

## Abstecher: Aufgaben zählen

Jetzt, da wir neue Aufgaben hinzufügen können, ist Ihnen möglicherweise ein Problem aufgefallen: Unsere Überschrift liest "3 tasks remaining", unabhängig davon, wie viele Aufgaben wir haben! Wir können das beheben, indem wir die Länge von `taskList` zählen und den Text unserer Überschrift entsprechend ändern.

Fügen Sie dies in Ihrer `App()`-Definition vor der Rückgabe-Anweisung hinzu:

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

Dies ist fast richtig, außer dass, wenn unsere Liste jemals eine einzelne Aufgabe enthält, die Überschrift immer noch das Wort "tasks" verwendet. Wir können auch das zu einer Variablen machen. Aktualisieren Sie den Code, den Sie gerade hinzugefügt haben, wie folgt:

```jsx
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

Nun können Sie den Textinhalt der Listenüberschrift durch die Variable `headingText` ersetzen. Aktualisieren Sie Ihr `<h2>` wie folgt:

```jsx
<h2 id="list-heading">{headingText}</h2>
```

Speichern Sie die Datei, kehren Sie zu Ihrem Browser zurück und versuchen Sie, einige Aufgaben hinzuzufügen: Die Anzahl sollte jetzt wie erwartet aktualisiert werden.

## Eine Aufgabe abschließen

Es fällt Ihnen vielleicht auf, dass das Kontrollkästchen überprüft und deaktiviert wird, wenn Sie darauf klicken. Als Feature von HTML weiß der Browser, wie er sich merken kann, welche Kontrollkästchen aktiviert oder deaktiviert sind, ohne unsere Hilfe. Dieses Feature verbirgt jedoch ein Problem: Das Umschalten eines Kontrollkästchens ändert den Zustand in unserer React-Anwendung nicht. Das bedeutet, dass der Browser und unsere App jetzt nicht mehr synchron sind. Wir müssen unseren eigenen Code schreiben, um den Browser wieder mit unserer App zu synchronisieren.

### Den Fehler beweisen

Bevor wir das Problem beheben, lassen Sie uns beobachten, wie es passiert.

Wir beginnen, indem wir eine `toggleTaskCompleted()`-Funktion in unserer `App()`-Komponente schreiben. Diese Funktion wird einen `id`-Parameter haben, aber wir werden ihn vorerst nicht verwenden. Zunächst werden wir das erste Element im Array in die Konsole protokollieren – wir werden untersuchen, was passiert, wenn wir es im Browser überprüfen oder deaktivieren:

Fügen Sie dies direkt oberhalb Ihrer `taskList`-Konstantendeklaration hinzu:

```jsx
function toggleTaskCompleted(id) {
  console.log(tasks[0]);
}
```

Als nächstes fügen wir `toggleTaskCompleted` zu den Props jeder gerenderten `<Todo />`-Komponente in unserem `taskList`-Array hinzu; aktualisieren Sie es so:

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

Gehen Sie als nächstes zu Ihrer `Todo.jsx`-Komponente und fügen Sie Ihrem `<input />`-Element einen `onChange`-Handler hinzu, der eine anonyme Funktion nutzt, um `props.toggleTaskCompleted()` mit einem Parameter von `props.id` aufzurufen. Das `<input />` sollte jetzt so aussehen:

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

Speichern Sie alles und kehren Sie zu Ihrem Browser zurück, und beachten Sie, dass unser erstes Element, Eat, Überprüft wird. Öffnen Sie Ihre JavaScript-Konsole und klicken Sie dann auf das Kontrollkästchen neben Eat. Es wird deaktiviert, wie erwartet. Ihre JavaScript-Konsole wird jedoch etwas Ähnliches protokollieren:

```plain
Object { id: "task-0", name: "Eat", completed: true }
```

Das Kontrollkästchen deaktiviert sich im Browser, aber unsere Konsole sagt uns, dass Eat noch als abgeschlossen markiert ist. Das werden wir als Nächstes beheben!

### Den Browser mit unseren Daten synchronisieren

Werfen wir einen Blick auf unsere `toggleTaskCompleted()`-Funktion in `App.jsx`. Wir möchten, dass sie die `completed`-Eigenschaft nur der Aufgabe ändert, die wir umgeschaltet haben, und alle anderen Aufgaben unverändert lässt. Dazu werden wir die Aufgabenliste `map()`pen und nur diejenige, die wir vervollständigt haben, ändern.

Aktualisieren Sie Ihre `toggleTaskCompleted()`-Funktion auf das folgende:

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

Hier definieren wir eine `updatedTasks`-Konstante, die das ursprüngliche `tasks`-Array abbildet. Wenn die `id`-Eigenschaft der Aufgabe der übergebenen `id` entspricht, verwenden wir [Object-Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um ein neues Objekt zu erstellen und die `completed`-Eigenschaft dieses Objekts umzuschalten, bevor wir es zurückgeben. Wenn es nicht übereinstimmt, geben wir das ursprüngliche Objekt zurück.

Dann rufen wir `setTasks()` mit diesem neuen Array auf, um unseren Zustand zu aktualisieren.

## Eine Aufgabe löschen

Das Löschen einer Aufgabe wird einem ähnlichen Muster folgen wie das Umschalten des abgeschlossenen Zustands: Wir müssen eine Funktion definieren, um unseren Zustand zu aktualisieren, dann diese Funktion in `<Todo />` als Prop übergeben und sie aufrufen, wenn das richtige Ereignis eintritt.

### Die `deleteTask`-Callback-Prop

Hier beginnen wir, indem wir eine `deleteTask()`-Funktion in Ihrer `App`-Komponente schreiben. Wie `toggleTaskCompleted()` wird diese Funktion einen `id`-Parameter akzeptieren, und wir werden damit beginnen, diesen `id` in die Konsole zu protokollieren. Fügen Sie das folgende unterhalb von `toggleTaskCompleted()` hinzu:

```jsx
function deleteTask(id) {
  console.log(id);
}
```

Fügen Sie als Nächstes eine weitere Callback-Prop zu unserem Array der `<Todo />`-Komponenten hinzu:

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

In `Todo.jsx` möchten wir `props.deleteTask()` aufrufen, wenn die "Delete"-Schaltfläche gedrückt wird. `deleteTask()` muss die ID der aufrufenden Aufgabe kennen, damit es die richtige Aufgabe aus dem Zustand löschen kann.

Aktualisieren Sie die "Delete"-Schaltfläche in `Todo.jsx` wie folgt:

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

Jetzt, wenn Sie auf eine der "Delete"-Schaltflächen in der App klicken, sollte die ID der zugehörigen Aufgabe in der Browserkonsole protokolliert werden.

Zu diesem Zeitpunkt sollte Ihre `Todo.jsx`-Datei so aussehen:

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

Jetzt, da wir wissen, dass `deleteTask()` korrekt aufgerufen wird, können wir unseren `setTasks()`-Hook in `deleteTask()` aufrufen, um die Aufgabe tatsächlich aus dem Zustand der App sowie visuell in der Benutzeroberfläche der App zu löschen. Da `setTasks()` ein Array als Argument erwartet, sollten wir ihm ein neues Array geben, das die bestehenden Aufgaben kopiert und _die Aufgabe ausschließt_, deren ID dem übergebenen `id`-Argument in `deleteTask()` entspricht.

Dies ist eine perfekte Gelegenheit, [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) zu verwenden. Wir können jede Aufgabe testen und eine Aufgabe aus dem neuen Array ausschließen, wenn ihre `id`-Eigenschaft dem `id`-Argument entspricht, das an `deleteTask()` übergeben wurde.

Aktualisieren Sie die `deleteTask()`-Funktion in Ihrer `App.jsx`-Datei wie folgt:

```jsx
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}
```

Probieren Sie Ihre App erneut aus. Jetzt sollten Sie in der Lage sein, eine Aufgabe aus Ihrer App zu löschen!

Zu diesem Zeitpunkt sollte Ihre `App.jsx`-Datei so aussehen:

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

Das ist genug für einen Artikel. Hier haben wir Ihnen den Überblick darüber gegeben, wie React mit Events umgeht und Zustände verwaltet, und Funktionalitäten implementiert, um Aufgaben hinzuzufügen, Aufgaben zu löschen und Aufgaben als erledigt zu markieren. Wir sind fast soweit. Im nächsten Artikel werden wir die Funktionalität implementieren, um bestehende Aufgaben zu bearbeiten und die Liste der Aufgaben zwischen allen, erledigten und nicht erledigten Aufgaben zu filtern. Wir werden auf dem Weg bedingte UI-Renderings betrachten.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}
