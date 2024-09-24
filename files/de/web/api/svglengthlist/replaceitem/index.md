---
title: "SVGLengthList: replaceItem()-Methode"
short-title: replaceItem()
slug: Web/API/SVGLengthList/replaceItem
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

Die **`replaceItem()`**-Methode des {{domxref("SVGLengthList")}}-Interfaces ersetzt ein vorhandenes Element in der Liste durch ein neues Element. Wenn das neue Element bereits in einer Liste enthalten ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn sich das Element bereits in dieser Liste befindet, beachten Sie, dass der Index des zu ersetzenden Elements vor der Entfernung des Elements liegt.

## Syntax

```js-nolint
replaceItem(newItem, index)
```

### Parameter

- `newItem`
  - : Der {{domxref("SVGLength")}}, der zur Liste hinzugefügt werden soll.
- `index`
  - : Eine nicht-negative ganze Zahl, die den Index des zu löschenden Elements angibt.

### Rückgabewert

Der {{domxref("SVGLength")}}, der der Liste hinzugefügt wurde.

### Ausnahmen

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.
- {{domxref("DOMException")}} `IndexSizeError`
  - : Wird ausgelöst, wenn der Index außerhalb der Grenzen der Liste liegt.

## Beispiele

Siehe {{domxref("SVGLengthList")}} für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
