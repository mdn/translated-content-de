---
title: "PageSwapEvent: PageSwapEvent() Konstruktor"
short-title: PageSwapEvent()
slug: Web/API/PageSwapEvent/PageSwapEvent
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{APIRef("HTML DOM")}}

Der **`PageSwapEvent()`** Konstruktor erstellt eine neue Instanz eines [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)-Objekts.

## Syntax

```js-nolint
new PageSwapEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses repräsentiert. Im Falle von `PageSwapEvent` ist dies immer `pageswap`.
- `init`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `activation`
      - : Ein [`NavigationActivation`](/de/docs/Web/API/NavigationActivation)-Objekt, das den Navigationstyp sowie die aktuellen und Zielhistorieneinträge des Dokuments repräsentiert. Standardmäßig `null`, falls die zugehörige Navigation eine Navigation zwischen unterschiedlichen Ursprüngen ist.
    - `viewTransition`
      - : Ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt, das die aktive Ansichtstransition für die zugehörige Navigation darstellt. Standardmäßig `null`, wenn keine aktive Ansichtstransition vorhanden ist.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `PageSwapEvent`-Objekt wird erstellt, wenn ein Handler als Ergebnis des [`pageswap`](/de/docs/Web/API/Window/pageswap_event)-Ereignisses ausgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [View Transitions API](/de/docs/Web/API/View_Transitions_API)
