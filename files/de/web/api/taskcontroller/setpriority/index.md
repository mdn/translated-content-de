---
title: "TaskController: setPriority() Methode"
short-title: setPriority()
slug: Web/API/TaskController/setPriority
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`setPriority()`**-Methode der [`TaskController`](/de/docs/Web/API/TaskController)-Schnittstelle kann aufgerufen werden, um eine neue [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) für das Signal dieses Controllers zu setzen.
Wenn eine priorisierte Aufgabe [konfiguriert](/de/docs/Web/API/Scheduler/postTask#signal) ist, um das Signal zu verwenden, wird dadurch auch die Aufgabenpriorität geändert.

Beobachter werden über Prioritätsänderungen durch das Auslösen eines [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignisses benachrichtigt.
Die Methode benachrichtigt nur, wenn die Priorität tatsächlich geändert wird (das Ereignis wird nicht ausgelöst, wenn die Priorität durch den Aufruf nicht geändert würde).

Beachten Sie, dass die Aufgabenpriorität nur für [Aufgaben mit veränderbaren Prioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) geändert werden kann.
Wenn die Aufgabe unveränderbar ist, wird der Funktionsaufruf ignoriert.

## Syntax

```js-nolint
setPriority(priority)
```

### Parameter

- `priority`
  - : Die [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe.
    Eine der folgenden: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Eine Prioritätsänderung wurde gestartet, während bereits eine läuft.

## Beispiele

Zuerst erstellen wir einen Task-Controller.
In diesem Fall geben wir keine Priorität an, also wird `user-visible` als Standard verwendet.

```js
// Create a TaskController with default priority: 'user-visible'
const controller = new TaskController();
```

Dann übergeben wir das Signal des Controllers an die [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask#signal)-Methode.

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

Der Controller kann dann verwendet werden, um die Priorität zu ändern.

```js
// Change the priority to 'background' using the controller
controller.setPriority("background");
```

Zusätzliche Beispiele, einschließlich wie das Ereignis, das sich aus einer Prioritätsänderung ergibt, behandelt werden kann, finden Sie hier: [Prioritized Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
