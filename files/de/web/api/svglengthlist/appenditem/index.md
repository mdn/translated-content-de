---
title: "SVGLengthList: appendItem() Methode"
short-title: appendItem()
slug: Web/API/SVGLengthList/appendItem
l10n:
  sourceCommit: 39b9de4883b6d7606fd4549c894bbed6aafc7fc2
---

{{APIRef("SVG")}}

Die **`appendItem()`**-Methode der [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Schnittstelle fügt ein neues Element am Ende der Liste hinzu. Wenn das angegebene Element bereits in einer Liste ist, wird es vor dem Einfügen in diese Liste aus seiner vorherigen Liste entfernt. Das eingefügte Element ist das Element selbst und nicht eine Kopie.

## Syntax

```js-nolint
appendItem(newItem)
```

### Parameter

- `newItem`
  - : Der [`SVGLength`](/de/docs/Web/API/SVGLength), der zur Liste hinzugefügt werden soll.

### Rückgabewert

Der [`SVGLength`](/de/docs/Web/API/SVGLength), der zur Liste hinzugefügt wurde.

### Ausnahmen

- [`DOMException`](/de/docs/Web/API/DOMException) `NoModificationAllowedError`
  - : Wird ausgelöst, wenn die Liste schreibgeschützt ist.

## Beispiele

Siehe [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) für ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
