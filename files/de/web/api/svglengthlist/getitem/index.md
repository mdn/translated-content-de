---
title: "SVGLengthList: getItem() Methode"
short-title: getItem()
slug: Web/API/SVGLengthList/getItem
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("SVG")}}

Die **`getItem()`**-Methode der [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Schnittstelle gibt das angegebene Element aus der Liste zurück. Das zurückgegebene Element ist das Element selbst und keine Kopie. Alle Änderungen am Element werden sofort in der Liste widergespiegelt. Das erste Element hat den Index 0.

## Syntax

```js-nolint
getItem(index)
```

### Parameter

- `index`
  - : Ein nicht-negativer Ganzzahlwert, der den Index des abzurufenden Elements angibt.

### Rückgabewert

Der [`SVGLength`](/de/docs/Web/API/SVGLength) an dem angegebenen Index in der Liste.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Index außerhalb der Grenzen der Liste liegt.

## Beispiele

Siehe [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
