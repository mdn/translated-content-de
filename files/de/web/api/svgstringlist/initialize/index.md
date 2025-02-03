---
title: "SVGStringList: `initialize()` Methode"
short-title: initialize()
slug: Web/API/SVGStringList/initialize
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

Die **`initialize()`** Methode der [`SVGStringList`](/de/docs/Web/API/SVGStringList) Schnittstelle entfernt alle vorhandenen Elemente aus der Liste und initialisiert die Liste neu, um das einzelne Element aufzunehmen, das durch den Parameter angegeben wird. Wenn das eingefügte Element bereits in einer Liste vorhanden ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Der Rückgabewert ist das in die Liste eingefügte Element.

## Syntax

```js-nolint
initialize(newItem)
```

### Parameter

- `newItem`
  - : Der String, der der Liste hinzugefügt werden soll.

### Rückgabewert

Der String, der der Liste hinzugefügt wurde.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `NoModificationAllowedError`
  - : Wird ausgelöst, wenn die [`SVGStringList`](/de/docs/Web/API/SVGStringList) zu einem schreibgeschützten Attribut gehört oder wenn das Objekt selbst schreibgeschützt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
