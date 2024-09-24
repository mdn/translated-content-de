---
title: "PageRevealEvent: PageRevealEvent() Konstruktor"
short-title: PageRevealEvent()
slug: Web/API/PageRevealEvent/PageRevealEvent
l10n:
  sourceCommit: cd809f324e890917837ebe5194c934543d4a5464
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Der **`PageRevealEvent()`** Konstruktor erstellt eine neue Instanz des {{domxref("PageRevealEvent")}} Objekts.

## Syntax

```js-nolint
new PageRevealEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt. Im Fall von `PageRevealEvent` ist dies immer `pagereveal`.
- `init`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `viewTransition` {{optional_inline}}
      - : Ein {{domxref("ViewTransition")}} Objekt, das den aktiven Blickwechsel für die zugehörige Navigation darstellt. Standardmäßig `null`, wenn kein aktiver Blickwechsel vorhanden ist.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `PageRevealEvent` Objekt wird erstellt, wenn ein Handler als Ergebnis des {{domxref("Window.pagereveal_event", "pagereveal")}} Ereignisses ausgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
