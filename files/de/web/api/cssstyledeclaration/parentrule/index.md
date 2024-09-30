---
title: "CSSStyleDeclaration: parentRule-Eigenschaft"
short-title: parentRule
slug: Web/API/CSSStyleDeclaration/parentRule
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **CSSStyleDeclaration.parentRule**-Eigenschaft gibt eine [`CSSRule`](/de/docs/Web/API/CSSRule) zurück, die das übergeordnete Element dieses Stilblocks ist, z.B. eine [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule), die den Stil für einen CSS-Selektor repräsentiert.

## Wert

Die CSS-Regel, die diesen Deklarationsblock enthält oder `null`, wenn diese [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) nicht mit einer [`CSSRule`](/de/docs/Web/API/CSSRule) verknüpft ist.

## Beispiele

Der folgende JavaScript-Code holt die übergeordnete CSS-Stilregel aus einer [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration):

```js
const declaration = document.styleSheets[0].rules[0].style;
const rule = declaration.parentRule;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
