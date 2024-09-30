---
title: TaskController
slug: Web/API/TaskController
l10n:
  sourceCommit: 33313b7c9e37253c0141e22558e298d08c060be5
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`TaskController`**-Schnittstelle der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) repräsentiert ein Controller-Objekt, das verwendet werden kann, um sowohl die Ausführung abzubrechen als auch die [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) einer oder mehrerer priorisierter Aufgaben zu ändern.
Wenn es nicht notwendig ist, die Prioritäten von Aufgaben zu ändern, kann stattdessen der [`AbortController`](/de/docs/Web/API/AbortController) verwendet werden.

Eine neue `TaskController`-Instanz wird mit dem [`TaskController()`](/de/docs/Web/API/TaskController/TaskController)-Konstruktor erstellt, wobei optional eine [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) für das zugehörige Signal (ein [`TaskSignal`](/de/docs/Web/API/TaskSignal)) angegeben werden kann.
Wird keine Priorität angegeben, hat das Signal standardmäßig eine Priorität von [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible).

Das Signal des Controllers kann als Argument an die Methode [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) für eine oder mehrere Aufgaben übergeben werden.
Bei [änderbaren Aufgaben](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) (nur) wird die Aufgabe mit der Signalpriorität initialisiert und kann später durch Aufruf von [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) geändert werden.
Für unveränderliche Aufgaben wird jede vom Controller initialisierte oder gesetzte Priorität ignoriert.

Aufgaben können durch Aufruf von [`abort()`](/de/docs/Web/API/AbortController/abort) am Controller abgebrochen werden.

{{InheritanceDiagram}}

## Konstruktor

- [`TaskController()`](/de/docs/Web/API/TaskController/TaskController)
  - : Erstellt ein neues `TaskController`-Objekt und legt optional die Priorität seines zugehörigen [`signal`](#taskcontroller.signal) fest.

## Methoden der Instanz

_Diese Schnittstelle erbt auch die Methoden ihres Elternteils, [`AbortController`](/de/docs/Web/API/AbortController)._

- [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority)
  - : Legt die Priorität des Signals des Controllers fest und damit die Priorität aller damit verbundenen Aufgaben.
    Dies benachrichtigt Beobachter der Prioritätsänderung durch das Auslösen eines [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignisses.

## Eigenschaften der Instanz

_Diese Schnittstelle erbt auch die Eigenschaften ihres Elternteils, [`AbortController`](/de/docs/Web/API/AbortController)._

- `TaskController.signal` {{ReadOnlyInline}}
  - : Gibt eine [`TaskSignal`](/de/docs/Web/API/TaskSignal)-Objektinstanz zurück.
    Das Signal wird an Aufgaben übergeben, damit sie vom Controller abgebrochen oder neu priorisiert werden können.
    Die Eigenschaft wird von [`AbortController`](/de/docs/Web/API/AbortController#abortcontroller.signal) geerbt.

## Beispiele

> [!NOTE]
> Zusätzliche "Live"-Beispiele finden Sie unter: [Prioritized Task Scheduling API Examples](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

Zuerst erstellen wir einen Task-Controller und setzen die Priorität seines zugehörigen Signals auf `user-blocking`.

```js
// Create a TaskController, setting its signal priority to 'user-blocking'
const controller = new TaskController({ priority: "user-blocking" });
```

Dann fügen wir einen Event-Listener für [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignisse hinzu (hier wird `addEventListener()` aufgerufen, aber wir könnten stattdessen einen Handler auf `TaskSignal.onprioritychange` zuweisen).
Der Handler verwendet [previousPolicy](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) auf dem Ereignis, um die ursprüngliche Priorität zu erhalten, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) auf dem Ereignisziel, um die neue Priorität zu erhalten.

```js
// Listen for 'prioritychange' events on the controller's signal.
controller.signal.addEventListener("prioritychange", (event) => {
  const previousPriority = event.previousPriority;
  const newPriority = event.target.priority;
  console.log(`Priority changed from ${previousPriority} to ${newPriority}.`);
});
```

Wir können auch auf [`abort`](/de/docs/Web/API/AbortSignal/abort_event)-Ereignisse hören, wie unten gezeigt wird.
Dieselbe Vorgehensweise würde verwendet, wenn der Controller ein `AbortController` wäre.

```js
controller.signal.addEventListener("abort", (event) => {
  console.log("Task aborted");
});
```

Als nächstes posten wir die Aufgabe und übergeben das Controller-Signal im optionalen Argument.
In diesem Fall ist die Aufgabe nur eine Pfeilfunktion, die das Versprechen einlöst, indem sie etwas Text zurückgibt.
Wir verwenden `then` und `catch`, um zu behandeln, wann die Aufgabe aufgelöst oder abgelehnt wird, und protokollieren den Rückgabetext oder den Fehler in jedem Fall.
Beachten Sie, dass wir in einem späteren Codeblock die Aufgabe abbrechen, sodass tatsächlich nur der `catch()`-Block ausgeführt wird!

```js
// Post task using the controller's signal.
// The signal priority sets the initial priority of the task
scheduler
  .postTask(() => "Task execute", { signal: controller.signal })
  .then((taskResult) => {
    console.log(`${taskResult}`);
  }) // Aborted (won't run)
  .catch((error) => {
    console.log(`Catch error: ${error}`);
  }); // Log error
```

Wir können den Controller verwenden, um die Aufgabe zu verwalten.
Hier können wir die Priorität mit [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) ändern.
Dies wird das zugehörige `prioritychange`-Ereignis auslösen.

```js
// Change the priority to 'background' using the controller
controller.setPriority("background");
```

Schließlich kann die Aufgabe durch Aufruf von [`abort()`](/de/docs/Web/API/AbortController/abort) am Controller abgebrochen werden.

```js
// Abort the task
controller.abort();
```

Die Konsolenausgabe dieses Beispiels wäre:

```plain
The priority changed from user-blocking to background.
Task aborted
Catch error: AbortError
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
