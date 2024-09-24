---
title: "CSSStyleDeclaration: parentRule-Eigenschaft"
short-title: parentRule
slug: Web/API/CSSStyleDeclaration/parentRule
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **CSSStyleDeclaration.parentRule**-Eigenschaft gibt eine {{domxref('CSSRule')}} zurück, die das übergeordnete Element dieses Stilblocks ist, z. B. eine {{domxref('CSSStyleRule')}}, die den Stil für einen CSS-Selektor darstellt.

## Wert

Die CSS-Regel, die diesen Deklarationsblock enthält, oder `null`, wenn diese {{domxref('CSSStyleDeclaration')}} nicht an eine {{domxref('CSSRule')}} gebunden ist.

## Beispiele

Der folgende JavaScript-Code erhält die übergeordnete CSS-Stilregel von einer {{domxref('CSSStyleDeclaration')}}:

```js
const declaration = document.styleSheets[0].rules[0].style;
const rule = declaration.parentRule;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
