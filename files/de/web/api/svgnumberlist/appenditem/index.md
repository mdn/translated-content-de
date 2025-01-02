---
title: "SVGNumberList: appendItem() Methode"
short-title: appendItem()
slug: Web/API/SVGNumberList/appendItem
l10n:
  sourceCommit: 0f57507c06180622a5a6168b552317c43eeb9d04
---

{{APIRef("SVG")}}

Die `appendItem()`-Methode der [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)-Schnittstelle fügt ein neues Element am Ende der Liste ein.

Das eingefügte Element ist das Element selbst und keine Kopie.

- Wenn `newItem` bereits in einer Liste enthalten ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird.

## Syntax

```js-nolint
SVGNumberList.appendItem(newItem)
```

### Parameter

- `newItem`
  - : Ein [`SVGNumber`](/de/docs/Web/API/SVGNumber)-Element, das an die Liste angehängt wird.

### Rückgabewert

Ein [`SVGNumber`](/de/docs/Web/API/SVGNumber)-Objekt; das angehängte Element aus der Liste.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGNumber`](/de/docs/Web/API/SVGNumber)
- [`SVGNumberList.numberOfItems`](/de/docs/Web/API/SVGNumberList/numberOfItems)
