---
title: "SVGLengthList: replaceItem()-Methode"
short-title: replaceItem()
slug: Web/API/SVGLengthList/replaceItem
l10n:
  sourceCommit: a09559075d5ae20021937aa135326f7b91ebefaf
---

{{APIRef("SVG")}}

Die **`replaceItem()`**-Methode des [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Interface ersetzt ein vorhandenes Element in der Liste durch ein neues Element. Wenn sich das neue Element bereits in einer Liste befindet, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn sich das Element bereits in dieser Liste befindet, beachten Sie, dass der Index des zu ersetzenden Elements vor dem Entfernen des Elements bestimmt wird.

Die Zuweisung an einen Index der Liste hat denselben Effekt wie der Aufruf dieser Methode, mit der Ausnahme, dass kein Rückgabewert vorhanden ist.

## Syntax

```js-nolint
replaceItem(newItem, index)
```

### Parameter

- `newItem`
  - : Das [`SVGLength`](/de/docs/Web/API/SVGLength), das der Liste hinzugefügt werden soll.
- `index`
  - : Eine nicht negative Ganzzahl, die den Index des zu löschenden Elements angibt.

### Rückgabewert

Das [`SVGLength`](/de/docs/Web/API/SVGLength), das der Liste hinzugefügt wurde.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.
- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Index außerhalb der Grenzen der Liste liegt.

## Beispiele

Ein vollständiges Beispiel finden Sie unter [`SVGLengthList`](/de/docs/Web/API/SVGLengthList).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
