---
title: "SVGLengthList: appendItem() Methode"
short-title: appendItem()
slug: Web/API/SVGLengthList/appendItem
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

Die **`appendItem()`**-Methode der [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Schnittstelle fügt ein neues Element am Ende der Liste ein. Wenn das angegebene Element bereits in einer Liste enthalten ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und nicht eine Kopie.

## Syntax

```js-nolint
appendItem(newItem)
```

### Parameter

- `newItem`
  - : Das [`SVGLength`](/de/docs/Web/API/SVGLength), das zur Liste hinzugefügt werden soll.

### Rückgabewert

Das [`SVGLength`](/de/docs/Web/API/SVGLength), das zur Liste hinzugefügt wurde.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `NoModificationAllowedError`
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Ein vollständiges Beispiel finden Sie unter [`SVGLengthList`](/de/docs/Web/API/SVGLengthList).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
