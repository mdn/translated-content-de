---
title: "SVGNumberList: initialize() Methode"
short-title: initialize()
slug: Web/API/SVGNumberList/initialize
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("SVG")}}

Die **`initialize()`** Methode der [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) Schnittstelle entfernt alle vorhandenen Elemente aus der Liste und initialisiert die Liste neu, um das im Parameter angegebene Einzelobjekt aufzunehmen. Wenn das eingefügte Element bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Der Rückgabewert ist das Element, das in die Liste eingefügt wurde.

## Syntax

```js-nolint
initialize(newItem)
```

### Parameter

- `newItem`
  - : Der [`SVGNumber`](/de/docs/Web/API/SVGNumber), der der Liste hinzugefügt werden soll.

### Rückgabewert

Der [`SVGNumber`](/de/docs/Web/API/SVGNumber), der der Liste hinzugefügt wurde.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wirft eine Ausnahme, wenn die [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) mit einem schreibgeschützten Attribut übereinstimmt oder wenn das Objekt selbst schreibgeschützt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
