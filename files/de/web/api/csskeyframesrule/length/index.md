---
title: "CSSKeyframesRule: length-Eigenschaft"
short-title: length
slug: Web/API/CSSKeyframesRule/length
l10n:
  sourceCommit: b64f45119284a9a6f07afa0db6750a9902a65a2a
---

{{APIRef("CSSOM") }}

Die schreibgeschützte **`length`**-Eigenschaft des [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Interfaces gibt die Anzahl der [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)-Objekte in ihrer Liste zurück. Sie können dann direkt über den Index auf jedes Keyframe-Regelobjekt im `CSSKeyframeRule`-Objekt zugreifen.

## Wert

Eine nicht-negative Ganzzahl. Sie sollte denselben Wert wie die `length`-Eigenschaft der [`cssRules`](/de/docs/Web/API/CSSKeyframesRule/cssRules)-Eigenschaft haben.

## Beispiele

Das CSS enthält eine Keyframes-At-Regel. Diese wird die erste von `document.styleSheets[0].cssRules` zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) sein.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Objekt zurück. Die `cssRules`-Eigenschaft gibt eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) mit zwei Regeln zurück.

```css
@keyframes slide-in {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const keyframes = myRules[0]; // a CSSKeyframesRule
console.log(keyframes.length); // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
