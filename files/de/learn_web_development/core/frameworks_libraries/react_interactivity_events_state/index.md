---
title: "Interaktivität in React: Ereignisse und Zustand"
short-title: React-Ereignisse und Zustand
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}

Mit unserem ausgearbeiteten Komponentenplan ist es nun an der Zeit, unsere App von einer komplett statischen Benutzeroberfläche zu einer zu verändern, die tatsächlich Interaktionen ermöglicht und Änderungen erlaubt. In diesem Artikel werden wir dies tun, indem wir Ereignisse und Zustand untersuchen und mit einer App enden, in der wir erfolgreich Aufgaben hinzufügen und löschen sowie Aufgaben als abgeschlossen umschalten können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie mit dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Umgang mit Ereignissen und Zustand in React und deren Nutzung, um die Fallstudie interaktiv zu gestalten.
      </td>
    </tr>
  </tbody>
</table>

## Umgang mit Ereignissen

Wenn Sie bisher nur reines JavaScript geschrieben haben, sind Sie wahrscheinlich daran gewöhnt, eine separate JavaScript-Datei zu haben, in der Sie nach einigen DOM-Knoten abfragen und Ereignis-Listener an diese anhängen. Zum Beispiel könnte eine HTML-Datei einen Button enthalten, der so aussieht:

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

In JSX leben der Code, der die Benutzeroberfläche beschreibt, und unsere Ereignis-Listener direkt nebeneinander:

```jsx
<button type="button" onClick={() => alert("hi!")}>
  Say hi!
</button>
```

In diesem Beispiel fügen wir dem {{htmlelement("button")}}-Element ein `onClick`-Attribut hinzu. Der Wert dieses Attributs ist eine Funktion, die einen Alert auslöst. Dies mag im Widerspruch zu den besten Praktiken stehen, die besagen, dass man keine Ereignis-Listener in HTML schreiben sollte, aber denken Sie daran: JSX ist nicht HTML.

Das `onClick`-Attribut hat hier eine besondere Bedeutung: Es teilt React mit, eine gegebene Funktion auszuführen, wenn der Benutzer auf den Button klickt. Es gibt ein paar andere Dinge zu beachten:

- Die {{Glossary("camel_case", "Camel-Case-Schreibweise")}} von `onClick` ist wichtig – JSX erkennt `onclick` nicht (dies wird bereits in JavaScript für einen bestimmten Zweck verwendet, der verwandt, aber unterschiedlich ist — standardmäßige [`onclick`](/de/docs/Web/API/Element/click_event)-Handler-Eigenschaften).
- Alle Browser-Ereignisse folgen in JSX diesem Format – `on`, gefolgt vom Namen des Ereignisses.

Wenden wir dies nun in unserer App an und beginnen im `Form.jsx`-Komponentenfile.

### Behandlung der Formularübermittlung

Zu Beginn der `Form()`-Komponentenfunktion (d.h. direkt unter der Zeile `function Form() {`) erstellen Sie eine Funktion mit dem Namen `handleSubmit()`. Diese Funktion sollte [das Standardverhalten des `submit`-Ereignisses verhindern](/de/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behavior). Danach sollte sie einen `alert()` auslösen, der sagen kann, was immer Sie möchten. Es sollte am Ende ungefähr so aussehen:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  alert("Hello, world!");
}
```

Um diese Funktion zu verwenden, fügen Sie dem [`<form>`](/de/docs/Web/HTML/Reference/Elements/form)-Element ein `onSubmit`-Attribut hinzu und setzen Sie dessen Wert auf die `handleSubmit`-Funktion:

```jsx
<form onSubmit={handleSubmit}>
```

Wenn Sie jetzt zu Ihrem Browser zurückkehren und auf den Button "Add" klicken, zeigt Ihr Browser ein Dialogfeld mit der Nachricht "Hello, world!" an — oder was Sie dort schreiben wollten.

## Callback-Props

In React-Anwendungen ist Interaktivität selten auf eine einzelne Komponente beschränkt: Ereignisse in einer Komponente wirken sich auf andere Teile der App aus. Wenn wir uns die Möglichkeit geben, neue Aufgaben zu erstellen, wirken sich Ereignisse, die im `<Form />`-Element geschehen, auf die Liste im `<App />`-Element aus.

Wir möchten, dass unsere `handleSubmit()`-Funktion uns letztendlich hilft, eine neue Aufgabe zu erstellen, also brauchen wir eine Möglichkeit, Informationen von `<Form />` zu `<App />` zu übermitteln. Wir können keine Daten von Kind zu Elternteil auf die gleiche Weise wie von Elternteil zu Kind übermitteln, indem wir Standard-Props verwenden. Stattdessen können wir eine Funktion in `<App />` schreiben, die einige Daten aus unserem Formular als Eingabe erwartet, und dann diese Funktion als Prop an `<Form />` übergeben. Diese Funktion-als-ein-Prop wird als **Callback-Prop** bezeichnet. Sobald wir unsere Callback-Prop haben, können wir sie innerhalb von `<Form />` aufrufen, um die richtigen Daten an `<App />` zu senden.

### Umgang mit der Formularübermittlung über Callbacks

Erstellen Sie innerhalb der `App()`-Funktion in `App.jsx` eine Funktion namens `addTask()` mit einem einzigen Parameter `name`:

```jsx
function addTask(name) {
  alert(name);
}
```

Als Nächstes geben Sie `addTask()` als Prop an `<Form />` weiter. Das Prop kann einen beliebigen Namen haben, aber wählen Sie einen, den Sie später verstehen werden. Etwas wie `addTask` funktioniert, da es sowohl den Namen der Funktion als auch ihre Funktion widerspiegelt. Ihre Aufrufung von `<Form />` sollte wie folgt aktualisiert werden:

```jsx
<Form addTask={addTask} />
```

Um dieses Prop zu verwenden, müssen wir die Signatur der `Form()`-Funktion in `Form.jsx` ändern, sodass sie `props` als Parameter akzeptiert:

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

Das Klicken auf den "Add"-Button in Ihrem Browser sollte beweisen, dass die `addTask()`-Callback-Funktion funktioniert, aber es wäre schön, wenn wir den Alert sehen könnten, der zeigt, was wir in unser Eingabefeld tippen! Das werden wir als Nächstes tun.

### Nebenbemerkung: Eine Anmerkung zu Namenskonventionen

Wir haben die `addTask()`-Funktion als Prop `addTask` an die `<Form />`-Komponente übergeben, um die Beziehung zwischen der `addTask()` _Funktion_ und dem `addTask` _Prop_ so klar wie möglich zu halten. Denken Sie daran, dass Prop-Namen nicht _unbedingt_ etwas Bestimmtes sein müssen. Wir könnten `addTask()` unter jedem anderen Namen an `<Form />` übergeben, zum Beispiel so:

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

Hier weist uns das Präfix `on` darauf hin, dass das Prop eine Callback-Funktion ist; `Submit` ist unser Hinweis darauf, dass ein Übermittlungsereignis diese Funktion auslösen wird.

Während Callback-Props oft die Namen bekannter Ereignis-Handler wie `onSubmit` oder `onClick` tragen, können sie eigentlich mit fast jedem Namen bezeichnet werden, der ihre Bedeutung klar macht. Eine hypothetische `<Menu />`-Komponente könnte eine Callback-Funktion enthalten, die beim Öffnen des Menüs ausgeführt wird, sowie eine separate Callback-Funktion, die beim Schließen ausgeführt wird:

```jsx
<Menu onOpen={() => console.log("Hi!")} onClose={() => console.log("Bye!")} />
```

Diese `on*`-Namenskonvention ist im React-Ökosystem sehr verbreitet, daher sollten Sie sie im Kopf behalten, wenn Sie weiterlernen. Der Eindeutigkeit halber werden wir für den Rest dieses Tutorials bei `addTask` und ähnlichen Prop-Namen bleiben. Wenn Sie beim Lesen dieses Abschnitts irgendwelche Prop-Namen geändert haben, stellen Sie sicher, dass Sie sie zurückändern, bevor Sie weitergehen!

## Daten mit Zustand beibehalten und ändern

Bisher haben wir Props verwendet, um Daten durch unsere Komponenten zu reichen, und das hat für uns ganz gut funktioniert. Jetzt, da wir mit Interaktivität zu tun haben, benötigen wir jedoch die Fähigkeit, neue Daten zu erstellen, sie zu behalten und später zu aktualisieren. Props sind für diese Aufgabe nicht das richtige Werkzeug, weil sie unveränderlich sind — eine Komponente kann ihre eigenen Props nicht ändern oder erstellen.

Hier kommt der **Zustand** ins Spiel. Wenn wir uns Props als ein Mittel zur Kommunikation zwischen Komponenten vorstellen, können wir uns Zustand als ein Mittel vorstellen, Komponenten "Gedächtnis" zu geben – Informationen, die sie halten und bei Bedarf aktualisieren können.

React bietet eine spezielle Funktion zum Einführen von Zustand in eine Komponente, passend benannt `useState()`.

> **Hinweis:** `useState()` gehört zu einer speziellen Kategorie von Funktionen, die als **Hooks** bezeichnet werden und mit denen neue Funktionalitäten zu einer Komponente hinzugefügt werden können. Wir werden später über andere Hooks lernen.

Um `useState()` zu verwenden, müssen wir es aus dem React-Modul importieren. Fügen Sie die folgende Zeile oben in Ihrer `Form.jsx`-Datei hinzu, über der Definition der `Form()`-Funktion:

```jsx
import { useState } from "react";
```

`useState()` nimmt ein einziges Argument, das den Anfangswert des Zustandes bestimmt. Dieses Argument kann ein String, eine Zahl, ein Array, ein Objekt oder ein anderer JavaScript-Datentyp sein. `useState()` gibt ein Array zurück, das zwei Elemente enthält. Das erste Element ist der aktuelle Wert des Zustandes; das zweite Element ist eine Funktion, die zum Aktualisieren des Zustandes verwendet werden kann.

Lassen Sie uns einen `name`-Zustand erstellen. Schreiben Sie das Folgende oberhalb Ihrer `handleSubmit()`-Funktion innerhalb von `Form()`:

```jsx
const [name, setName] = useState("Learn React");
```

Es passiert einiges in dieser Zeile:

- Wir definieren eine `name`-Konstante mit dem Wert `"Learn React"`.
- Wir definieren eine Funktion, deren Aufgabe es ist, `name` zu ändern, die `setName()` genannt wird.
- `useState()` gibt diese zwei Dinge in einem Array zurück, also verwenden wir [Array Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring), um sie beide in separaten Variablen aufzunehmen.

### Zustand auslesen

Sie können den `name`-Zustand sofort in Aktion sehen. Fügen Sie dem Eingabefeld des Formulars ein `value`-Attribut hinzu und setzen Sie seinen Wert auf `name`. Ihr Browser wird "Learn React" im Eingabefeld rendern.

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

Ändern Sie "Learn React" in einen leeren String, wenn Sie fertig sind; das ist unser gewünschter Anfangszustand:

```jsx
const [name, setName] = useState("");
```

### Benutzereingaben auslesen

Bevor wir den Wert von `name` ändern können, müssen wir die Eingaben des Benutzers beim Tippen erfassen. Dafür können wir auf das `onChange`-Ereignis hören. Lassen Sie uns eine `handleChange()`-Funktion schreiben und auf sie im `<input />`-Element hören.

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

Derzeit wird sich der Wert unseres Eingabefelds nicht ändern, wenn Sie Text eingeben, aber Ihr Browser wird das Wort "Typing!" in die JavaScript-Konsole schreiben, was bedeutet, dass unser Ereignis-Listener dem Eingabefeld zugeordnet ist.

Um die Tastenanschläge des Benutzers zu lesen, müssen wir auf die `value`-Eigenschaft des Eingabefeldes zugreifen. Das machen wir, indem wir das `event`-Objekt lesen, das `handleChange()` erhält, wenn es aufgerufen wird. `event` hat wiederum eine [`target`-Eigenschaft](/de/docs/Web/API/Event/target), die das Element darstellt, das das `change`-Ereignis ausgelöst hat. Das ist unser Eingabefeld. Also ist `event.target.value` der Text im Eingabefeld.

Sie können diesen Wert mit `console.log()` in Ihrer Browser-Konsole ansehen. Versuchen Sie, die `handleChange()`-Funktion wie folgt zu aktualisieren und im Eingabefeld zu tippen, um das Ergebnis in Ihrer Konsole zu sehen:

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

### Zustand aktualisieren

Protokollieren reicht nicht – wir wollen tatsächlich speichern, was der Benutzer eingibt, und es im Eingabefeld anzeigen! Ändern Sie Ihren `console.log()`-Aufruf zu `setName()`, wie unten gezeigt:

```jsx
function handleChange(event) {
  setName(event.target.value);
}
```

Jetzt, wenn Sie im Eingabefeld tippen, werden Ihre Tastenanschläge das Eingabefeld ausfüllen, wie Sie es erwarten.

Wir haben noch einen weiteren Schritt: Wir müssen unsere `handleSubmit()`-Funktion ändern, sodass sie `props.addTask` mit `name` als Argument aufruft. Erinnern Sie sich an unsere Callback-Prop? Diese wird verwendet, um die Aufgabe zur `App`-Komponente zurückzusenden, damit wir sie zu einem späteren Zeitpunkt unserer Aufgabenliste hinzufügen können. Aus Gründen der guten Praxis sollten Sie das Eingabefeld nach der Einreichung des Formulars leeren, also rufen wir `setName()` erneut mit einem leeren String auf, um dies zu tun:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask(name);
  setName("");
}
```

Endlich können Sie etwas in das Eingabefeld in Ihrem Browser eingeben und auf _Add_ klicken – was auch immer Sie eingegeben haben, erscheint in einem Dialogfeld.

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
> Sie werden bemerken, dass Sie leere Aufgaben übermitteln können, indem Sie einfach auf den `Add`-Button drücken, ohne einen Aufgabennamen einzugeben. Können Sie sich eine Möglichkeit vorstellen, dies zu verhindern? Als Hinweis: Sie müssen wahrscheinlich eine Art Überprüfung in die `handleSubmit()`-Funktion einfügen.

## Alles zusammenführen: Eine Aufgabe hinzufügen

Da wir nun mit Ereignissen, Callback-Props und Hooks geübt haben, sind wir bereit, die Funktionalität zu schreiben, die es einem Benutzer erlaubt, eine neue Aufgabe von ihrem Browser aus hinzuzufügen.

### Aufgaben als Zustand

Wir müssen `useState` in `App.jsx` importieren, damit wir unsere Aufgaben im Zustand speichern können. Fügen Sie Folgendes am Anfang Ihrer `App.jsx`-Datei hinzu:

```jsx
import { useState } from "react";
```

Wir möchten `props.tasks` in den `useState()`-Hook übergeben – das wird seinen Anfangszustand bewahren. Fügen Sie das Folgende direkt am Anfang Ihrer `App()`-Funktionsdefinition hinzu:

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

Jetzt können wir unsere `taskList`-Mapping so ändern, dass sie das Ergebnis des Mappings von `tasks` statt von `props.tasks` ist. Ihre `taskList`-Konstanten-Deklaration sollte nun so aussehen:

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

Wir haben nun einen `setTasks`-Hook, den wir in unserer `addTask()`-Funktion verwenden können, um unsere Aufgabenliste zu aktualisieren. Es gibt jedoch ein Problem: Wir können nicht einfach das `name`-Argument von `addTask()` in `setTasks` übergeben, weil `tasks` ein Array von Objekten ist und `name` ein String ist. Wenn wir dies versuchen würden, würde das Array durch den String ersetzt werden.

Zunächst müssen wir `name` in ein Objekt umwandeln, das dieselbe Struktur wie unsere vorhandenen Aufgaben hat. Innerhalb der `addTask()`-Funktion werden wir ein `newTask`-Objekt erstellen, um es dem Array hinzuzufügen.

Dann müssen wir ein neues Array mit dieser neuen Aufgabe erstellen und dann den Zustand der Aufgaben-Daten auf diesen neuen Zustand aktualisieren. Um dies zu tun, können wir das Spread-Syntax verwenden, um [das bestehende Array zu kopieren](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copying_an_array), und unser Objekt am Ende hinzufügen. Wir übergeben dann dieses Array an `setTasks()`, um den Zustand zu aktualisieren.

All dies zusammengefügt, sollte Ihre `addTask()`-Funktion so lauten:

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

Jetzt können Sie den Browser verwenden, um eine Aufgabe zu unseren Daten hinzuzufügen! Geben Sie im Formular etwas ein und klicken Sie auf "Add" (oder drücken Sie die <kbd>Enter</kbd>-Taste) und Sie werden sehen, wie der neue Aufgabe-Artikel in der Benutzeroberfläche erscheint!

**Wir haben jedoch ein weiteres Problem**: Unsere `addTask()`-Funktion gibt jeder Aufgabe die gleiche `id`. Das ist schlecht für die Barrierefreiheit und macht es für React unmöglich, zukünftige Aufgaben mit der `key`-Prop zu unterscheiden. Tatsächlich wird React eine Warnung in Ihrer DevTools-Konsole ausgeben — "Warning: Encountered two children with the same key…"

Wir müssen das beheben. Eindeutige Kennungen zu erstellen, ist ein schwieriges Problem — eins, für das die JavaScript-Community einige hilfreiche Bibliotheken entwickelt hat. Wir werden [nanoid](https://github.com/ai/nanoid) verwenden, weil es klein ist und funktioniert.

Stellen Sie sicher, dass Sie sich im Stammverzeichnis Ihrer Anwendung befinden, und führen Sie den folgenden Terminalbefehl aus:

```bash
npm install nanoid
```

> [!NOTE]
> Wenn Sie yarn verwenden, benötigen Sie stattdessen folgenden Befehl: `yarn add nanoid`.

Jetzt können wir `nanoid` verwenden, um eindeutige IDs für unsere neuen Aufgaben zu erstellen. Importieren Sie es zuerst, indem Sie die folgende Zeile am Anfang von `App.jsx` einfügen:

```jsx
import { nanoid } from "nanoid";
```

Lassen Sie uns nun `addTask()` aktualisieren, sodass jede Aufgaben-ID ein Präfix `todo-` plus einen von nanoid generierten eindeutigen String hat. Aktualisieren Sie Ihre `newTask`-Konstanten-Deklaration zu diesem:

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

Speichern Sie alles und versuchen Sie Ihre App erneut — jetzt können Sie Aufgaben hinzufügen, ohne die Warnung über doppelte IDs zu erhalten.

## Umweg: Aufgaben zählen

Jetzt, da wir neue Aufgaben hinzufügen können, stellen Sie vielleicht ein Problem fest: Unsere Überschrift zeigt immer "3 tasks remaining" an, egal wie viele Aufgaben wir haben! Wir können dies beheben, indem wir die Länge von `taskList` zählen und den Text unserer Überschrift entsprechend ändern.

Fügen Sie dies innerhalb Ihrer `App()`-Definition hinzu, vor der return-Aussage:

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

Das ist fast richtig, außer dass, wenn unsere Liste jemals eine einzige Aufgabe enthält, die Überschrift immer noch das Wort "tasks" verwendet. Wir können auch dies zu einer Variablen machen. Aktualisieren Sie den Code, den Sie gerade hinzugefügt haben, wie folgt:

```jsx
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

Jetzt können Sie den Textinhalt der Listenüberschrift mit der `headingText`-Variable ersetzen. Aktualisieren Sie Ihr `<h2>` wie folgt:

```jsx
<h2 id="list-heading">{headingText}</h2>
```

Speichern Sie die Datei, gehen Sie zurück zu Ihrem Browser und versuchen Sie, einige Aufgaben hinzuzufügen: Die Anzahl sollte jetzt wie erwartet aktualisiert werden.

## Eine Aufgabe abschließen

Ihnen mag auffallen, dass beim Klicken auf ein Kontrollkästchen sich dieses entsprechend ein- und ausschaltet. Als Feature von HTML weiß der Browser, wie er sich merkt, welche Kontrollkästchen aktiviert oder deaktiviert sind, ohne dass wir uns darum kümmern müssen. Dieses Feature verbirgt jedoch ein Problem: Das Umschalten eines Kontrollkästchens ändert nicht den Zustand in unserer React-Anwendung. Das bedeutet, dass der Browser und unsere App jetzt nicht mehr synchron sind. Wir müssen unseren eigenen Code schreiben, um den Browser wieder mit unserer App zu synchronisieren.

### Der Fehlernachweis

Bevor wir das Problem beheben, lassen Sie es uns beobachten.

Wir beginnen, indem wir eine `toggleTaskCompleted()`-Funktion in unserer `App()`-Komponente schreiben. Diese Funktion wird einen `id`-Parameter haben, aber wir werden ihn noch nicht verwenden. Im Moment werden wir die erste Aufgabe im Array in die Konsole schreiben – wir werden beobachten, was passiert, wenn wir sie in unserem Browser ein- oder ausschalten:

Fügen Sie dies direkt über Ihrer `taskList`-Konstanten-Deklaration ein:

```jsx
function toggleTaskCompleted(id) {
  console.log(tasks[0]);
}
```

Fügen Sie als Nächstes `toggleTaskCompleted` den Props jeder gerenderten `<Todo />`-Komponente in unserer `taskList` hinzu; aktualisieren Sie es so:

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

Gehen Sie als Nächstes zu Ihrer `Todo.jsx`-Komponente und fügen Sie Ihrem `<input />`-Element einen `onChange`-Handler hinzu, der eine anonyme Funktion verwendet, um `props.toggleTaskCompleted()` mit einem Parameter von `props.id` aufzurufen. Das `<input />` sollte jetzt so aussehen:

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

Speichern Sie alles und kehren Sie zu Ihrem Browser zurück und beachten Sie, dass unsere erste Aufgabe, Eat, aktiviert ist. Öffnen Sie Ihre JavaScript-Konsole, und klicken Sie dann auf das Kontrollkästchen neben Eat. Es deaktiviert sich, wie wir es erwarten. Ihre JavaScript-Konsole wird jedoch etwas wie folgt protokollieren:

```plain
Object { id: "task-0", name: "Eat", completed: true }
```

Das Kontrollkästchen deaktiviert sich im Browser, aber unsere Konsole sagt uns, dass Eat noch abgeschlossen ist. Das werden wir als Nächstes beheben!

### Den Browser mit unseren Daten synchronisieren

Lassen Sie uns unsere `toggleTaskCompleted()`-Funktion in `App.jsx` noch einmal ansehen. Wir möchten, dass sie die `completed`-Eigenschaft nur der Aufgabe ändert, die umgeschaltet wurde, und die anderen unverändert lässt. Dazu werden wir über die Aufgabenliste `map()` anwenden und nur diejenige ändern, die wir abgeschlossen haben.

Aktualisieren Sie Ihre `toggleTaskCompleted()`-Funktion zu diesem:

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

Hier definieren wir eine `updatedTasks`-Konstante, die über das ursprüngliche `tasks`-Array mappt. Wenn die `id`-Eigenschaft der Aufgabe mit der `id` übereinstimmt, die an die Funktion übergeben wurde, verwenden wir [Object-Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um ein neues Objekt zu erstellen, und schalten die `completed`-Eigenschaft dieses Objekts um, bevor wir es zurückgeben. Wenn es nicht übereinstimmt, geben wir das ursprüngliche Objekt zurück.

Dann rufen wir `setTasks()` mit diesem neuen Array auf, um unseren Zustand zu aktualisieren.

## Eine Aufgabe löschen

Das Löschen einer Aufgabe folgt einem ähnlichen Muster wie das Umschalten ihres abgeschlossenen Zustands: Wir müssen eine Funktion definieren, um unseren Zustand zu aktualisieren, diese Funktion dann an `<Todo />` als Prop übergeben und sie auslösen, wenn das richtige Ereignis auftritt.

### Die `deleteTask`-Callback-Prop

Hier beginnen wir, indem wir eine `deleteTask()`-Funktion in Ihrer `App`-Komponente schreiben. Wie `toggleTaskCompleted()` wird diese Funktion einen `id`-Parameter verwenden, und wir werden dieses `id` zunächst in die Konsole protokollieren. Fügen Sie das Folgende unterhalb von `toggleTaskCompleted()` hinzu:

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

In `Todo.jsx` möchten wir `props.deleteTask()` aufrufen, wenn der "Delete"-Button gedrückt wird. `deleteTask()` muss die ID der Aufgabe kennen, die sie aufgerufen hat, sodass sie die richtige Aufgabe aus dem Zustand löschen kann.

Aktualisieren Sie den "Delete"-Button in `Todo.jsx` so:

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

Jetzt sollte in der Browser-Konsole die ID der zugehörigen Aufgabe protokolliert werden, wenn Sie auf einen der "Delete"-Buttons in der App klicken.

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

## Aufgaben aus Zustand und Benutzeroberfläche löschen

Da wir nun wissen, dass `deleteTask()` korrekt aufgerufen wird, können wir unseren `setTasks()`-Hook in `deleteTask()` aufrufen, um diese Aufgabe tatsächlich aus dem Zustand der App sowie in der App-Oberfläche visuell zu löschen. Da `setTasks()` ein Array als Argument erwartet, sollten wir ihm ein neues Array bereitstellen, das die vorhandenen Aufgaben kopiert, _mit Ausnahme_ der Aufgabe, deren ID mit der, die an `deleteTask()` übergeben wurde, übereinstimmt.

Dies bietet eine perfekte Gelegenheit zur Verwendung von [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). Wir können jede Aufgabe testen und eine Aufgabe aus dem neuen Array ausschließen, wenn ihre `id`-Prop mit dem `id`-Argument übereinstimmt, das an `deleteTask()` übergeben wurde.

Aktualisieren Sie die `deleteTask()`-Funktion in Ihrer `App.jsx`-Datei wie folgt:

```jsx
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}
```

Versuchen Sie Ihre App erneut. Jetzt sollten Sie in der Lage sein, eine Aufgabe aus Ihrer App zu löschen!

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

Das ist genug für einen Artikel. Hier haben wir Ihnen die Grundlagen vermittelt, wie React mit Ereignissen umgeht und den Zustand behandelt, und Funktionalität implementiert, um Aufgaben hinzuzufügen, Aufgaben zu löschen und Aufgaben als abgeschlossen umzuschalten. Wir sind fast am Ziel. Im nächsten Artikel werden wir die Funktionalität implementieren, um vorhandene Aufgaben zu bearbeiten und die Aufgabenliste zwischen allen, abgeschlossenen und offenen Aufgaben zu filtern. Dabei schauen wir uns bedingte UI-Renderings genauer an.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}
