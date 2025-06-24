---
title: "React-Interaktivität: Ereignisse und Zustand"
short-title: React-Ereignisse und Zustand
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}

Nachdem unser Komponentenplan erarbeitet wurde, ist es nun an der Zeit, unsere App von einer vollständig statischen Benutzeroberfläche zu einer zu aktualisieren, die es uns tatsächlich erlaubt, mit ihr zu interagieren und Dinge zu ändern. In diesem Artikel werden wir dies tun, indem wir uns mit Ereignissen und Zustand befassen und mit einer App enden, in der wir erfolgreich Aufgaben hinzufügen und löschen sowie Aufgaben als erledigt markieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Umgang mit Ereignissen und Zustand in React und deren Nutzung, um die Beispiel-App interaktiv zu gestalten.
      </td>
    </tr>
  </tbody>
</table>

## Umgang mit Ereignissen

Wenn Sie bisher nur einfaches JavaScript geschrieben haben, sind Sie vielleicht daran gewöhnt, eine separate JavaScript-Datei zu haben, in der Sie einige DOM-Knoten abfragen und Listener an diese anhängen. In einem HTML-Dokument könnte beispielsweise ein Button wie folgt vorhanden sein:

```html
<button type="button">Say hi!</button>
```

Und eine JavaScript-Datei könnte einige Codeteile wie diesen enthalten:

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("hi!");
});
```

In JSX steht der Code, der die Benutzeroberfläche beschreibt, direkt neben unseren Ereignis-Listenern:

```jsx
<button type="button" onClick={() => alert("hi!")}>
  Say hi!
</button>
```

In diesem Beispiel fügen wir dem `<button>`-Element ein `onClick`-Attribut hinzu. Der Wert dieses Attributs ist eine Funktion, die einen Alert auslöst. Dies mag gegen die beste Praxis erscheinen, keine Ereignis-Listener in HTML zu schreiben, aber denken Sie daran: JSX ist kein HTML.

Das `onClick`-Attribut hat hier eine besondere Bedeutung: Es weist React an, eine bestimmte Funktion auszuführen, wenn der Benutzer auf den Button klickt. Es gibt ein paar weitere Dinge zu beachten:

- Das {{Glossary("camel_case", "„camel-cased“")}} Format von `onClick` ist wichtig – JSX erkennt `onclick` nicht (es wird bereits in JavaScript für einen bestimmten Zweck verwendet, der ähnlich, aber anders ist – standardmäßige [`onclick`](/de/docs/Web/API/Element/click_event)-Handler-Eigenschaften).
- Alle Browser-Ereignisse folgen in JSX diesem Format – `on`, gefolgt vom Namen des Ereignisses.

Wenden wir dies auf unsere App an, beginnend mit der `Form.jsx` Komponente.

### Umgang mit dem Absenden von Formularen

Erstellen Sie zu Beginn der `Form()`-Komponentenfunktion (d.h. direkt unter der `function Form() {` Zeile) eine Funktion namens `handleSubmit()`. Diese Funktion sollte [das Standardverhalten des `submit`-Ereignisses verhindern](/de/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behavior). Danach sollte sie einen `alert()` auslösen, der alles sagen kann, was Sie möchten. Sie sollte in etwa so aussehen:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  alert("Hello, world!");
}
```

Um diese Funktion zu verwenden, fügen Sie dem [`<form>`](/de/docs/Web/HTML/Reference/Elements/form)-Element ein `onSubmit`-Attribut hinzu und setzen dessen Wert auf die `handleSubmit`-Funktion:

```jsx
<form onSubmit={handleSubmit}>{/* … */}</form>
```

Wenn Sie jetzt zu Ihrem Browser zurückkehren und auf die Schaltfläche „Hinzufügen“ klicken, zeigt Ihr Browser ein Alert-Dialogfeld mit den Worten „Hallo, Welt!“ an — oder was auch immer Sie dort geschrieben haben.

## Callback-Props

In React-Anwendungen ist Interaktivität selten nur auf eine Komponente beschränkt: Ereignisse, die in einer Komponente passieren, wirken sich auf andere Teile der App aus. Wenn wir uns die Möglichkeit geben, neue Aufgaben zu erstellen, werden Dinge, die in der `<Form />`-Komponente passieren, die Liste beeinflussen, die in `<App />` gerendert wird.

Wir möchten, dass unsere `handleSubmit()`-Funktion uns letztendlich hilft, eine neue Aufgabe zu erstellen. Daher benötigen wir eine Möglichkeit, Informationen von `<Form />` an `<App />` zu übergeben. Wir können Daten nicht vom Kind zum Elternteil auf die gleiche Weise übergeben, wie wir Daten über standardmäßige Props vom Elternteil zum Kind übergeben können. Stattdessen können wir eine Funktion in `<App />` schreiben, die einige Daten von unserem Formular als Eingabe erwartet, und dann diese Funktion als Prop an `<Form />` übergeben. Diese Funktion-als-Prop wird als **Callback-Prop** bezeichnet. Sobald wir unseren Callback-Prop haben, können wir ihn innerhalb von `<Form />` aufrufen, um die richtigen Daten an `<App />` zu senden.

### Bearbeitung der Formularübermittlung über Callbacks

Erstellen Sie innerhalb der `App()`-Funktion in `App.jsx` eine Funktion namens `addTask()`, die einen einzelnen Parameter namens `name` hat:

```jsx
function addTask(name) {
  alert(name);
}
```

Anschließend übergeben Sie `addTask()` als Prop an `<Form />`. Das Prop kann einen beliebigen Namen haben, aber wählen Sie einen Namen, den Sie später verstehen. Etwas wie `addTask` funktioniert, weil es sowohl dem Namen der Funktion als auch dem entspricht, was die Funktion tun wird. Ihr Aufruf der `<Form />`-Komponente sollte wie folgt aktualisiert werden:

```jsx
<Form addTask={addTask} />
```

Um dieses Prop zu verwenden, müssen wir die Signatur der `Form()`-Funktion in `Form.jsx` ändern, damit sie `props` als Parameter akzeptiert:

```jsx
function Form(props) {
  // …
}
```

Schließlich können wir dieses Prop innerhalb der `handleSubmit()`-Funktion in Ihrer `<Form />`-Komponente verwenden! Aktualisieren Sie es wie folgt:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask("Say hello!");
}
```

Ein Klick auf die Schaltfläche „Hinzufügen“ in Ihrem Browser wird beweisen, dass die `addTask()`-Callback-Funktion funktioniert, aber es wäre schön, wenn wir den Alert sehen könnten, um zu zeigen, was wir in unser Eingabefeld eingeben! Das werden wir als Nächstes tun.

### Abseits: eine Anmerkung zu Namenskonventionen

Wir haben die `addTask()`-Funktion als Prop `addTask` in die `<Form />`-Komponente eingefügt, damit die Beziehung zwischen der `addTask()` _Funktion_ und dem `addTask` _Prop_ möglichst klar bleibt. Beachten Sie jedoch, dass Prop-Namen nicht _unbedingt_ etwas Besonderes sein müssen. Wir hätten `addTask()` unter jedem anderen Namen in `<Form />` einfügen können, zum Beispiel so:

```diff
- <Form addTask={addTask} />
+ <Form onSubmit={addTask} />
```

Dies würde die `addTask()`-Funktion der `<Form />`-Komponente als Prop `onSubmit` verfügbar machen. Dieses Prop könnte in `Form.jsx` wie folgt verwendet werden:

```diff
function handleSubmit(event) {
  event.preventDefault();
- props.addTask("Say hello!");
+ props.onSubmit("Say hello!");
}
```

Hier weist uns das Präfix `on` darauf hin, dass das Prop eine Callback-Funktion ist; `Submit` ist unser Hinweis darauf, dass ein Submit-Ereignis diese Funktion auslösen wird.

Während Callback-Props oft den Namen von vertrauten Ereignis-Handlern wie `onSubmit` oder `onClick` haben, können sie fast alles genannt werden, was hilft, ihre Bedeutung klar zu machen. Eine hypothetische `<Menu />`-Komponente könnte eine Callback-Funktion beinhalten, die ausgeführt wird, wenn das Menü geöffnet wird, sowie eine separate Callback-Funktion, die ausgeführt wird, wenn es geschlossen wird:

```jsx
<Menu onOpen={() => console.log("Hi!")} onClose={() => console.log("Bye!")} />
```

Diese `on*`-Namenskonvention ist im React-Ökosystem sehr verbreitet. Behalten Sie sie im Hinterkopf, während Sie weiter lernen. Zur besseren Klarheit bleiben wir im Rest dieses Tutorials bei Namen wie `addTask` und ähnlichen Prop-Namen. Wenn Sie während dieses Abschnitts Prop-Namen geändert haben, stellen Sie sicher, dass Sie sie zurück ändern, bevor Sie fortfahren!

## Speicherung und Änderung von Daten mit Zustand

Bisher haben wir Props verwendet, um Daten durch unsere Komponenten zu übergeben, und das hat uns gut gedient. Da wir es jetzt jedoch mit Interaktivität zu tun haben, benötigen wir die Möglichkeit, neue Daten zu erstellen, sie zu speichern und später zu aktualisieren. Props sind dafür nicht das richtige Werkzeug, da sie unveränderlich sind — eine Komponente kann ihre eigenen Props nicht ändern oder erstellen.

Hier kommt der **Zustand** ins Spiel. Wenn wir Props als eine Möglichkeit betrachten, zwischen Komponenten zu kommunizieren, können wir Zustand als eine Möglichkeit betrachten, Komponenten „Speicher“ zu geben – Informationen, die sie behalten und bei Bedarf aktualisieren können.

React stellt eine spezielle Funktion zur Verfügung, um Zustand in eine Komponente einzuführen, die passenderweise `useState()` genannt wird.

> [!NOTE] > `useState()` gehört zu einer speziellen Kategorie von Funktionen namens **Hooks**, von denen jede verwendet werden kann, um einer Komponente neue Funktionalität hinzuzufügen. Wir werden später über andere Hooks lernen.

Um `useState()` zu verwenden, müssen wir es aus dem React-Modul importieren. Fügen Sie die folgende Zeile oben in Ihrer `Form.jsx` Datei hinzu, oberhalb der `Form()`-Funktionsdefinition:

```jsx
import { useState } from "react";
```

`useState()` nimmt ein Argument, das den Anfangswert des Zustands bestimmt. Dieses Argument kann ein String, eine Zahl, ein Array, ein Objekt oder ein beliebiger anderer JavaScript-Datentyp sein. `useState()` gibt ein Array mit zwei Elementen zurück. Das erste Element ist der aktuelle Wert des Zustands; das zweite Element ist eine Funktion, die verwendet werden kann, um den Zustand zu aktualisieren.

Lassen Sie uns einen `name`-Zustand erstellen. Schreiben Sie das Folgende über Ihrer `handleSubmit()`-Funktion, innerhalb von `Form()`:

```jsx
const [name, setName] = useState("Learn React");
```

In dieser Codezeile passieren mehrere Dinge:

- Wir definieren eine `name`-Konstante mit dem Wert `"Learn React"`.
- Wir definieren eine Funktion, deren Aufgabe es ist, `name` zu ändern, genannt `setName()`.
- `useState()` gibt diese zwei Dinge in einem Array zurück, sodass wir [array destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um sie beide in separaten Variablen zu erfassen.

### Lesen des Zustands

Sie können den `name`-Zustand sofort in Aktion sehen. Fügen Sie dem Eingabeelement des Formulars ein `value`-Attribut hinzu und setzen Sie dessen Wert auf `name`. Ihr Browser wird „Learn React“ in der Eingabe anzeigen.

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

Ändern Sie „Learn React“ auf einen leeren String, wenn Sie fertig sind; dies ist, was wir für unseren Anfangszustand wollen:

```jsx
const [name, setName] = useState("");
```

### Benutzer-Eingaben lesen

Bevor wir den Wert von `name` ändern können, müssen wir die Eingabe eines Benutzers erfassen, während er tippt. Dafür können wir das `onChange`-Ereignis abhören. Schreiben wir eine `handleChange()`-Funktion und lauschen Sie darauf beim `<input />`-Element.

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

Derzeit ändert sich der Wert unserer Eingabe nicht, wenn Sie versuchen, Text einzugeben, aber Ihr Browser protokolliert das Wort „Typing!“ in der JavaScript-Konsole, sodass wir wissen, dass unser Ereignis-Listener an die Eingabe gebunden ist.

Um die Keystrokes des Benutzers zu lesen, müssen wir auf die `value`-Eigenschaft der Eingabe zugreifen. Das können wir tun, indem wir das `event`-Objekt lesen, das `handleChange()` erhält, wenn es aufgerufen wird. `event` wiederum hat [eine `target`-Eigenschaft](/de/docs/Web/API/Event/target), die das Element darstellt, das das `change`-Ereignis ausgelöst hat. Das ist unsere Eingabe. `event.target.value` ist also der Text innerhalb der Eingabe.

Sie können diesen Wert mit `console.log()` sehen, um ihn in der Konsole Ihres Browsers zu sehen. Versuchen Sie, die `handleChange()`-Funktion wie folgt zu aktualisieren und geben Sie etwas in die Eingabe ein, um das Ergebnis in Ihrer Konsole zu sehen:

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

### Aktualisierung des Zustands

Protokollieren ist nicht genug — wir möchten tatsächlich speichern, was der Benutzer tippt, und es in der Eingabe anzeigen! Ändern Sie Ihren `console.log()`-Aufruf zu `setName()`, wie unten gezeigt:

```jsx
function handleChange(event) {
  setName(event.target.value);
}
```

Jetzt, wenn Sie in die Eingabe tippen, werden Ihre Keystrokes die Eingabe ausfüllen, wie Sie es erwarten würden.

Wir haben noch einen weiteren Schritt: Wir müssen unsere `handleSubmit()`-Funktion so ändern, dass sie `props.addTask` mit `name` als Argument aufruft. Erinnern Sie sich an unser Callback Prop? Dies wird dazu dienen, die Aufgabe an die `App`-Komponente zurückzusenden, damit wir sie zu einem späteren Zeitpunkt zu unserer Liste der Aufgaben hinzufügen können. Als eine Gute-Praxis-Frage sollten Sie die Eingabe löschen, nachdem Ihr Formular gesendet wurde, daher werden wir `setName()` erneut mit einem leeren String aufrufen, um dies zu tun:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask(name);
  setName("");
}
```

Endlich können Sie etwas in das Eingabefeld in Ihrem Browser eingeben und auf _Hinzufügen_ klicken — was auch immer Sie eingegeben haben, erscheint in einem Alert-Dialog.

Ihre `Form.jsx` Datei sollte nun so aussehen:

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
> Sie werden feststellen, dass Sie leere Aufgaben hinzufügen können, indem Sie einfach die `Add`-Taste drücken, ohne einen Aufgabennamen einzugeben. Können Sie sich überlegen, wie dies verhindert werden kann? Als Hinweis, Sie müssen wahrscheinlich eine Art Überprüfung in die `handleSubmit()`-Funktion einfügen.

## Alles zusammenfügen: Eine Aufgabe hinzufügen

Jetzt, da wir mit Ereignissen, Callback-Props und Hooks geübt haben, sind wir bereit, eine Funktion zu schreiben, die es einem Benutzer ermöglicht, eine neue Aufgabe von seinem Browser aus hinzuzufügen.

### Aufgaben als Zustand

Wir müssen `useState` in `App.jsx` importieren, damit wir unsere Aufgaben im Zustand speichern können. Fügen Sie dies oben in Ihrer `App.jsx` Datei hinzu:

```jsx
import { useState } from "react";
```

Wir möchten `props.tasks` in den `useState()`-Hook übergeben – dies wird seinen Anfangszustand bewahren. Fügen Sie das Folgende direkt am Anfang Ihrer `App()`-Funktionsdefinition hinzu:

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

Jetzt können wir unser `taskList`-Mapping so ändern, dass es das Ergebnis der Abbildung von `tasks` anstelle von `props.tasks` ist. Ihre `taskList`-Konstantendeklaration sollte nun so aussehen:

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

Wir haben jetzt einen `setTasks`-Hook, den wir in unserer `addTask()`-Funktion verwenden können, um unsere Liste der Aufgaben zu aktualisieren. Es gibt jedoch ein Problem: Wir können das `name`-Argument von `addTask()` nicht einfach in `setTasks` übergeben, da `tasks` ein Array von Objekten ist und `name` ein String ist. Wenn wir das versuchen würden, würde das Array durch den String ersetzt.

Zuallererst müssen wir `name` in ein Objekt mit der gleichen Struktur wie unsere vorhandenen Aufgaben setzen. Innerhalb der `addTask()`-Funktion erstellen wir ein `newTask`-Objekt, das dem Array hinzugefügt wird.

Dann müssen wir ein neues Array mit dieser neuen Aufgabe erstellen und dann den Zustand der Aufgabendaten auf diesen neuen Zustand aktualisieren. Dafür können wir Spread-Syntax verwenden, um [das vorhandene Array zu kopieren](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copying_an_array), und unser Objekt am Ende hinzufügen. Dann übergeben wir dieses Array an `setTasks()`, um den Zustand zu aktualisieren.

Wenn Sie das alles zusammenfügen, sollte Ihre `addTask()`-Funktion so aussehen:

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

Jetzt können Sie den Browser verwenden, um eine Aufgabe zu unseren Daten hinzuzufügen! Geben Sie irgendetwas in das Formular ein und klicken Sie auf „Hinzufügen“ (oder drücken Sie die <kbd>Eingabetaste</kbd>) und Sie sehen Ihr neues To-Do-Element in der Benutzeroberfläche erscheinen!

**Allerdings haben wir ein weiteres Problem**: Unsere `addTask()`-Funktion gibt jeder Aufgabe die gleiche `id`. Dies ist schlecht für die Zugänglichkeit und macht es für React unmöglich, zukünftige Aufgaben mit dem `key`-Prop voneinander zu unterscheiden. Tatsächlich wird React eine Warnung in Ihrer DevTools-Konsole geben – "Warnung: Zwei Kinder mit demselben Schlüssel gefunden…"

Wir müssen das beheben. Einzigartige Bezeichner zu erstellen, ist ein schwerwiegendes Problem – eines, für das die JavaScript-Gemeinschaft einige hilfreiche Bibliotheken geschrieben hat. Wir werden [nanoid](https://github.com/ai/nanoid) verwenden, weil es winzig ist und funktioniert.

Stellen Sie sicher, dass Sie sich im Stammverzeichnis Ihrer Anwendung befinden, und führen Sie den folgenden Terminalbefehl aus:

```bash
npm install nanoid
```

> [!NOTE]
> Wenn Sie Yarn verwenden, benötigen Sie stattdessen das folgende: `yarn add nanoid`.

Jetzt können wir `nanoid` verwenden, um eindeutige IDs für unsere neuen Aufgaben zu erstellen. Importieren Sie es zuerst, indem Sie die folgende Zeile oben in Ihre `App.jsx` Datei aufnehmen:

```jsx
import { nanoid } from "nanoid";
```

Aktualisieren wir nun `addTask()`, damit jede Aufgaben-ID zum Präfix `todo-` plus einer einzigartigen Zeichenfolge wird, die von nanoid generiert wird. Aktualisieren Sie Ihre `newTask`-Konstantendeklaration zu diesem:

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

Speichern Sie alles und probieren Sie Ihre App erneut aus — jetzt können Sie Aufgaben hinzufügen, ohne diese Warnung über doppelte IDs zu erhalten.

## Abstecher: Aufgaben zählen

Jetzt, da wir neue Aufgaben hinzufügen können, stellen Sie möglicherweise ein Problem fest: Unsere Überschrift lautet „3 Aufgaben verbleiben“, unabhängig davon, wie viele Aufgaben wir haben! Wir können dies beheben, indem wir die Länge von `taskList` zählen und den Text unserer Überschrift entsprechend ändern.

Fügen Sie dies innerhalb Ihres `App()`-Definition, vor der Rückgabeanweisung hinzu:

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

Das ist fast richtig, außer dass, wenn unsere Liste jemals eine einzelne Aufgabe enthält, die Überschrift weiterhin das Wort „tasks“ verwenden wird. Wir können dies ebenfalls zu einer Variablen machen. Aktualisieren Sie den Code, den Sie gerade hinzugefügt haben, wie folgt:

```jsx
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

Nun können Sie den Textinhalt der Listenüberschrift mit der `headingText`-Variablen ersetzen. Aktualisieren Sie Ihr `<h2>` so:

```jsx
<h2 id="list-heading">{headingText}</h2>
```

Speichern Sie die Datei, gehen Sie zurück zu Ihrem Browser und versuchen Sie, einige Aufgaben hinzuzufügen: Der Zähler sollte sich nun wie erwartet aktualisieren.

## Erledigung einer Aufgabe

Vielleicht bemerken Sie, dass, wenn Sie auf ein Kontrollkästchen klicken, es sich angemessen ein- und ausschaltet. Als Funktion von HTML weiß der Browser, wie er sich merken kann, welche Kontrollkästchen-Eingaben markiert oder nicht markiert sind, ohne unsere Hilfe. Diese Funktion verbirgt jedoch ein Problem: Das Umschalten eines Kontrollkästchens ändert nicht den Zustand in unserer React-Anwendung. Das bedeutet, dass der Browser und unsere App nun nicht mehr synchron sind. Wir müssen unseren eigenen Code schreiben, um den Browser zurück mit unserer App zu synchronisieren.

### Beweis des Fehlers

Bevor wir das Problem beheben, lassen Sie uns beobachten, dass es passiert.

Wir beginnen, indem wir eine `toggleTaskCompleted()`-Funktion in unserer `App()`-Komponente schreiben. Diese Funktion wird einen `id`-Parameter haben, aber wir werden ihn noch nicht verwenden. Vorerst werden wir die erste Aufgabe im Array an die Konsole protokollieren – wir werden inspizieren, was passiert, wenn wir sie in unserem Browser an- oder abwählen:

Fügen Sie dies direkt über Ihrer `taskList`-Konstantendeklaration hinzu:

```jsx
function toggleTaskCompleted(id) {
  console.log(tasks[0]);
}
```

Als nächstes fügen wir `toggleTaskCompleted` zu den Props jeder `<Todo />`-Komponente hinzu, die innerhalb unserer `taskList` gerendert wird; aktualisieren Sie es so:

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

Wechseln Sie als nächstes zu Ihrer `Todo.jsx`-Komponente und fügen Sie einen `onChange`-Handler zu Ihrem `<input />`-Element hinzu, das eine anonyme Funktion verwenden sollte, um `props.toggleTaskCompleted()` mit einem Parameter von `props.id` aufzurufen. Das `<input />` sollte nun so aussehen:

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

Speichern Sie alles und kehren Sie zu Ihrem Browser zurück und bemerken Sie, dass unsere erste Aufgabe, Essen, markiert ist. Öffnen Sie Ihre JavaScript-Konsole und klicken Sie dann auf das Kontrollkästchen neben Essen. Es wird abgewählt, wie erwartet. Ihre JavaScript-Konsole wird jedoch etwas so protokollieren:

```plain
Object { id: "task-0", name: "Eat", completed: true }
```

Das Kontrollkästchen wird im Browser abgewählt, aber unsere Konsole sagt uns, dass Essen immer noch abgeschlossen ist. Das werden wir als Nächstes beheben!

### Synchronisierung des Browsers mit unseren Daten

Sehen wir uns unsere `toggleTaskCompleted()`-Funktion in `App.jsx` erneut an. Wir möchten, dass sie die `completed`-Eigenschaft nur für die Aufgabe ändert, die umgeschaltet wurde, und alle anderen in Ruhe lässt. Dafür werden wir `map()` über die Aufgabenliste ausführen und nur diejenige ändern, die wir abgeschlossen haben.

Aktualisieren Sie Ihre `toggleTaskCompleted()`-Funktion zu der folgenden:

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

Hier definieren wir eine `updatedTasks`-Konstante, die über das ursprüngliche `tasks`-Array mappt. Wenn die `id`-Eigenschaft der Aufgabe mit der `id` übereinstimmt, die der Funktion übergeben wurde, verwenden wir [Objekt-Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um ein neues Objekt zu erstellen, und schalten die `completed`-Eigenschaft dieses Objekts um, bevor wir es zurückgeben. Wenn es nicht übereinstimmt, geben wir das ursprüngliche Objekt zurück.

Dann rufen wir `setTasks()` mit diesem neuen Array auf, um unseren Zustand zu aktualisieren.

## Löschen einer Aufgabe

Das Löschen einer Aufgabe folgt einem ähnlichen Muster wie das Umschalten ihres abgeschlossenen Zustands: Wir müssen eine Funktion für die Aktualisierung unserer Zustände definieren, dann diese Funktion als Prop in `<Todo />` übergeben und sie aufrufen, wenn das richtige Ereignis passiert.

### Der `deleteTask` Callback-Prop

Hier beginnen wir, indem wir eine `deleteTask()`-Funktion in Ihrer `App`-Komponente schreiben. Wie `toggleTaskCompleted()` nimmt diese Funktion einen `id`-Parameter an, und wir werden zunächst diese `id` in die Konsole protokollieren. Fügen Sie das Folgende unter `toggleTaskCompleted()` hinzu:

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

In `Todo.jsx` möchten wir `props.deleteTask()` aufrufen, wenn die Schaltfläche „Löschen“ gedrückt wird. `deleteTask()` muss die ID der Aufgabe kennen, die sie aufgerufen hat, damit sie die richtige Aufgabe aus dem Zustand löschen kann.

Aktualisieren Sie die „Löschen“-Schaltfläche in `Todo.jsx`, wie folgt:

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

Jetzt, wenn Sie auf eine der „Löschen“-Schaltflächen in der App klicken, sollte Ihre Browserkonsole die ID der zugehörigen Aufgabe protokollieren.

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

Jetzt, da wir wissen, dass `deleteTask()` korrekt aufgerufen wird, können wir unseren `setTasks()`-Hook in `deleteTask()` aufrufen, um tatsächlich diese Aufgabe aus dem Zustand der App und visuell in der App-Benutzeroberfläche zu löschen. Da `setTasks()` ein Array als Argument erwartet, sollten wir ihm ein neues Array bereitstellen, das die vorhandenen Aufgaben _ohne_ die Aufgabe kopiert, deren ID mit derjenigen übereinstimmt, die in `deleteTask()` übergeben wurde.

Dies ist eine perfekte Gelegenheit, um [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) zu verwenden. Wir können jede Aufgabe testen und eine Aufgabe aus dem neuen Array ausschließen, wenn ihr `id`-Prop mit dem `id`-Argument übereinstimmt, das in `deleteTask()` übergeben wird.

Aktualisieren Sie die `deleteTask()`-Funktion in Ihrer `App.jsx` Datei wie folgt:

```jsx
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}
```

Probieren Sie Ihre App erneut aus. Jetzt sollten Sie in der Lage sein, eine Aufgabe aus Ihrer App zu löschen!

An diesem Punkt sollte Ihre `App.jsx` Datei so aussehen:

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

Das reicht für einen Artikel. Hier haben wir Ihnen einen Überblick darüber gegeben, wie React mit Ereignissen umgeht und Zustände verwaltet, sowie Funktionalitäten implementiert, um Aufgaben hinzuzufügen, zu löschen und als erledigt zu markieren. Wir sind fast fertig. Im nächsten Artikel implementieren wir die Möglichkeit, bestehende Aufgaben zu bearbeiten und die Liste der Aufgaben zwischen allen, erledigten und unerledigten Aufgaben zu filtern. Dabei betrachten wir die bedingte UI-Rendering.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}
