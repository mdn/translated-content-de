---
title: "Element: hasAttribute() Methode"
short-title: hasAttribute()
slug: Web/API/Element/hasAttribute
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

Die **`Element.hasAttribute()`** Methode gibt einen **booleschen** Wert zurück, der angibt, ob das angegebene Element das angegebene Attribut besitzt oder nicht.

## Syntax

```js-nolint
hasAttribute(name)
```

### Parameter

- `name`
  - : ist ein String, der den Namen des Attributs darstellt.

### Rückgabewert

Ein boolescher Wert.

## Beispiele

```js
const foo = document.getElementById("foo");
if (foo.hasAttribute("bar")) {
  // do something
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.hasAttributes()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
