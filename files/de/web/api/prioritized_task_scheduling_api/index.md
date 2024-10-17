---
title: Prioritized Task Scheduling API
slug: Web/API/Prioritized_Task_Scheduling_API
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{DefaultAPISidebar("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **Prioritized Task Scheduling API** bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind.

Die [Aufgabenprioritäten](#aufgabenprioritäten) sind sehr grob und basieren darauf, ob Aufgaben die Benutzerinteraktion blockieren oder anderweitig die Benutzererfahrung beeinflussen oder im Hintergrund ausgeführt werden können. Entwickler und Frameworks können innerhalb der durch die API definierten breiten Kategorien feinere Priorisierungsschemata implementieren.

Die API basiert auf `Promise` und unterstützt die Möglichkeit, Aufgabenprioritäten festzulegen und zu ändern, das Hinzufügen von Aufgaben zum Scheduler zu verzögern, Aufgaben abzubrechen und auf Prioritätsänderungen und Abbruchereignisse zu überwachen.

## Konzepte und Verwendung

Die Prioritized Task Scheduling API ist sowohl in Fenster- als auch in Worker-Threads über die `scheduler`-Eigenschaft im globalen Objekt verfügbar.

Die Hauptmethoden der API sind [`scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) und [`scheduler.yield()`](/de/docs/Web/API/Scheduler/yield). `scheduler.postTask()` nimmt eine Callback-Funktion (die Aufgabe) an und gibt ein `Promise` zurück, das entweder mit dem Rückgabewert der Funktion aufgelöst wird oder mit einem Fehler abgelehnt wird. `scheduler.yield()` verwandelt jede [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) Funktion in eine Aufgabe, indem der Haupt-Thread dem Browser für andere Arbeiten überlassen wird; die Ausführung wird fortgesetzt, wenn das zurückgegebene `Promise` aufgelöst wird.

Die beiden Methoden haben ähnliche Funktionalität, jedoch unterschiedliche Steuerungsmöglichkeiten. `scheduler.postTask()` ist konfigurierbarer — zum Beispiel lässt es die explizite Festlegung der Aufgabenpriorität und die Task-Stornierung über ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) zu. `scheduler.yield()` hingegen ist einfacher und kann in jeder `async` Funktion `await`ed werden, ohne dass eine Fol­geaufgabe in einer anderen Funktion bereitgestellt werden muss.

### `scheduler.yield()`

Um lange laufende JavaScript-Aufgaben zu unterbrechen, damit sie den Haupt-Thread nicht blockieren, fügen Sie einen `scheduler.yield()`-Aufruf ein, um den Haupt-Thread vorübergehend an den Browser zurückzugeben, der eine Aufgabe erstellt, um die Ausführung dort fortzusetzen, wo sie aufgehört hat.

```js
async function slowTask() {
  firstHalfOfWork();
  await scheduler.yield();
  secondHalfOfWork();
}
```

`scheduler.yield()` gibt ein `Promise` zurück, das Sie erwarten können, um die Ausführung fortzusetzen. Dies ermöglicht es, Arbeiten derselben Funktion dort einzuschließen, ohne den Haupt-Thread zu blockieren, wenn die Funktion ausgeführt wird.

`scheduler.yield()` nimmt keine Argumente an. Die Aufgabe, die ihre Fortsetzung auslöst, hat standardmäßig eine [`user-visible`](#user-visible) Priorität; jedoch, wenn `scheduler.yield()` innerhalb eines `scheduler.postTask()`-Callbacks aufgerufen wird, wird es [die Priorität der umgebenden Aufgabe erben](/de/docs/Web/API/Scheduler/yield#inheriting_task_priorities).

### `scheduler.postTask()`

Wenn `scheduler.postTask()` ohne Argumente aufgerufen wird, erstellt es eine Aufgabe mit einer Standard-`user-visible`-Priorität, die nicht abgebrochen oder deren Priorität nicht geändert werden kann.

```js
const promise = scheduler.postTask(myTask);
```

Da die Methode ein `Promise` zurückgibt, können Sie auf dessen Auflösung asynchron mit [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) warten und Fehler, die von der Aufgaben-Callback-Funktion oder beim Abbruch der Aufgabe ausgelöst werden, mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) abfangen. Die Callback-Funktion kann jede Art von Funktion sein (unten zeigen wir eine Pfeilfunktion).

```js
scheduler
  .postTask(() => "Task executing")
  // Promise resolved: log task result when promise resolves
  .then((taskResult) => console.log(`${taskResult}`))
  // Promise rejected: log AbortError or errors thrown by task
  .catch((error) => console.error(`Error: ${error}`));
```

Auf dieselbe Aufgabe könnte mit `await`/`async` wie unten gezeigt gewartet werden (beachten Sie, dass dies in einem {{Glossary("IIFE", "sofort aufgerufenen Funktionsausdruck (IIFE)")}}) ausgeführt wird:

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

- `priority` Dies ermöglicht es Ihnen, eine bestimmte unveränderliche Priorität anzugeben.
  Einmal festgelegt, kann die Priorität nicht geändert werden.
- `signal` Dies ermöglicht es Ihnen, ein Signal anzugeben, das entweder ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) sein kann.
  Das Signal ist mit einem Controller verbunden, der zum Abbrechen der Aufgabe verwendet werden kann.
  Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) kann auch verwendet werden, um die Aufgabenpriorität festzulegen und zu ändern, wenn die [Aufgabe veränderbar ist](#veränderbare_und_unveränderbare_aufgabenpriorität).
- `delay` Dies ermöglicht es Ihnen, die Verzögerung anzugeben, bevor die Aufgabe zur Planung hinzugefügt wird, in Millisekunden.

Dasselbe Beispiel wie oben mit einer Prioritätsoption würde so aussehen:

```js
scheduler
  .postTask(() => "Task executing", { priority: "user-blocking" })
  .then((taskResult) => console.log(`${taskResult}`)) // Log the task result
  .catch((error) => console.error(`Error: ${error}`)); // Log any errors
```

### Aufgabenprioritäten

Geplante Aufgaben werden nach Priorität ausgeführt, gefolgt von der Reihenfolge, in der sie der Scheduler-Warteschlange hinzugefügt wurden.

Es gibt nur drei Prioritäten, die unten aufgeführt sind (geordnet von höchster zu niedrigster):

- `user-blocking`

  - : Aufgaben, die Benutzer daran hindern, mit der Seite zu interagieren.
    Dazu gehört das Rendern der Seite bis zu dem Punkt, an dem sie verwendet werden kann, oder das Reagieren auf Benutzereingaben.

- `user-visible`

  - : Aufgaben, die für den Benutzer sichtbar, aber nicht unbedingt blockierend für Benutzeraktionen sind.
    Dies könnte das Rendern von nicht wesentlichen Teilen der Seite umfassen, wie z.B. unwesentliche Bilder oder Animationen.

    Dies ist die Standardpriorität für `scheduler.postTask()` und `scheduler.yield()`.

- `background`
  - : Aufgaben, die nicht zeitkritisch sind.
    Dazu könnte die Protokollverarbeitung oder die Initialisierung von Drittanbieter-Bibliotheken gehören, die nicht für das Rendern erforderlich sind.

### Veränderbare und unveränderbare Aufgabenpriorität

Es gibt viele Anwendungsfälle, in denen die Aufgabenpriorität niemals geändert werden muss, während es für andere erforderlich ist.
Zum Beispiel kann das Laden eines Bildes von einer `background`-Aufgabe zu `user-visible` wechseln, wenn ein Karussell in den sichtbaren Bereich gescrollt wird.

Aufgabenprioritäten können statisch (unveränderlich) oder dynamisch (änderbar) sein, abhängig von den Argumenten, die an [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) übergeben werden.

Die Aufgabenpriorität ist unveränderlich, wenn ein Wert im `options.priority`-Argument angegeben wird.
Dieser Wert wird für die Aufgabenpriorität verwendet und kann nicht geändert werden.

Die Priorität ist nur änderbar, wenn ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) an das `options.signal`-Argument übergeben wird **und** `options.priority` **nicht gesetzt** ist.
In diesem Fall nimmt die Aufgabe ihre anfängliche Priorität von der `signal`-Priorität an und die Priorität kann anschließend geändert werden, indem [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) auf den mit dem Signal verbundenen Controller aufgerufen wird.

Wenn die Priorität nicht mit `options.priority` oder durch Übergabe eines [`TaskSignal`](/de/docs/Web/API/TaskSignal) an `options.signal` festgelegt wird, wird sie standardmäßig auf `user-visible` gesetzt (und ist definitionsgemäß unveränderlich).

Beachten Sie, dass eine Aufgabe, die abgebrochen werden muss, `options.signal` entweder auf [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) einstellen muss.
Für eine Aufgabe mit unveränderlicher Priorität zeigt jedoch [`AbortSignal`](/de/docs/Web/API/AbortSignal) klarer an, dass die Aufgabenpriorität mit dem Signal nicht geändert werden kann.

Lassen Sie uns ein Beispiel durchgehen, um zu demonstrieren, was wir damit meinen. Wenn Sie mehrere Aufgaben haben, die ungefähr die gleiche Priorität haben, macht es Sinn, sie in separate Funktionen aufzuteilen, um die Wartung, das Debugging und viele andere Gründe zu unterstützen.

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

Diese Art von Struktur hilft jedoch nicht, das Blockieren des Haupt-Threads zu vermeiden. Da alle fünf Aufgaben innerhalb einer Hauptfunktion ausgeführt werden, verarbeitet der Browser sie alle als eine einzelne Aufgabe.

Um damit umzugehen, neigen wir dazu, eine Funktion periodisch auszuführen, um den Code zum _Haupt-Thread zu übergeben_. Dies bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen deren Ausführung der Browser die Möglichkeit erhält, hochpriorisierte Aufgaben wie das Aktualisieren der Benutzeroberfläche zu bearbeiten. Ein häufiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann innerhalb eines Aufgabenlaufmusters wie folgt verwendet werden, um den Haupt-Thread nach jeder durchgeführten Aufgabe freizugeben:

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

Um dies weiter zu verbessern, können wir [`Scheduler.yield`](/de/docs/Web/API/Scheduler/yield) verwenden, wenn verfügbar, um diesem Code zu ermöglichen, vor anderen weniger kritischen Aufgaben in der Warteschlange weiter ausgeführt zu werden:

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
  - : Ein Signalobjekt, das es Ihnen ermöglicht, eine Aufgabe abzubrechen und, falls erforderlich, ihre Priorität zu ändern, mittels eines [`TaskController`](/de/docs/Web/API/TaskController)-Objekts.
- [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent)
  - : Die Schnittstelle für das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis, welches gesendet wird, wenn die Priorität einer Aufgabe geändert wird.

> [!NOTE]
> Wenn die [Aufgabenpriorität](#aufgabenprioritäten) niemals geändert werden muss, können Sie einen [`AbortController`](/de/docs/Web/API/AbortController) und das zugehörige [`AbortSignal`](/de/docs/Web/API/AbortSignal) anstelle von [`TaskController`](/de/docs/Web/API/TaskController) und [`TaskSignal`](/de/docs/Web/API/TaskSignal) verwenden.

### Erweiterungen zu anderen Schnittstellen

- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler)
  - : Diese Eigenschaften sind die Einstiegspunkte für die Nutzung der Methode `Scheduler.postTask()` in einem Fenster oder einem Worker-Bereich.

## Beispiele

Beachten Sie, dass die untenstehenden Beispiele `myLog()` verwenden, um in ein Textfeld zu schreiben.
Der Code für den Protokollbereich und die Methode ist im Allgemeinen ausgeblendet, um nicht von relevanterem Code abzulenken.

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

### Merkmalsüberprüfung

Überprüfen Sie, ob die priorisierte Aufgabenplanung unterstützt wird, indem Sie nach der `scheduler`-Eigenschaft im globalen Bereich suchen.

Der folgende Code gibt "Feature: Supported" aus, wenn die API in diesem Browser unterstützt wird.

```html hidden
<textarea id="log" style="min-height: 20px; width: 95%"></textarea>
```

```js hidden
//hidden logger code - simplifies example
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

Aufgaben werden mit [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) gepostet, indem eine Callback-Funktion (Aufgabe) im ersten Argument angegeben wird, und ein optionales zweites Argument, das verwendet werden kann, um eine Aufgabenpriorität, ein Signal und/oder eine Verzögerung anzugeben.
Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der Callback-Funktion aufgelöst wird oder mit entweder einem Abbruchfehler oder einem in der Funktion ausgelösten Fehler abgelehnt wird.

```html hidden
<textarea id="log" style="min-height: 100px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

Da es ein `Promise` zurückgibt, kann [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) [mit anderen Versprechen verkettet werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises).
Unten zeigen wir, wie man auf die Auflösung des `Promise` mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) wartet.
Dies verwendet die Standardpriorität (`user-visible`).

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

Die Methode kann auch innerhalb einer [Async-Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwendet werden.
Der folgende Code zeigt, wie Sie diesen Ansatz verwenden könnten, um auf eine `user-blocking`-Aufgabe zu warten.

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
Zur Vereinfachung protokollieren viele der hier gezeigten Beispiele einfach das Ergebnis, während die Aufgabe ausgeführt wird.

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

Das untenstehende Protokoll zeigt die Ausgabe der drei oben genannten Aufgaben.
Beachten Sie, dass die Reihenfolge, in der sie ausgeführt werden, zuerst von der Priorität und dann von der Deklarationsreihenfolge abhängt.

{{EmbedLiveSample('Basic usage','400px','170px')}}

### Permanente Prioritäten

[Aufgabenprioritäten](#aufgabenprioritäten) können mit dem Parameter `priority` im optionalen zweiten Argument festgelegt werden.
Prioritäten, die auf diese Weise festgelegt werden, sind [unveränderlich](#veränderbare_und_unveränderbare_aufgabenpriorität) (können nicht geändert werden).

Unten posten wir zwei Gruppen von drei Aufgaben, jedes Mitglied in umgekehrter Reihenfolge ihrer Priorität.
Die letzte Aufgabe hat die Standardpriorität.
Beim Ausführen protokolliert jede Aufgabe einfach ihre erwartete Reihenfolge (wir warten nicht auf das Ergebnis, weil wir nicht müssen, um die Ausführungsreihenfolge zu zeigen).

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

Die untenstehende Ausgabe zeigt, dass die Aufgaben in Prioritätsreihenfolge und dann in Deklarationsreihenfolge ausgeführt werden.

{{EmbedLiveSample("Permanent priorities",'400px','170px')}}

### Aufgabenprioritäten ändern

[Aufgabenprioritäten](#aufgabenprioritäten) können auch ihren Anfangswert von einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) annehmen, das im optionalen zweiten Argument an `postTask()` übergeben wird.
Wenn sie auf diese Weise festgelegt werden, kann die Priorität der Aufgabe [dann mithilfe des mit dem Signal verbundenen Controllers](#veränderbare_und_unveränderbare_aufgabenpriorität) geändert werden.

> [!NOTE]
> Das Setzen und Ändern von Aufgabenprioritäten mittels eines Signals funktioniert nur, wenn das `options.priority`-Argument für `postTask()` nicht gesetzt ist und wenn `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) (und kein [`AbortSignal`](/de/docs/Web/API/AbortSignal)) ist.

Der folgende Code zeigt zunächst, wie man einen [`TaskController`](/de/docs/Web/API/TaskController) erstellt, der die anfängliche Priorität seines Signals auf `user-blocking` im [`TaskController()`](/de/docs/Web/API/TaskController/TaskController)-Konstruktor setzt.

Der Code verwendet dann `addEventListener()`, um einen Ereignis-Listener zum Signal des Controllers hinzuzufügen (wir könnten alternativ die Eigenschaft `TaskSignal.onprioritychange` verwenden, um einen Ereignis-Handler hinzuzufügen).
Der Ereignis-Handler verwendet [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) auf dem Ereignis, um die ursprüngliche Priorität zu erhalten und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) auf dem Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

Die Aufgabe wird dann gepostet und das Signal übergeben, und anschließend ändern wir sofort die Priorität zu `background`, indem `TaskController.setPriority()` auf den Controller aufgerufen wird.

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

Das untenstehende Ergebnis zeigt, dass die Priorität erfolgreich von `user-blocking` auf `background` geändert wurde.
Beachten Sie, dass in diesem Fall die Priorität geändert wird, bevor die Aufgabe ausgeführt wird, aber sie könnte genauso gut während der Ausführung der Aufgabe geändert worden sein.

{{EmbedLiveSample("Changing task priorities",'400px','130px')}}

### Aufgaben abbrechen

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

Der untenstehende Code erstellt einen Controller und übergibt sein Signal an die Aufgabe.
Die Aufgabe wird dann sofort abgebrochen.
Dies führt dazu, dass das `Promise` mit einem `AbortError` abgelehnt wird, der im `catch`-Block abgefangen und protokolliert wird.
Beachten Sie, dass wir auch das [`abort`](/de/docs/Web/API/AbortSignal/abort_event)-Ereignis, das auf dem [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) ausgelöst wird, beobachten und den Abbruch dort protokollieren könnten.

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

{{EmbedLiveSample("Aborting tasks",'400px','100px')}}

### Aufgaben verzögern

Aufgaben können verzögert werden, indem in der `options.delay`-Parameter in `postTask()` eine ganze Zahl von Millisekunden angegeben wird.
Dies fügt die Aufgabe im Wesentlichen der priorisierten Warteschlange in einem Timeout hinzu, wie es mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) erstellt werden könnte.
Die `delay` ist die minimale Zeit, bevor die Aufgabe dem Scheduler hinzugefügt wird; sie kann länger sein.

```html hidden
<textarea id="log" style="min-height: 50px; width: 95%"></textarea>
```

```js hidden
let log = document.getElementById("log");
function myLog(text) {
  log.textContent += `${text}\n`;
}
```

Der untenstehende Code zeigt zwei hinzugefügte Aufgaben (als Pfeilfunktionen) mit einer Verzögerung.

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
Beachten Sie, dass die zweite Zeichenfolge nach etwa 2 Sekunden im Protokoll erscheint.

{{EmbedLiveSample("Delaying tasks",'400px','100px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Building a Faster Web Experience with the postTask Scheduler](https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91) im Airbnb-Blog (2021)
- [Optimizing long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
