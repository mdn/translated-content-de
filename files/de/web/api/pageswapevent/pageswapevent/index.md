---
title: "PageSwapEvent: PageSwapEvent() Konstruktor"
short-title: PageSwapEvent()
slug: Web/API/PageSwapEvent/PageSwapEvent
l10n:
  sourceCommit: cd809f324e890917837ebe5194c934543d4a5464
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Der **`PageSwapEvent()`** Konstruktor erstellt eine neue Instanz eines {{domxref("PageSwapEvent")}}-Objekts.

## Syntax

```js-nolint
new PageSwapEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt. Im Fall von `PageSwapEvent` ist dies immer `pageswap`.
- `init`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `activation`
      - : Ein {{domxref("NavigationActivation")}}-Objekt, das den Navigationstyp sowie die aktuellen und Ziel-Dokument-Historieneinträge darstellt. Standardmäßig `null`, wenn die zugehörige Navigation eine Cross-Origin-Navigation ist.
    - `viewTransition`
      - : Ein {{domxref("ViewTransition")}}-Objekt, das die aktive View-Transition für die zugehörige Navigation darstellt. Standardmäßig `null`, wenn es keine aktive View-Transition gibt.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `PageSwapEvent`-Objekt wird erstellt, wenn ein Handler als Ergebnis des {{domxref("Window.pageswap_event", "pageswap")}}-Ereignisses aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
