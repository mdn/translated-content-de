---
title: TaskController
slug: Web/API/TaskController
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Priorisierte Task Scheduling API")}}

Das **`TaskController`**-Interface der [Priorisierten Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) stellt ein Controller-Objekt dar, das zum Abbrechen und Ändern der [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) einer oder mehrerer priorisierter Aufgaben verwendet werden kann. Wenn es nicht notwendig ist, die Priorität von Aufgaben zu ändern, kann stattdessen {{domxref("AbortController")}} verwendet werden.

Eine neue Instanz von `TaskController` wird mithilfe des {{domxref("TaskController.TaskController()", "TaskController()")}}-Konstruktors erstellt, wobei optional eine [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) für das zugehörige Signal (ein {{domxref("TaskSignal")}}) angegeben wird. Wenn keine Priorität angegeben wird, hat das Signal standardmäßig die Priorität [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible).

Das Signal des Controllers kann als Argument an die Methode {{domxref("Scheduler.postTask()")}} für eine oder mehrere Aufgaben übergeben werden. Für [änderbare Aufgaben](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) (nur) wird die Aufgabe mit der Priorität des Signals initialisiert und kann später durch Aufruf von {{domxref('TaskController.setPriority()')}} geändert werden. Für unveränderliche Aufgaben wird jede vom Controller initialisierte oder gesetzte Priorität ignoriert.

Aufgaben können abgebrochen werden, indem {{domxref("AbortController.abort()", "abort()")}} am Controller aufgerufen wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("TaskController.TaskController", "TaskController()")}}
  - : Erstellt ein neues `TaskController`-Objekt, wobei optional die Priorität des zugehörigen [`signals`](#taskcontroller.signal) angegeben wird.

## Instanzmethoden

_Dieses Interface erbt auch die Methoden seiner Elternklasse, {{domxref("AbortController")}}._

- {{domxref('TaskController.setPriority()')}}
  - : Legt die Priorität des [`signal`](#taskcontroller.signal) des Controllers fest und damit die Priorität aller Aufgaben, mit denen es assoziiert ist. Dies benachrichtigt Beobachter über die Prioritätsänderung durch Auslösen eines [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Events.

## Instanzeigenschaften

_Dieses Interface erbt auch die Eigenschaften seiner Elternklasse, {{domxref("AbortController")}}._

- `TaskController.signal` {{ReadOnlyInline}}
  - : Gibt eine Instanz eines {{domxref("TaskSignal")}}-Objekts zurück. Das Signal wird an Aufgaben übergeben, damit sie vom Controller abgebrochen oder neu priorisiert werden können. Die Eigenschaft wird von [`AbortController`](/de/docs/Web/API/AbortController#abortcontroller.signal) geerbt.

## Beispiele

> [!NOTE]
> Weitere "Live"-Beispiele finden Sie unter: [Priorisierte Task Scheduling API Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

Zuerst erstellen wir einen Task-Controller und setzen die Priorität seines zugehörigen Signals auf `user-blocking`.

```js
// Create a TaskController, setting its signal priority to 'user-blocking'
const controller = new TaskController({ priority: "user-blocking" });
```

Dann fügen wir einen Ereignis-Listener für [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Events hinzu (hier wird `addEventListener()` aufgerufen, aber alternativ könnte ein Handler `TaskSignal.onprioritychange` zugewiesen werden). Der Handler verwendet [previousPolicy](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) des Ereignisses, um die ursprüngliche Priorität zu ermitteln und {{domxref("TaskSignal.priority")}} des Ereignisziels, um die neue Priorität abzurufen.

```js
// Listen for 'prioritychange' events on the controller's signal.
controller.signal.addEventListener("prioritychange", (event) => {
  const previousPriority = event.previousPriority;
  const newPriority = event.target.priority;
  console.log(`Priority changed from ${previousPriority} to ${newPriority}.`);
});
```

Wir können auch für [`abort`](/de/docs/Web/API/AbortSignal/abort_event)-Events wie unten gezeigt lauschen. Dieser Ansatz würde ebenfalls verwendet werden, wenn der Controller ein `AbortController` wäre.

```js
controller.signal.addEventListener("abort", (event) => {
  console.log("Task aborted");
});
```

Als Nächstes posten wir die Aufgabe und übergeben das Controller-Signal im optionalen Argument. In diesem Fall ist die Aufgabe einfach eine Pfeilfunktion, die das Versprechen löst, indem sie etwas Text zurückgibt. Wir verwenden `then` und `catch`, um zu behandeln, wann die Aufgabe aufgelöst oder verworfen wird, und protokollieren den Rückgabetext oder den Fehler in jedem Fall. Beachten Sie, dass in einem späteren Codeblock die Aufgabe abgebrochen wird, sodass tatsächlich nur der `catch()`-Block ausgeführt wird!

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

Wir können den Controller verwenden, um die Aufgabe zu verwalten. Hier können wir die Priorität mithilfe von {{domxref('TaskController.setPriority()')}} ändern. Dies wird das zugehörige `prioritychange`-Ereignis auslösen.

```js
// Change the priority to 'background' using the controller
controller.setPriority("background");
```

Schließlich kann die Aufgabe abgebrochen werden, indem {{domxref("AbortController.abort()", "abort()")}} am Controller aufgerufen wird.

```js
// Abort the task
controller.abort();
```

Die Konsolenausgabe dieses Beispiels würde lauten:

```plain
The priority changed from user-blocking to background.
Task aborted
Catch error: AbortError
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
