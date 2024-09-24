---
title: "TaskController: setPriority()-Methode"
short-title: setPriority()
slug: Web/API/TaskController/setPriority
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Prioritized Task Scheduling API")}}

Die **`setPriority()`**-Methode der {{domxref("TaskController")}}-Schnittstelle kann aufgerufen werden, um eine neue [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) für das `signal` dieses Controllers festzulegen.
Wenn eine priorisierte Aufgabe [konfiguriert](/de/docs/Web/API/Scheduler/postTask#signal) ist, um das Signal zu verwenden, ändert sich dadurch auch die Aufgabenpriorität.

Beobachter werden über Prioritätsänderungen benachrichtigt, indem ein [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Event ausgelöst wird.
Die Methode benachrichtigt nur, wenn sich die Priorität tatsächlich ändert (das Ereignis wird nicht ausgelöst, wenn sich die Priorität durch den Aufruf nicht ändern würde).

Beachten Sie, dass die Aufgabenpriorität nur für [Aufgaben mit veränderlichen Prioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) geändert werden kann.
Wenn die Aufgabe unveränderlich ist, wird der Funktionsaufruf ignoriert.

## Syntax

```js-nolint
setPriority(priority)
```

### Parameter

- `priority`
  - : Die [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe.
    Eine von: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Eine Prioritätsänderung wurde gestartet, während eine bereits läuft.

## Beispiele

Zuerst erstellen wir einen Aufgaben-Controller.
In diesem Fall bestimmen wir keine Priorität, also wird sie standardmäßig `user-visible` sein.

```js
// Create a TaskController with default priority: 'user-visible'
const controller = new TaskController();
```

Dann übergeben wir das Signal des Controllers an die Methode [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask#signal).

```js
// Post task passing the controller's signal.
// The signal priority sets the initial priority of the task
scheduler
  .postTask(() => "Task execute", { signal: controller.signal })
  .then((taskResult) => {
    console.log(`${taskResult}`);
  }) // Run on success)
  .catch((error) => {
    console.log(`Catch error: ${error}`);
  }); // Run on fail
```

Der Controller kann dann verwendet werden, um die Priorität zu ändern

```js
// Change the priority to 'background' using the controller
controller.setPriority("background");
```

Zusätzliche Beispiele, einschließlich der Handhabung des Ereignisses, das sich aus der Prioritätsänderung ergibt, finden Sie in: [Prioritized Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
