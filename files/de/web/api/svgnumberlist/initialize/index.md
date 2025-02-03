---
title: "SVGNumberList: initialize() Methode"
short-title: initialize()
slug: Web/API/SVGNumberList/initialize
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

Die **`initialize()`**-Methode der [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)-Schnittstelle löscht alle vorhandenen Elemente aus der Liste und initialisiert die Liste neu, um das einzelne Element zu halten, das durch den Parameter angegeben wird. Wenn das eingefügte Element bereits in einer Liste vorhanden ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Der Rückgabewert ist das Element, das in die Liste eingefügt wurde.

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

- [`DOMException`](/de/docs/Web/API/DOMException) `NoModificationAllowedError`
  - : Wird ausgelöst, wenn die [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
