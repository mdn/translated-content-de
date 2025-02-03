---
title: "SVGStringList: Methode insertItemBefore()"
short-title: insertItemBefore()
slug: Web/API/SVGStringList/insertItemBefore
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

Die Methode **`insertItemBefore()`** des [`SVGStringList`](/de/docs/Web/API/SVGStringList)-Interfaces fügt ein neues Element an der angegebenen Position in die Liste ein. Das erste Element hat den Index 0. Das eingefügte Element ist das Element selbst und keine Kopie.

- Wenn das neue Element bereits in einer Liste ist, wird es vor dem Einfügen in diese Liste aus seiner vorherigen Liste entfernt.
- Wenn das Element bereits in dieser Liste ist, beachten Sie, dass der Index des einzufügenden Elements vor der Entfernung des Elements vorliegt.
- Wenn der Index gleich 0 ist, wird das neue Element an den Anfang der Liste eingefügt.
- Wenn der Index größer oder gleich der [`length`](/de/docs/Web/API/SVGStringList/length) ist, wird das neue Element am Ende der Liste angehängt.

## Syntax

```js-nolint
insertItemBefore(newItem, index)
```

### Parameter

- `newItem`
  - : Der String, der zur Liste hinzugefügt werden soll.
- `index`
  - : Eine nicht-negative Ganzzahl, die den Index des Elements angibt, vor dem das neue Element eingefügt werden soll.

### Rückgabewert

Der String, der zur Liste hinzugefügt wurde.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `NoModificationAllowedError`
  - : Wird ausgelöst, wenn [`SVGStringList`](/de/docs/Web/API/SVGStringList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
