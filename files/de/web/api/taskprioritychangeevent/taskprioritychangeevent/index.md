---
title: "TaskPriorityChangeEvent: TaskPriorityChangeEvent() Konstruktor"
short-title: TaskPriorityChangeEvent()
slug: Web/API/TaskPriorityChangeEvent/TaskPriorityChangeEvent
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Prioritized Task Scheduling API")}}

Der **`TaskPriorityChangeEvent()`** Konstruktor erstellt ein neues {{domxref("TaskPriorityChangeEvent")}} Objekt.

Dieses Objekt wird mit einem Wert erstellt, der die [vorherige Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe angibt: die Priorität vor der Änderung und dem Auslösen dieses Ereignisses.

## Syntax

```js-nolint
new TaskPriorityChangeEvent(type, options)
```

### Parameter

- `type`

  - : Ein String mit dem auf Groß- und Kleinschreibung achtenden Namen des zugehörigen Ereignisses.
    User Agents setzen dies auf `"prioritychange"`.

- `options`

  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgenden Eigenschaften haben kann:

    - `previousPriority`
      - : Ein String, der die _vorherige_ [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) der Aufgabe angibt.
        Eine der folgenden: [`"user-blocking"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-blocking), [`"user-visible"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible), [`"background"`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#background).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
