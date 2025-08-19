---
title: "SVGLengthList: removeItem()-Methode"
short-title: removeItem()
slug: Web/API/SVGLengthList/removeItem
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("SVG")}}

Die **`removeItem()`**-Methode des [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Interfaces entfernt ein vorhandenes Element an dem angegebenen Index aus der Liste.

## Syntax

```js-nolint
removeItem(index)
```

### Parameter

- `index`
  - : Ein nicht-negativer Integer, der den Index des zu löschenden Elements angibt.

### Rückgabewert

Das [`SVGLength`](/de/docs/Web/API/SVGLength), das aus der Liste entfernt wurde.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.
- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Index außerhalb der Grenzen der Liste liegt.

## Beispiele

Siehe [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
