---
title: TaskController
slug: Web/API/TaskController
l10n:
  sourceCommit: 4854b2e695bd40ec2a124e15bf57b032f96e493d
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Das **`TaskController`** Interface der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) repräsentiert ein Controller-Objekt, das verwendet werden kann, um sowohl eine Abbruchaktion als auch eine Änderung der [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) für eine oder mehrere priorisierte Aufgaben vorzunehmen.
Wenn es nicht erforderlich ist, die Aufgabenprioritäten zu ändern, kann stattdessen [`AbortController`](/de/docs/Web/API/AbortController) verwendet werden.

Eine neue `TaskController`-Instanz wird mit dem [`TaskController()`](/de/docs/Web/API/TaskController/TaskController) Konstruktor erstellt, wobei optional eine [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) für das zugehörige Signal (ein [`TaskSignal`](/de/docs/Web/API/TaskSignal)) angegeben wird.
Wenn keine Priorität angegeben wird, hat das Signal standardmäßig eine Priorität von [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible).

Das Signal des Controllers kann als Argument für die Methode [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) für eine oder mehrere Aufgaben übergeben werden.
Für [veränderbare Aufgaben](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) (nur) wird die Aufgabe mit der Signalpriorität initialisiert und kann später durch Aufruf von [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) geändert werden.
Für unveränderliche Aufgaben wird jede vom Controller initialisierte oder gesetzte Priorität ignoriert.

Aufgaben können durch Aufruf von [`abort()`](/de/docs/Web/API/AbortController/abort) am Controller abgebrochen werden.

{{InheritanceDiagram}}

## Konstruktor

- [`TaskController()`](/de/docs/Web/API/TaskController/TaskController)
  - : Erstellt ein neues `TaskController`-Objekt, wobei optional die Priorität des zugehörigen [`signal`](#taskcontroller.signal) angegeben wird.

## Instanzmethoden

_Dieses Interface übernimmt auch die Methoden seines Elternteils, [`AbortController`](/de/docs/Web/API/AbortController)._

- [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority)
  - : Setzt die Priorität des [`signal`](#taskcontroller.signal) des Controllers und damit die Priorität aller Aufgaben, mit denen es verbunden ist.
    Diese Benachrichtigt die Beobachter der Prioritätsänderung durch das Auslösen eines [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event) Ereignisses.

## Instanzeigenschaften

_Dieses Interface übernimmt auch die Eigenschaften seines Elternteils, [`AbortController`](/de/docs/Web/API/AbortController)._

- `TaskController.signal` {{ReadOnlyInline}}
  - : Gibt eine Instanz des [`TaskSignal`](/de/docs/Web/API/TaskSignal) Objekts zurück.
    Das Signal wird an Aufgaben übergeben, damit sie vom Controller abgebrochen oder neu priorisiert werden können.
    Diese Eigenschaft wird von [`AbortController`](/de/docs/Web/API/AbortController/signal) geerbt.

## Beispiele

> [!NOTE]
> Zusätzliche "live" Beispiele finden Sie in: [Prioritized Task Scheduling API Examples](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

Zuerst erstellen wir einen Task-Controller und setzen die Priorität seines zugehörigen Signals auf `user-blocking`.

```js
// Create a TaskController, setting its signal priority to 'user-blocking'
const controller = new TaskController({ priority: "user-blocking" });
```

Dann fügen wir einen Ereignis-Listener für [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event) Ereignisse hinzu (hier wird `addEventListener()` aufgerufen, aber wir könnten stattdessen einen Handler zu `TaskSignal.onprioritychange` zuweisen).
Der Handler verwendet [previousPolicy](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) beim Ereignis, um die ursprüngliche Priorität zu erhalten, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) beim Ereignisziel, um die neue Priorität zu erhalten.

```js
// Listen for 'prioritychange' events on the controller's signal.
controller.signal.addEventListener("prioritychange", (event) => {
  const previousPriority = event.previousPriority;
  const newPriority = event.target.priority;
  console.log(`Priority changed from ${previousPriority} to ${newPriority}.`);
});
```

Wir können auch auf [`abort`](/de/docs/Web/API/AbortSignal/abort_event) Ereignisse wie unten gezeigt hören.
Diese Vorgehensweise würde auch verwendet, wenn der Controller ein `AbortController` wäre.

```js
controller.signal.addEventListener(
  "abort",
  (event) => {
    console.log("Task aborted");
  },
  { once: true },
);
```

Als Nächstes veröffentlichen wir die Aufgabe und übergeben das Controllersignal im optionalen Argument.
In diesem Fall ist die Aufgabe einfach eine Pfeilfunktion, die das Versprechen durch Zurückgeben eines Textes auflöst.
Wir verwenden `then` und `catch`, um zu behandeln, wann die Aufgabe aufgelöst oder abgelehnt wird, und protokollieren den Rückgabetext oder den Fehler in jedem Fall.
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
Dadurch wird das zugehörige `prioritychange` Ereignis ausgelöst.

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
