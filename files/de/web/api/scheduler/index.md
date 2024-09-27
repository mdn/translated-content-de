---
title: Scheduler
slug: Web/API/Scheduler
l10n:
  sourceCommit: 3c359c63c1b58e10bdfe3bec2c245ea626560427
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die **`Scheduler`**-Schnittstelle der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet Methoden zum Planen von priorisierten Aufgaben.

Ein `Scheduler` kann über das globale Objekt mit [`Window.scheduler`](/de/docs/Web/API/Window/scheduler) oder innerhalb eines Workers mit [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) aufgerufen werden.

## Instanzeigenschaften

Keine.

## Instanzmethoden

- [`Scheduler.postTask()`](/de/docs/Web/API/Scheduler/postTask)
  - : Fügt dem Scheduler eine Aufgabe als Rückruf hinzu, wobei optional eine Priorität, ein Verzögerungszeitraum und/oder ein Signal zum Abbrechen der Aufgabe angegeben werden kann.
- [`Scheduler.yield()`](/de/docs/Web/API/Scheduler/yield)
  - : Gibt die Kontrolle des Hauptthreads an den Browser zurück und gibt ein Promise zurück, das aufgelöst wird, um die Ausführung dort fortzusetzen, wo sie unterbrochen wurde.

## Beispiele

Wenn das Feature definiert ist, wird von der {{jsxref("globalThis")}}-Eigenschaft sowohl in Workern als auch im Hauptthread eine Instanz dieses Objekts zurückgegeben.

Der folgende Code zeigt eine einfache Aufgabe, die mit dem Text 'Task executing' erfüllt wird.
Dieser Text wird bei Erfolg protokolliert.
Der Code zeigt auch einen `catch`-Block, der in komplexeren Codes erforderlich wäre, um zu behandeln, wenn eine Aufgabe abgebrochen wird oder ein Fehler auftritt.

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

Für einen umfassenderen Beispielcode siehe [Prioritized Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
