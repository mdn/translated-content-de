---
title: "Scheduler: postTask() Methode"
short-title: postTask()
slug: Web/API/Scheduler/postTask
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`postTask()`**-Methode der [`Scheduler`](/de/docs/Web/API/Scheduler)-Schnittstelle wird verwendet, um Aufgaben gemäß ihrer [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) zu [planen](/de/docs/Web/API/Prioritized_Task_Scheduling_API).

Die Methode ermöglicht es den Benutzern, optional eine Mindestverzögerung anzugeben, bevor die Aufgabe ausgeführt wird, eine Priorität für die Aufgabe festzulegen und ein Signal zu verwenden, um die Aufgabenpriorität zu ändern und/oder die Aufgabe abzubrechen. Sie gibt ein Promise zurück, das mit dem Ergebnis der Aufgabenrückruffunktion erfüllt oder mit dem Abbruchgrund oder einem in der Aufgabe ausgelösten Fehler abgelehnt wird.

Die Aufgabenpriorität kann [veränderlich oder unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) sein. Wenn die Aufgabenpriorität niemals geändert werden muss, sollte sie über den Parameter `options.priority` festgelegt werden (jede durch ein Signal festgelegte Priorität wird dann ignoriert). Sie können dennoch ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) (das keine Priorität hat) oder [`TaskSignal`](/de/docs/Web/API/TaskSignal) an den Parameter `options.signal` übergeben, um die Aufgabe abzubrechen.

Wenn die Aufgabenpriorität möglicherweise geändert werden muss, darf der Parameter `options.priority` nicht gesetzt werden. Stattdessen sollte ein [`TaskController`](/de/docs/Web/API/TaskController) erstellt und dessen [`TaskSignal`](/de/docs/Web/API/TaskSignal) an `options.signal` übergeben werden. Die Aufgabenpriorität wird aus der Signalpriorität initialisiert und kann später mit dem mit dem Signal verbundenen [`TaskController`](/de/docs/Web/API/TaskController) geändert werden.

Wenn keine Priorität festgelegt ist, wird die Aufgabenpriorität standardmäßig auf [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible) gesetzt.

Wenn eine Verzögerung angegeben und größer als 0 ist, wird die Ausführung der Aufgabe um mindestens diese Anzahl von Millisekunden verzögert. Andernfalls wird die Aufgabe sofort zur Priorisierung geplant.

## Syntax

```js-nolint
postTask(callback)
postTask(callback, options)
```

### Parameter

- `callback`

  - : Eine Rückruffunktion, die die Aufgabe implementiert. Der Rückgabewert des Rückrufs wird verwendet, um das Promise zu erfüllen, das von dieser Funktion zurückgegeben wird.

- `options` {{optional_inline}}

  - : Aufgabenoptionen, einschließlich:

    - `priority` {{optional_inline}}

      - : Die unveränderliche [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe.
        Eine der folgenden: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background).
        Wenn gesetzt, wird diese Priorität für die gesamte Lebensdauer der Aufgabe verwendet und die bei `signal` gesetzte Priorität ignoriert.

    - `signal` {{optional_inline}}

      - : Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal), das verwendet werden kann, um die Aufgabe (von ihrem zugehörigen Controller aus) abzubrechen.

        Wenn der Parameter `options.priority` gesetzt ist, kann die Aufgabenpriorität nicht geändert werden, und jede Priorität auf dem Signal wird ignoriert.
        Andernfalls, wenn das Signal ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) ist, wird seine Priorität verwendet, um die anfängliche Aufgabenpriorität festzulegen, und der Controller des Signals kann es später verwenden, um die Aufgabenpriorität zu ändern.

    - `delay` {{optional_inline}}
      - : Die Mindestzeit, nach der die Aufgabe der Planerwarteschlange hinzugefügt wird, in ganzen Millisekunden.
        Die tatsächliche Verzögerung kann höher als angegeben sein, aber nicht weniger.
        Die Standardverzögerung beträgt 0.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der `callback`-Funktion erfüllt wird oder mit dem Abbruchgrund des `signal` ([`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason)) abgelehnt werden kann.
Das Promise kann auch mit einem Fehler abgelehnt werden, der während der Ausführung des Rückrufs ausgelöst wird.

## Beispiele

Die folgenden Beispiele sind leicht vereinfachte Versionen der Live-Beispiele, die unter [Prioritized Task Scheduling API > Examples](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples) bereitgestellt werden.

### Feature-Überprüfung

Prüfen Sie, ob die priorisierte Aufgabenplanung unterstützt wird, indem Sie das `scheduler`-Eigenschaft im globalen Scope testen (wie [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) im Fenster-Scope oder [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) im Worker-Scope).

Zum Beispiel protokolliert der folgende Code "Feature: Supported", wenn die API in diesem Browser unterstützt wird.

```js
// Check that feature is supported
if ("scheduler" in globalThis) {
  console.log("Feature: Supported");
} else {
  console.error("Feature: NOT Supported");
}
```

### Grundlegende Verwendung

Aufgaben werden gepostet, indem im ersten Argument eine Rückruffunktion (Aufgabe) und ein optionales zweites Argument angegeben wird, das zum Festlegen einer Aufgabenpriorität, eines Signals und/oder einer Verzögerung verwendet werden kann.
Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der Rückruffunktion erfüllt wird oder mit einem Abbruchfehler oder einem in der Funktion ausgelösten Fehler abgelehnt wird.

Da sie ein Promise zurückgibt, kann `postTask()` [mit anderen Promises verkettet](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises) werden.
Unten zeigen wir, wie man auf die Erfüllung des Promises mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) oder die Ablehnung mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) wartet.
Die Priorität ist nicht angegeben, daher wird die Standardpriorität `user-visible` verwendet.

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

Die Methode kann auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) in einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) verwendet werden.
Der folgende Code zeigt, wie Sie diesen Ansatz verwenden können, um auf eine `user-blocking`-Aufgabe zu warten.

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

### Dauerhafte Prioritäten

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können mit dem `priority`-Parameter im optionalen zweiten Argument festgelegt werden.
Prioritäten, die auf diese Weise gesetzt werden, können nicht geändert werden (sind [unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority)).

Unten posten wir zwei Gruppen von drei Aufgaben, jede in umgekehrter Reihenfolge ihrer Priorität.
Die letzte Aufgabe hat die Standardpriorität.
Bei Ausführung protokolliert jede Aufgabe einfach ihre erwartete Reihenfolge (wir warten nicht auf das Ergebnis, da wir dies nicht benötigen, um die Ausführungsreihenfolge zu zeigen).

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

Die erwartete Ausgabe wird unten gezeigt: Aufgaben werden in Prioritätsreihenfolge und dann in Deklarationsreihenfolge ausgeführt.

```plain
usr-blk 1
usr-blk 2
usr-vis 1
usr-vis 2
usr-vis 3 (default)
bkg 1
bkg 2
```

### Änderung der Aufgabenprioritäten

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können auch ihren Anfangswert von einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) erhalten, das im optionalen zweiten Argument an `postTask()` übergeben wird.
Wenn auf diese Weise festgelegt, kann die Priorität der Aufgabe [dann geändert werden](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) durch den Controller, der mit dem Signal verbunden ist.

> [!NOTE]
> Das Setzen und Ändern von Aufgabenprioritäten mithilfe eines Signals funktioniert nur, wenn der `options.priority`-Parameter an `postTask()` nicht gesetzt ist und wenn das `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) (und kein [`AbortSignal`](/de/docs/Web/API/AbortSignal)) ist.

Der folgende Code zeigt zunächst, wie ein [`TaskController`](/de/docs/Web/API/TaskController) erstellt wird, wobei die ursprüngliche Priorität seines Signals im [`TaskController()`-Konstruktor](/de/docs/Web/API/TaskController/TaskController) auf `user-blocking` gesetzt wird.

Wir verwenden dann `addEventListener()`, um einen Ereignis-Listener am Signal des Controllers hinzuzufügen (alternativ könnten wir die `TaskSignal.onprioritychange`-Eigenschaft verwenden, um einen Ereignis-Handler hinzuzufügen).
Der Ereignis-Handler verwendet [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) auf dem Ereignis, um die ursprüngliche Priorität zu erhalten, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) auf dem Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

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

Schließlich wird die Aufgabe gepostet, wobei das Signal übergeben wird, und dann ändern wir sofort die Priorität auf `background`, indem wir [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) auf dem Controller aufrufen.

```js
// Post task using the controller's signal.
// The signal priority sets the initial priority of the task
scheduler.postTask(() => console.log("Task 1"), { signal: controller.signal });

// Change the priority to 'background' using the controller
controller.setPriority("background");
```

Die erwartete Ausgabe wird unten gezeigt.
Beachten Sie, dass in diesem Fall die Priorität geändert wird, bevor die Aufgabe ausgeführt wird, aber sie hätte genauso gut geändert werden können, während die Aufgabe lief.

```js
// Expected output
// Priority changed from user-blocking to background.
// Task 1
```

### Aufgabenabbruch

Aufgaben können mit entweder [`TaskController`](/de/docs/Web/API/TaskController) und [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden, auf genau die gleiche Weise.
Der einzige Unterschied besteht darin, dass Sie [`TaskController`](/de/docs/Web/API/TaskController) verwenden müssen, wenn Sie auch die Aufgabenpriorität festlegen möchten.

Der folgende Code erstellt einen Controller und übergibt dessen Signal an die Aufgabe.
Die Aufgabe wird dann sofort abgebrochen.
Dies führt dazu, dass das Promise mit einem `AbortError` abgelehnt wird, der im `catch`-Block abgefangen und protokolliert wird.
Beachten Sie, dass wir auch das [`abort`-Ereignis](/de/docs/Web/API/AbortSignal/abort_event) abhören könnten, das am [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) ausgelöst wird, und den Abbruch dort protokollieren könnten.

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

### Verzögerte Aufgaben

Aufgaben können verzögert werden, indem eine ganze Zahl von Millisekunden im `options.delay`-Parameter an `postTask()` angegeben wird.
Dies fügt die Aufgabe effektiv der priorisierten Warteschlange in einem Timeout hinzu, wie es durch [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) erstellt werden könnte.
Die `delay` ist die Mindestzeit, bevor die Aufgabe dem Planer hinzugefügt wird; sie kann länger sein.

Der folgende Code zeigt zwei Aufgaben (als Pfeilfunktionen) mit einer Verzögerung hinzugefügt.

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
