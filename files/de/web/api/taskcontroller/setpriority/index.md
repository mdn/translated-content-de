---
title: "TaskController: Methode setPriority()"
short-title: setPriority()
slug: Web/API/TaskController/setPriority
l10n:
  sourceCommit: 33313b7c9e37253c0141e22558e298d08c060be5
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`setPriority()`**-Methode der [`TaskController`](/de/docs/Web/API/TaskController)-Schnittstelle kann aufgerufen werden, um eine neue [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) für das [`signal`](/de/docs/Web/API/TaskController#taskcontroller.signal) dieses Controllers festzulegen. Wenn eine priorisierte Aufgabe [konfiguriert](/de/docs/Web/API/Scheduler/postTask#signal) ist, das Signal zu verwenden, wird dadurch auch die Aufgabenpriorität geändert.

Beobachter werden über Prioritätsänderungen benachrichtigt, indem ein [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis ausgelöst wird. Die Methode benachrichtigt nur dann, wenn sich die Priorität tatsächlich ändert (das Ereignis wird nicht ausgelöst, wenn die Priorität durch den Aufruf nicht geändert würde).

Beachten Sie, dass die Aufgabenpriorität nur für [Aufgaben mit veränderlichen Prioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) geändert werden kann. Ist die Aufgabe unveränderlich, wird der Funktionsaufruf ignoriert.

## Syntax

```js-nolint
setPriority(priority)
```

### Parameter

- `priority`
  - : Die [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe. Eine der folgenden: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background).

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Eine Prioritätsänderung wurde gestartet, während bereits eine im Gange ist.

## Beispiele

Zuerst erstellen wir einen Task-Controller. In diesem Fall geben wir keine Priorität an, sodass sie standardmäßig auf `user-visible` eingestellt wird.

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

Weitere Beispiele, einschließlich der Darstellung, wie das Ereignis gehandhabt wird, das aus der Änderung der Priorität resultiert, finden Sie unter: [Priorisierte Task-Scheduling-API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
