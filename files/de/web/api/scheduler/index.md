---
title: Scheduler
slug: Web/API/Scheduler
l10n:
  sourceCommit: 79f75809844204ce0dd5a1411095b7851711cdeb
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Das **`Scheduler`**-Interface der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet Methoden zum Planen von priorisierten Aufgaben.

Ein `Scheduler` kann über das globale Objekt mittels [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) oder [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) innerhalb eines Workers aufgerufen werden.

## Instanzeigenschaften

Keine.

## Instanzmethoden

- [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)
  - : Fügt dem Scheduler eine Aufgabe als Rückruf hinzu und kann optional eine Priorität, Verzögerung und/oder ein Signal zum Abbrechen der Aufgabe angeben.
- [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield) {{experimental_inline}}
  - : Gibt die Kontrolle des Hauptthreads zurück an den Browser und gibt ein Promise zurück, das die Ausführung an der Stelle fortsetzt, an der sie unterbrochen wurde.

## Beispiele

Wenn das Feature definiert ist, wird eine Instanz dieses Objekts durch die {{jsxref("globalThis")}}-Eigenschaft sowohl in Workers als auch im Hauptthread zurückgegeben.

Der folgende Code zeigt eine einfache Aufgabe, die mit dem Text 'Task executing' aufgelöst wird. Dieser Text wird bei Erfolg protokolliert. Der Code zeigt auch einen `catch`-Block, der in komplexerer Programmierung erforderlich wäre, um den Fall zu behandeln, wenn eine Aufgabe abgebrochen wird oder einen Fehler wirft.

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
