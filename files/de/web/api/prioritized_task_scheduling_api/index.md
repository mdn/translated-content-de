---
title: Prioritized Task Scheduling API
slug: Web/API/Prioritized_Task_Scheduling_API
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{DefaultAPISidebar("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **Prioritized Task Scheduling API** bietet eine standardisierte Möglichkeit, alle zu einer Anwendung gehörenden Aufgaben zu priorisieren, egal ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind.

Die [Aufgabenprioritäten](#aufgabenprioritäten) sind sehr grobgranular und basieren darauf, ob Aufgaben die Benutzerinteraktion blockieren oder anderweitig die Benutzererfahrung beeinflussen oder im Hintergrund ausgeführt werden können. Entwickler und Frameworks können innerhalb der von der API definierten breiten Kategorien feingranularere Priorisierungsmechanismen implementieren.

Die API basiert auf Promises und unterstützt die Möglichkeit, Aufgabenprioritäten zu setzen und zu ändern, das Hinzufügen von Aufgaben zum Scheduler zu verzögern, Aufgaben abzubrechen und auf Prioritätsänderungen und Abbruchereignisse zu reagieren.

## Konzepte und Verwendung

Die Prioritized Task Scheduling API ist sowohl in Fenster- als auch in Worker-Threads über die `scheduler`-Eigenschaft im globalen Objekt verfügbar.

Die Hauptmethoden der API sind [`scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) und [`scheduler.yield()`](/de/docs/Web/API/Scheduler/yield). `scheduler.postTask()` nimmt eine Callback-Funktion (die Aufgabe) an und gibt ein Promise zurück, das mit dem Rückgabewert der Funktion erfüllt wird oder bei einem Fehler abgelehnt wird. `scheduler.yield()` verwandelt jede [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) Funktion in eine Aufgabe, indem sie dem Browser den Haupt-Thread für andere Arbeiten übergibt und die Ausführung fortfährt, wenn das zurückgegebene Promise erfüllt wird.

Die beiden Methoden haben ähnliche Funktionen, bieten jedoch unterschiedliche Kontrollstufen. `scheduler.postTask()` ist konfigurierbarer – es ermöglicht zum Beispiel, die Aufgabenpriorität explizit festzulegen und die Aufgabe über ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) abzubrechen. `scheduler.yield()` hingegen ist einfacher und kann in jeder `async` Funktion abgewartet werden, ohne dass eine Folgeaufgabe in einer anderen Funktion bereitgestellt werden muss.

### `scheduler.yield()`

Um lange laufende JavaScript-Aufgaben aufzuteilen, sodass sie den Haupt-Thread nicht blockieren, fügen Sie einen `scheduler.yield()`-Aufruf ein, um den Haupt-Thread vorübergehend an den Browser zurückzugeben, was eine Aufgabe erstellt, um die Ausführung dort fortzusetzen, wo sie aufgehört hat.

```js
async function slowTask() {
  firstHalfOfWork();
  await scheduler.yield();
  secondHalfOfWork();
}
```

`scheduler.yield()` gibt ein Promise zurück, das abgewartet werden kann, um die Ausführung fortzusetzen. Dies ermöglicht es, Arbeiten, die zur gleichen Funktion gehören, dort einzuschließen, ohne den Haupt-Thread zu blockieren, wenn die Funktion ausgeführt wird.

`scheduler.yield()` nimmt keine Argumente an. Die Aufgabe, die ihre Fortsetzung auslöst, hat eine standardmäßige [`user-visible`](#user-visible) Priorität; jedoch, wenn `scheduler.yield()` innerhalb eines `scheduler.postTask()`-Callbacks aufgerufen wird, wird sie [die Priorität der umgebenden Aufgabe erben](/de/docs/Web/API/Scheduler/yield#inheriting_task_priorities).

### `scheduler.postTask()`

Wenn `scheduler.postTask()` ohne Argumente aufgerufen wird, erstellt es eine Aufgabe mit einer standardmäßigen [`user-visible`](#user-visible) Priorität, die nicht abgebrochen oder deren Priorität nicht geändert werden kann.

```js
const promise = scheduler.postTask(myTask);
```

Da die Methode ein Promise zurückgibt, können Sie asynchron auf dessen Erfüllung warten, indem Sie [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) verwenden, und Fehler abfangen, die durch die Aufgaben-Callback-Funktion (oder wenn die Aufgabe abgebrochen wird) mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) ausgelöst werden. Die Callback-Funktion kann jede Art von Funktion sein (unten zeigen wir eine Pfeilfunktion).

```js
scheduler
  .postTask(() => "Task executing")
  // Promise resolved: log task result when promise resolves
  .then((taskResult) => console.log(`${taskResult}`))
  // Promise rejected: log AbortError or errors thrown by task
  .catch((error) => console.error(`Error: ${error}`));
```

Auf die gleiche Aufgabe könnte mit `await`/`async` wie unten gezeigt gewartet werden (beachten Sie, dass dies in einem {{Glossary("IIFE", "Sofortinvozierten Funktionsausdruck (IIFE)")}}) erfolgt:

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

Sie können auch ein Optionenobjekt mit der Methode `postTask()` angeben, wenn Sie das Standardverhalten ändern möchten. Die Optionen sind:

- `priority` Damit können Sie eine bestimmte unveränderbare Priorität angeben. Sobald sie gesetzt ist, kann die Priorität nicht mehr geändert werden.
- `signal` Damit können Sie ein Signal angeben, das entweder ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) sein kann. Das Signal ist mit einem Controller verbunden, der verwendet werden kann, um die Aufgabe abzubrechen. Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) kann auch verwendet werden, um die Aufgabenpriorität zu setzen und zu ändern, wenn die [Aufgabe veränderbar ist](#veränderbare_und_unveränderbare_aufgabenpriorität).
- `delay` Damit können Sie die Verzögerung vor dem Hinzufügen der Aufgabe zur Planung in Millisekunden angeben.

Das gleiche Beispiel wie oben mit einer Prioritätsoption würde folgendermaßen aussehen:

```js
scheduler
  .postTask(() => "Task executing", { priority: "user-blocking" })
  .then((taskResult) => console.log(`${taskResult}`)) // Log the task result
  .catch((error) => console.error(`Error: ${error}`)); // Log any errors
```

### Aufgabenprioritäten

Geplante Aufgaben werden in Prioritätenreihenfolge ausgeführt, gefolgt von der Reihenfolge, in der sie zur Scheduler-Warteschlange hinzugefügt wurden.

Es gibt nur drei Prioritäten, die unten (in der Reihenfolge von höchster zu niedrigster) aufgeführt sind:

- `user-blocking`

  - : Aufgaben, die verhindern, dass Benutzer mit der Seite interagieren. Dazu gehört das Rendern der Seite bis zu dem Punkt, an dem sie verwendet werden kann, oder das Reagieren auf Benutzereingaben.

- `user-visible`

  - : Aufgaben, die für den Benutzer sichtbar sind, jedoch nicht unbedingt Benutzeraktionen blockieren. Dies könnte das Rendern nicht wesentlicher Teile der Seite umfassen, wie nicht wesentliche Bilder oder Animationen.

    Dies ist die Standardpriorität für `scheduler.postTask()` und `scheduler.yield()`.

- `background`
  - : Aufgaben, die nicht zeitkritisch sind. Dies könnte die Verarbeitung von Protokollen oder die Initialisierung von Drittanbieter-Bibliotheken umfassen, die für das Rendern nicht erforderlich sind.

### Veränderbare und unveränderbare Aufgabenpriorität

Es gibt viele Anwendungsfälle, bei denen sich die Aufgabenpriorität nie ändern muss, während für andere dies erforderlich ist. Zum Beispiel könnte das Abrufen eines Bildes von einer `background`-Aufgabe zu `user-visible` wechseln, wenn ein Karussell in den Anzeigebereich gescrollt wird.

Aufgabenprioritäten können als statisch (unveränderbar) oder dynamisch (änderbar) gesetzt werden, abhängig von den Argumenten, die an [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) übergeben werden.

Die Aufgabenpriorität ist unveränderbar, wenn ein Wert im Argument `options.priority` angegeben ist. Der angegebene Wert wird für die Aufgabenpriorität verwendet und kann nicht geändert werden.

Die Priorität ist nur dann änderbar, wenn ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) an das Argument `options.signal` übergeben wird **und** `options.priority` **nicht gesetzt** ist. In diesem Fall nimmt die Aufgabe ihre anfängliche Priorität vom Signalpriority an, und die Priorität kann anschließend durch Aufrufen von [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) auf dem Controller, der mit dem Signal verbunden ist, geändert werden.

Wenn die Priorität nicht mit `options.priority` oder durch Übergeben eines [`TaskSignal`](/de/docs/Web/API/TaskSignal) an `options.signal` festgelegt ist, ist die Standardpriorität `user-visible` (und ist per Definition unveränderbar).

Beachten Sie, dass eine Aufgabe, die abgebrochen werden muss, `options.signal` auf entweder [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) setzen muss. Für eine Aufgabe mit einer unveränderbaren Priorität deutet jedoch [`AbortSignal`](/de/docs/Web/API/AbortSignal) klarer an, dass die Aufgabenpriorität mit dem Signal nicht geändert werden kann.

Gehen wir ein Beispiel durch, um zu veranschaulichen, was wir damit meinen. Wenn Sie mehrere Aufgaben haben, die ungefähr die gleiche Priorität haben, ist es sinnvoll, sie in separate Funktionen aufzuteilen, um die Wartung, das Debuggen und viele andere Gründe zu erleichtern.

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

Diese Art von Struktur hilft jedoch nicht beim Blockieren des Haupt-Threads. Da alle fünf Aufgaben innerhalb einer Hauptfunktion ausgeführt werden, führt der Browser sie alle als eine einzelne Aufgabe aus.

Um dies zu bewältigen, neigen wir dazu, regelmäßig eine Funktion auszuführen, um den Code den _Haupt-Thread freizugeben_ zu lassen. Dies bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen deren Ausführung dem Browser die Möglichkeit gegeben wird, hochpriorisierte Aufgaben wie das Aktualisieren der Benutzeroberfläche zu bearbeiten. Ein gängiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in einer separaten Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann innerhalb eines Task-Runner-Musters wie folgt verwendet werden, um den Haupt-Thread nach jeder durchgeführten Aufgabe freizugeben:

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

Um dies weiter zu verbessern, können wir [`Scheduler.yield`](/de/docs/Web/API/Scheduler/yield) verwenden, um diesem Code zu erlauben, vor anderen weniger kritischen Aufgaben in der Warteschlange weiter ausgeführt zu werden:

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
  - : Enthält die Methoden [`postTask()`](/de/docs/Web/API/Scheduler/postTask) und [`yield()`](/de/docs/Web/API/Scheduler/yield) zum Hinzufügen prioritierter Aufgaben, die geplant werden sollen. Eine Instanz dieser Schnittstelle ist auf den globalen Objekten [`Window`](/de/docs/Web/API/Window) oder [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) (`globalThis.scheduler`) verfügbar.
- [`TaskController`](/de/docs/Web/API/TaskController)
  - : Unterstützt sowohl das Abbrechen einer Aufgabe als auch das Ändern ihrer Priorität.
- [`TaskSignal`](/de/docs/Web/API/TaskSignal)
  - : Ein Signalobjekt, das Ihnen ermöglicht, eine Aufgabe abzubrechen und ihre Priorität zu ändern, falls erforderlich, mithilfe eines [`TaskController`](/de/docs/Web/API/TaskController)-Objekts.
- [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent)
  - : Die Schnittstelle für das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis, das gesendet wird, wenn die Priorität für eine Aufgabe geändert wird.

> [!NOTE]
> Wenn die [Aufgabenpriorität](#aufgabenprioritäten) nie geändert werden muss, können Sie einen [`AbortController`](/de/docs/Web/API/AbortController) und sein zugehöriges [`AbortSignal`](/de/docs/Web/API/AbortSignal) anstelle von [`TaskController`](/de/docs/Web/API/TaskController) und [`TaskSignal`](/de/docs/Web/API/TaskSignal) verwenden.

### Erweiterungen zu anderen Schnittstellen

- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler)
  - : Diese Eigenschaften sind die Einstiegspunkte zur Verwendung der Methode `Scheduler.postTask()` in einem Fenster- oder Worker-Bereich.

## Beispiele

Beachten Sie, dass die untenstehenden Beispiele `myLog()` verwenden, um in ein Textfeld zu schreiben. Der Code für das Protokollfeld und die Methode wird in der Regel ausgeblendet, um nicht von relevanterem Code abzulenken.

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

### Funktionskontrolle

Überprüfen Sie, ob das priorisierte Aufgaben-Scheduling unterstützt wird, indem Sie nach der `scheduler`-Eigenschaft im globalen Bereich suchen.

Der untenstehende Code gibt "Feature: Unterstützt" aus, wenn die API in diesem Browser unterstützt wird.

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

{{EmbedLiveSample('Funktionskontrolle','400px','70px')}}

### Grundlegende Nutzung

Aufgaben werden mit [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) gepostet, wobei eine Callback-Funktion (Aufgabe) im ersten Argument angegeben und ein optionales zweites Argument verwendet wird, um eine Aufgabenpriorität, ein Signal und/oder eine Verzögerung anzugeben. Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der Callback-Funktion erfüllt wird oder entweder mit einem Abbruchfehler oder einem in der Funktion geworfenen Fehler abgelehnt wird.

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

Da ein Promise zurückgegeben wird, kann [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) [mit anderen Promises verkettet werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises). Unten zeigen wir, wie man auf die Erfüllung des Promises mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) wartet. Dies verwendet die Standardpriorität (`user-visible`).

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

Die Methode kann auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) innerhalb einer [async-Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) verwendet werden. Der untenstehende Code zeigt, wie Sie diesen Ansatz verwenden können, um auf eine `user-blocking`-Aufgabe zu warten.

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

In einigen Fällen müssen Sie möglicherweise gar nicht auf den Abschluss warten. Der Einfachheit halber protokollieren viele der hier gezeigten Beispiele einfach das Ergebnis, während die Aufgabe ausgeführt wird.

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

Das untenstehende Protokoll zeigt die Ausgabe der drei oben genannten Aufgaben. Beachten Sie, dass die Reihenfolge, in der sie ausgeführt werden, zuerst von der Priorität und dann von der Deklarationsreihenfolge abhängt.

{{EmbedLiveSample('Grundlegende Nutzung','400px','170px')}}

### Permanente Prioritäten

[Aufgabenprioritäten](#aufgabenprioritäten) können mit dem `priority`-Parameter im optionalen zweiten Argument festgelegt werden. Prioritäten, die auf diese Weise gesetzt werden, sind [unveränderlich](#veränderbare_und_unveränderbare_aufgabenpriorität) (können nicht geändert werden).

Unten posten wir zwei Gruppen von drei Aufgaben, jeweils in umgekehrter Reihenfolge der Priorität. Die letzte Aufgabe hat die Standardpriorität. Bei Ausführung gibt jede Aufgabe einfach ihre erwartete Reihenfolge aus (wir warten nicht auf das Ergebnis, da wir dies nicht tun müssen, um die Ausführungsreihenfolge zu zeigen).

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

Die untenstehende Ausgabe zeigt, dass die Aufgaben in Prioritätenreihenfolge und dann Deklarationsreihenfolge ausgeführt werden.

{{EmbedLiveSample("Permanente Prioritäten",'400px','170px')}}

### Aufgabenprioritäten ändern

[Aufgabenprioritäten](#aufgabenprioritäten) können auch ihren Anfangswert von einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) übernehmen, das im optionalen zweiten Argument an `postTask()` übergeben wird. Wenn auf diese Weise festgelegt, kann die Priorität der Aufgabe [dann mithilfe des mit dem Signal verbundenen Controllers geändert werden](#veränderbare_und_unveränderbare_aufgabenpriorität).

> [!NOTE]
> Das Setzen und Ändern von Aufgabenprioritäten mithilfe eines Signals funktioniert nur, wenn das Argument `options.priority` zu `postTask()` nicht gesetzt ist und wenn `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) (und kein [`AbortSignal`](/de/docs/Web/API/AbortSignal)) ist.

Der untenstehende Code zeigt zunächst, wie man einen [`TaskController`](/de/docs/Web/API/TaskController) erstellt und die anfängliche Priorität seines Signals im [`TaskController()`](/de/docs/Web/API/TaskController/TaskController)-Konstruktor auf `user-blocking` einstellt.

Der Code verwendet dann `addEventListener()`, um einen Ereignis-Listener zum Signal des Controllers hinzuzufügen (wir könnten alternativ die `TaskSignal.onprioritychange`-Eigenschaft verwenden, um einen Ereignishandler hinzuzufügen). Der Ereignishandler verwendet [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) beim Ereignis, um die ursprüngliche Priorität zu erhalten, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) beim Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

Die Aufgabe wird dann gepostet, indem das Signal übergeben wird, und anschließend ändern wir sofort die Priorität auf `background`, indem wir [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) auf dem Controller aufrufen.

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

Die untenstehende Ausgabe zeigt, dass die Priorität erfolgreich von `user-blocking` zu `background` geändert wurde. Beachten Sie, dass in diesem Fall die Priorität geändert wird, bevor die Aufgabe ausgeführt wird, aber sie hätte ebenso während der Ausführung der Aufgabe geändert werden können.

{{EmbedLiveSample("Aufgabenprioritäten ändern",'400px','130px')}}

### Aufgaben abbrechen

Aufgaben können sowohl mithilfe von [`TaskController`](/de/docs/Web/API/TaskController) als auch [`AbortController`](/de/docs/Web/API/AbortController) auf die gleiche Weise abgebrochen werden. Der einzige Unterschied besteht darin, dass Sie [`TaskController`](/de/docs/Web/API/TaskController) verwenden müssen, wenn Sie auch die Aufgabenpriorität festlegen möchten.

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

Der untenstehende Code erstellt einen Controller und übergibt sein Signal an die Aufgabe. Die Aufgabe wird dann sofort abgebrochen. Dies führt dazu, dass das Promise mit einem `AbortError` abgelehnt wird, der im `catch`-Block gefangen und protokolliert wird. Beachten Sie, dass wir auch das [`abort`](/de/docs/Web/API/AbortSignal/abort_event)-Ereignis abhören und den Abbruch dort protokollieren könnten.

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

Das untenstehende Protokoll zeigt die abgebrochene Aufgabe.

{{EmbedLiveSample("Aufgaben abbrechen",'400px','100px')}}

### Aufgaben verzögern

Aufgaben können verzögert werden, indem im `options.delay`-Parameter zu `postTask()` eine ganze Zahl in Millisekunden angegeben wird. Dies fügt die Aufgabe effektiv zur priorisierten Warteschlange mit einem Timeout hinzu, wie es mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) erstellt werden könnte. Die `delay` ist die minimale Zeit, bevor die Aufgabe zum Scheduler hinzugefügt wird; es kann länger dauern.

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

Unten wird gezeigt, wie zwei Aufgaben mit einer Verzögerung hinzugefügt werden (als Pfeilfunktionen).

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

Aktualisieren Sie die Seite. Beachten Sie, dass die zweite Zeichenkette nach etwa 2 Sekunden im Protokoll erscheint.

{{EmbedLiveSample("Aufgaben verzögern",'400px','100px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Building a Faster Web Experience with the postTask Scheduler](https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91) auf dem Airbnb-Blog (2021)
- [Optimizing long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
