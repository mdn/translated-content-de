---
title: "SVGNumberList: appendItem() Methode"
short-title: appendItem()
slug: Web/API/SVGNumberList/appendItem
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("SVG")}}

Die **`appendItem()`** Methode der [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)-Schnittstelle fügt ein neues Element am Ende der Liste ein. Wenn das angegebene Element bereits in einer Liste vorhanden ist, wird es aus der vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie.

## Syntax

```js-nolint
appendItem(newItem)
```

### Parameter

- `newItem`
  - : Der [`SVGNumber`](/de/docs/Web/API/SVGNumber), der der Liste hinzugefügt werden soll.

### Rückgabewert

Der [`SVGNumber`](/de/docs/Web/API/SVGNumber), der der Liste hinzugefügt wurde.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
