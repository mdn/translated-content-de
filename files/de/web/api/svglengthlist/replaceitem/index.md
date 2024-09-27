---
title: "SVGLengthList: replaceItem() Methode"
short-title: replaceItem()
slug: Web/API/SVGLengthList/replaceItem
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

Die **`replaceItem()`**-Methode des [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Interfaces ersetzt ein bestehendes Element in der Liste durch ein neues Element. Wenn das neue Element bereits in einer Liste enthalten ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und nicht eine Kopie. Wenn sich das Element bereits in dieser Liste befindet, beachten Sie, dass der Index des zu ersetzenden Elements vor der Entfernung des Elements liegt.

## Syntax

```js-nolint
replaceItem(newItem, index)
```

### Parameter

- `newItem`
  - : Die [`SVGLength`](/de/docs/Web/API/SVGLength), die zur Liste hinzugefügt werden soll.
- `index`
  - : Eine nicht-negative Ganzzahl, die den Index des zu löschenden Elements angibt.

### Rückgabewert

Die [`SVGLength`](/de/docs/Web/API/SVGLength), die zur Liste hinzugefügt wurde.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `NoModificationAllowedError`
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.
- [`DOMException`](/de/docs/Web/API/DOMException) `IndexSizeError`
  - : Wird ausgelöst, wenn der Index außerhalb der Grenzen der Liste liegt.

## Beispiele

Sehen Sie [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
