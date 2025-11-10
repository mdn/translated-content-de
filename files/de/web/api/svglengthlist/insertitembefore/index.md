---
title: "SVGLengthList: insertItemBefore()-Methode"
short-title: insertItemBefore()
slug: Web/API/SVGLengthList/insertItemBefore
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("SVG")}}

Die **`insertItemBefore()`**-Methode des [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Interfaces fügt ein neues Element an der angegebenen Position in die Liste ein. Das erste Element hat den Index 0. Das eingefügte Element ist das Element selbst und keine Kopie.

- Wenn sich das neue Element bereits in einer Liste befindet, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird.
- Wenn sich das Element bereits in dieser Liste befindet, beachten Sie, dass der Index des Elements, vor dem eingefügt werden soll, vor der Entfernung des Elements liegt.
- Wenn der Index gleich 0 ist, wird das neue Element am Anfang der Liste eingefügt.
- Wenn der Index größer oder gleich der [`length`](/de/docs/Web/API/SVGLengthList/length) ist, wird das neue Element am Ende der Liste angehängt.

## Syntax

```js-nolint
insertItemBefore(newItem, index)
```

### Parameter

- `newItem`
  - : Das [`SVGLength`](/de/docs/Web/API/SVGLength), das zur Liste hinzugefügt werden soll.
- `index`
  - : Eine nicht-negative ganze Zahl, die den Index des Elements angibt, vor dem das neue Element eingefügt werden soll.

### Rückgabewert

Das [`SVGLength`](/de/docs/Web/API/SVGLength), das zur Liste hinzugefügt wurde.

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Siehe [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
