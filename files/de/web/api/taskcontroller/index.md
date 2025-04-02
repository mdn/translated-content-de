---
title: TaskController
slug: Web/API/TaskController
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`TaskController`**-Schnittstelle der [Priorisierten Task-Planungs-API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) repräsentiert ein Controller-Objekt, das verwendet werden kann, um sowohl abzubrechen als auch die [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) von einer oder mehreren priorisierten Aufgaben zu ändern. Wenn es nicht notwendig ist, die Task-Prioritäten zu ändern, kann stattdessen [`AbortController`](/de/docs/Web/API/AbortController) verwendet werden.

Eine neue `TaskController`-Instanz wird mithilfe des [`TaskController()`](/de/docs/Web/API/TaskController/TaskController)-Konstruktors erstellt, wobei optional eine [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) für das zugehörige Signal (ein [`TaskSignal`](/de/docs/Web/API/TaskSignal)) angegeben wird. Wenn keine Priorität angegeben wird, hat das Signal standardmäßig die Priorität [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible).

Das Signal des Controllers kann als Argument an die [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)-Methode für eine oder mehrere Aufgaben übergeben werden. Bei [veränderlichen Aufgaben](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) (nur diese) wird die Aufgabe mit der Signalpriorität initialisiert und kann später durch Aufrufen von [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) geändert werden. Bei unveränderlichen Aufgaben wird jede vom Controller initialisierte oder gesetzte Priorität ignoriert.

Aufgaben können durch Aufrufen von [`abort()`](/de/docs/Web/API/AbortController/abort) am Controller abgebrochen werden.

{{InheritanceDiagram}}

## Konstruktor

- [`TaskController()`](/de/docs/Web/API/TaskController/TaskController)
  - : Erstellt ein neues `TaskController`-Objekt, wobei optional die Priorität des zugehörigen [`signal`](#taskcontroller.signal) angegeben werden kann.

## Instanzmethoden

_Diese Schnittstelle erbt auch die Methoden ihres Elternteils, [`AbortController`](/de/docs/Web/API/AbortController)._

- [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority)
  - : Setzt die Priorität des `signal` des Controllers und damit die Priorität aller damit verbundenen Aufgaben. Dies benachrichtigt Beobachter über die Prioritätsänderung durch das Auslösen eines [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignisses.

## Instanzeigenschaften

_Diese Schnittstelle erbt auch die Eigenschaften ihres Elternteils, [`AbortController`](/de/docs/Web/API/AbortController)._

- `TaskController.signal` {{ReadOnlyInline}}
  - : Gibt eine [`TaskSignal`](/de/docs/Web/API/TaskSignal)-Objektinstanz zurück. Das Signal wird an Aufgaben übergeben, damit sie vom Controller abgebrochen oder umpriorisiert werden können. Die Eigenschaft wird von [`AbortController`](/de/docs/Web/API/AbortController/signal) geerbt.

## Beispiele

> [!NOTE]
> Zusätzliche "live"-Beispiele finden Sie in: [Beispiele für die Priorisierte Task-Planungs-API](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

Zunächst erstellen wir einen Task-Controller und setzen die Priorität seines zugehörigen Signals auf `user-blocking`.

```js
// Create a TaskController, setting its signal priority to 'user-blocking'
const controller = new TaskController({ priority: "user-blocking" });
```

Dann fügen wir einen Event-Listener für [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignisse hinzu (hier wird `addEventListener()` aufgerufen, aber wir könnten stattdessen einen Handler `TaskSignal.onprioritychange` zuweisen). Der Handler verwendet [previousPolicy](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) beim Ereignis, um die ursprüngliche Priorität zu erhalten und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) beim Ereignisziel, um die neue Priorität zu erhalten.

```js
// Listen for 'prioritychange' events on the controller's signal.
controller.signal.addEventListener("prioritychange", (event) => {
  const previousPriority = event.previousPriority;
  const newPriority = event.target.priority;
  console.log(`Priority changed from ${previousPriority} to ${newPriority}.`);
});
```

Wir können auch auf [`abort`](/de/docs/Web/API/AbortSignal/abort_event)-Ereignisse wie unten gezeigt hören. Dieser gleiche Ansatz würde verwendet werden, wenn der Controller ein `AbortController` wäre.

```js
controller.signal.addEventListener("abort", (event) => {
  console.log("Task aborted");
});
```

Als nächstes posten wir die Aufgabe und übergeben das Controller-Signal im optionalen Argument. In diesem Fall ist die Aufgabe nur eine Pfeilfunktion, die das Versprechen auflöst, indem sie etwas Text zurückgibt. Wir verwenden `then` und `catch`, um zu behandeln, wenn die Aufgabe aufgelöst oder abgelehnt wird, wobei der Rückgabetext oder der Fehler in jedem Fall protokolliert wird. Beachten Sie, dass wir in einem späteren Codeblock die Aufgabe abbrechen, sodass tatsächlich nur der `catch()`-Block ausgeführt wird!

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

Wir können den Controller verwenden, um die Aufgabe zu verwalten. Hier können wir die Priorität mithilfe von [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) ändern. Dies wird das zugehörige `prioritychange`-Ereignis auslösen.

```js
// Change the priority to 'background' using the controller
controller.setPriority("background");
```

Schließlich kann die Aufgabe durch Aufrufen von [`abort()`](/de/docs/Web/API/AbortController/abort) am Controller abgebrochen werden.

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
