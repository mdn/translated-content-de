---
title: "PageSwapEvent: PageSwapEvent()-Konstruktor"
short-title: PageSwapEvent()
slug: Web/API/PageSwapEvent/PageSwapEvent
l10n:
  sourceCommit: cd809f324e890917837ebe5194c934543d4a5464
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Der **`PageSwapEvent()`**-Konstruktor erstellt eine neue Instanz eines [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)-Objekts.

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
      - : Ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt, das den Navigationstyp und die aktuellen sowie die Ziel-Dokumenthistorie-Einträge darstellt. Setzt auf `null` zurück, wenn die zugehörige Navigation eine Cross-Origin-Navigation ist.
    - `viewTransition`
      - : Ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt, das die aktive Ansichtstransition für die zugehörige Navigation darstellt. Setzt auf `null` zurück, wenn keine aktive Ansichtstransition vorhanden ist.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `PageSwapEvent`-Objekt wird erstellt, wenn ein Handler als Ergebnis der Auslösung des [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignisses aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
