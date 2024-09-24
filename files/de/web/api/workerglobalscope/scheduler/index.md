---
title: "WorkerGlobalScope: scheduler-Eigenschaft"
short-title: scheduler
slug: Web/API/WorkerGlobalScope/scheduler
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers("worker")}}

Die **`scheduler`** schreibgeschützte Eigenschaft der {{domxref("WorkerGlobalScope")}}-Schnittstelle ist der Einstiegspunkt zur Verwendung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).

Das Objekt besitzt eine einzelne Instanzmethode {{domxref('Scheduler.postTask()')}}, die verwendet wird, um priorisierte Aufgaben zur Planung zu übermitteln.

## Wert

Ein {{domxref("Scheduler")}}.

## Beispiele

Der folgende Code zeigt eine sehr grundlegende Verwendung der Eigenschaft und der zugehörigen Schnittstelle.
Es wird demonstriert, wie überprüft wird, ob die Eigenschaft existiert, und dann eine Aufgabe übermittelt wird, die ein Promise zurückgibt.

```js
// Überprüfen, ob die Priorisierte Task API unterstützt wird
if ("scheduler" in self) {
  // Callback-Funktion - "die Aufgabe"
  const myTask = () => "Task 1: benutzersichtbar";

  // Aufgabe mit Standardpriorität übermitteln: 'user-visible' (keine weiteren Optionen)
  // Wenn die Aufgabe gelöst wird, protokolliert Promise.then() das Ergebnis.
  self.scheduler
    .postTask(myTask)
    // Verarbeite gelösten Wert
    .then((taskResult) => console.log(`${taskResult}`))
    // Verarbeite Fehler oder Abbruch
    .catch((error) => console.log(`Error: ${error}`));
} else {
  console.log("Feature: NICHT unterstützt");
}
```

Für umfassenden Beispielcode zur Verwendung der API siehe [Prioritized Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API)
- {{domxref('Scheduler.postTask()')}}
- {{domxref('TaskController')}}
- {{domxref("Window.scheduler")}}
