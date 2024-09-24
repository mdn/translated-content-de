---
title: "SVGLengthList: Methode insertItemBefore()"
short-title: insertItemBefore()
slug: Web/API/SVGLengthList/insertItemBefore
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

Die **`insertItemBefore()`**-Methode der {{domxref("SVGLengthList")}}-Schnittstelle fügt ein neues Element an der angegebenen Position in die Liste ein. Das erste Element hat den Index 0. Wenn das neue Element bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn sich das Element bereits in dieser Liste befindet, beachten Sie, dass der Index des Elements, vor dem eingefügt werden soll, vor der Entfernung des Elements steht. Wenn der Index gleich 0 ist, wird das neue Element an den Anfang der Liste eingefügt. Wenn der Index größer oder gleich der {{domxref("SVGLengthList.length", "length")}} ist, wird das neue Element an das Ende der Liste angehängt.

## Syntax

```js-nolint
insertItemBefore(newItem, index)
```

### Parameter

- `newItem`
  - : Der {{domxref("SVGLength")}} der zur Liste hinzugefügt werden soll.
- `index`
  - : Ein nicht-negativer ganzzahliger Wert, der den Index des Elements angibt, vor dem das neue Element eingefügt werden soll.

### Rückgabewert

Der {{domxref("SVGLength")}}, der zur Liste hinzugefügt wurde.

### Ausnahmen

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Siehe {{domxref("SVGLengthList")}} für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
