---
title: "SVGLengthList: insertItemBefore()-Methode"
short-title: insertItemBefore()
slug: Web/API/SVGLengthList/insertItemBefore
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

Die **`insertItemBefore()`**-Methode der [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Schnittstelle fügt ein neues Element an der angegebenen Position in die Liste ein. Das erste Element hat den Index 0. Wenn das neue Element bereits in einer Liste ist, wird es vor dem Einfügen in diese Liste aus seiner vorherigen Liste entfernt. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn das Element bereits in dieser Liste ist, beachten Sie, dass der Index des Elements, vor dem eingefügt werden soll, vor der Entfernung des Elements liegt. Wenn der Index gleich 0 ist, wird das neue Element am Anfang der Liste eingefügt. Wenn der Index größer oder gleich der [`length`](/de/docs/Web/API/SVGLengthList/length) ist, wird das neue Element am Ende der Liste angehängt.

## Syntax

```js-nolint
insertItemBefore(newItem, index)
```

### Parameter

- `newItem`
  - : Das [`SVGLength`](/de/docs/Web/API/SVGLength), das der Liste hinzugefügt werden soll.
- `index`
  - : Eine nicht negative Ganzzahl, die den Index des Elements angibt, vor dem das neue Element eingefügt werden soll.

### Rückgabewert

Das [`SVGLength`](/de/docs/Web/API/SVGLength), das der Liste hinzugefügt wurde.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `NoModificationAllowedError`
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Siehe [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
