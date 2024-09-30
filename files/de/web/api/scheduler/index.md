---
title: Scheduler
slug: Web/API/Scheduler
l10n:
  sourceCommit: 3c359c63c1b58e10bdfe3bec2c245ea626560427
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Das **`Scheduler`**-Interface der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet Methoden zum Planen von priorisierten Aufgaben.

Ein `Scheduler` kann über das globale Objekt mittels [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) oder [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) innerhalb eines Workers aufgerufen werden.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)
  - : Fügt dem Scheduler eine Aufgabe als Callback hinzu, wobei optional eine Priorität, eine Verzögerung und/oder ein Signal zum Abbrechen der Aufgabe angegeben werden kann.
- [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield)
  - : Gibt die Kontrolle des Haupt-Threads zurück an den Browser und gibt ein Promise zurück, das sich auflöst, um die Ausführung an der Stelle fortzusetzen, an der sie unterbrochen wurde.

## Beispiele

Wenn die Funktion definiert ist, wird eine Instanz dieses Objekts sowohl in Workern als auch im Haupt-Thread durch die {{jsxref("globalThis")}}-Eigenschaft zurückgegeben.

Der folgende Code zeigt eine einfache Aufgabe, die mit dem Text 'Task executing' aufgelöst wird.
Dieser Text wird bei Erfolg protokolliert.
Der Code zeigt auch einen `catch`-Block, der in komplexeren Codes erforderlich wäre, um den Fall zu behandeln, wenn eine Aufgabe abgebrochen wird oder ein Fehler auftritt.

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

Für umfassendere Beispielcodes siehe [Prioritized Task Scheduling API > Examples](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
