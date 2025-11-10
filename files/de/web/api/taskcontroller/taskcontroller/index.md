---
title: "TaskController: TaskController() Konstruktor"
short-title: TaskController()
slug: Web/API/TaskController/TaskController
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Prioritized Task Scheduling API")}}{{AvailableInWorkers}}

Der **`TaskController()`** Konstruktor erstellt ein neues [`TaskController`](/de/docs/Web/API/TaskController)-Objekt und setzt optional die anfängliche [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) seines zugehörigen [`Signal`](/de/docs/Web/API/TaskController#taskcontroller.signal).

Wenn keine Priorität festgelegt wird, ist die Standardpriorität des Signals [`user-visible`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible).

## Syntax

```js-nolint
new TaskController()
new TaskController(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `priority` {{optional_inline}}
      - : Die [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) des mit diesem `TaskController` verbundenen Signals.
        Eine der folgenden: `"user-blocking"`, `"user-visible"` (Standard), `"background"`.

## Beispiele

Dieser Code zeigt, wie man einen Task-Controller konstruiert, der ein Signal mit Standardpriorität (`user-visible`) hat.

```js
const controller = new TaskController();
```

Um einen Task-Controller zu konstruieren, der eine spezifische Signalpriorität hat, übergeben Sie die `priority` als Eigenschaft des optionalen Arguments.

```js
controller2 = new TaskController({ priority: "user-blocking" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
