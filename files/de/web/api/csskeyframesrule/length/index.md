---
title: "CSSKeyframesRule: length Eigenschaft"
short-title: length
slug: Web/API/CSSKeyframesRule/length
l10n:
  sourceCommit: b3ade406be0ad8a0dcbff00889d9a48d77f8dff1
---

{{APIRef("CSSOM") }}

Die schreibgeschützte **`length`**-Eigenschaft der [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)-Schnittstelle gibt die Anzahl der [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)-Objekte in ihrer Liste zurück. Sie können dann auf jede Keyframe-Regel über ihren Index direkt auf dem `CSSKeyframeRule`-Objekt zugreifen.

## Wert

Eine nicht-negative ganze Zahl. Sie sollte denselben Wert haben wie die `length` der [`cssRules`](/de/docs/Web/API/CSSKeyframesRule/cssRules)-Eigenschaft.

## Beispiele

Das CSS enthält eine Keyframes-At-Regel. Diese wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Objekt zurück. Die `cssRules`-Eigenschaft gibt eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) zurück, die zwei Regeln enthält.

```css
@keyframes slidein {
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
