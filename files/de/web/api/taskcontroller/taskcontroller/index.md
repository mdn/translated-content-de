---
title: "TaskController: TaskController() Konstruktor"
short-title: TaskController()
slug: Web/API/TaskController/TaskController
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Prioritized Task Scheduling API")}}

Der **`TaskController()`** Konstruktor erzeugt ein neues {{domxref("TaskController")}} Objekt und setzt optional die anfängliche [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) seines zugehörigen [`Signal`](/de/docs/Web/API/TaskController#taskcontroller.signal).

Wenn keine Priorität gesetzt wird, ist die Signalpriorität standardmäßig auf [`user-visible`](/de/docs/Web/API/Prioritized_Task_Scheduling_API#user-visible) eingestellt.

## Syntax

```js-nolint
new TaskController()
new TaskController(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `priority` {{optional_inline}}
      - : Die [Priorität](/de/docs/Web/API/Prioritized_Task_Scheduling_API#task_priorities) des mit diesem `TaskController` assoziierten Signals.
        Eine der folgenden: `"user-blocking"`, `"user-visible"` (Standardwert), `"background"`.

## Beispiele

Dieser Code zeigt, wie man einen Task-Controller erstellt, der ein Signal mit Standardpriorität (`user-visible`) hat.

```js
const controller = new TaskController();
```

Um einen Task-Controller mit einer spezifischen Signalpriorität zu erstellen, übergeben Sie die `priority` als Eigenschaft des optionalen Arguments.

```js
controller2 = new TaskController({ priority: "user-blocking" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
