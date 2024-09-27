---
title: "SVGLengthList: initialize()-Methode"
short-title: initialize()
slug: Web/API/SVGLengthList/initialize
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

Die **`initialize()`**-Methode der [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Schnittstelle entfernt alle vorhandenen Elemente aus der Liste und initialisiert die Liste neu, um das im Parameter angegebene einzelne Element aufzunehmen. Wenn das einzufügende Element bereits in einer Liste enthalten ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Der Rückgabewert ist das in die Liste eingefügte Element.

## Syntax

```js-nolint
initialize(newItem)
```

### Parameter

- `newItem`
  - : Der [`SVGLength`](/de/docs/Web/API/SVGLength), der der Liste hinzugefügt werden soll.

### Rückgabewert

Der [`SVGLength`](/de/docs/Web/API/SVGLength), der der Liste hinzugefügt wurde.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `NoModificationAllowedError`
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Siehe [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) für ein komplettes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
