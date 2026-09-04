---
title: Prioritized Task Scheduling API
slug: Web/API/Prioritized_Task_Scheduling_API
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{DefaultAPISidebar("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **Priorisierte Task-Scheduling-API** bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Drittanbieterbibliotheken und -frameworks definiert sind.

Die [Task-Prioritäten](#aufgabenprioritäten) sind sehr grob granuliert und basieren darauf, ob Aufgaben Benutzerinteraktionen blockieren oder anderweitig die Benutzererfahrung beeinflussen, oder ob sie im Hintergrund ausgeführt werden können. Entwickler und Frameworks können innerhalb der vom API definierten breiten Kategorien feinere Priorisierungsschemata implementieren.

Die API ist promise-basiert und unterstützt die Möglichkeit, Aufgabenprioritäten festzulegen und zu ändern, Aufgaben zur Planerausführung zu verzögern, Aufgaben abzubrechen und auf Prioritätsänderungs- und Abbruchevents zu überwachen.

## Konzepte und Nutzung

Die Priorisierte Task-Scheduling-API ist sowohl in Fenster- als auch in Worker-Threads über die `scheduler`-Eigenschaft des globalen Objekts verfügbar.

Die Haupt-API-Methoden sind [`scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) und [`scheduler.yield()`](/de/docs/Web/API/Scheduler/yield). `scheduler.postTask()` nimmt eine Callback-Funktion (die Aufgabe) und gibt ein Promise zurück, das entweder mit dem Rückgabewert der Funktion aufgelöst oder mit einem Fehler abgelehnt wird. `scheduler.yield()` verwandelt jede [`async`](/de/docs/Web/JavaScript/Reference/Statements/async_function) Funktion in eine Aufgabe, indem die Main-Thread dem Browser für andere Arbeiten überlassen wird, wobei die Ausführung fortgesetzt wird, wenn das zurückgegebene Promise aufgelöst wird.

Die beiden Methoden haben ähnliche Funktionen, aber unterschiedliche Kontrollstufen. `scheduler.postTask()` ist konfigurierbarer — zum Beispiel ermöglicht es die explizite Festlegung der Aufgabenpriorität und den Aufgabenabbruch über ein [`AbortSignal`](/de/docs/Web/API/AbortSignal). `scheduler.yield()` hingegen ist einfacher und kann in jeder `async`-Funktion `await`ed werden, ohne in einer anderen Funktion eine Folgeaufgabe bereitstellen zu müssen.

### `scheduler.yield()`

Um langlaufende JavaScript-Aufgaben aufzuteilen, damit sie den Main-Thread nicht blockieren, fügen Sie eine `scheduler.yield()`-Aufruf hinzu, um den Main-Thread vorübergehend an den Browser zurückzugeben und einen Task zu erzeugen, der die Ausführung dort fortsetzt, wo sie unterbrochen wurde.

```js
async function slowTask() {
  firstHalfOfWork();
  await scheduler.yield();
  secondHalfOfWork();
}
```

`scheduler.yield()` gibt ein Promise zurück, das await-ed werden kann, um die Ausführung fortzusetzen. Dadurch kann Arbeit, die zur gleichen Funktion gehört, dort einbezogen werden, ohne den Main-Thread zu blockieren, wenn die Funktion ausgeführt wird.

`scheduler.yield()` nimmt keine Argumente an. Der Task, der seine Fortsetzung auslöst, hat eine Standardpriorität von [`user-visible`](#user-visible); wenn `scheduler.yield()` jedoch innerhalb eines `scheduler.postTask()`-Callbacks aufgerufen wird, wird [die Priorität der umgebenden Aufgabe geerbt](/de/docs/Web/API/Scheduler/yield#inheriting_task_priorities).

### `scheduler.postTask()`

Wenn `scheduler.postTask()` ohne Argumente aufgerufen wird, erstellt es eine Aufgabe mit einer Standardpriorität von [`user-visible`](#user-visible), die nicht abgebrochen oder deren Priorität nicht geändert werden kann.

```js
const promise = scheduler.postTask(myTask);
```

Da die Methode ein Promise zurückgibt, können Sie asynchron auf deren Auflösung warten, indem Sie [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) verwenden, und Fehler, die von der Aufgaben-Callback-Funktion ausgelöst werden (oder wenn die Aufgabe abgebrochen wird), mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) abfangen. Die Callback-Funktion kann jede Art von Funktion sein (unten demonstrieren wir eine Pfeilfunktion).

```js
scheduler
  .postTask(() => "Task executing")
  // Promise resolved: log task result when promise resolves
  .then((taskResult) => console.log(`${taskResult}`))
  // Promise rejected: log AbortError or errors thrown by task
  .catch((error) => console.error(`Error: ${error}`));
```

Auf dieselbe Aufgabe könnte wie unten gezeigt mit `await`/`async` gewartet werden (beachten Sie, dass dies in einem {{Glossary("IIFE", "Sofort aufgerufenen Funktionsausdruck (IIFE)")}}) durchgeführt wird:

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

Sie können auch ein Optionsobjekt an die Methode `postTask()` übergeben, wenn Sie das Standardverhalten ändern möchten.
Die Optionen sind:

- `priority` Damit können Sie eine bestimmte unveränderbare Priorität festlegen.
  Einmal festgelegt, kann die Priorität nicht geändert werden.
- `signal` Damit können Sie ein Signal angeben, das entweder ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) sein kann.
  Das Signal ist mit einem Controller verbunden, der zum Abbrechen der Aufgabe verwendet werden kann.
  Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) kann auch verwendet werden, um die Aufgabenpriorität festzulegen und zu ändern, wenn die [Aufgabe veränderbar ist](#veränderbare_und_unveränderbare_aufgabenpriorität).
- `delay` Damit können Sie die Verzögerung angeben, bevor die Aufgabe zur Planung hinzugefügt wird, in Millisekunden.

Das gleiche Beispiel wie oben mit einer Prioritätsoption würde folgendermaßen aussehen:

```js
scheduler
  .postTask(() => "Task executing", { priority: "user-blocking" })
  .then((taskResult) => console.log(`${taskResult}`)) // Log the task result
  .catch((error) => console.error(`Error: ${error}`)); // Log any errors
```

### Aufgabenprioritäten

Geplante Aufgaben werden in der Prioritätsreihenfolge ausgeführt, gefolgt von der Reihenfolge, in der sie zur Planungswarteschlange hinzugefügt wurden.

Es gibt nur drei Prioritäten, die unten aufgelistet sind (von höchster zu niedrigster):

- `user-blocking`
  - : Aufgaben, die Benutzer daran hindern, mit der Seite zu interagieren.
    Dies umfasst das Rendern der Seite bis zu dem Punkt, an dem sie verwendet werden kann, oder das Reagieren auf Benutzereingaben.

- `user-visible`
  - : Aufgaben, die für den Benutzer sichtbar sind, aber nicht unbedingt Benutzeraktionen blockieren.
    Dies könnte das Rendern von nicht wesentlichen Teilen der Seite umfassen, wie z.B. nicht wesentliche Bilder oder Animationen.

    Dies ist die Standardpriorität für `scheduler.postTask()` und `scheduler.yield()`.

- `background`
  - : Aufgaben, die nicht zeitkritisch sind.
    Dazu könnte die Protokollverarbeitung oder die Initialisierung von Drittanbieterbibliotheken gehören, die nicht zum Rendern erforderlich sind.

### Veränderbare und unveränderbare Aufgabenpriorität

Es gibt viele Anwendungsfälle, in denen die Aufgabenpriorität nie geändert werden muss, während sie für andere jedoch geändert werden muss.
Zum Beispiel könnte das Abrufen eines Bildes von einer `background`-Aufgabe zu `user-visible` gewechselt werden, wenn ein Karussell in den Sichtbereich gescrollt wird.

Aufgabenprioritäten können statisch (unveränderlich) oder dynamisch (änderbar) festgelegt werden, je nach den an [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) übergebenen Argumenten.

Die Aufgabenpriorität ist unveränderlich, wenn ein Wert im Argument `options.priority` angegeben ist.
Der angegebene Wert wird für die Aufgabenpriorität verwendet und kann nicht geändert werden.

Die Priorität ist nur änderbar, wenn ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) dem Argument `options.signal` übergeben wird **und** `options.priority` **nicht gesetzt** ist.
In diesem Fall wird die Aufgabe ihre anfängliche Priorität von der Signalpriorität übernehmen, und die Priorität kann anschließend geändert werden, indem [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) auf dem Controller aufgerufen wird, der mit dem Signal verbunden ist.

Wenn die Priorität nicht mit `options.priority` oder durch eine Übergabe eines [`TaskSignal`](/de/docs/Web/API/TaskSignal) an `options.signal` festgelegt wird, wird sie auf `user-visible` gesetzt (und ist definitionsgemäß unveränderlich).

Beachten Sie, dass eine Aufgabe, die abgebrochen werden muss, `options.signal` entweder auf [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder auf [`AbortSignal`](/de/docs/Web/API/AbortSignal) setzen muss.
Für eine Aufgabe mit einer unveränderlichen Priorität zeigt jedoch [`AbortSignal`](/de/docs/Web/API/AbortSignal) deutlicher an, dass die Aufgabenpriorität nicht mit dem Signal geändert werden kann.

Lassen Sie uns ein Beispiel durchgehen, um zu demonstrieren, was wir damit meinen. Wenn Sie mehrere Aufgaben haben, die ungefähr die gleiche Priorität haben, macht es Sinn, sie in separate Funktionen zu unterteilen, um die Wartung, das Debugging und viele andere Gründe zu erleichtern.

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

Diese Art von Struktur hilft jedoch nicht bei der Blockierung des Main-Threads. Da alle fünf Aufgaben innerhalb einer Hauptfunktion ausgeführt werden, führt der Browser sie alle als eine einzige Aufgabe aus.

Um dies zu handhaben, neigen wir dazu, eine Funktion periodisch auszuführen, um den Code _dem Main-Thread zu überlassen_. Dies bedeutet, dass unser Code in mehrere Aufgaben aufgeteilt wird, zwischen deren Ausführung der Browser die Möglichkeit erhält, hochpriorisierte Aufgaben wie die Aktualisierung der Benutzeroberfläche zu bearbeiten. Ein gängiges Muster für diese Funktion verwendet [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), um die Ausführung in eine separate Aufgabe zu verschieben:

```js
function yield() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}
```

Dies kann in einem Task-Runner-Muster wie folgt verwendet werden, um an den Main-Thread zu übergeben, nachdem jede Aufgabe ausgeführt wurde:

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

Um dies weiter zu verbessern, können wir [`Scheduler.yield`](/de/docs/Web/API/Scheduler/yield) verwenden, wenn verfügbar, um diesem Code die Fortsetzung der Ausführung vor anderen weniger kritischen Aufgaben in der Warteschlange zu ermöglichen:

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
  - : Enthält die Methoden [`postTask()`](/de/docs/Web/API/Scheduler/postTask) und [`yield()`](/de/docs/Web/API/Scheduler/yield) zum Hinzufügen von priorisierten Aufgaben zur Zeitplanung.
    Eine Instanz dieser Schnittstelle ist auf den globalen Objekten [`Window`](/de/docs/Web/API/Window) oder [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) verfügbar (`globalThis.scheduler`).
- [`TaskController`](/de/docs/Web/API/TaskController)
  - : Unterstützt sowohl das Abbrechen einer Aufgabe als auch das Ändern ihrer Priorität.
- [`TaskSignal`](/de/docs/Web/API/TaskSignal)
  - : Ein Signalobjekt, das Ihnen erlaubt, eine Aufgabe abzubrechen und ihre Priorität zu ändern, falls erforderlich, unter Verwendung eines [`TaskController`](/de/docs/Web/API/TaskController)-Objekts.
- [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent)
  - : Die Schnittstelle für das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Event, das gesendet wird, wenn die Priorität einer Aufgabe geändert wird.

> [!NOTE]
> Wenn die [Aufgabenpriorität](#aufgabenprioritäten) nie geändert werden muss, können Sie einen [`AbortController`](/de/docs/Web/API/AbortController) und dessen zugehöriges [`AbortSignal`](/de/docs/Web/API/AbortSignal) anstelle von [`TaskController`](/de/docs/Web/API/TaskController) und [`TaskSignal`](/de/docs/Web/API/TaskSignal) verwenden.

### Erweiterungen anderer Schnittstellen

- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) und [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler)
  - : Diese Eigenschaften sind die Einstiegspunkte für die Verwendung der `Scheduler.postTask()`-Methode in einem Fenster- oder Worker-Bereich.

## Beispiele

Beachten Sie, dass die untenstehenden Beispiele `myLog()` verwenden, um in ein Textfeld zu schreiben.
Der Code für den Logbereich und die Methode ist im Allgemeinen ausgeblendet, um nicht von relevanterem Code abzulenken.

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

### Feature-Prüfung

Überprüfen Sie, ob das priorisierte Task-Scheduling unterstützt wird, indem Sie das Vorhandensein der `scheduler`-Eigenschaft im globalen Bereich testen.

Der untenstehende Code gibt "Feature: Supported" aus, wenn die API in diesem Browser unterstützt wird.

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

Aufgaben werden mit [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) gepostet, wobei im ersten Argument eine Callback-Funktion (Task) angegeben wird und ein optionales zweites Argument verwendet werden kann, um eine Aufgabenpriorität, ein Signal und/oder eine Verzögerung anzugeben.
Die Methode gibt ein {{jsxref("Promise")}} zurück, das entweder mit dem Rückgabewert der Callback-Funktion aufgelöst oder mit einem Abbruchfehler oder einem in der Funktion ausgelösten Fehler abgewiesen wird.

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

Da es ein Promise zurückgibt, kann [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) mit anderen Promises [verkettet](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises) werden.
Unten zeigen wir, wie man auf die Auflösung des Promises mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) wartet.
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

Die Methode kann auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) innerhalb einer [async-Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) verwendet werden.
Der folgende Code zeigt, wie Sie mit dieser Methode auf einen `user-blocking`-Task warten könnten.

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

In manchen Fällen müssen Sie möglicherweise überhaupt nicht auf die Fertigstellung warten.
Aus Gründen der Einfachheit protokollieren viele der hier gezeigten Beispiele einfach das Ergebnis, während die Aufgabe ausgeführt wird.

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

Das untenstehende Log zeigt die Ausgabe der drei oben genannten Aufgaben.
Beachten Sie, dass die Reihenfolge, in der sie ausgeführt werden, zuerst von der Priorität abhängt und dann von der Deklarationsreihenfolge.

{{EmbedLiveSample('Basic usage','400px','170px')}}

### Permanente Prioritäten

[Aufgabenprioritäten](#aufgabenprioritäten) können mithilfe des `priority`-Parameters im optionalen zweiten Argument festgelegt werden.
Prioritäten, die auf diese Weise festgelegt werden, sind [unveränderlich](#veränderbare_und_unveränderbare_aufgabenpriorität) (können nicht geändert werden).

Unten posten wir zwei Gruppen von drei Aufgaben, wobei jedes Mitglied in umgekehrter Prioritätsreihenfolge ist.
Die letzte Aufgabe hat die Standardpriorität.
Beim Ausführen protokolliert jede Aufgabe einfach die erwartete Reihenfolge (wir warten nicht auf das Ergebnis, da wir es nicht benötigen, um die Ausführungsreihenfolge zu zeigen).

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

Die untenstehende Ausgabe zeigt, dass die Aufgaben in Prioritätsreihenfolge und dann in Deklarationsreihenfolge ausgeführt werden.

{{EmbedLiveSample("Permanent priorities",'400px','170px')}}

### Ändern von Aufgabenprioritäten

[Aufgabenprioritäten](#aufgabenprioritäten) können auch ihren Anfangswert von einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) erhalten, das im optionalen zweiten Argument von `postTask()` übergeben wird.
Ist dies der Fall, kann die Priorität der Aufgabe [dann geändert werden](#veränderbare_und_unveränderbare_aufgabenpriorität), indem der Controller verwendet wird, der mit dem Signal verbunden ist.

> [!NOTE]
> Das Setzen und Ändern von Aufgabenprioritäten über ein Signal funktioniert nur, wenn das `options.priority`-Argument von `postTask()` nicht gesetzt ist und wenn `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) ist (und kein [`AbortSignal`](/de/docs/Web/API/AbortSignal)).

Der folgende Code zeigt zunächst, wie man einen [`TaskController`](/de/docs/Web/API/TaskController) erstellt, wobei die anfängliche Priorität seines Signals als `user-blocking` im [`TaskController()`](/de/docs/Web/API/TaskController/TaskController)-Konstruktor festgelegt wird.

Der Code verwendet dann `addEventListener()`, um einen Event-Listener zum Signal des Controllers hinzuzufügen (wir könnten alternativ die `TaskSignal.onprioritychange`-Eigenschaft verwenden, um einen Event-Handler hinzuzufügen).
Der Event-Handler verwendet [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) auf dem Event, um die ursprüngliche Priorität zu erhalten, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) auf dem Event-Ziel, um die neue/aktuelle Priorität zu erhalten.

Die Aufgabe wird dann gepostet, wobei das Signal übergeben wird, und dann ändern wir sofort die Priorität zu `background`, indem [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) auf dem Controller aufgerufen wird.

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

Der untenstehende Output zeigt, dass die Priorität erfolgreich von `user-blocking` auf `background` geändert wurde.
Beachten Sie, dass in diesem Fall die Priorität geändert wird, bevor die Aufgabe ausgeführt wird, sie könnte jedoch ebenso geändert werden, während die Aufgabe läuft.

{{EmbedLiveSample("Changing task priorities",'400px','130px')}}

### Abbrechen von Aufgaben

Aufgaben können sowohl mit [`TaskController`](/de/docs/Web/API/TaskController) als auch mit [`AbortController`](/de/docs/Web/API/AbortController) auf exakt die gleiche Weise abgebrochen werden.
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

Der untenstehende Code erstellt einen Controller und übergibt dessen Signal der Aufgabe.
Die Aufgabe wird dann sofort abgebrochen.
Dies führt dazu, dass das Promise mit einem `AbortError` abgelehnt wird, der im `catch`-Block abgefangen und protokolliert wird.
Beachten Sie, dass wir auch auf das [`abort`](/de/docs/Web/API/AbortSignal/abort_event)-Event hören könnten, das auf dem [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) ausgelöst wird und den Abbruch dort protokollieren könnten.

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

Das untenstehende Log zeigt die abgebrochene Aufgabe.

{{EmbedLiveSample("Aborting tasks",'400px','100px')}}

### Verzögerung von Aufgaben

Aufgaben können durch Angabe einer ganzzahligen Millisekunden-Anzahl im Parameter `options.delay` von `postTask()` verzögert werden.
Dies fügt die Aufgabe effektiv in die priorisierte Warteschlange mit einem Timeout ein, wie es mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) erstellt werden könnte.
Die `delay` ist die minimale Zeitspanne, bevor die Aufgabe dem Scheduler hinzugefügt wird; sie kann länger sein.

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

Der folgende Code zeigt zwei Aufgaben, die (als Pfeilfunktionen) mit einer Verzögerung hinzugefügt werden.

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
Beachten Sie, dass die zweite Zeichenfolge im Log nach etwa 2 Sekunden erscheint.

{{EmbedLiveSample("Delaying tasks",'400px','100px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Building a Faster Web Experience with the postTask Scheduler](https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91) auf dem Airbnb-Blog (2021)
- [Optimizing long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2022)
