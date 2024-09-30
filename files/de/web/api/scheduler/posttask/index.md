---
title: "Scheduler: postTask()-Methode"
short-title: postTask()
slug: Web/API/Scheduler/postTask
l10n:
  sourceCommit: 33313b7c9e37253c0141e22558e298d08c060be5
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`postTask()`**-Methode der [`Scheduler`](/de/docs/Web/API/Scheduler)-Schnittstelle wird verwendet, um Aufgaben hinzuzufügen, die gemäß ihrer [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) [geplant](/de/docs/Web/API/Prioritized_Task_Scheduling_API) werden sollen.

Die Methode erlaubt es den Benutzern optional eine Mindestverzögerung anzugeben, bevor die Aufgabe ausgeführt wird, eine Priorität für die Aufgabe festzulegen und ein Signal anzugeben, das verwendet werden kann, um die Priorität der Aufgabe zu ändern und/oder die Aufgabe abzubrechen. Sie gibt ein Promise zurück, das mit dem Ergebnis der Aufgaben-Callback-Funktion aufgelöst wird oder mit dem Abbruchgrund oder einem in der Aufgabe geworfenen Fehler abgelehnt wird.

Aufgabenpriorität kann [veränderlich oder unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) sein. Wenn die Aufgabenpriorität sich niemals ändern muss, sollte sie mit dem `options.priority`-Parameter festgelegt werden (jedwede Priorität, die über ein Signal festgelegt wird, wird dann ignoriert). Sie können dennoch ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) (das keine Priorität hat) oder ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) an den `options.signal`-Parameter übergeben, um die Aufgabe abzubrechen.

Falls sich die Priorität der Aufgabe ändern könnte, darf der `options.priority`-Parameter nicht festgelegt werden. Stattdessen sollte ein [`TaskController`](/de/docs/Web/API/TaskController) erstellt werden und dessen [`TaskSignal`](/de/docs/Web/API/TaskSignal) sollte an `options.signal` übergeben werden. Die Aufgabenpriorität wird dann von der Signalpriorität initialisiert und kann später mit dem zugehörigen [`TaskController`](/de/docs/Web/API/TaskController) des Signals geändert werden.

Wenn keine Priorität festgelegt ist, ist die Aufgabenpriorität standardmäßig [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible).

Wenn eine Verzögerung angegeben wird und diese größer als 0 ist, dann wird die Ausführung der Aufgabe um mindestens diese Anzahl an Millisekunden verzögert. Andernfalls wird die Aufgabe sofort zur Priorisierung geplant.

## Syntax

```js-nolint
postTask(callback)
postTask(callback, options)
```

### Parameter

- `callback`

  - : Eine Callback-Funktion, die die Aufgabe implementiert.
    Der Rückgabewert des Callbacks wird verwendet, um das von dieser Funktion zurückgegebene Promise aufzulösen.

- `options` {{optional_inline}}

  - : Aufgabenoptionen, einschließlich:

    - `priority` {{optional_inline}}

      - : Die unveränderliche [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe.
        Eine der folgenden: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background).
        Wenn festgelegt, wird diese Priorität während der gesamten Laufzeit der Aufgabe verwendet und die Priorität, die auf dem `signal` gesetzt ist, wird ignoriert.

    - `signal` {{optional_inline}}

      - : Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal), das verwendet werden kann, um die Aufgabe (von ihrem zugehörigen Controller) abzubrechen.

        Wenn der `options.priority`-Parameter gesetzt ist, kann die Aufgabenpriorität nicht geändert werden, und jede Priorität auf dem Signal wird ignoriert. Andernfalls, wenn das Signal ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) ist, wird dessen Priorität verwendet, um die initiale Aufgabenpriorität festzulegen, und der Controller des Signals kann sie später verwenden, um die Aufgabenpriorität zu ändern.

    - `delay` {{optional_inline}}
      - : Die minimale Zeitdauer, nach der die Aufgabe der Scheduler-Warteschlange hinzugefügt wird, in ganzen Millisekunden.
        Die tatsächliche Verzögerung kann höher sein als angegeben, aber nicht geringer.
        Die Standardverzögerung beträgt 0.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der `callback`-Funktion aufgelöst wird oder mit dem Abbruchgrund des `signal` ([`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason)) abgelehnt werden kann. Das Promise kann auch mit einem während der Ausführung durch den Callback geworfenen Fehler abgelehnt werden.

## Beispiele

Die folgenden Beispiele sind leicht vereinfachte Versionen der Live-Beispiele, die in [Prioritized Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples) bereitgestellt werden.

### Feature-Überprüfung

Prüfen Sie, ob das priorisierte Task-Scheduling unterstützt wird, indem Sie die `scheduler`-Eigenschaft im globalen Scope testen (z. B. [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) im Fenster-Scope oder [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) im Worker-Scope).

Zum Beispiel wird im folgenden Code "Feature: Supported" protokolliert, wenn die API in diesem Browser unterstützt wird.

```js
// Check that feature is supported
if ("scheduler" in globalThis) {
  console.log("Feature: Supported");
} else {
  console.error("Feature: NOT Supported");
}
```

### Grundlegende Nutzung

Aufgaben werden mit einer Callback-Funktion (Aufgabe) im ersten Argument und einem optionalen zweiten Argument, das zur Angabe einer Aufgabenpriorität, eines Signals und/oder einer Verzögerung verwendet werden kann, übergeben. Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der Callback-Funktion aufgelöst oder mit einem Abbruchfehler bzw. einem in der Funktion geworfenen Fehler abgelehnt wird.

Da sie ein Promise zurückgibt, kann `postTask()` [mit anderen Promises verkettet werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises). Unten zeigen wir, wie man wartet, bis das Promise mit [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) aufgelöst wird oder mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) abgelehnt wird. Die Priorität wird nicht angegeben, also wird die Standardpriorität `user-visible` verwendet.

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

Die Methode kann auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) innerhalb einer [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) verwendet werden. Der Code unten zeigt, wie man diesen Ansatz verwenden könnte, um auf eine `user-blocking`-Aufgabe zu warten.

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

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können mit dem `priority`-Parameter im optionalen zweiten Argument festgelegt werden. Prioritäten, die auf diese Weise festgelegt werden, können nicht geändert werden (sind [unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority)).

Unten posten wir zwei Gruppen von drei Aufgaben, jedes Mitglied in umgekehrter Prioritätsreihenfolge. Die letzte Aufgabe hat die Standardpriorität. Bei der Ausführung protokolliert jede Aufgabe einfach ihre erwartete Reihenfolge (wir warten nicht auf das Ergebnis, weil dies nicht notwendig ist, um die Ausführungsreihenfolge zu zeigen).

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

Das erwartete Ergebnis wird unten gezeigt: Aufgaben werden in Prioritäts- und dann in Deklarationsreihenfolge ausgeführt.

```plain
usr-blk 1
usr-blk 2
usr-vis 1
usr-vis 2
usr-vis 3 (default)
bckg 1
bckg 2
```

### Ändern der Aufgabenprioritäten

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können auch ihren Anfangswert von einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) nehmen, das im optionalen zweiten Argument an `postTask()` übergeben wird. Wenn sie auf diese Weise festgelegt werden, kann die Priorität der Aufgabe [dann geändert werden](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority), indem der Controller, der mit dem Signal verbunden ist, verwendet wird.

> [!NOTE]
> Das Festlegen und Ändern von Aufgabenprioritäten mit einem Signal funktioniert nur, wenn das `options.priority`-Argument für `postTask()` nicht gesetzt ist und das `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) (und kein [`AbortSignal`](/de/docs/Web/API/AbortSignal)) ist.

Der folgende Code zeigt zunächst, wie man einen [`TaskController`](/de/docs/Web/API/TaskController) erstellt und die anfängliche Priorität seines Signals im [`TaskController()`-Konstruktor](/de/docs/Web/API/TaskController/TaskController) auf `user-blocking` setzt.

Wir verwenden dann `addEventListener()`, um einen Ereignis-Listener zum Signal des Controllers hinzuzufügen (wir könnten alternativ die Eigenschaft `TaskSignal.onprioritychange` verwenden, um einen Ereignis-Handler hinzuzufügen). Der Ereignis-Handler verwendet [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) am Ereignis, um die ursprüngliche Priorität zu erhalten und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) am Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

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

Das erwartete Ergebnis wird unten gezeigt. Beachten Sie, dass in diesem Fall die Priorität vor der Ausführung der Aufgabe geändert wird, aber sie könnte ebenso gut geändert werden, während die Aufgabe ausgeführt wird.

```js
// Expected output
// Priority changed from user-blocking to background.
// Task 1
```

### Abbrechen von Aufgaben

Aufgaben können sowohl mit [`TaskController`](/de/docs/Web/API/TaskController) als auch mit [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden, auf genau die gleiche Weise. Der einzige Unterschied ist, dass Sie [`TaskController`](/de/docs/Web/API/TaskController) verwenden müssen, wenn Sie auch die Aufgabenpriorität festlegen möchten.

Der folgende Code erstellt einen Controller und übergibt dessen Signal an die Aufgabe. Die Aufgabe wird dann sofort abgebrochen. Dies führt dazu, dass das Promise mit einem `AbortError` abgelehnt wird, der im `catch`-Block abgefangen und protokolliert wird. Beachten Sie, dass wir auch auf das [`abort`-Ereignis](/de/docs/Web/API/AbortSignal/abort_event) hören könnten, das auf dem [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) abgefeuert wird und die Abbruchoperation dort protokollieren könnten.

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

Aufgaben können verzögert werden, indem eine ganze Anzahl von Millisekunden im `options.delay`-Parameter an `postTask()` angegeben wird. Dies fügt effektiv die Aufgabe in die priorisierte Warteschlange in einem Timeout ein, wie es mit [`setTimeout()`](/de/docs/Web/API/setTimeout) erstellt werden könnte. Die `delay` ist die minimale Zeit, bevor die Aufgabe dem Scheduler hinzugefügt wird; sie könnte länger sein.

Der folgende Code zeigt zwei Aufgaben, die (als Pfeilfunktionen) mit einer Verzögerung hinzugefügt werden.

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
