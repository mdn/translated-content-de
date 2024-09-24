---
title: "TaskPriorityChangeEvent: previousPriority-Eigenschaft"
short-title: previousPriority
slug: Web/API/TaskPriorityChangeEvent/previousPriority
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Prioritized Task Scheduling API")}}

Die schreibgeschützte **`previousPriority`**-Eigenschaft der {{domxref("TaskPriorityChangeEvent")}}-Schnittstelle gibt die Priorität des entsprechenden {{domxref("TaskSignal")}} zurück, bevor sie geändert wurde und dieses [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis ausgelöst wurde.

Dies ist der Wert, der im Argument `options.previous` des [`TaskPriorityChangeEvent`-Konstruktors](/de/docs/Web/API/TaskPriorityChangeEvent/TaskPriorityChangeEvent) gesetzt wurde. <!-- link? -->

Die neue Priorität der Aufgabe kann von `event.target.priority` abgelesen werden.

## Wert

Ein String, der die Priorität der zugehörigen Aufgabe angibt, bevor sie geändert wurde.
Dies wird einer der folgenden sein: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background).

## Beispiele

Der folgende Code zeigt, wie die `previousPriority`-Eigenschaft in einem Handler für ein `prioritychange`-Ereignis abgerufen wird.

```js
// Lauschen Sie auf 'prioritychange'-Ereignisse am Signal des Controllers.
controller.signal.addEventListener("prioritychange", (event) => {
  const previousPriority = event.previousPriority;
  const newPriority = event.target.priority;
  console.log(
    `The priority changed from ${previousPriority} to ${newPriority}.`,
  );
});
```

Ein ausführlicheres Live-Beispiel finden Sie unter [`prioritychange`-Ereignis > Beispiele](/de/docs/Web/API/TaskSignal/prioritychange_event).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
