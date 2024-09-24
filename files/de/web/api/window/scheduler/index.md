---
title: "Window: scheduler-Eigenschaft"
short-title: scheduler
slug: Web/API/Window/scheduler
l10n:
  sourceCommit: b2323759014333d2f36a27b05539d4856eb7f1fe
---

{{APIRef("Prioritized Task Scheduling API")}}

Die **`scheduler`**-Eigenschaft des {{domxref("Window")}}-Interfaces ist der Einstiegspunkt zur Nutzung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).

Das Objekt verfügt über eine einzige Instanzmethode {{domxref('Scheduler.postTask()')}}, die verwendet wird, um priorisierte Aufgaben zur Planung zu posten.

## Wert

Ein {{domxref("Scheduler")}}.

## Beispiele

Der folgende Code zeigt eine sehr grundlegende Verwendung der Eigenschaft und ihres zugehörigen Interfaces.
Es wird demonstriert, wie überprüft wird, ob die Eigenschaft existiert, und dann eine Aufgabe gepostet wird, die ein Promise zurückgibt.

```js
// Überprüfen, ob die API zur priorisierten Aufgabenplanung unterstützt wird
if ("scheduler" in window) {
  // Rückruffunktion - "die Aufgabe"
  const myTask = () => "Task 1: benutzer-sichtbar";

  // Aufgabe mit Standardpriorität posten: 'benutzer-sichtbar' (keine weiteren Optionen)
  // Wenn die Aufgabe gelöst wird, protokolliert Promise.then() das Ergebnis.
  window.scheduler
    .postTask(myTask)
    // Verarbeite den gelösten Wert
    .then((taskResult) => console.log(`${taskResult}`))
    // Verarbeite Fehler oder Abbruch
    .catch((error) => console.log(`Fehler: ${error}`));
} else {
  console.log("Funktion: NICHT unterstützt");
}
```

Für umfassende Beispielcodes zur Verwendung der API siehe [Prioritized Task Scheduling API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API)
- {{domxref('Scheduler.postTask()')}}
- {{domxref('TaskController')}}
- {{domxref("WorkerGlobalScope.scheduler")}}
