---
title: "Scheduler: postTask() Methode"
short-title: postTask()
slug: Web/API/Scheduler/postTask
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`postTask()`** Methode des [`Scheduler`](/de/docs/Web/API/Scheduler)-Interfaces wird verwendet, um Aufgaben gemäß ihrer [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) zu [planen](/de/docs/Web/API/Prioritized_Task_Scheduling_API).

Mit der Methode können Benutzer optional eine Mindestverzögerung angeben, bevor die Aufgabe ausgeführt wird, eine Priorität für die Aufgabe festlegen und ein Signal verwenden, um die Aufgabenpriorität zu ändern und/oder die Aufgabe abzubrechen. Sie gibt ein Promise zurück, das mit dem Ergebnis der Aufgaben-Rückruffunktion erfüllt oder mit dem Abbruchgrund oder einem in der Aufgabe ausgelösten Fehler abgelehnt wird.

Die Aufgabenpriorität kann [veränderbar oder unveränderbar](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) sein. Wenn die Aufgabenpriorität nie geändert werden muss, sollte sie über den Parameter `options.priority` festgelegt werden (jede über ein Signal festgelegte Priorität wird dann ignoriert). Sie können dennoch ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) (das keine Priorität hat) oder ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) an den `options.signal` Parameter übergeben, um die Aufgabe abzubrechen.

Wenn die Aufgabenpriorität geändert werden muss, darf der Parameter `options.priority` nicht festgelegt werden. Stattdessen sollte ein [`TaskController`](/de/docs/Web/API/TaskController) erstellt werden und dessen [`TaskSignal`](/de/docs/Web/API/TaskSignal) sollte an `options.signal` übergeben werden. Die Aufgabenpriorität wird von der Signalpriorität initialisiert und kann später mit dem zugehörigen [`TaskController`](/de/docs/Web/API/TaskController) geändert werden.

Wenn keine Priorität festgelegt ist, dann hat die Aufgabenpriorität standardmäßig [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible).

Wenn eine Verzögerung angegeben ist und größer als 0 ist, wird die Ausführung der Aufgabe um mindestens diese Anzahl von Millisekunden verzögert. Andernfalls wird die Aufgabe sofort zur Priorisierung geplant.

## Syntax

```js-nolint
postTask(callback)
postTask(callback, options)
```

### Parameter

- `callback`
  - : Eine Rückruffunktion, die die Aufgabe implementiert. Der Rückgabewert des Rückrufs wird verwendet, um das von dieser Funktion zurückgegebene Promise zu erfüllen.

- `options` {{optional_inline}}
  - : Aufgabenoptionen, einschließlich:
    - `priority` {{optional_inline}}
      - : Die unveränderbare [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe. Eine der folgenden Optionen: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background). Wenn festgelegt, wird diese Priorität für die Lebensdauer der Aufgabe verwendet und die Priorität, die am `signal` festgelegt ist, wird ignoriert.

    - `signal` {{optional_inline}}
      - : Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal), das verwendet werden kann, um die Aufgabe abzubrechen (von dessen zugehörigem Controller).

        Wenn der `options.priority` Parameter festgelegt ist, kann die Aufgabenpriorität nicht geändert werden, und jede Priorität auf dem Signal wird ignoriert. Andernfalls, wenn das Signal ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) ist, wird seine Priorität verwendet, um die anfängliche Aufgabenpriorität festzulegen, und der Controller des Signals kann sie später verwenden, um die Aufgabenpriorität zu ändern.

    - `delay` {{optional_inline}}
      - : Die minimale Zeit, nach der die Aufgabe der Warteschlange des Planners hinzugefügt wird, in ganzen Millisekunden. Die tatsächliche Verzögerung kann höher als angegeben sein, darf aber nicht geringer sein. Die Standardverzögerung ist 0.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der `callback` Funktion erfüllt wird, oder das mit dem Abbruchgrund des `signal`s ([`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason)) abgelehnt werden kann. Das Promise kann auch mit einem während der Ausführung durch den Rückruf ausgelösten Fehler abgelehnt werden.

## Beispiele

Die folgenden Beispiele sind leicht vereinfachte Versionen der Live-Beispiele, die in den [Prioritized Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples) bereitgestellt werden.

### Feature-Überprüfung

Prüfen Sie, ob die priorisierte Aufgabenplanung unterstützt wird, indem Sie die `scheduler` Eigenschaft im globalen Bereich (wie [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) im Fensterbereich oder [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) im Workerbereich) testen.

Zum Beispiel protokolliert der untenstehende Code "Feature: Supported", wenn die API in diesem Browser unterstützt wird.

```js
// Check that feature is supported
if ("scheduler" in globalThis) {
  console.log("Feature: Supported");
} else {
  console.error("Feature: NOT Supported");
}
```

### Grundlegende Nutzung

Aufgaben werden gepostet, indem eine Rückruffunktion (Aufgabe) im ersten Argument angegeben wird, und ein optionales zweites Argument, das verwendet werden kann, um eine Aufgabenpriorität, ein Signal und/oder eine Verzögerung anzugeben. Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der Rückruffunktion erfüllt wird oder mit einem Abbruchfehler oder einem in der Funktion ausgelösten Fehler abgelehnt wird.

Da sie ein Promise zurückgibt, kann `postTask()` [mit anderen Promises verkettet werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises). Unten zeigen wir, wie Sie auf die Erfüllung des Promises mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) warten oder es bei Ablehnung mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) behandeln können. Die Priorität ist nicht festgelegt, daher wird die Standardpriorität `user-visible` verwendet.

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

Die Methode kann auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) innerhalb einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) verwendet werden. Der Code unten zeigt, wie Sie diesen Ansatz nutzen könnten, um auf eine `user-blocking` Aufgabe zu warten.

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

### Permanente Prioritäten

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können über den `priority` Parameter im optionalen zweiten Argument festgelegt werden. Prioritäten, die auf diese Weise festgelegt werden, können nicht geändert werden (sind [unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority)).

Unten posten wir zwei Gruppen von drei Aufgaben, jedes Mitglied in umgekehrter Prioritätsreihenfolge. Die endgültige Aufgabe hat die Standardpriorität. Beim Ausführen protokolliert jede Aufgabe einfach die erwartete Reihenfolge (wir warten nicht auf das Ergebnis, da wir dies nicht müssen, um die Ausführungsreihenfolge zu zeigen).

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

Die erwartete Ausgabe wird unten angezeigt: Aufgaben werden in Prioritätsreihenfolge und dann in Deklarationsreihenfolge ausgeführt.

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

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können auch ihren Anfangswert aus einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) übernehmen, das an `postTask()` im optionalen zweiten Argument übergeben wird. Wenn sie auf diese Weise festgelegt werden, kann die Priorität der Aufgabe [dann geändert werden](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority), indem der Controller verwendet wird, der mit dem Signal verbunden ist.

> [!NOTE]
> Das Festlegen und Ändern von Aufgabenprioritäten mit einem Signal funktioniert nur, wenn das `options.priority` Argument für `postTask()` nicht festgelegt ist und `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) ist (und kein [`AbortSignal`](/de/docs/Web/API/AbortSignal)).

Der Code unten zeigt zuerst, wie ein [`TaskController`](/de/docs/Web/API/TaskController) erstellt wird, wobei die anfängliche Priorität seines Signals im [`TaskController()` Konstruktor](/de/docs/Web/API/TaskController/TaskController) auf `user-blocking` gesetzt wird.

Wir verwenden dann `addEventListener()`, um einen Ereignislistener zum Signal des Controllers hinzuzufügen (wir könnten alternativ die `TaskSignal.onprioritychange` Eigenschaft verwenden, um einen Ereignishandler hinzuzufügen). Der Ereignishandler verwendet [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) auf dem Ereignis, um die ursprüngliche Priorität zu erhalten und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) auf der Ereignisquelle, um die neue/aktuelle Priorität zu erhalten.

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

Schließlich wird die Aufgabe gepostet, indem das Signal übergeben wird, und dann ändern wir sofort die Priorität auf `background`, indem wir [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) auf dem Controller aufrufen.

```js
// Post task using the controller's signal.
// The signal priority sets the initial priority of the task
scheduler.postTask(() => console.log("Task 1"), { signal: controller.signal });

// Change the priority to 'background' using the controller
controller.setPriority("background");
```

Die erwartete Ausgabe wird unten angezeigt. Beachten Sie, dass in diesem Fall die Priorität geändert wird, bevor die Aufgabe ausgeführt wird, aber sie könnte ebenso während der Ausführung der Aufgabe geändert werden.

```js
// Expected output
// Priority changed from user-blocking to background.
// Task 1
```

### Abbrechen von Aufgaben

Aufgaben können entweder mit [`TaskController`](/de/docs/Web/API/TaskController) und [`AbortController`](/de/docs/Web/API/AbortController) in genau gleicher Weise abgebrochen werden. Der einzige Unterschied besteht darin, dass Sie [`TaskController`](/de/docs/Web/API/TaskController) verwenden müssen, wenn Sie auch die Aufgabenpriorität festlegen möchten.

Der Code unten erstellt einen Controller und gibt sein Signal an die Aufgabe weiter. Die Aufgabe wird dann sofort abgebrochen. Dies führt dazu, dass das Promise mit einem `AbortError` zurückgewiesen wird, der im `catch` Block erfasst und protokolliert wird. Beachten Sie, dass wir alternativ auch auf das [`abort`-Ereignis](/de/docs/Web/API/AbortSignal/abort_event) hören könnten, das auf dem [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) ausgelöst wird, und den Abbruch dort protokollieren könnten.

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

### Verzögern von Aufgaben

Aufgaben können verzögert werden, indem eine ganze Zahl von Millisekunden im `options.delay` Parameter von `postTask()` angegeben wird. Dies fügt die Aufgabe effektiv mit einem Timeout zur priorisierten Warteschlange hinzu, wie sie durch [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) erstellt werden könnte. Die `delay` ist die Mindestzeit, bevor die Aufgabe dem Planer hinzugefügt wird; sie kann länger sein.

Der Code unten zeigt zwei hinzugefügte Aufgaben (als Pfeilfunktionen) mit einer Verzögerung.

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
