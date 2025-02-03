---
title: "SVGStringList: getItem()-Methode"
short-title: getItem()
slug: Web/API/SVGStringList/getItem
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

Die **`getItem()`**-Methode der [`SVGStringList`](/de/docs/Web/API/SVGStringList)-Schnittstelle gibt das angegebene Element aus der Liste zurück. Das zurückgegebene Element ist das Element selbst und nicht eine Kopie. Änderungen, die am Element vorgenommen werden, werden sofort in der Liste reflektiert. Das erste Element hat den Index 0.

## Syntax

```js-nolint
getItem(index)
```

### Parameter

- `index`
  - : Eine nicht-negative ganze Zahl, die den Index des abzurufenden Elements angibt.

### Rückgabewert

Der String an dem angegebenen Index in der Liste.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `IndexSizeError`
  - : Wird ausgelöst, wenn die [`SVGStringList`](/de/docs/Web/API/SVGStringList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
