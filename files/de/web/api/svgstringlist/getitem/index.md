---
title: "SVGStringList: getItem()-Methode"
short-title: getItem()
slug: Web/API/SVGStringList/getItem
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("SVG")}}

Die **`getItem()`**-Methode der [`SVGStringList`](/de/docs/Web/API/SVGStringList)-Schnittstelle gibt das angegebene Element aus der Liste zurück. Das zurückgegebene Element ist das Element selbst und nicht eine Kopie. Jede Änderung an dem Element wird sofort in der Liste widergespiegelt. Das erste Element hat den Index 0.

## Syntax

```js-nolint
getItem(index)
```

### Parameter

- `index`
  - : Ein nicht-negativer Integer, der den Index des abzurufenden Elements angibt.

### Rückgabewert

Der String am angegebenen Index in der Liste.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`SVGStringList`](/de/docs/Web/API/SVGStringList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
