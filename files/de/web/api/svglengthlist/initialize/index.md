---
title: "SVGLengthList: initialize()-Methode"
short-title: initialize()
slug: Web/API/SVGLengthList/initialize
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

Die **`initialize()`**-Methode der {{domxref("SVGLengthList")}}-Schnittstelle löscht alle vorhandenen Elemente aus der Liste und initialisiert die Liste neu, um das einzelne Element zu halten, das durch den Parameter angegeben wird. Wenn das eingefügte Element bereits in einer Liste enthalten ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Der Rückgabewert ist das in die Liste eingefügte Element.

## Syntax

```js-nolint
initialize(newItem)
```

### Parameter

- `newItem`
  - : Das {{domxref("SVGLength")}}, das zur Liste hinzugefügt werden soll.

### Rückgabewert

Das {{domxref("SVGLength")}}, das zur Liste hinzugefügt wurde.

### Ausnahmen

- {{domxref("DOMException")}} `NoModificationAllowedError`
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Siehe {{domxref("SVGLengthList")}} für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
