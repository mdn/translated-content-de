---
title: Prioritized Task Scheduling API
slug: Web/API/Prioritized_Task_Scheduling_API
l10n:
  sourceCommit: 8b77a013c518ef1b62534a8446a60732d582a24b
---

{{DefaultAPISidebar("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **Prioritized Task Scheduling API** bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren – unabhängig davon, ob sie im Code der Website oder in Bibliotheken und Frameworks von Drittanbietern definiert sind.

Die [Aufgabenprioritäten](#aufgabenprioritäten) sind grob abgestuft. Sie richten sich danach, ob Aufgaben die Benutzerinteraktion blockieren oder die Benutzererfahrung anderweitig beeinflussen oder ob sie im Hintergrund ausgeführt werden können. Entwickler und Frameworks können innerhalb der breiten Kategorien der API differenziertere Priorisierungsschemata implementieren.

Die API basiert auf Promises. Sie ermöglicht es, Aufgabenprioritäten festzulegen und zu ändern, das Hinzufügen von Aufgaben zum Scheduler zu verzögern, Aufgaben abzubrechen und Ereignisse bei Prioritätsänderungen und Abbrüchen zu überwachen.

## Konzepte und Verwendung

Die Prioritized Task Scheduling API ist sowohl in Window- als auch in Worker-Threads über die Eigenschaft `scheduler` des globalen Objekts verfügbar.

Die wichtigsten API-Methoden sind [`scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) und [`scheduler.yield()`](/de/docs/Web/API/Scheduler/yield). `scheduler.postTask()` nimmt eine Callback-Funktion (die Aufgabe) entgegen und gibt ein Promise zurück, das mit dem Rückgabewert der Funktion erfüllt oder bei einem Fehler zurückgewiesen wird. Mit `scheduler.yield()` kann jede [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Funktion die Ausführung an den Browser abgeben, damit dieser andere Arbeiten erledigen kann. Die Ausführung wird fortgesetzt, sobald das zurückgegebene Promise erfüllt wird.

Die beiden Methoden erfüllen ähnliche Zwecke, bieten aber unterschiedlich viel Kontrolle. `scheduler.postTask()` ist stärker konfigurierbar: Beispielsweise lässt sich die Aufgabenpriorität ausdrücklich festlegen und die Aufgabe über ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) abbrechen. `scheduler.yield()` ist dagegen einfacher und kann in jeder `async`-Funktion mit `await` verwendet werden, ohne eine Folgeaufgabe in einer weiteren Funktion angeben zu müssen.

### `scheduler.yield()`

Um lang laufende JavaScript-Aufgaben aufzuteilen, damit sie den Hauptthread nicht blockieren, fügen Sie einen Aufruf von `scheduler.yield()` ein. Dadurch wird die Ausführung vorübergehend an den Browser abgegeben und eine Aufgabe erstellt, die sie später an derselben Stelle fortsetzt.

```js
async function slowTask() {
  firstHalfOfWork();
  await scheduler.yield();
  secondHalfOfWork();
}
```

`scheduler.yield()` gibt ein Promise zurück, auf dessen Erfüllung mit `await` gewartet werden kann, bevor die Ausführung fortgesetzt wird. So kann die Arbeit in derselben Funktion bleiben, ohne dass die Funktion bei ihrer Ausführung den Hauptthread blockiert.

`scheduler.yield()` nimmt keine Argumente entgegen. Die Aufgabe, die die Ausführung fortsetzt, hat standardmäßig die Priorität [`user-visible`](#user-visible). Wird `scheduler.yield()` jedoch innerhalb eines `scheduler.postTask()`-Callbacks aufgerufen, [übernimmt es die Priorität der umgebenden Aufgabe](/de/docs/Web/API/Scheduler/yield#inheriting_task_priorities).

### `scheduler.postTask()`

Wird `scheduler.postTask()` ohne Argumente aufgerufen, erstellt es eine Aufgabe mit der Standardpriorität [`user-visible`](#user-visible). Diese Aufgabe kann weder abgebrochen noch in ihrer Priorität geändert werden.

```js
const promise = scheduler.postTask(myTask);
```

Da die Methode ein Promise zurückgibt, können Sie mit [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) asynchron auf dessen Erfüllung warten. Fehler, die die Callback-Funktion der Aufgabe auslöst oder die beim Abbruch der Aufgabe auftreten, können Sie mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) abfangen. Als Callback kann jede Art von Funktion dienen; im Folgenden verwenden wir eine Pfeilfunktion.

```js
scheduler
  .postTask(() => "Task executing")
  // Promise resolved: log task result when promise resolves
  .then((taskResult) => console.log(`${taskResult}`))
  // Promise rejected: log AbortError or errors thrown by task
  .catch((error) => console.error(`Error: ${error}`));
```

Auf dieselbe Aufgabe kann auch mit `await`/`async` gewartet werden, wie unten gezeigt. Beachten Sie, dass der Code in einem {{Glossary("IIFE", "sofort aufgerufenen Funktionsausdruck (IIFE)")}} ausgeführt wird:

```js
(async () => {
  try {
    const result = await scheduler.postTask(() => "Task executing");
    console.log(result);
  } catch (error) {
    // Log AbortError or error thrown in task function
    console.error(`Error: ${error}`);
  }
})();
```

Wenn Sie das Standardverhalten ändern möchten, können Sie der Methode `postTask()` außerdem ein Optionsobjekt übergeben.
Folgende Optionen stehen zur Verfügung:

- `priority`: Legt eine bestimmte unveränderliche Priorität fest.
  Nach dem Festlegen kann die Priorität nicht mehr geändert werden.
- `signal`: Gibt ein Signal an, entweder ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder ein [`AbortSignal`](/de/docs/Web/API/AbortSignal).
  Das Signal ist einem Controller zugeordnet, mit dem die Aufgabe abgebrochen werden kann.
  Mit einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) lässt sich außerdem die Aufgabenpriorität festlegen und ändern, sofern [die Priorität der Aufgabe veränderbar ist](#veränderliche_und_unveränderliche_aufgabenpriorität).
- `delay`: Gibt in Millisekunden an, wie lange das Hinzufügen der Aufgabe zum Scheduler verzögert wird.

Das obige Beispiel sähe mit einer Prioritätsoption so aus:

```js
scheduler
  .postTask(() => "Task executing", { priority: "user-blocking" })
  .then((taskResult) => console.log(`${taskResult}`)) // Log the task result
  .catch((error) => console.error(`Error: ${error}`)); // Log any errors
```

### Aufgabenprioritäten

Geplante Aufgaben werden zuerst nach Priorität und anschließend in der Reihenfolge ausgeführt, in der sie der Warteschlange des Schedulers hinzugefügt wurden.

Es gibt nur drei Prioritäten, hier von der höchsten zur niedrigsten aufgeführt:

- `user-blocking`
  - : Aufgaben, die Benutzer daran hindern, mit der Seite zu interagieren.
    Dazu gehört, die Seite so weit darzustellen, dass sie verwendet werden kann, oder auf Benutzereingaben zu reagieren.

- `user-visible`
  - : Aufgaben, deren Ergebnis für Benutzer sichtbar ist, die aber Benutzeraktionen nicht unbedingt blockieren.
    Dazu kann die Darstellung nicht essenzieller Teile der Seite gehören, etwa nicht essenzieller Bilder oder Animationen.

    Dies ist die Standardpriorität für `scheduler.postTask()` und `scheduler.yield()`.

- `background`
  - : Aufgaben, die nicht zeitkritisch sind.
    Dazu können die Verarbeitung von Protokollen oder die Initialisierung von Drittanbieterbibliotheken gehören, die für die Darstellung nicht benötigt werden.

### Veränderliche und unveränderliche Aufgabenpriorität

In vielen Fällen muss die Priorität einer Aufgabe nie geändert werden, in anderen Fällen dagegen schon.
Beispielsweise könnte das Laden eines Bildes von einer `background`-Aufgabe zu einer `user-visible`-Aufgabe werden, wenn ein Karussell in den sichtbaren Bereich gescrollt wird.

Abhängig von den Argumenten, die an [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) übergeben werden, kann eine Aufgabenpriorität statisch (unveränderlich) oder dynamisch (veränderbar) festgelegt werden.

Die Aufgabenpriorität ist unveränderlich, wenn im Argument `options.priority` ein Wert angegeben wird.
Dieser Wert wird als Priorität der Aufgabe verwendet und kann nicht geändert werden.

Die Priorität ist nur dann veränderbar, wenn im Argument `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) übergeben wird **und** `options.priority` **nicht gesetzt ist**.
In diesem Fall erhält die Aufgabe ihre anfängliche Priorität vom `signal`. Anschließend kann die Priorität durch Aufruf von [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) auf dem Controller geändert werden, der dem Signal zugeordnet ist.

Wird die Priorität weder über `options.priority` noch durch Übergabe eines [`TaskSignal`](/de/docs/Web/API/TaskSignal) an `options.signal` festgelegt, ist sie standardmäßig `user-visible` (und damit per Definition unveränderlich).

Beachten Sie, dass für eine Aufgabe, die abgebrochen werden können muss, `options.signal` auf ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) gesetzt werden muss.
Bei einer Aufgabe mit unveränderlicher Priorität macht ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) allerdings deutlicher, dass die Priorität nicht über das Signal geändert werden kann.

Ein Beispiel soll dies verdeutlichen. Wenn Sie mehrere Aufgaben mit ungefähr derselben Priorität haben, ist es sinnvoll, sie in separate Funktionen aufzuteilen. Das erleichtert die Wartung und Fehlersuche und bietet weitere Vorteile.

Zum Beispiel:

```js
function main() {
  a();
  b();
  c();
  d();
  e();
}
```

Eine solche Struktur verhindert jedoch nicht, dass der Hauptthread blockiert wird. Da alle fünf Aufgaben innerhalb einer Hauptfunktion ausgeführt werden, führt der Browser sie als eine einzige Aufgabe aus.

Um dies zu vermeiden, rufen wir üblicherweise regelmäßig eine Funktion auf, mit der der Code _die Ausführung an den Hauptthread abgibt_. Dadurch wird unser Code in mehrere Aufgaben aufgeteilt. Zwischen deren Ausführung erhält der Browser die Gelegenheit, hoch priorisierte Arbeiten wie die Aktualisierung der Benutzeroberfläche zu erledigen. Ein häufiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies lässt sich in einem Muster zur Ausführung mehrerer Aufgaben verwenden, um nach jeder ausgeführten Aufgabe die Ausführung an den Hauptthread abzugeben:

```js
async function main() {
  // Create an array of functions to run
  const tasks = [a, b, c, d, e];

  // Loop over the tasks
  while (tasks.length > 0) {
    // Shift the first task off the tasks array
    const task = tasks.shift();

    // Run the task
    task();

    // Yield to the main thread
    await yield();
  }
}
```

Wenn [`Scheduler.yield`](/de/docs/Web/API/Scheduler/yield) verfügbar ist, können wir es zur weiteren Verbesserung verwenden. So kann dieser Code vor anderen, weniger wichtigen Aufgaben in der Warteschlange weiter ausgeführt werden:

```js
function yield() {
  // Use scheduler.yield if it exists:
  if ("scheduler" in window && "yield" in scheduler) {
    return scheduler.yield();
  }

  // Fall back to setTimeout:
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

## Schnittstellen

- [`Scheduler`](/de/docs/Web/API/Scheduler)
  - : Enthält die Methoden [`postTask()`](/de/docs/Web/API/Scheduler/postTask) und [`yield()`](/de/docs/Web/API/Scheduler/yield), mit denen priorisierte Aufgaben zur Planung hinzugefügt werden.
    Eine Instanz dieser Schnittstelle ist auf den globalen Objekten [`Window`](/de/docs/Web/API/Window) oder [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) verfügbar (`globalThis.scheduler`).
- [`TaskController`](/de/docs/Web/API/TaskController)
  - : Ermöglicht sowohl den Abbruch einer Aufgabe als auch die Änderung ihrer Priorität.
- [`TaskSignal`](/de/docs/Web/API/TaskSignal)
  - : Ein Signalobjekt, mit dem Sie eine Aufgabe abbrechen und bei Bedarf mithilfe eines [`TaskController`](/de/docs/Web/API/TaskController)-Objekts ihre Priorität ändern können.
- [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent)
  - : Die Schnittstelle für das Ereignis [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event), das bei einer Änderung der Aufgabenpriorität ausgelöst wird.

> [!NOTE]
> Wenn die [Aufgabenpriorität](#aufgabenprioritäten) nie geändert werden muss, können Sie statt [`TaskController`](/de/docs/Web/API/TaskController) und [`TaskSignal`](/de/docs/Web/API/TaskSignal) einen [`AbortController`](/de/docs/Web/API/AbortController) und das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) verwenden.

### Erweiterungen anderer Schnittstellen

- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler)
  - : Diese Eigenschaften sind die Einstiegspunkte, um die Methode `Scheduler.postTask()` in einem Window- beziehungsweise Worker-Kontext zu verwenden.

## Beispiele

Beachten Sie, dass die folgenden Beispiele `myLog()` verwenden, um Ausgaben in ein Textfeld zu schreiben.
Der Code für das Ausgabefeld und die Methode ist in der Regel ausgeblendet, damit er nicht vom relevanteren Code ablenkt.

```html
<textarea id="log"></textarea>
```

```css hidden
#log {
  min-height: 20px;
  width: 95%;
}
```

```js
// hidden logger code - simplifies example
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

### Unterstützung prüfen

Prüfen Sie, ob die priorisierte Aufgabenplanung unterstützt wird, indem Sie im globalen Gültigkeitsbereich auf die Eigenschaft `scheduler` testen.

Der folgende Code gibt „Feature: Supported“ aus, wenn der Browser die API unterstützt.

```html hidden
<textarea id="log"></textarea>
```

```css hidden
#log {
  min-height: 20px;
  width: 95%;
}
```

```js hidden
// hidden logger code - simplifies example
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

```js
// Check that feature is supported
if ("scheduler" in globalThis) {
  myLog("Feature: Supported");
} else {
  myLog("Feature: NOT Supported");
}
```

{{EmbedLiveSample('Feature checking','400px','70px')}}

### Grundlegende Verwendung

Aufgaben werden mit [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) hinzugefügt. Das erste Argument ist eine Callback-Funktion (die Aufgabe). Mit einem optionalen zweiten Argument können Aufgabenpriorität, Signal und/oder Verzögerung angegeben werden.
Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der Callback-Funktion erfüllt oder mit einem Abbruchfehler beziehungsweise einem in der Funktion ausgelösten Fehler zurückgewiesen wird.

```html hidden
<textarea id="log"></textarea>
```

```css hidden
#log {
  min-height: 100px;
  width: 95%;
}
```

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

Da [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) ein Promise zurückgibt, kann es [mit anderen Promises verkettet werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises).
Im Folgenden zeigen wir, wie Sie mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) auf die Erfüllung des Promise warten.
Dabei wird die Standardpriorität (`user-visible`) verwendet.

```js
// A function that defines a task
function myTask() {
  return "Task 1: user-visible";
}

if ("scheduler" in this) {
  // Post task with default priority: 'user-visible' (no other options)
  // When the task resolves, Promise.then() logs the result.
  scheduler.postTask(myTask).then((taskResult) => myLog(`${taskResult}`));
}
```

Die Methode kann innerhalb einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwendet werden.
Der folgende Code zeigt, wie Sie auf diese Weise auf eine `user-blocking`-Aufgabe warten können.

```js
function myTask2() {
  return "Task 2: user-blocking";
}

async function runTask2() {
  const result = await scheduler.postTask(myTask2, {
    priority: "user-blocking",
  });
  myLog(result); // Logs 'Task 2: user-blocking'.
}
runTask2();
```

In manchen Fällen müssen Sie überhaupt nicht auf den Abschluss warten.
Der Einfachheit halber geben viele der Beispiele hier das Ergebnis direkt bei der Ausführung der Aufgabe aus.

```js
// A function that defines a task
function myTask3() {
  myLog("Task 3: user-visible");
}

if ("scheduler" in this) {
  // Post task and log result when it runs
  scheduler.postTask(myTask3);
}
```

Die folgende Ausgabe zeigt das Ergebnis der drei obigen Aufgaben.
Beachten Sie, dass die Reihenfolge ihrer Ausführung zuerst von der Priorität und danach von der Reihenfolge ihrer Deklaration abhängt.

{{EmbedLiveSample('Basic usage','400px','170px')}}

### Dauerhaft festgelegte Prioritäten

[Aufgabenprioritäten](#aufgabenprioritäten) können mit dem Parameter `priority` im optionalen zweiten Argument festgelegt werden.
Auf diese Weise festgelegte Prioritäten sind [unveränderlich](#veränderliche_und_unveränderliche_aufgabenpriorität).

Im Folgenden fügen wir zwei Gruppen mit jeweils drei Aufgaben hinzu. Innerhalb jeder Gruppe werden die Aufgaben in umgekehrter Prioritätsreihenfolge hinzugefügt.
Die letzte Aufgabe hat die Standardpriorität.
Bei der Ausführung gibt jede Aufgabe lediglich ihre erwartete Position in der Reihenfolge aus. Wir warten nicht auf das Ergebnis, da dies für die Darstellung der Ausführungsreihenfolge nicht erforderlich ist.

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

```js
if ("scheduler" in this) {
  // three tasks, in reverse order of priority
  scheduler.postTask(() => myLog("bkg 1"), { priority: "background" });
  scheduler.postTask(() => myLog("usr-vis 1"), { priority: "user-visible" });
  scheduler.postTask(() => myLog("usr-blk 1"), { priority: "user-blocking" });

  // three more tasks, in reverse order of priority
  scheduler.postTask(() => myLog("bkg 2"), { priority: "background" });
  scheduler.postTask(() => myLog("usr-vis 2"), { priority: "user-visible" });
  scheduler.postTask(() => myLog("usr-blk 2"), { priority: "user-blocking" });

  // Task with default priority: user-visible
  scheduler.postTask(() => myLog("usr-vis 3 (default)"));
}
```

```html hidden
<textarea id="log"></textarea>
```

```css hidden
#log {
  min-height: 120px;
  width: 95%;
}
```

Die folgende Ausgabe zeigt, dass die Aufgaben zuerst nach Priorität und danach in der Reihenfolge ihrer Deklaration ausgeführt werden.

{{EmbedLiveSample("Permanent priorities",'400px','170px')}}

### Aufgabenprioritäten ändern

[Aufgabenprioritäten](#aufgabenprioritäten) können ihren Anfangswert auch von einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) beziehen, das als optionales zweites Argument an `postTask()` übergeben wird.
Wird die Priorität auf diese Weise festgelegt, [kann sie anschließend geändert werden](#veränderliche_und_unveränderliche_aufgabenpriorität), indem der dem Signal zugeordnete Controller verwendet wird.

> [!NOTE]
> Das Festlegen und Ändern von Aufgabenprioritäten über ein Signal funktioniert nur, wenn das Argument `options.priority` für `postTask()` nicht gesetzt ist und `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) ist (und kein [`AbortSignal`](/de/docs/Web/API/AbortSignal)).

Der folgende Code zeigt zunächst, wie ein [`TaskController`](/de/docs/Web/API/TaskController) erstellt und die Anfangspriorität seines Signals im Konstruktor [`TaskController()`](/de/docs/Web/API/TaskController/TaskController) auf `user-blocking` gesetzt wird.

Anschließend fügt der Code mit `addEventListener()` dem Signal des Controllers einen Event-Listener hinzu. Alternativ könnten wir mit der Eigenschaft `TaskSignal.onprioritychange` einen Event-Handler hinzufügen.
Der Event-Handler liest mit [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) am Ereignis die ursprüngliche Priorität und mit [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) am Ereignisziel die neue beziehungsweise aktuelle Priorität aus.

Danach wird die Aufgabe unter Übergabe des Signals hinzugefügt. Unmittelbar darauf ändern wir die Priorität durch Aufruf von [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) auf dem Controller zu `background`.

```html hidden
<textarea id="log"></textarea>
```

```css hidden
#log {
  min-height: 70px;
  width: 95%;
}
```

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

```js
if ("scheduler" in this) {
  // Create a TaskController, setting its signal priority to 'user-blocking'
  const controller = new TaskController({ priority: "user-blocking" });

  // Listen for 'prioritychange' events on the controller's signal.
  controller.signal.addEventListener("prioritychange", (event) => {
    const previousPriority = event.previousPriority;
    const newPriority = event.target.priority;
    myLog(`Priority changed from ${previousPriority} to ${newPriority}.`);
  });

  // Post task using the controller's signal.
  // The signal priority sets the initial priority of the task
  scheduler.postTask(() => myLog("Task 1"), { signal: controller.signal });

  // Change the priority to 'background' using the controller
  controller.setPriority("background");
}
```

Die folgende Ausgabe zeigt, dass die Priorität erfolgreich von `user-blocking` zu `background` geändert wurde.
Beachten Sie, dass die Priorität in diesem Fall vor der Ausführung der Aufgabe geändert wird. Sie hätte ebenso während der Ausführung geändert werden können.

{{EmbedLiveSample("Changing task priorities",'400px','130px')}}

### Aufgaben abbrechen

Aufgaben können sowohl mit [`TaskController`](/de/docs/Web/API/TaskController) als auch mit [`AbortController`](/de/docs/Web/API/AbortController) auf genau dieselbe Weise abgebrochen werden.
Der einzige Unterschied besteht darin, dass Sie [`TaskController`](/de/docs/Web/API/TaskController) verwenden müssen, wenn Sie auch die Aufgabenpriorität festlegen möchten.

```html hidden
<textarea id="log"></textarea>
```

```css hidden
#log {
  min-height: 50px;
  width: 95%;
}
```

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

Der folgende Code erstellt einen Controller und übergibt dessen Signal an die Aufgabe.
Die Aufgabe wird anschließend sofort abgebrochen.
Dadurch wird das Promise mit einem `AbortError` zurückgewiesen. Dieser wird im `catch`-Block abgefangen und ausgegeben.
Alternativ könnten wir auf das Ereignis [`abort`](/de/docs/Web/API/AbortSignal/abort_event) reagieren, das auf dem [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) ausgelöst wird, und den Abbruch dort ausgeben.

```js
if ("scheduler" in this) {
  // Declare a TaskController with default priority
  const abortTaskController = new TaskController();
  // Post task passing the controller's signal
  scheduler
    .postTask(() => myLog("Task executing"), {
      signal: abortTaskController.signal,
    })
    .then((taskResult) => myLog(`${taskResult}`)) // This won't run!
    .catch((error) => myLog(`Error: ${error}`)); // Log the error

  // Abort the task
  abortTaskController.abort();
}
```

Die folgende Ausgabe zeigt die abgebrochene Aufgabe.

{{EmbedLiveSample("Aborting tasks",'400px','100px')}}

### Aufgaben verzögern

Aufgaben können verzögert werden, indem für den Parameter `options.delay` von `postTask()` eine ganzzahlige Anzahl von Millisekunden angegeben wird.
Dadurch wird die Aufgabe nach Ablauf einer Frist in die priorisierte Warteschlange aufgenommen, ähnlich wie bei der Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).
`delay` gibt die Mindestdauer an, bevor die Aufgabe dem Scheduler hinzugefügt wird; tatsächlich kann es länger dauern.

```html hidden
<textarea id="log"></textarea>
```

```css hidden
#log {
  min-height: 50px;
  width: 95%;
}
```

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

Der folgende Code zeigt zwei Aufgaben, die als Pfeilfunktionen mit einer Verzögerung hinzugefügt werden.

```js
if ("scheduler" in this) {
  // Post task as arrow function with delay of 2 seconds
  scheduler
    .postTask(() => "Task delayed by 2000ms", { delay: 2000 })
    .then((taskResult) => myLog(`${taskResult}`));
  scheduler
    .postTask(() => "Next task should complete in about 2000ms", { delay: 1 })
    .then((taskResult) => myLog(`${taskResult}`));
}
```

Laden Sie die Seite neu.
Beachten Sie, dass die zweite Zeichenfolge nach etwa zwei Sekunden in der Ausgabe erscheint.

{{EmbedLiveSample("Delaying tasks",'400px','100px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Eine schnellere Weberfahrung mit dem postTask-Scheduler entwickeln](https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91) im Airbnb-Blog (2021)
- [Lang laufende Aufgaben optimieren](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
