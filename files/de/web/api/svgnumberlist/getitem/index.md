---
title: "SVGNumberList: getItem()-Methode"
short-title: getItem()
slug: Web/API/SVGNumberList/getItem
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("SVG")}}

Die **`getItem()`**-Methode der [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)-Schnittstelle gibt das angegebene Element aus der Liste zurück. Das zurückgegebene Element ist das Element selbst und keine Kopie. Änderungen, die am Element vorgenommen werden, spiegeln sich sofort in der Liste wider. Das erste Element hat den Index 0.

## Syntax

```js-nolint
getItem(index)
```

### Parameter

- `index`
  - : Eine nicht-negative Ganzzahl, die den Index des abzurufenden Elements angibt.

### Rückgabewert

Das [`SVGNumber`](/de/docs/Web/API/SVGNumber) an der angegebenen Position in der Liste.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Index außerhalb der Grenzen der Liste liegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
