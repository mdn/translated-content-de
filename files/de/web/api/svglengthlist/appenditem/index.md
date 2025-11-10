---
title: "SVGLengthList: appendItem()-Methode"
short-title: appendItem()
slug: Web/API/SVGLengthList/appendItem
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("SVG")}}

Die **`appendItem()`**-Methode des [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Interfaces fügt ein neues Element am Ende der Liste ein. Wenn das angegebene Element bereits in einer Liste vorhanden ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie.

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

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Siehe [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
