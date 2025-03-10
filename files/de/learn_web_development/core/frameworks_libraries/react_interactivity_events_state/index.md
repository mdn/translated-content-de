---
title: "React-Interaktivität: Ereignisse und Zustand"
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}

Nachdem wir unseren Komponentenplan ausgearbeitet haben, ist es nun an der Zeit, unsere App von einer vollständig statischen Benutzeroberfläche zu einer interaktiven zu aktualisieren, die uns erlaubt, Dinge zu verändern. In diesem Artikel werden wir das tun, indem wir uns mit Ereignissen und Zustand befassen. Am Ende werden wir eine App haben, in der wir erfolgreich Aufgaben hinzufügen und löschen sowie Aufgaben als erledigt markieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, sowie mit dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/der Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Umgang mit Ereignissen und Zustand in React und deren Nutzung, um die Studie-App interaktiv zu machen.
      </td>
    </tr>
  </tbody>
</table>

## Umgang mit Ereignissen

Falls Sie bisher nur reines JavaScript geschrieben haben, sind Sie vielleicht daran gewöhnt, eine separate JavaScript-Datei zu haben, in der Sie einige DOM-Knoten abfragen und Listener an diese anhängen. Beispielsweise könnte eine HTML-Datei einen Button enthalten, wie dieser:

```html
<button type="button">Say hi!</button>
```

Und eine JavaScript-Datei könnte dann so aussehen:

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("hi!");
});
```

In JSX befindet sich der Code, der die Benutzeroberfläche beschreibt, direkt neben unseren Ereignis-Listenern:

```jsx
<button type="button" onClick={() => alert("hi!")}>
  Say hi!
</button>
```

In diesem Beispiel fügen wir dem {{htmlelement("button")}}-Element ein `onClick`-Attribut hinzu. Der Wert dieses Attributs ist eine Funktion, die eine Benachrichtigung auslöst. Dies mag der bewährten Praxis, keine Listener in HTML zu schreiben, widersprechen, aber denken Sie daran: JSX ist nicht HTML.

Das `onClick`-Attribut hat hier eine besondere Bedeutung: Es teilt React mit, eine bestimmte Funktion auszuführen, wenn der Benutzer auf den Button klickt. Dabei gibt es einige Dinge zu beachten:

- Die {{Glossary("camel_case", "camelCase-Schreibweise")}} von `onClick` ist wichtig — JSX erkennt `onclick` nicht (es wird bereits in JavaScript für einen bestimmten Zweck verwendet, der ähnlich, aber anders ist — die Standard-[`onclick`](/de/docs/Web/API/Element/click_event)-Handler-Eigenschaften).
- Alle Browsereignisse folgen in JSX diesem Format – `on`, gefolgt vom Namen des Ereignisses.

Lassen Sie uns dies auf unsere App anwenden, beginnend im `Form.jsx`-Komponenten.

### Umgang mit der Formularübermittlung

Erstellen Sie oben in der `Form()`-Komponentenfunktion (d. h. direkt unter der `function Form() {`-Zeile) eine Funktion namens `handleSubmit()`. Diese Funktion sollte das [Standardverhalten des `submit`-Ereignisses verhindern](/de/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behavior). Danach sollte sie einen `alert()` auslösen, den Sie frei gestalten können. So sollte es in etwa aussehen:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  alert("Hello, world!");
}
```

Um diese Funktion zu nutzen, fügen Sie dem `<form>`-Element ein `onSubmit`-Attribut hinzu und setzen dessen Wert auf die `handleSubmit`-Funktion:

```jsx
<form onSubmit={handleSubmit}>
```

Wenn Sie jetzt wieder zu Ihrem Browser zurückkehren und auf den "Add"-Button klicken, zeigt Ihr Browser ein Benachrichtigungsdialog mit den Worten "Hello, world!" an – oder was auch immer Sie dort eingetragen haben.

## Callback-Props

In React-Anwendungen ist Interaktivität selten auf nur eine Komponente beschränkt: Ereignisse, die in einer Komponente auftreten, wirken sich oft auf andere Teile der Anwendung aus. Wenn wir die Möglichkeit bekommen, neue Aufgaben zu erstellen, werden Ereignisse, die in der `<Form />`-Komponente auftreten, die Liste beeinflussen, die in `<App />` gerendert wird.

Wir möchten, dass unsere `handleSubmit()`-Funktion letztendlich hilft, eine neue Aufgabe zu erstellen, also müssen wir einen Weg finden, Informationen von `<Form />` zu `<App />` zu übermitteln. Wir können Daten nicht von einem Kind- zu einem Elternelement auf die gleiche Weise weitergeben, wie wir Daten von einem Eltern- zu einem Kindelement mit Standard-Props weitergeben. Stattdessen können wir in `<App />` eine Funktion schreiben, die einige Daten unseres Formulars als Eingabe erwartet, und diese Funktion dann als Prop an `<Form />` übergeben. Diese Funktion-als-Prop wird **Callback-Prop** genannt. Sobald wir unsere Callback-Prop haben, können wir sie innerhalb von `<Form />` aufrufen, um die richtigen Daten an `<App />` zu senden.

### Umgang mit der Formularübermittlung über Callback-Props

In der `App()`-Funktion in `App.jsx`, erstellen Sie eine Funktion namens `addTask()`, die einen einzigen Parameter `name` hat:

```jsx
function addTask(name) {
  alert(name);
}
```

Als Nächstes übergeben Sie `addTask()` als Prop an `<Form />`. Das Prop kann jeden Namen haben, den Sie möchten, aber wählen Sie einen Namen, den Sie später verstehen werden. Etwas wie `addTask` funktioniert gut, weil es den Namen der Funktion und das, was die Funktion tun wird, wiedergibt. Der Aufruf der `<Form />`-Komponente sollte wie folgt aktualisiert werden:

```jsx
<Form addTask={addTask} />
```

Um dieses Prop zu verwenden, müssen wir die Signatur der `Form()`-Funktion in `Form.jsx` so ändern, dass sie `props` als Parameter akzeptiert:

```jsx
function Form(props) {
  // ...
}
```

Schließlich können wir dieses Prop innerhalb der `handleSubmit()`-Funktion in Ihrer `<Form />`-Komponente verwenden! Aktualisieren Sie es wie folgt:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask("Say hello!");
}
```

Wenn Sie im Browser auf den "Add"-Button klicken, wird bewiesen, dass die `addTask()`-Callback-Funktion funktioniert, aber es wäre schön, wenn wir die Benachrichtigung so gestalten könnten, dass sie uns zeigt, was wir in unser Eingabefeld eingeben! Das ist unser nächster Schritt.

### Hinweis: Eine Anmerkung zu Namenskonventionen

Wir haben die `addTask()`-Funktion als das Prop `addTask` in die `<Form />`-Komponente übergeben, damit die Beziehung zwischen der `addTask()`-Funktion und dem `addTask`-Prop so klar wie möglich bleibt. Denken Sie jedoch daran, dass Prop-Namen nichts Bestimmtes sein **müssen**. Wir hätten `addTask()` unter einem beliebigen anderen Namen in `<Form />` übergeben können, zum Beispiel so:

```diff
- <Form addTask={addTask} />
+ <Form onSubmit={addTask} />
```

Das würde die `addTask()`-Funktion in der `<Form />`-Komponente als `onSubmit`-Prop verfügbar machen. Dieses Prop könnte in `Form.jsx` so verwendet werden:

```diff
function handleSubmit(event) {
  event.preventDefault();
- props.addTask("Say hello!");
+ props.onSubmit("Say hello!");
}
```

Hier gibt uns das `on`-Präfix den Hinweis, dass das Prop eine Callback-Funktion ist; `Submit` ist unser Hinweis darauf, dass ein Submit-Ereignis diese Funktion auslösen wird.

Obwohl Callback-Props oft die Namen bekannter Ereignishandler wie `onSubmit` oder `onClick` widerspiegeln, können sie nach Belieben benannt werden, solange sie dabei helfen, ihre Bedeutung klarzumachen. Eine hypothetische `<Menu />`-Komponente könnte eine Callback-Funktion beinhalten, die beim Öffnen des Menüs ausgeführt wird, sowie eine separate Callback-Funktion, die beim Schließen des Menüs ausgeführt wird:

```jsx
<Menu onOpen={() => console.log("Hi!")} onClose={() => console.log("Bye!")} />
```

Diese `on*`-Namenskonvention ist sehr verbreitet im React-Ökosystem, merken Sie sie sich während Sie weiter lernen. Zur Klarheit bleiben wir bei `addTask` und ähnlichen Prop-Namen für den Rest dieses Tutorials. Falls Sie während des Lesens dieses Abschnitts irgendwelche Prop-Namen geändert haben, stellen Sie sicher, dass Sie sie zurück ändern, bevor Sie fortfahren!

## Daten mit Zustand beibehalten und ändern

Bisher haben wir Props verwendet, um Daten durch unsere Komponenten zu leiten, und das war für uns in Ordnung. Jetzt, da wir uns mit Interaktivität befassen, benötigen wir die Möglichkeit, neue Daten zu erstellen, sie zu behalten und später zu aktualisieren. Props sind dafür nicht das richtige Werkzeug, weil sie unveränderlich sind - eine Komponente kann ihre eigenen Props nicht ändern oder erstellen.

Hier kommt der **Zustand** ins Spiel. Wenn wir Props als Kommunikationsmittel zwischen Komponenten sehen, können wir Zustand als eine Möglichkeit betrachten, Komponenten "Gedächtnis" zu geben – Informationen, die sie bei Bedarf behalten und aktualisieren können.

React bietet eine spezielle Funktion zur Einführung von Zustand in eine Komponente, passend `useState()` genannt.

> **Hinweis:** `useState()` gehört zu einer speziellen Kategorie von Funktionen, die als **Hooks** bezeichnet werden, von denen jede zur Erweiterung einer Komponente genutzt werden kann. Später erfahren wir mehr über andere Hooks.

Um `useState()` zu verwenden, müssen wir es aus dem React-Modul importieren. Fügen Sie die folgende Zeile an der Spitze Ihrer `Form.jsx`-Datei hinzu, über der `Form()`-Funktionsdefinition:

```jsx
import { useState } from "react";
```

`useState()` nimmt ein einzelnes Argument entgegen, das den Anfangswert des Zustands bestimmt. Dieses Argument kann ein String, eine Zahl, ein Array, ein Objekt oder jeder andere JavaScript-Datentyp sein. `useState()` gibt ein Array mit zwei Elementen zurück. Das erste Element ist der aktuelle Wert des Zustands; das zweite Element ist eine Funktion, mit der der Zustand aktualisiert werden kann.

Erstellen wir einen `name`-Zustand. Schreiben Sie das Folgende über Ihre `handleSubmit()`-Funktion, innerhalb von `Form()`:

```jsx
const [name, setName] = useState("Learn React");
```

In dieser Codezeile passiert Folgendes:

- Wir definieren eine Konstante `name` mit dem Wert `"Learn React"`.
- Wir definieren eine Funktion, deren Aufgabe es ist, `name` zu ändern, diese wird `setName()` genannt.
- `useState()` gibt diese beiden Dinge in einem Array zurück, sodass wir [Array Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um sie in separaten Variablen zu erfassen.

### Zustand auslesen

Sie können den `name`-Zustand sofort in Aktion sehen. Fügen Sie ein `value`-Attribut zum Formular-Input hinzu und setzen Sie seinen Wert auf `name`. Ihr Browser wird "Learn React" im Eingabefeld rendern.

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

Ändern Sie "Learn React" in einen leeren String, sobald Sie fertig sind; das ist unser gewünschter Anfangszustand:

```jsx
const [name, setName] = useState("");
```

### Benutzereingaben erfassen

Bevor wir den Wert von `name` ändern können, müssen wir die Eingaben eines Benutzers erfassen, während er/sie tippt. Dafür können wir das `onChange`-Ereignis überwachen. Schreiben wir eine `handleChange()`-Funktion und hören Sie auf das `<input />`-Element.

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

Derzeit wird sich der Wert des Eingabefelds nicht ändern, wenn Sie versuchen, darin zu tippen, aber Ihr Browser wird das Wort "Typing!" in die JavaScript-Konsole protokollieren, damit wir wissen, dass unser Ereignis-Listener an das Eingabefeld angeschlossen wurde.

Um die Tastenanschläge des Benutzers zu erfassen, müssen wir auf die `value`-Eigenschaft des Eingabefelds zugreifen. Dazu können wir das `event`-Objekt lesen, das `handleChange()` erhält, wenn es aufgerufen wird. `event` hat wiederum [eine Eigenschaft namens `target`](/de/docs/Web/API/Event/target), die das Element repräsentiert, das das `change`-Ereignis ausgelöst hat. Das ist unser Eingabefeld. Also ist `event.target.value` der Text innerhalb der Eingabe.

Sie können `console.log()` verwenden, um diesen Wert in der Konsole Ihres Browsers zu sehen. Versuchen Sie, die `handleChange()`-Funktion wie folgt zu aktualisieren und tippen Sie in das Eingabefeld, um das Ergebnis in Ihrer Konsole zu sehen:

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

### Zustand aktualisieren

Protokollieren reicht nicht aus — wir möchten tatsächlich speichern, was der Benutzer tippt und es in der Eingabe rendern! Ändern Sie Ihren `console.log()`-Aufruf in `setName()`, wie unten gezeigt:

```jsx
function handleChange(event) {
  setName(event.target.value);
}
```

Jetzt füllt sich das Eingabefeld bei der Eingabe Ihrer Tastenanschläge, wie man es erwarten würde.

Wir haben noch einen weiteren Schritt: Wir müssen unsere `handleSubmit()`-Funktion so ändern, dass sie `props.addTask` mit `name` als Argument aufruft. Erinnern Sie sich an unser Callback-Prop? Dadurch wird die Aufgabe an die `App`-Komponente zurückgegeben, damit wir sie später in unsere Liste der Aufgaben aufnehmen können. Aus Gründen der guten Praxis sollten Sie die Eingabe löschen, nachdem Ihr Formular übermittelt wurde. Dafür rufen wir erneut `setName()` mit einem leeren String auf:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask(name);
  setName("");
}
```

Endlich können Sie etwas in das Eingabefeld im Browser eingeben und auf _Add_ klicken — was auch immer Sie eingegeben haben, erscheint in einem Benachrichtigungsfenster.

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
> Sie werden feststellen, dass Sie leere Aufgaben übermitteln können, indem Sie einfach auf die Schaltfläche `Add` klicken, ohne einen Aufgabennamen einzugeben. Können Sie sich eine Möglichkeit vorstellen, dies zu verhindern? Ein Hinweis: Sie müssen wahrscheinlich eine Art Überprüfung in die `handleSubmit()`-Funktion einfügen.

## Alles zusammenfügen: Hinzufügen einer Aufgabe

Jetzt, da wir mit Ereignissen, Callback-Props und Hooks geübt haben, sind wir bereit, die Funktionalität zu implementieren, die es einem Benutzer ermöglicht, eine neue Aufgabe von seinem/ihrem Browser aus hinzuzufügen.

### Aufgaben als Zustand

Wir müssen `useState` in `App.jsx` importieren, damit wir unsere Aufgaben im Zustand speichern können. Fügen Sie Folgendes an der Spitze Ihrer `App.jsx`-Datei hinzu:

```jsx
import { useState } from "react";
```

Wir möchten `props.tasks` in den `useState()`-Hook übergeben - dies wird seinen Anfangszustand bewahren. Fügen Sie Folgendes ganz oben in Ihrer `App()`-Funktionsdefinition hinzu:

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

Nun können wir unser `taskList`-Mapping so ändern, dass es das Ergebnis des Mappings von `tasks` anstelle von `props.tasks` ist. Ihre `taskList`-Konstantendeklaration sollte jetzt so aussehen:

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

Wir haben jetzt einen `setTasks`-Hook, den wir in unserer `addTask()`-Funktion verwenden können, um unsere Aufgabenliste zu aktualisieren. Es gibt jedoch ein Problem: Wir können das `name`-Argument von `addTask()` nicht einfach an `setTasks` übergeben, da `tasks` ein Array von Objekten ist und `name` ein String. Würden wir dies versuchen, würde das Array durch den String ersetzt werden.

Zunächst müssen wir `name` in ein Objekt mit der gleichen Struktur wie unsere bestehenden Aufgaben einfügen. Innerhalb der `addTask()`-Funktion erstellen wir ein `newTask`-Objekt, das zum Array hinzugefügt wird.

Dann müssen wir ein neues Array mit dieser neuen Aufgabe erstellen und den Zustand der Aufgabendaten auf diesen neuen Zustand aktualisieren. Dazu können wir die Spread-Syntax verwenden, um [das bestehende Array zu kopieren](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copying_an_array), und unser Objekt am Ende hinzufügen. Diesen Array übergeben wir dann an `setTasks()`, um den Zustand zu aktualisieren.

Zusammengefasst sollte Ihre `addTask()`-Funktion nun so aussehen:

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

Jetzt können Sie mit dem Browser eine Aufgabe zu unseren Daten hinzufügen! Tippen Sie etwas ins Formular und klicken Sie auf "Add" (oder drücken Sie die <kbd>Enter</kbd>-Taste) und Sie sehen Ihren neuen Todo-Eintrag in der Benutzeroberfläche!

**Allerdings haben wir ein weiteres Problem**: Unsere `addTask()`-Funktion gibt jeder Aufgabe die gleiche `id`. Das ist schlecht für die Barrierefreiheit und macht es unmöglich für React, zukünftige Aufgaben mit dem `key`-Prop auseinanderzuhalten. Tatsächlich wird Ihnen React in Ihrer DevTools-Konsole eine Warnung ausgeben — "Warning: Encountered two children with the same key…"

Wir müssen das beheben. Eindeutige Identifikatoren zu erstellen, ist ein schwieriges Problem – eines, für das die JavaScript-Gemeinschaft einige hilfreiche Bibliotheken geschrieben hat. Wir werden [nanoid](https://github.com/ai/nanoid) verwenden, weil es klein ist und funktioniert.

Vergewissern Sie sich, dass Sie sich im Stammverzeichnis Ihrer Anwendung befinden, und führen Sie den folgenden Terminalbefehl aus:

```bash
npm install nanoid
```

> [!NOTE]
> Falls Sie yarn verwenden, benötigen Sie stattdessen Folgendes: `yarn add nanoid`.

Nun können wir `nanoid` verwenden, um eindeutige IDs für unsere neuen Aufgaben zu erstellen. Zuerst müssen wir es durch Einfügen der folgenden Zeile an der Spitze von `App.jsx` importieren:

```jsx
import { nanoid } from "nanoid";
```

Aktualisieren wir nun `addTask()`, sodass jede Aufgaben-ID ein Präfix `todo-` und einen eindeutigen String enthält, der von nanoid generiert wird. Aktualisieren Sie Ihre `newTask`-Konstantendeklaration auf Folgendes:

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

Speichern Sie alles und testen Sie Ihre App erneut — nun können Sie Aufgaben ohne die Warnung über doppelte IDs hinzufügen.

## Umweg: Aufgaben zählen

Nun, da wir neue Aufgaben hinzufügen können, werden Sie vielleicht ein Problem bemerken: Unsere Überschrift lautet immer "3 tasks remaining", unabhängig davon, wie viele Aufgaben wir haben! Wir können das beheben, indem wir die Länge von `taskList` zählen und den Text unserer Überschrift entsprechend ändern.

Fügen Sie dies innerhalb Ihrer `App()`-Definition, vor der Rückgabeanweisung hinzu:

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

Das ist fast richtig, außer dass wenn unsere Liste jemals eine einzige Aufgabe enthält, die Überschrift dennoch das Wort "tasks" verwendet. Wir können dies ebenfalls in eine Variable aufnehmen. Aktualisieren Sie den Code, den Sie gerade hinzugefügt haben, wie folgt:

```jsx
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

Nun können Sie den Textinhalt der Listenüberschrift durch die `headingText`-Variable ersetzen. Aktualisieren Sie Ihr `<h2>` in etwa so:

```jsx
<h2 id="list-heading">{headingText}</h2>
```

Speichern Sie die Datei, gehen Sie zurück zu Ihrem Browser und versuchen Sie, einige Aufgaben hinzuzufügen: Die Anzahl sollte nun wie erwartet aktualisiert werden.

## Eine Aufgabe als erledigt markieren

Sie haben vielleicht bemerkt, dass sich ein Kontrollkästchen aktiviert und deaktiviert, wenn Sie darauf klicken. Als Feature von HTML weiß der Browser, wie er sich merken kann, welche Kontrollkästchen aktiviert oder deaktiviert sind, ohne unsere Hilfe. Dieses Feature verbirgt jedoch ein Problem: Das Umschalten eines Kontrollkästchens ändert nicht den Zustand in unserer React-Anwendung. Das bedeutet, dass der Browser und unsere App nun nicht mehr synchron sind. Wir müssen unseren eigenen Code schreiben, um den Browser wieder mit unserer App zu synchronisieren.

### Den Fehler nachweisen

Bevor wir das Problem beheben, lassen Sie uns beobachten, wie es passiert.

Wir beginnen, indem wir eine `toggleTaskCompleted()`-Funktion in unserer `App()`-Komponente schreiben. Diese Funktion wird einen `id`-Parameter haben, aber wir werden ihn noch nicht verwenden. Vorerst protokollieren wir die erste Aufgabe im Array in der Konsole – wir werden überprüfen, was passiert, wenn wir sie in unserem Browser aktivieren oder deaktivieren:

Fügen Sie dies direkt über Ihrer `taskList`-Konstantendeklaration hinzu:

```jsx
function toggleTaskCompleted(id) {
  console.log(tasks[0]);
}
```

Als Nächstes fügen wir `toggleTaskCompleted` zu den Props jeder gerenderten `<Todo />`-Komponente in unserem `taskList` hinzu; aktualisieren Sie es folgendermaßen:

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

Gehen Sie nun in Ihre `Todo.jsx`-Komponente und fügen Sie Ihrem `<input />`-Element einen `onChange`-Handler hinzu, der eine anonyme Funktion verwendet, um `props.toggleTaskCompleted()` mit einem Parameter von `props.id` aufzurufen. Das `<input />` sollte nun so aussehen:

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

Speichern Sie alles und kehren Sie zu Ihrem Browser zurück und bemerken Sie, dass unsere erste Aufgabe, "Eat", aktiviert ist. Öffnen Sie Ihre JavaScript-Konsole, und klicken Sie dann auf das Kontrollkästchen neben "Eat". Es wird deaktiviert, wie wir es erwarten. Ihre JavaScript-Konsole protokolliert jedoch so etwas wie:

```plain
Object { id: "task-0", name: "Eat", completed: true }
```

Das Kontrollkästchen wird im Browser deaktiviert, aber unsere Konsole zeigt, dass "Eat" immer noch abgeschlossen ist. Das werden wir als Nächstes beheben!

### Den Browser mit unseren Daten synchronisieren

Schauen wir uns noch einmal unsere `toggleTaskCompleted()`-Funktion in `App.jsx` an. Wir möchten, dass sie die `completed`-Eigenschaft nur der Aufgabe ändert, die umgeschaltet wurde, und alle anderen unverändert lässt. Dazu werden wir über die Aufgabenliste `map()` verwenden und nur die ändern, die wir abgeschlossen haben.

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

Hier definieren wir eine `updatedTasks`-Konstante, die über das ursprüngliche `tasks`-Array abbildet. Wenn die `id`-Eigenschaft der Aufgabe mit der gegebenen `id` übereinstimmt, verwenden wir [Objekt-Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um ein neues Objekt zu erstellen, und schalten die `completed`-Eigenschaft dieses Objekts um, bevor wir es zurückgeben. Wenn es nicht übereinstimmt, geben wir das ursprüngliche Objekt zurück.

Dann rufen wir `setTasks()` mit diesem neuen Array auf, um unseren Zustand zu aktualisieren.

## Eine Aufgabe löschen

Das Löschen einer Aufgabe folgt einem ähnlichen Muster wie das Umschalten ihres abgeschlossenen Status: Wir müssen eine Funktion definieren, die unseren Zustand aktualisiert, und diese Funktion dann als Prop in `<Todo />` übergeben und aufrufen, wenn das richtige Ereignis eintritt.

### Die `deleteTask`-Callback-Prop

Hier beginnen wir, indem wir eine `deleteTask()`-Funktion in Ihrer `App`-Komponente schreiben. Wie `toggleTaskCompleted()` wird diese Funktion einen `id`-Parameter akzeptieren, und wir werden diesen `id` zunächst in der Konsole protokollieren. Fügen Sie Folgendes unter `toggleTaskCompleted()` hinzu:

```jsx
function deleteTask(id) {
  console.log(id);
}
```

Fügen Sie dann unserem Array von `<Todo />`-Komponenten eine weitere Callback-Prop hinzu:

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

In `Todo.jsx`, möchten wir `props.deleteTask()` aufrufen, wenn die "Delete"-Schaltfläche gedrückt wird. `deleteTask()` muss die ID der Aufgabe kennen, die ihn aufgerufen hat, damit sie die richtige Aufgabe aus dem Zustand löschen kann.

Aktualisieren Sie die "Delete"-Schaltfläche in `Todo.jsx` so:

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

Nun wird, wann immer Sie auf eine der "Delete"-Schaltflächen in der App klicken, die ID der zugehörigen Aufgabe in der Browser-Konsole protokolliert.

An diesem Punkt sollte Ihre `Todo.jsx`-Datei wie folgt aussehen:

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

Jetzt, da wir wissen, dass `deleteTask()` korrekt ausgelöst wird, können wir unseren `setTasks()`-Hook in `deleteTask()` aufrufen, um die Aufgabe tatsächlich aus dem Zustand der App sowie visuell in der App-Benutzeroberfläche zu löschen. Da `setTasks()` ein Array als Argument erwartet, sollten wir ihm ein neues Array übergeben, das die bestehenden Aufgaben kopiert, _ausgenommen_ die Aufgabe, deren ID mit dem an `deleteTask()` übergebenen übereinstimmt.

Dies ist eine perfekte Gelegenheit, [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) zu verwenden. Wir können jede Aufgabe überprüfen und eine Aufgabe aus dem neuen Array ausschließen, wenn ihre `id`-Eigenschaft mit der in `deleteTask()` übergebenen `id` übereinstimmt.

Aktualisieren Sie die `deleteTask()`-Funktion in Ihrer `App.jsx`-Datei wie folgt:

```jsx
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}
```

Probieren Sie Ihre App noch einmal aus. Jetzt sollten Sie in der Lage sein, eine Aufgabe aus Ihrer App zu löschen!

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

Das reicht für einen Artikel. Hier haben wir Ihnen eine umfassende Einführung gegeben, wie React mit Ereignissen umgeht und Zustand handhabt, und haben die Funktionalität zum Hinzufügen, Löschen und Umschalten von Aufgaben als erledigt implementiert. Wir sind fast am Ziel. Im nächsten Artikel implementieren wir die Funktionalität, um bestehende Aufgaben zu bearbeiten und die Liste der Aufgaben zwischen allen, erledigten und unerledigten Aufgaben zu filtern. Dabei werden wir einen Blick auf das konditionale UI-Rendering werfen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}
