---
title: Prioritized Task Scheduling API
slug: Web/API/Prioritized_Task_Scheduling_API
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{DefaultAPISidebar("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **Prioritized Task Scheduling API** bietet eine standardisierte Methode zur Priorisierung aller Aufgaben, die zu einer Anwendung gehören, egal ob sie im Code eines Website-Entwicklers oder in Bibliotheken und Frameworks von Drittanbietern definiert sind.

Die [Aufgabenprioritäten](#aufgabenprioritäten) sind sehr grob und basieren darauf, ob Aufgaben die Benutzerinteraktion blockieren oder anderweitig die Benutzererfahrung beeinträchtigen, oder ob sie im Hintergrund ausgeführt werden können. Entwickler und Frameworks können innerhalb der von der API definierten breiten Kategorien feinere Priorisierungsmechanismen implementieren.

Die API ist versprechensbasiert und unterstützt die Möglichkeit, Aufgabenprioritäten festzulegen und zu ändern, Aufgaben hinzuzufügen zum Scheduler zu verzögern, Aufgaben abzubrechen und Änderungen der Priorität sowie Abbruchereignisse zu überwachen.

## Konzepte und Nutzung

Die Prioritized Task Scheduling API ist sowohl im Fenster- als auch im Worker-Thread durch die `scheduler`-Eigenschaft des globalen Objekts verfügbar.

Die Hauptmethoden der API sind [`scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) und [`scheduler.yield()`](/de/docs/Web/API/Scheduler/yield). `scheduler.postTask()` nimmt eine Rückruffunktion (die Aufgabe) an und gibt ein Versprechen zurück, das mit dem Rückgabewert der Funktion aufgelöst oder mit einem Fehler abgelehnt wird. `scheduler.yield()` verwandelt jede [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Funktion in eine Aufgabe, indem es den Haupt-Thread für andere Arbeiten an den Browser abgibt, wobei die Ausführung fortgesetzt wird, wenn das zurückgegebene Versprechen aufgelöst wird.

Die beiden Methoden haben ähnliche Funktionalitäten, jedoch unterschiedliche Kontrollmöglichkeiten. `scheduler.postTask()` ist konfigurierbarer — beispielsweise erlaubt es das explizite Setzen von Aufgabenprioritäten und den Aufgabenabbruch über ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). `scheduler.yield()` hingegen ist einfacher und kann innerhalb jeder `async`-Funktion mit `await` genutzt werden, ohne dass eine Folgeaufgabe in einer anderen Funktion bereitgestellt werden muss.

### `scheduler.yield()`

Um langlaufende JavaScript-Aufgaben so zu unterbrechen, dass sie den Haupt-Thread nicht blockieren, fügen Sie einen `scheduler.yield()`-Aufruf ein, um den Haupt-Thread vorübergehend an den Browser zurückzugeben, der eine Aufgabe erstellt, um die Ausführung dort fortzusetzen, wo sie unterbrochen wurde.

```js
async function slowTask() {
  firstHalfOfWork();
  await scheduler.yield();
  secondHalfOfWork();
}
```

`scheduler.yield()` gibt ein Versprechen zurück, das abgewartet werden kann, um die Ausführung fortzusetzen. Dadurch kann die Arbeit, die zur selben Funktion gehört, ohne Blockierung des Haupt-Threads beim Ausführen der Funktion dort eingebracht werden.

`scheduler.yield()` nimmt keine Argumente an. Die Aufgabe, die ihre Fortsetzung auslöst, hat eine standardmäßige [`user-visible`](#user-visible)-Priorität; jedoch wird, falls `scheduler.yield()` innerhalb eines `scheduler.postTask()`-Rückrufs aufgerufen wird, die Priorität der umgebenden Aufgabe [geerbt](/de/docs/Web/API/Scheduler/yield#inheriting_task_priorities).

### `scheduler.postTask()`

Wenn `scheduler.postTask()` ohne Argumente aufgerufen wird, erstellt es eine Aufgabe mit einer standardmäßigen [`user-visible`](#user-visible)-Priorität, die nicht abgebrochen werden kann oder deren Priorität sich nicht ändern lässt.

```js
const promise = scheduler.postTask(myTask);
```

Da die Methode ein Versprechen zurückgibt, können Sie auf seine Auflösung asynchron mit [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) warten und mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) Fehler abfangen, die von der Aufgabenrückruffunktion ausgelöst werden (oder wenn die Aufgabe abgebrochen wird). Die Rückruffunktion kann jede Art von Funktion sein (unten zeigen wir eine Pfeilfunktion).

```js
scheduler
  .postTask(() => "Task executing")
  // Promise resolved: log task result when promise resolves
  .then((taskResult) => console.log(`${taskResult}`))
  // Promise rejected: log AbortError or errors thrown by task
  .catch((error) => console.error(`Error: ${error}`));
```

Auf dieselbe Aufgabe kann mit `await`/`async` wie unten gezeigt gewartet werden (beachten Sie, dass dies in einem {{Glossary("IIFE", "sofort aufgerufenen Funktionsausdruck (IIFE)")}} ausgeführt wird):

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

Sie können auch ein Optionsobjekt für die `postTask()`-Methode angeben, wenn Sie das Standardverhalten ändern möchten.
Die Optionen sind:

- `priority` Dies ermöglicht es Ihnen, eine bestimmte unveränderliche Priorität anzugeben.
  Einmal festgelegt, kann die Priorität nicht geändert werden.
- `signal` Dies ermöglicht es, ein Signal anzugeben, das entweder ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) sein kann.
  Das Signal ist mit einem Controller verbunden, der zum Abbrechen der Aufgabe verwendet werden kann.
  Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) kann auch verwendet werden, um die Aufgabenpriorität festzulegen und zu ändern, wenn die [Aufgabe veränderlich ist](#veränderlbare_und_unveränderlbare_aufgabenpriorität).
- `delay` Dies ermöglicht es, die Verzögerung anzugeben, bevor die Aufgabe zur Planung hinzugefügt wird, in Millisekunden.

Dasselbe Beispiel wie oben mit einer Prioritätsoption würde so aussehen:

```js
scheduler
  .postTask(() => "Task executing", { priority: "user-blocking" })
  .then((taskResult) => console.log(`${taskResult}`)) // Log the task result
  .catch((error) => console.error(`Error: ${error}`)); // Log any errors
```

### Aufgabenprioritäten

Geplante Aufgaben werden in Prioritätsreihenfolge ausgeführt, gefolgt von der Reihenfolge, in der sie zur Scheduler-Warteschlange hinzugefügt wurden.

Es gibt nur drei Prioritäten, die unten aufgelistet sind (geordnet von hoch zu niedrig):

- `user-blocking`

  - : Aufgaben, die verhindern, dass Benutzer mit der Seite interagieren.
    Dazu gehört das Rendern der Seite bis zu dem Punkt, an dem sie verwendet werden kann, oder das Reagieren auf Benutzereingaben.

- `user-visible`

  - : Aufgaben, die für den Nutzer sichtbar, aber nicht unbedingt blockierend sind.
    Dies könnte das Rendern von nicht wesentlichen Teilen der Seite umfassen, wie nicht wesentliche Bilder oder Animationen.

    Dies ist die Standardpriorität für `scheduler.postTask()` und `scheduler.yield()`.

- `background`
  - : Aufgaben, die nicht zeitkritisch sind.
    Dies könnte Logverarbeitung oder Initialisierung von Drittanbieterbibliotheken umfassen, die nicht für das Rendering benötigt werden.

### Veränderlbare und unveränderlbare Aufgabenpriorität

Es gibt viele Anwendungsfälle, bei denen die Aufgabenpriorität niemals geändert werden muss, während sie in anderen Fällen verändert werden muss.
Zum Beispiel kann das Herunterladen eines Bildes von einer `background`-Aufgabe zu einer `user-visible`-Aufgabe wechseln, wenn ein Karussell in den Ansichtsbereich gescrollt wird.

Aufgabenprioritäten können als statisch (unveränderlich) oder dynamisch (veränderbar) festgelegt werden, abhängig von den an [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) übergebenen Argumenten.

Die Aufgabenpriorität ist unveränderlich, wenn ein Wert im `options.priority`-Argument angegeben ist.
Der angegebene Wert wird für die Aufgabenpriorität verwendet und kann nicht geändert werden.

Die Priorität ist veränderbar, wenn ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) im `options.signal`-Argument übergeben wird **und** `options.priority` **nicht gesetzt** ist.
In diesem Fall übernimmt die Aufgabe ihre anfängliche Priorität von der Priorität des Signals, und die Priorität kann anschließend geändert werden, indem [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) auf dem mit dem Signal verbundenen Controller aufgerufen wird.

Wenn die Priorität nicht mit `options.priority` oder durch Übergeben eines [`TaskSignal`](/de/docs/Web/API/TaskSignal) an `options.signal` gesetzt wird, wird sie standardmäßig auf `user-visible` gesetzt (und ist definitionsgemäß unveränderlich).

Beachten Sie, dass eine Aufgabe, die abgebrochen werden muss, `options.signal` auf entweder [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) setzen muss.
Für eine Aufgabe mit unveränderlicher Priorität zeigt [`AbortSignal`](/de/docs/Web/API/AbortSignal) jedoch deutlicher an, dass die Aufgabenpriorität nicht mit dem Signal geändert werden kann.

Lassen Sie uns ein Beispiel durchgehen, um zu demonstrieren, was wir damit meinen. Wenn Sie mehrere Aufgaben haben, die ungefähr die gleiche Priorität haben, ist es sinnvoll, sie in separate Funktionen zu unterteilen, um die Wartung, das Debuggen und viele andere Aspekte zu unterstützen.

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

Diese Art von Struktur hilft jedoch nicht bei der Blockierung des Haupt-Threads. Da alle fünf Aufgaben innerhalb einer Hauptfunktion ausgeführt werden, führt der Browser sie als eine einzige Aufgabe aus.

Um damit umzugehen, tendieren wir dazu, eine Funktion periodisch laufen zu lassen, um den Code zu _yield to the main thread_. Das bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen deren Ausführungen der Browser die Gelegenheit hat, hochpriorisierte Aufgaben wie das Aktualisieren der Benutzeroberfläche zu bearbeiten. Ein häufiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann innerhalb eines Aufgabenlaufmustermusters so verwendet werden, um nach jeder ausgeführten Aufgabe an den Haupt-Thread zu übergeben:

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

Um dies weiter zu verbessern, können wir [`Scheduler.yield`](/de/docs/Web/API/Scheduler/yield) verwenden, wann immer verfügbar, um es diesem Code zu ermöglichen, vor anderen weniger kritischen Aufgaben in der Warteschlange weiter zu laufen:

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
  - : Beinhaltet die [`postTask()`](/de/docs/Web/API/Scheduler/postTask) und [`yield()`](/de/docs/Web/API/Scheduler/yield) Methoden zum Hinzufügen priorisierter Aufgaben die zu planen sind.
    Eine Instanz dieser Schnittstelle ist auf den globalen Objekten [`Window`](/de/docs/Web/API/Window) oder [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) verfügbar (`globalThis.scheduler`).
- [`TaskController`](/de/docs/Web/API/TaskController)
  - : Unterstützt sowohl das Abbrechen einer Aufgabe als auch das Ändern ihrer Priorität.
- [`TaskSignal`](/de/docs/Web/API/TaskSignal)
  - : Ein Signalobjekt, das es Ihnen ermöglicht, eine Aufgabe abzubrechen und ihre Priorität, falls erforderlich, mit einem [`TaskController`](/de/docs/Web/API/TaskController)-Objekt zu ändern.
- [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent)
  - : Die Schnittstelle für das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis, das gesendet wird, wenn die Priorität einer Aufgabe geändert wird.

> [!NOTE]
> Wenn die [Aufgabenpriorität](#aufgabenprioritäten) nie geändert werden muss, können Sie einen [`AbortController`](/de/docs/Web/API/AbortController) und das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) anstelle von [`TaskController`](/de/docs/Web/API/TaskController) und [`TaskSignal`](/de/docs/Web/API/TaskSignal) verwenden.

### Erweiterungen zu anderen Schnittstellen

- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler)
  - : Diese Eigenschaften sind die Einstiegspunkte für die Verwendung der `Scheduler.postTask()`-Methode in einem Fenster- oder Worker-Bereich.

## Beispiele

Beachten Sie, dass die Beispiele unten `mylog()` verwenden, um in ein Textbereich zu schreiben.
Der Code für den Protokollbereich und die Methode wird im Allgemeinen verborgen, um nicht von relevanterem Code abzulenken.

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

### Funktionsüberprüfung

Prüfen Sie, ob das priorisierte Aufgabenplanung unterstützt wird, indem Sie die `scheduler`-Eigenschaft im globalen Bereich testen.

Der nachstehende Code druckt „Feature: Supported“, wenn die API in diesem Browser unterstützt wird.

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

Aufgaben werden mit [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) gepostet, wobei im ersten Argument eine Rückruffunktion (Aufgabe) angegeben wird, und ein optionales zweites Argument, das verwendet werden kann, um eine Aufgabenpriorität, ein Signal und/oder eine Verzögerung anzugeben.
Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der Rückruffunktion aufgelöst wird oder mit einem Abbruchfehler oder einem Fehler, der in der Funktion ausgelöst wird, abgelehnt wird.

```html hidden
<textarea id="log" style="min-height: 100px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

Da sie ein Versprechen zurückgibt, kann [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) mit anderen Versprechen [verkettet werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises).
Unten zeigen wir, wie man auf das Versprechen wartet, das mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) aufgelöst wird.
Dies verwendet die Standardpriorität (`user-visible`).

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

Die Methode kann auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) in einer [async-Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) verwendet werden.
Der Code unten zeigt, wie Sie diesen Ansatz verwenden könnten, um auf eine `user-blocking`-Aufgabe zu warten.

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

In einigen Fällen müssen Sie möglicherweise überhaupt nicht auf den Abschluss warten.
Aus Einfachheitsgründen protokollieren viele der hier gezeigten Beispiele einfach das Ergebnis, während die Aufgabe ausgeführt wird.

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

Das Protokoll unten zeigt die Ausgabe der drei oben genannten Aufgaben.
Beachten Sie, dass die Reihenfolge, in der sie ausgeführt werden, zuerst von der Priorität, dann von der Deklarationsreihenfolge abhängt.

{{EmbedLiveSample('Basic usage','400px','170px')}}

### Dauerhafte Prioritäten

[Aufgabenprioritäten](#aufgabenprioritäten) können mit dem `priority`-Parameter im optionalen zweiten Argument festgelegt werden.
Prioritäten, die auf diese Weise festgelegt werden, sind [unveränderlich](#veränderlbare_und_unveränderlbare_aufgabenpriorität) (können nicht geändert werden).

Unten posten wir zwei Gruppen von drei Aufgaben, jedes Mitglied in umgekehrter Prioritätsreihenfolge.
Die letzte Aufgabe hat die Standardpriorität.
Beim Ausführen zeigt jede Aufgabe einfach die erwartete Reihenfolge an (wir warten nicht auf das Ergebnis, weil wir das zur Anzeige der Ausführungsreihenfolge nicht benötigen).

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

Die untenstehende Ausgabe zeigt, dass die Aufgaben in Prioritätsreihenfolge und dann in Deklarationsreihenfolge ausgeführt werden.

{{EmbedLiveSample("Permanent priorities",'400px','170px')}}

### Ändern der Aufgabenprioritäten

[Aufgabenprioritäten](#aufgabenprioritäten) können auch ihren Anfangswert von einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) übernehmen, das im optionalen zweiten Argument an `postTask()` übergeben wird.
Wenn sie auf diese Weise gesetzt werden, kann die Priorität der Aufgabe [dann mit dem Controller, der mit dem Signal verbunden ist, geändert werden](#veränderlbare_und_unveränderlbare_aufgabenpriorität).

> [!NOTE]
> Das Setzen und Ändern von Aufgabenprioritäten mit einem Signal funktioniert nur, wenn das `options.priority`-Argument für `postTask()` nicht gesetzt ist, und wenn das `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) (und kein [`AbortSignal`](/de/docs/Web/API/AbortSignal)) ist.

Der Code unten zeigt zunächst, wie man einen [`TaskController`](/de/docs/Web/API/TaskController) erstellt, der die anfängliche Priorität seines Signals zu `user-blocking` im [`TaskController()`](/de/docs/Web/API/TaskController/TaskController)-Konstruktor setzt.

Der Code verwendet dann `addEventListener()`, um einen Ereignis-Listener zum Signal des Controllers hinzuzufügen (wir könnten alternativ die `TaskSignal.onprioritychange`-Eigenschaft verwenden, um einen Ereignishandler hinzuzufügen).
Der Ereignishandler verwendet [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) auf dem Ereignis, um die ursprüngliche Priorität zu erhalten und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) auf dem Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

Die Aufgabe wird dann gepostet, indem das Signal übergeben wird, und wir ändern sofort die Priorität zu `background`, indem wir [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) auf dem Controller aufrufen.

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

Die untenstehende Ausgabe zeigt, dass die Priorität erfolgreich von `user-blocking` zu `background` geändert wurde.
Beachten Sie, dass in diesem Fall die Priorität geändert wird, bevor die Aufgabe ausgeführt wird, sie hätte aber ebenso während der Ausführung der Aufgabe geändert werden können.

{{EmbedLiveSample("Changing task priorities",'400px','130px')}}

### Abbruch von Aufgaben

Aufgaben können mit entweder [`TaskController`](/de/docs/Web/API/TaskController) und [`AbortController`](/de/docs/Web/API/AbortController) in exakt gleicher Weise abgebrochen werden.
Der einzige Unterschied besteht darin, dass Sie [`TaskController`](/de/docs/Web/API/TaskController) verwenden müssen, wenn Sie auch die Aufgabenpriorität festlegen möchten.

```html hidden
<textarea id="log" style="min-height: 50px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

Der Code unten erstellt einen Controller und übergibt sein Signal an die Aufgabe.
Die Aufgabe wird dann sofort abgebrochen.
Dies führt dazu, dass das Versprechen mit einem `AbortError` abgelehnt wird, der im `catch`-Block abgefangen und protokolliert wird.
Beachten Sie, dass wir auch das [`abort`](/de/docs/Web/API/AbortSignal/abort_event)-Ereignis, das auf dem [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) ausgelöst wird, anhören und das Abbrechen dort protokollieren könnten.

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

Das untenstehende Protokoll zeigt die abgebrochene Aufgabe.

{{EmbedLiveSample("Aborting tasks",'400px','100px')}}

### Verzögern von Aufgaben

Aufgaben können verzögert werden, indem eine ganzzahlige Anzahl von Millisekunden im `options.delay`-Parameter für `postTask()` angegeben wird.
Dies fügt die Aufgabe praktisch zur priorisierten Warteschlange auf einem Timeout hinzu, wie es durch die Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) erstellt werden könnte.
Die `delay` ist die minimale Zeitspanne, bevor die Aufgabe zum Scheduler hinzugefügt wird; sie kann länger dauern.

```html hidden
<textarea id="log" style="min-height: 50px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

Der Code unten zeigt zwei Aufgaben, die (als Pfeilfunktionen) mit einer Verzögerung hinzugefügt werden.

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
