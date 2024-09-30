---
title: "TaskController: setPriority()-Methode"
short-title: setPriority()
slug: Web/API/TaskController/setPriority
l10n:
  sourceCommit: 33313b7c9e37253c0141e22558e298d08c060be5
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`setPriority()`**-Methode des [`TaskController`](/de/docs/Web/API/TaskController)-Interfaces kann aufgerufen werden, um eine neue [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) für das `signal` dieses Controllers festzulegen. Wenn eine priorisierte Aufgabe so [konfiguriert](/de/docs/Web/API/Scheduler/postTask#signal) ist, dass sie das Signal verwendet, wird dies auch die Priorität der Aufgabe ändern.

Beobachter werden über Prioritätsänderungen benachrichtigt, indem ein [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Event ausgelöst wird. Die Methode benachrichtigt nur, wenn die Priorität tatsächlich geändert wird (das Ereignis wird nicht ausgelöst, wenn der Aufruf die Priorität nicht ändern würde).

Beachten Sie, dass die Aufgabenpriorität nur für [Aufgaben mit veränderlichen Prioritäten](/de/docs/Web/API/Prioritized_Task_Scheduling_API#mutable_and_immutable_task_priority) geändert werden kann. Wenn die Aufgabe unveränderlich ist, wird der Funktionsaufruf ignoriert.

## Syntax

```js-nolint
setPriority(priority)
```

### Parameter

- `priority`
  - : Die [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe. Eine der folgenden: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Eine Prioritätsänderung wurde gestartet, während bereits eine läuft.

## Beispiele

Zuerst erstellen wir einen Task-Controller. In diesem Fall geben wir keine Priorität an, sodass sie standardmäßig `user-visible` ist.

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

Weitere Beispiele, die zeigen, wie das Ereignis behandelt wird, das sich aus der Änderung der Priorität ergibt, finden Sie unter: [Prioritized Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
