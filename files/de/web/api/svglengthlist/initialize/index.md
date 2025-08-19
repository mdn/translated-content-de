---
title: "SVGLengthList: initialize() Methode"
short-title: initialize()
slug: Web/API/SVGLengthList/initialize
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("SVG")}}

Die **`initialize()`**-Methode der [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Schnittstelle entfernt alle vorhandenen Elemente aus der Liste und initialisiert die Liste neu, um das durch den Parameter angegebene Einzelobjekt aufzunehmen. Wenn das eingefügte Element bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und nicht eine Kopie. Der Rückgabewert ist das in die Liste eingefügte Element.

## Syntax

```js-nolint
initialize(newItem)
```

### Parameter

- `newItem`
  - : Das [`SVGLength`](/de/docs/Web/API/SVGLength), das zur Liste hinzugefügt werden soll.

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
