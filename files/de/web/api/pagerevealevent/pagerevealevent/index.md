---
title: "PageRevealEvent: PageRevealEvent() Konstruktor"
short-title: PageRevealEvent()
slug: Web/API/PageRevealEvent/PageRevealEvent
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{APIRef("HTML DOM")}}

Der **`PageRevealEvent()`** Konstruktor erstellt eine neue Instanz eines [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent) Objekts.

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
      - : Ein [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt, das den aktiven Ansichtsübergang für die zugehörige Navigation darstellt. Standardmäßig `null`, wenn kein aktiver Ansichtsübergang vorhanden ist.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `PageRevealEvent` Objekt wird erstellt, wenn ein Handler als Ergebnis des Auslösens des [`pagereveal`](/de/docs/Web/API/Window/pagereveal_event) Ereignisses aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
