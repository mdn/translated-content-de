---
title: "TaskPriorityChangeEvent: TaskPriorityChangeEvent() Konstruktor"
short-title: TaskPriorityChangeEvent()
slug: Web/API/TaskPriorityChangeEvent/TaskPriorityChangeEvent
l10n:
  sourceCommit: 33313b7c9e37253c0141e22558e298d08c060be5
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Der **`TaskPriorityChangeEvent()`** Konstruktor erstellt ein neues [`TaskPriorityChangeEvent`](/de/docs/Web/API/TaskPriorityChangeEvent) Objekt.

Dieses Objekt wird mit einem Wert erstellt, der die [vorherige Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe angibt: die Priorität, bevor sie geändert wurde und dieses Ereignis ausgelöst wurde.

## Syntax

```js-nolint
new TaskPriorityChangeEvent(type, options)
```

### Parameter

- `type`

  - : Ein String mit dem case-sensitiven Namen des zugehörigen Ereignisses.
    Benutzeragenten setzen dies auf `"prioritychange"`.

- `options`

  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:

    - `previousPriority`
      - : Ein String, der die _vorherige_ [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe angibt.
        Eine der folgenden: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
