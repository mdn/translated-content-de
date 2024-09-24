---
title: "SVGLengthList: Methode getItem()"
short-title: getItem()
slug: Web/API/SVGLengthList/getItem
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

Die **`getItem()`**-Methode der {{domxref("SVGLengthList")}}-Schnittstelle gibt das angegebene Element aus der Liste zurück. Das zurückgegebene Element ist direkt das Element selbst und keine Kopie. Alle Änderungen, die am Element vorgenommen werden, spiegeln sich sofort in der Liste wider. Das erste Element hat den Index 0.

## Syntax

```js-nolint
getItem(index)
```

### Parameter

- `index`
  - : Eine nicht-negative ganze Zahl, die den Index des abzurufenden Elements angibt.

### Rückgabewert

Das {{domxref("SVGLength")}} an dem angegebenen Index in der Liste.

### Ausnahmen

- {{domxref("DOMException")}} `IndexSizeError`
  - : Wird ausgelöst, wenn der Index außerhalb des gültigen Bereichs der Liste liegt.

## Beispiele

Siehe {{domxref("SVGLengthList")}} für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
