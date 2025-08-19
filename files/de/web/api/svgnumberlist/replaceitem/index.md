---
title: "SVGNumberList: replaceItem() Methode"
short-title: replaceItem()
slug: Web/API/SVGNumberList/replaceItem
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("SVG")}}

Die **`replaceItem()`** Methode der [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) Schnittstelle ersetzt ein vorhandenes Element in der Liste durch ein neues Element. Wenn das neue Element bereits in einer Liste enthalten ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn sich das Element bereits in dieser Liste befindet, beachten Sie, dass der Index des zu ersetzenden Elements vor der Entfernung des Elements liegt.

## Syntax

```js-nolint
replaceItem(newItem, index)
```

### Parameter

- `newItem`
  - : Das [`SVGNumber`](/de/docs/Web/API/SVGNumber), das der Liste hinzugefügt werden soll.
- `index`
  - : Eine nicht negative ganze Zahl, die den Index des zu löschenden Elements angibt.

### Rückgabewert

Das [`SVGNumber`](/de/docs/Web/API/SVGNumber), das der Liste hinzugefügt wurde.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Index außerhalb der Grenzen der Liste liegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
