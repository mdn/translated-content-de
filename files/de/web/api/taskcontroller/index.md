---
title: TaskController
slug: Web/API/TaskController
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`TaskController`**-Schnittstelle der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) stellt ein Controller-Objekt dar, mit dem sich eine oder mehrere priorisierte Tasks sowohl abbrechen als auch in ihrer [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) ändern lassen.
Wenn die Prioritäten von Tasks nicht geändert werden müssen, kann stattdessen [`AbortController`](/de/docs/Web/API/AbortController) verwendet werden.

Eine neue `TaskController`-Instanz wird mit dem Konstruktor [`TaskController()`](/de/docs/Web/API/TaskController/TaskController) erstellt. Dabei kann optional eine [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) für das zugehörige Signal (ein [`TaskSignal`](/de/docs/Web/API/TaskSignal)) angegeben werden.
Wenn keine Priorität angegeben wird, hat das Signal standardmäßig die Priorität [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible).

Das Signal des Controllers kann für eine oder mehrere Tasks als Argument an die Methode [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask) übergeben werden.
Nur bei [Tasks mit veränderbarer Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) wird der Task mit der Priorität des Signals initialisiert; diese kann später durch einen Aufruf von [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) geändert werden.
Bei Tasks mit unveränderlicher Priorität wird jede vom Controller festgelegte oder geänderte Priorität ignoriert.

Tasks können durch einen Aufruf von [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller abgebrochen werden.

{{InheritanceDiagram}}

## Konstruktor

- [`TaskController()`](/de/docs/Web/API/TaskController/TaskController)
  - : Erstellt ein neues `TaskController`-Objekt. Dabei kann optional die Priorität des zugehörigen [`signal`](#taskcontroller.signal) angegeben werden.

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem die Eigenschaften ihrer übergeordneten Schnittstelle [`AbortController`](/de/docs/Web/API/AbortController)._

- `TaskController.signal` {{ReadOnlyInline}}
  - : Gibt eine [`TaskSignal`](/de/docs/Web/API/TaskSignal)-Objektinstanz zurück.
    Das Signal wird an Tasks übergeben, damit der Controller sie abbrechen oder ihre Priorität ändern kann.
    Die Eigenschaft wird von [`AbortController`](/de/docs/Web/API/AbortController/signal) geerbt.

## Instanzmethoden

_Diese Schnittstelle erbt außerdem die Methoden ihrer übergeordneten Schnittstelle [`AbortController`](/de/docs/Web/API/AbortController)._

- [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority)
  - : Legt die Priorität des [`signal`](#taskcontroller.signal) des Controllers fest und damit auch die Priorität aller zugehörigen Tasks.
    Beobachter werden über die Prioritätsänderung benachrichtigt, indem ein [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis ausgelöst wird.

## Beispiele

> [!NOTE]
> Weitere interaktive Beispiele finden Sie unter [Beispiele zur Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

Zunächst erstellen wir einen Task-Controller und setzen die Priorität des zugehörigen Signals auf `user-blocking`.

```js
// Create a TaskController, setting its signal priority to 'user-blocking'
const controller = new TaskController({ priority: "user-blocking" });
```

Anschließend fügen wir einen Event-Listener für [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignisse hinzu (hier wird `addEventListener()` aufgerufen; alternativ könnten wir `TaskSignal.onprioritychange` einen Handler zuweisen).
Der Handler verwendet [previousPolicy](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) auf dem Ereignis, um die ursprüngliche Priorität zu ermitteln, und [`TaskSignal.priority`](/de/docs/Web/API/TaskSignal/priority) auf dem Ereignisziel, um die neue Priorität zu ermitteln.

```js
// Listen for 'prioritychange' events on the controller's signal.
controller.signal.addEventListener("prioritychange", (event) => {
  const previousPriority = event.previousPriority;
  const newPriority = event.target.priority;
  console.log(`Priority changed from ${previousPriority} to ${newPriority}.`);
});
```

Wie unten gezeigt, können wir auch auf [`abort`](/de/docs/Web/API/AbortSignal/abort_event)-Ereignisse reagieren.
Denselben Ansatz würden wir verwenden, wenn der Controller ein `AbortController` wäre.

```js
controller.signal.addEventListener(
  "abort",
  (event) => {
    console.log("Task aborted");
  },
  { once: true },
);
```

Als Nächstes planen wir den Task ein und übergeben das Signal des Controllers als optionales Argument.
In diesem Fall ist der Task lediglich eine Pfeilfunktion, die das Promise durch die Rückgabe eines Textes erfüllt.
Mit `then` und `catch` behandeln wir, ob der Task erfolgreich abgeschlossen oder zurückgewiesen wird, und protokollieren jeweils den zurückgegebenen Text oder den Fehler.
Beachten Sie, dass wir den Task in einem späteren Codeblock abbrechen. Daher wird tatsächlich nur der `catch()`-Block ausgeführt!

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

Mit dem Controller können wir den Task verwalten.
Hier können wir die Priorität mit [`TaskController.setPriority()`](/de/docs/Web/API/TaskController/setPriority) ändern.
Dadurch wird das zugehörige `prioritychange`-Ereignis ausgelöst.

```js
// Change the priority to 'background' using the controller
controller.setPriority("background");
```

Schließlich kann der Task durch einen Aufruf von [`abort()`](/de/docs/Web/API/AbortController/abort) auf dem Controller abgebrochen werden.

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
