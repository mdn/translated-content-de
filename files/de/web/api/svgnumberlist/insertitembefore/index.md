---
title: "SVGNumberList: Methode insertItemBefore()"
short-title: insertItemBefore()
slug: Web/API/SVGNumberList/insertItemBefore
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

Die **`insertItemBefore()`**-Methode der [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)-Schnittstelle fügt ein neues Element an der angegebenen Position in die Liste ein. Das erste Element hat den Index 0. Das eingefügte Element ist das Element selbst und keine Kopie.

- Wenn das neue Element bereits in einer Liste enthalten ist, wird es vor dem Einfügen in diese Liste aus seiner vorherigen Liste entfernt.
- Wenn sich das Element bereits in dieser Liste befindet, beachten Sie, dass der Index des einzufügenden Elements vor dem Entfernen des Elements liegt.
- Wenn der Index gleich 0 ist, wird das neue Element an den Anfang der Liste eingefügt.
- Wenn der Index größer oder gleich der [`length`](/de/docs/Web/API/SVGNumberList/length) ist, wird das neue Element am Ende der Liste angehängt.

## Syntax

```js-nolint
insertItemBefore(newItem, index)
```

### Parameter

- `newItem`
  - : Das [`SVGNumber`](/de/docs/Web/API/SVGNumber), das der Liste hinzugefügt werden soll.
- `index`
  - : Eine nicht-negative ganze Zahl, die den Index des Elements angibt, vor dem das neue Element eingefügt werden soll.

### Rückgabewert

Das [`SVGNumber`](/de/docs/Web/API/SVGNumber), das der Liste hinzugefügt wurde.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `NoModificationAllowedError`
  - : Wird ausgelöst, wenn die [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) einem schreibgeschützten Attribut entspricht oder das Objekt selbst schreibgeschützt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
