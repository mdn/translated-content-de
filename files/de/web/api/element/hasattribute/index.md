---
title: "Element: hasAttribute()-Methode"
short-title: hasAttribute()
slug: Web/API/Element/hasAttribute
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{APIRef("DOM")}}

Die **`Element.hasAttribute()`**-Methode gibt einen
**Boolean**-Wert zurück, der angibt, ob das angegebene Element das
angegebene Attribut hat oder nicht.

## Syntax

```js-nolint
hasAttribute(name)
```

### Parameter

- `name`
  - : ist ein String, der den Namen des Attributs darstellt.

### Rückgabewert

Ein boolean.

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

- [`Element.hasAttributes()`](/de/docs/Web/API/Element/hasAttributes)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
