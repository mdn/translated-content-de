---
title: TaskPriorityChangeEvent
slug: Web/API/TaskPriorityChangeEvent
l10n:
  sourceCommit: 33313b7c9e37253c0141e22558e298d08c060be5
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Das **`TaskPriorityChangeEvent`** ist die Schnittstelle für das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis.

{{InheritanceDiagram}}

## Konstruktor

- [`TaskPriorityChangeEvent()`](/de/docs/Web/API/TaskPriorityChangeEvent/TaskPriorityChangeEvent)
  - : Erstellt ein neues `TaskPriorityChangeEvent`-Objekt und setzt einen Ereignisnamen sowie die vorherige Priorität.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch die Eigenschaften ihres Elternteils, [`Event`](/de/docs/Web/API/Event)._

- [`TaskPriorityChangeEvent.previousPriority`](/de/docs/Web/API/TaskPriorityChangeEvent/previousPriority) {{ReadOnlyInline}}
  - : Gibt die [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) des entsprechenden [`TaskSignal`](/de/docs/Web/API/TaskSignal) _vor_ diesem [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis zurück.

## Instanz-Methoden

_Diese Schnittstelle hat keine eigenen Methoden, erbt jedoch die Methoden ihres Elternteils, [`Event`](/de/docs/Web/API/Event)._

## Beispiele

Ein Objekt dieses Typs wird im Handler für ein `prioritychange`-Ereignis zurückgegeben. Der folgende Code zeigt einen Handler, in dem `newPriority` und `previousPriority` protokolliert werden.

```js
// Listen for 'prioritychange' events on the controller's signal.
controller.signal.addEventListener("prioritychange", (event) => {
  const previousPriority = event.previousPriority;
  const newPriority = event.target.priority;
  console.log(`Priority changed from ${previousPriority} to ${newPriority}.`);
});
```

Ein umfassenderes Live-Beispiel finden Sie unter [`prioritychange` event > Examples](/de/docs/Web/API/TaskSignal/prioritychange_event).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis
