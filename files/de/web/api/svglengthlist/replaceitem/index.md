---
title: "SVGLengthList: replaceItem()-Methode"
short-title: replaceItem()
slug: Web/API/SVGLengthList/replaceItem
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("SVG")}}

Die **`replaceItem()`**-Methode des [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Interfaces ersetzt ein vorhandenes Element in der Liste durch ein neues Element. Wenn das neue Element bereits in einer Liste enthalten ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn das Element bereits in dieser Liste enthalten ist, beachten Sie, dass der Index des zu ersetzenden Elements vor dem Entfernen des Elements liegt.

## Syntax

```js-nolint
replaceItem(newItem, index)
```

### Parameter

- `newItem`
  - : Das [`SVGLength`](/de/docs/Web/API/SVGLength), das zur Liste hinzugefügt werden soll.
- `index`
  - : Eine nicht-negative Ganzzahl, die den Index des zu löschenden Elements angibt.

### Rückgabewert

Das [`SVGLength`](/de/docs/Web/API/SVGLength), das der Liste hinzugefügt wurde.

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
