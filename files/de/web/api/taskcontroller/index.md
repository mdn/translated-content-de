---
title: TaskController
slug: Web/API/TaskController
l10n:
  sourceCommit: 33313b7c9e37253c0141e22558e298d08c060be5
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Das **`TaskController`**-Interface der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) repräsentiert ein Controller-Objekt, das verwendet werden kann, um sowohl eine oder mehrere priorisierte Aufgaben abzubrechen als auch deren [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) zu ändern.
Wenn es nicht erforderlich ist, die Prioritäten der Aufgaben zu ändern, kann stattdessen der [`AbortController`](/de/docs/Web/API/AbortController) verwendet werden.

Eine neue `TaskController`-Instanz wird mit dem [`TaskController()`](/de/docs/Web/API/TaskController/TaskController)-Konstruktor erstellt, wobei optional eine [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) für ihr zugehöriges Signal (ein [`TaskSignal`](/de/docs/Web/API/TaskSignal)) angegeben wird.
Wenn keine Priorität angegeben wird, hat das Signal standardmäßig die Priorität [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible).

Das Signal des Controllers kann als Argument an die [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)-Methode für eine oder mehrere Aufgaben übergeben werden.
Bei [veränderbaren Aufgaben](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) (nur) wird die Aufgabe mit der Signalpriorität initialisiert und kann später durch Aufruf von [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) geändert werden.
Bei unveränderlichen Aufgaben wird jede Priorität, die vom Controller initialisiert oder festgelegt wird, ignoriert.

Aufgaben können abgebrochen werden, indem [`abort()`](/de/docs/Web/API/AbortController/abort) am Controller aufgerufen wird.

{{InheritanceDiagram}}

## Konstruktor

- [`TaskController()`](/de/docs/Web/API/TaskController/TaskController)
  - : Erstellt ein neues `TaskController`-Objekt und gibt optional die Priorität seines zugehörigen [`signal`](#taskcontroller.signal) an.

## Instanzmethoden

_Dieses Interface erbt auch die Methoden seiner Elternklasse, [`AbortController`](/de/docs/Web/API/AbortController)._

- [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority)
  - : Setzt die Priorität des [`signal`](#taskcontroller.signal) des Controllers und damit die Priorität aller damit verbundenen Aufgaben.
    Dies benachrichtigt Beobachter der Prioritätsänderung durch das Versenden eines [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignisses.

## Instanzeigenschaften

_Dieses Interface erbt auch die Eigenschaften seiner Elternklasse, [`AbortController`](/de/docs/Web/API/AbortController)._

- `TaskController.signal` {{ReadOnlyInline}}
  - : Gibt eine Instanz eines [`TaskSignal`](/de/docs/Web/API/TaskSignal)-Objekts zurück.
    Das Signal wird an Aufgaben übergeben, damit sie durch den Controller abgebrochen oder neu priorisiert werden können.
    Diese Eigenschaft wird von [`AbortController`](/de/docs/Web/API/AbortController#abortcontroller.signal) geerbt.

## Beispiele

> [!NOTE]
> Weitere "Live"-Beispiele finden Sie unter: [Prioritized Task Scheduling API Examples](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

Zuerst erstellen wir einen Task-Controller, der die Priorität seines zugehörigen Signals auf `user-blocking` setzt.

```js
// Create a TaskController, setting its signal priority to 'user-blocking'
const controller = new TaskController({ priority: "user-blocking" });
```

Dann fügen wir einen Ereignis-Listener für [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignisse hinzu (hier wird `addEventListener()` aufgerufen, aber wir könnten stattdessen einen Handler auf `TaskSignal.onprioritychange` zuweisen).
Der Handler verwendet [previousPolicy](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) auf dem Ereignis, um die ursprüngliche Priorität zu erhalten, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) auf dem Ereignisziel, um die neue Priorität zu erhalten.

```js
// Listen for 'prioritychange' events on the controller's signal.
controller.signal.addEventListener("prioritychange", (event) => {
  const previousPriority = event.previousPriority;
  const newPriority = event.target.priority;
  console.log(`Priority changed from ${previousPriority} to ${newPriority}.`);
});
```

Wir können auch auf [`abort`](/de/docs/Web/API/AbortSignal/abort_event)-Ereignisse wie unten gezeigt hören.
Dieser Ansatz würde auch verwendet, wenn der Controller ein `AbortController` wäre.

```js
controller.signal.addEventListener("abort", (event) => {
  console.log("Task aborted");
});
```

Als Nächstes posten wir die Aufgabe und übergeben das Controller-Signal im optionalen Argument.
In diesem Fall ist die Aufgabe nur eine Pfeilfunktion, die das Versprechen auflöst, indem sie einigen Text zurückgibt.
Wir verwenden `then` und `catch`, um zu handhaben, wann die Aufgabe gelöst oder abgelehnt wird, wobei in jedem Fall der Rückgabewert oder der Fehler geloggt wird.
Beachten Sie, dass wir in einem späteren Codeblock die Aufgabe abbrechen, sodass nur der `catch()`-Block tatsächlich ausgeführt wird!

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
Dies löst das zugehörige `prioritychange`-Ereignis aus.

```js
// Change the priority to 'background' using the controller
controller.setPriority("background");
```

Abschließend kann die Aufgabe durch Aufruf von [`abort()`](/de/docs/Web/API/AbortController/abort) am Controller abgebrochen werden.

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
