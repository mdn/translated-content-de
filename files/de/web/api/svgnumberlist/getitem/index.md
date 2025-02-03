---
title: "SVGNumberList: getItem()-Methode"
short-title: getItem()
slug: Web/API/SVGNumberList/getItem
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

Die **`getItem()`**-Methode der [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)-Schnittstelle gibt das angegebene Element aus der Liste zurück. Das zurückgegebene Element ist das Element selbst und keine Kopie. Jede Änderung am Element wird sofort in der Liste reflektiert. Das erste Element hat den Index 0.

## Syntax

```js-nolint
getItem(index)
```

### Parameter

- `index`
  - : Eine nicht-negative ganze Zahl, die den Index des abzurufenden Elements angibt.

### Rückgabewert

Das [`SVGNumber`](/de/docs/Web/API/SVGNumber) an dem angegebenen Index in der Liste.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `IndexSizeError`
  - : Wird ausgelöst, wenn der Index außerhalb der Grenzen der Liste liegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
