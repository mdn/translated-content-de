---
title: Prioritized Task Scheduling API
slug: Web/API/Prioritized_Task_Scheduling_API
l10n:
  sourceCommit: 2503df3c1d544137d75ed8d5d986bd120de06783
---

{{DefaultAPISidebar("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **Prioritized Task Scheduling API** bietet eine standardisierte Methode, um alle Aufgaben einer Anwendung zu priorisieren, egal ob sie im Code eines Website-Entwicklers oder in Bibliotheken und Frameworks von Drittanbietern definiert sind.

Die [Aufgabenprioritäten](#aufgabenprioritäten) sind sehr grob definiert und basieren darauf, ob Aufgaben die Benutzerinteraktion blockieren oder anderweitig die Benutzererfahrung beeinflussen oder im Hintergrund ausgeführt werden können. Entwickler und Frameworks können innerhalb der von der API definierten breiten Kategorien feinere Priorisierungsschemata implementieren.

Die API basiert auf `Promises` und unterstützt die Fähigkeit, Aufgabenprioritäten festzulegen und zu ändern, Aufgaben hinzuzufügen und zu verzögern, Aufgaben abzubrechen und Ereignisse zur Prioritätsänderung und zum Abbruch zu überwachen.

## Konzepte und Nutzung

Die Prioritized Task Scheduling API ist sowohl im Fenster als auch in Worker-Threads über die `scheduler` Eigenschaft auf dem globalen Objekt verfügbar.

Die Hauptmethoden der API sind [`scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) und [`scheduler.yield()`](/de/docs/Web/API/Scheduler/yield). `scheduler.postTask()` nimmt eine Callback-Funktion (die Aufgabe) entgegen und gibt ein `Promise` zurück, das mit dem Rückgabewert der Funktion erfüllt oder mit einem Fehler abgelehnt wird. `scheduler.yield()` transformiert jede [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) Funktion in eine Aufgabe, indem der Hauptthread dem Browser für andere Arbeiten überlassen wird, wobei die Ausführung fortgesetzt wird, wenn das zurückgegebene `Promise` erfüllt ist.

Die beiden Methoden haben ähnliche Funktionen, jedoch unterschiedliche Steuerungslevel. `scheduler.postTask()` ist konfigurierbarer – zum Beispiel ermöglicht es das explizite Setzen von Aufgabenpriorität und Aufgabenabbruch über ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). Andererseits ist `scheduler.yield()` einfacher und kann in jeder `async` Funktion abgewartet werden, ohne dass eine nachfolgende Aufgabe in einer anderen Funktion bereitgestellt werden muss.

### `scheduler.yield()`

Um langlaufende JavaScript-Aufgaben zu unterbrechen, damit sie den Hauptthread nicht blockieren, fügen Sie einen `scheduler.yield()`-Aufruf ein, um den Hauptthread vorübergehend an den Browser zurückzugeben, wodurch eine Aufgabe erstellt wird, um die Ausführung an dem Punkt fortzusetzen, an dem sie unterbrochen wurde.

```js
async function slowTask() {
  firstHalfOfWork();
  await scheduler.yield();
  secondHalfOfWork();
}
```

`scheduler.yield()` gibt ein `Promise` zurück, das abgewartet werden kann, um die Ausführung fortzusetzen. Dies ermöglicht es, Arbeit, die zu derselben Funktion gehört, dort einzuschließen, ohne den Hauptthread zu blockieren, wenn die Funktion ausgeführt wird.

`scheduler.yield()` nimmt keine Argumente. Die Aufgabe, die ihre Fortsetzung auslöst, hat eine Standardpriorität von [`user-visible`](#user-visible); falls jedoch `scheduler.yield()` innerhalb eines `scheduler.postTask()`-Callbacks aufgerufen wird, wird sie die [Priorität der umgebenden Aufgabe erben](/de/docs/Web/API/Scheduler/yield#inheriting_task_priorities).

### `scheduler.postTask()`

Wenn `scheduler.postTask()` ohne Argumente aufgerufen wird, erstellt es eine Aufgabe mit einer Standardpriorität von [`user-visible`](#user-visible), die nicht abgebrochen werden kann oder deren Priorität nicht geändert werden kann.

```js
const promise = scheduler.postTask(myTask);
```

Da die Methode ein `Promise` zurückgibt, können Sie asynchron auf dessen Erfüllung warten, indem Sie [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) verwenden, und Fehler, die von der Aufgaben-Callback-Funktion geworfen werden (oder wenn die Aufgabe abgebrochen wird), mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) abfangen. Die Callback-Funktion kann jede Art von Funktion sein (unten demonstrieren wir eine Pfeilfunktion).

```js
scheduler
  .postTask(() => "Task executing")
  // Promise resolved: log task result when promise resolves
  .then((taskResult) => console.log(`${taskResult}`))
  // Promise rejected: log AbortError or errors thrown by task
  .catch((error) => console.error(`Error: ${error}`));
```

Auf dieselbe Aufgabe könnte auch mit `await`/`async` gewartet werden, wie unten gezeigt (beachten Sie, dass dies in einem [sofort ausgeführten Funktionsausdruck (IIFE)](/de/docs/Glossary/IIFE) ausgeführt wird):

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

Sie können auch ein options-Objekt an die `postTask()`-Methode übergeben, wenn Sie das Standardverhalten ändern möchten. Die Optionen sind:

- `priority` Dies ermöglicht es Ihnen, eine bestimmte unveränderliche Priorität anzugeben. Einmal gesetzt, kann die Priorität nicht geändert werden.
- `signal` Dies ermöglicht es Ihnen, ein Signal anzugeben, das entweder ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) sein kann. Das Signal ist mit einem Controller verknüpft, der verwendet werden kann, um die Aufgabe abzubrechen. Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) kann auch verwendet werden, um die Aufgabenpriorität festzulegen und zu ändern, wenn die [Aufgabe veränderlich ist](#veränderliche_und_unveränderliche_aufgabenpriorität).
- `delay` Dies ermöglicht es Ihnen, die Verzögerung anzugeben, bevor die Aufgabe zur Planung hinzugefügt wird, in Millisekunden.

Dasselbe Beispiel wie oben mit einer Prioritätenoption würde folgendermaßen aussehen:

```js
scheduler
  .postTask(() => "Task executing", { priority: "user-blocking" })
  .then((taskResult) => console.log(`${taskResult}`)) // Log the task result
  .catch((error) => console.error(`Error: ${error}`)); // Log any errors
```

### Aufgabenprioritäten

Geplante Aufgaben werden in der Reihenfolge der Priorität ausgeführt, gefolgt von der Reihenfolge, in der sie der Planungswarteschlange hinzugefügt wurden.

Es gibt nur drei Prioritäten, die unten aufgeführt sind (geordnet von höchster zu niedrigster):

- `user-blocking`

  - : Aufgaben, die Benutzer davon abhalten, mit der Seite zu interagieren. Dies umfasst das Rendern der Seite bis zu dem Punkt, an dem sie verwendet werden kann, oder das Reagieren auf Benutzereingaben.

- `user-visible`

  - : Aufgaben, die für den Benutzer sichtbar sind, aber nicht unbedingt Aktionen blockieren. Dies könnte das Rendern von nicht wesentlichen Teilen der Seite umfassen, wie nicht wesentliche Bilder oder Animationen.

    Dies ist die Standardpriorität für `scheduler.postTask()` und `scheduler.yield()`.

- `background`
  - : Aufgaben, die nicht zeitkritisch sind. Dies könnte die Protokollverarbeitung oder die Initialisierung von Drittanbieter-Bibliotheken umfassen, die nicht zum Rendern erforderlich sind.

### Veränderliche und unveränderliche Aufgabenpriorität

Es gibt viele Anwendungsfälle, bei denen sich die Aufgabenpriorität nie ändern muss, während sie sich in anderen Fällen ändert. Beispielsweise kann das Abrufen eines Bildes von einer `background` Aufgabe zu `user-visible` wechseln, wenn ein Karussell in den sichtbaren Bereich gescrollt wird.

Aufgabenprioritäten können als statisch (unveränderlich) oder dynamisch (veränderlich) festgelegt werden, je nachdem, welche Argumente an [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) übergeben werden.

Die Aufgabenpriorität ist unveränderlich, wenn ein Wert im `options.priority`-Argument angegeben wird. Der angegebene Wert wird für die Aufgabenpriorität verwendet und kann nicht geändert werden.

Die Priorität ist nur veränderlich, wenn ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) an das `options.signal`-Argument übergeben wird **und** `options.priority` **nicht gesetzt** ist. In diesem Fall nimmt die Aufgabe ihre anfängliche Priorität von der `signal`-Priorität, und die Priorität kann anschließend durch Aufrufen von [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) auf dem mit dem Signal verknüpften Controller geändert werden.

Wenn die Priorität nicht mit `options.priority` oder durch Übergeben eines [`TaskSignal`](/de/docs/Web/API/TaskSignal) an `options.signal` gesetzt wird, dann ist die Standardpriorität `user-visible` (und ist per Definition unveränderlich).

Beachten Sie, dass eine Aufgabe, die abgebrochen werden muss, `options.signal` entweder auf [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) setzen muss. Für eine Aufgabe mit unveränderlicher Priorität zeigt [`AbortSignal`](/de/docs/Web/API/AbortSignal) jedoch klarer an, dass die Aufgabenpriorität mithilfe des Signals nicht geändert werden kann.

Lassen Sie uns ein Beispiel durchgehen, um zu demonstrieren, was wir damit meinen. Wenn Sie mehrere Aufgaben haben, die ungefähr die gleiche Priorität haben, macht es Sinn, sie in separate Funktionen zu unterteilen, um die Wartung, das Debuggen und viele andere Gründe zu erleichtern.

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

Diese Art von Struktur hilft jedoch nicht beim Blockieren des Hauptthreads. Da alle fünf Aufgaben in einer Hauptfunktion ausgeführt werden, behandelt der Browser sie alle als eine einzige Aufgabe.

Um dies zu handhaben, neigen wir dazu, eine Funktion periodisch auszuführen, um den Code _dem Hauptthread zu überlassen_. Das bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen deren Ausführung der Browser die Möglichkeit erhält, hochpriorisierte Aufgaben wie das Aktualisieren der Benutzeroberfläche zu bearbeiten. Ein gängiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/SetTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann in einem Aufgabenmanager-Muster verwendet werden, um nach jeder erledigten Aufgabe dem Hauptthread die Kontrolle zu übergeben:

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

Um dies weiter zu verbessern, können wir [`Scheduler.yield`](/de/docs/Web/API/Scheduler/yield) verwenden, wenn verfügbar, um diesem Code zu erlauben, vor anderen weniger kritischen Aufgaben in der Warteschlange weiter ausgeführt zu werden:

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
    Eine Instanz dieser Schnittstelle ist auf den globalen Objekten [`Window`](/de/docs/Web/API/Window) oder [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) verfügbar (`globalThis.scheduler`).
- [`TaskController`](/de/docs/Web/API/TaskController)
  - : Unterstützt sowohl das Abbrechen einer Aufgabe als auch die Änderung ihrer Priorität.
- [`TaskSignal`](/de/docs/Web/API/TaskSignal)
  - : Ein Signalobjekt, das es Ihnen ermöglicht, eine Aufgabe abzubrechen und ihre Priorität zu ändern, falls erforderlich, unter Verwendung eines [`TaskController`](/de/docs/Web/API/TaskController)-Objekts.
- [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent)
  - : Die Schnittstelle für das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis, das gesendet wird, wenn die Priorität einer Aufgabe geändert wird.

> [!NOTE]
> Wenn die [Aufgabenpriorität](#aufgabenprioritäten) nie geändert werden muss, können Sie einen [`AbortController`](/de/docs/Web/API/AbortController) und das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) anstelle von [`TaskController`](/de/docs/Web/API/TaskController) und [`TaskSignal`](/de/docs/Web/API/TaskSignal) verwenden.

### Erweiterungen zu anderen Schnittstellen

- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler)
  - : Diese Eigenschaften sind die Einstiegspunkte zur Verwendung der `Scheduler.postTask()`-Methode in einem Fenster- oder Worker-Bereich.

## Beispiele

Beachten Sie, dass die folgenden Beispiele `mylog()` verwenden, um in ein Textfeld zu schreiben. Der Code für das Protokollfeld und die Methode ist in der Regel verborgen, um nicht von relevanterem Code abzulenken.

```html hidden
<textarea id="log" style="min-height: 20px; width: 95%"></textarea>
```

```js
// hidden logger code - simplifies example
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

### Funktionserkennung

Überprüfen Sie, ob priorisierte Aufgabenplanung unterstützt wird, indem Sie nach der `scheduler`-Eigenschaft im globalen Bereich suchen.

Der untenstehende Code druckt "Feature: Supported" aus, wenn die API in diesem Browser unterstützt wird.

```html hidden
<textarea id="log" style="min-height: 20px; width: 95%"></textarea>
```

```js hidden
//hidden logger code - simplifies example
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

```js
// Check that feature is supported
if ("scheduler" in globalThis) {
  mylog("Feature: Supported");
} else {
  mylog("Feature: NOT Supported");
}
```

{{EmbedLiveSample('Feature checking','400px','70px')}}

### Grundlegende Nutzung

Aufgaben werden unter Verwendung von [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) gepostet, wobei eine Callback-Funktion (Aufgabe) im ersten Argument angegeben wird und ein optionales zweites Argument verwendet werden kann, um eine Aufgabenpriorität, Signal und/oder Verzögerung anzugeben. Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der Callback-Funktion erfüllt wird oder mit entweder einem Abbruchfehler oder einem Fehler, der in der Funktion geworfen wird, abgelehnt wird.

```html hidden
<textarea id="log" style="min-height: 100px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

Weil sie ein `Promise` zurückgibt, kann [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) [mit anderen Promises verkettet werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises). Unten zeigen wir, wie man darauf wartet, dass das `Promise` mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) erfüllt wird. Dies verwendet die Standardpriorität (`user-visible`).

```js
// A function that defines a task
function myTask() {
  return "Task 1: user-visible";
}

if ("scheduler" in this) {
  // Post task with default priority: 'user-visible' (no other options)
  // When the task resolves, Promise.then() logs the result.
  scheduler.postTask(myTask).then((taskResult) => mylog(`${taskResult}`));
}
```

Die Methode kann auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) innerhalb einer [async-Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) verwendet werden. Der untenstehende Code zeigt, wie Sie diesen Ansatz verwenden könnten, um auf eine `user-blocking`-Aufgabe zu warten.

```js
function myTask2() {
  return "Task 2: user-blocking";
}

async function runTask2() {
  const result = await scheduler.postTask(myTask2, {
    priority: "user-blocking",
  });
  mylog(result); // Logs 'Task 2: user-blocking'.
}
runTask2();
```

In einigen Fällen müssen Sie möglicherweise überhaupt nicht auf den Abschluss warten. Aus Gründen der Einfachheit protokollieren viele der Beispiele hier einfach das Ergebnis, während die Aufgabe ausgeführt wird.

```js
// A function that defines a task
function myTask3() {
  mylog("Task 3: user-visible");
}

if ("scheduler" in this) {
  // Post task and log result when it runs
  scheduler.postTask(myTask3);
}
```

Das Protokoll unten zeigt die Ausgabe der drei obigen Aufgaben. Beachten Sie, dass die Reihenfolge, in der sie ausgeführt werden, zuerst von der Priorität und dann von der Deklarationsreihenfolge abhängt.

{{EmbedLiveSample('Basic usage','400px','170px')}}

### Permanente Prioritäten

[Aufgabenprioritäten](#aufgabenprioritäten) können unter Verwendung des `priority`-Parameters im optionalen zweiten Argument gesetzt werden. Prioritäten, die auf diese Weise gesetzt werden, sind [unveränderlich](#veränderliche_und_unveränderliche_aufgabenpriorität) (können nicht geändert werden).

Unten posten wir zwei Gruppen von drei Aufgaben, jede in umgekehrter Reihenfolge der Priorität. Die letzte Aufgabe hat die Standardpriorität. Wenn ausgeführt, protokolliert jede Aufgabe einfach ihre erwartete Reihenfolge (wir warten nicht auf das Ergebnis, da dies nicht erforderlich ist, um die Ausführungsreihenfolge zu zeigen).

```js hidden
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

```js
if ("scheduler" in this) {
  // three tasks, in reverse order of priority
  scheduler.postTask(() => mylog("bckg 1"), { priority: "background" });
  scheduler.postTask(() => mylog("usr-vis 1"), { priority: "user-visible" });
  scheduler.postTask(() => mylog("usr-blk 1"), { priority: "user-blocking" });

  // three more tasks, in reverse order of priority
  scheduler.postTask(() => mylog("bckg 2"), { priority: "background" });
  scheduler.postTask(() => mylog("usr-vis 2"), { priority: "user-visible" });
  scheduler.postTask(() => mylog("usr-blk 2"), { priority: "user-blocking" });

  // Task with default priority: user-visible
  scheduler.postTask(() => mylog("usr-vis 3 (default)"));
}
```

```html hidden
<textarea id="log" style="min-height: 120px; width: 95%"></textarea>
```

Die untenstehende Ausgabe zeigt, dass die Aufgaben in der Reihenfolge der Priorität und dann in der Deklarationsreihenfolge ausgeführt werden.

{{EmbedLiveSample("Permanent priorities",'400px','170px')}}

### Aufgabenprioritäten ändern

[Aufgabenprioritäten](#aufgabenprioritäten) können auch ihren Anfangswert von einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) übernehmen, das im optionalen zweiten Argument an `postTask()` übergeben wird. Wenn auf diese Weise gesetzt, kann die Priorität der Aufgabe [dann geändert werden](#veränderliche_und_unveränderliche_aufgabenpriorität) durch den mit dem Signal verbundenen Controller.

> [!NOTE]
> Das Setzen und Ändern von Aufgabenprioritäten unter Verwendung eines Signals funktioniert nur, wenn das Argument `options.priority` für `postTask()` nicht gesetzt ist und wenn das `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) (und kein [`AbortSignal`](/de/docs/Web/API/AbortSignal)) ist.

Der untenstehende Code zeigt zuerst, wie ein [`TaskController`](/de/docs/Web/API/TaskController) erstellt wird, indem die anfängliche Priorität seines Signals im [`TaskController()`](/de/docs/Web/API/TaskController/TaskController)-Konstruktor auf `user-blocking` gesetzt wird.

Der Code verwendet dann `addEventListener()`, um einen Ereignis-Listener zu dem Signal des Controllers hinzuzufügen (wir könnten alternativ die `TaskSignal.onprioritychange`-Eigenschaft verwenden, um einen Ereignis-Handler hinzuzufügen). Der Ereignis-Handler verwendet [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) im Ereignis, um die ursprüngliche Priorität zu erhalten, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) im Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

Die Aufgabe wird dann gepostet, indem das Signal übergeben wird, und dann ändern wir sofort die Priorität zu `background`, indem wir [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) am Controller aufrufen.

```html hidden
<textarea id="log" style="min-height: 70px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function mylog(text) {
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
    mylog(`Priority changed from ${previousPriority} to ${newPriority}.`);
  });

  // Post task using the controller's signal.
  // The signal priority sets the initial priority of the task
  scheduler.postTask(() => mylog("Task 1"), { signal: controller.signal });

  // Change the priority to 'background' using the controller
  controller.setPriority("background");
}
```

Die untenstehende Ausgabe zeigt, dass die Priorität erfolgreich von `user-blocking` auf `background` geändert wurde. Beachten Sie, dass in diesem Fall die Priorität geändert wird, bevor die Aufgabe ausgeführt wird, sie könnte jedoch ebenso gut während der Aufgabenlaufzeit geändert werden.

{{EmbedLiveSample("Changing task priorities",'400px','130px')}}

### Aufgaben abbrechen

Aufgaben können unter Verwendung von entweder [`TaskController`](/de/docs/Web/API/TaskController) und [`AbortController`](/de/docs/Web/API/AbortController) auf genau dieselbe Weise abgebrochen werden. Der einzige Unterschied besteht darin, dass Sie [`TaskController`](/de/docs/Web/API/TaskController) verwenden müssen, wenn Sie auch die Aufgabenpriorität setzen möchten.

```html hidden
<textarea id="log" style="min-height: 50px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

Der untenstehende Code erstellt einen Controller und übergibt dessen Signal an die Aufgabe. Die Aufgabe wird dann sofort abgebrochen. Dies führt dazu, dass das `Promise` mit einem `AbortError` abgelehnt wird, der im `catch`-Block abgefangen und protokolliert wird. Beachten Sie, dass wir auch auf das [`abort`](/de/docs/Web/API/AbortSignal/abort_event)-Ereignis lauschen könnten, das auf dem [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) ausgelöst wird, und den Abbruch dort protokollieren.

```js
if ("scheduler" in this) {
  // Declare a TaskController with default priority
  const abortTaskController = new TaskController();
  // Post task passing the controller's signal
  scheduler
    .postTask(() => mylog("Task executing"), {
      signal: abortTaskController.signal,
    })
    .then((taskResult) => mylog(`${taskResult}`)) // This won't run!
    .catch((error) => mylog(`Error: ${error}`)); // Log the error

  // Abort the task
  abortTaskController.abort();
}
```

Das Protokoll unten zeigt die abgebrochene Aufgabe.

{{EmbedLiveSample("Aborting tasks",'400px','100px')}}

### Aufgaben verzögern

Aufgaben können verzögert werden, indem ein Ganzzahliger Wert für Millisekunden im `options.delay`-Parameter an `postTask()` angegeben wird. Dies fügt die Aufgabe effektiv in einen priorisierten Queue nach einem Timeout hinzu, wie es durch die Verwendung von [`setTimeout()`](/de/docs/Web/API/SetTimeout) erstellt werden könnte. Die `delay` ist die Mindestzeit, bevor die Aufgabe dem Scheduler hinzugefügt wird; es kann länger dauern.

```html hidden
<textarea id="log" style="min-height: 50px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

Der untenstehende Code zeigt zwei Aufgaben (als Pfeilfunktionen) mit einer Verzögerung hinzugefügt.

```js
if ("scheduler" in this) {
  // Post task as arrow function with delay of 2 seconds
  scheduler
    .postTask(() => "Task delayed by 2000ms", { delay: 2000 })
    .then((taskResult) => mylog(`${taskResult}`));
  scheduler
    .postTask(() => "Next task should complete in about 2000ms", { delay: 1 })
    .then((taskResult) => mylog(`${taskResult}`));
}
```

Aktualisieren Sie die Seite. Beachten Sie, dass die zweite Zeichenfolge nach etwa 2 Sekunden im Protokoll erscheint.

{{EmbedLiveSample("Delaying tasks",'400px','100px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Building a Faster Web Experience with the postTask Scheduler](https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91) im Airbnb-Blog (2021)
- [Optimizing long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
