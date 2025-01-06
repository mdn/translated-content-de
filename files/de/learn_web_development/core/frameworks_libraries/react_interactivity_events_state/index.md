---
title: "React Interaktivität: Events und State"
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}

Mit unserem Komponentenplan, der ausgearbeitet wurde, ist es nun an der Zeit, unsere App von einer völlig statischen Benutzeroberfläche zu einer zu aktualisieren, die tatsächlich Interaktion und Änderungen ermöglicht. In diesem Artikel werden wir dies tun, indem wir uns mit Events und States befassen und mit einer App enden, in der wir erfolgreich Aufgaben hinzufügen und löschen und Aufgaben als abgeschlossen markieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> und dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Befehlszeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Events und State in React handhaben und diese verwenden, um die Fallstudien-App interaktiv zu gestalten.
      </td>
    </tr>
  </tbody>
</table>

## Events handhaben

Wenn Sie bisher nur in reinem JavaScript gearbeitet haben, sind Sie möglicherweise daran gewöhnt, eine separate JavaScript-Datei zu haben, in der Sie einige DOM-Knoten abfragen und Event-Listener an diese anhängen. Zum Beispiel könnte eine HTML-Datei einen Button enthalten, der so aussieht:

```html
<button type="button">Say hi!</button>
```

Und eine JavaScript-Datei könnte Code wie diesen enthalten:

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

In diesem Beispiel fügen wir dem `<button>`-Element ein `onClick`-Attribut hinzu. Der Wert dieses Attributs ist eine Funktion, die einen Alert auslöst. Dies mag im Widerspruch zu Best Practices stehen, die besagen, dass Event-Listener nicht in HTML geschrieben werden sollen, aber denken Sie daran: JSX ist nicht HTML.

Das `onClick`-Attribut hat hier eine besondere Bedeutung: Es sagt React, dass eine bestimmte Funktion ausgeführt werden soll, wenn der Benutzer auf den Button klickt. Es gibt ein paar weitere Dinge zu beachten:

- Die [CamelCase]-Natur von `onClick` ist wichtig — JSX erkennt `onclick` nicht (es wird bereits in JavaScript für einen bestimmten Zweck verwendet, der verwandt, aber anders ist – standardmäßige [`onclick`](/de/docs/Web/API/Element/click_event)-Handler-Eigenschaften).
- Alle Browser-Events folgen diesem Format in JSX – `on`, gefolgt vom Namen des Events.

Wenden wir dies nun in unserer App an, beginnend in der `Form.jsx`-Komponente.

### Formulardatenübermittlung handhaben

Erstellen Sie am Anfang der `Form()`-Komponentenfunktion (d. h. direkt unter der Zeile `function Form() {`) eine Funktion mit dem Namen `handleSubmit()`. Diese Funktion sollte [das Standardverhalten des `submit`-Events verhindern](/de/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behavior). Danach sollte sie eine `alert()` auslösen, die sagen kann, was Sie möchten. Sie sollte am Ende so aussehen:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  alert("Hello, world!");
}
```

Um diese Funktion zu verwenden, fügen Sie dem `<form>`-Element ein `onSubmit`-Attribut hinzu und setzen Sie den Wert auf die `handleSubmit`-Funktion:

```jsx
<form onSubmit={handleSubmit}>
```

Wenn Sie jetzt zu Ihrem Browser gehen und auf die Schaltfläche "Hinzufügen" klicken, wird Ihr Browser ein Alert-Dialog mit den Worten "Hello, world!" — oder was immer Sie dort schreiben — anzeigen.

## Callback-Props

In React-Anwendungen ist Interaktivität selten auf eine Komponente beschränkt: Events, die in einer Komponente auftreten, wirken sich auf andere Teile der App aus. Wenn wir beginnen, uns selbst die Möglichkeit zu geben, neue Aufgaben zu erstellen, beeinflussen die Dinge, die in der `<Form />`-Komponente passieren, die in `<App />` gerenderte Liste.

Wir möchten, dass unsere `handleSubmit()`-Funktion uns letztendlich hilft, eine neue Aufgabe zu erstellen. Daher benötigen wir eine Möglichkeit, Informationen von `<Form />` zu `<App />` zu übermitteln. Wir können Daten nicht auf die gleiche Weise von Kind zu Elternteil übergeben wie von Elternteil zu Kind mit Standard-Props. Stattdessen können wir eine Funktion in `<App />` schreiben, die einige Daten von unserem Formular als Eingabe erwartet, und dann diese Funktion als Prop in `<Form />` übergeben. Diese Funktion-als-Prop wird **Callback-Prop** genannt. Sobald wir unsere Callback-Prop haben, können wir sie innerhalb von `<Form />` aufrufen, um die richtigen Daten an `<App />` zu senden.

### Formulardatenübermittlung über Callbacks handhaben

Erstellen Sie innerhalb der `App()`-Funktion in `App.jsx` eine Funktion mit dem Namen `addTask()`, die einen einzigen Parameter namens `name` hat:

```jsx
function addTask(name) {
  alert(name);
}
```

Als nächstes übergeben Sie `addTask()` als Prop in `<Form />`. Die Prop kann jeden beliebigen Namen haben, den Sie verstehen, aber wählen Sie einen, den Sie später verstehen werden. Etwas wie `addTask` funktioniert gut, da es sowohl den Namen der Funktion als auch das beschreibt, was die Funktion tun wird. Ihr `<Form />`-Komponentenaufruf sollte wie folgt aktualisiert werden:

```jsx
<Form addTask={addTask} />
```

Um diese Prop zu verwenden, müssen wir die Signatur der `Form()`-Funktion in `Form.jsx` ändern, sodass sie `props` als Parameter akzeptiert:

```jsx
function Form(props) {
  // ...
}
```

Schließlich können wir diese Prop innerhalb der `handleSubmit()`-Funktion in Ihrer `<Form />`-Komponente verwenden! Aktualisieren Sie sie wie folgt:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask("Say hello!");
}
```

Wenn Sie auf die Schaltfläche "Hinzufügen" in Ihrem Browser klicken, wird bewiesen, dass die `addTask()`-Callback-Funktion funktioniert, aber es wäre schön, wenn wir den Alert sehen könnten, um zu zeigen, was wir in unser Eingabefeld eingeben! Das werden wir als Nächstes tun.

### Nebenbei: Ein Hinweis zu Namenskonventionen

Wir haben die `addTask()`-Funktion in die `<Form />`-Komponente als Prop `addTask` übergeben, sodass die Beziehung zwischen der `addTask()`-_Funktion_ und der `addTask`-_Prop_ so klar wie möglich bleibt. Denken Sie jedoch daran, dass Prop-Namen _nicht_ unbedingt etwas Bestimmtes sein müssen. Wir hätten `addTask()` unter jedem anderen Namen in `<Form />` übergeben können, zum Beispiel so:

```diff
- <Form addTask={addTask} />
+ <Form onSubmit={addTask} />
```

Dies würde die `addTask()`-Funktion für die `<Form />`-Komponente als Prop `onSubmit` verfügbar machen. Diese Prop könnte in `Form.jsx` so verwendet werden:

```diff
function handleSubmit(event) {
  event.preventDefault();
- props.addTask("Say hello!");
+ props.onSubmit("Say hello!");
}
```

Hier gibt uns das `on`-Präfix den Hinweis, dass die Prop eine Callback-Funktion ist; `Submit` ist unser Hinweis darauf, dass ein Submit-Event diese Funktion auslöst.

Während Callback-Props oft den Namen vertrauter Event-Handler wie `onSubmit` oder `onClick` haben, können sie fast alles benannt werden, was ihre Bedeutung klar macht. Eine hypothetische `<Menu />`-Komponente könnte eine Callback-Funktion enthalten, die ausgeführt wird, wenn das Menü geöffnet wird, sowie eine separate Callback-Funktion, die ausgeführt wird, wenn es geschlossen wird:

```jsx
<Menu onOpen={() => console.log("Hi!")} onClose={() => console.log("Bye!")} />
```

Diese `on*`-Benennungskonvention ist im React-Ökosystem sehr verbreitet. Behalten Sie sie im Hinterkopf, während Sie weiterlernen. Zur Klarheit verwenden wir für den Rest dieses Tutorials `addTask` und ähnliche Prop-Namen. Wenn Sie während des Lesens dieses Abschnitts Prop-Namen geändert haben, stellen Sie sicher, dass Sie sie vor dem Fortfahren zurückändern!

## Daten mit State speichern und ändern

Bisher haben wir Props verwendet, um Daten durch unsere Komponenten zu übermitteln, und dies hat uns gut gedient. Da wir uns jedoch mit Interaktivität befassen, benötigen wir die Möglichkeit, neue Daten zu erstellen, zu speichern und später zu aktualisieren. Props sind nicht das richtige Werkzeug für diese Aufgabe, da sie unveränderlich sind — eine Komponente kann ihre eigenen Props nicht ändern oder erstellen.

Hier kommt der **State** ins Spiel. Wenn wir Props als Kommunikationsmittel zwischen Komponenten betrachten, können wir State als Möglichkeit betrachten, den Komponenten "Gedächtnis" zu geben – Informationen, die sie speichern und bei Bedarf aktualisieren können.

React bietet eine spezielle Funktion zur Einführung von State in eine Komponente, die treffend `useState()` genannt wird.

> **Hinweis:** `useState()` gehört zu einer speziellen Kategorie von Funktionen, die als **Hooks** genannt werden, von denen jede dazu verwendet werden kann, einer Komponente neue Funktionalität hinzuzufügen. Wir lernen später über andere Hooks.

Um `useState()` zu verwenden, müssen wir es aus dem React-Modul importieren. Fügen Sie die folgende Zeile oben in Ihrer `Form.jsx`-Datei ein, über der `Form()`-Funktionsdefinition:

```jsx
import { useState } from "react";
```

`useState()` nimmt ein einzelnes Argument, das den Anfangswert des State bestimmt. Dieses Argument kann ein String, eine Zahl, ein Array, ein Objekt oder ein beliebiger anderer JavaScript-Datentyp sein. `useState()` gibt ein Array zurück, das zwei Elemente enthält. Das erste Element ist der aktuelle Wert des State; das zweite Element ist eine Funktion, die verwendet werden kann, um den State zu aktualisieren.

Erstellen wir einen `name`-State. Schreiben Sie Folgendes über Ihre `handleSubmit()`-Funktion, innerhalb von `Form()`:

```jsx
const [name, setName] = useState("Learn React");
```

Es passiert einiges in dieser Zeile Code:

- Wir definieren eine `name`-Konstante mit dem Wert `"Learn React"`.
- Wir definieren eine Funktion, deren Aufgabe es ist, `name` zu ändern, die `setName()` genannt wird.
- `useState()` gibt diese beiden Dinge in einem Array zurück, sodass wir [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) verwenden, um sie beide in separaten Variablen zu erfassen.

### State lesen

Sie können den `name`-State sofort in Aktion sehen. Fügen Sie ein `value`-Attribut zum Formulareingabeelement hinzu und setzen Sie dessen Wert auf `name`. Ihr Browser wird "Learn React" im Eingabefeld anzeigen.

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

Ändern Sie "Learn React" in einen leeren String, wenn Sie fertig sind; dies ist das, was wir für unseren Anfangszustand wollen:

```jsx
const [name, setName] = useState("");
```

### Benutzereingaben lesen

Bevor wir den Wert von `name` ändern können, müssen wir die Eingabe eines Benutzers erfassen, während er schreibt. Dafür können wir das `onChange`-Event abhören. Schreiben wir eine `handleChange()`-Funktion und hören wir auf sie im `<input />`-Element.

```jsx
// near the top of the `Form` component
function handleChange() {
  console.log("Typing!");
}

...

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

Derzeit ändert sich der Wert unserer Eingabe nicht, wenn Sie versuchen, Text einzugeben, aber Ihr Browser wird das Wort "Typing!" in der JavaScript-Konsole protokollieren, also wissen wir, dass unser Event-Listener an die Eingabe angehängt ist.

Um die Anschläge des Benutzers zu lesen, müssen wir auf die `value`-Eigenschaft der Eingabe zugreifen. Wir können dies tun, indem wir das `event`-Objekt lesen, das `handleChange()` erhält, wenn es aufgerufen wird. `event` wiederum hat [eine `target`-Eigenschaft](/de/docs/Web/API/Event/target), die das Element darstellt, das das `change`-Event ausgelöst hat. Das ist unsere Eingabe. Also ist `event.target.value` der Text innerhalb der Eingabe.

Sie können diesen Wert `console.log()` verwenden, um ihn in der Konsole Ihres Browsers zu sehen. Versuchen Sie, die `handleChange()`-Funktion wie folgt zu aktualisieren, und geben Sie in das Eingabefeld ein, um das Ergebnis in Ihrer Konsole zu sehen:

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

### State aktualisieren

Protokollieren allein reicht nicht aus — wir möchten eigentlich speichern, was der Benutzer eingibt und es im Eingabefeld anzeigen! Ändern Sie Ihren `console.log()`-Aufruf zu `setName()`, wie unten gezeigt:

```jsx
function handleChange(event) {
  setName(event.target.value);
}
```

Wenn Sie jetzt in das Eingabefeld eingeben, werden Ihre Tastenanschläge das Eingabefeld ausfüllen, wie Sie es erwarten würden.

Wir haben noch einen Schritt: Wir müssen unsere `handleSubmit()`-Funktion ändern, sodass sie `props.addTask` mit `name` als Argument aufruft. Erinnern Sie sich an unsere Callback-Prop? Diese wird dazu dienen, die Aufgabe an die `App`-Komponente zurückzusenden, damit wir sie zu einem späteren Zeitpunkt unserer Liste von Aufgaben hinzufügen können. Aus Gründen der guten Praxis sollten Sie die Eingabe löschen, nachdem Ihr Formular übermittelt wurde. Wir werden `setName()` erneut mit einem leeren String aufrufen, um dies zu tun:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask(name);
  setName("");
}
```

Endlich können Sie etwas in das Eingabefeld in Ihrem Browser eingeben und _Add_ klicken — was immer Sie eingegeben haben, erscheint in einem Alert-Dialog.

Ihre `Form.jsx`-Datei sollte jetzt so aussehen:

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
> Ihnen wird auffallen, dass Sie leere Aufgaben übermitteln können, indem Sie einfach die `Add`-Schaltfläche drücken, ohne einen Aufgabennamen einzugeben. Können Sie sich eine Möglichkeit vorstellen, dies zu verhindern? Als Hinweis: Sie müssen wahrscheinlich eine Art Überprüfung in die `handleSubmit()`-Funktion einfügen.

## Alles zusammenfügen: Eine Aufgabe hinzufügen

Da wir jetzt mit Events, Callback-Props und Hooks gearbeitet haben, sind wir bereit, Funktionalität zu schreiben, die es einem Benutzer ermöglicht, von seinem Browser aus eine neue Aufgabe hinzuzufügen.

### Aufgaben als State

Wir müssen `useState` in `App.jsx` importieren, damit wir unsere Aufgaben im State speichern können. Fügen Sie das Folgende am Anfang Ihrer `App.jsx`-Datei hinzu:

```jsx
import { useState } from "react";
```

Wir möchten `props.tasks` in den `useState()`-Hook übergeben – dies bewahrt dessen Anfangszustand. Fügen Sie das Folgende direkt am Anfang Ihrer `App()`-Funktionsdefinition hinzu:

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

Jetzt können wir unser `taskList`-Mapping so ändern, dass es das Ergebnis des Mappings von `tasks` ist, anstelle von `props.tasks`. Ihre `taskList`-Konstantendeklaration sollte jetzt wie folgt aussehen:

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

Wir haben jetzt einen `setTasks`-Hook, den wir in unserer `addTask()`-Funktion verwenden können, um unsere Liste von Aufgaben zu aktualisieren. Es gibt jedoch ein Problem: Wir können das `name`-Argument von `addTask()` nicht einfach in `setTasks` einfügen, da `tasks` ein Array von Objekten und `name` ein String ist. Wenn wir versuchen, dies zu tun, würde das Array durch den String ersetzt.

Zuerst müssen wir `name` in ein Objekt einfügen, das die gleiche Struktur wie unsere vorhandenen Aufgaben hat. Innerhalb der `addTask()`-Funktion erstellen wir ein `newTask`-Objekt, das dem Array hinzugefügt werden soll.

Wir müssen dann ein neues Array erstellen, in dem diese neue Aufgabe hinzugefügt wurde, und dann den Zustand der Aufgabendaten auf diesen neuen Zustand aktualisieren. Um dies zu tun, können wir Spread-Syntax verwenden, um [das vorhandene Array zu kopieren](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copying_an_array) und unser Objekt am Ende hinzuzufügen. Dann übergeben wir dieses Array in `setTasks()`, um den Zustand zu aktualisieren.

Alles zusammengefügt, sollte Ihre `addTask()`-Funktion wie folgt aussehen:

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

Jetzt können Sie den Browser verwenden, um eine Aufgabe zu unseren Daten hinzuzufügen! Geben Sie irgendetwas in das Formular ein und klicken Sie auf "Add" (oder drücken Sie die <kbd>Enter</kbd>-Taste), und Sie werden Ihr neues To-Do-Element in der Benutzeroberfläche sehen!

**Allerdings haben wir ein weiteres Problem**: Unsere `addTask()`-Funktion gibt jeder Aufgabe die gleiche `id`. Dies ist schlecht für die Zugänglichkeit und macht es für React unmöglich, zukünftige Aufgaben mit der `key`-Prop auseinanderzuhalten. Tatsächlich wird React Ihnen eine Warnung in Ihrer DevTools-Konsole geben — "Warning: Encountered two children with the same key…"

Wir müssen dies beheben. Eindeutige Kennungen zu erzeugen ist ein schwieriges Problem – eines, für das die JavaScript-Community einige hilfreiche Bibliotheken geschrieben hat. Wir werden [nanoid](https://github.com/ai/nanoid) verwenden, weil es winzig ist und funktioniert.

Stellen Sie sicher, dass Sie sich im Stammverzeichnis Ihrer Anwendung befinden und führen Sie den folgenden Terminalbefehl aus:

```bash
npm install nanoid
```

> [!NOTE]
> Wenn Sie `yarn` verwenden, benötigen Sie stattdessen: `yarn add nanoid`.

Jetzt können wir `nanoid` verwenden, um eindeutige IDs für unsere neuen Aufgaben zu erstellen. Importieren Sie es zuerst, indem Sie die folgende Zeile oben in `App.jsx` einfügen:

```jsx
import { nanoid } from "nanoid";
```

Nun aktualisieren Sie `addTask()`, sodass jede Aufgaben-ID zu einem Präfix `todo-` plus einem eindeutigen String wird, der von `nanoid` generiert wird. Aktualisieren Sie Ihre `newTask`-Konstantendeklaration auf Folgendes:

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

Speichern Sie alles und versuchen Sie Ihre App erneut — jetzt können Sie Aufgaben ohne die Warnung über doppelte IDs hinzufügen.

## Abstecher: Aufgaben zählen

Da wir jetzt neue Aufgaben hinzufügen können, fällt Ihnen vielleicht ein Problem auf: Unsere Überschrift zeigt immer "3 tasks remaining" an, unabhängig davon, wie viele Aufgaben wir haben! Wir können dies beheben, indem wir die Länge von `taskList` zählen und den Text unserer Überschrift entsprechend ändern.

Fügen Sie dies innerhalb Ihrer `App()`-Definition hinzu, bevor die Return-Anweisung erfolgt:

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

Dies ist fast richtig, außer dass, wenn unsere Liste jemals eine einzelne Aufgabe enthält, die Überschrift immer noch das Wort "tasks" verwendet. Wir können auch das zu einer Variablen machen. Aktualisieren Sie den Code, den Sie gerade hinzugefügt haben, wie folgt:

```jsx
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

Jetzt können Sie den Textinhalt der Listen-Überschrift mit der `headingText`-Variablen ersetzen. Aktualisieren Sie Ihr `<h2>` wie folgt:

```jsx
<h2 id="list-heading">{headingText}</h2>
```

Speichern Sie die Datei, gehen Sie zurück zu Ihrem Browser, und versuchen Sie, einige Aufgaben hinzuzufügen: Die Zählung sollte jetzt wie erwartet aktualisiert werden.

## Eine Aufgabe abschließen

Sie werden vielleicht bemerken, dass, wenn Sie auf ein Kontrollkästchen klicken, es sich entsprechend ein- und ausschaltet. Als Funktion von HTML weiß der Browser, wie man standardmäßig merkt, welche Kontrollkästcheneingaben aktiviert oder deaktiviert sind. Diese Funktion verbirgt jedoch ein Problem: Das Umschalten eines Kontrollkästchens ändert nicht den Zustand in unserer React-Anwendung. Dies bedeutet, dass der Browser und unsere App jetzt nicht synchron sind. Wir müssen unseren eigenen Code schreiben, um den Browser wieder mit unserer App zu synchronisieren.

### Den Fehler beweisen

Bevor wir das Problem beheben, lassen Sie uns beobachten, wie es auftritt.

Zuerst werden wir eine `toggleTaskCompleted()`-Funktion in unserem `App()`-Komponente schreiben. Diese Funktion hat einen `id`-Parameter, aber wir werden ihn vorerst noch nicht verwenden. Vorerst protokollieren wir die erste Aufgabe im Array in die Konsole — wir werden beobachten, was passiert, wenn wir sie in unserem Browser aktivieren oder deaktivieren:

Fügen Sie dies direkt über Ihrer `taskList`-Konstantendeklaration hinzu:

```jsx
function toggleTaskCompleted(id) {
  console.log(tasks[0]);
}
```

Als nächstes fügen wir `toggleTaskCompleted` zu den Props jeder `<Todo />`-Komponente hinzu, die innerhalb unserer `taskList` gerendert wird; aktualisieren Sie es wie folgt:

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

Gehen Sie anschließend zu Ihrer `Todo.jsx`-Komponente und fügen Sie Ihrem `<input />`-Element einen `onChange`-Handler hinzu, der eine anonyme Funktion verwendet, um `props.toggleTaskCompleted()` mit einem Parameter von `props.id` aufzurufen. Das `<input />` sollte jetzt so aussehen:

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

Speichern Sie alles und kehren Sie zu Ihrem Browser zurück und beachten Sie, dass unsere erste Aufgabe, Eat, aktiviert ist. Öffnen Sie Ihre JavaScript-Konsole, und klicken Sie dann auf das Kontrollkästchen neben Eat. Es deaktiviert sich, wie wir es erwarten. Ihre JavaScript-Konsole wird jedoch etwas wie dies protokollieren:

```plain
Object { id: "task-0", name: "Eat", completed: true }
```

Das Kontrollkästchen deaktiviert sich im Browser, aber unsere Konsole sagt uns, dass Eat immer noch abgeschlossen ist. Das werden wir als Nächstes beheben!

### Den Browser mit unseren Daten synchronisieren

Lassen Sie uns unsere `toggleTaskCompleted()`-Funktion in `App.jsx` überdenken. Wir möchten, dass sie die `completed`-Eigenschaft nur der Aufgabe ändert, die umgeschaltet wurde, und alle anderen unverändert lässt. Um dies zu tun, `map()`-en wir über die Aufgabenliste und ändern nur die, die wir abgeschlossen haben.

Aktualisieren Sie Ihre `toggleTaskCompleted()`-Funktion auf Folgendes:

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

Hier definieren wir eine `updatedTasks`-Konstante, die über das ursprüngliche `tasks`-Array mappt. Wenn die `id`-Eigenschaft der Aufgabe mit der `id` übereinstimmt, die der Funktion übergeben wurde, verwenden wir [Object-Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um ein neues Objekt zu erstellen und die `completed`-Eigenschaft dieses Objekts zu kippen, bevor wir es zurückgeben. Wenn es nicht übereinstimmt, geben wir das ursprüngliche Objekt zurück.

Dann rufen wir `setTasks()` mit diesem neuen Array auf, um unseren Zustand zu aktualisieren.

## Eine Aufgabe löschen

Das Löschen einer Aufgabe folgt einem ähnlichen Muster wie das Umschalten ihres abgeschlossenen Zustands: Wir müssen eine Funktion definieren, die unseren Zustand aktualisiert, dann diese Funktion als Prop in `<Todo />` übergeben und sie aufrufen, wenn das richtige Ereignis eintritt.

### Die Callback-Prop `deleteTask`

Hier beginnen wir damit, eine `deleteTask()`-Funktion in Ihrer `App`-Komponente zu schreiben. Ähnlich wie `toggleTaskCompleted()` hat diese Funktion einen `id`-Parameter, und wir protokollieren diesen `id` zunächst in der Konsole. Fügen Sie die folgende Zeile unterhalb von `toggleTaskCompleted()` hinzu:

```jsx
function deleteTask(id) {
  console.log(id);
}
```

Fügen Sie als nächstes eine weitere Callback-Prop zu unserem Array von `<Todo />`-Komponenten hinzu:

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

In `Todo.jsx` möchten wir `props.deleteTask()` aufrufen, wenn der "Delete"-Button gedrückt wird. `deleteTask()` muss die ID der Aufgabe wissen, die sie aufgerufen hat, damit sie die richtige Aufgabe aus dem Zustand löschen kann.

Aktualisieren Sie die "Delete"-Schaltfläche in `Todo.jsx`, wie folgt:

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

Wenn Sie jetzt auf einen der "Delete"-Buttons in der App klicken, sollte die ID der zugehörigen Aufgabe in der Browserkonsole protokolliert werden.

Zum jetzigen Zeitpunkt sollte Ihre `Todo.jsx`-Datei so aussehen:

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

## Aufgaben vom State und der UI löschen

Da wir nun wissen, dass `deleteTask()` korrekt aufgerufen wird, können wir unseren `setTasks()`-Hook in `deleteTask()` aufrufen, um diese Aufgabe tatsächlich aus dem Zustand der App zu löschen, ebenso wie visuell in der App-Benutzeroberfläche. Da `setTasks()` ein Array als Argument erwartet, sollten wir ihm ein neues Array zur Verfügung stellen, das die vorhandenen Aufgaben kopiert, _ohne_ die Aufgabe, deren ID mit der ID übereinstimmt, die an `deleteTask()` übergeben wurde.

Dies ist eine perfekte Gelegenheit, [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) zu verwenden. Wir können jede Aufgabe prüfen und eine Aufgabe aus dem neuen Array ausschließen, wenn ihre `id`-Prop mit dem `id`-Argument übereinstimmt, das an `deleteTask()` übergeben wurde.

Aktualisieren Sie die `deleteTask()`-Funktion in Ihrer `App.jsx`-Datei wie folgt:

```jsx
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}
```

Versuchen Sie, Ihre App erneut auszuprobieren. Jetzt sollten Sie in der Lage sein, eine Aufgabe aus Ihrer App zu löschen!

Zum jetzigen Zeitpunkt sollte Ihre `App.jsx`-Datei so aussehen:

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

Das reicht für einen Artikel. Hier haben wir Ihnen einen umfassenden Überblick darüber gegeben, wie React mit Events umgeht und State handhabt sowie Funktionalität implementiert, um Aufgaben hinzuzufügen, zu löschen und als abgeschlossen zu markieren. Wir sind fast am Ziel. Im nächsten Artikel werden wir Funktionalitäten implementieren, um bestehende Aufgaben zu bearbeiten, und die Liste der Aufgaben zwischen allen, abgeschlossenen und unvollständigen Aufgaben zu filtern. Dabei werden wir uns die bedingte UI-Darstellung ansehen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}
