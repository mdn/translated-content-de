---
title: "SVGLengthList: initialize()-Methode"
short-title: initialize()
slug: Web/API/SVGLengthList/initialize
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

Die **`initialize()`**-Methode des [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Interfaces entfernt alle vorhandenen Elemente aus der Liste und initialisiert die Liste neu, um das durch den Parameter angegebene einzelne Element zu halten. Wenn das eingefügte Element bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Der Rückgabewert ist das in die Liste eingefügte Element.

## Syntax

```js-nolint
initialize(newItem)
```

### Parameter

- `newItem`
  - : Das [`SVGLength`](/de/docs/Web/API/SVGLength), das der Liste hinzugefügt werden soll.

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
