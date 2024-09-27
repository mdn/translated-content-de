---
title: "Reakt-Interaktivität: Ereignisse und Zustand"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Mit unserem erarbeiteten Komponentenplan ist es nun an der Zeit, unsere App von einer vollständig statischen Benutzeroberfläche in eine zu verwandeln, die tatsächlich Interaktion und Veränderungen ermöglicht. In diesem Artikel gehen wir darauf ein, wie man Ereignisse und Zustand behandelt, und enden mit einer App, in der wir erfolgreich Aufgaben hinzufügen und löschen sowie Aufgaben als erledigt markieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen,
          Kenntnisse des
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminals/Kommandozeile</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie man Ereignisse und Zustand in Reakt behandelt und diese nutzt,
        um die Fallstudien-App interaktiv zu gestalten.
      </td>
    </tr>
  </tbody>
</table>

## Umgang mit Ereignissen

Wenn Sie bisher nur mit Vanilla-JavaScript gearbeitet haben, sind Sie möglicherweise daran gewöhnt, eine separate JavaScript-Datei zu haben, in der Sie einige DOM-Knoten abfragen und Listener an diese anhängen. Ein HTML-Dokument könnte beispielsweise einen Button enthalten, wie diesen hier:

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

In JSX befindet sich der Code, der die Benutzeroberfläche beschreibt, direkt neben unseren Ereignis-Handlern:

```jsx
<button type="button" onClick={() => alert("hi!")}>
  Say hi!
</button>
```

In diesem Beispiel fügen wir dem {{htmlelement("button")}}-Element ein `onClick`-Attribut hinzu. Der Wert dieses Attributs ist eine Funktion, die einen einfachen Alarm auslöst. Dies mag im Widerspruch zu den Best-Practice-Empfehlungen stehen, keine Ereignis-Listener in HTML zu schreiben, aber denken Sie daran: JSX ist kein HTML.

Das `onClick`-Attribut hat hier eine besondere Bedeutung: Es weist Reakt an, eine bestimmte Funktion auszuführen, wenn der Benutzer auf den Button klickt. Es gibt ein paar andere Dinge zu beachten:

- Die [camel-cased](/de/docs/Glossary/camel_case) Schreibweise von `onClick` ist wichtig – JSX erkennt `onclick` nicht (es wird bereits in JavaScript für einen bestimmten Zweck verwendet, der ähnlich, aber unterschiedlich ist – standardmäßige [`onclick`](/de/docs/Web/API/Element/click_event) Handler-Eigenschaften).
- Alle Browser-Ereignisse folgen diesem Format in JSX – `on`, gefolgt vom Namen des Ereignisses.

Wenden wir dies auf unsere App an, beginnend mit der `Form.jsx`-Komponente.

### Umgang mit Formularübermittlung

Erstellen Sie oben in der `Form()`-Komponentenfunktion (d.h. direkt unter der Zeile `function Form() {`) eine Funktion namens `handleSubmit()`. Diese Funktion sollte [das Standardverhalten des `submit`-Ereignisses verhindern](/de/docs/Learn/JavaScript/Building_blocks/Events#preventing_default_behavior). Danach sollte sie einen `alert()` auslösen, der anzeigen kann, was Sie möchten. Es sollte am Ende so aussehen:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  alert("Hello, world!");
}
```

Um diese Funktion zu verwenden, fügen Sie dem `<form>`-Element ein `onSubmit`-Attribut hinzu und setzen dessen Wert auf die Funktion `handleSubmit`:

```jsx
<form onSubmit={handleSubmit}>
```

Wenn Sie nun in Ihren Browser zurückkehren und auf die Schaltfläche "Hinzufügen" klicken, zeigt Ihr Browser ein Dialogfeld mit den Worten "Hello, world!" an – oder was auch immer Sie dort eingegeben haben.

## Callback-Props

In Reakt-Anwendungen ist Interaktivität selten auf nur eine Komponente beschränkt: Ereignisse, die in einer Komponente auftreten, wirken sich auf andere Teile der App aus. Wenn wir beginnen, neue Aufgaben erstellen zu können, wirken sich Dinge, die in der `<Form />`-Komponente passieren, auf die in `<App />` gerenderte Liste aus.

Wir möchten, dass unsere Funktion `handleSubmit()` uns letztendlich hilft, eine neue Aufgabe zu erstellen, daher benötigen wir eine Möglichkeit, Informationen von `<Form />` zu `<App />` zu übermitteln. Wir können keine Daten vom Kind zum Elternteil auf dieselbe Weise übergeben, wie wir Daten mit Standard-Props vom Elternteil zum Kind übergeben. Stattdessen können wir eine Funktion in `<App />` schreiben, die erwartet, dass einige Daten von unserem Formular als Eingabe empfangen werden, und diese Funktion dann als Prop an `<Form />` übergeben. Diese Funktion-als-Prop wird als **Callback-Prop** bezeichnet. Sobald wir unser Callback-Prop haben, können wir es in `<Form />` aufrufen, um die richtigen Daten an `<App />` zu senden.

### Umgang mit Formularübermittlungen über Callback-Methoden

Erstellen Sie innerhalb der `App()`-Funktion in `App.jsx` eine Funktion namens `addTask()`, die einen Parameter namens `name` hat:

```jsx
function addTask(name) {
  alert(name);
}
```

Übergeben Sie als nächstes `addTask()` als Prop an `<Form />`. Das Prop kann beliebig benannt werden, aber wählen Sie einen Namen, den Sie später verstehen werden. Etwas wie `addTask` funktioniert gut, weil es den Namen der Funktion sowie das beschreibt, was die Funktion tun wird. Ihr `<Form />`-Komponentenaufruf sollte wie folgt aktualisiert werden:

```jsx
<Form addTask={addTask} />
```

Um dieses Prop zu verwenden, ändern Sie die Signatur der `Form()`-Funktion in `Form.jsx`, sodass sie `props` als Parameter akzeptiert:

```jsx
function Form(props) {
  // ...
}
```

Schließlich können wir dieses Prop in der Funktion `handleSubmit()` in Ihrer `<Form />`-Komponente verwenden! Aktualisieren Sie es wie folgt:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask("Say hello!");
}
```

Das Klicken auf die Schaltfläche "Hinzufügen" in Ihrem Browser wird beweisen, dass die `addTask()`-Callback-Funktion funktioniert, aber es wäre schön, wenn wir die Eingabe, die wir in unser Eingabefeld machen, angezeigt bekämen! Dies werden wir als nächstes tun.

### Hinweis: zu Namenskonventionen

Wir haben die `addTask()`-Funktion als Prop `addTask` in die `<Form />`-Komponente übergeben, damit die Beziehung zwischen der `addTask()`-Funktion und dem `addTask`-Prop so klar wie möglich bleibt. Beachten Sie jedoch, dass Prop-Namen nicht unbedingt etwas Bestimmtes sein müssen. Wir hätten `addTask()` unter einem anderen Namen in `<Form />` übergeben können, zum Beispiel so:

```diff
- <Form addTask={addTask} />
+ <Form onSubmit={addTask} />
```

Dies würde die `addTask()`-Funktion für die `<Form />`-Komponente als Prop `onSubmit` verfügbar machen. Dieses Prop könnte in `Form.jsx` wie folgt verwendet werden:

```diff
function handleSubmit(event) {
  event.preventDefault();
- props.addTask("Say hello!");
+ props.onSubmit("Say hello!");
}
```

Hier sagt uns das Präfix `on`, dass das Prop eine Callback-Funktion ist; `Submit` ist unser Hinweis, dass ein Übermittlungsereignis diese Funktion auslösen wird.

Während Callback-Props häufig den Namen bekannter Ereignis-Handler wie `onSubmit` oder `onClick` tragen, können sie fast beliebig benannt werden, um ihre Bedeutung klar zu machen. Eine hypothetische `<Menu />`-Komponente könnte eine Callback-Funktion enthalten, die ausgeführt wird, wenn das Menü geöffnet wird, sowie eine separate Callback-Funktion, die ausgeführt wird, wenn es geschlossen wird:

```jsx
<Menu onOpen={() => console.log("Hi!")} onClose={() => console.log("Bye!")} />
```

Diese `on*`-Namenskonvention ist im Reakt-Ökosystem sehr verbreitet, halten Sie sie also im Hinterkopf, während Sie weiterlernen. Zur Klarheit werden wir für den Rest dieses Tutorials bei Namen wie `addTask` und ähnlichen Prop-Namen bleiben. Wenn Sie beim Lesen dieses Abschnitts Prop-Namen geändert haben, stellen Sie sicher, dass Sie sie vor dem Fortfahren zurücksetzen!

## Datenpersistenz und -änderung mit Zustand

Bisher haben wir Props verwendet, um Daten durch unsere Komponenten zu leiten, und das hat bisher gut funktioniert. Da wir jetzt jedoch mit Interaktivität zu tun haben, benötigen wir die Möglichkeit, neue Daten zu erstellen, sie zu speichern und später zu aktualisieren. Props sind für diesen Job nicht das richtige Werkzeug, da sie unveränderlich sind – eine Komponente kann ihre eigenen Props nicht ändern oder erstellen.

An dieser Stelle kommt der **Zustand** ins Spiel. Wenn wir Props als Kommunikationsmittel zwischen Komponenten betrachten, können wir den Zustand als eine Möglichkeit betrachten, Komponenten "Gedächtnis" zu geben – Informationen, die sie behalten und bei Bedarf aktualisieren können.

Reakt bietet eine spezielle Funktion zum Einführen von Zustand in eine Komponente, passend `useState()` genannt.

> **Hinweis:** `useState()` gehört zu einer speziellen Kategorie von Funktionen namens **Hooks**, von denen jede verwendet werden kann, um einer Komponente neue Funktionalität hinzuzufügen. Über andere Hooks lernen wir später mehr.

Um `useState()` zu verwenden, müssen wir es aus dem Reakt-Modul importieren. Fügen Sie die folgende Zeile oben in Ihrer `Form.jsx`-Datei hinzu, über der `Form()`-Funktionsdefinition:

```jsx
import { useState } from "react";
```

`useState()` nimmt ein einziges Argument, das den Anfangswert des Zustands bestimmt. Dieses Argument kann ein String, eine Zahl, ein Array, ein Objekt oder ein anderer JavaScript-Datentyp sein. `useState()` gibt ein Array zurück, das zwei Elemente enthält. Das erste Element ist der aktuelle Wert des Zustands; das zweite ist eine Funktion, die zum Aktualisieren des Zustands verwendet werden kann.

Lassen Sie uns einen `name`-Zustand erstellen. Schreiben Sie das Folgende über Ihre `handleSubmit()`-Funktion, innerhalb von `Form()`:

```jsx
const [name, setName] = useState("Learn React");
```

In dieser Codezeile passieren mehrere Dinge:

- Wir definieren eine Konstante `name` mit dem Wert `"Learn React"`.
- Wir definieren eine Funktion, deren Aufgabe es ist, `name` zu ändern, namens `setName()`.
- `useState()` gibt diese beiden Dinge in einem Array zurück, also verwenden wir [Destrukturierung von Arrays](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), um sie beide in separaten Variablen zu speichern.

### Zustand lesen

Sie können den `name`-Zustand sofort in Aktion sehen. Fügen Sie dem Eingabefeld des Formulars ein `value`-Attribut hinzu und setzen Sie dessen Wert auf `name`. Ihr Browser zeigt "Learn React" im Eingabefeld an.

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

Ändern Sie "Learn React" nach dem Testen in einen leeren String, denn dies möchten wir als unseren Anfangszustand:

```jsx
const [name, setName] = useState("");
```

### Benutzereingabe lesen

Bevor wir den Wert von `name` ändern können, müssen wir die Benutzereingaben erfassen, während der Benutzer tippt. Dazu können wir das `onChange`-Ereignis überwachen. Lassen Sie uns eine `handleChange()`-Funktion schreiben und das `<input />`-Element dafür überwachen.

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

Derzeit wird sich der Wert unseres Eingabefelds nicht ändern, wenn Sie versuchen, Text einzugeben, aber Ihr Browser loggt das Wort "Typing!" in die JavaScript-Konsole, sodass wir wissen, dass unser Ereignis-Listener am Eingabefeld hängt.

Um die Eingaben des Benutzers zu lesen, müssen wir auf die `value`-Eigenschaft des Eingabefelds zugreifen. Dies können wir tun, indem wir das `event`-Objekt lesen, das `handleChange()` erhält, wenn es aufgerufen wird. `event` hat wiederum [eine `target`-Eigenschaft](/de/docs/Web/API/Event/target), die das Element repräsentiert, das das `change`-Ereignis ausgelöst hat. Das ist unser Eingabefeld. `event.target.value` ist also der Text im Eingabefeld.

Sie können diesen Wert mit `console.log()` sehen, indem Sie ihn in Ihrer Browser-Konsole anzeigen lassen. Probieren Sie aus, die `handleChange()`-Funktion wie folgt zu aktualisieren, und geben Sie in das Eingabefeld ein, um das Ergebnis in der Konsole zu sehen:

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

### Zustand aktualisieren

Protokollieren allein reicht nicht – wir möchten tatsächlich speichern, was der Benutzer eingibt, und es im Eingabefeld rendern! Ändern Sie Ihren `console.log()`-Aufruf in `setName()`, wie unten gezeigt:

```jsx
function handleChange(event) {
  setName(event.target.value);
}
```

Nun füllen sich beim Eintippen im Eingabefeld die Tastenanschläge wie erwartet in das Eingabefeld ein.

Wir haben noch einen weiteren Schritt: Wir müssen unsere `handleSubmit()`-Funktion ändern, sodass sie `props.addTask` mit `name` als Argument aufruft. Erinnern Sie sich an unser Callback-Prop? Dies wird verwendet, um die Aufgabe zur `App`-Komponente zurückzusenden, damit wir sie zu einem späteren Zeitpunkt zu unserer Aufgabenliste hinzufügen können. Aus Gründen der guten Praxis sollten Sie das Eingabefeld nach dem Absenden Ihres Formulars leeren, daher werden wir `setName()` erneut mit einem leeren String aufrufen:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask(name);
  setName("");
}
```

Endlich können Sie im Eingabefeld Ihres Browsers etwas eingeben und auf _Hinzufügen_ klicken – was auch immer Sie eingetippt haben, erscheint in einem Dialogfeld.

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
> Sie werden bemerken, dass Sie leere Aufgaben einreichen können, indem Sie einfach die **Hinzufügen**-Taste drücken, ohne einen Aufgabennamen einzugeben. Können Sie sich eine Möglichkeit vorstellen, dies zu verhindern? Als Hinweis: Sie müssen vermutlich eine Art Überprüfung in die `handleSubmit()`-Funktion einfügen.

## Alles zusammenführen: Eine Aufgabe hinzufügen

Da wir nun mit Ereignissen, Callback-Props und Hooks geübt haben, können wir die Funktionalität schreiben, die es einem Benutzer ermöglicht, eine neue Aufgabe von seinem Browser aus hinzuzufügen.

### Aufgaben als Zustand

Wir müssen `useState` in `App.jsx` importieren, damit wir unsere Aufgaben im Zustand speichern können. Fügen Sie das Folgende der Kopfzeile Ihrer `App.jsx`-Datei hinzu:

```jsx
import { useState } from "react";
```

Wir möchten `props.tasks` in den `useState()`-Hook übergeben – dies wird seinen Anfangszustand bewahren. Fügen Sie das Folgende direkt am Anfang Ihrer `App()`-Funktionsdefinition hinzu:

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

Jetzt können wir unser `taskList`-Mapping so ändern, dass es das Ergebnis der Abbildung von `tasks` anstelle von `props.tasks` ist. Ihre `taskList`-Konstantendeklaration sollte jetzt so aussehen:

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

Wir haben nun einen `setTasks`-Hook, den wir in unserer `addTask()`-Funktion verwenden können, um unsere Aufgabenliste zu aktualisieren. Es gibt jedoch ein Problem: Wir können das `name`-Argument von `addTask()` nicht einfach in `setTasks` einfügen, da `tasks` ein Array von Objekten ist und `name` ein String ist. Wenn wir dies versuchen würden, würde das Array durch den String ersetzt.

Zuerst müssen wir `name` in ein Objekt stecken, das die gleiche Struktur wie unsere vorhandenen Aufgaben hat. Innerhalb der `addTask()`-Funktion erstellen wir ein `newTask`-Objekt, das dem Array hinzugefügt wird.

Dann müssen wir ein neues Array erstellen, das diese neue Aufgabe enthält, und dann den Zustand der Aufgabendaten auf diesen neuen Zustand aktualisieren. Hierfür können wir Spread-Syntax verwenden, um [das vorhandene Array zu kopieren](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copying_an_array), und unser Objekt am Ende hinzufügen. Dann übergeben wir dieses Array in `setTasks()`, um den Zustand zu aktualisieren.

Ihr `addTask()`-Funktionsaufruf sollte nun folgendermaßen aussehen:

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

Jetzt können Sie den Browser verwenden, um eine Aufgabe zu unseren Daten hinzuzufügen! Geben Sie irgendetwas in das Formular ein und klicken Sie auf "Hinzufügen" (oder drücken Sie die <kbd>Enter</kbd>-Taste) und Sie sehen Ihren neuen To-Do-Eintrag in der Benutzeroberfläche!

**Allerdings haben wir ein weiteres Problem**: Unsere `addTask()`-Funktion gibt jeder Aufgabe die gleiche `id`. Dies ist schlecht für die Barrierefreiheit und macht es unmöglich, dass Reakt zukünftige Aufgaben anhand des `key`-Props auseinanderhält. Tatsächlich wird Reakt Ihnen in der DevTools-Konsole eine Warnung geben – "Warning: Encountered two children with the same key…"

Wir müssen dies beheben. Einzigartige Bezeichner zu erstellen ist ein schwieriges Problem – eines, für das die JavaScript-Community einige hilfreiche Bibliotheken geschrieben hat. Wir werden [nanoid](https://github.com/ai/nanoid) verwenden, weil es klein ist und funktioniert.

Stellen Sie sicher, dass Sie sich im Stammverzeichnis Ihrer Anwendung befinden, und führen Sie den folgenden Terminalbefehl aus:

```bash
npm install nanoid
```

> [!NOTE]
> Wenn Sie yarn verwenden, benötigen Sie stattdessen folgendes: `yarn add nanoid`.

Jetzt können wir `nanoid` verwenden, um einzigartige IDs für unsere neuen Aufgaben zu erstellen. Importieren Sie es zuerst, indem Sie die folgende Zeile oben in `App.jsx` hinzufügen:

```jsx
import { nanoid } from "nanoid";
```

Aktualisieren wir nun `addTask()`, sodass jede Aufgaben-ID zum Präfix `todo-` plus einem eindeutigen, von nanoid erzeugten String wird. Aktualisieren Sie Ihre `newTask`-Konstantendeklaration auf Folgendes:

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

Speichern Sie alles und probieren Sie Ihre App erneut aus — jetzt können Sie Aufgaben hinzufügen, ohne diese Warnung über doppelte IDs zu erhalten.

## Abstecher: Aufgaben zählen

Jetzt, da wir neue Aufgaben hinzufügen können, bemerken Sie eventuell ein Problem: Unsere Überschrift zeigt immer "3 tasks remaining" an, unabhängig davon, wie viele Aufgaben wir haben! Wir können dies beheben, indem wir die Länge der `taskList` zählen und den Text unserer Überschrift entsprechend ändern.

Fügen Sie dies in Ihrer `App()`-Definition hinzu, bevor Sie die Rückgabe-Anweisung ausführen:

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

Das ist fast richtig, außer dass, wenn unsere Liste jemals eine einzige Aufgabe enthält, die Überschrift immer noch das Wort "tasks" verwendet. Wir können dies auch in eine Variable umwandeln. Aktualisieren Sie den gerade hinzugefügten Code wie folgt:

```jsx
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

Nun können Sie den Textinhalt der Listenüberschrift mit der `headingText`-Variable ersetzen. Aktualisieren Sie Ihr `<h2>` wie folgt:

```jsx
<h2 id="list-heading">{headingText}</h2>
```

Speichern Sie die Datei, gehen Sie zurück zu Ihrem Browser und versuchen Sie, einige Aufgaben hinzuzufügen: Der Zähler sollte sich nun wie erwartet aktualisieren.

## Abschließen einer Aufgabe

Sie bemerken vielleicht, dass beim Klicken auf ein Kontrollkästchen dieses wie erwartet aktiviert und deaktiviert wird. Als Funktion von HTML weiß der Browser, wie er sich merken kann, welche Kontrollkästchen aktiviert oder deaktiviert sind, ohne unsere Hilfe. Diese Funktion verbirgt jedoch ein Problem: Das Umschalten eines Kontrollkästchens ändert nicht den Zustand in unserer Reakt-Anwendung. Dies bedeutet, dass der Browser und unsere App nun nicht mehr synchron sind. Wir müssen unseren eigenen Code schreiben, um den Browser wieder mit unserer App abzugleichen.

### Den Fehler aufzeigen

Bevor wir das Problem beheben, lassen Sie es uns beobachten, wie es passiert.

Wir beginnen mit der Erstellung einer `toggleTaskCompleted()`-Funktion in unserer `App()`-Komponente. Diese Funktion wird einen `id`-Parameter haben, aber wir werden ihn noch nicht verwenden. Für den Moment loggen wir einfach die erste Aufgabe im Array in die Konsole – wir werden beobachten, was passiert, wenn wir sie in unserem Browser aktivieren oder deaktivieren:

Fügen Sie dies direkt über Ihrer `taskList`-Konstantendeklaration hinzu:

```jsx
function toggleTaskCompleted(id) {
  console.log(tasks[0]);
}
```

Fügen Sie als nächstes `toggleTaskCompleted` den Props jeder `<Todo />`-Komponente hinzu, die in Ihrer `taskList` gerendert wurde; aktualisieren Sie es so:

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

Speichern Sie alles und kehren Sie zu Ihrem Browser zurück und bemerken Sie, dass unsere erste Aufgabe, Essen, aktiviert ist. Öffnen Sie Ihre JavaScript-Konsole und klicken Sie dann auf das Kontrollkästchen neben Essen. Es wird deaktiviert, wie wir erwarten. Ihre JavaScript-Konsole wird jedoch etwas wie folgt protokollieren:

```plain
Object { id: "task-0", name: "Eat", completed: true }
```

Das Kontrollkästchen deaktiviert sich im Browser, aber unsere Konsole sagt uns, dass Essen immer noch abgeschlossen ist. Das werden wir als nächstes beheben!

### Den Browser mit unseren Daten synchronisieren

Lassen Sie uns unsere `toggleTaskCompleted()`-Funktion in `App.jsx` erneut betrachten. Wir wollen, dass sie die `completed`-Eigenschaft nur der Aufgabe ändert, die umgeschaltet wurde und alle anderen unverändert lässt. Dazu werden wir mit `map()` über die Aufgabenliste gehen und nur die ändern, die wir abgeschlossen haben.

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

Hier definieren wir eine `updatedTasks`-Konstante, die über das ursprüngliche `tasks`-Array abgebildet wird. Wenn die `id`-Eigenschaft der Aufgabe mit der `id` übereinstimmt, die der Funktion übergeben wurde, verwenden wir [Objekt-Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um ein neues Objekt zu erstellen, und schalten die `completed`-Eigenschaft des Objekts um, bevor wir es zurückgeben. Wenn es nicht übereinstimmt, geben wir das ursprüngliche Objekt zurück.

Dann rufen wir `setTasks()` mit diesem neuen Array auf, um unseren Zustand zu aktualisieren.

## Eine Aufgabe löschen

Das Löschen einer Aufgabe folgt einem ähnlichen Muster wie das Umschalten ihres abgeschlossenen Zustands: Wir müssen eine Funktion definieren, um unseren Zustand zu aktualisieren, dann diese Funktion als Prop an `<Todo />` übergeben und sie aufrufen, wenn das richtige Ereignis eintritt.

### Die `deleteTask`-Callback-Prop

Hier beginnen wir, indem wir eine `deleteTask()`-Funktion in Ihrer `App`-Komponente schreiben. Wie `toggleTaskCompleted()` wird diese Funktion einen `id`-Parameter übernehmen, und wir werden diesen `id` zu Beginn in die Konsole protokollieren. Fügen Sie das Folgende unter `toggleTaskCompleted()` hinzu:

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

In `Todo.jsx` wollen wir `props.deleteTask()` aufrufen, wenn die "Löschen"-Schaltfläche gedrückt wird. `deleteTask()` muss die ID der Aufgabe kennen, die ihn aufgerufen hat, damit es die richtige Aufgabe aus dem Zustand löschen kann.

Aktualisieren Sie die "Löschen"-Schaltfläche in `Todo.jsx` wie folgt:

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

Jetzt sollten Sie, wenn Sie auf eine der "Löschen"-Schaltflächen in der App klicken, die ID der zugehörigen Aufgabe in Ihrer Browser-Konsole protokolliert sehen.

An dieser Stelle sollte Ihre `Todo.jsx`-Datei so aussehen:

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

Da wir nun wissen, dass `deleteTask()` korrekt aufgerufen wird, können wir unseren `setTasks()`-Hook in `deleteTask()` aufrufen, um diese Aufgabe tatsächlich aus dem Zustand der App sowie optisch aus der App-Benutzeroberfläche zu löschen. Da `setTasks()` ein Array als Argument erwartet, sollten wir ihm ein neues Array geben, das die vorhandenen Aufgaben kopiert, _außer_ der Aufgabe, deren ID mit derjenigen übereinstimmt, die an `deleteTask()` übergeben wurde.

Dies ist eine perfekte Gelegenheit, [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) zu verwenden. Wir können jede Aufgabe testen und eine Aufgabe aus dem neuen Array ausschließen, wenn ihre `id`-Prop mit dem `id`-Argument übereinstimmt, das an `deleteTask()` übergeben wird.

Aktualisieren Sie die `deleteTask()`-Funktion in Ihrer `App.jsx`-Datei wie folgt:

```jsx
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}
```

Probieren Sie Ihre App erneut aus. Jetzt sollten Sie in der Lage sein, eine Aufgabe aus Ihrer App zu löschen!

An dieser Stelle sollte Ihre `App.jsx`-Datei so aussehen:

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

Das reicht für einen Artikel. Hier haben wir Ihnen einen Überblick darüber gegeben, wie Reakt mit Ereignissen umgeht und den Zustand behandelt und Funktionalitäten implementiert, um Aufgaben hinzuzufügen, Aufgaben zu löschen und Aufgaben als erledigt zu markieren. Wir sind fast am Ziel. Im nächsten Artikel implementieren wir Funktionalitäten, um vorhandene Aufgaben zu bearbeiten und die Aufgabenliste zwischen allen, abgeschlossenen und unvollständigen Aufgaben zu filtern. Auf dem Weg dorthin werden wir uns mit der Bedingten UI-Darstellung befassen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
