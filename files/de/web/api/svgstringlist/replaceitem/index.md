---
title: "SVGStringList: replaceItem() Methode"
short-title: replaceItem()
slug: Web/API/SVGStringList/replaceItem
l10n:
  sourceCommit: 9505c8d1370343fb65affa01657f27751ab59103
---

{{APIRef("SVG")}}

Die **`replaceItem()`**-Methode der [`SVGStringList`](/de/docs/Web/API/SVGStringList)-Schnittstelle ersetzt ein vorhandenes Element in der Liste durch ein neues Element. Das eingefügte Element ist das Element selbst und keine Kopie.

- Wenn das neue Element bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird.
- Wenn das Element bereits in dieser Liste ist, beachten Sie, dass der Index des zu ersetzenden Elements vor dem Entfernen des Elements liegt.

## Syntax

```js-nolint
replaceItem(newItem, index)
```

### Parameter

- `newItem`
  - : Der String, der der Liste hinzugefügt werden soll.
- `index`
  - : Eine nicht-negative ganze Zahl, die den Index des zu löschenden Elements angibt.

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
