---
title: "PageSwapEvent: PageSwapEvent() Konstruktor"
short-title: PageSwapEvent()
slug: Web/API/PageSwapEvent/PageSwapEvent
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("HTML DOM")}}

Der **`PageSwapEvent()`** Konstruktor erstellt eine neue Instanz eines [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)-Objekts.

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
      - : Ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt, das den Navigationstyp sowie die aktuellen und Ziel-Dokumenthistorieneinträge darstellt. Standardeinstellung ist `null`, wenn die zugehörige Navigation eine Cross-Origin-Navigation ist.
    - `viewTransition`
      - : Ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt, das den aktiven Ansichtsübergang für die zugehörige Navigation darstellt. Standardeinstellung ist `null`, wenn es keinen aktiven Ansichtsübergang gibt.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `PageSwapEvent`-Objekt wird erstellt, wenn ein Handler aufgerufen wird, weil das [`pageswap`](/de/docs/Web/API/Window/pageswap_event) Ereignis ausgelöst wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transition API](/de/docs/Web/API/View_Transition_API)
