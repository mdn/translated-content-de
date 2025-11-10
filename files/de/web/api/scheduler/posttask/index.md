---
title: "Scheduler: postTask() Methode"
short-title: postTask()
slug: Web/API/Scheduler/postTask
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`postTask()`**-Methode des [`Scheduler`](/de/docs/Web/API/Scheduler)-Interfaces wird verwendet, um Aufgaben gemäß ihrer [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) zum [Planen](/de/docs/Web/API/Prioritized_Task_Scheduling_API) hinzuzufügen.

Diese Methode ermöglicht es den Nutzern optional anzugeben, wie lange mindestens gewartet werden soll, bevor die Aufgabe ausgeführt wird, eine Priorität für die Aufgabe festzulegen und ein Signal anzugeben, das zur Modifikation der Aufgabenpriorität und/oder zum Abbrechen der Aufgabe verwendet werden kann.
Sie gibt ein Promise zurück, das mit dem Ergebnis der Aufgabenrückruffunktion aufgelöst oder mit dem Abbruchgrund oder einem in der Aufgabe geworfenen Fehler abgelehnt wird.

Die Aufgabenpriorität kann [änderbar oder unveränderbar](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) sein.
Wenn die Aufgabenpriorität sich niemals ändern soll, sollte sie über den Parameter `options.priority` festgelegt werden (dann wird jede Priorität, die über ein Signal gesetzt wurde, ignoriert).
Es ist weiterhin möglich, ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) (das keine Priorität hat) oder ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) an den Parameter `options.signal` zu übergeben, um die Aufgabe abzubrechen.

Falls die Aufgabenpriorität möglicherweise geändert werden muss, darf der Parameter `options.priority` nicht gesetzt werden.
Stattdessen sollte ein [`TaskController`](/de/docs/Web/API/TaskController) erstellt werden und sein [`TaskSignal`](/de/docs/Web/API/TaskSignal) sollte an `options.signal` übergeben werden.
Die Aufgabenpriorität wird von der Signalpriorität initialisiert und kann später über den zugehörigen [`TaskController`](/de/docs/Web/API/TaskController) des Signals geändert werden.

Falls keine Priorität gesetzt ist, dann hat die Aufgabe standardmäßig die Priorität [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible).

Ist eine Verzögerung angegeben und größer als 0, wird die Ausführung der Aufgabe für mindestens so viele Millisekunden verzögert.
Andernfalls wird die Aufgabe sofort zur Priorisierung geplant.

## Syntax

```js-nolint
postTask(callback)
postTask(callback, options)
```

### Parameter

- `callback`
  - : Eine Rückruffunktion, die die Aufgabe implementiert.
    Der Rückgabewert des Rückrufs wird verwendet, um das Promise zu lösen, das von dieser Funktion zurückgegeben wird.

- `options` {{optional_inline}}
  - : Aufgabenoptionen, einschließlich:
    - `priority` {{optional_inline}}
      - : Die unveränderliche [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe.
        Eine der folgenden: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background).
        Falls gesetzt, wird diese Priorität für die gesamte Lebensdauer der Aufgabe verwendet und die Priorität, die auf dem `signal` gesetzt ist, wird ignoriert.

    - `signal` {{optional_inline}}
      - : Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal), das verwendet werden kann, um die Aufgabe abzubrechen (von ihrem zugehörigen Controller).

        Wenn der Parameter `options.priority` gesetzt ist, kann die Aufgabenpriorität nicht geändert werden, und jede Priorität auf dem Signal wird ignoriert.
        Andernfalls, wenn das Signal ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) ist, wird seine Priorität verwendet, um die anfängliche Aufgabenpriorität festzulegen, und der Signal-Controller kann diese später ändern.

    - `delay` {{optional_inline}}
      - : Die Mindestanzahl an Millisekunden, nach der die Aufgabe zur Planerwarteschlange hinzugefügt wird.
        Die tatsächliche Verzögerung kann höher sein, wird aber nicht weniger sein.
        Die Standardverzögerung beträgt 0.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der `callback` Funktion aufgelöst oder mit dem Abbruchgrund des `signal`s ([`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason)) abgelehnt werden kann.
Das Promise kann auch mit einem während der Ausführung geworfenen Fehler abgelehnt werden.

## Beispiele

Die folgenden Beispiele sind leicht vereinfachte Versionen der Live-Beispiele aus [Prioritized Task Scheduling API > Examples](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

### Feature-Überprüfung

Überprüfen Sie, ob das priorisierte Planen von Aufgaben unterstützt wird, indem Sie die `scheduler`-Eigenschaft im globalen Gültigkeitsbereich testen (wie z. B. [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) im Bereich des Fensters oder [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) im Bereich des Workers).

Zum Beispiel, der folgende Code protokolliert "Feature: Supported", wenn die API in diesem Browser unterstützt wird.

```js
// Check that feature is supported
if ("scheduler" in globalThis) {
  console.log("Feature: Supported");
} else {
  console.error("Feature: NOT Supported");
}
```

### Grundlegende Verwendung

Aufgaben werden gepostet, indem eine Rückruffunktion (Aufgabe) im ersten Argument angegeben wird, und ein optionales zweites Argument, das verwendet werden kann, um eine Aufgabenpriorität, ein Signal und/oder eine Verzögerung anzugeben.
Die Methode gibt ein {{jsxref("Promise")}} zurück, das sich mit dem Rückgabewert der Rückruffunktion löst oder mit einem Abbruchfehler oder einem in der Funktion geworfenen Fehler abgelehnt wird.

Da sie ein Promise zurückgibt, kann `postTask()` [mit anderen Versprechen verkettet werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises).
Unten zeigen wir, wie man darauf wartet, dass das Promise mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) gelöst oder mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) abgelehnt wird.
Die Priorität ist nicht spezifiziert, daher wird die Standardpriorität `user-visible` verwendet.

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

Die Methode kann auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) innerhalb einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) verwendet werden.
Der folgende Code zeigt, wie man diesen Ansatz verwenden könnte, um auf eine `user-blocking` Aufgabe zu warten.

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

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können durch den `priority`-Parameter im optionalen zweiten Argument festgelegt werden.
Prioritäten, die auf diese Weise festgelegt werden, können nicht geändert werden (sind [unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority)).

Unten posten wir zwei Gruppen von jeweils drei Aufgaben, wobei jedes Mitglied in umgekehrter Reihenfolge der Priorität steht.
Die letzte Aufgabe hat die Standardpriorität.
Beim Ausführen protokolliert jede Aufgabe einfach ihre erwartete Reihenfolge (wir warten nicht auf das Ergebnis, da dies nicht notwendig ist, um die Ausführungsreihenfolge zu zeigen).

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

Das erwartete Ergebnis wird unten gezeigt: Aufgaben werden in Prioritätsreihenfolge ausgeführt und dann in Deklarationsreihenfolge.

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

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können ihre anfänglichen Werte auch von einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) erhalten, das an `postTask()` im optionalen zweiten Argument übergeben wird.
Wenn sie auf diese Weise eingestellt werden, kann die Priorität der Aufgabe [dann geändert werden](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) durch den Controller, der mit dem Signal verbunden ist.

> [!NOTE]
> Das Einstellen und Ändern von Aufgabenprioritäten mit einem Signal funktioniert nur, wenn das `options.priority`-Argument für `postTask()` nicht gesetzt ist und wenn das `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) (und kein [`AbortSignal`](/de/docs/Web/API/AbortSignal)) ist.

Der folgende Code zeigt zuerst, wie man einen [`TaskController`](/de/docs/Web/API/TaskController) erstellt und die anfängliche Priorität seines Signals im [`TaskController()`-Konstruktor](/de/docs/Web/API/TaskController/TaskController) auf `user-blocking` einstellt.

Wir verwenden dann `addEventListener()`, um einen Ereignis-Listener zum Signal des Controllers hinzuzufügen (wir könnten alternativ die `TaskSignal.onprioritychange`-Eigenschaft verwenden, um einen Ereignis-Handler hinzuzufügen).
Der Ereignis-Handler verwendet [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) am Ereignis, um die ursprüngliche Priorität zu erhalten, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) am Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

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

Schließlich wird die Aufgabe gepostet, indem das Signal übergeben wird, und dann ändern wir sofort die Priorität auf `background`, indem wir [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) am Controller aufrufen.

```js
// Post task using the controller's signal.
// The signal priority sets the initial priority of the task
scheduler.postTask(() => console.log("Task 1"), { signal: controller.signal });

// Change the priority to 'background' using the controller
controller.setPriority("background");
```

Das erwartete Ergebnis wird unten gezeigt.
Beachten Sie, dass in diesem Fall die Priorität geändert wird, bevor die Aufgabe ausgeführt wird, aber sie könnte genauso gut während der Ausführung der Aufgabe geändert worden sein.

```js
// Expected output
// Priority changed from user-blocking to background.
// Task 1
```

### Aufgaben abbrechen

Aufgaben können entweder mit [`TaskController`](/de/docs/Web/API/TaskController) und [`AbortController`](/de/docs/Web/API/AbortController) auf die gleiche Weise abgebrochen werden.
Der einzige Unterschied besteht darin, dass Sie [`TaskController`](/de/docs/Web/API/TaskController) verwenden müssen, wenn Sie auch die Aufgabenpriorität festlegen möchten.

Der folgende Code erstellt einen Controller und übergibt dessen Signal an die Aufgabe.
Die Aufgabe wird dann sofort abgebrochen.
Dies führt dazu, dass das Promise mit einem `AbortError` abgelehnt wird, der im `catch`-Block abgefangen und protokolliert wird.
Beachten Sie, dass wir auch das [`abort` Event](/de/docs/Web/API/AbortSignal/abort_event), das auf dem [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) ausgelöst wird, hätten abhören und den Abbruch dort protokollieren können.

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

Aufgaben können verzögert werden, indem im Parameter `options.delay` von `postTask()` eine ganze Zahl an Millisekunden angegeben wird.
Dies fügt die Aufgabe effektiv mit einer Zeitüberschreitung zur priorisierten Warteschlange hinzu, wie sie mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) erstellt werden könnte.
Die `delay` ist die minimale Zeitspanne, bevor die Aufgabe dem Planer hinzugefügt wird; sie kann länger sein.

Der folgende Code zeigt zwei Aufgaben, die (als Pfeilfunktionen) mit einer Verzögerung hinzugefügt wurden.

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
