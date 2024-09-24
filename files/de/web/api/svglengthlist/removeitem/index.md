---
title: "SVGLengthList: removeItem() Methode"
short-title: removeItem()
slug: Web/API/SVGLengthList/removeItem
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

Die **`removeItem()`**-Methode der {{domxref("SVGLengthList")}}-Schnittstelle entfernt ein vorhandenes Element an dem angegebenen Index aus der Liste.

## Syntax

```js-nolint
removeItem(index)
```

### Parameter

- `index`
  - : Eine nicht-negative Ganzzahl, die den Index des zu löschenden Elements angibt.

### Rückgabewert

Das {{domxref("SVGLength")}}, das aus der Liste entfernt wurde.

### Ausnahmen

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.
- {{domxref("DOMException")}} `IndexSizeError`
  - : Wird ausgelöst, wenn der Index außerhalb der Grenzen der Liste liegt.

## Beispiele

Sehen Sie sich {{domxref("SVGLengthList")}} für ein vollständiges Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
