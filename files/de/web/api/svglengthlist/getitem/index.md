---
title: "SVGLengthList: getItem() Methode"
short-title: getItem()
slug: Web/API/SVGLengthList/getItem
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

Die **`getItem()`**-Methode der [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Schnittstelle gibt das angegebene Element aus der Liste zurück. Das zurückgegebene Element ist das Element selbst und keine Kopie. Alle Änderungen, die an dem Element vorgenommen werden, sind sofort in der Liste sichtbar. Das erste Element hat den Index 0.

## Syntax

```js-nolint
getItem(index)
```

### Parameter

- `index`
  - : Eine nicht negative ganze Zahl, die den Index des abzurufenden Elements angibt.

### Rückgabewert

Das [`SVGLength`](/de/docs/Web/API/SVGLength) an dem angegebenen Index in der Liste.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `IndexSizeError`
  - : Wird ausgelöst, wenn der Index außerhalb der Grenzen der Liste liegt.

## Beispiele

Siehe [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
