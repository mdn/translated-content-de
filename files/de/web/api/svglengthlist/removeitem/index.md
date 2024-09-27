---
title: "SVGLengthList: removeItem()-Methode"
short-title: removeItem()
slug: Web/API/SVGLengthList/removeItem
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

Die **`removeItem()`**-Methode der [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Schnittstelle entfernt ein bestehendes Element an dem angegebenen Index aus der Liste.

## Syntax

```js-nolint
removeItem(index)
```

### Parameter

- `index`
  - : Eine nicht-negative ganze Zahl, die den Index des zu löschenden Elements angibt.

### Rückgabewert

Das [`SVGLength`](/de/docs/Web/API/SVGLength), das aus der Liste entfernt wurde.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `NoModificationAllowedError`
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.
- [`DOMException`](/de/docs/Web/API/DOMException) `IndexSizeError`
  - : Wird ausgelöst, wenn der Index außerhalb der Listengrenzen liegt.

## Beispiele

Sehen Sie [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
