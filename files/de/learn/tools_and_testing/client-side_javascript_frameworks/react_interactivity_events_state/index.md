---
title: "Reaktivität in React: Events und State"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Nachdem wir unseren Komponentenplan erarbeitet haben, ist es nun an der Zeit, unsere App von einer komplett statischen Benutzeroberfläche zu einer zu aktualisieren, die tatsächlich Interaktion und Änderungen ermöglicht. In diesem Artikel werden wir dies tun, indem wir uns mit Events und States befassen und letztendlich eine App erstellen, mit der wir erfolgreich Aufgaben hinzufügen und löschen sowie Aufgaben als abgeschlossen kennzeichnen können.

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
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man mit Events und State in React umgeht und diese nutzt,
        um die Beispiel-App interaktiv zu machen.
      </td>
    </tr>
  </tbody>
</table>

## Umgang mit Events

Wenn Sie bisher nur mit Vanilla-JavaScript gearbeitet haben, sind Sie es vielleicht gewohnt, eine separate JavaScript-Datei zu haben, in der Sie nach einigen DOM-Knoten suchen und Listener an diese anhängen. Zum Beispiel könnte eine HTML-Datei einen Button enthalten, wie dieser hier:

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

In JSX befindet sich der Code, der die Benutzeroberfläche beschreibt, direkt neben unseren Event-Listenern:

```jsx
<button type="button" onClick={() => alert("hi!")}>
  Say hi!
</button>
```

In diesem Beispiel fügen wir dem {{htmlelement("button")}}-Element ein `onClick`-Attribut hinzu. Der Wert dieses Attributs ist eine Funktion, die eine einfache Warnung auslöst. Dies mag gegen die Empfehlung verstoßen, Event-Listener nicht im HTML zu schreiben, aber denken Sie daran: JSX ist kein HTML.

Das `onClick`-Attribut hat hier eine besondere Bedeutung: Es sagt React, dass es eine bestimmte Funktion ausführen soll, wenn der Benutzer auf den Button klickt. Es gibt ein paar andere Dinge zu beachten:

- Die [Camel-Case-Schreibweise](/de/docs/Glossary/camel_case) von `onClick` ist wichtig – JSX erkennt `onclick` nicht (es wird bereits in JavaScript für einen bestimmten Zweck verwendet, der verwandt, aber unterschiedlich ist — standardmäßige [`onclick`](/de/docs/Web/API/Element/click_event) Handler-Eigenschaften).
- Alle Browserevents folgen in JSX diesem Format – `on`, gefolgt vom Namen des Events.

Wenden wir dies in unserer App an, beginnend mit der `Form.jsx`-Komponente.

### Umgang mit dem Absenden des Formulars

Definieren Sie oben in der `Form()`-Komponentenfunktion (d. h. direkt unter der Zeile `function Form() {`) eine Funktion namens `handleSubmit()`. Diese Funktion sollte [das Standardverhalten des `submit`-Events verhindern](/de/docs/Learn/JavaScript/Building_blocks/Events#preventing_default_behavior). Danach sollte sie eine `alert()` auslösen, die alles sagen kann, was Sie möchten. Sie sollte in etwa so aussehen:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  alert("Hello, world!");
}
```

Um diese Funktion zu nutzen, fügen Sie dem [`<form>`](/de/docs/Web/HTML/Element/form)-Element ein `onSubmit`-Attribut hinzu und setzen Sie dessen Wert auf die `handleSubmit`-Funktion:

```jsx
<form onSubmit={handleSubmit}>
```

Jetzt, wenn Sie in Ihrem Browser auf die Schaltfläche "Add" klicken, zeigt Ihr Browser ein Warnungsdialogfeld mit den Worten "Hello, world!" an — oder was auch immer Sie dort schreiben.

## Callback-Props

In React-Anwendungen ist Interaktivität selten auf eine einzige Komponente beschränkt: Events, die in einer Komponente auftreten, wirken sich auf andere Teile der App aus. Wenn wir mit der Erstellung neuer Aufgaben beginnen, wirken sich die Ereignisse, die in der `<Form />`-Komponente auftreten, auf die Liste aus, die in `<App />` gerendert wird.

Wir möchten, dass unsere `handleSubmit()`-Funktion letztendlich dabei hilft, eine neue Aufgabe zu erstellen. Daher benötigen wir eine Möglichkeit, Informationen von `<Form />` zu `<App />` zu übermitteln. Wir können Daten nicht in der gleichen Weise vom Kind zum Elternteil übergeben, wie wir Daten vom Elternteil zum Kind mit Standard-Props übergeben. Stattdessen können wir in `<App />` eine Funktion schreiben, die einige Daten aus unserem Formular als Eingabe erwartet und diese Funktion dann als Prop an `<Form />` übergeben. Diese Funktion-als-Prop wird als **Callback-Prop** bezeichnet. Sobald wir unsere Callback-Prop haben, können wir sie innerhalb von `<Form />` aufrufen, um die richtigen Daten an `<App />` zu senden.

### Umgang mit der Formularübermittlung über Callbacks

Definieren Sie in der `App()`-Funktion in der Datei `App.jsx` eine Funktion namens `addTask()`, die einen einzelnen Parameter namens `name` aufweist:

```jsx
function addTask(name) {
  alert(name);
}
```

Geben Sie als Nächstes `addTask()` als Prop an `<Form />` weiter. Das Prop kann einen beliebigen Namen haben, aber wählen Sie einen Namen, den Sie später verstehen werden. Etwas wie `addTask` funktioniert, weil es sowohl den Namen der Funktion als auch das beschreibt, was die Funktion tun wird. Ihr `<Form />`-Komponentenaufruf sollte wie folgt aktualisiert werden:

```jsx
<Form addTask={addTask} />
```

Um diese Prop zu verwenden, müssen wir die Signatur der `Form()`-Funktion in `Form.jsx` ändern, sodass sie `props` als Parameter akzeptiert:

```jsx
function Form(props) {
  // ...
}
```

Schließlich können wir diese Prop innerhalb der `handleSubmit()`-Funktion in Ihrer `<Form />`-Komponente nutzen! Aktualisieren Sie diese wie folgt:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask("Say hello!");
}
```

Das Klicken auf die Schaltfläche "Add" in Ihrem Browser beweist, dass die `addTask()`-Callback-Funktion funktioniert, aber es wäre schön, wenn die Warnung uns zeigen würde, was wir in unser Eingabefeld tippen! Das werden wir als Nächstes tun.

### Nebenbemerkung: eine Anmerkung zu Namenskonventionen

Wir haben die `addTask()`-Funktion als Prop `addTask` in die `<Form />`-Komponente übergeben, damit die Beziehung zwischen der `addTask()`- _Funktion_ und der `addTask`- _Prop_ so klar wie möglich bleibt. Beachten Sie jedoch, dass Prop-Namen keine bestimmte Bedeutung _haben müssen_. Wir hätten `addTask()` unter einem beliebigen anderen Namen in `<Form />` übergeben können, wie zum Beispiel diesem:

```diff
- <Form addTask={addTask} />
+ <Form onSubmit={addTask} />
```

Dies würde die `addTask()`-Funktion als Prop `onSubmit` in der `<Form />`-Komponente verfügbar machen. Diese Prop könnte in `Form.jsx` so verwendet werden:

```diff
function handleSubmit(event) {
  event.preventDefault();
- props.addTask("Say hello!");
+ props.onSubmit("Say hello!");
}
```

Hier sagt uns das Präfix `on`, dass die Prop eine Callback-Funktion ist; `Submit` ist unser Hinweis darauf, dass ein Submit-Event diese Funktion auslösen wird.

Obwohl Callback-Props oft zu den Namen der bekannten Event-Handler wie `onSubmit` oder `onClick` passen, können sie fast beliebig benannt werden, solange sie ihre Bedeutung klar machen. Eine hypothetische `<Menu />`-Komponente könnte eine Callback-Funktion enthalten, die ausgeführt wird, wenn das Menü geöffnet wird, sowie eine separate Callback-Funktion, die ausgeführt wird, wenn es geschlossen wird:

```jsx
<Menu onOpen={() => console.log("Hi!")} onClose={() => console.log("Bye!")} />
```

Diese `on*` Namenskonvention ist sehr verbreitet im React-Ökosystem, also behalten Sie sie im Kopf, während Sie weiter lernen. Der Klarheit halber werden wir in diesem Tutorial bei `addTask` und ähnlichen Prop-Namen bleiben. Wenn Sie während des Lesens dieses Abschnitts Prop-Namen geändert haben, stellen Sie sicher, dass Sie sie vor dem Fortsetzen zurücksetzen!

## Persistenz und Änderung von Daten mit State

Bisher haben wir Props verwendet, um Daten durch unsere Komponenten weiterzugeben, und das hat soweit gut funktioniert. Jetzt, da wir uns mit Interaktivität befassen, benötigen wir jedoch die Fähigkeit, neue Daten zu erstellen, sie beizubehalten und später zu aktualisieren. Props sind nicht das richtige Werkzeug dafür, da sie unveränderlich sind — eine Komponente kann ihre eigenen Props nicht ändern oder erstellen.

Hier kommt der **State** ins Spiel. Wenn wir Props als eine Möglichkeit betrachten, zwischen Komponenten zu kommunizieren, können wir den State als eine Möglichkeit betrachten, Komponenten "Gedächtnis" zu geben – Informationen, die sie behalten und nach Bedarf aktualisieren können.

React stellt eine spezielle Funktion zur Verfügung, um State in eine Komponente einzuführen, die passend `useState()` genannt wird.

> **Note:** `useState()` gehört zu einer speziellen Kategorie von Funktionen, die **Hooks** genannt werden, von denen jede verwendet werden kann, um einer Komponente neue Funktionalität hinzuzufügen. Später werden wir über andere Hooks lernen.

Um `useState()` zu verwenden, müssen wir es aus dem React-Modul importieren. Fügen Sie die folgende Zeile oben in Ihrer Datei `Form.jsx` hinzu, über der Definition der `Form()`-Funktion:

```jsx
import { useState } from "react";
```

`useState()` nimmt ein einzelnes Argument, das den Anfangswert des States bestimmt. Dieses Argument kann ein String, eine Zahl, ein Array, ein Objekt oder ein anderer JavaScript-Datentyp sein. `useState()` gibt ein Array zurück, das zwei Elemente enthält. Das erste Element ist der aktuelle Wert des States, das zweite Element ist eine Funktion, mit der der State aktualisiert werden kann.

Lassen Sie uns einen `name` State erstellen. Schreiben Sie Folgendes über Ihre `handleSubmit()`-Funktion innerhalb von `Form()`:

```jsx
const [name, setName] = useState("Learn React");
```

Es passieren mehrere Dinge in dieser Codezeile:

- Wir definieren eine Konstante `name` mit dem Wert `"Learn React"`.
- Wir definieren eine Funktion, deren Aufgabe es ist, `name` zu modifizieren, genannt `setName()`.
- `useState()` gibt diese beiden Dinge in einem Array zurück, also verwenden wir [Array-Dekonstruktion](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), um sie beide in separaten Variablen zu erfassen.

### State lesen

Sie können den `name` State sofort in Aktion sehen. Fügen Sie dem Formular-Input ein `value`-Attribut hinzu und setzen Sie dessen Wert auf `name`. Ihr Browser zeigt "Learn React" im Input an.

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

Ändern Sie "Learn React" auf einen leeren String, wenn Sie fertig sind; dies ist das, was wir für unseren Anfangszustand wollen:

```jsx
const [name, setName] = useState("");
```

### Benutzereingaben lesen

Bevor wir den Wert von `name` ändern können, müssen wir die Eingabe eines Benutzers erfassen, während er tippt. Dazu können wir das `onChange`-Event abhören. Lassen Sie uns eine `handleChange()`-Funktion schreiben und dieses Event am `<input />`-Element überwachen.

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

Derzeit wird der Wert unseres Inputs nicht geändert, wenn Sie versuchen, Text einzugeben, aber Ihr Browser wird das Wort "Typing!" in die JavaScript-Konsole protokollieren, sodass wir wissen, dass unser Event-Listener am Input angehängt ist.

Um die Tastenanschläge des Benutzers zu lesen, müssen wir die `value`-Eigenschaft des Inputs zugreifen. Dies können wir tun, indem wir das `event`-Objekt lesen, das `handleChange()` erhält, wenn es aufgerufen wird. `event` hat wiederum [eine `target`-Eigenschaft](/de/docs/Web/API/Event/target), die das Element darstellt, das das `change`-Event ausgelöst hat. Das ist unser Input. Also ist `event.target.value` der Text im Input.

Sie können diesen Wert mit `console.log()` ausgeben, um ihn in der Konsole Ihres Browsers zu sehen. Versuchen Sie, die `handleChange()`-Funktion wie folgt zu aktualisieren und tippen Sie in den Input, um das Ergebnis in Ihrer Konsole zu sehen:

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

### State aktualisieren

Das Protokollieren reicht nicht aus – wir möchten tatsächlich speichern, was der Benutzer eingibt, und es im Eingabefeld anzeigen! Ändern Sie Ihren `console.log()`-Aufruf in `setName()`, wie unten gezeigt:

```jsx
function handleChange(event) {
  setName(event.target.value);
}
```

Jetzt, wenn Sie in das Eingabefeld tippen, wird Ihre Eingabe im Feld ausgefüllt, wie Sie es erwarten würden.

Wir haben noch einen Schritt: Wir müssen unsere `handleSubmit()`-Funktion ändern, sodass sie `props.addTask` mit `name` als Argument aufruft. Erinnern Sie sich an unsere Callback-Prop? Diese dient dazu, die Aufgabe an die `App`-Komponente zurückzusenden, damit wir sie zu einem späteren Zeitpunkt zu unserer Aufgabenliste hinzufügen können. Gute Praxis ist es, das Eingabefeld nach Absenden des Formulars zu leeren, daher rufen wir `setName()` erneut mit einem leeren String auf, um dies zu tun:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask(name);
  setName("");
}
```

Endlich können Sie im Eingabeformular etwas eingeben und auf _Add_ klicken — was immer Sie eingegeben haben, erscheint in einem Warnungsdialog.

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
> Ihnen wird auffallen, dass Sie leere Aufgaben durch einfaches Drücken der `Add`-Schaltfläche, ohne einen Aufgabennamen einzugeben, einreichen können. Können Sie sich überlegen, wie man dies verhindern könnte? Als Hinweis: Sie müssen wahrscheinlich eine Art Überprüfung in die `handleSubmit()`-Funktion einfügen.

## Alles zusammenführen: eine Aufgabe hinzufügen

Jetzt, da wir mit Events, Callback-Props und Hooks geübt haben, sind wir bereit, eine Funktionalität zu schreiben, die es einem Benutzer ermöglicht, eine neue Aufgabe von seinem Browser aus hinzuzufügen.

### Aufgaben als State

Wir müssen `useState` in `App.jsx` importieren, damit wir unsere Aufgaben im State speichern können. Fügen Sie Folgendes oben in Ihrer `App.jsx`-Datei hinzu:

```jsx
import { useState } from "react";
```

Wir möchten `props.tasks` in den `useState()`-Hook übergeben — dies wird seinen Anfangszustand bewahren. Fügen Sie Folgendes direkt am Anfang Ihrer `App()`-Funktionsdefinition hinzu:

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

Nun können wir unser `taskList` Mapping so ändern, dass es das Ergebnis des Mappings von `tasks` ist, anstatt von `props.tasks`. Ihre `taskList`-Konstantendeklaration sollte nun so aussehen:

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

Wir haben nun einen `setTasks`-Hook, den wir in unserer `addTask()`-Funktion verwenden können, um unsere Aufgabenliste zu aktualisieren. Es gibt jedoch ein Problem: Wir können das `name`-Argument von `addTask()` nicht direkt an `setTasks` übergeben, da `tasks` ein Array von Objekten ist und `name` ein String ist. Wenn wir dies versuchen würden, würde das Array durch den String ersetzt.

Zuerst müssen wir `name` in ein Objekt einfügen, das die gleiche Struktur wie unsere bestehenden Aufgaben hat. Innerhalb der `addTask()`-Funktion werden wir ein `newTask`-Objekt erstellen, das dem Array hinzugefügt werden soll.

Dann müssen wir ein neues Array mit dieser neuen Aufgabe erstellen und dann den Zustand der Aufgabendaten auf diesen neuen Zustand aktualisieren. Dazu können wir die Spread-Syntax verwenden, um [das vorhandene Array zu kopieren](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copying_an_array), und unser Objekt am Ende hinzufügen. Dann übergeben wir dieses Array an `setTasks()`, um den State zu aktualisieren.

Zusammengenommen sollte Ihre `addTask()`-Funktion wie folgt aussehen:

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

Jetzt können Sie den Browser verwenden, um eine Aufgabe zu unseren Daten hinzuzufügen! Geben Sie irgendetwas in das Formular ein und klicken Sie auf "Add" (oder drücken Sie die <kbd>Enter</kbd>-Taste) und Sie werden sehen, dass Ihr neues Todo-Element in der Benutzeroberfläche erscheint!

**Wir haben jedoch ein weiteres Problem**: Unsere `addTask()`-Funktion gibt jeder Aufgabe die gleiche `id`. Das ist schlecht für die Zugänglichkeit und macht es unmöglich für React, zukünftige Aufgaben mit der `key` Prop zu unterscheiden. Tatsächlich gibt Ihnen React eine Warnung in Ihrer DevTools-Konsole — "Warning: Encountered two children with the same key…"

Wir müssen dies beheben. Einzigartige Identifier zu erstellen ist ein schwieriges Problem – eines, für das die JavaScript-Community einige hilfreiche Bibliotheken geschrieben hat. Wir werden [nanoid](https://github.com/ai/nanoid) verwenden, weil es klein ist und funktioniert.

Stellen Sie sicher, dass Sie sich im Stammverzeichnis Ihrer Anwendung befinden, und führen Sie den folgenden Terminalbefehl aus:

```bash
npm install nanoid
```

> [!NOTE]
> Wenn Sie yarn verwenden, benötigen Sie stattdessen: `yarn add nanoid`.

Jetzt können wir `nanoid` verwenden, um eindeutige IDs für unsere neuen Aufgaben zu erstellen. Importieren Sie es zuerst, indem Sie die folgende Zeile oben in `App.jsx` hinzufügen:

```jsx
import { nanoid } from "nanoid";
```

Aktualisieren wir nun `addTask()`, sodass jede Aufgaben-ID ein Präfix `todo-` plus einem von nanoid generierten eindeutigen String wird. Aktualisieren Sie Ihre `newTask`-Konstantendeklaration zu:

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

Speichern Sie alles und versuchen Sie Ihre App erneut — jetzt können Sie Aufgaben hinzufügen, ohne diese Warnung über doppelte IDs zu erhalten.

## Abstecher: Aufgaben zählen

Nun, da wir neue Aufgaben hinzufügen können, fällt Ihnen möglicherweise ein Problem auf: Unsere Überschrift zeigt "3 tasks remaining" an, egal wie viele Aufgaben wir haben! Wir können dies beheben, indem wir die Länge von `taskList` zählen und den Text unserer Überschrift entsprechend ändern.

Fügen Sie dies innerhalb Ihrer `App()`-Definition hinzu, bevor die Rückgabeanweisung erfolgt:

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

Dies ist fast richtig, außer dass wenn unsere Liste jemals nur eine einzige Aufgabe hat, die Überschrift immer noch das Wort "tasks" verwenden wird. Wir können auch dies zu einer Variablen machen. Aktualisieren Sie den Code, den Sie gerade hinzugefügt haben, wie folgt:

```jsx
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

Jetzt können Sie den Textinhalt der Liste-Überschrift durch die `headingText`-Variable ersetzen. Aktualisieren Sie Ihr `<h2>` wie folgt:

```jsx
<h2 id="list-heading">{headingText}</h2>
```

Speichern Sie die Datei, gehen Sie zurück zu Ihrem Browser und versuchen Sie Aufgaben hinzuzufügen: Die Zählung sollte jetzt wie erwartet aktualisiert werden.

## Eine Aufgabe abschließen

Sie bemerken vielleicht, dass beim Klicken auf ein Kontrollkästchen dieses korrekt aktiviert und deaktiviert wird. Als Feature von HTML weiß der Browser, wie er sich merken kann, welche Kontrollkästchen-Eingaben aktiviert oder deaktiviert sind, ohne unsere Hilfe. Dieses Feature verbirgt jedoch ein Problem: Das Umschalten eines Kontrollkästchens ändert nicht den State in unserer React-Anwendung. Dies bedeutet, dass der Browser und unsere App nun nicht mehr synchron sind. Wir müssen unseren eigenen Code schreiben, um den Browser mit unserer App wieder in Einklang zu bringen.

### Den Fehler beweisen

Bevor wir das Problem lösen, lassen Sie es uns beobachten.

Wir beginnen mit dem Schreiben einer `toggleTaskCompleted()`-Funktion in unserer `App()`-Komponente. Diese Funktion hat einen `id`-Parameter, den wir aber noch nicht verwenden werden. Vorerst protokollieren wir nur die erste Aufgabe im Array in der Konsole – wir werden beobachten, was passiert, wenn wir sie im Browser an- oder abwählen:

Fügen Sie dies direkt über Ihrer `taskList`-Konstantendeklaration hinzu:

```jsx
function toggleTaskCompleted(id) {
  console.log(tasks[0]);
}
```

Als Nächstes fügen wir `toggleTaskCompleted` den Props jeder in unserer `taskList` gerenderten `<Todo />`-Komponente hinzu; aktualisieren Sie es wie folgt:

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

Wechseln Sie als Nächstes zu Ihrer `Todo.jsx`-Komponente und fügen Sie Ihrem `<input />`-Element einen `onChange`-Handler hinzu, der eine anonyme Funktion verwendet, um `props.toggleTaskCompleted()` mit einem Parameter von `props.id` aufzurufen. Das `<input />`-Element sollte jetzt so aussehen:

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

Speichern Sie alles und kehren Sie zu Ihrem Browser zurück und bemerken Sie, dass unsere erste Aufgabe, Eat, aktiviert ist. Öffnen Sie Ihre JavaScript-Konsole, und klicken Sie dann auf das Kontrollkästchen neben Eat. Es wird, wie erwartet, deaktiviert. Ihre JavaScript-Konsole zeigt jedoch so etwas an:

```plain
Object { id: "task-0", name: "Eat", completed: true }
```

Das Kontrollkästchen deaktiviert sich im Browser, aber unsere Konsole sagt uns, dass Eat immer noch abgeschlossen ist. Das werden wir als Nächstes beheben!

### Den Browser mit unseren Daten synchronisieren

Lassen Sie uns zu unserer `toggleTaskCompleted()`-Funktion in `App.jsx` zurückkehren. Wir möchten, dass sie nur die `completed`-Eigenschaft der Aufgabe ändert, die getoggelt wurde, und alle anderen Aufgaben unangetastet lässt. Dazu werden wir über die Aufgabenliste `map()` und nur diejenige ändern, die wir abgeschlossen haben.

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

Hier definieren wir eine `updatedTasks`-Konstante, die über das ursprüngliche `tasks`-Array mappt. Wenn die `id`-Eigenschaft der Aufgabe mit der `id` übereinstimmt, die an die Funktion übergeben wurde, verwenden wir die [Objekt-Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um ein neues Objekt zu erstellen und die `completed`-Eigenschaft dieses Objekts umzuschalten, bevor wir es zurückgeben. Wenn es nicht übereinstimmt, geben wir das ursprüngliche Objekt zurück.

Dann rufen wir `setTasks()` mit diesem neuen Array auf, um unseren State zu aktualisieren.

## Eine Aufgabe löschen

Das Löschen einer Aufgabe folgt einem ähnlichen Muster wie das Umschalten ihres abgeschlossenen Zustands: Wir müssen eine Funktion definieren, um unseren State zu aktualisieren, dann diese Funktion als Prop in `<Todo />` übergeben und sie aufrufen, wenn das richtige Ereignis auftritt.

### Der `deleteTask` Callback-Prop

Hiermit beginnen wir, indem wir in Ihrer `App`-Komponente eine `deleteTask()`-Funktion schreiben. Wie `toggleTaskCompleted()` nimmt diese Funktion einen `id`-Parameter auf und wir werden diese `id` zunächst in die Konsole protokollieren. Fügen Sie das folgende unter `toggleTaskCompleted()` hinzu:

```jsx
function deleteTask(id) {
  console.log(id);
}
```

Als Nächstes fügen wir unserem Array der `<Todo />`-Komponenten ein weiteres Callback-Prop hinzu:

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

In `Todo.jsx` möchten wir `props.deleteTask()` aufrufen, wenn die Schaltfläche "Delete" gedrückt wird. `deleteTask()` muss die ID der aufrufenden Aufgabe kennen, damit sie die richtige Aufgabe aus dem State löschen kann.

Aktualisieren Sie die Schaltfläche "Delete" in `Todo.jsx` wie folgt:

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

Jetzt sollten Sie, wenn Sie auf eine der "Delete"-Schaltflächen in der App klicken, die ID der entsprechenden Aufgabe in der Konsole Ihres Browsers protokolliert sehen.

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

## Aufgaben aus dem State und der UI löschen

Jetzt, da wir wissen, dass `deleteTask()` korrekt aufgerufen wird, können wir unseren `setTasks()` Hook in `deleteTask()` verwenden, um diese Aufgabe tatsächlich aus dem Zustand der App sowie visuell in der UI der App zu löschen. Da `setTasks()` ein Array als Argument erwartet, sollten wir ein neues Array bereitstellen, das die vorhandenen Aufgaben kopiert und die Aufgabe _ausschließt_, deren ID mit der in `deleteTask()` übergebenen ID übereinstimmt.

Dies ist eine perfekte Gelegenheit, [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) zu verwenden. Wir können jede Aufgabe testen und eine Aufgabe aus dem neuen Array ausschließen, wenn ihre `id`-Prop mit dem `id`-Argument übereinstimmt, das an `deleteTask()` übergeben wird.

Aktualisieren Sie die `deleteTask()`-Funktion in Ihrer Datei `App.jsx` wie folgt:

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

Das reicht für einen Artikel. Hier haben wir Ihnen die Grundlagen vermittelt, wie React mit Events umgeht und den State verwaltet. Zudem haben wir Funktionalitäten implementiert, um Aufgaben hinzuzufügen, zu löschen und als abgeschlossen zu markieren. Wir sind fast am Ziel. Im nächsten Artikel werden wir die Funktionalität implementieren, um vorhandene Aufgaben zu bearbeiten und die Liste der Aufgaben zwischen alle, abgeschlossene und unvollständige Aufgaben zu filtern. Unterwegs werden wir uns mit bedingtem UI-Rendering befassen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
