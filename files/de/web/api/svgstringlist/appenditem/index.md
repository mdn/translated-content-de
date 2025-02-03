---
title: "SVGStringList: appendItem()-Methode"
short-title: appendItem()
slug: Web/API/SVGStringList/appendItem
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

Die **`appendItem()`**-Methode der [`SVGStringList`](/de/docs/Web/API/SVGStringList)-Schnittstelle fügt ein neues Element am Ende der Liste ein. Wenn das angegebene Element bereits in einer Liste vorhanden ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie.

## Syntax

```js-nolint
appendItem(newItem)
```

### Parameter

- `newItem`
  - : Der String, der zur Liste hinzugefügt werden soll.

### Rückgabewert

Der String, der zur Liste hinzugefügt wurde.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `NoModificationAllowedError`
  - : Wird ausgelöst, wenn die [`SVGStringList`](/de/docs/Web/API/SVGStringList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
