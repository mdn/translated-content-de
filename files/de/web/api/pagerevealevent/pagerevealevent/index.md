---
title: "PageRevealEvent: PageRevealEvent() Konstruktor"
short-title: PageRevealEvent()
slug: Web/API/PageRevealEvent/PageRevealEvent
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("HTML DOM")}}

Der **`PageRevealEvent()`** Konstruktor erstellt eine neue Instanz des [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent) Objekts.

## Syntax

```js-nolint
new PageRevealEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses repräsentiert. Im Fall von `PageRevealEvent` ist dies immer `pagereveal`.
- `init`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `viewTransition` {{optional_inline}}
      - : Ein [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt, das die aktive Ansichtstransition für die zugehörige Navigation darstellt. Standardmäßig ist dies `null`, falls keine aktive Ansichtstransition vorhanden ist.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `PageRevealEvent` Objekt wird erstellt, wenn ein Handler als Ergebnis des [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignisses aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transition API](/de/docs/Web/API/View_Transition_API)
