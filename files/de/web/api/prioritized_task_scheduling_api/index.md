---
title: Prioritized Task Scheduling API
slug: Web/API/Prioritized_Task_Scheduling_API
l10n:
  sourceCommit: 2503df3c1d544137d75ed8d5d986bd120de06783
---

{{DefaultAPISidebar("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **Prioritized Task Scheduling API** bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, egal ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind.

Die [Aufgabenprioritäten](#aufgabenprioritäten) sind sehr grob gefasst und basieren darauf, ob Aufgaben die Benutzerinteraktion blockieren oder anderweitig die Benutzererfahrung beeinträchtigen oder im Hintergrund ausgeführt werden können. Entwickler und Frameworks können innerhalb der von der API definierten breiten Kategorien feinere Priorisierungsverfahren implementieren.

Die API ist versprechensbasiert und unterstützt die Fähigkeit, Aufgabenprioritäten festzulegen und zu ändern, Aufgaben der Planerwarteschlange hinzuzufügen, Aufgaben abzubrechen und auf Ereignisse wie Prioritätsänderungen und Abbrüche zu überwachen.

## Konzepte und Verwendung

Die Prioritized Task Scheduling API ist sowohl in Fenster- als auch in Worker-Threads über die `scheduler`-Eigenschaft des globalen Objekts verfügbar.

Die Hauptmethoden der API sind [`scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) und [`scheduler.yield()`](/de/docs/Web/API/Scheduler/yield). `scheduler.postTask()` nimmt eine Rückruffunktion (die Aufgabe) und gibt ein Promise zurück, das mit dem Rückgabewert der Funktion erfüllt oder mit einem Fehler abgelehnt wird. `scheduler.yield()` verwandelt jede [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) Funktion in eine Aufgabe, indem es den Hauptthread vorübergehend dem Browser für andere Arbeiten überlässt, wobei die Ausführung fortgesetzt wird, wenn das zurückgegebene Promise erfüllt wird.

Die beiden Methoden bieten ähnliche Funktionalitäten, aber unterschiedliche Kontrollstufen. `scheduler.postTask()` ist konfigurierbarer – zum Beispiel erlaubt es die explizite Festlegung von Aufgabenprioritäten und das Abbrechen von Aufgaben über ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). `scheduler.yield()` ist hingegen einfacher und kann in jeder `async` Funktion `await`ed werden, ohne dass eine nachfolgende Aufgabe in einer anderen Funktion bereitgestellt werden muss.

### `scheduler.yield()`

Um langlaufende JavaScript-Aufgaben aufzubrechen, sodass sie den Hauptthread nicht blockieren, fügen Sie einen `scheduler.yield()`-Aufruf ein, um den Hauptthread vorübergehend an den Browser zurückzugeben, wodurch eine Aufgabe zur Fortsetzung der Ausführung an der Stelle erstellt wird, an der sie unterbrochen wurde.

```js
async function slowTask() {
  firstHalfOfWork();
  await scheduler.yield();
  secondHalfOfWork();
}
```

`scheduler.yield()` gibt ein Promise zurück, das `await`ed werden kann, um die Ausführung fortzusetzen. Dies ermöglicht es, Arbeit, die zur gleichen Funktion gehört, dort einzuschließen, ohne den Hauptthread zu blockieren, wenn die Funktion ausgeführt wird.

`scheduler.yield()` erfordert keine Argumente. Die Aufgabe, die ihre Fortsetzung auslöst, hat standardmäßig eine [`user-visible`](#user-visible) Priorität; wenn `scheduler.yield()` jedoch innerhalb eines `scheduler.postTask()`-Callbacks aufgerufen wird, wird es [die Priorität der umgebenden Aufgabe erben](/de/docs/Web/API/Scheduler/yield#inheriting_task_priorities).

### `scheduler.postTask()`

Wenn `scheduler.postTask()` ohne Argumente aufgerufen wird, wird eine Aufgabe mit einer standardmäßigen [`user-visible`](#user-visible) Priorität erstellt, die weder abgebrochen noch deren Priorität geändert werden kann.

```js
const promise = scheduler.postTask(myTask);
```

Da die Methode ein Promise zurückgibt, können Sie auf dessen Auflösung asynchron mithilfe von [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) warten und Fehler abfangen, die von der Aufgabenrückruffunktion (oder wenn die Aufgabe abgebrochen wird) ausgelöst werden, indem Sie [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) verwenden. Die Rückruffunktion kann jede Art von Funktion sein (weiter unten demonstrieren wir eine Pfeilfunktion).

```js
scheduler
  .postTask(() => "Task executing")
  // Promise resolved: log task result when promise resolves
  .then((taskResult) => console.log(`${taskResult}`))
  // Promise rejected: log AbortError or errors thrown by task
  .catch((error) => console.error(`Error: ${error}`));
```

Die gleiche Aufgabe könnte mit `await`/`async` wie unten gezeigt erwartet werden (beachten Sie, dass dies in einem [Immediately Invoked Function Expression (IIFE)](/de/docs/Glossary/IIFE) ausgeführt wird):

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

Sie können dem `postTask()`-Methode auch ein Optionsobjekt angeben, wenn Sie das Standardverhalten ändern möchten.
Die Optionen sind:

- `priority` Dies erlaubt Ihnen, eine bestimmte unveränderliche Priorität festzulegen.
  Sobald gesetzt, kann die Priorität nicht mehr geändert werden.
- `signal` Dies erlaubt Ihnen, ein Signal anzugeben, das entweder ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) sein kann
  Das Signal ist mit einem Controller verbunden, der verwendet werden kann, um die Aufgabe abzubrechen.
  Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) kann auch verwendet werden, um die Priorität der Aufgabe festzulegen und zu ändern, wenn die [Aufgabe änderbar ist](#änderbare_und_unveränderbare_aufgabenpriorität).
- `delay` Dies erlaubt Ihnen, die Verzögerung vor der Hinzufügung der Aufgabe zur Planung in Millisekunden anzugeben.

Das gleiche Beispiel wie oben mit einer Prioritätsoption würde so aussehen:

```js
scheduler
  .postTask(() => "Task executing", { priority: "user-blocking" })
  .then((taskResult) => console.log(`${taskResult}`)) // Log the task result
  .catch((error) => console.error(`Error: ${error}`)); // Log any errors
```

### Aufgabenprioritäten

Geplante Aufgaben werden in der Prioritätsreihenfolge ausgeführt, gefolgt von der Reihenfolge, in der sie der Planerwarteschlange hinzugefügt wurden.

Es gibt nur drei Prioritäten, die unten aufgelistet sind (geordnet von der höchsten zur niedrigsten):

- `user-blocking`

  - : Aufgaben, die verhindern, dass Benutzer mit der Seite interagieren.
    Dies umfasst das Rendern der Seite bis zu dem Punkt, an dem sie verwendet werden kann, oder das Reagieren auf Benutzereingaben.

- `user-visible`

  - : Aufgaben, die für den Benutzer sichtbar sind, aber nicht unbedingt Benutzeraktionen blockieren.
    Dies könnte das Rendern nicht wesentlicher Teile der Seite umfassen, wie nicht essentielle Bilder oder Animationen.

    Dies ist die Standardpriorität für `scheduler.postTask()` und `scheduler.yield()`.

- `background`
  - : Aufgaben, die nicht zeitkritisch sind.
    Dazu könnte die Protokollverarbeitung oder das Initialisieren von Drittanbieter-Bibliotheken, die nicht zum Rendern erforderlich sind, gehören.

### Änderbare und unveränderbare Aufgabenpriorität

Es gibt viele Anwendungsfälle, bei denen die Priorität von Aufgaben niemals geändert werden muss, während sie in anderen Fällen durchaus geändert werden sollte.
Zum Beispiel könnte das Abrufen eines Bildes von einer `background`-Aufgabe zu einer `user-visible`-Aufgabe wechseln, wenn ein Karussell in den Sichtbereich gescrollt wird.

Aufgabenprioritäten können je nach den an [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) übergebenen Argumenten als statisch (unveränderbar) oder dynamisch (änderbar) festgelegt werden.

Die Aufgabenpriorität ist unveränderlich, wenn ein Wert im Argument `options.priority` spezifiziert ist.
Der angegebene Wert wird für die Aufgabenpriorität verwendet und kann nicht geändert werden.

Die Priorität ist nur dann änderbar, wenn ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) an das Argument `options.signal` übergeben wird **und** `options.priority` **nicht gesetzt** ist.
In diesem Fall wird die Aufgabe ihre anfängliche Priorität von der `signal`-Priorität übernehmen, und die Priorität kann anschließend durch Aufrufen von [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) am Controller, der mit dem Signal verbunden ist, geändert werden.

Wenn die Priorität nicht mit `options.priority` oder durch das Übergeben eines [`TaskSignal`](/de/docs/Web/API/TaskSignal) an `options.signal` festgelegt wird, wird sie standardmäßig auf `user-visible` festgelegt (und ist per Definition unveränderlich).

Beachten Sie, dass eine Aufgabe, die abgebrochen werden muss, `options.signal` auf entweder [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) setzen muss.
Jedoch zeigt ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) bei einer Aufgabe mit unveränderbarer Priorität deutlicher an, dass die Aufgabenpriorität nicht mithilfe des Signals geändert werden kann.

Lassen Sie uns ein Beispiel durchgehen, um zu veranschaulichen, was wir damit meinen. Wenn Sie mehrere Aufgaben haben, die ungefähr die gleiche Priorität haben, ist es sinnvoll, sie in separate Funktionen aufzuteilen, um Wartung, Debugging und viele andere Gründe zu erleichtern.

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

Struktur in dieser Form hilft jedoch nicht beim Blockieren des Hauptthreads. Da alle fünf Aufgaben in einer Hauptfunktion ausgeführt werden, führt der Browser sie alle als eine einzelne Aufgabe aus.

Um dies zu handhaben, neigen wir dazu, eine Funktion regelmäßig auszuführen, um den Code den _Hauptthread wieder freigeben_ zu lassen. Dies bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen deren Ausführung der Browser die Möglichkeit erhält, hochpriorisierte Aufgaben wie die Aktualisierung der Benutzeroberfläche zu verarbeiten. Ein häufiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/SetTimeout), um Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann innerhalb eines Aufgabenlaufmusters wie folgt verwendet werden, um den Hauptthread nach jeder ausgeführten Aufgabe freizugeben:

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

Um dies weiter zu verbessern, können wir [`Scheduler.yield`](/de/docs/Web/API/Scheduler/yield) verwenden, wenn verfügbar, um diesen Code weiter vor anderen weniger kritischen Aufgaben in der Warteschlange ausführen zu lassen:

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
  - : Ein Signalobjekt, das es Ihnen ermöglicht, eine Aufgabe abzubrechen und ihre Priorität bei Bedarf zu ändern, indem ein [`TaskController`](/de/docs/Web/API/TaskController)-Objekt verwendet wird.
- [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent)
  - : Die Schnittstelle für das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis, das gesendet wird, wenn die Priorität einer Aufgabe geändert wird.

> [!NOTE]
> Wenn die [Aufgabenpriorität](#aufgabenprioritäten) nie geändert werden muss, können Sie einen [`AbortController`](/de/docs/Web/API/AbortController) und dessen zugehöriges [`AbortSignal`](/de/docs/Web/API/AbortSignal) anstelle von [`TaskController`](/de/docs/Web/API/TaskController) und [`TaskSignal`](/de/docs/Web/API/TaskSignal) verwenden.

### Erweiterungen zu anderen Schnittstellen

- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler)
  - : Diese Eigenschaften sind die Einstiegspunkte zur Verwendung der `Scheduler.postTask()`-Methode in einem Fenster- oder Worker-Bereich.

## Beispiele

Beachten Sie, dass die untenstehenden Beispiele `mylog()` verwenden, um in ein Textfeld zu schreiben.
Der Code für den Protokollbereich und die Methode wird allgemein ausgeblendet, um nicht von relevanterem Code abzulenken.

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

### Feature-Überprüfung

Überprüfen Sie, ob die priorisierte Aufgabenplanung unterstützt wird, indem Sie nach der `scheduler`-Eigenschaft im globalen Bereich suchen.

Der Code unten gibt "Feature: Supported" aus, wenn die API in diesem Browser unterstützt wird.

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

Aufgaben werden mit [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) gepostet, wobei eine Rückruffunktion (Aufgabe) im ersten Argument und ein optionales zweites Argument, das zur Spezifizierung einer Aufgabenpriorität, eines Signals und/oder einer Verzögerung verwendet werden kann, angegeben wird.
Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der Rückruffunktion erfüllt wird oder mit einem Abbruchfehler oder einem in der Funktion ausgelösten Fehler abgelehnt wird.

```html hidden
<textarea id="log" style="min-height: 100px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

Da sie ein Promise zurückgibt, kann [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) [mit anderen Promises verkettet werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises).
Nachfolgend zeigen wir, wie Sie auf das Promise warten können, um mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) aufgelöst zu werden.
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

Die Methode kann auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) innerhalb einer [async-Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) verwendet werden.
Der untenstehende Code zeigt, wie Sie diesen Ansatz verwenden könnten, um auf eine `user-blocking`-Aufgabe zu warten.

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
Der Einfachheit halber protokollieren viele der hier gezeigten Beispiele einfach das Ergebnis, während die Aufgabe ausgeführt wird.

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

Das folgende Protokoll zeigt die Ausgabe der drei oben gezeigten Aufgaben.
Beachten Sie, dass die Reihenfolge, in der sie ausgeführt werden, zunächst von der Priorität und dann von der Deklarationsreihenfolge abhängt.

{{EmbedLiveSample('Basic usage','400px','170px')}}

### Permanente Prioritäten

[Aufgabenprioritäten](#aufgabenprioritäten) können mithilfe des `priority`-Parameters im optionalen zweiten Argument festgelegt werden.
Prioritäten, die auf diese Weise festgelegt werden, sind [unveränderlich](#änderbare_und_unveränderbare_aufgabenpriorität) (können nicht geändert werden).

Unten posten wir zwei Gruppen von je drei Aufgaben, wobei jede Gruppe in umgekehrter Prioritätsreihenfolge sortiert ist.
Die letzte Aufgabe hat die Standardpriorität.
Beim Ausführen protokolliert jede Aufgabe einfach ihre erwartete Reihenfolge (wir warten nicht auf das Ergebnis, da dies nicht nötig ist, um die Ausführungsreihenfolge zu zeigen).

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

### Ändern von Aufgabenprioritäten

[Aufgabenprioritäten](#aufgabenprioritäten) können auch ihren Anfangswert von einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) übernehmen, das im optionalen zweiten Argument an `postTask()` übergeben wird.
Wenn auf diese Weise gesetzt, kann die Priorität der Aufgabe [dann geändert werden](#änderbare_und_unveränderbare_aufgabenpriorität) mittels des Controllers, der mit dem Signal verbunden ist.

> [!NOTE]
> Das Festlegen und Ändern von Aufgabenprioritäten mithilfe eines Signals funktioniert nur, wenn das Argument `options.priority` zu `postTask()` nicht gesetzt ist und wenn `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) (und nicht ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)) ist.

Der obenstehende Code zeigt zuerst, wie man einen [`TaskController`](/de/docs/Web/API/TaskController) erstellt, um die anfängliche Priorität seines Signals auf `user-blocking` im Konstruktor von [`TaskController()`](/de/docs/Web/API/TaskController/TaskController) festzulegen.

Der Code verwendet dann `addEventListener()`, um einen Ereignis-Listener zum Signal des Controllers hinzuzufügen (wir könnten alternativ die `TaskSignal.onprioritychange`-Eigenschaft verwenden, um einen Ereignishandler hinzuzufügen).
Der Ereignishandler verwendet [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) am Ereignis, um die ursprüngliche Priorität zu erhalten, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) am Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

Die Aufgabe wird dann gepostet, wobei das Signal übergeben wird, und dann ändern wir sofort die Priorität zu `background`, indem wir [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) am Controller aufrufen.

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
Beachten Sie, dass die Priorität in diesem Fall geändert wird, bevor die Aufgabe ausgeführt wird, aber sie könnte ebenso während der Ausführung der Aufgabe geändert worden sein.

{{EmbedLiveSample("Changing task priorities",'400px','130px')}}

### Abbrechen von Aufgaben

Aufgaben können entweder mit [`TaskController`](/de/docs/Web/API/TaskController) und [`AbortController`](/de/docs/Web/API/AbortController) auf genau dieselbe Weise abgebrochen werden.
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

Der untenstehende Code erstellt einen Controller und übergibt sein Signal an die Aufgabe.
Die Aufgabe wird dann sofort abgebrochen.
Dies führt dazu, dass das Promise mit einem `AbortError` abgelehnt wird, der im `catch`-Block abgefangen und protokolliert wird.
Beachten Sie, dass wir auch auf das [`abort`](/de/docs/Web/API/AbortSignal/abort_event)-Ereignis, das auf dem [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) ausgelöst wird, hören und das Abbrechen dort protokollieren könnten.

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

Aufgaben können verzögert werden, indem eine ganze Zahl von Millisekunden im `options.delay`-Parameter zu `postTask()` angegeben wird.
Dies fügt die Aufgabe effektiv der priorisierten Warteschlange in einem Timeout hinzu, wie es mit [`setTimeout()`](/de/docs/Web/API/SetTimeout) erstellt werden könnte.
Das `delay` ist die minimale Zeitspanne, bevor die Aufgabe dem Planer hinzugefügt wird; es kann länger dauern.

```html hidden
<textarea id="log" style="min-height: 50px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function mylog(text) {
  log.textContent += `${text}\n`;
}
```

Der untenstehende Code zeigt zwei Aufgaben, die (als Pfeilfunktionen) mit einer Verzögerung hinzugefügt werden.

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
Beachten Sie, dass der zweite String nach etwa 2 Sekunden im Protokoll erscheint.

{{EmbedLiveSample("Delaying tasks",'400px','100px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Building a Faster Web Experience with the postTask Scheduler](https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91) im Airbnb-Blog (2021)
- [Optimizing long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
