---
title: "SVGNumberList: insertItemBefore()-Methode"
short-title: insertItemBefore()
slug: Web/API/SVGNumberList/insertItemBefore
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("SVG")}}

Die **`insertItemBefore()`**-Methode der [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)-Schnittstelle fügt ein neues Element an der angegebenen Position in die Liste ein. Das erste Element wird mit 0 indiziert. Das eingefügte Element ist das Element selbst und keine Kopie.

- Wenn das neue Element bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird.
- Wenn das Element bereits in dieser Liste ist, beachten Sie, dass der Index des einzufügenden Elements vor der Entfernung des Elements ist.
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
  - : Eine nicht-negative Ganzzahl, die den Index des Elements angibt, vor dem das neue Element eingefügt werden soll.

### Rückgabewert

Das [`SVGNumber`](/de/docs/Web/API/SVGNumber), das der Liste hinzugefügt wurde.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
