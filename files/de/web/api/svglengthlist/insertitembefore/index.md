---
title: "SVGLengthList: insertItemBefore() Methode"
short-title: insertItemBefore()
slug: Web/API/SVGLengthList/insertItemBefore
l10n:
  sourceCommit: d2457d93858bde8da4c6db79d9c7e5c1c5799441
---

{{APIRef("SVG")}}

Die **`insertItemBefore()`**-Methode der [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Schnittstelle fügt ein neues Element an der angegebenen Position in die Liste ein. Das erste Element hat den Index 0. Das eingefügte Element ist das Element selbst und nicht eine Kopie.

- Wenn das neue Element bereits in einer Liste ist, wird es vor dem Einfügen aus seiner vorherigen Liste entfernt.
- Wenn das Element bereits in dieser Liste ist, beachten Sie, dass der Index des einzufügenden Elements vor dem Entfernen des Elements liegt.
- Wenn der Index gleich 0 ist, wird das neue Element an den Anfang der Liste eingefügt.
- Wenn der Index größer oder gleich der [`length`](/de/docs/Web/API/SVGLengthList/length) ist, wird das neue Element an das Ende der Liste angehängt.

## Syntax

```js-nolint
insertItemBefore(newItem, index)
```

### Parameter

- `newItem`
  - : Das [`SVGLength`](/de/docs/Web/API/SVGLength), das der Liste hinzugefügt werden soll.
- `index`
  - : Eine nicht-negative Ganzzahl, die den Index angibt, vor dem das neue Element eingefügt werden soll.

### Rückgabewert

Das [`SVGLength`](/de/docs/Web/API/SVGLength), das zur Liste hinzugefügt wurde.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `NoModificationAllowedError`
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Siehe [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
