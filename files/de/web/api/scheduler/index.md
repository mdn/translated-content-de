---
title: Scheduler
slug: Web/API/Scheduler
l10n:
  sourceCommit: 66f1ba7918610f1145cde4a1d2d7ecb3baea5f65
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Das **`Scheduler`**-Interface der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet Methoden zum Planen priorisierter Aufgaben.

Ein `Scheduler` kann von der globalen Objektinstanz über [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) oder [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) innerhalb eines Workers abgerufen werden.

## Instanzeigenschaften

Keine.

## Instanzmethoden

- [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)
  - : Fügt dem Scheduler eine Aufgabe als Callback hinzu, wobei optional eine Priorität, eine Verzögerung und/oder ein Signal zum Abbrechen der Aufgabe angegeben werden kann.
- [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield)
  - : Gibt die Kontrolle über den Haupt-Thread an den Browser zurück, wobei ein Promise zurückgegeben wird, das die Ausführung dort fortsetzt, wo sie unterbrochen wurde.

## Beispiele

Wenn die Funktion definiert ist, wird eine Instanz dieses Objekts durch die {{jsxref("globalThis")}}-Eigenschaft sowohl in Workern als auch im Haupt-Thread zurückgegeben.

Der folgende Code zeigt eine einfache Aufgabe, die mit dem Text 'Task executing' aufgelöst wird.
Dieser Text wird bei Erfolg protokolliert.
Der Code zeigt auch einen `catch`-Block, der in komplexeren Code erforderlich wäre, um zu verarbeiten, wenn eine Aufgabe abgebrochen wird oder einen Fehler auslöst.

```js
if ("scheduler" in this) {
  // Post task with default priority: 'user-visible' (no other options)
  // When the task resolves, Promise.then() logs the result.
  scheduler
    .postTask(() => "Task executing")
    .then((taskResult) => console.log(`${taskResult}`)) // Log result
    .catch((error) => console.error(`Error: ${error}`)); // Log errors
}
```

Für umfassendere Beispielcodes siehe [Prioritized Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
