---
title: "Element: Methode hasAttributes()"
short-title: hasAttributes()
slug: Web/API/Element/hasAttributes
l10n:
  sourceCommit: 990ab6637bb4d44f059597262cbf3c51abae79eb
---

{{ApiRef("DOM")}}

Die **`hasAttributes()`** Methode des {{domxref("Element")}} Interfaces gibt einen booleschen Wert zurück, der angibt, ob das aktuelle Element Attribute hat oder nicht.

## Syntax

```js-nolint
hasAttributes()
```

### Parameter

Keine.

### Rückgabewert

Ein boolescher Wert.

## Beispiele

```js
let foo = document.getElementById("foo");
if (foo.hasAttributes()) {
  // Do something with 'foo.attributes'
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("Element.attributes")}}
- {{domxref("Element.hasAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.removeAttribute()")}}
- {{domxref("Element.toggleAttribute()")}}
