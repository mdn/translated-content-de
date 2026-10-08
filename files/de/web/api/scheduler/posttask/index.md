---
title: "Scheduler: postTask()-Methode"
short-title: postTask()
slug: Web/API/Scheduler/postTask
l10n:
  sourceCommit: 8b77a013c518ef1b62534a8446a60732d582a24b
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`postTask()`**-Methode der [`Scheduler`](/de/docs/Web/API/Scheduler)-Schnittstelle fügt Aufgaben hinzu, die entsprechend ihrer [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) [eingeplant](/de/docs/Web/API/Prioritized_Task_Scheduling_API) werden.

Mit der Methode können Sie optional eine Mindestverzögerung vor der Ausführung der Aufgabe, eine Priorität und ein Signal angeben, mit dem sich die Priorität ändern und/oder die Aufgabe abbrechen lässt.
Sie gibt ein Promise zurück, das mit dem Ergebnis der Callback-Funktion der Aufgabe erfüllt oder mit dem Abbruchgrund beziehungsweise einem in der Aufgabe ausgelösten Fehler zurückgewiesen wird.

Die Priorität einer Aufgabe kann [veränderlich oder unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) sein.
Wenn sich die Priorität nie ändern muss, sollte sie über den Parameter `options.priority` festgelegt werden. Eine über ein Signal festgelegte Priorität wird dann ignoriert.
Sie können dennoch ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) (das keine Priorität hat) oder ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) an `options.signal` übergeben, um die Aufgabe abbrechen zu können.

Wenn die Priorität möglicherweise geändert werden muss, darf der Parameter `options.priority` nicht gesetzt werden.
Erstellen Sie stattdessen einen [`TaskController`](/de/docs/Web/API/TaskController) und übergeben Sie dessen [`TaskSignal`](/de/docs/Web/API/TaskSignal) an `options.signal`.
Die Priorität der Aufgabe wird mit der Priorität des Signals initialisiert und kann später über den zugehörigen [`TaskController`](/de/docs/Web/API/TaskController) geändert werden.

Wird keine Priorität festgelegt, verwendet die Aufgabe standardmäßig [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible).

Wenn eine Verzögerung angegeben wird, die größer als 0 ist, verzögert sich die Ausführung der Aufgabe um mindestens die angegebene Anzahl von Millisekunden.
Andernfalls wird die Aufgabe sofort zur Priorisierung eingeplant.

## Syntax

```js-nolint
postTask(callback)
postTask(callback, options)
```

### Parameter

- `callback`
  - : Eine Callback-Funktion, die die Aufgabe implementiert.
    Der Rückgabewert des Callbacks wird verwendet, um das von dieser Methode zurückgegebene Promise zu erfüllen.

- `options` {{optional_inline}}
  - : Optionen für die Aufgabe, darunter:
    - `priority` {{optional_inline}}
      - : Die unveränderliche [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe.
        Einer der folgenden Werte: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background).
        Ist dieser Parameter gesetzt, gilt die Priorität für die gesamte Lebensdauer der Aufgabe; eine über `signal` festgelegte Priorität wird ignoriert.

    - `signal` {{optional_inline}}
      - : Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal), mit dem die Aufgabe über den zugehörigen Controller abgebrochen werden kann.

        Wenn der Parameter `options.priority` gesetzt ist, kann die Priorität der Aufgabe nicht geändert werden; eine im Signal festgelegte Priorität wird ignoriert.
        Andernfalls wird, sofern das Signal ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) ist, dessen Priorität als anfängliche Priorität der Aufgabe verwendet. Der zugehörige Controller kann die Priorität später ändern.

    - `delay` {{optional_inline}}
      - : Die Mindestzeit in ganzen Millisekunden, nach der die Aufgabe zur Warteschlange des Schedulers hinzugefügt wird.
        Die tatsächliche Verzögerung kann länger sein als angegeben, aber nicht kürzer.
        Der Standardwert ist 0.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der `callback`-Funktion erfüllt oder mit dem Abbruchgrund des `signal` ([`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason)) zurückgewiesen werden kann.
Das Promise kann auch mit einem Fehler zurückgewiesen werden, den der Callback während der Ausführung auslöst.

## Beispiele

Die folgenden Beispiele sind leicht vereinfachte Versionen der interaktiven Beispiele unter [Prioritized Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

### Unterstützung prüfen

Prüfen Sie, ob priorisierte Aufgabenplanung unterstützt wird, indem Sie im globalen Gültigkeitsbereich nach der Eigenschaft `scheduler` suchen, etwa nach [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) im Gültigkeitsbereich eines Fensters oder [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) im Gültigkeitsbereich eines Workers.

Der folgende Code gibt beispielsweise „Feature: Supported“ aus, wenn der Browser die API unterstützt.

```js
// Check that feature is supported
if ("scheduler" in globalThis) {
  console.log("Feature: Supported");
} else {
  console.error("Feature: NOT Supported");
}
```

### Grundlegende Verwendung

Zum Einplanen einer Aufgabe geben Sie als erstes Argument eine Callback-Funktion (die Aufgabe) an. Mit einem optionalen zweiten Argument können Sie eine Priorität, ein Signal und/oder eine Verzögerung festlegen.
Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der Callback-Funktion erfüllt oder mit einem Abbruchfehler beziehungsweise einem in der Funktion ausgelösten Fehler zurückgewiesen wird.

Da `postTask()` ein Promise zurückgibt, kann es [mit anderen Promises verkettet](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises) werden.
Im Folgenden zeigen wir, wie Sie mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) auf die Erfüllung des Promise reagieren und mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) eine Zurückweisung behandeln.
Da keine Priorität angegeben wird, gilt die Standardpriorität `user-visible`.

```js
// A function that defines a task
function myTask() {
  return "Task 1: user-visible";
}

// Post task with default priority: 'user-visible' (no other options)
// When the task resolves, Promise.then() logs the result.
scheduler
  .postTask(myTask, { signal: abortTaskController.signal })
  .then((taskResult) => console.log(`${taskResult}`)) // Log resolved value
  .catch((error) => console.error("Error:", error)); // Log error or abort
```

Die Methode kann innerhalb einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) verwendet werden.
Der folgende Code zeigt, wie Sie damit auf eine Aufgabe mit der Priorität `user-blocking` warten können.

```js
function myTask2() {
  return "Task 2: user-blocking";
}

async function runTask2() {
  const result = await scheduler.postTask(myTask2, {
    priority: "user-blocking",
  });
  console.log(result); // 'Task 2: user-blocking'.
}
runTask2();
```

### Dauerhaft festgelegte Prioritäten

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können über den Parameter `priority` im optionalen zweiten Argument festgelegt werden.
Auf diese Weise festgelegte Prioritäten können nicht geändert werden (sie sind [unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority)).

Im Folgenden planen wir zwei Gruppen mit jeweils drei Aufgaben ein, deren Reihenfolge jeweils der Prioritätsreihenfolge entgegengesetzt ist.
Die letzte Aufgabe hat die Standardpriorität.
Bei der Ausführung gibt jede Aufgabe lediglich ihre erwartete Position in der Reihenfolge aus. Auf die Ergebnisse warten wir nicht, da dies zur Veranschaulichung der Ausführungsreihenfolge nicht nötig ist.

```js
// three tasks, in reverse order of priority
scheduler.postTask(() => console.log("bkg 1"), { priority: "background" });
scheduler.postTask(() => console.log("usr-vis 1"), {
  priority: "user-visible",
});
scheduler.postTask(() => console.log("usr-blk 1"), {
  priority: "user-blocking",
});

// three more tasks, in reverse order of priority
scheduler.postTask(() => console.log("bkg 2"), { priority: "background" });
scheduler.postTask(() => console.log("usr-vis 2"), {
  priority: "user-visible",
});
scheduler.postTask(() => console.log("usr-blk 2"), {
  priority: "user-blocking",
});

// Task with default priority: user-visible
scheduler.postTask(() => {
  console.log("usr-vis 3 (default)");
});
```

Die erwartete Ausgabe ist unten zu sehen: Die Aufgaben werden zuerst nach Priorität und dann in der Reihenfolge ihrer Deklaration ausgeführt.

```plain
usr-blk 1
usr-blk 2
usr-vis 1
usr-vis 2
usr-vis 3 (default)
bkg 1
bkg 2
```

### Aufgabenprioritäten ändern

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können ihren Anfangswert auch von einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) erhalten, das im optionalen zweiten Argument an `postTask()` übergeben wird.
Wird die Priorität auf diese Weise festgelegt, [kann sie anschließend geändert werden](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority), indem der zum Signal gehörende Controller verwendet wird.

> [!NOTE]
> Das Festlegen und Ändern der Aufgabenpriorität über ein Signal funktioniert nur, wenn das Argument `options.priority` von `postTask()` nicht gesetzt ist und `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) (und kein [`AbortSignal`](/de/docs/Web/API/AbortSignal)) ist.

Der folgende Code zeigt zunächst, wie Sie einen [`TaskController`](/de/docs/Web/API/TaskController) erstellen und die anfängliche Priorität seines Signals im [`TaskController()`-Konstruktor](/de/docs/Web/API/TaskController/TaskController) auf `user-blocking` setzen.

Anschließend fügen wir dem Signal des Controllers mit `addEventListener()` einen Event-Listener hinzu. Alternativ könnten wir mit der Eigenschaft `TaskSignal.onprioritychange` einen Event-Handler hinzufügen.
Der Event-Handler liest über [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) am Event die bisherige Priorität und über [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) am Event-Ziel die neue beziehungsweise aktuelle Priorität aus.

```js
// Create a TaskController, setting its signal priority to 'user-blocking'
const controller = new TaskController({ priority: "user-blocking" });

// Listen for 'prioritychange' events on the controller's signal.
controller.signal.addEventListener("prioritychange", (event) => {
  const previousPriority = event.previousPriority;
  const newPriority = event.target.priority;
  console.log(`Priority changed from ${previousPriority} to ${newPriority}.`);
});
```

Schließlich planen wir die Aufgabe unter Übergabe des Signals ein und ändern die Priorität unmittelbar danach auf `background`, indem wir [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) am Controller aufrufen.

```js
// Post task using the controller's signal.
// The signal priority sets the initial priority of the task
scheduler.postTask(() => console.log("Task 1"), { signal: controller.signal });

// Change the priority to 'background' using the controller
controller.setPriority("background");
```

Die erwartete Ausgabe ist unten zu sehen.
Beachten Sie, dass die Priorität in diesem Fall vor der Ausführung der Aufgabe geändert wird. Sie könnte ebenso während der Ausführung geändert werden.

```js
// Expected output
// Priority changed from user-blocking to background.
// Task 1
```

### Aufgaben abbrechen

Aufgaben können mit [`TaskController`](/de/docs/Web/API/TaskController) oder [`AbortController`](/de/docs/Web/API/AbortController) auf genau dieselbe Weise abgebrochen werden.
Der einzige Unterschied besteht darin, dass Sie [`TaskController`](/de/docs/Web/API/TaskController) verwenden müssen, wenn Sie auch die Aufgabenpriorität festlegen möchten.

Der folgende Code erstellt einen Controller und übergibt dessen Signal an die Aufgabe.
Die Aufgabe wird anschließend sofort abgebrochen.
Dadurch wird das Promise mit einem `AbortError` zurückgewiesen, der im `catch`-Block abgefangen und ausgegeben wird.
Alternativ könnten wir auf das [`abort`-Event](/de/docs/Web/API/AbortSignal/abort_event) warten, das auf dem [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) ausgelöst wird, und den Abbruch dort ausgeben.

```js
// Declare a TaskController with default priority
const abortTaskController = new TaskController();
// Post task passing the controller's signal
scheduler
  .postTask(() => console.log("Task executing"), {
    signal: abortTaskController.signal,
  })
  .then((taskResult) => console.log(`${taskResult}`)) // This won't run!
  .catch((error) => console.error("Error:", error)); // Log the error

// Abort the task
abortTaskController.abort();
```

### Aufgaben verzögern

Aufgaben können verzögert werden, indem Sie für den Parameter `options.delay` von `postTask()` eine ganzzahlige Anzahl von Millisekunden angeben.
Dadurch wird die Aufgabe nach Ablauf einer Wartezeit zur priorisierten Warteschlange hinzugefügt, ähnlich wie bei Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).
`delay` gibt die Mindestzeit an, bevor die Aufgabe zum Scheduler hinzugefügt wird; tatsächlich kann es länger dauern.

Der folgende Code zeigt zwei Aufgaben, die als Arrow-Funktionen mit einer Verzögerung hinzugefügt werden.

```js
// Post task as arrow function with delay of 2 seconds
scheduler
  .postTask(() => "Task delayed by 2000ms", { delay: 2000 })
  .then((taskResult) => console.log(`${taskResult}`));
scheduler
  .postTask(() => "Next task should complete in about 2000ms", { delay: 1 })
  .then((taskResult) => console.log(`${taskResult}`));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
