---
title: "WorkerGlobalScope: scheduler-Eigenschaft"
short-title: scheduler
slug: Web/API/WorkerGlobalScope/scheduler
l10n:
  sourceCommit: 3c359c63c1b58e10bdfe3bec2c245ea626560427
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`scheduler`** des [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interfaces ist der Einstiegspunkt zur Nutzung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).

Sie gibt eine Instanz des [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekts zurück, die die Methoden [`postTask()`](/de/docs/Web/API/Scheduler/postTask) und [`yield()`](/de/docs/Web/API/Scheduler/yield) enthält, die zur Planung von priorisierten Aufgaben verwendet werden können.

## Wert

Ein [`Scheduler`](/de/docs/Web/API/Scheduler).

## Beispiele

Der unten stehende Code zeigt eine sehr grundlegende Verwendung der Eigenschaft und ihres zugehörigen Interfaces.
Es wird demonstriert, wie überprüft wird, ob die Eigenschaft existiert, und dann eine Aufgabe erstellt wird, die ein Versprechen zurückgibt.

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

Für umfassenden Beispielcode zur Verwendung der API siehe [Prioritized Task Scheduling API > Examples](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

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
