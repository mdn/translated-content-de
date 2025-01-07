---
title: "TaskPriorityChangeEvent: Eigenschaft previousPriority"
short-title: previousPriority
slug: Web/API/TaskPriorityChangeEvent/previousPriority
l10n:
  sourceCommit: 3dd7df0af3b0ada1a7c5784cc2bc5448adcda8af
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`previousPriority`** der Schnittstelle [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent) gibt die Priorität des entsprechenden [`TaskSignal`](/de/docs/Web/API/TaskSignal) zurück, bevor sie geändert wurde und dieses [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event) Ereignis ausgelöst wurde.

Dies ist der Wert, der im Argument `options.previous` des [`TaskPriorityChangeEvent` Konstruktors](/de/docs/Web/API/TaskPriorityChangeEvent/TaskPriorityChangeEvent) gesetzt wurde.

Die neue Priorität der Aufgabe kann von `event.target.priority` abgelesen werden.

## Wert

Ein String, der die Priorität der zugehörigen Aufgabe angibt, bevor sie geändert wurde.
Dies wird einer der folgenden sein: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background).

## Beispiele

Der untenstehende Code zeigt, wie `previousPriority` in einem Handler für ein `prioritychange` Ereignis abgerufen wird.

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

Ein vollständigeres Live-Beispiel finden Sie unter [`prioritychange` event > Examples](/de/docs/Web/API/TaskSignal/prioritychange_event).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
