---
title: "WorkerGlobalScope: scheduler-Eigenschaft"
short-title: scheduler
slug: Web/API/WorkerGlobalScope/scheduler
l10n:
  sourceCommit: 3c359c63c1b58e10bdfe3bec2c245ea626560427
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`scheduler`**-Eigenschaft des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces ist der Einstiegspunkt zur Verwendung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).

Sie gibt eine [`Scheduler`](/de/docs/Web/API/Scheduler)-Objektinstanz zurück, die die Methoden [`postTask()`](/de/docs/Web/API/Scheduler/postTask) und [`yield()`](/de/docs/Web/API/Scheduler/yield) enthält, mit denen priorisierte Aufgaben geplant werden können.

## Wert

Ein [`Scheduler`](/de/docs/Web/API/Scheduler).

## Beispiele

Der untenstehende Code zeigt eine sehr einfache Verwendung der Eigenschaft und ihres zugehörigen Interfaces.
Er demonstriert, wie geprüft wird, ob die Eigenschaft existiert, und dann eine Aufgabe gepostet wird, die ein Versprechen zurückgibt.

```js
// Check if the prioritized task API is supported
if ("scheduler" in self) {
  // Callback function - "the task"
  const myTask = () => "Task 1: user-visible";

  // Post task with default priority: 'user-visible' (no other options)
  // When the task resolves, Promise.then() logs the result.
  self.scheduler
    .postTask(myTask)
    // Handle resolved value
    .then((taskResult) => console.log(`${taskResult}`))
    // Handle error or abort
    .catch((error) => console.log(`Error: ${error}`));
} else {
  console.log("Feature: NOT Supported");
}
```

Für umfassende Beispielcodes, die die Verwendung der API zeigen, siehe [Prioritized Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API)
- [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)
- [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield)
- [`TaskController`](/de/docs/Web/API/TaskController)
- [`Window.scheduler`](/de/docs/Web/API/Window/scheduler)
