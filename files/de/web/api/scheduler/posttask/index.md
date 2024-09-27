---
title: "Scheduler: postTask() Methode"
short-title: postTask()
slug: Web/API/Scheduler/postTask
l10n:
  sourceCommit: 33313b7c9e37253c0141e22558e298d08c060be5
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`postTask()`**-Methode der [`Scheduler`](/de/docs/Web/API/Scheduler)-Schnittstelle wird verwendet, um Aufgaben gemäß ihrer [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) zu [planen](/de/docs/Web/API/Prioritized_Task_Scheduling_API).

Die Methode ermöglicht es Benutzern, optional eine Mindestverzögerung anzugeben, bevor die Aufgabe ausgeführt wird, eine Priorität für die Aufgabe festzulegen und ein Signal zu verwenden, das zur Änderung der Aufgabenpriorität und/oder zum Abbruch der Aufgabe verwendet werden kann.
Sie gibt ein Promise zurück, das mit dem Ergebnis der Aufgabenrückruffunktion aufgelöst oder mit dem Abbruchgrund oder einem Fehler, der in der Aufgabe geworfen wird, abgelehnt wird.

Die Aufgabenpriorität kann [veränderlich oder unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) sein.
Wenn die Aufgabenpriorität nie geändert werden muss, sollte sie mit dem Parameter `options.priority` festgelegt werden (jede Priorität, die über ein Signal gesetzt wird, wird dann ignoriert).
Sie können dennoch ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) (das keine Priorität hat) oder [`TaskSignal`](/de/docs/Web/API/TaskSignal) an den Parameter `options.signal` übergeben, um die Aufgabe abzubrechen.

Falls die Aufgabenpriorität möglicherweise geändert werden muss, darf der Parameter `options.priority` nicht gesetzt werden.
Stattdessen sollte ein [`TaskController`](/de/docs/Web/API/TaskController) erstellt und dessen [`TaskSignal`](/de/docs/Web/API/TaskSignal) an `options.signal` übergeben werden.
Die Aufgabenpriorität wird aus der Priorität des Signals initialisiert und kann später mit dem zugehörigen [`TaskController`](/de/docs/Web/API/TaskController) des Signals geändert werden.

Wenn keine Priorität festgelegt ist, wird die Aufgabenpriorität standardmäßig auf [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible) gesetzt.

Wenn eine Verzögerung angegeben ist und größer als 0, wird die Ausführung der Aufgabe um mindestens diese Anzahl von Millisekunden verzögert.
Andernfalls wird die Aufgabe sofort zur Priorisierung eingeplant.

## Syntax

```js-nolint
postTask(callback)
postTask(callback, options)
```

### Parameter

- `callback`

  - : Eine Rückruffunktion, die die Aufgabe implementiert.
    Der Rückgabewert der Rückruffunktion wird verwendet, um das von dieser Funktion zurückgegebene Promise aufzulösen.

- `options` {{optional_inline}}

  - : Aufgabenoptionen, einschließlich:

    - `priority` {{optional_inline}}

      - : Die unveränderliche [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe.
        Eine der folgenden: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background).
        Wenn festgelegt, wird diese Priorität über die gesamte Lebensdauer der Aufgabe verwendet und eine auf dem `signal` gesetzte Priorität wird ignoriert.

    - `signal` {{optional_inline}}

      - : Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal), das zur Abbruch der Aufgabe (vom zugehörigen Controller aus) verwendet werden kann.

        Wenn der Parameter `options.priority` gesetzt ist, kann die Aufgabenpriorität nicht geändert werden, und jede Priorität auf dem Signal wird ignoriert.
        Andernfalls, wenn das Signal ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) ist, wird dessen Priorität verwendet, um die anfängliche Aufgabenpriorität festzulegen, und der Controller des Signals kann sie später verwenden, um die Aufgabenpriorität zu ändern.

    - `delay` {{optional_inline}}
      - : Die Mindestzeit, nach der die Aufgabe zur Planungswarteschlange hinzugefügt wird, in ganzen Millisekunden.
        Die tatsächliche Verzögerung kann höher sein als angegeben, aber nicht niedriger.
        Die Standardverzögerung beträgt 0.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der `callback`-Funktion aufgelöst wird, oder das möglicherweise mit dem Abbruchgrund des `signal` ([`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason)) abgelehnt wird.
Das Promise kann auch mit einem Fehler, der während der Ausführung der Rückruffunktion ausgelöst wird, abgelehnt werden.

## Beispiele

Die folgenden Beispiele sind leicht vereinfachte Versionen der Live-Beispiele, die in den [Prioritized Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples) angegeben sind.

### Funktionalität prüfen

Prüfen Sie, ob die prioritisierte Aufgabenplanung unterstützt wird, indem Sie das `scheduler`-Eigenschaft im globalen Bereich testen (wie [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) im Fensterbereich oder [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) im Worker-Bereich).

Zum Beispiel protokolliert der untenstehende Code "Feature: Supported", wenn die API in diesem Browser unterstützt wird.

```js
// Check that feature is supported
if ("scheduler" in globalThis) {
  console.log("Feature: Supported");
} else {
  console.error("Feature: NOT Supported");
}
```

### Grundlegende Verwendung

Aufgaben werden gepostet, indem eine Rückruffunktion (Aufgabe) im ersten Argument angegeben wird, und ein optionales zweites Argument, das verwendet werden kann, um eine Aufgabenpriorität, Signal und/oder Verzögerung anzugeben.
Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der Rückruffunktion aufgelöst wird oder mit einem Abbruchfehler oder einem in der Funktion ausgelösten Fehler abgelehnt wird.

Da sie ein Promise zurückgibt, kann `postTask()` [mit anderen Promises verkettet werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises).
Unten zeigen wir, wie Sie auf die Auflösung des Promises mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) oder Ablehnung mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) warten können.
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

Die Methode kann auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) innerhalb einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) verwendet werden.
Der untenstehende Code zeigt, wie Sie diesen Ansatz verwenden könnten, um auf eine `user-blocking` Aufgabe zu warten.

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

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können mit dem `priority`-Parameter im optionalen zweiten Argument festgelegt werden.
Prioritäten, die auf diese Weise festgelegt werden, können nicht geändert werden (sind [unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority)).

Unten posten wir zwei Gruppen von drei Aufgaben, jedes Mitglied in umgekehrter Reihenfolge der Priorität.
Die letzte Aufgabe hat die Standardpriorität.
Beim Ausführen protokolliert jede Aufgabe ihre erwartete Reihenfolge (wir warten nicht auf das Ergebnis, da wir dies nicht tun müssen, um die Ausführungsreihenfolge zu zeigen).

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

Die erwartete Ausgabe ist unten gezeigt: Aufgaben werden in Prioritäts- und anschließend in Deklarationsreihenfolge ausgeführt.

```plain
usr-blk 1
usr-blk 2
usr-vis 1
usr-vis 2
usr-vis 3 (default)
bckg 1
bckg 2
```

### Ändern von Aufgabenprioritäten

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können ihren anfänglichen Wert auch von einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) erhalten, das im optionalen zweiten Argument an `postTask()` übergeben wird.
Wenn diese so gesetzt wird, kann die Priorität der Aufgabe [dann geändert werden](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority), indem der zugehörige Controller des Signals verwendet wird.

> [!NOTE]
> Das Setzen und Ändern von Aufgabenprioritäten mit einem Signal funktioniert nur, wenn das `options.priority`-Argument von `postTask()` nicht gesetzt ist und wenn das `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) (und kein [`AbortSignal`](/de/docs/Web/API/AbortSignal)) ist.

Der untenstehende Code zeigt zuerst, wie man einen [`TaskController`](/de/docs/Web/API/TaskController) erstellt und die anfängliche Priorität seines Signals im [`TaskController()`-Konstruktor](/de/docs/Web/API/TaskController/TaskController) auf `user-blocking` setzt.

Dann verwenden wir `addEventListener()`, um einen Ereignislistener zum Signal des Controllers hinzuzufügen (alternativ könnten wir die Eigenschaft `TaskSignal.onprioritychange` verwenden, um einen Ereignishandler hinzuzufügen).
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

Schließlich wird die Aufgabe gepostet, das Signal übergeben, und dann ändern wir sofort die Priorität in `background`, indem wir [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) im Controller aufrufen.

```js
// Post task using the controller's signal.
// The signal priority sets the initial priority of the task
scheduler.postTask(() => console.log("Task 1"), { signal: controller.signal });

// Change the priority to 'background' using the controller
controller.setPriority("background");
```

Die erwartete Ausgabe ist unten gezeigt.
Beachten Sie, dass in diesem Fall die Priorität geändert wird, bevor die Aufgabe ausgeführt wird, aber sie könnte ebenso während der Ausführung der Aufgabe geändert werden.

```js
// Expected output
// Priority changed from user-blocking to background.
// Task 1
```

### Abbrechen von Aufgaben

Aufgaben können entweder mit [`TaskController`](/de/docs/Web/API/TaskController) und [`AbortController`](/de/docs/Web/API/AbortController) in genau der gleichen Weise abgebrochen werden.
Der einzige Unterschied besteht darin, dass Sie [`TaskController`](/de/docs/Web/API/TaskController) verwenden müssen, wenn Sie auch die Aufgabenpriorität festlegen möchten.

Der untenstehende Code erstellt einen Controller und übergibt dessen Signal an die Aufgabe.
Die Aufgabe wird dann sofort abgebrochen.
Dies führt dazu, dass das Promise mit einem `AbortError` abgelehnt wird, der im `catch`-Block abgefangen und protokolliert wird.
Beachten Sie, dass wir auch das [`abort`-Ereignis](/de/docs/Web/API/AbortSignal/abort_event) abhören könnten, das auf dem [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) ausgelöst wird und den Abbruch dort protokollieren.

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

### Verzögern von Aufgaben

Aufgaben können verzögert werden, indem eine ganzzahlige Anzahl von Millisekunden im Parameter `options.delay` zu `postTask()` angegeben wird.
Dies fügt die Aufgabe effektiv mit einem Timeout zur priorisierten Warteschlange hinzu, wie durch [`setTimeout()`](/de/docs/Web/API/setTimeout) erstellt werden könnte.
Die `delay` ist die Mindestzeit, bevor die Aufgabe dem Scheduler hinzugefügt wird; sie kann länger sein.

Der untenstehende Code zeigt zwei Aufgaben (als Pfeilfunktionen) mit einer Verzögerung hinzugefügt.

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
