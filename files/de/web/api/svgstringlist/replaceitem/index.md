---
title: "SVGStringList: replaceItem() Methode"
short-title: replaceItem()
slug: Web/API/SVGStringList/replaceItem
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("SVG")}}

Die **`replaceItem()`** Methode des [`SVGStringList`](/de/docs/Web/API/SVGStringList) Interfaces ersetzt ein vorhandenes Element in der Liste durch ein neues Element. Das eingefügte Element ist das Element selbst und keine Kopie.

- Wenn das neue Element bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird.
- Wenn das Element bereits in dieser Liste ist, beachten Sie, dass der Index des zu ersetzenden Elements vor der Entfernung des Elements liegt.

## Syntax

```js-nolint
replaceItem(newItem, index)
```

### Parameter

- `newItem`
  - : Der String, der der Liste hinzugefügt werden soll.
- `index`
  - : Eine nicht-negative Ganzzahl, die den Index des zu löschenden Elements angibt.

### Rückgabewert

Der String, der der Liste hinzugefügt wurde.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`SVGStringList`](/de/docs/Web/API/SVGStringList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Index außerhalb der Grenzen der Liste liegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
