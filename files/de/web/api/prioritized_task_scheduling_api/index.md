---
title: Prioritized Task Scheduling API
slug: Web/API/Prioritized_Task_Scheduling_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **Priorisierte Task-Scheduling-API** bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Bibliotheken und Frameworks von Drittanbietern definiert sind.

Die [Task-Prioritäten](#task-prioritäten) sind sehr grob gegliedert und basieren darauf, ob Tasks die Benutzerinteraktion blockieren oder anderweitig die Benutzererfahrung beeinflussen oder im Hintergrund ausgeführt werden können. Entwickler und Frameworks können innerhalb der vom API definierten breiten Kategorien feinere Priorisierungsschemata implementieren.

Die API basiert auf Promises und unterstützt die Möglichkeit, Task-Prioritäten festzulegen und zu ändern, Tasks zum Scheduler hinzuzufügen zu verzögern, Tasks abzubrechen und Änderungen der Priorität sowie Abbruchereignisse zu überwachen.

## Konzepte und Nutzung

Die Priorisierte Task-Scheduling-API ist sowohl im Window- als auch im Worker-Thread über die `scheduler`-Eigenschaft auf dem globalen Objekt verfügbar.

Die Haupt-API-Methoden sind [`scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) und [`scheduler.yield()`](/de/docs/Web/API/Scheduler/yield). `scheduler.postTask()` nimmt eine Rückruffunktion (die Task) an und gibt ein Promise zurück, das mit dem Rückgabewert der Funktion aufgelöst wird oder mit einem Fehler abgelehnt wird. `scheduler.yield()` verwandelt jede [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Funktion in eine Task, indem der Haupt-Thread für andere Arbeiten an den Browser abgegeben wird, wobei die Ausführung fortgesetzt wird, wenn das zurückgegebene Promise aufgelöst wird.

Die beiden Methoden haben ähnliche Funktionalitäten, bieten jedoch unterschiedliche Kontrollstufen. `scheduler.postTask()` ist konfigurierbarer — beispielsweise ermöglicht es das explizite Festlegen von Task-Prioritäten sowie das Abbrechen von Tasks über ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). `scheduler.yield()` hingegen ist einfacher und kann in einer `async`-Funktion `await`ed werden, ohne dass eine Folgetask in einer anderen Funktion bereitgestellt werden muss.

### `scheduler.yield()`

Um langlaufende JavaScript-Tasks so aufzuteilen, dass sie den Haupt-Thread nicht blockieren, wird ein `scheduler.yield()`-Aufruf eingefügt, um den Haupt-Thread vorübergehend zurück an den Browser zu geben, wodurch eine Task erstellt wird, um die Ausführung dort fortzusetzen, wo sie aufgehört hat.

```js
async function slowTask() {
  firstHalfOfWork();
  await scheduler.yield();
  secondHalfOfWork();
}
```

`scheduler.yield()` gibt ein Promise zurück, das erwartet werden kann, um die Ausführung fortzusetzen. Dies ermöglicht es, Arbeiten, die zur gleichen Funktion gehören, dort einzubinden, ohne den Haupt-Thread zu blockieren, wenn die Funktion ausgeführt wird.

`scheduler.yield()` nimmt keine Argumente an. Die Task, die ihre Fortsetzung auslöst, hat standardmäßig eine [`user-visible`](#user-visible)-Priorität; wenn jedoch `scheduler.yield()` innerhalb eines `scheduler.postTask()`-Callbacks aufgerufen wird, erbt es die [Priorität der umgebenden Task](/de/docs/Web/API/Scheduler/yield#inheriting_task_priorities).

### `scheduler.postTask()`

Wenn `scheduler.postTask()` ohne Argumente aufgerufen wird, erstellt es eine Task mit einer standardmäßigen [`user-visible`](#user-visible)-Priorität, die weder abgebrochen noch deren Priorität geändert werden kann.

```js
const promise = scheduler.postTask(myTask);
```

Da die Methode ein Promise zurückgibt, können Sie dessen Auflösung asynchron mit [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) abwarten und Fehler abfangen, die von der Task-Rückruffunktion geworfen werden (oder wenn die Task abgebrochen wird) mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch). Die Rückruffunktion kann jede Art von Funktion sein (unten zeigen wir eine Pfeilfunktion).

```js
scheduler
  .postTask(() => "Task executing")
  // Promise resolved: log task result when promise resolves
  .then((taskResult) => console.log(`${taskResult}`))
  // Promise rejected: log AbortError or errors thrown by task
  .catch((error) => console.error(`Error: ${error}`));
```

Die gleiche Task könnte mit `await`/`async` wie unten gezeigt gewartet werden (beachten Sie, dass dies in einem {{Glossary("IIFE", "Immediately Invoked Function Expression (IIFE)")}}) ausgeführt wird:

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

Sie können auch ein Optionsobjekt an die `postTask()`-Methode übergeben, wenn Sie das Standardverhalten ändern möchten.
Die Optionen sind:

- `priority` Ermöglicht Ihnen die Angabe einer bestimmten unveränderlichen Priorität.
  Einmal gesetzt, kann die Priorität nicht mehr geändert werden.
- `signal` Ermöglicht Ihnen die Angabe eines Signals, das entweder ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) sein kann.
  Das Signal ist mit einem Controller verbunden, der verwendet werden kann, um die Task abzubrechen.
  Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) kann auch verwendet werden, um die Task-Priorität zu setzen und zu ändern, wenn die [Task veränderbar ist](#veränderbare_und_unveränderbare_task-priorität).
- `delay` Ermöglicht Ihnen, die Verzögerung anzugeben, bevor die Aufgabe zur Planung hinzugefügt wird, in Millisekunden.

Das gleiche Beispiel wie oben mit einer Prioritätsoption würde so aussehen:

```js
scheduler
  .postTask(() => "Task executing", { priority: "user-blocking" })
  .then((taskResult) => console.log(`${taskResult}`)) // Log the task result
  .catch((error) => console.error(`Error: ${error}`)); // Log any errors
```

### Task-Prioritäten

Geplante Tasks werden in Prioritätsreihenfolge ausgeführt, gefolgt von der Reihenfolge, in der sie der Scheduler-Warteschlange hinzugefügt wurden.

Es gibt nur drei Prioritäten, die unten aufgeführt sind (geordnet von hoch nach niedrig):

- `user-blocking`

  - : Tasks, die Benutzer daran hindern, mit der Seite zu interagieren.
    Dazu gehört das Rendern der Seite bis zu dem Punkt, an dem sie verwendet werden kann, oder das Reagieren auf Benutzereingaben.

- `user-visible`

  - : Tasks, die für den Benutzer sichtbar, aber nicht unbedingt blockierend für Benutzeraktionen sind.
    Dazu könnte das Rendern von nicht wesentlichen Teilen der Seite gehören, wie z.B. nicht wesentliche Bilder oder Animationen.

    Dies ist die Standardpriorität für `scheduler.postTask()` und `scheduler.yield()`.

- `background`
  - : Tasks, die nicht zeitkritisch sind.
    Dazu könnte das Verarbeiten von Protokollen oder das Initialisieren von Drittanbieter-Bibliotheken gehören, die nicht für das Rendering erforderlich sind.

### Veränderbare und unveränderbare Task-Priorität

Es gibt viele Anwendungsfälle, in denen die Task-Priorität nie geändert werden muss, während sie in anderen Fällen geändert werden muss.
Zum Beispiel könnte das Abrufen eines Bildes von einer `background`-Task zu `user-visible` wechseln, wenn ein Karussell in den sichtbaren Bereich gescrollt wird.

Task-Prioritäten können als statisch (unveränderlich) oder dynamisch (änderbar) festgelegt werden, abhängig von den an [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) übergebenen Argumenten.

Task-Priorität ist unveränderlich, wenn ein Wert im `options.priority`-Argument angegeben wird.
Der angegebene Wert wird für die Task-Priorität verwendet und kann nicht geändert werden.

Die Priorität ist nur dann änderbar, wenn ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) an das `options.signal`-Argument übergeben wird **und** `options.priority` **nicht gesetzt** ist.
In diesem Fall übernimmt die Task ihre ursprüngliche Priorität vom Signal, und die Priorität kann anschließend durch Aufrufen von [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) auf dem Controller, der mit dem Signal verknüpft ist, geändert werden.

Wenn die Priorität weder mit `options.priority` noch durch Übergeben eines [`TaskSignal`](/de/docs/Web/API/TaskSignal) an `options.signal` festgelegt ist, dann ist sie standardmäßig `user-visible` (und per Definition unveränderlich).

Beachten Sie, dass eine Task, die abgebrochen werden muss, `options.signal` entweder auf [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder auf [`AbortSignal`](/de/docs/Web/API/AbortSignal) setzen muss.
Für eine Task mit einer unveränderlichen Priorität zeigt [`AbortSignal`](/de/docs/Web/API/AbortSignal) jedoch klarer an, dass die Task-Priorität nicht mit dem Signal geändert werden kann.

Lassen Sie uns ein Beispiel durchgehen, um zu demonstrieren, was wir damit meinen. Wenn Sie mehrere Aufgaben haben, die ungefähr die gleiche Priorität haben, ist es sinnvoll, sie in separate Funktionen zu zerlegen, um die Wartung, das Debuggen und viele andere Gründe zu erleichtern.

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

Diese Art von Struktur hilft jedoch nicht beim Blockieren des Haupt-Threads. Da alle fünf Tasks innerhalb einer Hauptfunktion ausgeführt werden, führt der Browser sie alle als eine einzige Task aus.

Um dies zu handhaben, wird häufig eine Funktion periodisch ausgeführt, um den Code _dem Haupt-Thread zu unterbrechen_. Das bedeutet, dass unser Code in mehrere Tasks aufgeteilt wird, zwischen deren Ausführung der Browser die Möglichkeit hat, hochpriorisierte Tasks wie das Aktualisieren der Benutzeroberfläche zu bearbeiten. Ein übliches Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in eine separate Task zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann innerhalb eines Tasks-Runner-Musters wie folgt verwendet werden, um dem Haupt-Thread nach jeder ausgeführten Task eine Unterbrechung zu ermöglichen:

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

Um dies weiter zu verbessern, können wir [`Scheduler.yield`](/de/docs/Web/API/Scheduler/yield) verwenden, wenn verfügbar, um diesen Code vor anderen weniger kritischen Aufgaben in der Warteschlange weiter auszuführen:

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
  - : Enthält die Methoden [`postTask()`](/de/docs/Web/API/Scheduler/postTask) und [`yield()`](/de/docs/Web/API/Scheduler/yield) zum Hinzufügen priorisierter Aufgaben zur Planung.
    Eine Instanz dieser Schnittstelle ist auf den globalen Objekten [`Window`](/de/docs/Web/API/Window) oder [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) (`globalThis.scheduler`) verfügbar.
- [`TaskController`](/de/docs/Web/API/TaskController)
  - : Unterstützt sowohl das Abbrechen einer Aufgabe als auch das Ändern ihrer Priorität.
- [`TaskSignal`](/de/docs/Web/API/TaskSignal)
  - : Ein Signalobjekt, das es ermöglicht, eine Aufgabe abzubrechen und ihre Priorität bei Bedarf mithilfe eines [`TaskController`](/de/docs/Web/API/TaskController)-Objekts zu ändern.
- [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent)
  - : Die Schnittstelle für das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis, das gesendet wird, wenn die Priorität für eine Aufgabe geändert wird.

> [!NOTE]
> Wenn die [Task-Priorität](#task-prioritäten) nie geändert werden muss, können Sie stattdessen einen [`AbortController`](/de/docs/Web/API/AbortController) und das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) anstelle von [`TaskController`](/de/docs/Web/API/TaskController) und [`TaskSignal`](/de/docs/Web/API/TaskSignal) verwenden.

### Erweiterungen zu anderen Schnittstellen

- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler)
  - : Diese Eigenschaften sind die Einstiegspunkte für die Verwendung der `Scheduler.postTask()`-Methode in einem Window- oder Worker-Bereich.

## Beispiele

Beachten Sie, dass die unten stehenden Beispiele `myLog()` verwenden, um in ein Textfeld zu schreiben.
Der Code für den Protokollbereich und die Methode wird in der Regel ausgeblendet, um nicht von relevanterem Code abzulenken.

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

### Funktionsprüfung

Überprüfen Sie, ob das priorisierte Task-Scheduling unterstützt wird, indem Sie nach der `scheduler`-Eigenschaft im globalen Bereich testen.

Der unten stehende Code druckt "Feature: Supported", wenn die API in diesem Browser unterstützt wird.

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

### Grundlegende Nutzung

Tasks werden mit [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) gepostet, indem eine Rückruffunktion (Task) im ersten Argument angegeben wird und ein optionales zweites Argument verwendet werden kann, um die Task-Priorität, das Signal und/oder die Verzögerung anzugeben.
Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der Rückruffunktion aufgelöst wird oder mit einem Abbruchfehler oder einem in der Funktion geworfenen Fehler abgelehnt wird.

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

Da es ein Promise zurückgibt, kann [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) [mit anderen Promises verkettet werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises).
Im Folgenden zeigen wir, wie man auf die Auflösung des Promises mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) wartet.
Dies nutzt die Standardpriorität (`user-visible`).

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

Die Methode kann auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) innerhalb einer [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) verwendet werden.
Der unten stehende Code zeigt, wie Sie diesen Ansatz verwenden könnten, um auf eine `user-blocking`-Task zu warten.

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

In einigen Fällen müssen Sie möglicherweise überhaupt nicht auf die Fertigstellung warten.
Aus Einfachheitsgründen protokollieren viele der hier gezeigten Beispiele einfach das Ergebnis, während die Task ausgeführt wird.

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

Das unten stehende Protokoll zeigt die Ausgabe der drei oben genannten Tasks.
Beachten Sie, dass die Reihenfolge, in der sie ausgeführt werden, zuerst von der Priorität und dann von der Deklarationsreihenfolge abhängt.

{{EmbedLiveSample('Basic usage','400px','170px')}}

### Permanente Prioritäten

[Task-Prioritäten](#task-prioritäten) können über den `priority`-Parameter im optionalen zweiten Argument festgelegt werden.
In dieser Weise gesetzte Prioritäten sind [unveränderlich](#veränderbare_und_unveränderbare_task-priorität) (können nicht geändert werden).

Unten posten wir zwei Gruppen von drei Tasks, wobei jedes Mitglied in umgekehrter Prioritätsreihenfolge ist.
Die letzte Task hat die Standardpriorität.
Wenn sie ausgeführt werden, protokolliert jede Task einfach ihre erwartete Reihenfolge (wir warten nicht auf das Ergebnis, weil wir es nicht benötigen, um die Ausführungsreihenfolge zu zeigen).

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

Die folgende Ausgabe zeigt, dass die Tasks in Prioritätsreihenfolge und dann in der Deklarationsreihenfolge ausgeführt werden.

{{EmbedLiveSample("Permanent priorities",'400px','170px')}}

### Ändern von Task-Prioritäten

[Task-Prioritäten](#task-prioritäten) können auch ihren Anfangswert von einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) erhalten, das im optionalen zweiten Argument an `postTask()` übergeben wird.
Wenn dies so eingestellt ist, kann die Priorität der Task [dann geändert werden](#veränderbare_und_unveränderbare_task-priorität) mit dem Controller, der mit dem Signal verbunden ist.

> [!NOTE]
> Das Festlegen und Ändern von Task-Prioritäten mit einem Signal funktioniert nur, wenn das `options.priority`-Argument von `postTask()` nicht gesetzt ist und wenn das `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) (und kein [`AbortSignal`](/de/docs/Web/API/AbortSignal)) ist.

Der unten stehende Code zeigt zunächst, wie man ein [`TaskController`](/de/docs/Web/API/TaskController) erstellt und die anfängliche Priorität seines Signals zu `user-blocking` im Konstruktor von [`TaskController()`](/de/docs/Web/API/TaskController/TaskController) festlegt.

Der Code verwendet dann `addEventListener()`, um ein Ereignislistener für das Signal des Controllers hinzuzufügen (alternativ könnten wir die `TaskSignal.onprioritychange`-Eigenschaft verwenden, um einen Ereignishandler hinzuzufügen).
Der Ereignishandler verwendet [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) auf dem Ereignis, um die ursprüngliche Priorität zu erhalten, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) auf dem Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

Die Aufgabe wird dann gepostet, indem das Signal übergeben wird, und dann ändern wir sofort die Priorität zu `background`, indem wir [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) auf dem Controller aufrufen.

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
Beachten Sie, dass in diesem Fall die Priorität geändert wird, bevor die Task ausgeführt wird, aber sie könnte ebenso während der Task-Ausführung geändert worden sein.

{{EmbedLiveSample("Changing task priorities",'400px','130px')}}

### Abbrechen von Tasks

Tasks können mit entweder [`TaskController`](/de/docs/Web/API/TaskController) und [`AbortController`](/de/docs/Web/API/AbortController) auf genau die gleiche Weise abgebrochen werden.
Der einzige Unterschied ist, dass Sie [`TaskController`](/de/docs/Web/API/TaskController) verwenden müssen, wenn Sie auch die Priorität der Aufgabe festlegen möchten.

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
Die Aufgabe wird dann sofort abgebrochen.
Dies führt dazu, dass das Promise mit einem `AbortError` abgelehnt wird, das im `catch`-Block erfasst und protokolliert wird.
Beachten Sie, dass wir auch das [`abort`](/de/docs/Web/API/AbortSignal/abort_event)-Ereignis, das auf dem [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) ausgelöst wird, abhören und den Abbruch dort protokollieren könnten.

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

Das folgende Protokoll zeigt die abgebrochene Aufgabe.

{{EmbedLiveSample("Aborting tasks",'400px','100px')}}

### Verzögern von Tasks

Tasks können verzögert werden, indem eine ganze Zahl von Millisekunden im Parameter `options.delay` von `postTask()` angegeben wird.
Dies fügt die Aufgabe effektiv in die priorisierte Warteschlange bei einem Timeout hinzu, wie es mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) erstellt werden könnte.
Die `delay` ist die minimale Zeitspanne, bevor die Aufgabe zum Scheduler hinzugefügt wird; sie kann länger sein.

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

Der Code unten zeigt zwei Aufgaben (als Pfeilfunktionen) hinzugefügt mit einer Verzögerung.

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

Aktualisieren Sie die Seite.
Beachten Sie, dass die zweite Zeichenkette nach etwa 2 Sekunden im Protokoll erscheint.

{{EmbedLiveSample("Delaying tasks",'400px','100px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Building a Faster Web Experience with the postTask Scheduler](https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91) auf dem Airbnb-Blog (2021)
- [Optimizing long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
