---
title: "React-Interaktivität: Ereignisse und Zustand"
short-title: React-Ereignisse und Zustand
slug: Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}

Mit unserem ausgearbeiteten Komponentenplan ist es jetzt an der Zeit, unsere App von einer völlig statischen Benutzeroberfläche in eine solche zu aktualisieren, die es uns tatsächlich ermöglicht, zu interagieren und Dinge zu ändern. In diesem Artikel werden wir das tun, indem wir uns tiefer mit Ereignissen und Zustand befassen und schließlich eine App erstellen, in der wir erfolgreich Aufgaben hinzufügen, löschen und als erledigt markieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> sowie dem <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal/der Befehlszeile</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        Handhabung von Ereignissen und Zustand in React und deren Nutzung, um die Fallstudien-App interaktiv zu machen.
      </td>
    </tr>
  </tbody>
</table>

## Handhabung von Ereignissen

Wenn Sie bisher nur Vanilla-JavaScript geschrieben haben, sind Sie vielleicht daran gewöhnt, eine separate JavaScript-Datei zu haben, in der Sie nach einigen DOM-Knoten suchen und Listener anhängen. Ein HTML-Dokument könnte beispielsweise einen Button enthalten, wie diesen:

```html
<button type="button">Say hi!</button>
```

Und eine JavaScript-Datei könnte folgenden Code enthalten:

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

In diesem Beispiel fügen wir dem {{htmlelement("button")}}-Element ein `onClick`-Attribut hinzu. Der Wert dieses Attributs ist eine Funktion, die eine Warnung auslöst. Dies mag im Widerspruch zu gängigen Praxisempfehlungen stehen, keine Event-Listener in HTML zu schreiben, aber denken Sie daran: JSX ist kein HTML.

Das `onClick`-Attribut hat hier eine besondere Bedeutung: Es sagt React, dass eine bestimmte Funktion ausgeführt werden soll, wenn der Benutzer auf den Button klickt. Es gibt ein paar Dinge zu beachten:

- Die {{Glossary("camel_case", "camelCased")}} Schreibweise von `onClick` ist wichtig — JSX erkennt `onclick` nicht (es wird bereits in JavaScript für einen spezifischen Zweck verwendet, der verwandt, aber unterschiedlich ist — Standard-[\_`onclick`](/de/docs/Web/API/Element/click_event)-Handler-Eigenschaften).
- Alle Browser-Ereignisse folgen diesem Format in JSX – `on`, gefolgt vom Namen des Ereignisses.

Lassen Sie uns dies in unserer App anwenden, beginnend mit der `Form.jsx`-Komponente.

### Handhabung der Formularübermittlung

Erstellen Sie am Anfang der `Form()`-Komponentenfunktion (d.h. direkt unter der Zeile `function Form() {`) eine Funktion namens `handleSubmit()`. Diese Funktion sollte [das Standardverhalten des `submit`-Ereignisses verhindern](/de/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behavior). Danach sollte sie ein `alert()` auslösen, das alles sagen kann, was Sie möchten. Sie sollte am Ende in etwa so aussehen:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  alert("Hello, world!");
}
```

Um diese Funktion zu verwenden, fügen Sie dem [`<form>`](/de/docs/Web/HTML/Reference/Elements/form)-Element ein `onSubmit`-Attribut hinzu und setzen seinen Wert auf die `handleSubmit`-Funktion:

```jsx
<form onSubmit={handleSubmit}>
```

Wenn Sie jetzt zu Ihrem Browser zurückkehren und auf die Schaltfläche "Add" klicken, zeigt Ihnen Ihr Browser einen Warndialog mit den Worten "Hello, world!" — oder was auch immer Sie dort schreiben möchten.

## Callback-Props

In React-Anwendungen ist die Interaktivität selten auf nur eine Komponente beschränkt: Ereignisse, die in einer Komponente auftreten, werden sich auf andere Teile der App auswirken. Wenn wir uns die Möglichkeit geben, neue Aufgaben zu erstellen, werden die Dinge, die in der `<Form />`-Komponente passieren, die Liste beeinflussen, die in `<App />` gerendert wird.

Wir möchten, dass unsere `handleSubmit()`-Funktion letztendlich hilft, eine neue Aufgabe zu erstellen. Daher benötigen wir eine Möglichkeit, Informationen von `<Form />` zu `<App />` zu übermitteln. Wir können Daten nicht von Kind zu Elternteil auf die gleiche Weise übermitteln, wie wir Daten von Eltern zu Kind mit Standard-Props übergeben. Stattdessen können wir eine Funktion in `<App />` schreiben, die einige Daten von unserem Formular als Eingabe erwartet, und diese Funktion dann als Prop an `<Form />` übergeben. Diese Funktion-als-Prop wird als **Callback-Prop** bezeichnet. Sobald wir unsere Callback-Prop haben, können wir es innerhalb von `<Form />` aufrufen, um die richtigen Daten an `<App />` zu senden.

### Handhabung der Formularübermittlung über Callbacks

Innerhalb der `App()`-Funktion in `App.jsx` erstellen Sie eine Funktion namens `addTask()`, die einen einzigen Parameter `name` hat:

```jsx
function addTask(name) {
  alert(name);
}
```

Als nächstes übergeben Sie `addTask()` als Prop an `<Form />`. Das Prop kann jeden beliebigen Namen haben, aber wählen Sie einen Namen, den Sie später verstehen werden. Etwas wie `addTask` funktioniert, weil es den Namen der Funktion sowie das, was die Funktion tun wird, angibt. Ihr `<Form />`-Komponentenaufruf sollte wie folgt aktualisiert werden:

```jsx
<Form addTask={addTask} />
```

Um dieses Prop zu verwenden, müssen wir die Signatur der `Form()`-Funktion in `Form.jsx` ändern, sodass sie `props` als Parameter akzeptiert:

```jsx
function Form(props) {
  // ...
}
```

Schließlich können wir dieses Prop innerhalb der `handleSubmit()`-Funktion in Ihrer `<Form />`-Komponente verwenden! Aktualisieren Sie sie wie folgt:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask("Say hello!");
}
```

Wenn Sie auf die Schaltfläche "Add" in Ihrem Browser klicken, wird bewiesen, dass die `addTask()`-Callback-Funktion funktioniert. Aber es wäre schön, wenn wir die Warnung sehen könnten, die zeigt, was wir in unser Eingabefeld eingeben! Dies ist, was wir als Nächstes tun werden.

### Nebenbemerkung: Eine Anmerkung zu Namenskonventionen

Wir haben die `addTask()`-Funktion in die `<Form />`-Komponente als das Prop `addTask` übergeben, damit die Beziehung zwischen der `addTask()`- _Funktion_ und dem `addTask`- _Prop_ so klar wie möglich bleibt. Beachten Sie jedoch, dass Prop-Namen nicht _unbedingt_ etwas Bestimmtes sein müssen. Wir könnten `addTask()` in die `<Form />` unter jedem anderen Namen übergeben haben, wie zum Beispiel so:

```diff
- <Form addTask={addTask} />
+ <Form onSubmit={addTask} />
```

Dies würde die `addTask()`-Funktion der `<Form />`-Komponente als das Prop `onSubmit` zur Verfügung stellen. Dieses Prop könnte in `Form.jsx` wie folgt verwendet werden:

```diff
function handleSubmit(event) {
  event.preventDefault();
- props.addTask("Say hello!");
+ props.onSubmit("Say hello!");
}
```

Hier sagt uns das Präfix `on`, dass das Prop eine Callback-Funktion ist; `Submit` ist unser Hinweis, dass ein Submit-Ereignis diese Funktion auslösen wird.

Während sich Callback-Props oft an den Namen vertrauter Ereignishandler wie `onSubmit` oder `onClick` orientieren, können sie so benannt werden, dass sie die Bedeutung klar machen. Eine hypothetische `<Menu />`-Komponente könnte eine Callback-Funktion enthalten, die ausgeführt wird, wenn das Menü geöffnet wird, sowie eine separate Callback-Funktion, die ausgeführt wird, wenn es geschlossen wird:

```jsx
<Menu onOpen={() => console.log("Hi!")} onClose={() => console.log("Bye!")} />
```

Diese `on*`-Namenskonvention ist sehr verbreitet im React-Ökosystem, also behalten Sie das im Hinterkopf, während Sie Ihr Lernen fortsetzen. Der Klarheit halber werden wir an `addTask` und ähnliche Prop-Namen für den Rest dieses Tutorials festhalten. Wenn Sie irgendwelche Prop-Namen beim Lesen dieses Abschnitts geändert haben, stellen Sie sicher, dass Sie sie vor dem Fortfahren zurückändern!

## Persistenz und Änderung von Daten mit Zustand

Bisher haben wir Props verwendet, um Daten durch unsere Komponenten zu übermitteln, und das hat uns gut gedient. Da wir jetzt jedoch mit Interaktivität zu tun haben, benötigen wir die Möglichkeit, neue Daten zu erstellen, sie zu behalten und später zu aktualisieren. Props sind das falsche Werkzeug für diese Aufgabe, weil sie unveränderlich sind — eine Komponente kann ihre eigenen Props nicht ändern oder erstellen.

Hier kommt der **Zustand** ins Spiel. Wenn wir Props als Kommunikationsmittel zwischen Komponenten betrachten, können wir den Zustand als eine Möglichkeit betrachten, Komponenten "Gedächtnis" zu geben — Informationen, an die sie sich erinnern und die sie bei Bedarf aktualisieren können.

React bietet eine spezielle Funktion zur Einführung von Zustand in eine Komponente, die treffend `useState()` genannt wird.

> **Hinweis:** `useState()` gehört zu einer speziellen Kategorie von Funktionen, die als **Hooks** bezeichnet werden, von denen jede verwendet werden kann, um einer Komponente neue Funktionalität hinzuzufügen. Wir werden später über andere Hooks lernen.

Um `useState()` zu verwenden, müssen wir es aus dem React-Modul importieren. Fügen Sie die folgende Zeile am Anfang Ihrer `Form.jsx`-Datei hinzu, über der Definition der `Form()`-Funktion:

```jsx
import { useState } from "react";
```

`useState()` nimmt ein einziges Argument, das den Anfangswert des Zustands bestimmt. Dieses Argument kann ein String, eine Zahl, ein Array, ein Objekt oder jeder andere JavaScript-Datentyp sein. `useState()` gibt ein Array mit zwei Elementen zurück. Das erste Element ist der aktuelle Wert des Zustands; das zweite Element ist eine Funktion, mit der der Zustand aktualisiert werden kann.

Erstellen wir einen `name` Zustand. Schreiben Sie das Folgende über Ihrer `handleSubmit()`-Funktion, innerhalb von `Form()`:

```jsx
const [name, setName] = useState("Learn React");
```

Verschiedene Dinge passieren in dieser Codezeile:

- Wir definieren eine `name`-Konstante mit dem Wert `"Learn React"`.
- Wir definieren eine Funktion namens `setName()`, deren Aufgabe es ist, `name` zu modifizieren.
- `useState()` gibt diese beiden Dinge in einem Array zurück, sodass wir [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) verwenden, um sie in separaten Variablen zu erfassen.

### Zustand lesen

Sie können den `name` Zustand sofort in Aktion sehen. Fügen Sie dem Formular-Input ein `value`-Attribut hinzu und setzen Sie dessen Wert auf `name`. Ihr Browser wird "Learn React" innerhalb des Eingabefelds rendern.

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

Ändern Sie "Learn React" in einen leeren String, wenn Sie fertig sind; das ist das, was wir für unseren Anfangszustand wollen:

```jsx
const [name, setName] = useState("");
```

### Benutzereingabe lesen

Bevor wir den Wert von `name` ändern können, müssen wir die Eingaben eines Benutzers erfassen, während er tippt. Dafür können wir das `onChange`-Ereignis abfangen. Schreiben wir eine `handleChange()`-Funktion und hören wir auf das `<input />`-Element.

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

Derzeit wird der Wert unseres Eingabefelds nicht geändert, wenn Sie versuchen, Text einzugeben, aber Ihr Browser wird das Wort "Typing!" in die JavaScript-Konsole protokollieren, sodass wir wissen, dass unser Event-Listener an das Eingabefeld angehängt ist.

Um die Tastenanschläge des Benutzers zu lesen, müssen wir auf die `value`-Eigenschaft des Eingabefelds zugreifen. Dies können wir tun, indem wir das `event`-Objekt lesen, das `handleChange()` erhält, wenn es aufgerufen wird. `event` hat wiederum [eine `target`-Eigenschaft](/de/docs/Web/API/Event/target), die das Element repräsentiert, das das `change`-Ereignis ausgelöst hat. Das ist unser Eingabefeld. Also ist `event.target.value` der Text innerhalb des Eingabefelds.

Sie können diesen Wert mit `console.log()` in Ihrer Browser-Konsole sehen. Versuchen Sie, die `handleChange()`-Funktion wie folgt zu aktualisieren und im Eingabefeld zu tippen, um das Ergebnis in Ihrer Konsole zu sehen:

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

### Zustand aktualisieren

Protokollieren allein reicht nicht — wir möchten tatsächlich speichern, was der Benutzer eingibt, und es in der Eingabe anzeigen! Ändern Sie Ihren `console.log()`-Aufruf zu `setName()`, wie unten gezeigt:

```jsx
function handleChange(event) {
  setName(event.target.value);
}
```

Jetzt, wenn Sie in das Eingabefeld tippen, füllen Ihre Tastenanschläge das Eingabefeld aus, wie Sie es vielleicht erwarten.

Wir haben einen weiteren Schritt: Wir müssen unsere `handleSubmit()`-Funktion so ändern, dass sie `props.addTask` mit `name` als Argument aufruft. Erinnern Sie sich an unsere Callback-Prop? Dies wird dazu dienen, die Aufgabe an die `App`-Komponente zurückzusenden, damit wir sie zu einem späteren Zeitpunkt zu unserer Aufgabenliste hinzufügen können. Aus guter Praxis sollten Sie das Eingabefeld nach dem Absenden des Formulars löschen, sodass Sie `setName()` erneut mit einem leeren String aufrufen:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask(name);
  setName("");
}
```

Endlich können Sie etwas in das Eingabefeld in Ihrem Browser eingeben und auf _Add_ klicken — was immer Sie getippt haben, wird in einem Warn-Dialog erscheinen.

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
> Sie werden merken, dass Sie leere Aufgaben einreichen können, indem Sie einfach die Schaltfläche `Add` drücken, ohne einen Aufgaben-Namen einzugeben. Können Sie sich überlegen, wie man das verhindern kann? Als Hinweis: Sie müssen wahrscheinlich eine Art Überprüfung in die `handleSubmit()`-Funktion einfügen.

## Alles zusammenfügen: Eine Aufgabe hinzufügen

Jetzt, da wir mit Ereignissen, Callback-Props und Hooks geübt haben, sind wir bereit, Funktionalität zu schreiben, die es einem Benutzer ermöglicht, von seinem Browser aus eine neue Aufgabe hinzuzufügen.

### Aufgaben als Zustand

Wir müssen `useState` in `App.jsx` importieren, damit wir unsere Aufgaben im Zustand speichern können. Fügen Sie Folgendes an den Anfang Ihrer `App.jsx`-Datei hinzu:

```jsx
import { useState } from "react";
```

Wir möchten `props.tasks` in den `useState()`-Hook eingeben – dies wird dessen anfänglichen Zustand beibehalten. Fügen Sie Folgendes direkt oben in die Definition Ihrer `App()`-Funktion ein:

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

Jetzt können wir unser `taskList`-Mapping so ändern, dass es das Ergebnis des Mappings von `tasks` ist, anstatt von `props.tasks`. Ihre Deklaration der `taskList`-Konstanten sollte nun so aussehen:

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

Wir haben jetzt einen `setTasks`-Hook, den wir in unserer `addTask()`-Funktion verwenden können, um unsere Liste der Aufgaben zu aktualisieren. Es gibt jedoch ein Problem: Wir können das `name`-Argument von `addTask()` nicht einfach in `setTasks` übergeben, weil `tasks` ein Array von Objekten ist und `name` ein String ist. Wenn wir dies versuchen würden, würde das Array durch den String ersetzt.

Zuerst müssen wir `name` in ein Objekt packen, das die gleiche Struktur wie unsere bestehenden Aufgaben hat. Innerhalb der `addTask()`-Funktion erstellen wir ein `newTask`-Objekt, das wir dem Array hinzufügen.

Dann müssen wir ein neues Array mit dieser neuen Aufgabe darin erstellen und dann den Zustand der Aufgabendaten auf diesen neuen Zustand aktualisieren. Zu diesem Zweck können wir Spread-Syntax verwenden, um [das bestehende Array zu kopieren](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copying_an_array), und unser Objekt am Ende hinzufügen. Wir übergeben dann dieses Array an `setTasks()`, um den Zustand zu aktualisieren.

Zusammengefasst sollte Ihre `addTask()`-Funktion so aussehen:

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

Jetzt können Sie den Browser verwenden, um eine Aufgabe zu unseren Daten hinzuzufügen! Geben Sie irgendetwas in das Formular ein und klicken Sie auf "Add" (oder drücken Sie die <kbd>Enter</kbd>-Taste), und Sie werden sehen, dass Ihr neues To-Do-Element in der Benutzeroberfläche erscheint!

**Wir haben jedoch ein weiteres Problem**: Unsere `addTask()`-Funktion gibt jeder Aufgabe die gleiche `id`. Das ist schlecht für die Zugänglichkeit und macht es unmöglich für React, zukünftige Aufgaben mit dem `key`-Prop auseinanderzuhalten. Tatsächlich gibt React Ihnen eine Warnung in Ihrer DevTools-Konsole aus — "Warning: Zwei Kinder mit dem gleichen Key gefunden..."

Das müssen wir beheben. Eindeutige Bezeichner zu erstellen, ist ein schwieriges Problem — eines, für das die JavaScript-Community einige hilfreiche Bibliotheken geschrieben hat. Wir werden [nanoid](https://github.com/ai/nanoid) verwenden, weil es klein ist und funktioniert.

Vergewissern Sie sich, dass Sie sich im Stammverzeichnis Ihrer Anwendung befinden, und führen Sie den folgenden Terminalbefehl aus:

```bash
npm install nanoid
```

> [!NOTE]
> Wenn Sie yarn verwenden, benötigen Sie stattdessen folgendes: `yarn add nanoid`.

Jetzt können wir `nanoid` verwenden, um eindeutige IDs für unsere neuen Aufgaben zu erstellen. Zuerst importieren wir es, indem wir die folgende Zeile an den Anfang von `App.jsx` hinzufügen:

```jsx
import { nanoid } from "nanoid";
```

Jetzt aktualisieren wir `addTask()`, sodass jede Task-ID ein Präfix `todo-` plus eine eindeutige Zeichenkette ist, die von nanoid erzeugt wird. Aktualisieren Sie Ihre Deklaration der `newTask`-Konstanten zu:

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

Speichern Sie alles und probieren Sie Ihre App erneut — jetzt können Sie Aufgaben hinzufügen, ohne diese Warnung über doppelte IDs zu erhalten.

## Umweg: Aufgaben zählen

Da wir nun neue Aufgaben hinzufügen können, fällt Ihnen vielleicht ein Problem auf: Unsere Überschrift liest "3 tasks remaining", egal wie viele Aufgaben wir haben! Wir können dies beheben, indem wir die Länge von `taskList` zählen und entsprechend den Text unserer Überschrift ändern.

Fügen Sie dies innerhalb Ihrer `App()`-Definition hinzu, vor der Rückgabespezifikation:

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

Dies ist fast richtig, außer dass, wenn unsere Liste jemals eine einzige Aufgabe enthalten würde, die Überschrift immer noch das Wort "tasks" verwenden würde. Wir können dies auch zu einer Variable machen. Aktualisieren Sie den Code, den Sie gerade hinzugefügt haben, wie folgt:

```jsx
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

Nun können Sie den Textinhalt der Listenüberschrift mit der `headingText`-Variable ersetzen. Aktualisieren Sie Ihr `<h2>` wie folgt:

```jsx
<h2 id="list-heading">{headingText}</h2>
```

Speichern Sie die Datei, gehen Sie zurück zu Ihrem Browser, und versuchen Sie, einige Aufgaben hinzuzufügen: Die Zählung sollte sich jetzt wie erwartet aktualisieren.

## Eine Aufgabe abschließen

Vielleicht fällt Ihnen auf, dass sich bei einem Klick auf ein Kontrollkästchen dieses wie erwartet ein- und auscheckt. Als Funktion von HTML weiß der Browser, wie er in Eingabefeldern, die Kontrollkästchen enthalten, den Zustand merkt, ob sie ein- oder ausgeschaltet sind, ohne unsere Hilfe. Dieses Feature verbirgt jedoch ein Problem: Das Umschalten eines Kontrollkästchens ändert nicht den Zustand in unserer React-Anwendung. Das bedeutet, dass der Browser und unsere App jetzt nicht synchron sind. Wir müssen unseren eigenen Code schreiben, um den Browser mit unserer App zu synchronisieren.

### Den Fehler beweisen

Bevor wir das Problem beheben, beobachten wir es in Aktion.

Wir beginnen damit, eine `toggleTaskCompleted()`-Funktion in unserer App-Komponente zu schreiben. Diese Funktion wird einen `id`-Parameter haben, aber wir werden ihn noch nicht verwenden. Zunächst werden wir das erste Element im Array in die Konsole loggen – wir werden beobachten, was passiert, wenn wir es im Browser ein- oder auschecken:

Fügen Sie dies direkt über Ihrer Deklaration der `taskList`-Konstanten hinzu:

```jsx
function toggleTaskCompleted(id) {
  console.log(tasks[0]);
}
```

Als Nächstes fügen wir `toggleTaskCompleted` zu den Props jeder gerenderten `<Todo />`-Komponente in unserem `taskList` hinzu; aktualisieren Sie es wie folgt:

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

Dann wechseln Sie zu Ihrer `Todo.jsx`-Komponente und fügen Sie Ihrem `<input />`-Element einen `onChange`-Handler hinzu, der eine anonyme Funktion verwendet, um `props.toggleTaskCompleted()` mit einem Parameter von `props.id` aufzurufen. Der `<input />` sollte nun so aussehen:

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

Speichern Sie alles und kehren Sie zu Ihrem Browser zurück, und bemerken Sie, dass unsere erste Aufgabe, Eat, angekreuzt ist. Öffnen Sie Ihre JavaScript-Konsole und klicken Sie auf das Kontrollkästchen neben Eat. Es wird abgehakt, wie wir erwarten. Ihre JavaScript-Konsole wird jedoch etwas wie das Folgende aufzeichnen:

```plain
Object { id: "task-0", name: "Eat", completed: true }
```

Das Kontrollkästchen in der Browseransicht wird abgehakt, aber unsere Konsole zeigt uns, dass Eat noch als abgeschlossen markiert ist. Das müssen wir als nächstes beheben!

### Synchronisierung des Browsers mit unseren Daten

Lassen Sie uns unsere `toggleTaskCompleted()`-Funktion in `App.jsx` noch einmal ansehen. Wir möchten sie so ändern, dass sie die `completed`-Eigenschaft nur der Aufgabe ändert, die umgeschaltet wurde, und alle anderen unberührt lässt. Zu diesem Zweck werden wir über die Aufgabenliste `map()`-en und nur diejenige ändern, die wir abgeschlossen haben.

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

Hier definieren wir eine `updatedTasks`-Konstante, die über das ursprüngliche `tasks`-Array mappt. Wenn die `id`-Eigenschaft der Aufgabe mit der der Funktion übergebenen übereinstimmt, verwenden wir [Objekt-Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um ein neues Objekt zu erstellen, und toggeln die `completed`-Eigenschaft dieses Objekts, bevor wir es zurückgeben. Wenn es nicht übereinstimmt, geben wir das ursprüngliche Objekt zurück.

Dann rufen wir `setTasks()` mit diesem neuen Array auf, um unseren Zustand zu aktualisieren.

## Eine Aufgabe löschen

Das Löschen einer Aufgabe wird einem ähnlichen Muster wie das Umschalten seines abgeschlossenen Zustands folgen: Wir müssen eine Funktion zum Aktualisieren unseres Zustands definieren, dann diese Funktion als Prop in `<Todo />` übergeben und sie aufrufen, wenn das richtige Ereignis auftritt.

### Der `deleteTask`-Callback-Prop

Beginnen wir hiermit, eine `deleteTask()`-Funktion in Ihrer App-Komponente zu schreiben. Wie `toggleTaskCompleted()` wird auch diese Funktion einen `id`-Parameter aufnehmen, und wir werden diesen `id` zunächst in einer Konsole protokollieren. Fügen Sie das folgende unter `toggleTaskCompleted()` hinzu:

```jsx
function deleteTask(id) {
  console.log(id);
}
```

Fügen Sie als Nächstes einen weiteren Callback-Prop zu unserem Array von `<Todo />`-Komponenten hinzu:

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

In `Todo.jsx` möchten wir `props.deleteTask()` aufrufen, wenn die "Delete"-Schaltfläche gedrückt wird. `deleteTask()` muss die ID der Aufgabe kennen, die sie aufgerufen hat, damit die richtige Aufgabe aus dem Zustand gelöscht werden kann.

Aktualisieren Sie die "Delete"-Schaltfläche in `Todo.jsx`, wie folgt:

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

Nun, wenn Sie auf eine der "Delete"-Schaltflächen in der App klicken, sollte Ihre Browserkonsole die ID der betreffenden Aufgabe protokollieren.

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

Da wir nun wissen, dass `deleteTask()` korrekt aufgerufen wird, können wir unseren `setTasks()` Hook in `deleteTask()` verwenden, um diese Aufgabe tatsächlich nicht nur aus dem Zustand unserer App, sondern auch visuell in der Benutzeroberfläche der App zu löschen. Da `setTasks()` ein Array als Argument erwartet, sollten wir ihm ein neues Array bereitstellen, das die bestehenden Aufgaben kopiert, _außer_ der Aufgabe, deren ID mit der übergebenen in `deleteTask()` übereinstimmt.

Dies ist eine perfekte Gelegenheit, um [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) zu verwenden. Wir können jede Aufgabe testen und sie aus dem neuen Array ausschließen, wenn ihre `id`-Prop mit dem an `deleteTask()` übergebenen `id`-Argument übereinstimmt.

Aktualisieren Sie die `deleteTask()`-Funktion in Ihrer `App.jsx`-Datei wie folgt:

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

Das reicht für einen Artikel. Hier haben wir Ihnen eine umfassende Einführung gegeben, wie React mit Ereignissen umgeht und Zustände behandelt und Funktionalität implementiert, um Aufgaben hinzuzufügen, Aufgaben zu löschen und Aufgaben als erledigt umzuschalten. Wir sind fast am Ziel. Im nächsten Artikel werden wir die Funktionalität implementieren, bestehende Aufgaben zu bearbeiten und die Aufgabenliste zwischen allen, erledigten und unerledigten Aufgaben zu filtern. Unterwegs werden wir auch auf bedingtes UI-Rendering eingehen.

{{PreviousMenuNext("Learn_web_development/Core/Frameworks_libraries/React_components","Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering", "Learn_web_development/Core/Frameworks_libraries")}}
