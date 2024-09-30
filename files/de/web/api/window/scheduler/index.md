---
title: "Window: scheduler-Eigenschaft"
short-title: scheduler
slug: Web/API/Window/scheduler
l10n:
  sourceCommit: 3c359c63c1b58e10bdfe3bec2c245ea626560427
---

{{APIRef("Prioritized Task Scheduling API")}}

Die schreibgeschützte Eigenschaft **`scheduler`** des [`Window`](/de/docs/Web/API/Window)-Interfaces ist der Einstiegspunkt für die Nutzung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).

Sie gibt eine Instanz eines [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekts zurück, das die Methoden [`postTask()`](/de/docs/Web/API/Scheduler/postTask) und [`yield()`](/de/docs/Web/API/Scheduler/yield) enthält, die zur Planung von priorisierten Aufgaben verwendet werden können.

## Wert

Ein [`Scheduler`](/de/docs/Web/API/Scheduler).

## Beispiele

Der untenstehende Code zeigt eine sehr grundlegende Verwendung der Eigenschaft und ihres zugehörigen Interfaces. Es wird demonstriert, wie überprüft wird, ob die Eigenschaft existiert, und dann eine Aufgabe gepostet wird, die ein `Promise` zurückgibt.

```js
// Check if the prioritized task API is supported
if ("scheduler" in window) {
  // Callback function - "the task"
  const myTask = () => "Task 1: user-visible";

  // Post task with default priority: 'user-visible' (no other options)
  // When the task resolves, Promise.then() logs the result.
  window.scheduler
    .postTask(myTask)
    // Handle resolved value
    .then((taskResult) => console.log(`${taskResult}`))
    // Handle error or abort
    .catch((error) => console.log(`Error: ${error}`));
} else {
  console.log("Feature: NOT Supported");
}
```

Für umfassende Beispielcodes zur Verwendung der API siehe [Prioritized Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API)
- [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)
- [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield)
- [`TaskController`](/de/docs/Web/API/TaskController)
- [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler)
