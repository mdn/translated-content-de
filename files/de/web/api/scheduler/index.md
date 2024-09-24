---
title: Scheduler
slug: Web/API/Scheduler
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Priorisierte Aufgabenplanung API")}}

Das **`Scheduler`**-Interface der [Priorisierte Aufgabenplanung API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) stellt die Methode {{domxref('Scheduler.postTask()')}} bereit, die zum Hinzufügen prioritärer Aufgaben zur Planung verwendet werden kann.

Ein `Scheduler` kann vom globalen Objekt {{domxref("Window")}} oder {{domxref("WorkerGlobalScope")}} (`this.scheduler`) aus zugegriffen werden.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

- {{domxref('Scheduler.postTask()')}}
  - : Fügt dem Scheduler eine Aufgabe als Callback hinzu, wobei optional Priorität, Verzögerung und/oder ein Signal zum Abbrechen der Aufgabe angegeben werden können.

## Beispiele

Wenn die Funktion definiert ist, wird in sowohl Workern als auch im Hauptthread eine Instanz dieses Objekts vom globalen `this` zurückgegeben.
Die einzige Eigenschaft des Interfaces ist die Methode {{domxref('Scheduler.postTask()','postTask()')}}, die verwendet wird, um die Aufgabe zu posten und ein Versprechen zurückzugeben.

Der nachfolgende Code zeigt eine einfache Aufgabe, die mit dem Text 'Task executing' aufgelöst wird. Dieser Text wird bei Erfolg protokolliert.
Der Code zeigt auch einen `catch`-Block, der in komplexerem Code erforderlich wäre, um zu handhaben, wenn eine Aufgabe abgebrochen wird oder einen Fehler wirft.

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

Für umfassendere Beispielcodes siehe [Priorisierte Aufgabenplanung API > Beispiele](/de/docs/Web/API/Prioritized_Task_Scheduling_API#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
