---
title: "TaskPriorityChangeEvent: vorherigePriorität-Eigenschaft"
short-title: previousPriority
slug: Web/API/TaskPriorityChangeEvent/previousPriority
l10n:
  sourceCommit: 33313b7c9e37253c0141e22558e298d08c060be5
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`previousPriority`**-Eigenschaft des [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent)-Interfaces gibt die Priorität des entsprechenden [`TaskSignal`](/de/docs/Web/API/TaskSignal) zurück, bevor diese geändert wurde und dieses [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis ausgelöst wurde.

Dies ist der Wert, der im [`TaskPriorityChangeEvent`-Konstruktor](/de/docs/Web/API/TaskPriorityChangeEvent/TaskPriorityChangeEvent)-Argument `options.previous` festgelegt wurde. <!-- link? -->

Die neue Priorität der Aufgabe kann durch `event.target.priority` gelesen werden.

## Wert

Ein String, der die Priorität der zugehörigen Aufgabe angibt, bevor sie geändert wurde.
Dieser wird einer der folgenden sein: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background).

## Beispiele

Der untenstehende Code zeigt, wie `previousPriority` in einem Handler für ein `prioritychange`-Ereignis abgerufen wird.

```js
// Listen for 'prioritychange' events on the controller's signal.
controller.signal.addEventListener("prioritychange", (event) => {
  const previousPriority = event.previousPriority;
  const newPriority = event.target.priority;
  console.log(
    `The priority changed from ${previousPriority} to ${newPriority}.`,
  );
});
```

Ein vollständigeres Live-Beispiel kann in [`prioritychange` event > Examples](/de/docs/Web/API/TaskSignal/prioritychange_event) gefunden werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
