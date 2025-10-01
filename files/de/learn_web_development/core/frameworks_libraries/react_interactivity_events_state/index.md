---
title: "Interaktivität in React: Events und State"
short-title: React-Events und State
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}

Nachdem wir unseren Komponentenplan erarbeitet haben, ist es nun an der Zeit, unsere App von einer komplett statischen Benutzeroberfläche zu einer zu aktualisieren, die es uns tatsächlich ermöglicht, zu interagieren und Dinge zu ändern. In diesem Artikel werden wir dies tun und dabei auf Events und State eingehen. Am Ende werden wir eine App haben, in der wir erfolgreich Aufgaben hinzufügen und löschen sowie Aufgaben als erledigt markieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen, sowie dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/der Befehlszeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Umgang mit Events und State in React und deren Nutzung, um mit der Interaktivität der Fallstudien-App zu beginnen.
      </td>
    </tr>
  </tbody>
</table>

## Umgang mit Events

Wenn Sie bisher nur reines JavaScript geschrieben haben, sind Sie möglicherweise gewohnt, eine separate JavaScript-Datei zu haben, in der Sie einige DOM-Knoten abfragen und Event-Listener an sie anhängen. Beispielsweise könnte eine HTML-Datei einen Button enthalten, wie diesen:

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

In JSX lebt der Code, der die Benutzeroberfläche beschreibt, direkt neben unseren Event-Listenern:

```jsx
<button type="button" onClick={() => alert("hi!")}>
  Say hi!
</button>
```

In diesem Beispiel fügen wir dem {{htmlelement("button")}}-Element ein `onClick`-Attribut hinzu. Der Wert dieses Attributs ist eine Funktion, die einen Hinweis auslöst. Dies mag im Widerspruch zu den besten Praktiken erscheinen, Event-Listener nicht in HTML zu schreiben, aber denken Sie daran: JSX ist nicht HTML.

Das `onClick`-Attribut hat hier eine besondere Bedeutung: Es teilt React mit, dass eine bestimmte Funktion ausgeführt werden soll, wenn der Benutzer auf den Button klickt. Es gibt noch ein paar weitere Dinge zu beachten:

- Die {{Glossary("camel_case", "camel-cased")}} Schreibweise von `onClick` ist wichtig – JSX erkennt `onclick` nicht (es wird in JavaScript bereits für einen bestimmten Zweck verwendet, der verwandt, aber anders ist – standardmäßige [`onclick`](/de/docs/Web/API/Element/click_event) Handler-Eigenschaften).
- Alle Browserevents folgen in JSX diesem Format – `on` gefolgt vom Namen des Events.

Wenden wir dies auf unsere App an, beginnend mit der `Form.jsx` Komponente.

### Umgang mit Formularübermittlung

Am Anfang der `Form()`-Komponentenfunktion (d.h. direkt unterhalb der Zeile `function Form() {`) erstellen Sie eine Funktion namens `handleSubmit()`. Diese Funktion sollte [das Standardverhalten des `submit`-Events verhindern](/de/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behavior). Danach soll ein `alert()` ausgelöst werden, das alles sagen kann, was Sie möchten. Es sollte in etwa so aussehen:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  alert("Hello, world!");
}
```

Um diese Funktion zu verwenden, fügen Sie dem [`<form>`](/de/docs/Web/HTML/Reference/Elements/form)-Element ein `onSubmit`-Attribut hinzu und setzen Sie dessen Wert auf die `handleSubmit`-Funktion:

```jsx
<form onSubmit={handleSubmit}>{/* … */}</form>
```

Wenn Sie jetzt zu Ihrem Browser zurückkehren und auf den "Hinzufügen"-Button klicken, zeigt Ihnen Ihr Browser ein Hinweisfenster mit den Worten "Hello, world!" — oder was auch immer Sie dort schreiben möchten.

## Callback-Props

In React-Anwendungen ist Interaktivität selten auf eine einzige Komponente beschränkt: Events, die in einer Komponente auftreten, wirken sich auf andere Teile der App aus. Wenn wir uns die Möglichkeit geben, neue Aufgaben zu erstellen, werden Dinge, die in der `<Form />`-Komponente geschehen, die Liste beeinflussen, die in `<App />` gerendert wird.

Wir möchten, dass unsere `handleSubmit()`-Funktion letztlich dazu beiträgt, eine neue Aufgabe zu erstellen. Daher benötigen wir eine Möglichkeit, Informationen von `<Form />` zu `<App />` zu übermitteln. Wir können keine Daten vom Kind zum Elternteil auf die gleiche Weise übergeben wie vom Elternteil zum Kind mit Standard-Props. Stattdessen können wir eine Funktion in `<App />` schreiben, die einige Daten von unserem Formular als Eingabe erwartet, und diese Funktion dann als Prop an `<Form />` übergeben. Diese als Prop übergebene Funktion nennt man **Callback-Prop**. Sobald wir unsere Callback-Prop haben, können wir sie innerhalb von `<Form />` aufrufen, um die richtigen Daten an `<App />` zu senden.

### Umgang mit Formularübermittlung über Callback-Props

Innerhalb der `App()`-Funktion in `App.jsx` erstellen Sie eine Funktion namens `addTask()`, die einen einzelnen Parameter `name` hat:

```jsx
function addTask(name) {
  alert(name);
}
```

Als nächstes übergeben Sie `addTask()` als Prop an `<Form />`. Das Prop kann jeden beliebigen Namen haben, aber wählen Sie einen Namen, den Sie später verstehen werden. Etwas wie `addTask` funktioniert, da es den Namen der Funktion sowie das beschreibt, was die Funktion tun wird. Ihr Aufruf der `<Form />`-Komponente sollte wie folgt aktualisiert werden:

```jsx
<Form addTask={addTask} />
```

Um dieses Prop zu verwenden, müssen wir die Signatur der `Form()`-Funktion in `Form.jsx` so ändern, dass sie `props` als Parameter akzeptiert:

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

Durch Klicken auf den "Hinzufügen"-Button im Browser wird bewiesen, dass die `addTask()`-Callback-Funktion funktioniert. Es wäre jedoch schön, wenn wir den Hinweistext auf das zeigen lassen könnten, was wir in unser Eingabefeld tippen! Das ist es, was wir als nächstes tun werden.

### Nebenbemerkung: Eine Notiz zu Namenskonventionen

Wir haben die `addTask()`-Funktion als Prop `addTask` in die `<Form />`-Komponente übergeben, damit die Beziehung zwischen der `addTask()`-Funktion und dem `addTask`-Prop so klar wie möglich bleibt. Denken Sie jedoch daran, dass Prop-Namen nichts Bestimmtes sein müssen. Wir hätten `addTask()` auch mit einem beliebigen anderen Namen in `<Form />` übergeben können, zum Beispiel so:

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

Hier zeigt uns das Präfix `on`, dass es sich bei dem Prop um eine Callback-Funktion handelt; `Submit` ist unser Hinweis darauf, dass ein Übermittlungsereignis diese Funktion auslösen wird.

Obwohl Callback-Props oft den Namen vertrauter Event-Handler wie `onSubmit` oder `onClick` haben, können sie nahezu jeden beliebigen Namen haben, der ihre Bedeutung klar macht. Eine hypothetische `<Menu />`-Komponente könnte eine Callback-Funktion enthalten, die ausgeführt wird, wenn das Menü geöffnet wird, sowie eine separate Callback-Funktion, die ausgeführt wird, wenn es geschlossen wird:

```jsx
<Menu onOpen={() => console.log("Hi!")} onClose={() => console.log("Bye!")} />
```

Diese `on*`-Namenskonvention ist im React-Ökosystem sehr verbreitet, daher sollten Sie sie im Hinterkopf behalten, während Sie weiter lernen. Zur Klarheit werden wir in diesem Tutorial bei den Namen `addTask` und ähnlichen Prop-Namen bleiben. Wenn Sie während des Lesens dieses Abschnitts Prop-Namen geändert haben, stellen Sie sicher, dass Sie sie zurück ändern, bevor Sie fortfahren!

## Daten mit State beibehalten und ändern

Bisher haben wir Props verwendet, um Daten durch unsere Komponenten zu übergeben und das hat uns bisher gut gedient. Da wir uns jedoch jetzt mit Interaktivität beschäftigen, benötigen wir die Fähigkeit, neue Daten zu erstellen, sie zu speichern und später zu aktualisieren. Props sind nicht das richtige Werkzeug für diese Aufgabe, da sie unveränderlich sind — eine Komponente kann ihre eigenen Props nicht ändern oder erstellen.

Hier kommt der **State** ins Spiel. Wenn wir Props als eine Möglichkeit betrachten, zwischen Komponenten zu kommunizieren, können wir State als eine Möglichkeit betrachten, den Komponenten "Gedächtnis" zu verleihen – Informationen, die sie bei Bedarf speichern und aktualisieren können.

React bietet eine spezielle Funktion zur Einführung von State in eine Komponente, die treffend `useState()` genannt wird.

> [!NOTE]
> `useState()` ist Teil einer speziellen Kategorie von Funktionen, die als **Hooks** bezeichnet werden, von denen jede verwendet werden kann, um einer Komponente neue Funktionen hinzuzufügen. Wir werden später mehr über andere Hooks lernen.

Um `useState()` zu verwenden, müssen wir es aus dem React-Modul importieren. Fügen Sie die folgende Zeile ganz oben in Ihrer `Form.jsx`-Datei, oberhalb der Definition der `Form()`-Funktion, hinzu:

```jsx
import { useState } from "react";
```

`useState()` nimmt ein einzelnes Argument an, das den Anfangswert des States bestimmt. Dieses Argument kann ein String, eine Zahl, ein Array, ein Objekt oder ein anderer JavaScript-Datentyp sein. `useState()` gibt ein Array zurück, das zwei Elemente enthält. Das erste Element ist der aktuelle Wert des States; das zweite Element ist eine Funktion, die verwendet werden kann, um den State zu aktualisieren.

Lassen Sie uns einen `name`-State erstellen. Schreiben Sie das Folgende oberhalb Ihrer `handleSubmit()`-Funktion, innerhalb von `Form()`:

```jsx
const [name, setName] = useState("Learn React");
```

In dieser Codezeile passieren mehrere Dinge:

- Wir definieren eine `name`-Konstante mit dem Wert `"Learn React"`.
- Wir definieren eine Funktion namens `setName()`, deren Aufgabe es ist, `name` zu verändern.
- `useState()` gibt diese beiden Dinge in einem Array zurück, sodass wir durch [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) beide in separaten Variablen erfassen.

### State lesen

Sie können den `name`-State sofort in Aktion sehen. Fügen Sie dem Eingabefeld des Formulars ein `value`-Attribut hinzu und setzen Sie dessen Wert auf `name`. Ihr Browser wird "Learn React" innerhalb der Eingabe rendern.

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

Ändern Sie "Learn React" in einen leeren String, wenn Sie fertig sind; das ist es, was wir für unseren initialen State wollen:

```jsx
const [name, setName] = useState("");
```

### Benutzereingaben lesen

Bevor wir den Wert von `name` ändern können, müssen wir die Eingaben eines Benutzers erfassen, während er tippt. Dafür können wir das `onChange`-Event anhören. Lassen Sie uns eine Funktion namens `handleChange()` schreiben und auf das `<input />`-Element hören.

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

Derzeit wird sich der Wert unseres Eingabefelds nicht ändern, wenn Sie versuchen, Text einzugeben, aber Ihr Browser protokolliert das Wort "Typing!" in die JavaScript-Konsole, sodass wir wissen, dass unser Event-Listener mit der Eingabe verbunden ist.

Um die Tastenanschläge des Benutzers zu lesen, müssen wir auf die `value`-Eigenschaft der Eingabe zugreifen. Dies können wir tun, indem wir das `event`-Objekt lesen, das `handleChange()` empfängt, wenn es aufgerufen wird. `event` hat wiederum eine [Eigenschaft `target`](/de/docs/Web/API/Event/target), die das Element darstellt, das das `change`-Event ausgelöst hat. Das ist unsere Eingabe. Also ist `event.target.value` der Text in der Eingabe.

Sie können diesen Wert mit `console.log()` in die Konsole Ihres Browsers ausgeben. Versuchen Sie, die `handleChange()`-Funktion wie folgt zu aktualisieren, und tippen Sie in die Eingabe, um das Ergebnis in Ihrer Konsole zu sehen:

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

### State aktualisieren

Protokollieren reicht nicht aus — wir möchten tatsächlich speichern, was der Benutzer eingibt, und es in der Eingabe anzeigen! Ändern Sie Ihren `console.log()`-Aufruf zu `setName()`, wie unten gezeigt:

```jsx
function handleChange(event) {
  setName(event.target.value);
}
```

Jetzt füllen Ihre Tastenanschläge beim Tippen in der Eingabe die Eingabe aus, wie Sie es erwarten würden.

Wir haben noch einen letzten Schritt: Wir müssen unsere `handleSubmit()`-Funktion so ändern, dass sie `props.addTask` mit `name` als Argument aufruft. Erinnern Sie sich an unser Callback-Prop? Dies wird dazu dienen, die Aufgabe an die `App`-Komponente zurückzusenden, sodass wir sie zu einem späteren Zeitpunkt zu unserer Liste von Aufgaben hinzufügen können. Als gute Praxis sollten Sie die Eingabe nach dem Absenden Ihres Formulars löschen, daher rufen wir `setName()` erneut mit einem leeren String auf, um dies zu tun:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask(name);
  setName("");
}
```

Endlich können Sie etwas in das Eingabefeld in Ihrem Browser eingeben und auf _Hinzufügen_ klicken — was auch immer Sie eingegeben haben, erscheint in einem Hinweisfenster.

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
> Sie werden bemerken, dass Sie leere Aufgaben übermitteln können, indem Sie einfach die `Hinzufügen`-Taste drücken, ohne einen Aufgabennamen einzugeben. Können Sie sich eine Möglichkeit vorstellen, dies zu verhindern? Ein Hinweis: Sie müssen wahrscheinlich eine Art Überprüfung in die `handleSubmit()`-Funktion einfügen.

## Alles zusammenführen: Eine Aufgabe hinzufügen

Da wir jetzt mit Events, Callback-Props und Hooks geübt haben, sind wir bereit, Funktionalität zu schreiben, die es einem Benutzer ermöglicht, eine neue Aufgabe aus seinem Browser hinzuzufügen.

### Aufgaben als State

Wir müssen `useState` in `App.jsx` importieren, damit wir unsere Aufgaben im State speichern können. Fügen Sie das Folgende oben in Ihrer `App.jsx`-Datei hinzu:

```jsx
import { useState } from "react";
```

Wir möchten `props.tasks` in den `useState()`-Hook übergeben – dies wird seinen Anfangszustand bewahren. Fügen Sie das Folgende direkt am Anfang Ihrer `App()`-Funktionsdefinition hinzu:

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

Jetzt können wir unser `taskList`-Mapping so ändern, dass es das Ergebnis des Mappings von `tasks` anstelle von `props.tasks` ist. Ihre Konstante `taskList`-Deklaration sollte nun so aussehen:

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

Wir haben jetzt einen `setTasks`-Hook, den wir in unserer `addTask()`-Funktion verwenden können, um unsere Liste von Aufgaben zu aktualisieren. Es gibt jedoch ein Problem: Wir können das `name`-Argument von `addTask()` nicht direkt in `setTasks` übergeben, da `tasks` ein Array von Objekten ist und `name` ein String. Wenn wir dies versuchen würden, würde das Array durch den String ersetzt werden.

Zuerst müssen wir `name` in ein Objekt mit der gleichen Struktur wie unsere bestehenden Aufgaben setzen. Innerhalb der `addTask()`-Funktion erstellen wir ein `newTask`-Objekt, das dem Array hinzugefügt werden soll.

Dann müssen wir ein neues Array erstellen, mit dieser neuen Aufgabe, die hinzugefügt wurde, und dann den Zustand der Aufgabendaten auf diesen neuen Zustand aktualisieren. Dazu können wir Spreizsyntax verwenden, um [das vorhandene Array zu kopieren](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copying_an_array) und unser Objekt am Ende hinzuzufügen. Dann übergeben wir dieses Array an `setTasks()`, um den State zu aktualisieren.

Alles zusammengefasst, sollte Ihre `addTask()`-Funktion wie folgt aussehen:

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

Jetzt können Sie den Browser verwenden, um eine Aufgabe zu unseren Daten hinzuzufügen! Geben Sie irgendetwas in das Formular ein und klicken Sie auf "Hinzufügen" (oder drücken Sie die <kbd>Enter</kbd>-Taste) und Sie sehen, dass Ihr neues To-Do-Element in der Benutzeroberfläche erscheint!

**Wir haben jedoch ein weiteres Problem**: Unsere `addTask()`-Funktion gibt jeder Aufgabe die gleiche `id`. Dies ist schlecht für die Zugänglichkeit und macht es React unmöglich, zukünftige Aufgaben mit der `key`-Prop zu unterscheiden. Tatsächlich gibt Ihnen React eine Warnung in Ihrer DevTools-Konsole — "Warning: Encountered two children with the same key…"

Wir müssen dies beheben. Eindeutige Identifikatoren zu erstellen ist ein schwieriges Problem – eines, für das die JavaScript-Community einige hilfreiche Bibliotheken geschrieben hat. Wir werden [nanoid](https://github.com/ai/nanoid) verwenden, da es klein ist und funktioniert.

Stellen Sie sicher, dass Sie sich im Stammverzeichnis Ihrer Anwendung befinden, und führen Sie den folgenden Terminalbefehl aus:

```bash
npm install nanoid
```

> [!NOTE]
> Wenn Sie yarn verwenden, benötigen Sie stattdessen Folgendes: `yarn add nanoid`.

Jetzt können wir `nanoid` verwenden, um eindeutige IDs für unsere neuen Aufgaben zu erstellen. Importieren Sie es zuerst, indem Sie die folgende Zeile oben in `App.jsx` hinzufügen:

```jsx
import { nanoid } from "nanoid";
```

Nun aktualisieren wir `addTask()`, sodass jede Aufgaben-ID ein Präfix `todo-` plus eine eindeutige von nanoid generierte Zeichenfolge erhält. Aktualisieren Sie Ihre `newTask`-Konstanten-Deklaration zu diesem:

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

Speichern Sie alles und probieren Sie Ihre App erneut aus – jetzt können Sie Aufgaben hinzufügen, ohne die Warnung über doppelte IDs zu erhalten.

## Umweg: Aufgaben zählen

Nun, da wir neue Aufgaben hinzufügen können, bemerken Sie möglicherweise ein Problem: Unsere Überschrift lautet "3 Aufgaben verbleibend", egal wie viele Aufgaben wir haben! Wir können dies beheben, indem wir die Länge von `taskList` zählen und den Text unserer Überschrift entsprechend ändern.

Fügen Sie dies innerhalb Ihrer `App()`-Definition hinzu, bevor die Rückgabeanweisung erfolgt:

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

Das ist fast richtig, außer dass wenn unsere Liste jemals eine einzelne Aufgabe enthält, die Überschrift immer noch das Wort "tasks" verwenden wird. Das können wir auch zu einer Variablen machen. Aktualisieren Sie den Code, den Sie gerade hinzugefügt haben, wie folgt:

```jsx
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

Nun können Sie den Textinhalt der Listenüberschrift mit der Variablen `headingText` ersetzen. Aktualisieren Sie Ihr `<h2>` wie folgt:

```jsx
<h2 id="list-heading">{headingText}</h2>
```

Speichern Sie die Datei, gehen Sie zurück zu Ihrem Browser und versuchen Sie, einige Aufgaben hinzuzufügen: Die Anzahl sollte jetzt wie erwartet aktualisiert werden.

## Eine Aufgabe abschließen

Vielleicht bemerken Sie, dass, wenn Sie auf ein Kontrollkästchen klicken, dieses sich entsprechend aktiviert und deaktiviert. Als ein Feature von HTML weiß der Browser, wie er sich merken kann, welche Kontrollkästchen-Eingaben aktiviert oder deaktiviert sind, ohne unsere Hilfe. Diese Funktion verbirgt jedoch ein Problem: Das Aktivieren oder Deaktivieren eines Kontrollkästchens ändert nicht den State in unserer React-Anwendung. Das bedeutet, dass der Browser und unsere App jetzt nicht mehr synchron sind. Wir müssen unseren eigenen Code schreiben, um den Browser wieder mit unserer App zu synchronisieren.

### Den Bug beweisen

Bevor wir das Problem lösen, lassen Sie es uns sehen.

Wir beginnen damit, eine `toggleTaskCompleted()`-Funktion in unserer `App()`-Komponente zu schreiben. Diese Funktion wird einen `id`-Parameter haben, aber wir werden diesen noch nicht verwenden. Vorerst protokollieren wir die erste Aufgabe im Array in der Konsole – wir werden untersuchen, was passiert, wenn wir sie in unserem Browser aktivieren oder deaktivieren:

Fügen Sie dies direkt über Ihrer `taskList`-Konstanten-Deklaration hinzu:

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

Gehen Sie als Nächstes zu Ihrer `Todo.jsx`-Komponente und fügen Sie einen `onChange`-Handler zu Ihrem `<input />`-Element hinzu, der eine anonyme Funktion verwenden sollte, um `props.toggleTaskCompleted()` mit einem Parameter von `props.id` aufzurufen. Das `<input />` sollte jetzt so aussehen:

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

Speichern Sie alles und kehren Sie zu Ihrem Browser zurück und bemerken Sie, dass unsere erste Aufgabe, `Eat`, aktiviert ist. Öffnen Sie Ihre JavaScript-Konsole und klicken Sie dann auf das Kontrollkästchen neben `Eat`. Es deaktiviert sich, wie erwartet. Ihre JavaScript-Konsole protokolliert jedoch so etwas wie Folgendes:

```plain
Object { id: "task-0", name: "Eat", completed: true }
```

Das Kontrollkästchen deaktiviert sich im Browser, aber unsere Konsole zeigt uns, dass `Eat` immer noch abgeschlossen ist. Das werden wir jetzt lösen!

### Den Browser mit unseren Daten synchronisieren

Kehren wir zu unserer `toggleTaskCompleted()`-Funktion in `App.jsx` zurück. Wir möchten, dass sie die `completed`-Eigenschaft nur der Aufgabe ändert, die umgeschaltet wurde, und alle anderen in Ruhe lässt. Dazu werden wir über die Aufgabenliste `map()` verwenden und nur die ändern, die wir abgeschlossen haben.

Aktualisieren Sie Ihre `toggleTaskCompleted()`-Funktion zu folgendem:

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

Hier definieren wir eine `updatedTasks`-Konstante, die über das ursprüngliche `tasks`-Array mappt. Wenn die `id`-Eigenschaft der Aufgabe mit der `id` übereinstimmt, die der Funktion gegeben wurde, verwenden wir die [Objekt-Spreizsyntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um ein neues Objekt zu erstellen, und schalten die `completed`-Eigenschaft dieses Objekts um, bevor wir es zurückgeben. Wenn es nicht passt, geben wir das ursprüngliche Objekt zurück.

Dann rufen wir `setTasks()` mit diesem neuen Array auf, um unseren State zu aktualisieren.

## Eine Aufgabe löschen

Das Löschen einer Aufgabe folgt einem ähnlichen Muster wie das Umschalten ihres abgeschlossenen Status: Wir müssen eine Funktion zum Aktualisieren unseres States definieren, dann diese Funktion als Prop in `<Todo />` übergeben und sie aufrufen, wenn das richtige Event eintritt.

### Die `deleteTask`-Callback-Prop

Hier beginnen wir, indem wir eine `deleteTask()`-Funktion in Ihrer `App`-Komponente schreiben. Ähnlich wie `toggleTaskCompleted()` wird diese Funktion einen `id`-Parameter haben, und wir werden diesen `id` zunächst in die Konsole protokollieren. Fügen Sie das Folgende unterhalb von `toggleTaskCompleted()` hinzu:

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

In `Todo.jsx` wollen wir `props.deleteTask()` aufrufen, wenn die "Delete"-Schaltfläche gedrückt wird. `deleteTask()` muss die ID der Aufgabe kennen, die es aufgerufen hat, damit sie die richtige Aufgabe aus dem State löschen kann.

Aktualisieren Sie die "Löschen"-Schaltfläche in `Todo.jsx`, wie folgt:

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

Jetzt sollte Ihre Browser-Konsole die ID der zugehörigen Aufgabe ausgeben, wenn Sie auf eine der "Löschen"-Schaltflächen in der App klicken.

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

## Aufgaben aus dem State und der Benutzeroberfläche löschen

Nun, da wir wissen, dass `deleteTask()` korrekt aufgerufen wird, können wir unseren `setTasks()`-Hook in `deleteTask()` aufrufen, um diese Aufgabe aus dem State der App sowie visuell in der Benutzeroberfläche der App tatsächlich zu löschen. Da `setTasks()` ein Array als Argument erwartet, sollten wir ein neues Array bereitstellen, das die bestehenden Aufgaben kopiert, _ohne_ die Aufgabe, deren ID mit der in `deleteTask()` übergebenen ID übereinstimmt.

Dies ist eine perfekte Gelegenheit, [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) zu verwenden. Wir können jede Aufgabe testen und eine Aufgabe aus dem neuen Array ausschließen, wenn ihre `id`-Prop mit dem in `deleteTask()` übergebenen `id`-Argument übereinstimmt.

Aktualisieren Sie die `deleteTask()`-Funktion in Ihrer `App.jsx`-Datei wie folgt:

```jsx
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}
```

Probieren Sie Ihre App erneut aus. Jetzt sollten Sie in der Lage sein, eine Aufgabe in Ihrer App zu löschen!

An diesem Punkt sollte Ihre `App.jsx`-Datei so aussehen:

```jsx
import { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

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

Das ist genug für einen Artikel. Hier haben wir Ihnen erklärt, wie React mit Events umgeht und State verarbeitet und Funktionen implementiert, um Aufgaben hinzuzufügen, zu löschen und Aufgaben als abgeschlossen zu markieren. Wir sind fast am Ziel. Im nächsten Artikel werden wir Funktionen implementieren, um bestehende Aufgaben zu bearbeiten und die Aufgabenliste zwischen allen, abgeschlossenen und unvollständigen Aufgaben zu filtern. Wir werden uns dabei auch mit der bedingten UI-Renderung befassen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}
