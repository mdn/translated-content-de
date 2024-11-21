---
title: "React-Interaktivität: Ereignisse und Status"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Nachdem wir unseren Komponentenplan ausgearbeitet haben, ist es nun an der Zeit, unsere App von einer vollständig statischen Benutzeroberfläche zu einer zu aktualisieren, die tatsächlich Interaktionen ermöglicht und Änderungen zulässt. In diesem Artikel werden wir dies tun, indem wir uns mit Ereignissen und Status beschäftigen. Am Ende haben wir eine App, in der wir erfolgreich Aufgaben hinzufügen und löschen sowie Aufgaben als erledigt markieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen,
          Kenntnisse im Umgang mit dem
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
        Erlernen des Umgangs mit Ereignissen und Status in React, um die Fallstudien-App interaktiv zu gestalten.
      </td>
    </tr>
  </tbody>
</table>

## Umgang mit Ereignissen

Wenn Sie bisher nur mit Vanilla JavaScript gearbeitet haben, sind Sie es vielleicht gewohnt, eine separate JavaScript-Datei zu haben, in der Sie einige DOM-Knoten abfragen und Listener an diese anhängen. Beispielsweise könnte eine HTML-Datei einen Button enthalten, wie hier:

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

In JSX leben der Code, der die Benutzeroberfläche beschreibt, und unsere Ereignis-Listener direkt nebeneinander:

```jsx
<button type="button" onClick={() => alert("hi!")}>
  Say hi!
</button>
```

In diesem Beispiel fügen wir dem {{htmlelement("button")}}-Element ein `onClick`-Attribut hinzu. Der Wert dieses Attributs ist eine Funktion, die eine Warnung auslöst. Dies mag dem Rat, keine Ereignis-Listener in HTML zu schreiben, widersprechen, aber bedenken Sie: JSX ist kein HTML.

Das `onClick`-Attribut hat hier eine besondere Bedeutung: Es sagt React, dass eine bestimmte Funktion ausgeführt werden soll, wenn der Benutzer auf den Button klickt. Es gibt ein paar weitere Dinge zu beachten:

- Das {{Glossary("camel_case", "camel-cased")}} `onClick` ist wichtig — JSX wird `onclick` nicht erkennen (es wird in JavaScript bereits für einen bestimmten Zweck verwendet, der verwandt, aber anders ist — standardisierte [`onclick`](/de/docs/Web/API/Element/click_event) Handler-Eigenschaften).
- Alle Browser-Ereignisse folgen diesem Format in JSX – `on`, gefolgt vom Namen des Ereignisses.

Lassen Sie uns das in unserer App anwenden, beginnend mit der `Form.jsx` Komponente.

### Umgang mit dem Absenden von Formularen

Am Anfang der `Form()` Komponent-Funktion (d.h. direkt unter der Zeile `function Form() {`) erstellen Sie eine Funktion namens `handleSubmit()`. Diese Funktion sollte [das Standardverhalten des `submit`-Ereignisses verhindern](/de/docs/Learn/JavaScript/Building_blocks/Events#preventing_default_behavior). Danach sollte sie einen `alert()` auslösen, die Sie beliebig gestalten können. Sie sollte am Ende ungefähr so aussehen:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  alert("Hello, world!");
}
```

Um diese Funktion zu verwenden, fügen Sie dem [`<form>`](/de/docs/Web/HTML/Element/form) Element ein `onSubmit`-Attribut hinzu und setzen Sie dessen Wert auf die `handleSubmit` Funktion:

```jsx
<form onSubmit={handleSubmit}>
```

Wenn Sie jetzt zu Ihrem Browser zurückkehren und auf den "Add"-Button klicken, wird Ihnen ein Warnungsdialog mit den Worten "Hello, world!" angezeigt – oder was auch immer Sie dort geschrieben haben.

## Callback-Props

In React-Anwendungen ist Interaktivität selten auf nur eine Komponente beschränkt: Ereignisse, die in einer Komponente passieren, betreffen andere Teile der App. Wenn wir die Fähigkeit erhalten, neue Aufgaben zu erstellen, werden Dinge, die in der `<Form />`-Komponente passieren, die Liste beeinflussen, die in `<App />` dargestellt wird.

Wir möchten, dass unsere `handleSubmit()`-Funktion letztendlich dabei hilft, eine neue Aufgabe zu erstellen. Wir brauchen also eine Möglichkeit, Informationen von `<Form />` zu `<App />` zu übermitteln. Wir können Daten nicht auf die gleiche Weise von Kind- zu Elternkomponenten übergeben wie von Eltern- zu Kindkomponenten mit Standard-Props. Stattdessen können wir eine Funktion in `<App />` schreiben, die einige Daten aus unserem Formular als Eingabe erwartet und diese Funktion dann als Prop an `<Form />` übergeben. Diese Funktion-als-Prop wird **Callback-Prop** genannt. Sobald wir unsere Callback-Prop haben, können wir sie in `<Form />` aufrufen, um die richtigen Daten an `<App />` zu senden.

### Formularübermittlung über Callbacks verarbeiten

Erstellen Sie in der `App()`-Funktion in `App.jsx` eine Funktion mit dem Namen `addTask()` mit einem einzigen Parameter `name`:

```jsx
function addTask(name) {
  alert(name);
}
```

Übergeben Sie als Nächstes `addTask()` als Prop an `<Form />`. Das Prop kann jeden beliebigen Namen haben, aber wählen Sie einen Namen, den Sie später verstehen werden. Etwas wie `addTask` funktioniert gut, da es sowohl den Namen der Funktion als auch das, was die Funktion tun wird, entspricht. Ihr `<Form />`-Komponentenaufruf sollte wie folgt aktualisiert werden:

```jsx
<Form addTask={addTask} />
```

Um dieses Prop zu verwenden, müssen wir die Signatur der `Form()`-Funktion in `Form.jsx` ändern, damit sie `props` als Parameter akzeptiert:

```jsx
function Form(props) {
  // ...
}
```

Schließlich können wir dieses Prop in der `handleSubmit()`-Funktion in Ihrer `<Form />`-Komponente verwenden! Aktualisieren Sie es wie folgt:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask("Say hello!");
}
```

Wenn Sie im Browser auf den "Add"-Button klicken, wird bewiesen, dass die `addTask()`-Callback-Funktion funktioniert. Es wäre jedoch schön, wenn wir die Warnung anzeigen könnten, was wir in das Eingabefeld eingeben! Das werden wir als nächstes tun.

### Exkurs: eine Anmerkung zu Namenskonventionen

Wir haben die `addTask()`-Funktion in die `<Form />`-Komponente als das Prop `addTask` übergeben, damit die Beziehung zwischen der `addTask()` _Funktion_ und dem `addTask` _Prop_ so klar wie möglich bleibt. Beachten Sie jedoch, dass Prop-Namen nichts Bestimmtes sein _müssen_. Wir hätten `addTask()` unter jedem anderen Namen, z.B. so, in `<Form />` übergeben können:

```diff
- <Form addTask={addTask} />
+ <Form onSubmit={addTask} />
```

Dies würde die `addTask()`-Funktion der `<Form />`-Komponente als das Prop `onSubmit` zur Verfügung stellen. Das Prop könnte in `Form.jsx` so verwendet werden:

```diff
function handleSubmit(event) {
  event.preventDefault();
- props.addTask("Say hello!");
+ props.onSubmit("Say hello!");
}
```

Hier zeigt uns das `on`-Präfix an, dass das Prop eine Callback-Funktion ist; `Submit` ist unser Hinweis, dass ein Absendeereignis diese Funktion auslöst.

Während Callback-Props oft mit den Namen von bekannten Ereignishandlern übereinstimmen, wie `onSubmit` oder `onClick`, können sie fast beliebig benannt werden, um ihre Bedeutung klar herauszustellen. Eine hypothetische `<Menu />`-Komponente könnte eine Callback-Funktion enthalten, die ausgeführt wird, wenn das Menü geöffnet wird, sowie eine separate Callback-Funktion, die ausgeführt wird, wenn es geschlossen wird:

```jsx
<Menu onOpen={() => console.log("Hi!")} onClose={() => console.log("Bye!")} />
```

Diese `on*`-Namenskonvention ist im React-Ökosystem sehr verbreitet, daher sollten Sie sie im Hinterkopf behalten, während Sie Ihr Lernen fortsetzen. Der Klarheit halber bleiben wir für den Rest dieses Tutorials bei `addTask` und ähnlichen Prop-Namen. Falls Sie während des Lesens dieses Abschnitts Namen für Props geändert haben, stellen Sie sicher, dass Sie diese vor dem Fortfahren zurückändern!

## Daten mit Zuständen speichern und ändern

Bisher haben wir Props verwendet, um Daten durch unsere Komponenten zu übergeben, und das hat uns gut gedient. Jetzt, da wir mit Interaktivität umgehen, benötigen wir jedoch die Fähigkeit, neue Daten zu erstellen, sie zu behalten und später zu aktualisieren. Props sind nicht das richtige Werkzeug für diese Aufgabe, da sie unveränderlich sind – eine Komponente kann ihre eigenen Props nicht ändern oder erstellen.

Hier kommt der **Zustand** ins Spiel. Wenn wir Props als eine Möglichkeit sehen, zwischen Komponenten zu kommunizieren, können wir den Zustand als eine Möglichkeit betrachten, um Komponenten „Gedächtnis“ zu geben – Informationen, die sie behalten und nach Bedarf aktualisieren können.

React stellt eine spezielle Funktion zur Verfügung, um einem Komponentenzustand hinzuzufügen, und zwar `useState()`.

> **Hinweis:** `useState()` gehört zu einer speziellen Kategorie von Funktionen, genannt **Hooks**, von denen jede verwendet werden kann, um einer Komponente neue Funktionalität zu verleihen. Wir werden später über weitere Hooks lernen.

Um `useState()` zu verwenden, müssen wir es aus dem React-Modul importieren. Fügen Sie folgende Zeile am Anfang Ihrer `Form.jsx`-Datei, oberhalb der Definition der `Form()`-Funktion hinzu:

```jsx
import { useState } from "react";
```

`useState()` nimmt ein einziges Argument, das den Anfangswert des Zustandes bestimmt. Dieses Argument kann ein String, eine Zahl, ein Array, ein Objekt oder ein anderer JavaScript-Datentyp sein. `useState()` gibt ein Array mit zwei Elementen zurück. Das erste Element ist der aktuelle Wert des Zustandes; das zweite Element ist eine Funktion, die verwendet werden kann, um den Zustand zu aktualisieren.

Lassen Sie uns einen `name`-Zustand erstellen. Schreiben Sie Folgendes oberhalb Ihrer `handleSubmit()`-Funktion, innerhalb von `Form()`:

```jsx
const [name, setName] = useState("Learn React");
```

In dieser Codezeile passieren mehrere Dinge:

- Wir definieren eine `name`-Konstante mit dem Wert `"Learn React"`.
- Wir definieren eine Funktion, deren Aufgabe es ist, `name` zu ändern, mit dem Namen `setName()`.
- `useState()` gibt diese beiden Dinge in einem Array zurück, also nutzen wir [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), um sie beiden in separaten Variablen zu speichern.

### Zustand lesen

Sie können den `name`-Zustand sofort in Aktion sehen. Fügen Sie dem Eingabefeld des Formulars ein `value`-Attribut hinzu und setzen Sie dessen Wert auf `name`. Ihr Browser wird "Learn React" innerhalb der Eingabe rendern.

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

Ändern Sie "Learn React" zu einem leeren String, wenn Sie fertig sind; dies wollen wir für unseren anfänglichen Zustand:

```jsx
const [name, setName] = useState("");
```

### Benutzerinput lesen

Bevor wir den Wert von `name` ändern können, müssen wir den Benutzereingaben erfassen, während sie tippen. Dafür können wir das `onChange`-Ereignis abhören. Lassen Sie uns eine `handleChange()`-Funktion schreiben und darauf im `<input />`-Element hören.

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

Derzeit wird sich der Wert unseres Eingabefelds nicht ändern, wenn Sie versuchen, Text einzugeben, aber Ihr Browser wird das Wort "Typing!" in die JavaScript-Konsole protokollieren, sodass wir wissen, dass unser Ereignis-Listener an das Eingabefeld angehängt ist.

Um die Benutzereingaben zu lesen, müssen wir auf die `value`-Eigenschaft des Eingabefelds zugreifen. Dies können wir tun, indem wir das `event`-Objekt lesen, welches `handleChange()` empfängt, wenn es aufgerufen wird. `event`, wiederum, hat [eine `target`-Eigenschaft](/de/docs/Web/API/Event/target), die das Element darstellt, das das `change`-Ereignis ausgelöst hat. Das ist unser Eingabefeld. Also ist `event.target.value` der Text innerhalb der Eingabe.

Sie können diesen Wert mit `console.log()` ausgeben, um ihn in der Konsole Ihres Browsers zu sehen. Versuchen Sie, die `handleChange()`-Funktion wie folgt zu aktualisieren, und geben Sie im Eingabefeld ein, um das Ergebnis in Ihrer Konsole zu sehen:

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

### Zustand aktualisieren

Protokollieren allein ist nicht genug – wir möchten tatsächlich speichern, was der Benutzer eingibt, und es in der Eingabe darstellen! Ändern Sie Ihren `console.log()`-Aufruf zu `setName()`, wie unten gezeigt:

```jsx
function handleChange(event) {
  setName(event.target.value);
}
```

Jetzt, wenn Sie in das Eingabefeld tippen, werden Ihre Tastenanschläge aufgezeichnet, wie Sie es erwarten würden.

Wir haben einen letzten Schritt: Wir müssen unsere `handleSubmit()`-Funktion so ändern, dass sie `props.addTask` mit `name` als Argument aufruft. Erinnern Sie sich noch an unser Callback-Prop? Dieses wird verwendet, um die Aufgabe an die `App`-Komponente zurückzusenden, damit wir sie zu einem späteren Zeitpunkt zu unserer Aufgabenliste hinzufügen können. Aus gutem Grund sollten Sie nach der Übermittlung Ihres Formulars das Eingabefeld leeren, daher rufen wir `setName()` erneut mit einem leeren String auf, um dies zu tun:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask(name);
  setName("");
}
```

Schließlich können Sie etwas in das Eingabefeld in Ihrem Browser eingeben und auf _Add_ klicken – was auch immer Sie eingegeben haben, wird in einem Warnungsdialog angezeigt.

Ihr `Form.jsx`-Datei sollte jetzt so aussehen:

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
> Sie werden feststellen, dass Sie in der Lage sind, leere Aufgaben zu übermitteln, indem Sie einfach auf den `Add`-Button klicken, ohne einen Aufgabennamen einzugeben. Können Sie sich eine Möglichkeit vorstellen, dies zu verhindern? Als Hinweis: Sie müssen wahrscheinlich eine Art Überprüfung in die `handleSubmit()`-Funktion einfügen.

## Alles zusammenfügen: Hinzufügen einer Aufgabe

Da wir uns nun mit Ereignissen, Callback-Props und Hooks vertraut gemacht haben, sind wir bereit, eine Funktionalität zu schreiben, die es einem Benutzer ermöglicht, eine neue Aufgabe aus seinem Browser hinzuzufügen.

### Aufgaben als Zustand

Wir müssen `useState` in `App.jsx` importieren, damit wir unsere Aufgaben im Zustand speichern können. Fügen Sie folgendes oben in Ihrer `App.jsx`-Datei hinzu:

```jsx
import { useState } from "react";
```

Wir wollen `props.tasks` in den `useState()`-Hook übergeben – das wird seinen Anfangszustand bewahren. Fügen Sie folgendes gleich zu Beginn der Definition Ihrer `App()`-Funktion hinzu:

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

Jetzt können wir unser `taskList`-Mapping so ändern, dass es das Ergebnis der Abbildung von `tasks` ist, anstatt `props.tasks`. Ihre `taskList`-Konstanten-Deklaration sollte jetzt so aussehen:

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

### Hinzufügen einer Aufgabe

Wir haben jetzt einen `setTasks`-Hook, den wir in unserer `addTask()`-Funktion verwenden können, um unsere Aufgabenliste zu aktualisieren. Es gibt nur ein Problem: Wir können das `name`-Argument von `addTask()` nicht einfach an `setTasks` übergeben, weil `tasks` ein Array von Objekten ist und `name` ein String. Wenn wir versuchen würden, dies zu tun, würde das Array durch den String ersetzt werden.

Zuerst müssen wir `name` in ein Objekt mit der gleichen Struktur wie unsere vorhandenen Aufgaben stecken. Innerhalb der `addTask()`-Funktion erstellen wir ein `newTask`-Objekt, das wir dem Array hinzufügen.

Dann müssen wir ein neues Array mit dieser neuen Aufgabe erstellen und dann den Zustand der Aufgabendaten auf diesen neuen Zustand aktualisieren. Dazu können wir Spread-Syntax verwenden, um [das vorhandene Array zu kopieren](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copying_an_array), und unser Objekt am Ende hinzufügen. Dann übergeben wir dieses Array an `setTasks()`, um den Zustand zu aktualisieren.

Alles zusammengefügt, sollte Ihre `addTask()`-Funktion so aussehen:

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

Jetzt können Sie den Browser verwenden, um eine Aufgabe zu unseren Daten hinzuzufügen! Tippen Sie etwas in das Formular ein und klicken Sie auf "Add" (oder drücken Sie die <kbd>Enter</kbd>-Taste) und Sie werden Ihren neuen To-Do-Artikel in der Benutzeroberfläche erscheinen sehen!

**Wir haben jedoch ein weiteres Problem**: Unsere `addTask()`-Funktion gibt jeder Aufgabe die gleiche `id`. Das ist schlecht für die Zugänglichkeit und macht es unmöglich für React, zukünftige Aufgaben mit der `key`-Prop zu unterscheiden. Tatsächlich wird React eine Warnung in der DevTools-Konsole geben – "Warning: Encountered two children with the same key…"

Wir müssen dies beheben. Einzigartige Identifikatoren zu erstellen ist ein schwieriges Problem - eines, für das die JavaScript-Gemeinschaft einige hilfreiche Bibliotheken geschrieben hat. Wir werden [nanoid](https://github.com/ai/nanoid) verwenden, weil es winzig und effektiv ist.

Stellen Sie sicher, dass Sie sich im Stammverzeichnis Ihrer Anwendung befinden und führen Sie den folgenden Terminalbefehl aus:

```bash
npm install nanoid
```

> [!NOTE]
> Wenn Sie yarn verwenden, benötigen Sie stattdessen folgendes: `yarn add nanoid`.

Jetzt können wir `nanoid` verwenden, um eindeutige IDs für unsere neuen Aufgaben zu erstellen. Zuerst importieren wir es, indem wir die folgende Zeile oben in `App.jsx` hinzufügen:

```jsx
import { nanoid } from "nanoid";
```

Aktualisieren wir jetzt `addTask()`, damit jede Aufgaben-ID ein Präfix `todo-` plus eine von nanoid generierte eindeutige Zeichenkette wird. Aktualisieren Sie Ihre `newTask`-Konstantendeklaration zu diesem:

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

Speichern Sie alles und testen Sie Ihre App erneut – jetzt können Sie Aufgaben hinzufügen, ohne die Warnung über doppelte IDs zu erhalten.

## Umweg: Aufgaben zählen

Jetzt, da wir neue Aufgaben hinzufügen können, bemerken Sie möglicherweise ein Problem: Unsere Überschrift lautet "3 tasks remaining", egal wie viele Aufgaben wir haben! Wir können das beheben, indem wir die Länge von `taskList` zählen und den Text unserer Überschrift entsprechend ändern.

Fügen Sie dies innerhalb Ihrer `App()`-Definition, vor der Return-Anweisung, hinzu:

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

Das ist fast richtig, außer dass, wenn unsere Liste jemals eine einzige Aufgabe enthält, die Überschrift immer noch das Wort „tasks“ verwenden wird. Wir können dies auch zu einer Variablen machen. Aktualisieren Sie den Code, den Sie gerade hinzugefügt haben, wie folgt:

```jsx
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

Jetzt können Sie den Textinhalt der Listenüberschrift mit der `headingText`-Variablen ersetzen. Aktualisieren Sie Ihr `<h2>` wie folgt:

```jsx
<h2 id="list-heading">{headingText}</h2>
```

Speichern Sie die Datei, gehen Sie zurück zu Ihrem Browser und versuchen Sie, einige Aufgaben hinzuzufügen: Der Zähler sollte sich nun wie erwartet aktualisieren.

## Abschluss einer Aufgabe

Ihnen ist vielleicht aufgefallen, dass sich ein Kästchen, wenn Sie darauf klicken, entsprechend markiert und demarkiert. Als Feature von HTML weiß der Browser, wie er merkt, welche Kontrollkästchen aktiviert oder deaktiviert sind, ohne unsere Hilfe. Dieses Feature verbirgt jedoch ein Problem: Das Umschalten eines Kontrollkästchens ändert nicht den Zustand in unserer React-Anwendung. Das bedeutet, dass Browser und unsere App jetzt nicht mehr synchron sind. Wir müssen unseren eigenen Code schreiben, um den Browser wieder mit unserer App zu synchronisieren.

### Den Fehler beweisen

Bevor wir das Problem beheben, lassen Sie uns beobachten, wie es passiert.

Wir beginnen, indem wir eine `toggleTaskCompleted()`-Funktion in unserer `App()`-Komponente schreiben. Diese Funktion hat einen `id`-Parameter, den wir jedoch noch nicht nutzen werden. Für jetzt werden wir das erste Element im Array in der Konsole protokollieren – wir werden überprüfen, was passiert, wenn wir es im Browser markieren oder demarkieren:

Fügen Sie dies direkt über Ihrer `taskList`-Konstanten-Deklaration hinzu:

```jsx
function toggleTaskCompleted(id) {
  console.log(tasks[0]);
}
```

Als nächstes fügen wir `toggleTaskCompleted` zu den Props jeder `<Todo />`-Komponente hinzu, die innerhalb unserer `taskList` gerendert wird; aktualisieren Sie sie wie folgt:

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

Gehen Sie als nächstes zu Ihrer `Todo.jsx`-Komponente und fügen Sie Ihrem `<input />`-Element einen `onChange`-Handler hinzu, der eine anonyme Funktion verwenden sollte, um `props.toggleTaskCompleted()` mit einem Parameter von `props.id` aufzurufen. Das `<input />` sollte nun so aussehen:

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

Speichern Sie alles und kehren Sie zu Ihrem Browser zurück und bemerken Sie, dass unsere erste Aufgabe, Eat (Essen), markiert ist. Öffnen Sie Ihre JavaScript-Konsole und klicken Sie dann auf das Kontrollkästchen neben Essen. Es demarkiert sich, wie wir es erwarten. Ihre JavaScript-Konsole jedoch wird etwas wie dies protokollieren:

```plain
Object { id: "task-0", name: "Eat", completed: true }
```

Das Kontrollkästchen demarkiert sich im Browser, aber unsere Konsole teilt uns mit, dass Essen noch immer als abgeschlossen gilt. Dies beheben wir als nächstes!

### Den Browser mit unseren Daten synchronisieren

Lassen Sie uns unsere `toggleTaskCompleted()`-Funktion in `App.jsx` erneut besuchen. Wir wollen, dass sie die `completed`-Eigenschaft nur der Aufgabe ändert, die umgeschaltet wurde, und alle anderen unberührt lässt. Dazu werden wir über die Aufgabenliste `map()` verwenden und nur das ändern, was wir abgeschlossen haben.

Aktualisieren Sie Ihre `toggleTaskCompleted()`-Funktion zu folgenden:

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

Hier definieren wir eine `updatedTasks`-Konstante, die über das ursprüngliche `tasks`-Array mappt. Wenn die `id`-Eigenschaft der Aufgabe mit der an die Funktion übergebenen `id` übereinstimmt, verwenden wir die [Objektspread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um ein neues Objekt zu erstellen und die `completed`-Eigenschaft dieses Objekts umzuschalten, bevor wir es zurückgeben. Wenn es nicht übereinstimmt, geben wir das Originalobjekt zurück.

Dann rufen wir `setTasks()` mit diesem neuen Array auf, um unseren Zustand zu aktualisieren.

## Eine Aufgabe löschen

Das Löschen einer Aufgabe folgt einem ähnlichen Muster wie das Umschalten ihres abgeschlossenen Zustands: Wir müssen eine Funktion definieren, um unseren Zustand zu aktualisieren und diese dann als Prop an `<Todo />` übergeben und sie aufrufen, wenn das richtige Ereignis eintritt.

### Die `deleteTask` Callback-Prop

Beginnen wir hier, indem wir eine `deleteTask()`-Funktion in Ihrer `App`-Komponente schreiben. Wie `toggleTaskCompleted()` nimmt diese Funktion einen `id`-Parameter und wir werden diese `id` in der Konsole protokollieren, um zu beginnen. Fügen Sie Folgendes unter `toggleTaskCompleted()` hinzu:

```jsx
function deleteTask(id) {
  console.log(id);
}
```

Fügen Sie als Nächstes ein weiteres Callback-Prop zu unserem Array von `<Todo />`-Komponenten hinzu:

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

In `Todo.jsx` möchten wir `props.deleteTask()` aufrufen, wenn die "Delete"-Taste gedrückt wird. `deleteTask()` muss die ID der aufrufenden Aufgabe wissen, damit es die richtige Aufgabe aus dem Zustand löschen kann.

Aktualisieren Sie den "Delete"-Button in `Todo.jsx`, wie folgt:

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

Jetzt, wenn Sie auf einen der "Delete"-Buttons in der App klicken, sollte Ihre Browserkonsole die ID der zugehörigen Aufgabe protokollieren.

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

## Aufgaben aus Zustand und UI löschen

Nun, da wir wissen, dass `deleteTask()` korrekt aufgerufen wird, können wir unseren `setTasks()`-Hook in `deleteTask()` verwenden, um diese Aufgabe aus dem Zustand der App tatsächlich zu entfernen, sowie sie visuell in der App-UI zu entfernen. Da `setTasks()` ein Array als Argument erwartet, sollten wir ihm ein neues Array zur Verfügung stellen, das die vorhandenen Aufgaben kopiert, _ohne_ die Aufgabe, deren ID mit der an `deleteTask()` übergebenen übereinstimmt.

Dies ist eine perfekte Gelegenheit, [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) zu verwenden. Wir können jede Aufgabe testen und eine Aufgabe aus dem neuen Array ausschließen, wenn ihre `id`-Prop mit der `id`-Argument übereinstimmt, die an `deleteTask()` übergeben wurde.
Aktualisieren Sie die `deleteTask()`-Funktion innerhalb Ihrer `App.jsx`-Datei wie folgt:

```jsx
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}
```

Testen Sie Ihre App erneut. Jetzt sollten Sie in der Lage sein, eine Aufgabe aus Ihrer App zu löschen!

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

Das reicht für einen Artikel. Hier haben wir Ihnen die Grundlagen erklärt, wie React mit Ereignissen umgeht und mit Zuständen umgeht, und Funktionen implementiert, um Aufgaben hinzuzufügen, Aufgaben zu löschen und Aufgaben als abgeschlossen zu markieren. Wir sind fast am Ziel. Im nächsten Artikel implementieren wir Funktionen, um bestehende Aufgaben zu bearbeiten und die Liste der Aufgaben zwischen allen zu filtern, abgeschlossene und unvollständige Aufgaben. Dabei werden wir auf bedingte UI-Rendering eingehen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
