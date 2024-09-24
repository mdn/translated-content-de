---
title: TaskPriorityChangeEvent
slug: Web/API/TaskPriorityChangeEvent
l10n:
  sourceCommit: fe0ae190fa37469b28ebe39cb33013d89c3a69e6
---

{{APIRef("Prioritized Task Scheduling API")}}

Die **`TaskPriorityChangeEvent`**-Schnittstelle ist für das [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis zuständig.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("TaskPriorityChangeEvent.TaskPriorityChangeEvent", "TaskPriorityChangeEvent()")}}
  - : Erstellt ein neues `TaskPriorityChangeEvent`-Objekt, wobei ein Ereignisname und die vorherige Priorität festgelegt werden.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch die Eigenschaften ihres Elternteils, {{domxref("Event")}}._

- {{domxref("TaskPriorityChangeEvent.previousPriority")}} {{ReadOnlyInline}}
  - : Gibt die [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) des entsprechenden {{domxref("TaskSignal")}} _vor_ diesem [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis zurück.

## Instanz-Methoden

_Diese Schnittstelle hat keine eigenen Methoden, erbt aber die Methoden ihres Elternteils, {{domxref("Event")}}._

## Beispiele

Ein Objekt dieses Typs wird im Handler für ein `prioritychange`-Ereignis zurückgegeben. Der untenstehende Code zeigt einen Handler, in dem `newPriority` und `previousPriority` protokolliert werden.

```js
// Lauschen auf 'prioritychange'-Ereignisse beim Signal des Controllers.
controller.signal.addEventListener("prioritychange", (event) => {
  const previousPriority = event.previousPriority;
  const newPriority = event.target.priority;
  console.log(`Priority changed from ${previousPriority} to ${newPriority}.`);
});
```

Ein umfassenderes Live-Beispiel finden Sie unter [`prioritychange`-Ereignis > Beispiele](/de/docs/Web/API/TaskSignal/prioritychange_event).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prioritychange`](/de/docs/Web/API/TaskSignal/prioritychange_event)-Ereignis
