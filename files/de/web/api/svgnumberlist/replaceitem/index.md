---
title: "SVGNumberList: replaceItem() Methode"
short-title: replaceItem()
slug: Web/API/SVGNumberList/replaceItem
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

Die **`replaceItem()`**-Methode der [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)-Schnittstelle ersetzt ein bestehendes Element in der Liste durch ein neues Element. Wenn das neue Element bereits in einer Liste enthalten ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn das Element bereits in dieser Liste ist, beachten Sie, dass der Index des zu ersetzenden Elements vor dem Entfernen des Elements liegt.

## Syntax

```js-nolint
replaceItem(newItem, index)
```

### Parameter

- `newItem`
  - : Der [`SVGNumber`](/de/docs/Web/API/SVGNumber), der in die Liste eingefügt werden soll.
- `index`
  - : Eine nicht negative ganze Zahl, die den Index des zu löschenden Elements angibt.

### Rückgabewert

Der [`SVGNumber`](/de/docs/Web/API/SVGNumber), der zur Liste hinzugefügt wurde.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `NoModificationAllowedError`
  - : Wird ausgelöst, wenn die [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
- [`DOMException`](/de/docs/Web/API/DOMException) `IndexSizeError`
  - : Wird ausgelöst, wenn der Index außerhalb der Grenzen der Liste liegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
