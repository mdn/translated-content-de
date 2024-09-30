---
title: "SVGLengthList: Methode replaceItem()"
short-title: replaceItem()
slug: Web/API/SVGLengthList/replaceItem
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

Die **`replaceItem()`**-Methode der [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Schnittstelle ersetzt ein vorhandenes Element in der Liste durch ein neues Element. Wenn das neue Element bereits in einer Liste vorhanden ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn das Element bereits in dieser Liste ist, beachten Sie, dass der Index des zu ersetzenden Elements vor dem Entfernen des Elements angegeben wird.

## Syntax

```js-nolint
replaceItem(newItem, index)
```

### Parameter

- `newItem`
  - : Das [`SVGLength`](/de/docs/Web/API/SVGLength), das der Liste hinzugefügt werden soll.
- `index`
  - : Eine nicht-negative Ganzzahl, die den Index des zu löschenden Elements angibt.

### Rückgabewert

Das [`SVGLength`](/de/docs/Web/API/SVGLength), das der Liste hinzugefügt wurde.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `NoModificationAllowedError`
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.
- [`DOMException`](/de/docs/Web/API/DOMException) `IndexSizeError`
  - : Wird ausgelöst, wenn der Index außerhalb der Grenzen der Liste liegt.

## Beispiele

Siehe [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
