---
title: "Reakt-Interaktivität: Ereignisse und Zustand"
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state
l10n:
  sourceCommit: 11a08e7da75bfb0b3e606eb26a9a0ad9301a1be5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Mit unserem Komponentenschema begonnen, ist es jetzt an der Zeit, unsere App von einer komplett statischen Benutzeroberfläche auf eine umzustellen, die tatsächlich interaktiv ist und Veränderungen erlaubt. In diesem Artikel werden wir dies tun, indem wir uns mit Ereignissen und Zustand beschäftigen und am Ende eine App haben, bei der wir Aufgaben erfolgreich hinzufügen, löschen und als erledigt markieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Vertrautheit mit den Grundlagen der <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen,
          Kenntnisse über die
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal-/Befehlszeile</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man mit Ereignissen und Zustand in Reakt umgeht und diese verwendet, um die Fallstudien-App interaktiv zu gestalten.
      </td>
    </tr>
  </tbody>
</table>

## Umgang mit Ereignissen

Wenn Sie bisher nur mit reinem JavaScript geschrieben haben, sind Sie vielleicht daran gewöhnt, eine separate JavaScript-Datei zu haben, in der Sie einige DOM-Knoten abfragen und Listener an diese anhängen. Ein HTML-Dokument könnte beispielsweise einen Button enthalten, etwa so:

```html
<button type="button">Say hi!</button>
```

Und eine JavaScript-Datei könnte etwa folgenden Code enthalten:

```js
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("hi!");
});
```

In JSX lebt der Code, der die Benutzeroberfläche beschreibt, direkt neben unseren Ereignis-Listenern:

```jsx
<button type="button" onClick={() => alert("hi!")}>
  Say hi!
</button>
```

In diesem Beispiel fügen wir dem {{htmlelement("button")}}-Element ein `onClick`-Attribut hinzu. Der Wert dieses Attributs ist eine Funktion, die eine einfache Warnung auslöst. Dies mag dem Best-Practice-Rat widersprechen, keine Ereignis-Listener in HTML zu schreiben, aber bedenken Sie: JSX ist kein HTML.

Das `onClick`-Attribut hat hier eine spezielle Bedeutung: Es weist Reakt an, eine bestimmte Funktion auszuführen, wenn der Benutzer auf den Button klickt. Es gibt noch ein paar andere Dinge zu beachten:

- Die {{Glossary("camel_case", "camel-cased")}} Natur von `onClick` ist wichtig — JSX erkennt `onclick` nicht (es wird bereits in JavaScript für einen speziellen Zweck verwendet, der verwandt, aber anders ist — standardmäßige [`onclick`](/de/docs/Web/API/Element/click_event) Handler-Eigenschaften).
- Alle Browserereignisse folgen in JSX diesem Format – `on`, gefolgt vom Namen des Ereignisses.

Lassen Sie uns dies auf unsere App anwenden, beginnend mit der Komponente `Form.jsx`.

### Umgang mit Formularübermittlung

Oben in der `Form()`-Komponente (d.h. direkt unterhalb der `function Form() {`-Zeile) erstellen Sie eine Funktion namens `handleSubmit()`. Diese Funktion sollte [das Standardverhalten des `submit`-Ereignisses verhindern](/de/docs/Learn/JavaScript/Building_blocks/Events#preventing_default_behavior). Danach sollte sie einen `alert()` auslösen, der alles anzeigen kann, was Sie möchten. Es sollte in etwa so aussehen:

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

Wenn Sie jetzt zu Ihrem Browser zurückkehren und auf den Button "Add" klicken, wird Ihr Browser ein Warn-Dialogfeld mit den Worten "Hello, world!" – oder was auch immer Sie dort schreiben gewählt haben – anzeigen.

## Callback-Props

In Reakt-Anwendungen ist Interaktivität selten auf nur eine Komponente beschränkt: Ereignisse, die in einer Komponente auftreten, werden andere Teile der App beeinflussen. Wenn wir uns die Möglichkeit geben, neue Aufgaben zu erstellen, werden Elemente, die in der `<Form />`-Komponente geschehen, die Liste betreffen, die in `<App />` gerendert wird.

Wir möchten, dass unsere `handleSubmit()`-Funktion letztlich dazu beiträgt, eine neue Aufgabe zu erstellen, daher müssen wir einen Weg finden, Informationen von `<Form />` zu `<App />` zu übermitteln. Wir können keine Daten vom Kind- zum Eltern-Element auf die gleiche Weise wie vom Eltern- zum Kind-Element mit Standard-Props übergeben. Stattdessen können wir eine Funktion in `<App />` schreiben, die einige Daten von unserem Formular als Eingabe erwartet, und diese Funktion dann als Prop an `<Form />` übergeben. Diese Funktion-als-Prop wird als **Callback-Prop** bezeichnet. Sobald wir unsere Callback-Prop haben, können wir sie innerhalb von `<Form />` aufrufen, um die richtigen Daten an `<App />` zu senden.

### Umgang mit Formularübermittlung über Callbacks

Erstellen Sie in der `App()`-Funktion in `App.jsx` eine Funktion namens `addTask()`, die einen einzelnen Parameter `name` hat:

```jsx
function addTask(name) {
  alert(name);
}
```

Als nächstes geben Sie `addTask()` als Prop an `<Form />` weiter. Das Prop kann jeden gewünschten Namen haben, aber wählen Sie einen Namen, den Sie später verstehen werden. Etwas wie `addTask` funktioniert, da es mit dem Namen der Funktion sowie mit dem, was die Funktion tun wird, übereinstimmt. Ihre `<Form />`-Komponenten-Aufruf sollte wie folgt aktualisiert werden:

```jsx
<Form addTask={addTask} />
```

Um dieses Prop zu verwenden, müssen wir die Signatur der `Form()`-Funktion in `Form.jsx` ändern, sodass sie `props` als Parameter akzeptiert:

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

Wenn Sie im Browser auf den Button "Add" klicken, wird bewiesen, dass die `addTask()`-Callback-Funktion funktioniert, aber es wäre schön, wenn wir die Nachricht im Warn-Dialog sehen könnten, was wir in unser Eingabefeld eintippen! Das ist, was wir als nächstes tun werden.

### Nebenbemerkung: eine Anmerkung zu Namenskonventionen

Wir haben die `addTask()`-Funktion als Prop `addTask` in die `<Form />`-Komponente übergeben, damit die Beziehung zwischen der `addTask()` _Funktion_ und dem `addTask` _Prop_ so klar wie möglich bleibt. Bedenken Sie jedoch, dass Prop-Namen nichts Besonderes _sein müssen_. Wir hätten `addTask()` unter einem anderen Namen in `<Form />` übergeben können, wie beispielsweise:

```diff
- <Form addTask={addTask} />
+ <Form onSubmit={addTask} />
```

Dies würde die `addTask()`-Funktion der `<Form />`-Komponente als das Prop `onSubmit` zur Verfügung stellen. Dieses Prop könnte dann in `Form.jsx` so verwendet werden:

```diff
function handleSubmit(event) {
  event.preventDefault();
- props.addTask("Say hello!");
+ props.onSubmit("Say hello!");
}
```

Hier weist uns das Präfix `on` darauf hin, dass das Prop eine Callback-Funktion ist; `Submit` ist unser Hinweis, dass ein Submit-Ereignis diese Funktion auslösen wird.

Obwohl Callback-Props oft den Namen von bekannten Ereignis-Handlern wie `onSubmit` oder `onClick` entsprechen, können sie fast alles genannt werden, was ihre Bedeutung klar verständlich macht. Eine hypothetische `<Menu />`-Komponente könnte eine Callback-Funktion enthalten, die ausgeführt wird, wenn das Menü geöffnet wird, sowie eine separate Callback-Funktion, die ausgeführt wird, wenn es geschlossen wird:

```jsx
<Menu onOpen={() => console.log("Hi!")} onClose={() => console.log("Bye!")} />
```

Diese `on*`-Namenskonvention ist im Reakt-Ökosystem sehr verbreitet, also behalten Sie sie im Hinterkopf, während Sie weiter lernen. Der Klarheit halber verwenden wir bei diesem Tutorial `addTask` und ähnliche Prop-Namen. Wenn Sie während des Lesens dieses Abschnitts irgendwelche Prop-Namen geändert haben, stellen Sie sicher, dass Sie sie wieder zurückändern, bevor Sie fortfahren!

## Daten mit Zustand beibehalten und ändern

Bisher haben wir Props verwendet, um Daten durch unsere Komponenten zu übergeben, und das hat uns gut gedient. Jetzt, wo wir es mit Interaktivität zu tun haben, brauchen wir jedoch die Möglichkeit, neue Daten zu erstellen, sie zu behalten und später zu aktualisieren. Props sind dafür nicht das richtige Werkzeug, da sie unveränderlich sind — eine Komponente kann ihre eigenen Props nicht ändern oder erstellen.

Hier kommt der **Zustand** ins Spiel. Wenn wir Props als eine Möglichkeit betrachten, zwischen Komponenten zu kommunizieren, können wir den Zustand als eine Möglichkeit betrachten, Komponenten "Gedächtnis" zu geben – Informationen, die sie behalten und bei Bedarf aktualisieren können.

Reakt stellt eine spezielle Funktion zur Einführung von Zustand in eine Komponente bereit, treffend `useState()` genannt.

> **Hinweis:** `useState()` gehört zu einer speziellen Kategorie von Funktionen, die als **Hooks** bezeichnet werden, von denen jede verwendet werden kann, um einer Komponente neue Funktionalität hinzuzufügen. Wir werden später über andere Hooks lernen.

Um `useState()` zu verwenden, müssen wir es aus dem Reakt-Modul importieren. Fügen Sie die folgende Zeile oben in Ihre `Form.jsx`-Datei, oberhalb der `Form()`-Funktionsdefinition, hinzu:

```jsx
import { useState } from "react";
```

`useState()` nimmt ein einzelnes Argument, das den Anfangswert des Zustandes bestimmt. Dieses Argument kann ein String, eine Zahl, ein Array, ein Objekt oder ein anderer JavaScript-Datentyp sein. `useState()` gibt ein Array zurück, das zwei Elemente enthält. Das erste Element ist der aktuelle Wert des Zustands; das zweite Element ist eine Funktion, die verwendet werden kann, um den Zustand zu aktualisieren.

Fangen wir an, einen `name`-Zustand zu erstellen. Schreiben Sie das folgende oberhalb Ihrer `handleSubmit()`-Funktion, innerhalb von `Form()`:

```jsx
const [name, setName] = useState("Learn React");
```

In dieser Codezeile passiert einiges:

- Wir definieren eine `name` Konstante mit dem Wert `"Learn React"`.
- Wir definieren eine Funktion, deren Aufgabe es ist, `name` zu ändern, und die `setName()` genannt wird.
- `useState()` gibt uns diese beiden Dinge in einem Array zurück, daher nutzen wir [Array-Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), um sie in separaten Variablen zu erfassen.

### Zustand auslesen

Sie können den `name`-Zustand sofort in Aktion sehen. Fügen Sie der Form ⟋ Eingabe ein `value`-Attribut hinzu und setzen Sie dessen Wert auf `name`. Ihr Browser wird "Learn React" im Eingabefeld anzeigen.

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

Ändern Sie "Learn React" in einen leeren String sobald Sie fertig sind; das ist unser gewünschter Anfangszustand:

```jsx
const [name, setName] = useState("");
```

### Benutzereingaben auslesen

Bevor wir den Wert von `name` ändern können, müssen wir die Benutzereingabe erfassen, während er oder sie tippt. Dafür können wir das `onChange`-Ereignis anhören. Lassen Sie uns eine `handleChange()`-Funktion schreiben und für das `<input />`-Element darauf hören.

```jsx
// nahe dem Anfang der `Form`-Komponente
function handleChange() {
  console.log("Typing!");
}

...

// Weiter unten im Rückgabewert
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

Aktuell wird der Eingabewert nicht geändert, wenn versucht wird, Text einzugeben, aber Ihr Browser wird das Wort "Typing!" in die JavaScript-Konsole ausgeben, sodass wir wissen, dass unser Event-Listener an die Eingabe gebunden ist.

Um die Benutzertastenanschläge auszulesen, müssen wir auf die `value`-Eigenschaft der Eingabe zugreifen. Das können wir tun, indem wir das `event`-Objekt lesen, das `handleChange()` erhält, wenn es aufgerufen wird. `event` hat wiederum eine [Eigenschaft `target`](/de/docs/Web/API/Event/target), die das Element repräsentiert, das das `change`-Ereignis ausgelöst hat. Das ist unsere Eingabe. Also ist `event.target.value` der Text in der Eingabe.

Sie können diesen Wert mit `console.log()` ausgeben, um ihn in der Konsole Ihres Browsers zu sehen. Versuchen Sie, die `handleChange()`-Funktion wie folgt zu aktualisieren und tippen Sie in das Eingabefeld, um das Ergebnis in Ihrer Konsole zu sehen:

```jsx
function handleChange(event) {
  console.log(event.target.value);
}
```

### Zustand aktualisieren

Das Protokollieren allein reicht nicht aus - wir möchten tatsächlich speichern, was der Benutzer tippt, und es in der Eingabe rendern! Ändern Sie Ihre `console.log()`-Anweisung zu `setName()`, wie unten gezeigt:

```jsx
function handleChange(event) {
  setName(event.target.value);
}
```

Jetzt, wenn Sie in die Eingabe tippen, werden Ihre Tastenanschläge die Eingabe ausfüllen, wie Sie es möglicherweise erwarten.

Wir haben noch einen Schritt: Wir müssen unsere `handleSubmit()`-Funktion so ändern, dass sie `props.addTask` mit `name` als Argument aufruft. Erinnern Sie sich an unsere Callback-Prop? Diese wird dienen, um die Aufgabe an die `App`-Komponente zurückzusenden, damit wir sie zu einem späteren Zeitpunkt zu unserer Aufgabenliste hinzufügen können. Der guten Praxis halber sollten Sie die Eingabe nach dem Absenden des Formulars löschen, daher rufen wir `setName()` erneut mit einem leeren String auf, um dies zu tun:

```jsx
function handleSubmit(event) {
  event.preventDefault();
  props.addTask(name);
  setName("");
}
```

Endlich können Sie etwas in das Eingabefeld in Ihrem Browser eingeben und auf _Add_ klicken – was auch immer Sie eingegeben haben, wird in einem Warn-Dialog angezeigt.

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
> Sie werden feststellen, dass Sie leere Aufgaben einreichen können, indem Sie einfach die Schaltfläche `Add` drücken, ohne einen Aufgabennamen einzugeben. Können Sie sich eine Möglichkeit vorstellen, dies zu verhindern? Als Hinweis sollten Sie wahrscheinlich eine Art von Überprüfung in die `handleSubmit()`-Funktion einfügen.

## Alles zusammenbringen: Eine Aufgabe hinzufügen

Nun, da wir Ereignisse, Callback-Props und Hooks geübt haben, sind wir bereit, Funktionalitäten zu schreiben, die es einem Benutzer ermöglichen, eine neue Aufgabe aus seinem Browser hinzuzufügen.

### Aufgaben als Zustand

Wir müssen `useState` in `App.jsx` importieren, damit wir unsere Aufgaben im Zustand speichern können. Fügen Sie das folgende an den Anfang Ihrer `App.jsx`-Datei hinzu:

```jsx
import { useState } from "react";
```

Wir möchten `props.tasks` in den `useState()`-Hook übergeben – das wird den anfänglichen Zustand bewahren. Fügen Sie das folgende oben in Ihre `App()`-Funktionsdefinition hinzu:

```jsx
const [tasks, setTasks] = useState(props.tasks);
```

Jetzt können wir unseren `taskList`-Mapping so ändern, dass es das Ergebnis des Mappings von `tasks` ist, anstatt von `props.tasks`. Ihre `taskList`-Konstanten-Erklärung sollte nun so aussehen:

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

Jetzt haben wir einen `setTasks`-Hook, den wir in unserer `addTask()`-Funktion verwenden können, um unsere Aufgabenliste zu aktualisieren. Es gibt jedoch ein Problem: Wir können nicht einfach das `name`-Argument von `addTask()` in `setTasks` übergeben, weil `tasks` ein Array von Objekten ist und `name` ein String ist. Wenn wir das täten, würde das Array durch den String ersetzt werden.

Zuerst müssen wir `name` in ein Objekt packen, das dieselbe Struktur wie unsere bestehenden Aufgaben hat. Innerhalb der `addTask()`-Funktion werden wir ein `newTask`-Objekt erstellen, das dem Array hinzugefügt wird.

Dann müssen wir ein neues Array mit dieser neuen Aufgabe hinzufügen und den Zustand der Aufgaben-Daten auf diesen neuen Zustand aktualisieren. Dazu können wir das Spread-Syntax verwenden, um [das bestehende Array zu kopieren](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#copying_an_array) und unser Objekt am Ende hinzuzufügen. Dann übergeben wir dieses Array an `setTasks()`, um den Zustand zu aktualisieren.

Zusammengeführt, sollte Ihre `addTask()`-Funktion nun so aussehen:

```jsx
function addTask(name) {
  const newTask = { id: "id", name, completed: false };
  setTasks([...tasks, newTask]);
}
```

Jetzt können Sie den Browser verwenden, um eine Aufgabe zu unseren Daten hinzuzufügen! Tippen Sie in das Formular ein und klicken Sie auf "Add" (oder drücken Sie die <kbd>Enter</kbd>-Taste), und Sie werden sehen, wie Ihre neue Todo-Aufgabe in der Benutzeroberfläche erscheint!

**Jedoch haben wir ein weiteres Problem**: Unsere `addTask()`-Funktion gibt jeder Aufgabe die gleiche `id`. Das ist schlecht für die Barrierefreiheit und macht es unmöglich für Reakt, zukünftige Aufgaben mit dem `key`-Prop zu unterscheiden. Tatsächlich wird Ihnen Reakt eine Warnung in Ihrer DevTools-Konsole geben — "Warning: Encountered two children with the same key…"

Wir müssen das beheben. Eindeutige Identifikatoren zu erstellen ist ein schwieriges Problem – eines, für das die JavaScript-Community einige hilfreiche Bibliotheken geschrieben hat. Wir werden [nanoid](https://github.com/ai/nanoid) verwenden, weil es winzig ist und funktioniert.

Stelle Sie sicher, dass Sie sich im Stammverzeichnis Ihrer Anwendung befinden, und führen Sie den folgenden Terminalbefehl aus:

```bash
npm install nanoid
```

> [!NOTE]
> Wenn Sie yarn verwenden, benötigen Sie stattdessen folgendes: `yarn add nanoid`.

Jetzt können wir `nanoid` nutzen, um eindeutige IDs für unsere neuen Aufgaben zu erstellen. Zuerst importieren wir es, indem wir eine Zeile am Anfang von `App.jsx` hinzufügen:

```jsx
import { nanoid } from "nanoid";
```

Aktualisieren wir jetzt `addTask()` so, dass jede Aufgaben-ID zum Präfix `todo-` plus einer eindeutigen von nanoid generierten Zeichenfolge wird. Aktualisieren Sie die `newTask`-Konstanten-Erklärung so:

```jsx
const newTask = { id: `todo-${nanoid()}`, name, completed: false };
```

Speichern Sie alles und versuchen Sie Ihre App erneut — jetzt können Sie Aufgaben hinzufügen, ohne diese Warnung über doppelte IDs zu erhalten.

## Exkurs: Aufgaben zählen

Jetzt, da wir neue Aufgaben hinzufügen können, bemerken Sie vielleicht ein Problem: Unsere Überschrift liest immer "3 Aufgaben übrig", egal wie viele Aufgaben wir haben! Wir können dies beheben, indem wir die Länge von `taskList` zählen und den Text unserer Überschrift dementsprechend ändern.

Fügen Sie dies innerhalb Ihrer `App()`-Definition hinzu, vor der `return`-Anweisung:

```jsx
const headingText = `${taskList.length} tasks remaining`;
```

Das ist fast richtig, außer wenn unsere Liste jemals eine einzelne Aufgabe enthält, wird die Überschrift immer noch das Wort "tasks" verwenden. Wir können dies auch zu einer Variablen machen. Aktualisieren Sie den Code, den Sie gerade hinzugefügt haben, wie folgt:

```jsx
const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
const headingText = `${taskList.length} ${tasksNoun} remaining`;
```

Jetzt können Sie den Texterfolg der Listenüberschrift mit der `headingText`-Variable ersetzen. Aktualisieren Sie Ihr `<h2>` wie folgt:

```jsx
<h2 id="list-heading">{headingText}</h2>
```

Speichern Sie die Datei, gehen Sie zurück zu Ihrem Browser und versuchen Sie, einige Aufgaben hinzuzufügen: Der Zähler sollte jetzt wie erwartet aktualisiert werden.

## Eine Aufgabe abschließen

Sie könnten bemerken, dass, wenn Sie ein Kontrollkästchen anklicken, es sich entsprechend aktiviert oder deaktiviert. Als ein Feature von HTML weiß der Browser, wie man sich erinnert, welche Kontrollkästchen aktiviert oder deaktiviert sind, ohne unsere Hilfe. Dieses Feature verbirgt jedoch ein Problem: Das Aktivieren oder Deaktivieren eines Kontrollkästchens ändert nicht den Zustand in unserer Reakt-Anwendung. Das bedeutet, dass der Browser und unsere App jetzt nicht mehr synchron sind. Wir müssen unseren eigenen Code schreiben, um den Browser wieder mit unserer App zu synchronisieren.

### Den Fehler beweisen

Bevor wir das Problem beheben, lassen Sie uns beobachten, wie es passiert.

Beginnen wir damit, eine `toggleTaskCompleted()`-Funktion in unserer `App()`-Komponente zu schreiben. Diese Funktion wird einen `id`-Parameter haben, aber wir werden ihn noch nicht verwenden. Vorerst werden wir das erste Element im Array in die Konsole protokollieren – wir werden beobachten, was passiert, wenn wir es in unserem Browser markieren oder abwählen:

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

Gehen Sie als nächstes zu Ihrer `Todo.jsx`-Komponente und fügen Sie einen `onChange`-Handler zu Ihrem `<input />`-Element hinzu, das eine anonyme Funktion verwenden sollte, um `props.toggleTaskCompleted()` mit einem Parameter von `props.id` aufzurufen. Das `<input />` sollte jetzt so aussehen:

```jsx
<input
  id={props.id}
  type="checkbox"
  defaultChecked={props.completed}
  onChange={() => props.toggleTaskCompleted(props.id)}
/>
```

Speichern Sie alles und gehen Sie zurück zu Ihrem Browser und bemerken Sie, dass unsere erste Aufgabe, Essen, markiert ist. Öffnen Sie Ihre JavaScript-Konsole, dann klicken Sie auf das Kontrollkästchen neben Essen. Es wird deaktiviert, wie erwartet. Ihre JavaScript-Konsole wird jedoch etwa so etwas protokollieren:

```plain
Object { id: "task-0", name: "Eat", completed: true }
```

Das Kontrollkästchen deaktiviert sich im Browser, aber unsere Konsole sagt uns, dass Essen noch abgeschlossen ist. Wir werden das als Nächstes beheben!

### Den Browser mit unseren Daten synchronisieren

Lassen Sie uns unsere `toggleTaskCompleted()`-Funktion in `App.jsx` erneut besuchen. Wir möchten, dass sie die `completed`-Eigenschaft nur der Aufgabe ändert, die umgeschaltet wurde, und alle anderen unangetastet lässt. Dafür werden wir über die Aufgabenliste `map()` und nur diejenige ändern, die wir abgeschlossen haben.

Aktualisieren Sie Ihre `toggleTaskCompleted()`-Funktion auf das folgende:

```jsx
function toggleTaskCompleted(id) {
  const updatedTasks = tasks.map((task) => {
    // wenn diese Aufgabe dieselbe ID wie die bearbeitete Aufgabe hat
    if (id === task.id) {
      // Verwenden Sie das Objekt-Spread, um ein neues Objekt zu erstellen,
      // dessen `completed`-Eigenschaft invertiert wurde
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  setTasks(updatedTasks);
}
```

Hier definieren wir eine `updatedTasks`-Konstante, die über das ursprüngliche `tasks`-Array mappt. Wenn die `id`-Eigenschaft der Aufgabe mit der `id` übereinstimmt, die an die Funktion übergeben wurde, verwenden wir [Objekt-Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), um ein neues Objekt zu erstellen und das `completed`-Eigenschaft dieses Objekts umzuschalten, bevor wir es zurückgeben. Wenn es nicht übereinstimmt, geben wir das ursprüngliche Objekt zurück.

Dann rufen wir `setTasks()` mit diesem neuen Array auf, um unseren Zustand zu aktualisieren.

## Eine Aufgabe löschen

Das Löschen einer Aufgabe folgt einem ähnlichen Muster wie das Umschalten ihres abgeschlossenen Status: Wir müssen eine Funktion zum Aktualisieren unseres Zustands definieren, sie dann als Prop in `<Todo />` übergeben und sie aufrufen, wenn das richtige Ereignis eintritt.

### Das `deleteTask`-Callback-Prop

Hier fangen wir an, eine `deleteTask()`-Funktion in Ihrer `App`-Komponente zu schreiben. Wie `toggleTaskCompleted()` wird diese Funktion einen `id`-Parameter annehmen, und wir werden diese `id` vorerst in die Konsole protokollieren. Fügen Sie das folgende unter `toggleTaskCompleted()` hinzu:

```jsx
function deleteTask(id) {
  console.log(id);
}
```

Fügen Sie als nächstes ein weiteres Callback-Prop zu unserem Array von `<Todo />`-Komponenten hinzu:

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

In `Todo.jsx` möchten wir `props.deleteTask()` aufrufen, wenn die Schaltfläche "Delete" gedrückt wird. `deleteTask()` muss die ID der Aufgabe kennen, die es aufgerufen hat, damit es die richtige Aufgabe aus dem Zustand löschen kann.

Aktualisieren Sie die Schaltfläche "Delete" in `Todo.jsx` wie folgt:

```jsx
<button
  type="button"
  className="btn btn__danger"
  onClick={() => props.deleteTask(props.id)}>
  Delete <span className="visually-hidden">{props.name}</span>
</button>
```

Jetzt, wenn Sie auf eine der "Delete"-Schaltflächen in der App klicken, sollte Ihre Browserkonsole die ID der zugehörigen Aufgabe protokollieren.

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

Jetzt, da wir wissen, dass `deleteTask()` korrekt aufgerufen wird, können wir unseren `setTasks()` Hook in `deleteTask()` aufrufen, um diese Aufgabe aus dem Zustand der App zu löschen, sowie visuell in der App-Benutzeroberfläche. Da `setTasks()` ein Array als Argument erwartet, sollten wir ein neues Array übergeben, das die bestehenden Aufgaben kopiert, **_ohne_** die Aufgabe, deren ID mit derjenigen übereinstimmt, die an `deleteTask()` übergeben wurde.

Dies ist eine perfekte Gelegenheit, [`Array.prototype.filter()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) zu verwenden. Wir können jede Aufgabe testen und eine Aufgabe aus dem neuen Array ausschließen, wenn ihre `id`-Eigenschaft mit dem `id`-Argument übereinstimmt, das an `deleteTask()` übergeben wurde.

Aktualisieren Sie die `deleteTask()`-Funktion in Ihrer `App.jsx`-Datei wie folgt:

```jsx
function deleteTask(id) {
  const remainingTasks = tasks.filter((task) => id !== task.id);
  setTasks(remainingTasks);
}
```

Versuchen Sie, Ihre App erneut zu nutzen. Jetzt sollten Sie in der Lage sein, eine Aufgabe aus Ihrer App zu löschen!

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
      // wenn diese Aufgabe dieselbe ID wie die bearbeitete Aufgabe hat
      if (id === task.id) {
        // Verwenden Sie das Objekt-Spread, um ein neues Objekt zu erstellen,
        // dessen `completed`-Eigenschaft invertiert wurde
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

Das war genug für einen Artikel. Hier haben wir Ihnen einen Überblick darüber gegeben, wie Reakt mit Ereignissen umgeht und den Zustand verwaltet, und wir haben Funktionalitäten implementiert, um Aufgaben hinzuzufügen, zu löschen und als erledigt zu kennzeichnen. Wir sind fast da. Im nächsten Artikel werden wir die Funktionalität implementieren, um bestehende Aufgaben zu bearbeiten und die Liste der Aufgaben zwischen allen, erledigten und unvollständigen Aufgaben zu filtern. Dabei werden wir uns eine bedingte UI-Renderung ansehen.

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
