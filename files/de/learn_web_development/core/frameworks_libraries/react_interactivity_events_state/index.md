---
title: "Interaktivität in React: Ereignisse und Status"
short-title: React-Ereignisse und Status
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}

Nachdem wir unseren Komponentenplan ausgearbeitet haben, ist es nun an der Zeit, unsere App von einer vollständig statischen Benutzeroberfläche zu einer zu aktualisieren, die uns tatsächlich erlaubt, zu interagieren und Dinge zu ändern. In diesem Artikel werden wir dies tun, indem wir uns mit Ereignissen und Status beschäftigen und letztendlich mit einer App enden, in der wir erfolgreich Aufgaben hinzufügen und löschen sowie Aufgaben als erledigt umschalten können.

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
        Umgang mit Ereignissen und Status in React und deren Verwendung, um die Fallstudien-App interaktiv zu gestalten.
      </td>
    </tr>
  </tbody>
</table>

## Umgang mit Ereignissen

Wenn Sie bisher nur Vanilla-JavaScript geschrieben haben, sind Sie möglicherweise gewohnt, eine separate JavaScript-Datei zu haben, in der Sie nach einigen DOM-Knoten suchen und Ereignislistener daran anfügen. Beispielsweise könnte eine HTML-Datei einen Button enthalten, wie dieser hier:

```html
<button type="button">Say hi!</button>
```

Und eine JavaScript-Datei könnte einen Code wie diesen enthalten:

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("hi!");
});
```

In JSX lebt der Code, der die Benutzeroberfläche beschreibt, direkt neben unseren Ereignis-Handlern:

```jsx
<button type="button" onClick={() => alert("hi!")}>
  Say hi!
</button>
```

In diesem Beispiel fügen wir dem `<button>` Element ein `onClick`-Attribut hinzu. Der Wert dieses Attributs ist eine Funktion, die einen Alarm auslöst. Dies mag gegen den Rat der besten Praktiken erscheinen, keine Ereignis-Listener in HTML zu schreiben, aber denken Sie daran: JSX ist kein HTML.

Das `onClick`-Attribut hat hier eine besondere Bedeutung: Es teilt React mit, eine bestimmte Funktion auszuführen, wenn der Benutzer auf den Button klickt. Es gibt einige andere Dinge zu beachten:

- Die {{Glossary("camel_case", "camelCase")}}-Natur von `onClick` ist wichtig — JSX erkennt `onclick` nicht (es wird bereits in JavaScript für einen spezifischen Zweck verwendet, der verwandt, aber anders ist — standardmäßige [`onclick`](/de/docs/Web/API/Element/click_event)-Handler-Eigenschaften).
- Alle Browser-Ereignisse folgen diesem Format in JSX – `on` gefolgt vom Namen des Ereignisses.

Wenden wir dies auf unsere App an, beginnend im `Form.jsx`-Komponente.

### Umgang mit dem Absenden von Formularen

Erstellen Sie am Anfang der `Form()`-Komponentenfunktion (d.h. direkt unter der Zeile `function Form() {`) eine Funktion mit dem Namen `handleSubmit()`. Diese Funktion sollte [das Standardverhalten des `submit`-Ereignisses verhindern](/de/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behavior). Danach sollte sie einen `alert()` auslösen, der sagen kann, was Sie möchten. Es sollte folgendermaßen aussehen:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  alert("Hello, world!");
}
```

Um diese Funktion zu verwenden, fügen Sie dem [`<form>`](/de/docs/Web/HTML/Element/form)-Element ein `onSubmit`-Attribut hinzu und setzen Sie seinen Wert auf die `handleSubmit`-Funktion:

```jsx
<form onSubmit={handleSubmit}>
```

Wenn Sie jetzt in Ihren Browser zurückkehren und auf die Schaltfläche "Hinzufügen" klicken, zeigt Ihr Browser ein Dialogfeld mit der Nachricht "Hello, world!" an – oder was auch immer Sie dort geschrieben haben.

## Callback-Eigenschaften

In React-Anwendungen ist Interaktivität selten auf nur eine Komponente beschränkt: Ereignisse, die in einer Komponente passieren, beeinflussen andere Teile der App. Wenn wir beginnen, uns selbst die Möglichkeit zu geben, neue Aufgaben zu erstellen, werden Ereignisse, die in der `<Form />`-Komponente passieren, die Liste beeinflussen, die in `<App />` gerendert wird.

Wir möchten, dass unsere `handleSubmit()`-Funktion letztendlich hilft, eine neue Aufgabe zu erstellen, also benötigen wir eine Möglichkeit, Informationen von `<Form />` zu `<App />` zu übermitteln. Wir können Daten nicht von Kind- zu Eltern-Komponente auf die gleiche Weise übermitteln, wie wir Daten von Eltern- zu Kind-Komponente mit standardmäßigen Eigenschaften übermitteln. Stattdessen können wir eine Funktion in `<App />` schreiben, die einige Daten aus unserem Formular als Eingabe erwartet, und diese Funktion dann an `<Form />` als Eigenschaft übergeben. Diese Funktion-als-Eigenschaft wird als **Callback-Eigenschaft** bezeichnet. Sobald wir unsere Callback-Eigenschaft haben, können wir sie innerhalb von `<Form />` aufrufen, um die richtigen Daten an `<App />` zu senden.

### Umgang mit dem Absenden von Formularen über Callbacks

Erstellen Sie in der `App()`-Funktion in `App.jsx` eine Funktion mit dem Namen `addTask()`, die einen einzelnen Parameter `name` hat:

```jsx
function addTask(name) {
  alert(name);
}
```

Als nächstes geben Sie `addTask()` als Eigenschaft in `<Form />` ein. Die Eigenschaft kann jeden beliebigen Namen haben, aber wählen Sie einen Namen, den Sie später verstehen werden. Etwas wie `addTask` funktioniert, weil es sowohl den Namen der Funktion als auch das, was die Funktion tun wird, beschreibt. Ihr `<Form />`-Komponentenaufruf sollte wie folgt aktualisiert werden:

```jsx
<Form addTask={addTask} />
```

Um diese Eigenschaft zu verwenden, müssen wir die Signatur der `Form()`-Funktion in `Form.jsx` ändern, sodass sie `props` als Parameter akzeptiert:

```jsx
function Form(props) {
  // ...
}
```

Schließlich können wir diese Eigenschaft innerhalb der `handleSubmit()`-Funktion in Ihrer `<Form />`-Komponente verwenden! Aktualisieren Sie sie wie folgt:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask("Say hello!");
}
```

Das Klicken auf die "Hinzufügen"-Schaltfläche in Ihrem Browser wird beweisen, dass die `addTask()`-Callback-Funktion funktioniert, aber es wäre schön, wenn wir den Alarm zeigen könnten, was wir in unser Eingabefeld eingeben! Das werden wir als nächstes tun.

### Abseits: eine Notiz zu Namenskonventionen

Wir haben die Funktion `addTask()` in die `<Form />`-Komponente als Eigenschaft `addTask` übergeben, damit die Beziehung zwischen der `addTask()`-Funktion und der `addTask`-Eigenschaft so klar wie möglich bleibt. Bedenken Sie jedoch, dass Eigenschaftsnamen nicht unbedingt etwas Bestimmtes sein müssen. Wir hätten `addTask()` unter einem anderen Namen, wie diesem, an `<Form />` übergeben können:

```diff
- <Form addTask={addTask} />
+ <Form onSubmit={addTask} />
```

Dies würde die Funktion `addTask()` der `<Form />`-Komponente als Eigenschaft `onSubmit` zur Verfügung stellen. Diese Eigenschaft könnte in `Form.jsx` wie folgt verwendet werden:

```diff
function handleSubmit(event) {
  event.preventDefault();
- props.addTask("Say hello!");
+ props.onSubmit("Say hello!");
}
```

Hier gibt uns das `on`-Präfix den Hinweis darauf, dass die Eigenschaft eine Callback-Funktion ist; `Submit` deutet darauf hin, dass ein Übermittlungsereignis diese Funktion auslösen wird.

Während Callback-Eigenschaften oft mit den Namen bekannter Ereignis-Handler wie `onSubmit` oder `onClick` übereinstimmen, können sie nahezu alles genannt werden, was hilft, ihre Bedeutung klarzumachen. Eine theoretische `<Menu />`-Komponente könnte eine Callback-Funktion beinhalten, die ausgeführt wird, wenn das Menü geöffnet wird, sowie eine separate Callback-Funktion, die ausgeführt wird, wenn es geschlossen wird:

```jsx
<Menu onOpen={() => console.log("Hi!")} onClose={() => console.log("Bye!")} />
```

Diese `on*`-Namenskonvention ist im React-Ökosystem sehr verbreitet, also behalten Sie sie im Hinterkopf, während Sie weiterlernen. Um der Klarheit willen werden wir im Rest dieses Tutorials bei `addTask` und ähnlichen Eigenschaftsnamen bleiben. Wenn Sie während des Lesens dieses Abschnitts Eigenschaftsnamen geändert haben, stellen Sie sicher, dass Sie sie ändern, bevor Sie fortfahren!

## Daten mit Zustand speichern und ändern

Bisher haben wir Eigenschaften verwendet, um Daten durch unsere Komponenten zu übergeben, und das hat uns ganz gut gedient. Da wir jetzt mit Interaktivität zu tun haben, benötigen wir jedoch die Möglichkeit, neue Daten zu erstellen, sie beizubehalten und später zu aktualisieren. Eigenschaften sind nicht das richtige Werkzeug für diese Aufgabe, da sie unveränderlich sind – eine Komponente kann ihre eigenen Eigenschaften nicht ändern oder erstellen.

Hier kommt der **Zustand** ins Spiel. Wenn wir Eigenschaften als Mittel zur Kommunikation zwischen Komponenten betrachten, können wir den Zustand als eine Möglichkeit betrachten, Komponenten ein "Gedächtnis" zu geben – Informationen, die sie bei Bedarf behalten und aktualisieren können.

React bietet eine spezielle Funktion, um einer Komponente einen Zustand hinzuzufügen, treffend benannt `useState()`.

> **Hinweis:** `useState()` gehört zu einer speziellen Kategorie von Funktionen namens **Hooks**, von denen jede verwendet werden kann, um einer Komponente neue Funktionalität hinzuzufügen. Wir werden später mehr über andere Hooks lernen.

Um `useState()` zu verwenden, müssen wir es aus dem React-Modul importieren. Fügen Sie die folgende Zeile oben in Ihrer `Form.jsx`-Datei, über der `Form()`-Funktionsdefinition hinzu:

```jsx
import { useState } from "react";
```

`useState()` nimmt ein einzelnes Argument, das den anfänglichen Wert des Zustands bestimmt. Dieses Argument kann ein String, eine Zahl, ein Array, ein Objekt oder ein anderer JavaScript-Datentyp sein. `useState()` gibt ein Array zurück, das zwei Elemente enthält. Das erste Element ist der aktuelle Wert des Zustands, das zweite Element ist eine Funktion, die verwendet werden kann, um den Zustand zu aktualisieren.

Lassen Sie uns einen `name`-Zustand erstellen. Schreiben Sie das Folgende über Ihre `handleSubmit()`-Funktion, innerhalb von `Form()`:

```jsx
const [name, setName] = useState("Learn React");
```

Mehrere Dinge passieren in dieser Codezeile:

- Wir definieren eine `name`-Konstante mit dem Wert `"Learn React"`.
- Wir definieren eine Funktion namens `setName()`, deren Aufgabe es ist, `name` zu ändern.
- `useState()` gibt diese beiden Dinge in einem Array zurück, sodass wir [Destrukturierung von Arrays](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um sie beide in separaten Variablen zu erfassen.

### Zustand lesen

Sie können den `name`-Zustand sofort in Aktion sehen. Fügen Sie dem Eingabefeld des Formulars ein `value`-Attribut hinzu und setzen Sie dessen Wert auf `name`. Ihr Browser wird "Learn React" im Eingabefeld rendern.

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

Ändern Sie "Learn React" in eine leere Zeichenkette, wenn Sie fertig sind; das ist es, was wir für unseren anfänglichen Zustand wollen:

```jsx
const [name, setName] = useState("");
```

### Benutzereingaben lesen

Bevor wir den Wert von `name` ändern können, müssen wir die Eingabe eines Benutzers erfassen, während er tippt. Dafür können wir das `onChange`-Ereignis überwachen. Lassen Sie uns eine Funktion `handleChange()` schreiben und sie auf dem `<input />`-Element belauschen.

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

Derzeit wird sich der Wert unseres Eingabefeldes nicht ändern, wenn Sie versuchen, Text einzugeben, aber Ihr Browser wird das Wort "Typing!" in die JavaScript-Konsole protokollieren, damit wir wissen, dass unser Ereignis-Listener mit der Eingabe verbunden ist.

Um die Tastenanschläge des Benutzers zu lesen, müssen wir auf die `value`-Eigenschaft der Eingabe zugreifen. Wir können dies tun, indem wir das `event`-Objekt lesen, das `handleChange()` erhält, wenn es aufgerufen wird. `event` wiederum hat [eine `target`-Eigenschaft](/de/docs/Web/API/Event/target), die das Element darstellt, das das `change`-Ereignis ausgelöst hat. Das ist unsere Eingabe. Daher ist `event.target.value` der Text in der Eingabe.

Sie können diesen Wert mit `console.log()` anzeigen, um ihn in der Konsole Ihres Browsers zu sehen. Versuchen Sie, die `handleChange()`-Funktion wie folgt zu aktualisieren und in die Eingabe zu tippen, um das Ergebnis in Ihrer Konsole zu sehen:

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

### Zustand aktualisieren

Protokollieren allein reicht nicht aus – wir möchten tatsächlich speichern, was der Benutzer eingibt, und es in der Eingabe wiedergeben! Ändern Sie Ihren `console.log()`-Aufruf zu `setName()`, wie unten gezeigt:

```jsx
function handleChange(event) {
  setName(event.target.value);
}
```

Jetzt, wenn Sie in die Eingabe tippen, werden Ihre Tastenanschläge die Eingabe ausfüllen, wie Sie erwarten würden.

Wir haben einen weiteren Schritt: Wir müssen unsere `handleSubmit()`-Funktion ändern, sodass sie `props.addTask` mit `name` als Argument aufruft. Erinnern Sie sich an unsere Callback-Eigenschaft? Dies wird dazu dienen, die Aufgabe an die `App`-Komponente zurückzusenden, damit wir sie zu einem späteren Zeitpunkt unserer Aufgabenliste hinzufügen können. Der gute Praxis halber sollten Sie die Eingabe nach dem Absenden Ihres Formulars leeren, sodass wir `setName()` erneut mit einer leeren Zeichenkette aufrufen, um dies zu tun:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask(name);
  setName("");
}
```

Endlich können Sie etwas in das Eingabefeld in Ihrem Browser eingeben und auf _Hinzufügen_ klicken – was auch immer Sie eingegeben haben, erscheint in einem Dialogfeld.

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
> Ihnen wird auffallen, dass Sie leere Aufgaben einreichen können, indem Sie einfach die `Hinzufügen`-Taste drücken, ohne einen Aufgabennamen einzugeben. Können Sie sich eine Möglichkeit vorstellen, dies zu verhindern? Als Hinweis: Sie müssen wahrscheinlich irgendeine Art von Überprüfung in die `handleSubmit()`-Funktion einfügen.

## Alles zusammenfügen: Eine Aufgabe hinzufügen

Jetzt, da wir mit Ereignissen, Callback-Eigenschaften und Hooks geübt haben, sind wir bereit, eine Funktionalität zu schreiben, die es einem Benutzer ermöglicht, eine neue Aufgabe von seinem Browser aus hinzuzufügen.

### Aufgaben als Status

Wir müssen `useState` in `App.jsx` importieren, damit wir unsere Aufgaben im Status speichern können. Fügen Sie das Folgende oben in Ihrer `App.jsx`-Datei hinzu:

```jsx
import { useState } from "react";
```

Wir möchten `props.tasks` in den `useState()`-Hook übergeben – das wird seinen Anfangszustand beibehalten. Fügen Sie das Folgende direkt am Anfang Ihrer `App()`-Funktionsdefinition hinzu:

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

Nun können wir unsere `taskList`-Abbildung so ändern, dass sie das Ergebnis der Abbildung von `tasks` anstelle von `props.tasks` ist. Ihre `taskList`-Konstantendeklaration sollte jetzt so aussehen:

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

Wir haben jetzt einen `setTasks`-Hook, den wir in unserer `addTask()`-Funktion verwenden können, um unsere Aufgabenliste zu aktualisieren. Es gibt jedoch ein Problem: Wir können das `name`-Argument von `addTask()` nicht einfach in `setTasks` übergeben, da `tasks` ein Array von Objekten ist und `name` eine Zeichenkette. Wenn wir versuchen würden, dies zu tun, würde das Array durch die Zeichenkette ersetzt werden.

Zuerst müssen wir das `name` in ein Objekt umwandeln, das die gleiche Struktur wie unsere vorhandenen Aufgaben hat. Innerhalb der `addTask()`-Funktion erstellen wir ein `newTask`-Objekt, das dem Array hinzugefügt werden soll.

Dann müssen wir ein neues Array mit dieser neuen Aufgabe hinzufügen und dann den Status der Aufgabendaten auf diesen neuen Status aktualisieren. Um dies zu tun, können wir die Spread-Syntax verwenden, um [das vorhandene Array zu kopieren](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copying_an_array) und unser Objekt am Ende hinzufügen. Danach übergeben wir dieses Array in `setTasks()`, um den Status zu aktualisieren.

Zusammengesetzt sollte Ihre `addTask()`-Funktion so aussehen:

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

Jetzt können Sie den Browser verwenden, um eine Aufgabe zu unseren Daten hinzuzufügen! Geben Sie irgendetwas in das Formular ein und klicken auf "Hinzufügen" (oder drücken die <kbd>Enter</kbd>-Taste), und Sie werden sehen, wie Ihr neues Aufgaben-Element in der Benutzeroberfläche erscheint!

**Allerdings haben wir ein weiteres Problem**: Unsere `addTask()`-Funktion gibt jeder Aufgabe die gleiche `id`. Das ist schlecht für die Barrierefreiheit und macht es unmöglich, dass React zukünftige Aufgaben mit der `key`-Eigenschaft unterscheidet. Tatsächlich wird React Ihnen eine Warnung in Ihrer DevTools-Konsole geben – "Warning: Encountered two children with the same key...".

Wir müssen dies beheben. Eindeutige Bezeichner zu erstellen ist ein schwieriges Problem, wofür die JavaScript-Community einige hilfreiche Bibliotheken geschrieben hat. Wir werden [nanoid](https://github.com/ai/nanoid) verwenden, weil es klein ist und funktioniert.

Stellen Sie sicher, dass Sie sich im Stammverzeichnis Ihrer Anwendung befinden, und führen Sie den folgenden Terminalbefehl aus:

```bash
npm install nanoid
```

> [!NOTE]
> Wenn Sie Yarn verwenden, benötigen Sie stattdessen Folgendes: `yarn add nanoid`.

Nun können wir `nanoid` verwenden, um eindeutige IDs für unsere neuen Aufgaben zu erstellen. Zuerst importieren wir es, indem wir die folgende Zeile oben in `App.jsx` hinzufügen:

```jsx
import { nanoid } from "nanoid";
```

Lassen Sie uns nun `addTask()` so aktualisieren, dass jede Aufgaben-ID ein Präfix `todo-` sowie eine von nanoid generierte eindeutige Zeichenfolge erhält. Aktualisieren Sie Ihre `newTask`-Konstanten-Deklaration zu diesem:

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

Speichern Sie alles und testen Sie Ihre App erneut – jetzt können Sie Aufgaben hinzufügen, ohne die Warnung über doppelte IDs zu erhalten.

## Exkurs: Aufgaben zählen

Jetzt, da wir neue Aufgaben hinzufügen können, werden Sie möglicherweise ein Problem bemerken: Unsere Überschrift zeigt "3 tasks remaining" an, egal wie viele Aufgaben wir haben! Wir können dies beheben, indem wir die Länge von `taskList` zählen und den Text unserer Überschrift dementsprechend ändern.

Fügen Sie dies in Ihrer `App()`-Definition, bevor der Return-Anweisung hinzu:

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

Dies ist fast richtig, außer dass, wenn unsere Liste jemals nur eine Aufgabe enthält, die Überschrift weiterhin das Wort "tasks" verwenden wird. Wir können dies auch zu einer Variablen machen. Aktualisieren Sie den Code, den Sie gerade hinzugefügt haben, wie folgt:

```jsx
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

Nun können Sie den Textinhalt der Listenüberschrift mit der `headingText`-Variablen ersetzen. Aktualisieren Sie Ihr `<h2>`, wie folgt:

```jsx
<h2 id="list-heading">{headingText}</h2>
```

Speichern Sie die Datei, gehen Sie zurück zu Ihrem Browser und versuchen Sie, einige Aufgaben hinzuzufügen: Die Anzahl sollte jetzt wie erwartet aktualisiert werden.

## Eine Aufgabe abschließen

Vielleicht bemerken Sie, dass sich ein Kontrollkästchen, wenn Sie darauf klicken, angemessen an- und abmeldet. Als eine Funktion von HTML weiß der Browser, wie man speichert, welche Kontrollkästcheneingänge ohne unsere Hilfe ausgewählt oder nicht ausgewählt sind. Diese Funktion verbirgt jedoch ein Problem: das Umschalten eines Kontrollkästchens ändert nicht den Status in unserer React-Anwendung. Das bedeutet, dass der Browser und unsere App jetzt nicht mehr synchron sind. Wir müssen unseren eigenen Code schreiben, um den Browser und unsere App wieder zu synchronisieren.

### Den Fehler beweisen

Bevor wir das Problem beheben, lassen Sie es uns beobachten, wie es passiert.

Wir fangen an, indem wir eine Funktion `toggleTaskCompleted()` in unserer `App()`-Komponente schreiben. Diese Funktion wird einen `id`-Parameter haben, aber wir werden ihn vorerst nicht verwenden. Vorerst werden wir das erste Element im Array in der Konsole protokollieren – wir werden beobachten, was passiert, wenn wir es in unserem Browser an- oder abmarkieren:

Fügen Sie dies direkt über Ihrer `taskList`-Konstantendeklaration hinzu:

```jsx
function toggleTaskCompleted(id) {
  console.log(tasks[0]);
}
```

Als nächstes werden wir `toggleTaskCompleted` zu den Eigenschaften jeder `<Todo />`-Komponente, die innerhalb unserer `taskList` gerendert wird, hinzufügen; aktualisieren Sie es entsprechend:

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

Gehen Sie als nächstes zur `Todo.jsx`-Komponente und fügen Sie dem `<input />`-Element einen `onChange`-Handler hinzu, der eine anonyme Funktion verwendet, um `props.toggleTaskCompleted()` mit einem Parameter von `props.id` aufzurufen. Der `<input />` sollte nun so aussehen:

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

Speichern Sie alles, und gehen Sie zurück zu Ihrem Browser und bemerken Sie, dass unsere erste Aufgabe, Essen, aktiviert ist. Öffnen Sie Ihre JavaScript-Konsole und klicken Sie dann auf das Kontrollkästchen neben Essen. Es wird abgehakt, wie wir es erwarten. Ihre JavaScript-Konsole wird jedoch etwas wie dies protokollieren:

```plain
Object { id: "task-0", name: "Eat", completed: true }
```

Das Kontrollkästchen im Browser wird deaktiviert, aber unsere Konsole sagt uns, dass Essen immer noch abgeschlossen ist. Wir werden das als nächstes beheben!

### Den Browser mit unseren Daten synchronisieren

Lassen Sie uns unsere Funktion `toggleTaskCompleted()` in `App.jsx` erneut besuchen. Wir möchten, dass es die Eigenschaft `completed` nur der Aufgabe ändert, die umgeschaltet wurde, und alle anderen in Ruhe lässt. Dazu werden wir über die Aufgabenliste `map()` verwenden und nur die ändern, die wir abgeschlossen haben.

Aktualisieren Sie Ihre Funktion `toggleTaskCompleted()` auf das Folgende:

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

Hier definieren wir eine Konstante `updatedTasks`, die über das ursprüngliche `tasks`-Array mappt. Wenn die `id`-Eigenschaft der Aufgabe mit der `id` übereinstimmt, die der Funktion übergeben wurde, verwenden wir [das Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um ein neues Objekt zu erstellen, und schalten die `completed`-Eigenschaft dieses Objekts um, bevor wir es zurückgeben. Wenn es nicht übereinstimmt, geben wir das ursprüngliche Objekt zurück.

Dann rufen wir `setTasks()` mit diesem neuen Array auf, um unseren Status zu aktualisieren.

## Eine Aufgabe löschen

Das Löschen einer Aufgabe wird einem ähnlichen Muster wie das Umschalten ihres Abschlussstatus folgen: Wir müssen eine Funktion zum Aktualisieren unseres Status definieren und dann diese Funktion als Eigenschaft an `<Todo />` übergeben und sie aufrufen, wenn das richtige Ereignis eintritt.

### Die `deleteTask`-Callback-Eigenschaft

Hier beginnen wir mit dem Schreiben einer `deleteTask()`-Funktion in Ihrer `App`-Komponente. Wie `toggleTaskCompleted()` wird diese Funktion einen `id`-Parameter nehmen, und wir werden zu Beginn diese `id` in der Konsole protokollieren. Fügen Sie Folgendes unter `toggleTaskCompleted()` hinzu:

```jsx
function deleteTask(id) {
  console.log(id);
}
```

Fügen Sie als nächstes eine weitere Callback-Eigenschaft zu unserem Array von `<Todo />`-Komponenten hinzu:

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

In `Todo.jsx` möchten wir, dass `props.deleteTask()` aufgerufen wird, wenn die Schaltfläche "Löschen" gedrückt wird. `deleteTask()` muss die ID der Aufgabe kennen, die sie aufgerufen hat, damit die richtige Aufgabe aus dem Status gelöscht werden kann.

Aktualisieren Sie die Schaltfläche "Löschen" in `Todo.jsx`, wie folgt:

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

Nun, wenn Sie auf eine der "Löschen"-Schaltflächen in der App klicken, sollte die Konsole Ihres Browsers die ID der zugehörigen Aufgabe protokollieren.

An diesem Punkt sollte Ihre Datei `Todo.jsx` wie folgt aussehen:

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

## Aufgaben aus Status und UI löschen

Jetzt, da wir wissen, dass `deleteTask()` korrekt aufgerufen wird, können wir unseren `setTasks()`-Hook in `deleteTask()` aufrufen, um diese Aufgabe aus dem Status der App sowie visuell in der App-Benutzeroberfläche tatsächlich zu löschen. Da `setTasks()` ein Array als Argument erwartet, sollten wir ihm ein neues Array übergeben, das die vorhandenen Aufgaben kopiert und die Aufgabe _ausschließt_, deren ID mit der in `deleteTask()` übergebenen ID übereinstimmt.

Dies ist eine perfekte Gelegenheit, [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) zu verwenden. Wir können jede Aufgabe testen und eine Aufgabe aus dem neuen Array ausschließen, wenn ihre `id`-Eigenschaft mit dem `id`-Argument übereinstimmt, das in `deleteTask()` übergeben wurde.

Aktualisieren Sie die `deleteTask()`-Funktion in Ihrer `App.jsx`-Datei wie folgt:

```jsx
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}
```

Versuchen Sie Ihre App erneut. Jetzt sollten Sie in der Lage sein, eine Aufgabe aus Ihrer App zu löschen!

An diesem Punkt sollte Ihre `App.jsx`-Datei wie folgt aussehen:

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

Das reicht für einen Artikel. Hier haben wir Ihnen das nötige Wissen vermittelt, wie React mit Ereignissen umgeht und den Zustand verwaltet, und Funktionalität implementiert, um Aufgaben hinzuzufügen, Aufgaben zu löschen und Aufgaben als erledigt umzuschalten. Wir sind fast am Ziel. Im nächsten Artikel werden wir Funktionalität implementieren, um vorhandene Aufgaben zu bearbeiten und die Liste der Aufgaben zwischen allen, erledigten und unerledigten Aufgaben zu filtern. Dabei werden wir uns mit der bedingten UI-Darstellung befassen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}
