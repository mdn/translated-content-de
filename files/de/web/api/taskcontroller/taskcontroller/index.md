---
title: "TaskController: TaskController() Konstruktor"
short-title: TaskController()
slug: Web/API/TaskController/TaskController
l10n:
  sourceCommit: 33313b7c9e37253c0141e22558e298d08c060be5
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Der **`TaskController()`** Konstruktor erstellt ein neues [`TaskController`](/de/docs/Web/API/TaskController)-Objekt und setzt optional die anfängliche [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) seines zugehörigen [`signal`](/de/docs/Web/API/TaskController#taskcontroller.signal).

Wird keine Priorität festgelegt, wird die Signalpriorität standardmäßig auf [`user-visible`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible) gesetzt.

## Syntax

```js-nolint
new TaskController()
new TaskController(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `priority` {{optional_inline}}
      - : Die [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) des Signals, das mit diesem `TaskController` verbunden ist.
        Eine der folgenden: `"user-blocking"`, `"user-visible"` (Standard), `"background"`.

## Beispiele

Dieser Code zeigt, wie man einen Task-Controller erstellt, der ein Signal mit Standardpriorität (`user-visible`) hat.

```js
const controller = new TaskController();
```

Um einen Task-Controller zu erstellen, der eine spezifische Signalpriorität hat, übergeben Sie die `priority` als Eigenschaft des optionalen Arguments.

```js
controller2 = new TaskController({ priority: "user-blocking" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
