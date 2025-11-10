---
title: "SVGStringList: initialize()-Methode"
short-title: initialize()
slug: Web/API/SVGStringList/initialize
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("SVG")}}

Die **`initialize()`**-Methode der [`SVGStringList`](/de/docs/Web/API/SVGStringList)-Schnittstelle entfernt alle vorhandenen Elemente aus der Liste und initialisiert die Liste neu, sodass sie das durch den Parameter angegebene einzelne Element enthält. Wenn das eingefügte Element bereits in einer Liste enthalten ist, wird es aus der vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Der Rückgabewert ist das Element, das in die Liste eingefügt wurde.

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

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`SVGStringList`](/de/docs/Web/API/SVGStringList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
