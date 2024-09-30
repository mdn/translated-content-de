---
title: "CSSStyleDeclaration: item() Methode"
short-title: item()
slug: Web/API/CSSStyleDeclaration/item
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

Die `CSSStyleDeclaration.item()`
Methoden-Schnittstelle gibt einen CSS-Eigenschaften-Namen aus einem [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)
durch Index zurück.

Diese Methode wirft keine Ausnahmen, solange Sie Argumente bereitstellen; ein leerer String wird zurückgegeben, wenn der Index außerhalb des Bereichs liegt, und ein {{jsxref("TypeError")}} wird geworfen, wenn kein Argument bereitgestellt wird.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Der Index des zu holenden Knotens. Der Index ist nullbasiert.

### Rückgabewert

Ein String, der der Name der CSS-Eigenschaft am angegebenen Index ist.

JavaScript hat eine spezielle, einfachere Syntax, um ein Element von einer NodeList durch den Index zu erhalten:

```js
const propertyName = style[index];
```

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn kein Argument bereitgestellt wird.

## Beispiele

```js
const style = document.getElementById("div1").style;
const propertyName = style.item(1); // or style[1] - returns the second style listed
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
