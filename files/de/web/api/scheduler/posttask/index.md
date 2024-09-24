---
title: "Scheduler: postTask()-Methode"
short-title: postTask()
slug: Web/API/Scheduler/postTask
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`postTask()`**-Methode der [`Scheduler`](/de/docs/Web/API/Scheduler)-Schnittstelle wird verwendet, um Aufgaben hinzuzufügen, die gemäß ihrer [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) [geplant](/de/docs/Web/API/Prioritized_Task_Scheduling_API) werden.

Die Methode ermöglicht es Benutzern optional eine minimale Verzögerung anzugeben, bevor die Aufgabe ausgeführt wird, eine Priorität für die Aufgabe und ein Signal, das zur Änderung der Aufgabenpriorität und/oder zum Abbrechen der Aufgabe verwendet werden kann.
Sie gibt ein Versprechen zurück, das mit dem Ergebnis der Aufgabenrückruffunktion aufgelöst oder mit dem Abbruchgrund oder einem Fehler, der in der Aufgabe geworfen wird, abgelehnt wird.

Die Aufgabenpriorität kann [änderbar oder unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) sein.
Wenn die Aufgabenpriorität niemals geändert werden muss, sollte sie über den `options.priority`-Parameter festgelegt werden (jede über ein Signal festgelegte Priorität wird dann ignoriert).
Es kann immer noch ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) (das keine Priorität hat) oder ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) an den `options.signal`-Parameter übergeben werden, um die Aufgabe abzubrechen.

Wenn die Aufgabenpriorität möglicherweise geändert werden muss, darf der `options.priority`-Parameter nicht gesetzt werden.
Stattdessen sollte ein [`TaskController`](/de/docs/Web/API/TaskController) erstellt werden, und dessen [`TaskSignal`](/de/docs/Web/API/TaskSignal) sollte an `options.signal` übergeben werden.
Die Aufgabenpriorität wird vom Signalpriorität initialisiert und kann später mit dem zugehörigen [`TaskController`](/de/docs/Web/API/TaskController) des Signals geändert werden.

Wenn keine Priorität festgelegt ist, wird die Aufgabenpriorität standardmäßig auf [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible) gesetzt.

Wenn eine Verzögerung angegeben und größer als 0 ist, wird die Ausführung der Aufgabe um mindestens so viele Millisekunden verzögert.
Andernfalls wird die Aufgabe sofort zur Priorisierung geplant.

## Syntax

```js-nolint
postTask(callback)
postTask(callback, options)
```

### Parameter

- `callback`

  - : Eine Callback-Funktion, die die Aufgabe implementiert.
    Der Rückgabewert des Callbacks wird verwendet, um das von dieser Funktion zurückgegebene Versprechen aufzulösen.

- `options` {{optional_inline}}

  - : Aufgabenoptionen, einschließlich:

    - `priority` {{optional_inline}}

      - : Die unveränderliche [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe.
        Eine der folgenden: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background).
        Wenn gesetzt, wird diese Priorität für die Lebensdauer der Aufgabe verwendet und die auf dem `signal` gesetzte Priorität ignoriert.

    - `signal` {{optional_inline}}

      - : Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal), das verwendet werden kann, um die Aufgabe abzubrechen (von seinem zugehörigen Controller).

        Wenn der `options.priority`-Parameter gesetzt ist, kann die Aufgabenpriorität nicht geändert werden, und jeder Priorität auf dem Signal wird ignoriert.
        Andernfalls, wenn das Signal ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) ist, wird seine Priorität verwendet, um die anfängliche Aufgabenpriorität festzulegen, und der Signal-Controller kann es später verwenden, um die Aufgabenpriorität zu ändern.

    - `delay` {{optional_inline}}
      - : Die minimale Zeitspanne, nach der die Aufgabe zur Planerwarteschlange hinzugefügt wird, in ganzen Millisekunden.
        Die tatsächliche Verzögerung kann höher sein als angegeben, wird aber nicht geringer sein.
        Die Standardverzögerung ist 0.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der `callback`-Funktion aufgelöst wird oder das mit dem Abbruchgrund des `signal` ([`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason)) abgelehnt werden kann.
Das Versprechen kann auch mit einem von der Callback-Funktion während der Ausführung geworfenen Fehler abgelehnt werden.

## Beispiele

Die folgenden Beispiele sind leicht vereinfachte Versionen der Live-Beispiele, die unter [Prioritized Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples) bereitgestellt werden.

### Funktionsüberprüfung

Prüfen Sie, ob eine priorisierte Aufgabenplanung durch Testen der `scheduler`-Eigenschaft im globalen Kontext unterstützt wird (zum Beispiel [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) im Fensterskontext oder [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) im Worker-Kontext).

Zum Beispiel protokolliert der unten stehende Code "Feature: Supported", wenn die API in diesem Browser unterstützt wird.

```js
// Check that feature is supported
if ("scheduler" in globalThis) {
  console.log("Feature: Supported");
} else {
  console.error("Feature: NOT Supported");
}
```

### Grundlegende Verwendung

Aufgaben werden gepostet, indem eine Callback-Funktion (Aufgabe) im ersten Argument angegeben wird, und ein optionales zweites Argument verwendet werden kann, um eine Aufgabenpriorität, ein Signal und/oder eine Verzögerung anzugeben.
Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der Callback-Funktion aufgelöst wird oder mit einem Abbruchfehler oder einem innerhalb der Funktion geworfenen Fehler abgelehnt wird.

Da sie ein Versprechen zurückgibt, kann `postTask()` [mit anderen Versprechen verkettet werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises).
Unten zeigen wir, wie Sie darauf warten können, dass das Versprechen mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) aufgelöst oder mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) abgelehnt wird.
Die Priorität ist nicht angegeben, sodass die Standardpriorität `user-visible` verwendet wird.

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
Der unten stehende Code zeigt, wie Sie diesen Ansatz verwenden könnten, um auf eine `user-blocking`-Aufgabe zu warten.

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
Prioritäten, die auf diese Weise festgelegt werden, können nicht geändert werden (sind [unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority)).

Unten posten wir zwei Gruppen von drei Aufgaben, jedes Mitglied in umgekehrter Prioritätsreihenfolge.
Die letzte Aufgabe hat die Standardpriorität.
Beim Ausführen protokolliert jede Aufgabe einfach die erwartete Reihenfolge (wir warten nicht auf das Ergebnis, da wir dies nicht müssen, um die Ausführungsreihenfolge zu zeigen).

```js
// three tasks, in reverse order of priority
scheduler.postTask(() => console.log("bckg 1"), { priority: "background" });
scheduler.postTask(() => console.log("usr-vis 1"), {
  priority: "user-visible",
});
scheduler.postTask(() => console.log("usr-blk 1"), {
  priority: "user-blocking",
});

// three more tasks, in reverse order of priority
scheduler.postTask(() => console.log("bckg 2"), { priority: "background" });
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

Die erwartete Ausgabe wird unten gezeigt: Aufgaben werden in Prioritätsreihenfolge und anschließend in Deklarationsreihenfolge ausgeführt.

```plain
usr-blk 1
usr-blk 2
usr-vis 1
usr-vis 2
usr-vis 3 (default)
bckg 1
bckg 2
```

### Aufgabenprioritäten ändern

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können auch ihren Anfangswert von einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) übernehmen, das im optionalen zweiten Argument an `postTask()` übergeben wird.
Wenn auf diese Weise festgelegt, kann die Priorität der Aufgabe [dann geändert werden](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) mit dem mit dem Signal verbundenen Controller.

> [!NOTE]
> Das Setzen und Ändern von Aufgabenprioritäten durch ein Signal funktioniert nur, wenn das `options.priority`-Argument von `postTask()` nicht gesetzt ist und wenn das `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) (und kein [`AbortSignal`](/de/docs/Web/API/AbortSignal)) ist.

Der unten stehende Code zeigt zunächst, wie ein [`TaskController`](/de/docs/Web/API/TaskController) erstellt wird, der die anfängliche Priorität seines Signals im [`TaskController()` Konstruktor](/de/docs/Web/API/TaskController/TaskController) auf `user-blocking` setzt.

Wir verwenden dann `addEventListener()`, um einen Ereignis-Listener zum Signal des Controllers hinzuzufügen (alternativ könnten wir die `TaskSignal.onprioritychange`-Eigenschaft verwenden, um einen Ereignishandler hinzuzufügen).
Der Ereignishandler verwendet [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) des Ereignisses, um die ursprüngliche Priorität zu erhalten, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) des Ereignisziels, um die neue/aktuelle Priorität zu erhalten.

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

Schließlich wird die Aufgabe gepostet, das Signal übergeben, und dann ändern wir sofort die Priorität auf `background`, indem wir [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) auf dem Controller aufrufen.

```js
// Post task using the controller's signal.
// The signal priority sets the initial priority of the task
scheduler.postTask(() => console.log("Task 1"), { signal: controller.signal });

// Change the priority to 'background' using the controller
controller.setPriority("background");
```

Die erwartete Ausgabe wird unten gezeigt.
Beachten Sie, dass in diesem Fall die Priorität geändert wird, bevor die Aufgabe ausgeführt wird, sie könnte aber genauso gut während der Aufgabenlaufzeit geändert werden.

```js
// Expected output
// Priority changed from user-blocking to background.
// Task 1
```

### Aufgaben abbrechen

Aufgaben können sowohl mit [`TaskController`](/de/docs/Web/API/TaskController) als auch mit [`AbortController`](/de/docs/Web/API/AbortController) auf genau dieselbe Weise abgebrochen werden.
Der einzige Unterschied besteht darin, dass Sie [`TaskController`](/de/docs/Web/API/TaskController) verwenden müssen, wenn Sie auch die Aufgabenpriorität festlegen möchten.

Der unten stehende Code erstellt einen Controller und übergibt dessen Signal an die Aufgabe.
Die Aufgabe wird dann sofort abgebrochen.
Dies führt dazu, dass das Versprechen mit einem `AbortError` abgelehnt wird, der im `catch`-Block abgefangen und protokolliert wird.
Beachten Sie, dass wir auch auf das [`abort` Ereignis](/de/docs/Web/API/AbortSignal/abort_event) warten könnten, das auf dem [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) ausgelöst wird, und den Abbruch dort protokollieren könnten.

```js
// Declare a TaskController with default priority
const abortTaskController = new TaskController();
// Post task passing the controller's signal
scheduler
  .postTask(() => console.log("Task executing"), {
    signal: abortTaskController.signal,
  })
  .then((taskResult) => console.log(`${taskResult}`)) //This won't run!
  .catch((error) => console.error("Error:", error)); // Log the error

// Abort the task
abortTaskController.abort();
```

### Aufgaben verzögern

Aufgaben können verzögert werden, indem eine ganze Zahl von Millisekunden im `options.delay`-Parameter von `postTask()` angegeben wird.
Dies fügt die Aufgabe effektiv zur priorisierten Warteschlange mit einem Timeout hinzu, wie es mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) erstellt werden könnte.
Die `delay` ist die minimale Zeitspanne, bevor die Aufgabe dem Planer hinzugefügt wird; sie kann länger sein.

Der unten stehende Code zeigt zwei Aufgaben, die mit einer Verzögerung (als Pfeilfunktionen) hinzugefügt werden.

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
