---
title: "SVGNumberList: replaceItem()-Methode"
short-title: replaceItem()
slug: Web/API/SVGNumberList/replaceItem
l10n:
  sourceCommit: 0f57507c06180622a5a6168b552317c43eeb9d04
---

{{APIRef("SVG")}}

Die `replaceItem()`-Methode des [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)-Interfaces ersetzt ein bestehendes Element in der Liste durch ein neues Element.

Das eingefügte Element ist das Element selbst und keine Kopie.

- Wenn `newItem` bereits in einer Liste ist, wird es vor dem Einfügen in diese Liste aus seiner vorherigen Liste entfernt.

- Wenn das Element bereits in dieser Liste ist, beachten Sie, dass der `index` des zu ersetzenden Elements vor dem Entfernen des Elements liegt.

## Syntax

```js-nolint
SVGNumberList.replaceItem(newItem, index)
```

### Parameter

- `newItem`
  - : Ein [`SVGNumber`](/de/docs/Web/API/SVGNumber)-Element, das in die Liste eingefügt wird.
- `index`
  - : Ein Integer; der Index, an dem das neue Element das bestehende ersetzen soll, als nicht signierter Long-Wert.

### Rückgabewert

Ein [`SVGNumber`](/de/docs/Web/API/SVGNumber)-Objekt; das eingefügte Element aus der Liste.

### Ausnahmen

Diese Methode kann einen [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn die [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Indexnummer größer oder gleich [`numberOfItems`](/de/docs/Web/API/SVGNumberList/numberOfItems) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGNumber`](/de/docs/Web/API/SVGNumber)
- [`SVGNumberList.numberOfItems`](/de/docs/Web/API/SVGNumberList/numberOfItems)
