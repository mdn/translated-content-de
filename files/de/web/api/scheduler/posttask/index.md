---
title: "Scheduler: postTask() Methode"
short-title: postTask()
slug: Web/API/Scheduler/postTask
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`postTask()`**-Methode der [`Scheduler`](/de/docs/Web/API/Scheduler)-Schnittstelle wird verwendet, um Aufgaben hinzuzufügen, die gemäß ihrer [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) [geplant](/de/docs/Web/API/Prioritized_Task_Scheduling_API) werden sollen.

Die Methode erlaubt es dem Nutzer, optional eine Mindestverzögerung anzugeben, bevor die Aufgabe ausgeführt wird, eine Priorität für die Aufgabe festzulegen und ein Signal zu verwenden, das die Anpassung der Aufgabenpriorität und/oder das Abbrechen der Aufgabe ermöglicht. Sie gibt ein Versprechen zurück, das mit dem Ergebnis der Aufgaben-Rückruffunktion erfüllt wird oder mit dem Abbruchgrund oder einem in der Aufgabe geworfenen Fehler abgelehnt wird.

Die Aufgabenpriorität kann [veränderbar oder unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) sein. Wenn sich die Priorität der Aufgabe niemals ändern muss, sollte sie über den Parameter `options.priority` festgelegt werden (jede über ein Signal festgelegte Priorität wird dann ignoriert). Es kann immer noch ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) (das keine Priorität hat) oder ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) an den Parameter `options.signal` übergeben werden, um die Aufgabe abzubrechen.

Wenn die Aufgabenpriorität möglicherweise geändert werden muss, darf der Parameter `options.priority` nicht gesetzt sein. Stattdessen sollte ein [`TaskController`](/de/docs/Web/API/TaskController) erstellt und sein [`TaskSignal`](/de/docs/Web/API/TaskSignal) an `options.signal` übergeben werden. Die Aufgabenpriorität wird aus der Signalpriorität initialisiert und kann später mit dem zum Signal gehörenden [`TaskController`](/de/docs/Web/API/TaskController) geändert werden.

Wenn keine Priorität festgelegt ist, wird die Aufgabenpriorität standardmäßig auf [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible) gesetzt.

Wenn eine Verzögerung angegeben ist und größer als 0 ist, wird die Ausführung der Aufgabe um mindestens so viele Millisekunden verzögert. Andernfalls wird die Aufgabe sofort zur Priorisierung eingeplant.

## Syntax

```js-nolint
postTask(callback)
postTask(callback, options)
```

### Parameter

- `callback`

  - : Eine Callback-Funktion, die die Aufgabe implementiert. Der Rückgabewert des Callbacks wird verwendet, um das von dieser Funktion zurückgegebene Versprechen zu erfüllen.

- `options` {{optional_inline}}

  - : Aufgabenoptionen, einschließlich:

    - `priority` {{optional_inline}}

      - : Die unveränderliche [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe. Eine der folgenden: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background). Wenn festgelegt, wird diese Priorität während der gesamten Lebensdauer der Aufgabe verwendet, und die Priorität, die am `signal` festgelegt wurde, wird ignoriert.

    - `signal` {{optional_inline}}

      - : Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal), das verwendet werden kann, um die Aufgabe abzubrechen (vom zugehörigen Controller aus).

        Wenn der Parameter `options.priority` gesetzt ist, kann die Aufgabenpriorität nicht geändert werden, und jede Priorität auf dem Signal wird ignoriert. Andernfalls, wenn das Signal ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) ist, wird seine Priorität verwendet, um die anfängliche Aufgabenpriorität festzulegen, und der Controller des Signals kann sie später verwenden, um die Aufgabenpriorität zu ändern.

    - `delay` {{optional_inline}}
      - : Die minimale Zeit nach der die Aufgabe der Planungswarteschlange hinzugefügt wird, in ganzen Millisekunden. Die tatsächliche Verzögerung kann höher sein als angegeben, wird jedoch nicht geringer sein. Die Standardverzögerung beträgt 0.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der `callback`-Funktion erfüllt wird oder mit dem Abbruchgrund des `signal` ([`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason)) abgelehnt werden kann. Das Versprechen kann auch mit einem von der Callback-Funktion während der Ausführung geworfenen Fehler abgelehnt werden.

## Beispiele

Die folgenden Beispiele sind leicht vereinfachte Versionen der Live-Beispiele, die in [Prioritized Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples) bereitgestellt werden.

### Feature-Prüfung

Überprüfen Sie, ob die priorisierte Aufgabenplanung unterstützt wird, indem Sie nach der `scheduler`-Eigenschaft im globalen Bereich suchen (wie [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) im Fensterbereich oder [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) im Arbeitsbereich).

Zum Beispiel wird der untenstehende Code "Feature: Supported" protokollieren, wenn die API in diesem Browser unterstützt wird.

```js
// Check that feature is supported
if ("scheduler" in globalThis) {
  console.log("Feature: Supported");
} else {
  console.error("Feature: NOT Supported");
}
```

### Grundlegende Verwendung

Aufgaben werden gepostet, indem im ersten Argument eine Callback-Funktion (Aufgabe) angegeben wird und ein optionales zweites Argument, das verwendet werden kann, um eine Aufgabenpriorität, ein Signal und/oder eine Verzögerung festzulegen. Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der Callback-Funktion erfüllt wird oder entweder mit einem Abbruchfehler oder einem in der Funktion geworfenen Fehler abgelehnt wird.

Da `postTask()` ein Versprechen zurückgibt, kann es [mit anderen Versprechen verkettet werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises). Unten zeigen wir, wie Sie darauf warten, dass das Versprechen mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) erfüllt wird oder mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) abgelehnt wird. Die Priorität ist nicht spezifiziert, daher wird die Standardpriorität `user-visible` verwendet.

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

Die Methode kann auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) innerhalb einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) verwendet werden. Der untenstehende Code zeigt, wie Sie diesen Ansatz verwenden könnten, um auf eine `user-blocking`-Aufgabe zu warten.

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

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können mit dem Parameter `priority` im optionalen zweiten Argument festgelegt werden. Prioritäten, die auf diese Weise festgelegt werden, können nicht geändert werden (sind [unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority)).

Unten posten wir zwei Gruppen von drei Aufgaben, jede in umgekehrter Reihenfolge der Priorität. Die letzte Aufgabe hat die Standardpriorität. Bei der Ausführung protokolliert jede Aufgabe einfach ihre erwartete Reihenfolge (wir warten nicht auf das Ergebnis, weil das nicht erforderlich ist, um die Ausführungsreihenfolge zu zeigen).

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

Das erwartete Ergebnis wird unten gezeigt: Aufgaben werden in Prioritätsreihenfolge und danach in Deklarationsreihenfolge ausgeführt.

```plain
usr-blk 1
usr-blk 2
usr-vis 1
usr-vis 2
usr-vis 3 (default)
bkg 1
bkg 2
```

### Ändern von Aufgabenprioritäten

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können auch ihren Anfangswert von einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) erhalten, das im optionalen zweiten Argument an `postTask()` übergeben wird. Wenn auf diese Weise festgelegt, kann die Priorität der Aufgabe [dann mit dem Controller, der mit dem Signal verbunden ist, geändert werden](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority).

> [!NOTE]
> Das Festlegen und Ändern von Aufgabenprioritäten mit einem Signal funktioniert nur, wenn das `options.priority` Argument für `postTask()` nicht gesetzt ist und wenn das `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) (und kein [`AbortSignal`](/de/docs/Web/API/AbortSignal)) ist.

Der untenstehende Code zeigt zunächst, wie ein [`TaskController`](/de/docs/Web/API/TaskController) erstellt wird, wobei die Anfangspriorität seines Signals im [`TaskController()` Konstruktor](/de/docs/Web/API/TaskController/TaskController) auf `user-blocking` eingestellt wird.

Wir verwenden dann `addEventListener()`, um einen Ereignis-Listener zum Signal des Controllers hinzuzufügen (wir könnten alternativ die Eigenschaft `TaskSignal.onprioritychange` verwenden, um einen Ereignishandler hinzuzufügen). Der Ereignishandler verwendet [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) am Ereignis, um die ursprüngliche Priorität zu erhalten und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) am Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

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

Schließlich wird die Aufgabe gepostet, das Signal wird übergeben, und dann ändern wir sofort die Priorität auf `background`, indem wir [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) am Controller aufrufen.

```js
// Post task using the controller's signal.
// The signal priority sets the initial priority of the task
scheduler.postTask(() => console.log("Task 1"), { signal: controller.signal });

// Change the priority to 'background' using the controller
controller.setPriority("background");
```

Das erwartete Ergebnis wird unten gezeigt. Beachten Sie, dass in diesem Fall die Priorität geändert wird, bevor die Aufgabe ausgeführt wird, sie könnte jedoch genauso gut geändert werden, während die Aufgabe ausgeführt wird.

```js
// Expected output
// Priority changed from user-blocking to background.
// Task 1
```

### Aufgaben abbrechen

Aufgaben können sowohl mit [`TaskController`](/de/docs/Web/API/TaskController) als auch [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden, und zwar genau auf die gleiche Weise. Der einzige Unterschied besteht darin, dass Sie [`TaskController`](/de/docs/Web/API/TaskController) verwenden müssen, wenn Sie die Aufgabenpriorität auch festlegen möchten.

Der untenstehende Code erstellt einen Controller und übergibt sein Signal an die Aufgabe. Die Aufgabe wird dann sofort abgebrochen. Dadurch wird das Versprechen mit einem `AbortError` abgelehnt, das im `catch`-Block erfasst und protokolliert wird. Beachten Sie, dass wir auch das auf dem [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) ausgelöste [`abort`-Ereignis](/de/docs/Web/API/AbortSignal/abort_event) abhören und den Abbruch dort protokollieren könnten.

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

Aufgaben können verzögert werden, indem die ganzzahlige Anzahl der Millisekunden im `options.delay` Parameter von `postTask()` angegeben wird. Dies fügt die Aufgabe effektiv mit einem Timeout zur priorisierten Warteschlange hinzu, wie es mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) erstellt werden könnte. Die `delay` ist die Mindestzeit, bevor die Aufgabe dem Scheduler hinzugefügt wird; sie könnte auch länger sein.

Der untenstehende Code zeigt zwei Aufgaben, die mit einer Verzögerung hinzugefügt werden (als Pfeilfunktionen).

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
