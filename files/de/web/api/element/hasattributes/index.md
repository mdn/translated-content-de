---
title: "Element: hasAttributes()-Methode"
short-title: hasAttributes()
slug: Web/API/Element/hasAttributes
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{ApiRef("DOM")}}

Die **`hasAttributes()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle gibt einen boolean-Wert zurück, der angibt, ob das aktuelle Element Attribute hat oder nicht.

## Syntax

```js-nolint
hasAttributes()
```

### Parameter

Keine.

### Rückgabewert

Ein boolean.

## Beispiele

```js
let foo = document.getElementById("foo");
if (foo.hasAttributes()) {
  // Do something with 'foo.attributes'
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.attributes`](/de/docs/Web/API/Element/attributes)
- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
