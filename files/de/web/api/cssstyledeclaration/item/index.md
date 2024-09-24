---
title: "CSSStyleDeclaration: item()-Methode"
short-title: item()
slug: Web/API/CSSStyleDeclaration/item
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

Die `CSSStyleDeclaration.item()`-Methoden-Schnittstelle gibt einen CSS-Property-Namen aus einer {{domxref('CSSStyleDeclaration')}} anhand des Indexes zurück.

Diese Methode wirft keine Ausnahmen, solange Sie Argumente angeben; ein leerer String wird zurückgegeben, wenn der Index außerhalb des Bereichs liegt, und ein {{jsxref("TypeError")}} wird geworfen, wenn kein Argument angegeben wird.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Der Index des Knotens, der abgerufen werden soll. Der Index ist nullbasiert.

### Rückgabewert

Ein String, der der Name der CSS-Eigenschaft am angegebenen Index ist.

JavaScript hat eine spezielle, einfachere Syntax, um ein Element aus einem NodeList anhand des Indexes zu erhalten:

```js
const propertyName = style[index];
```

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn kein Argument angegeben wird.

## Beispiele

```js
const style = document.getElementById("div1").style;
const propertyName = style.item(1); // oder style[1] - gibt den zweiten aufgelisteten Stil zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
