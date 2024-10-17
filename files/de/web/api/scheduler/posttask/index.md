---
title: "Scheduler: postTask() Methode"
short-title: postTask()
slug: Web/API/Scheduler/postTask
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`postTask()`**-Methode des [`Scheduler`](/de/docs/Web/API/Scheduler)-Interfaces wird verwendet, um Aufgaben hinzuzufügen, die entsprechend ihrer [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) [geplant](/de/docs/Web/API/Prioritized_Task_Scheduling_API) werden.

Die Methode erlaubt es Benutzer\*innen, optional eine minimale Verzögerung anzugeben, bevor die Aufgabe ausgeführt wird, eine Priorität für die Aufgabe festzulegen und ein Signal zu übergeben, das verwendet werden kann, um die Priorität der Aufgabe zu ändern und/oder die Aufgabe abzubrechen.
Sie gibt ein Promise zurück, das mit dem Ergebnis der Aufgaben-Rückruffunktion aufgelöst oder mit dem Abbruchsgrund oder einem in der Aufgabe geworfenen Fehler abgelehnt wird.

Die Aufgabenpriorität kann [veränderlich oder unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) sein.
Wenn sich die Aufgabenpriorität niemals ändern muss, sollte sie mit dem Parameter `options.priority` festgelegt werden (jede Priorität, die über ein Signal festgelegt wird, wird dann ignoriert).
Sie können dennoch ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) (das keine Priorität hat) oder ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) an den Parameter `options.signal` übergeben, um die Aufgabe abzubrechen.

Falls die Aufgabenpriorität möglicherweise geändert werden muss, darf der Parameter `options.priority` nicht festgelegt werden.
Stattdessen sollte ein [`TaskController`](/de/docs/Web/API/TaskController) erstellt werden, und sein [`TaskSignal`](/de/docs/Web/API/TaskSignal) sollte an `options.signal` übergeben werden.
Die Aufgabenpriorität wird von der Signalpriorität initialisiert und kann später mit dem zugehörigen [`TaskController`](/de/docs/Web/API/TaskController) geändert werden.

Wenn keine Priorität festgelegt ist, wird die Aufgabenpriorität standardmäßig auf [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible) gesetzt.

Wenn eine Verzögerung angegeben und größer als 0 ist, wird die Ausführung der Aufgabe um mindestens diese Anzahl von Millisekunden verzögert.
Andernfalls wird die Aufgabe sofort zur Priorisierung geplant.

## Syntax

```js-nolint
postTask(callback)
postTask(callback, options)
```

### Parameter

- `callback`

  - : Eine Rückruffunktion, die die Aufgabe implementiert.
    Der Rückgabewert des Rückrufs wird verwendet, um das von dieser Funktion zurückgegebene Promise zu lösen.

- `options` {{optional_inline}}

  - : Aufgabenoptionen, einschließlich:

    - `priority` {{optional_inline}}

      - : Die unveränderliche [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe.
        Eine der folgenden: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background).
        Wenn gesetzt, wird diese Priorität für die Lebensdauer der Aufgabe verwendet, und Priorität, die im `signal` gesetzt ist, wird ignoriert.

    - `signal` {{optional_inline}}

      - : Ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal), das verwendet werden kann, um die Aufgabe abzubrechen (aus ihrem zugehörigen Controller).

        Wenn der Parameter `options.priority` gesetzt ist, kann die Aufgabenpriorität nicht geändert werden, und jegliche Priorität am Signal wird ignoriert.
        Andernfalls, wenn das Signal ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) ist, wird dessen Priorität verwendet, um die anfängliche Aufgabenpriorität festzulegen, und der Controller des Signals kann sie später verwenden, um die Aufgabenpriorität zu ändern.

    - `delay` {{optional_inline}}
      - : Die minimale Zeitspanne, nach welcher die Aufgabe zur Scheduler-Warteschlange hinzugefügt wird, in ganzen Millisekunden.
        Die tatsächliche Verzögerung kann höher als angegeben sein, wird aber nicht geringer sein.
        Die Standardverzögerung ist 0.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der `callback`-Funktion aufgelöst wird oder möglicherweise mit dem Abbruchsgrund des `signal` ([`AbortSignal.reason`](/de/docs/Web/API/AbortSignal/reason)) abgelehnt wird.
Das Promise kann auch mit einem Fehler abgelehnt werden, der während der Ausführung des Rückrufs geworfen wird.

## Beispiele

Die folgenden Beispiele sind leicht vereinfachte Versionen der Live-Beispiele, die unter [Prioritized Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples) bereitgestellt werden.

### Funktionsüberprüfung

Überprüfen, ob die priorisierte Aufgabenplanung unterstützt wird, indem die `scheduler`-Eigenschaft im globalen Gültigkeitsbereich getestet wird (z. B. [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) im Gültigkeitsbereich des Fensters oder [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) im Worker-Gültigkeitsbereich).

Zum Beispiel wird im folgenden Code "Funktion: Unterstützt" protokolliert, wenn die API in diesem Browser unterstützt wird.

```js
// Check that feature is supported
if ("scheduler" in globalThis) {
  console.log("Feature: Supported");
} else {
  console.error("Feature: NOT Supported");
}
```

### Grundlegende Verwendung

Aufgaben werden durch Angabe einer Rückruffunktion (Aufgabe) im ersten Argument übergeben, und ein optionales zweites Argument kann verwendet werden, um eine Aufgabenpriorität, ein Signal und/oder eine Verzögerung anzugeben.
Die Methode gibt ein {{jsxref("Promise")}} zurück, das mit dem Rückgabewert der Rückruffunktion aufgelöst wird oder mit entweder einem Abbruchfehler oder einem Fehler, der in der Funktion geworfen wurde, abgelehnt wird.

Da sie ein Promise zurückgibt, kann `postTask()` mit anderen Versprechen [verkettet werden](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises).
Im Folgenden zeigen wir, wie Sie auf die Lösung des Versprechens warten, indem Sie [`then`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) verwenden oder mit [`catch`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) ablehnen.
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

Die Methode kann auch mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) innerhalb einer [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) verwendet werden.
Der folgende Code zeigt, wie Sie diesen Ansatz verwenden könnten, um auf eine `user-blocking`-Aufgabe zu warten.

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

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können mit dem Parameter `priority` im optionalen zweiten Argument festgelegt werden.
Prioritäten, die auf diese Weise festgelegt werden, können nicht geändert werden (sind [unveränderlich](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority)).

Nachfolgend posten wir zwei Gruppen von drei Aufgaben, jedes Mitglied in umgekehrter Reihenfolge der Priorität.
Die letzte Aufgabe hat die Standardpriorität.
Beim Ausführen protokolliert jede Aufgabe einfach ihre erwartete Reihenfolge (wir warten nicht auf das Ergebnis, weil wir das nicht müssen, um die Reihenfolge der Ausführung zu zeigen).

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

Das erwartete Ergebnis wird unten gezeigt: Aufgaben werden in Prioritätsreihenfolge und dann in Deklarationsreihenfolge ausgeführt.

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

[Aufgabenprioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) können ihren Anfangswert auch aus einem [`TaskSignal`](/de/docs/Web/API/TaskSignal) erhalten, das im optionalen zweiten Argument an `postTask()` übergeben wird.
Wenn so festgelegt, kann die Priorität der Aufgabe [dann geändert werden](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) mit dem Controller, der dem Signal zugeordnet ist.

> [!NOTE]
> Das Setzen und Ändern von Aufgabenprioritäten mit einem Signal funktioniert nur, wenn das Argument `options.priority` an `postTask()` nicht festgelegt ist und wenn das `options.signal` ein [`TaskSignal`](/de/docs/Web/API/TaskSignal) (und kein [`AbortSignal`](/de/docs/Web/API/AbortSignal)) ist.

Der Code unten zeigt zunächst, wie Sie einen [`TaskController`](/de/docs/Web/API/TaskController) erstellen, wobei die anfängliche Priorität seines Signals auf `user-blocking` im [`TaskController()`-Konstruktor](/de/docs/Web/API/TaskController/TaskController) gesetzt wird.

Wir verwenden dann `addEventListener()`, um einen Ereignis-Listener an das Signal des Controllers hinzuzufügen (wir könnten alternativ die `TaskSignal.onprioritychange` Eigenschaft verwenden, um einen Ereignishandler hinzuzufügen).
Der Ereignishandler verwendet [`previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) am Ereignis, um die ursprüngliche Priorität zu erhalten, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) am Ereignisziel, um die neue/aktuelle Priorität zu erhalten.

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

Das erwartete Ergebnis wird unten gezeigt.
Beachten Sie, dass in diesem Fall die Priorität geändert wird, bevor die Aufgabe ausgeführt wird, aber sie könnte ebenso während der Ausführung der Aufgabe geändert werden.

```js
// Expected output
// Priority changed from user-blocking to background.
// Task 1
```

### Aufgaben abbrechen

Aufgaben können sowohl mit [`TaskController`](/de/docs/Web/API/TaskController) als auch mit [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden, auf genau dieselbe Weise.
Der einzige Unterschied besteht darin, dass Sie [`TaskController`](/de/docs/Web/API/TaskController) verwenden müssen, wenn Sie auch die Aufgabenpriorität festlegen möchten.

Der untenstehende Code erstellt einen Controller und übergibt dessen Signal an die Aufgabe.
Die Aufgabe wird dann sofort abgebrochen.
Dies führt dazu, dass das Promise mit einem `AbortError` abgelehnt wird, der im `catch`-Block abgefangen und protokolliert wird.
Beachten Sie, dass wir auch das [`abort` event](/de/docs/Web/API/AbortSignal/abort_event) hören könnten, das auf dem [`TaskSignal`](/de/docs/Web/API/TaskSignal) oder [`AbortSignal`](/de/docs/Web/API/AbortSignal) ausgelöst wird, und den Abbruch dort protokollieren könnten.

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

Aufgaben können verzögert werden, indem eine ganze Anzahl von Millisekunden im Parameter `options.delay` an `postTask()` angegeben wird.
Dies fügt die Aufgabe effektiv in die priorisierte Warteschlange in einem Timeout hinzu, wie es mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) erstellt werden könnte.
Die `delay` ist die minimale Zeitspanne, bevor die Aufgabe zum Scheduler hinzugefügt wird; sie kann länger dauern.

Der Code unten zeigt zwei hinzugefügte Aufgaben (als Arrow-Funktionen) mit einer Verzögerung.

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
