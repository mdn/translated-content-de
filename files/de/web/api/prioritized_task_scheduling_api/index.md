---
title: Prioritized Task Scheduling API
slug: Web/API/Prioritized_Task_Scheduling_API
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{DefaultAPISidebar("Priorisierungs-API für Task Scheduling")}}{{AvailableInWorkers}}

Die **Priorisierungs-API für Task Scheduling** bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, egal ob sie im Code des Webentwicklers oder in Bibliotheken und Frameworks von Drittanbietern definiert sind.

Die [Task-Prioritäten](#task-prioritäten) sind sehr grob granuliert und basieren darauf, ob Aufgaben die Benutzerinteraktion blockieren oder anderweitig die Benutzererfahrung beeinflussen oder im Hintergrund ausgeführt werden können. Entwickler und Frameworks können feinere Priorisierungs-Schemata innerhalb der von der API definierten breiten Kategorien umsetzen.

Die API basiert auf Promises und unterstützt die Möglichkeit, Aufgabenprioritäten zu setzen und zu ändern, Aufgaben mit Verzögerung zum Scheduler hinzuzufügen, Aufgaben abzubrechen sowie Prioritätsänderungs- und Abbruchereignisse zu überwachen.

## Konzepte und Verwendung

Die Priorisierungs-API für Task Scheduling ist sowohl im Fenster- als auch im Worker-Thread über die `scheduler`-Eigenschaft des globalen Objekts verfügbar.

Die Hauptmethoden der API sind [`scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) und [`scheduler.yield()`](/de/docs/Web/API/Scheduler/yield). `scheduler.postTask()` nimmt eine Callback-Funktion (die Aufgabe) entgegen und gibt ein Promise zurück, das mit dem Rückgabewert der Funktion aufgelöst wird oder mit einem Fehler zurückgewiesen wird. `scheduler.yield()` verwandelt jede [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) Funktion in eine Aufgabe, indem es der Hauptthread an den Browser für andere Arbeiten übergibt, während die Ausführung fortgesetzt wird, wenn das zurückgegebene Promise aufgelöst wird.

Die beiden Methoden haben ähnliche Funktionalitäten, bieten aber unterschiedliche Kontrollmöglichkeiten. `scheduler.postTask()` ist flexibler – zum Beispiel erlaubt es, die Aufgabenpriorität explizit zu setzen und Aufgaben mittels eines [`AbortSignal`](/de/docs/Web/API/AbortSignal) abzubrechen. `scheduler.yield()` dagegen ist einfacher und kann in jeder `async` Funktion `await` genutzt werden, ohne eine Folgeaufgabe in einer anderen Funktion bereitstellen zu müssen.

### `scheduler.yield()`

Um lang laufende JavaScript-Aufgaben aufzuspalten, damit sie den Hauptthread nicht blockieren, fügen Sie einen `scheduler.yield()`-Aufruf ein, um den Hauptthread vorübergehend an den Browser zurückzugeben, der eine Aufgabe erstellt, um die Ausführung fortzusetzen, wo sie aufgehört hat.

```js
async function slowTask() {
  firstHalfOfWork();
  await scheduler.yield();
  secondHalfOfWork();
}
```

`scheduler.yield()` gibt ein Promise zurück, das abgewartet werden kann, um die Ausführung fortzusetzen. Dadurch kann die Arbeit, die zu derselben Funktion gehört, dort aufgenommen werden, ohne den Hauptthread zu blockieren, wenn die Funktion läuft.

`scheduler.yield()` nimmt keine Argumente. Die Aufgabe, die seine Fortsetzung auslöst, hat standardmäßig die [`user-visible`](#user-visible) Priorität; allerdings, wenn `scheduler.yield()` innerhalb eines `scheduler.postTask()`-Callbacks aufgerufen wird, erbt es die Priorität der umgebenden Aufgabe [erbt die Priorität der umgebenden Aufgabe](/de/docs/Web/API/Scheduler/yield#inheriting_task_priorities).

### `scheduler.postTask()`

Wenn `scheduler.postTask()` ohne Argumente aufgerufen wird, erstellt es eine Aufgabe mit einer standardmäßigen [`user-visible`](#user-visible) Priorität, die nicht abgebrochen oder in ihrer Priorität geändert werden kann.

```js
const promise = scheduler.postTask(myTask);
```

Da die Methode ein Promise zurückgibt, können Sie auf dessen Auflösung asynchron mit [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) warten und Fehler abfangen, die durch die Task-Callback-Funktion (oder wenn die Aufgabe abgebrochen wird) mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) geworfen werden. Die Callback-Funktion kann jede Art von Funktion sein (unten zeigen wir eine Pfeilfunktion).

```js
scheduler
  .postTask(() => "Task executing")
  // Promise resolved: log task result when promise resolves
  .then((taskResult) => console.log(`${taskResult}`))
  // Promise rejected: log AbortError or errors thrown by task
  .catch((error) => console.error(`Error: ${error}`));
```

Auf dieselbe Aufgabe könnte mit `await`/`async` gewartet werden, wie unten gezeigt (beachten Sie, dass dies in einem {{Glossary("IIFE", "Sofort ausgeführte Funktionsausdruck (IIFE)")}} ausgeführt wird):

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

Sie können auch ein Optionsobjekt zur `postTask()` Methode angeben, wenn Sie das Standardverhalten ändern möchten. Die Optionen sind:

- `priority` Dies erlaubt Ihnen, eine bestimmte unveränderliche Priorität festzulegen.
  Einmal festgelegt, kann die Priorität nicht geändert werden.
- `signal` Dies erlaubt Ihnen, ein Signal anzugeben, das entweder ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) sein kann.
  Das Signal ist mit einem Controller verknüpft, der verwendet werden kann, um die Aufgabe abzubrechen. Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) kann auch verwendet werden, um die Aufgabenpriorität festzulegen und zu ändern, wenn die [Aufgabe veränderlich ist](#veränderliche_und_unveränderliche_aufgabenpriorität).
- `delay` Dies ermöglicht es Ihnen, die Verzögerung zu spezifizieren, bevor die Aufgabe zur Planung hinzugefügt wird, in Millisekunden.

Dasselbe Beispiel wie oben mit einer Prioritätsoption würde folgendermaßen aussehen:

```js
scheduler
  .postTask(() => "Task executing", { priority: "user-blocking" })
  .then((taskResult) => console.log(`${taskResult}`)) // Log the task result
  .catch((error) => console.error(`Error: ${error}`)); // Log any errors
```

### Task-Prioritäten

Geplante Aufgaben werden in der Reihenfolge der Priorität ausgeführt, gefolgt von der Reihenfolge, in der sie der Scheduler-Warteschlange hinzugefügt wurden.

Es gibt nur drei Prioritäten, die unten aufgelistet sind (von höchster zu niedrigster geordnet):

- `user-blocking`

  - : Aufgaben, die Benutzer daran hindern, mit der Seite zu interagieren.
    Dazu gehört das Rendern der Seite bis zu dem Punkt, an dem sie verwendet werden kann, oder das Reagieren auf Benutzereingaben.

- `user-visible`

  - : Aufgaben, die für den Benutzer sichtbar sind, aber nicht unbedingt Benutzereingaben blockieren.
    Dazu könnte das Rendern nicht wesentlicher Teile der Seite gehören, wie nicht wesentliche Bilder oder Animationen.

    Dies ist die Standardpriorität für `scheduler.postTask()` und `scheduler.yield()`.

- `background`
  - : Aufgaben, die nicht zeitkritisch sind.
    Dazu könnte die Protokollverarbeitung oder die Initialisierung von Drittanbieter-Bibliotheken gehören, die für das Rendern nicht erforderlich sind.

### Veränderliche und unveränderliche Aufgabenpriorität

Es gibt viele Use-Cases, bei denen die Aufgabenpriorität niemals geändert werden muss, während sie bei anderen geändert werden muss.
Zum Beispiel kann das Abrufen eines Bildes von einer `background`-Aufgabe zu einer `user-visible`-Aufgabe wechseln, wenn ein Karussell in den Anzeigebereich gescrollt wird.

Aufgabenprioritäten können statisch (unveränderlich) oder dynamisch (veränderbar) sein, je nach den übergebenen Argumenten an [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask).

Die Aufgabenpriorität ist unveränderlich, wenn ein Wert im `options.priority`-Argument angegeben ist.
Der angegebene Wert wird für die Aufgabenpriorität verwendet und kann nicht geändert werden.

Die Priorität ist nur dann veränderbar, wenn ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) an das `options.signal`-Argument übergeben wird **und** `options.priority` **nicht gesetzt** ist.
In diesem Fall nimmt die Aufgabe ihre anfängliche Priorität von der `signal`-Priorität an, und die Priorität kann anschließend geändert werden, indem [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) auf dem Controller aufgerufen wird, der mit dem Signal verbunden ist.

Wenn die Priorität nicht mit `options.priority` festgelegt oder ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) an `options.signal` übergeben wird, ist sie standardmäßig `user-visible` (und per Definition unveränderlich).

Beachten Sie, dass eine Aufgabe, die abgebrochen werden muss, `options.signal` auf entweder [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) setzen muss.
Jedoch deutet für eine Aufgabe mit unveränderlicher Priorität [`AbortSignal`](/de/docs/Web/API/AbortSignal) deutlicher darauf hin, dass die Aufgabenpriorität nicht mit dem Signal geändert werden kann.

Lassen Sie uns ein Beispiel durchgehen, um zu verdeutlichen, was wir damit meinen. Wenn Sie mehrere Aufgaben mit ungefähr derselben Priorität haben, macht es Sinn, sie in separate Funktionen aufzuteilen, um die Wartung, das Debuggen und viele andere Gründe zu erleichtern.

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

Diese Art von Struktur hilft jedoch nicht beim Blockieren des Hauptthreads. Da alle fünf der Aufgaben innerhalb einer Hauptfunktion ausgeführt werden, führt der Browser sie alle als eine einzige Aufgabe aus.

Um dies zu behandeln, neigen wir dazu, eine Funktion periodisch auszuführen, um den Code _dem Hauptthread zu überlassen_. Das bedeutet, dass unser Code in mehrere Aufgaben aufgespalten wird, zwischen deren Ausführung der Browser die Möglichkeit hat, Hochprioritätsaufgaben wie die Aktualisierung der Benutzeroberfläche zu behandeln. Ein verbreitetes Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann in einem Task-Runner-Muster wie folgt verwendet werden, um dem Hauptthread nach jeder ausgeführten Aufgabe zu überlassen:

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

Um dies weiter zu verbessern, können wir [`Scheduler.yield`](/de/docs/Web/API/Scheduler/yield) verwenden, wenn verfügbar, um es diesem Code zu ermöglichen, vor anderen weniger kritischen Aufgaben in der Warteschlange weiter auszuführen:

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
  - : Unterstützt sowohl das Abbrechen einer Aufgabe als auch das Ändern ihrer Priorität.
- [`TaskSignal`](/de/docs/Web/API/TaskSignal)
  - : Ein Signalobjekt, das es ermöglicht, eine Aufgabe abzubrechen und ihre Priorität zu ändern, falls erforderlich, unter Verwendung eines [`TaskController`](/de/docs/Web/API/TaskController)-Objekts.
- [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent)
  - : Die Schnittstelle für das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis, das gesendet wird, wenn die Priorität für eine Aufgabe geändert wird.

> [!NOTE]
> Wenn die [Aufgabenpriorität](#task-prioritäten) niemals geändert werden muss, können Sie einen [`AbortController`](/de/docs/Web/API/AbortController) und das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) anstelle von [`TaskController`](/de/docs/Web/API/TaskController) und [`TaskSignal`](/de/docs/Web/API/TaskSignal) verwenden.

### Erweiterungen zu anderen Schnittstellen

- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler)
  - : Diese Eigenschaften sind die Einstiegspunkte zur Verwendung der `Scheduler.postTask()`-Methode in einem Fenster- oder Workerkontext.

## Beispiele

Beachten Sie, dass die unten stehenden Beispiele `myLog()` verwenden, um in einen Textbereich zu schreiben.
Der Code für den Protokollbereich und die Methode wird im Allgemeinen ausgeblendet, um nicht von relevanterem Code abzulenken.

```html hidden
<textarea id="log" style="min-height: 20px; width: 95%"></textarea>
```

```js
// hidden logger code - simplifies example
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

### Funktionsprüfung

Überprüfen Sie, ob das priorisierte Task Scheduling unterstützt wird, indem Sie nach der `scheduler`-Eigenschaft im globalen Bereich testen.

Der folgende Code gibt "Feature: Supported" aus, wenn die API auf diesem Browser unterstützt wird.

```html hidden
<textarea id="log" style="min-height: 20px; width: 95%"></textarea>
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

{{EmbedLiveSample('Funktionsprüfung', '400px', '70px')}}

### Grundlegende Nutzung

Aufgaben werden mit [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) veröffentlicht, indem im ersten Argument eine Callback-Funktion (Aufgabe) und ein optionales zweites Argument angegeben werden, das verwendet werden kann, um eine Aufgabenpriorität, ein Signal und/oder eine Verzögerung zu spezifizieren.
Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der Callback-Funktion aufgelöst wird oder mit einem Abbruchfehler oder einem in der Funktion geworfenen Fehler zurückgewiesen wird.

```html hidden
<textarea id="log" style="min-height: 100px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

Da es ein Promise zurückgibt, kann [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) [mit anderen Promises verkettet](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises) werden.
Unten zeigen wir, wie Sie darauf warten können, dass das Promise mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) aufgelöst wird.
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

Die Methode kann auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) innerhalb einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) verwendet werden.
Der folgende Code zeigt, wie Sie diesen Ansatz nutzen könnten, um auf eine `user-blocking` Aufgabe zu warten.

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

In einigen Fällen müssen Sie möglicherweise überhaupt nicht auf den Abschluss warten.
Viele der hier gezeigten Beispiele schreiben der Einfachheit halber einfach das Ergebnis, während die Aufgabe ausgeführt wird.

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

Das folgende Protokoll zeigt die Ausgabe der drei oben genannten Aufgaben.
Beachten Sie, dass die Reihenfolge, in der sie ausgeführt werden, zuerst von der Priorität und dann von der Deklarationsreihenfolge abhängt.

{{EmbedLiveSample('Grundlegende Nutzung', '400px', '170px')}}

### Permanente Prioritäten

[Aufgabenprioritäten](#task-prioritäten) können mithilfe des `priority` Parameters im optionalen zweiten Argument festgelegt werden.
Auf diese Weise gesetzte Prioritäten sind [unveränderlich](#veränderliche_und_unveränderliche_aufgabenpriorität) (können nicht geändert werden).

Unten veröffentlichen wir zwei Gruppen von drei Aufgaben, wobei jedes Mitglied in umgekehrter Prioritätsordnung steht.
Die letzte Aufgabe hat die Standardpriorität.
Beim Ausführen loggt jede Aufgabe einfach die erwartete Reihenfolge (wir warten nicht auf das Ergebnis, weil wir dies nicht brauchen, um die Ausführungsreihenfolge zu zeigen).

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
<textarea id="log" style="min-height: 120px; width: 95%"></textarea>
```

Die folgende Ausgabe zeigt, dass die Aufgaben in der Reihenfolge der Priorität und dann der Deklarationsreihenfolge ausgeführt werden.

{{EmbedLiveSample("Permanente Prioritäten", '400px', '170px')}}

### Ändern der Aufgabenprioritäten

[Aufgabenprioritäten](#task-prioritäten) können auch ihren Anfangswert von einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) bekommen, das im optionalen zweiten Argument an `postTask()` übergeben wird.
Wenn sie auf diese Weise gesetzt werden, kann die Priorität der Aufgabe [dann geändert werden](#veränderliche_und_unveränderliche_aufgabenpriorität) durch den mit dem Signal verbundenen Controller.

> [!NOTE]
> Das Setzen und Ändern von Aufgabenprioritäten über ein Signal funktioniert nur, wenn das `options.priority` Argument für `postTask()` nicht gesetzt ist und wenn `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) (und kein [`AbortSignal`](/de/docs/Web/API/AbortSignal)) ist.

Der untenstehende Code zeigt zunächst, wie man einen [`TaskController`](/de/docs/Web/API/TaskController) erstellt und die anfängliche Priorität seines Signals auf `user-blocking` im [`TaskController()`](/de/docs/Web/API/TaskController/TaskController) Konstruktor setzt.

Der Code verwendet dann `addEventListener()`, um einen Ereignislistener für das Signal des Controllers hinzuzufügen (alternativ könnten wir die `TaskSignal.onprioritychange`-Eigenschaft verwenden, um einen Event-Handler hinzuzufügen).
Der Ereignishandler verwendet [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) auf dem Ereignis, um die ursprüngliche Priorität zu erhalten, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) auf dem Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

Die Aufgabe wird dann gepostet, wobei das Signal übergeben wird, und dann ändern wir sofort die Priorität auf `background`, indem wir [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) auf dem Controller aufrufen.

```html hidden
<textarea id="log" style="min-height: 70px; width: 95%"></textarea>
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
Beachten Sie, dass in diesem Fall die Priorität geändert wird, bevor die Aufgabe ausgeführt wird, aber sie könnte ebenso während der Ausführung der Aufgabe geändert worden sein.

{{EmbedLiveSample("Ändern der Aufgabenprioritäten", '400px', '130px')}}

### Abbrechen von Aufgaben

Aufgaben können entweder mit [`TaskController`](/de/docs/Web/API/TaskController) und [`AbortController`](/de/docs/Web/API/AbortController) auf exakt die gleiche Weise abgebrochen werden.
Der einzige Unterschied ist, dass Sie [`TaskController`](/de/docs/Web/API/TaskController) verwenden müssen, wenn Sie auch die Aufgabenpriorität festlegen möchten.

```html hidden
<textarea id="log" style="min-height: 50px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

Der folgende Code erstellt einen Controller und übergibt sein Signal an die Aufgabe.
Die Aufgabe wird dann sofort abgebrochen.
Dies führt dazu, dass das Promise mit einem `AbortError` zurückgewiesen wird, der im `catch`-Block aufgefangen und protokolliert wird.
Beachten Sie, dass wir auch auf das [`abort`](/de/docs/Web/API/AbortSignal/abort_event) Ereignis hören könnten, das auf dem [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder dem [`AbortSignal`](/de/docs/Web/API/AbortSignal) ausgelöst wird und das Abbrechen dort protokollieren.

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

{{EmbedLiveSample("Abbrechen von Aufgaben", '400px', '100px')}}

### Verzögern von Aufgaben

Aufgaben können durch Angabe einer ganzzahligen Anzahl von Millisekunden im `options.delay`-Parameter an `postTask()` verzögert werden.
Dies fügt die Aufgaben effektiv auf einen Timer in die priorisierte Warteschlange ein, wie es durch [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) erstellt werden könnte.
Die `delay` ist die Mindestzeit, bevor die Aufgabe dem Scheduler hinzugefügt wird; es könnte auch länger dauern.

```html hidden
<textarea id="log" style="min-height: 50px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

Der unten stehende Code zeigt zwei Aufgaben, die (als Pfeilfunktionen) mit einer Verzögerung hinzugefügt wurden.

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
Beachten Sie, dass der zweite String nach etwa 2 Sekunden im Protokoll erscheint.

{{EmbedLiveSample("Verzögern von Aufgaben", '400px', '100px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Building a Faster Web Experience with the postTask Scheduler](https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91) im Airbnb-Blog (2021)
- [Optimizing long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
