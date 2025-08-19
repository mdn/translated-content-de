---
title: "SVGStringList: appendItem() Methode"
short-title: appendItem()
slug: Web/API/SVGStringList/appendItem
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("SVG")}}

Die **`appendItem()`**-Methode der [`SVGStringList`](/de/docs/Web/API/SVGStringList)-Schnittstelle fügt ein neues Element am Ende der Liste ein. Wenn das angegebene Element bereits in einer Liste enthalten ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie.

## Syntax

```js-nolint
appendItem(newItem)
```

### Parameter

- `newItem`
  - : Der String, der der Liste hinzugefügt werden soll.

### Rückgabewert

Der String, der der Liste hinzugefügt wurde.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`SVGStringList`](/de/docs/Web/API/SVGStringList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
