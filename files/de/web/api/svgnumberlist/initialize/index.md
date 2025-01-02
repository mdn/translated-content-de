---
title: "SVGNumberList: initialize() Methode"
short-title: initialize()
slug: Web/API/SVGNumberList/initialize
l10n:
  sourceCommit: 0f57507c06180622a5a6168b552317c43eeb9d04
---

{{APIRef("SVG")}}

Die `initialize()`-Methode der [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)-Schnittstelle entfernt alle bestehenden aktuellen Elemente aus der Liste und initialisiert die Liste neu, um das einzelne Element zu halten, das durch den Parameter angegeben wird.

Wenn das eingefügte Element bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie.

## Syntax

```js-nolint
SVGNumberList.initialize(newItem)
```

### Parameter

- `newItem`
  - : Ein [`SVGNumber`](/de/docs/Web/API/SVGNumber)-Element, das in die Liste eingefügt wird.

### Rückgabewert

Ein [`SVGNumber`](/de/docs/Web/API/SVGNumber)-Objekt; das Element, das in die Liste eingefügt wurde.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGNumber`](/de/docs/Web/API/SVGNumber)
