---
title: "React-Interaktivität: Ereignisse und Zustand"
short-title: React-Ereignisse und -Zustand
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state
l10n:
  sourceCommit: 611edf6335e4a833a6f394d0d98b117e7b0a36bf
---

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}

Nachdem wir unseren Komponentenplan erarbeitet haben, ist es nun an der Zeit, unsere App von einer völlig statischen Benutzeroberfläche zu einer zu aktualisieren, die tatsächlich Interaktionen und Änderungen ermöglicht. In diesem Artikel werden wir dies tun, indem wir uns mit Ereignissen und Zustand befassen und letztendlich eine App erstellen, in der wir erfolgreich Aufgaben hinzufügen, löschen und als erledigt kennzeichnen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>, sowie der <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal-/Kommandozeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        Umgang mit Ereignissen und Zustand in React und deren Verwendung, um die Fallstudien-App interaktiv zu machen.
      </td>
    </tr>
  </tbody>
</table>

## Umgang mit Ereignissen

Wenn Sie bisher nur Vanilla JavaScript geschrieben haben, sind Sie es vielleicht gewohnt, eine separate JavaScript-Datei zu haben, in der Sie einige DOM-Knoten abfragen und Listener dafür anhängen. Zum Beispiel könnte eine HTML-Datei einen Button enthalten wie diesen:

```html
<button type="button">Say hi!</button>
```

Und eine JavaScript-Datei könnte Code haben wie diesen:

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("hi!");
});
```

In JSX befinden sich der Code, der die Benutzeroberfläche beschreibt, direkt neben unseren Ereignis-Listenern:

```jsx
<button type="button" onClick={() => alert("hi!")}>
  Say hi!
</button>
```

In diesem Beispiel fügen wir ein `onClick`-Attribut zum {{htmlelement("button")}}-Element hinzu. Der Wert dieses Attributs ist eine Funktion, die einen Alert auslöst. Dies mag im Widerspruch zu den Best-Practice-Empfehlungen stehen, Listener nicht im HTML zu schreiben, aber denken Sie daran: JSX ist nicht HTML.

Das `onClick`-Attribut hat hier eine besondere Bedeutung: Es teilt React mit, eine bestimmte Funktion auszuführen, wenn der Benutzer auf den Button klickt. Es gibt noch ein paar andere Dinge zu beachten:

- Die {{Glossary("camel_case", "CamelCase-Schreibweise")}} von `onClick` ist wichtig – JSX erkennt `onclick` nicht (es wird bereits in JavaScript für einen spezifischen, verwandten aber anderen Zweck verwendet – Standard-Handler-Eigenschaften wie [`onclick`](/de/docs/Web/API/Element/click_event)).
- Alle Browser-Ereignisse folgen diesem Format in JSX – `on`, gefolgt vom Namen des Ereignisses.

Wenden wir dies auf unsere App an, beginnend mit der `Form.jsx`-Komponente.

### Umgang mit Formularübermittlung

Erstellen Sie am Anfang der `Form()`-Komponentenfunktion (d.h. direkt unter der Zeile `function Form() {`) eine Funktion namens `handleSubmit()`. Diese Funktion sollte [das Standardverhalten des `submit`-Ereignisses verhindern](/de/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behavior). Danach sollte sie einen `alert()` auslösen, der alles sagen kann, was Sie möchten. Es sollte so aussehen:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  alert("Hello, world!");
}
```

Um diese Funktion zu verwenden, fügen Sie dem [`<form>`](/de/docs/Web/HTML/Reference/Elements/form)-Element ein `onSubmit`-Attribut hinzu und legen Sie dessen Wert auf die `handleSubmit`-Funktion fest:

```jsx
<form onSubmit={handleSubmit}>{/* … */}</form>
```

Gehen Sie nun zurück zu Ihrem Browser und klicken Sie auf den "Hinzufügen"-Button. Ihr Browser zeigt Ihnen einen Alert-Dialog mit den Worten "Hello, world!" – oder was auch immer Sie dort schreiben wollten.

## Callback-Props

In React-Anwendungen ist Interaktivität selten auf nur eine Komponente beschränkt: Ereignisse, die in einer Komponente auftreten, wirken sich auf andere Teile der App aus. Wenn wir die Möglichkeit bekommen, neue Aufgaben zu erstellen, wirken sich die Vorgänge in der `<Form />`-Komponente auf die Liste aus, die in `<App />` gerendert wird.

Unsere `handleSubmit()`-Funktion soll letztlich dabei helfen, eine neue Aufgabe zu erstellen. Daher benötigen wir einen Weg, um Informationen von `<Form />` zu `<App />` zu übertragen. Wir können keinen Datenfluss von Kind- zu Elternelementen auf die gleiche Weise erzielen wie bei standardmäßigen Props von Eltern- zu Kindelementen. Stattdessen können wir in `<App />` eine Funktion schreiben, die einige Daten aus unserem Formular als Eingabe erwartet, und diese Funktion dann als Prop an `<Form />` übergeben. Diese Funktion-als-Prop wird **Callback-Prop** genannt. Sobald wir unsere Callback-Prop haben, können wir sie innerhalb von `<Form />` aufrufen, um die richtigen Daten an `<App />` zu senden.

### Umgang mit Formularübermittlung via Callbacks

Erstellen Sie innerhalb der `App()`-Funktion in `App.jsx` eine Funktion namens `addTask()`, die einen einzelnen Parameter namens `name` hat:

```jsx
function addTask(name) {
  alert(name);
}
```

Als nächstes geben Sie `addTask()` als Prop in `<Form />` ein. Der Prop-Name kann beliebig sein, aber wählen Sie einen Namen, den Sie später verstehen werden. Etwas wie `addTask` funktioniert, weil es den Namen der Funktion sowie ihre Funktionalität widerspiegelt. Ihre `<Form />`-Komponentenaufrufe sollten wie folgt aktualisiert werden:

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

Wenn Sie im Browser auf den "Hinzufügen"-Button klicken, funktioniert die `addTask()`-Callback-Funktion, aber es wäre nett, wenn der Alert uns zeigen würde, was wir in unser Eingabefeld tippen! Das werden wir als nächstes tun.

### Nebenbemerkung: eine Notiz zu Namenskonventionen

Wir haben die `addTask()`-Funktion als Prop `addTask` in die `<Form />`-Komponente eingefügt, damit die Beziehung zwischen der `addTask()` _Funktion_ und der `addTask` _Prop_ so klar wie möglich bleibt. Beachten Sie jedoch, dass Prop-Namen nichts Bestimmtes sein _müssen_. Wir könnten `addTask()` unter jedem anderen Namen in `<Form />` einfügen, wie z.B. so:

```diff
- <Form addTask={addTask} />
+ <Form onSubmit={addTask} />
```

Dies würde die `addTask()`-Funktion der `<Form />`-Komponente als Prop `onSubmit` zur Verfügung stellen. Dieses Prop könnte in `Form.jsx` wie folgt verwendet werden:

```diff
function handleSubmit(event) {
  event.preventDefault();
- props.addTask("Say hello!");
+ props.onSubmit("Say hello!");
}
```

Hier weist uns das Präfix `on` darauf hin, dass das Prop eine Callback-Funktion ist; `Submit` gibt uns den Hinweis, dass ein Übermittlungsereignis diese Funktion auslösen wird.

Während Callback-Props oft den Namen vertrauter Ereignishandler wie `onSubmit` oder `onClick` haben, können sie fast beliebig benannt werden, solange ihre Bedeutung klar ist. Eine hypothetische `<Menu />`-Komponente könnte z.B. eine Callback-Funktion enthalten, die ausgeführt wird, wenn das Menü geöffnet wird, sowie eine separate Callback-Funktion, die ausgeführt wird, wenn es geschlossen wird:

```jsx
<Menu onOpen={() => console.log("Hi!")} onClose={() => console.log("Bye!")} />
```

Diese `on*`-Namenskonvention ist im React-Ökosystem sehr verbreitet. Behalten Sie dies im Hinterkopf, während Sie weiter lernen. Zur besseren Verständlichkeit werden wir für den Rest dieses Tutorials bei Prop-Namen wie `addTask` bleiben. Wenn Sie beim Lesen dieses Abschnitts irgendwelche Prop-Namen geändert haben, stellen Sie sicher, dass Sie sie vor dem Fortfahren zurückändern!

## Daten beibehalten und ändern mit Zustand

Bisher haben wir Props verwendet, um Daten durch unsere Komponenten zu übergeben, und das hat uns gut geholfen. Da wir uns jetzt mit Interaktivität beschäftigen, benötigen wir jedoch die Möglichkeit, neue Daten zu erstellen, diese zu behalten und später zu aktualisieren. Props sind nicht das richtige Werkzeug dafür, da sie unveränderlich sind – eine Komponente kann ihre eigenen Props nicht ändern oder erstellen.

Hier kommt der **Zustand** ins Spiel. Wenn wir an Props als Kommunikationsmittel zwischen Komponenten denken, können wir den Zustand als Möglichkeit betrachten, Komponenten "Gedächtnis" zu verleihen – Informationen, die sie festhalten und bei Bedarf aktualisieren können.

React bietet eine spezielle Funktion zur Einführung von Zustand in eine Komponente, die passenderweise `useState()` genannt wird.

> **Note:** `useState()` gehört zu einer speziellen Kategorie von Funktionen, die als **Hooks** bezeichnet werden, von denen jede verwendet werden kann, um einer Komponente neue Funktionalität hinzuzufügen. Wir werden später mehr über andere Hooks lernen.

Um `useState()` zu verwenden, müssen wir es aus dem React-Modul importieren. Fügen Sie die folgende Zeile oben in Ihre `Form.jsx`-Datei ein, über der Definition der `Form()`-Funktion:

```jsx
import { useState } from "react";
```

`useState()` nimmt ein einzelnes Argument entgegen, das den Anfangswert des Zustands bestimmt. Dieses Argument kann ein String, eine Zahl, ein Array, ein Objekt oder ein anderer JavaScript-Datentyp sein. `useState()` gibt ein Array zurück, das zwei Elemente enthält. Das erste Element ist der aktuelle Wert des Zustands; das zweite Element ist eine Funktion, mit der der Zustand aktualisiert werden kann.

Lassen Sie uns einen `name`-Zustand erstellen. Schreiben Sie Folgendes über Ihrer `handleSubmit()`-Funktion, innerhalb von `Form()`:

```jsx
const [name, setName] = useState("Learn React");
```

Mehrere Dinge passieren in dieser Zeile Code:

- Wir definieren eine Konstante `name` mit dem Wert `"Learn React"`.
- Wir definieren eine Funktion mit dem Namen `setName()`, deren Aufgabe es ist, `name` zu ändern.
- `useState()` gibt diese beiden Dinge in einem Array zurück, sodass wir [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um sie beiden in separaten Variablen zu erfassen.

### Zustand lesen

Sie können den `name`-Zustand sofort in Aktion sehen. Fügen Sie dem Input des Formulars ein `value`-Attribut hinzu und setzen Sie dessen Wert auf `name`. Ihr Browser wird "Learn React" im Input rendern.

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

Ändern Sie "Learn React" in einen leeren String, wenn Sie fertig sind; das ist es, was wir für unseren anfänglichen Zustand wollen:

```jsx
const [name, setName] = useState("");
```

### Benutzereingaben lesen

Bevor wir den Wert von `name` ändern können, müssen wir die Eingaben des Benutzers erfassen, während er tippt. Dafür können wir dem `onChange`-Ereignis lauschen. Lassen Sie uns eine `handleChange()`-Funktion schreiben und dafür am `<input />`-Element lauschen.

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

Derzeit wird sich der Wert Ihres Inputs nicht ändern, wenn Sie versuchen, Text einzugeben, aber Ihr Browser wird das Wort "Typing!" in die JavaScript-Konsole loggen, was bedeutet, dass unser Ereignis-Listener am Input hängt.

Um die Tastenanschläge des Benutzers zu lesen, müssen wir auf die `value`-Eigenschaft des Inputs zugreifen. Dies können wir tun, indem wir das `event`-Objekt lesen, das `handleChange()` erhält, wenn es aufgerufen wird. `event` hat wiederum [eine `target`-Eigenschaft](/de/docs/Web/API/Event/target), die das Element repräsentiert, das das `change`-Ereignis ausgelöst hat. Das ist unser Input. Also ist `event.target.value` der Text innerhalb des Inputs.

Sie können diesen Wert mit `console.log()` in der Konsole Ihres Browsers sehen. Versuchen Sie, die `handleChange()`-Funktion wie folgt zu aktualisieren, und tippen Sie in das Input-Feld, um das Ergebnis in Ihrer Konsole zu sehen:

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

### Zustand aktualisieren

Das Loggen reicht nicht aus – wir wollen tatsächlich speichern, was der Benutzer eingibt, und es im Input darstellen! Ändern Sie Ihren `console.log()`-Aufruf in `setName()`, wie unten gezeigt:

```jsx
function handleChange(event) {
  setName(event.target.value);
}
```

Jetzt, wenn Sie in den Input tippen, füllen Ihre Tastenanschläge das Input-Feld aus, wie Sie es erwarten würden.

Wir haben einen weiteren Schritt: Wir müssen unsere `handleSubmit()`-Funktion ändern, damit sie `props.addTask` mit `name` als Argument aufruft. Denken Sie an unser Callback-Prop? Dies wird dazu dienen, die Aufgabe an die `App`-Komponente zurückzusenden, damit wir sie zu einem späteren Zeitpunkt unserer Liste von Aufgaben hinzufügen können. Als gute Praxis sollten Sie das Eingabefeld löschen, nachdem Ihr Formular übermittelt wurde. Rufen Sie `setName()` erneut mit einem leeren String auf, um dies zu tun:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask(name);
  setName("");
}
```

Endlich können Sie etwas in das Eingabefeld in Ihrem Browser tippen und auf _Hinzufügen_ klicken – was auch immer Sie getippt haben, wird in einem Alert-Dialog angezeigt.

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
> Sie werden feststellen, dass Sie leere Aufgaben übermitteln können, indem Sie einfach auf den `Hinzufügen`-Button klicken, ohne einen Aufgabennamen einzugeben. Können Sie sich eine Möglichkeit überlegen, dies zu verhindern? Als Hinweis: Sie müssen wahrscheinlich irgendeine Art von Überprüfung in die `handleSubmit()`-Funktion einfügen.

## Alles zusammenbringen: Eine Aufgabe hinzufügen

Jetzt, da wir uns mit Ereignissen, Callback-Props und Hooks befasst haben, sind wir bereit, Funktionalität zu schreiben, die es einem Benutzer ermöglicht, eine neue Aufgabe direkt in seinem Browser hinzuzufügen.

### Aufgaben als Zustand

Wir müssen `useState` in `App.jsx` importieren, damit wir unsere Aufgaben im Zustand speichern können. Fügen Sie Folgendes am Anfang Ihrer `App.jsx`-Datei hinzu:

```jsx
import { useState } from "react";
```

Wir möchten `props.tasks` in den `useState()`-Hook übergeben – das wird seinen Anfangszustand beibehalten. Fügen Sie Folgendes direkt am Anfang Ihrer `App()`-Funktionsdefinition ein:

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

Jetzt können wir unsere `taskList`-Abbildung so ändern, dass sie das Ergebnis der Abbildung von `tasks` ist, anstelle von `props.tasks`. Ihre `taskList`-Konstantendeklaration sollte jetzt so aussehen:

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

Wir haben jetzt einen `setTasks`-Hook, den wir in unserer `addTask()`-Funktion verwenden können, um unsere Liste von Aufgaben zu aktualisieren. Es gibt jedoch ein Problem: Wir können nicht einfach das `name`-Argument von `addTask()` in `setTasks` übergeben, da `tasks` ein Array von Objekten ist und `name` ein String ist. Wenn wir das versuchen würden, würde das Array durch den String ersetzt.

Zuallererst müssen wir `name` in ein Objekt einfügen, das die gleiche Struktur wie unsere vorhandenen Aufgaben hat. Innerhalb der `addTask()`-Funktion erstellen wir ein `newTask`-Objekt, das dem Array hinzugefügt werden soll.

Dann müssen wir ein neues Array erstellen, in dem diese neue Aufgabe hinzugefügt wurde, und dann den Zustand der Aufgabendaten auf diesen neuen Zustand aktualisieren. Dazu können wir die Spread-Syntax verwenden, um [das vorhandene Array zu kopieren](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copying_an_array), und unser Objekt am Ende hinzufügen. Wir geben dieses Array dann in `setTasks()` ein, um den Zustand zu aktualisieren.

Wenn man das alles zusammenfügt, sollte Ihre `addTask()`-Funktion so aussehen:

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

Jetzt können Sie den Browser verwenden, um eine Aufgabe zu unseren Daten hinzuzufügen! Geben Sie etwas in das Formular ein und klicken Sie auf "Hinzufügen" (oder drücken Sie die <kbd>Eingabetaste</kbd>), und Sie werden Ihre neue Todo-Aufgabe in der Benutzeroberfläche erscheinen sehen!

**Aber wir haben ein weiteres Problem**: Unsere `addTask()`-Funktion gibt jeder Aufgabe die gleiche `id`. Das beeinträchtigt die Barrierefreiheit und macht es unmöglich für React, zukünftige Aufgaben mit dem `key`-Prop auseinanderzuhalten. Tatsächlich wird React Ihnen eine Warnung in Ihrer DevTools-Konsole geben – "Warning: Encountered two children with the same key…"

Wir müssen dies beheben. Einzigartige Kennungen zu erzeugen ist ein schwieriges Problem – eines, für das die JavaScript-Community einige hilfreiche Bibliotheken geschrieben hat. Wir werden [nanoid](https://github.com/ai/nanoid) verwenden, weil es klein ist und gut funktioniert.

Stellen Sie sicher, dass Sie sich im Stammverzeichnis Ihrer Anwendung befinden, und führen Sie den folgenden Terminalbefehl aus:

```bash
npm install nanoid
```

> [!NOTE]
> Wenn Sie Yarn verwenden, benötigen Sie stattdessen Folgendes: `yarn add nanoid`.

Nun können wir `nanoid` verwenden, um eindeutige IDs für unsere neuen Aufgaben zu erstellen. Importieren Sie es zuerst, indem Sie die folgende Zeile am Anfang von `App.jsx` einfügen:

```jsx
import { nanoid } from "nanoid";
```

Aktualisieren Sie nun `addTask()`, damit jede Aufgaben-ID ein Präfix `todo-` plus eine eindeutige von nanoid generierte Zeichenkette wird. Aktualisieren Sie Ihre `newTask`-Konstantendeklaration zu folgendem:

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

Speichern Sie alles und versuchen Sie Ihre App erneut – jetzt können Sie Aufgaben hinzufügen, ohne die Warnung über doppelte IDs zu erhalten.

## Umweg: Aufgaben zählen

Jetzt, da wir neue Aufgaben hinzufügen können, fällt Ihnen möglicherweise ein Problem auf: Unsere Überschrift lautet immer noch "3 tasks remaining", unabhängig davon, wie viele Aufgaben wir haben! Wir können dies beheben, indem wir die Länge von `taskList` zählen und den Text unserer Überschrift entsprechend ändern.

Fügen Sie dies innerhalb Ihrer `App()`-Definition, vor der Rückgabeanweisung, hinzu:

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

Dies ist fast richtig, außer dass, wenn unsere Liste jemals eine einzige Aufgabe enthalten sollte, die Überschrift immer noch das Wort "tasks" verwendet. Wir können dies ebenfalls zu einer Variablen machen. Aktualisieren Sie den Code, den Sie gerade hinzugefügt haben, wie folgt:

```jsx
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

Jetzt können Sie den Textinhalt der Listenüberschrift mit der `headingText`-Variablen ersetzen. Aktualisieren Sie Ihr `<h2>` so:

```jsx
<h2 id="list-heading">{headingText}</h2>
```

Speichern Sie die Datei, gehen Sie zurück zu Ihrem Browser und versuchen Sie, einige Aufgaben hinzuzufügen: Der Zähler sollte sich jetzt wie erwartet aktualisieren.

## Eine Aufgabe abschließen

Sie stellen möglicherweise fest, dass, wenn Sie auf ein Kontrollkästchen klicken, es sich entsprechend an- und abmarkiert. Als Merkmal von HTML weiß der Browser, wie man merkt, welche Kontrollkästchen markiert oder nicht markiert sind, ohne unsere Hilfe. Dieses Merkmal verbirgt jedoch ein Problem: Das Umschalten eines Kontrollkästchens ändert nicht den Zustand in unserer React-Anwendung. Dies bedeutet, dass der Browser und unsere App jetzt nicht synchron sind. Wir müssen unseren eigenen Code schreiben, um den Browser wieder in Einklang mit unserer App zu bringen.

### Den Fehler nachweisen

Bevor wir das Problem beheben, lassen Sie uns beobachten, wie es passiert.

Wir beginnen damit, eine `toggleTaskCompleted()`-Funktion in unserer `App()`-Komponente zu schreiben. Diese Funktion wird einen `id`-Parameter haben, aber wir werden ihn zunächst nicht verwenden. Für den Moment werden wir die erste Aufgabe im Array in die Konsole loggen – wir werden untersuchen, was passiert, wenn wir sie in unserem Browser an- oder abmarkieren:

Fügen Sie dies direkt über Ihrer `taskList`-Konstantendeklaration hinzu:

```jsx
function toggleTaskCompleted(id) {
  console.log(tasks[0]);
}
```

Als nächstes fügen wir `toggleTaskCompleted` zu den Props jeder `<Todo />`-Komponente hinzu, die innerhalb unserer `taskList`-Abbildung gerendert wird; aktualisieren Sie es folgendermaßen:

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

Gehen Sie als nächstes zu Ihrer `Todo.jsx`-Komponente und fügen Sie ein `onChange`-Handler zu Ihrem `<input />`-Element hinzu, das eine anonyme Funktion verwenden sollte, um `props.toggleTaskCompleted()` mit einem Parameter von `props.id` aufzurufen. Das `<input />` sollte jetzt so aussehen:

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

Speichern Sie alles und kehren Sie zu Ihrem Browser zurück; beachten Sie, dass unsere erste Aufgabe, Eat, markiert ist. Öffnen Sie Ihre JavaScript-Konsole und klicken Sie dann auf das Kontrollkästchen neben Eat. Es wird abmarkiert, wie wir es erwarten. Ihre JavaScript-Konsole wird jedoch etwas wie dies loggen:

```plain
Object { id: "task-0", name: "Eat", completed: true }
```

Das Kontrollkästchen wird im Browser abmarkiert, aber unsere Konsole sagt uns, dass Eat immer noch abgeschlossen ist. Das werden wir als Nächstes beheben!

### Synchronisierung des Browsers mit unseren Daten

Betrachten wir unsere `toggleTaskCompleted()`-Funktion in `App.jsx` noch einmal. Wir möchten, dass sie nur die `completed`-Eigenschaft der Aufgabe ändert, die umgeschaltet wurde, und alle anderen in Ruhe lässt. Dazu werden wir die Aufgabenliste `map()` überlaufen und nur die umgeschaltete Aufgabe ändern.

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

Hier definieren wir eine Konstante `updatedTasks`, die über das ursprüngliche `tasks`-Array mappt. Wenn die `id`-Eigenschaft der Aufgabe mit der der Funktion übergebenen `id` übereinstimmt, verwenden wir [Object-Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um ein neues Objekt zu erstellen, und schalten die `completed`-Eigenschaft dieses Objekts um, bevor wir es zurückgeben. Wenn es nicht übereinstimmt, geben wir das ursprüngliche Objekt zurück.

Dann rufen wir `setTasks()` mit diesem neuen Array auf, um unseren Zustand zu aktualisieren.

## Eine Aufgabe löschen

Das Löschen einer Aufgabe wird einem ähnlichen Muster wie das Umschalten ihres abgeschlossenen Zustands folgen: Wir müssen eine Funktion für die Aktualisierung unseres Zustands definieren, dann diese Funktion als Prop in `<Todo />` übergeben und sie aufrufen, wenn das richtige Ereignis eintritt.

### Die `deleteTask`-Callback-Prop

Hier werden wir beginnen, indem wir eine `deleteTask()`-Funktion in Ihrer `App`-Komponente schreiben. Genau wie `toggleTaskCompleted()` wird diese Funktion einen `id`-Parameter entgegennehmen, und wir werden diese `id` zu Anfang zur Konsole loggen. Fügen Sie die folgende Zeile unter `toggleTaskCompleted()` hinzu:

```jsx
function deleteTask(id) {
  console.log(id);
}
```

Als nächstes fügen wir ein weiteres Callback-Prop zu unserem Array von `<Todo />`-Komponenten hinzu:

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

In `Todo.jsx` wollen wir `props.deleteTask()` aufrufen, wenn die "Löschen"-Schaltfläche gedrückt wird. `deleteTask()` muss die ID der Aufgabe kennen, die es aufgerufen hat, damit es die richtige Task aus dem Zustand löschen kann.

Aktualisieren Sie die "Löschen"-Schaltfläche in `Todo.jsx`, wie folgt:

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

Jetzt sollte Ihre Browserkonsole die ID der zugehörigen Aufgabe protokollieren, wenn Sie auf eine der "Löschen"-Schaltflächen in der App klicken.

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

## Aufgaben aus Zustand und Benutzeroberfläche löschen

Jetzt, da wir wissen, dass `deleteTask()` korrekt aufgerufen wird, können wir unseren `setTasks()`-Hook in `deleteTask()` aufrufen, um diese Aufgabe tatsächlich aus dem Zustand der App sowie visuell aus der App-Benutzeroberfläche zu löschen. Da `setTasks()` ein Array als Argument erwartet, sollten wir ihm ein neues Array bereitstellen, das die vorhandenen Aufgaben kopiert, _außer_ der Aufgabe, deren ID mit dem an `deleteTask()` übergebenen ID-Argument übereinstimmt.

Dies ist eine perfekte Gelegenheit, um [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) zu verwenden. Wir können jede Aufgabe testen und eine Aufgabe vom neuen Array ausschließen, wenn ihre `id`-Eigenschaft mit dem `id`-Argument übereinstimmt, das an `deleteTask()` übergeben wurde.

Aktualisieren Sie die `deleteTask()`-Funktion in Ihrer `App.jsx`-Datei wie folgt:

```jsx
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}
```

Versuchen Sie, Ihre App erneut zu starten. Jetzt sollten Sie in der Lage sein, eine Aufgabe aus Ihrer App zu löschen!

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

Das reicht für einen Artikel. Hier haben wir Ihnen erklärt, wie React mit Ereignissen umgeht und Zustände behandelt, sowie Funktionalitäten implementiert, um Aufgaben hinzuzufügen, zu löschen und als erledigt zu kennzeichnen. Wir sind fast am Ziel. Im nächsten Artikel implementieren wir die Funktionalität, um vorhandene Aufgaben zu bearbeiten und die Aufgabenliste zwischen allen, erledigten und unerledigten Aufgaben zu filtern. Wir werden dabei auch auf die bedingte UI-Renderung eingehen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}
