---
title: "PageRevealEvent: PageRevealEvent()-Konstruktor"
short-title: PageRevealEvent()
slug: Web/API/PageRevealEvent/PageRevealEvent
l10n:
  sourceCommit: cd809f324e890917837ebe5194c934543d4a5464
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Der **`PageRevealEvent()`**-Konstruktor erstellt eine neue [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)-Objektinstanz.

## Syntax

```js-nolint
new PageRevealEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt. Im Fall von `PageRevealEvent` ist dies immer `pagereveal`.
- `init`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `viewTransition` {{optional_inline}}
      - : Ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt, das die aktive Übergangsansicht für die entsprechende Navigation darstellt. Standardmäßig `null`, wenn es keinen aktiven Übergang gibt.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `PageRevealEvent`-Objekt wird erstellt, wenn ein Handler als Ergebnis des Auslösens des [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event)-Ereignisses aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
