---
title: "CSSStyleDeclaration: parentRule-Eigenschaft"
short-title: parentRule
slug: Web/API/CSSStyleDeclaration/parentRule
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ APIRef("CSSOM") }}

Die **CSSStyleDeclaration.parentRule** schreibgeschützte Eigenschaft gibt eine [`CSSRule`](/de/docs/Web/API/CSSRule) zurück, die das übergeordnete Element dieses Style-Blocks ist, z. B. eine [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule), die den Stil für einen CSS-Selektor darstellt.

## Wert

Die CSS-Regel, die diesen Deklarationsblock enthält, oder `null`, wenn diese [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) nicht an eine [`CSSRule`](/de/docs/Web/API/CSSRule) angehängt ist.

## Beispiele

Der folgende JavaScript-Code erhält die übergeordnete CSS-Stilregel aus einer [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration):

```js
const declaration = document.styleSheets[0].rules[0].style;
const rule = declaration.parentRule;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
