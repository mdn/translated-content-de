---
title: "SVGStringList: Methode replaceItem()"
short-title: replaceItem()
slug: Web/API/SVGStringList/replaceItem
l10n:
  sourceCommit: a09559075d5ae20021937aa135326f7b91ebefaf
---

{{APIRef("SVG")}}

Die Methode **`replaceItem()`** der Schnittstelle [`SVGStringList`](/de/docs/Web/API/SVGStringList) ersetzt ein vorhandenes Element in der Liste durch ein neues Element. Das eingefügte Element ist das Element selbst und keine Kopie.

- Wenn sich das neue Element bereits in einer Liste befindet, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird.
- Wenn sich das Element bereits in dieser Liste befindet, beachten Sie, dass der Index des zu ersetzenden Elements vor dem Entfernen des Elements bestimmt wird.

Die Zuweisung zu einem Index der Liste hat dieselbe Wirkung wie der Aufruf dieser Methode, mit Ausnahme davon, dass kein Rückgabewert vorhanden ist.

## Syntax

```js-nolint
replaceItem(newItem, index)
```

### Parameter

- `newItem`
  - : Die Zeichenfolge, die zur Liste hinzugefügt werden soll.
- `index`
  - : Eine nicht negative ganze Zahl, die den Index des zu löschenden Elements angibt.

### Rückgabewert

Die Zeichenfolge, die zur Liste hinzugefügt wurde.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`SVGStringList`](/de/docs/Web/API/SVGStringList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Index außerhalb der Grenzen der Liste liegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
