---
title: "CSSKeyframesRule: length-Eigenschaft"
short-title: Länge
slug: Web/API/CSSKeyframesRule/length
l10n:
  sourceCommit: b3ade406be0ad8a0dcbff00889d9a48d77f8dff1
---

{{APIRef("CSSOM") }}

Die schreibgeschützte **`length`**-Eigenschaft der {{domxref("CSSKeyframeRule")}}-Schnittstelle gibt die Anzahl der {{domxref("CSSKeyframeRule")}}-Objekte in ihrer Liste zurück. Sie können dann direkt auf jede Keyframe-Regel über ihren Index auf dem `CSSKeyframeRule`-Objekt zugreifen.

## Wert

Eine nicht-negative ganze Zahl. Sie sollte denselben Wert wie die `length` der {{domxref("CSSKeyframesRule.cssRules", "cssRules")}}-Eigenschaft haben.

## Beispiele

Das CSS enthält eine Keyframes-At-Regel. Diese wird die erste {{domxref("CSSRule")}} sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird. `myRules[0]` gibt ein {{domxref("CSSKeyframesRule")}}-Objekt zurück. Die `cssRules`-Eigenschaft gibt eine {{domxref("CSSRuleList")}} mit zwei Regeln zurück.

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

## Kompatibilität der Browser

{{Compat}}
