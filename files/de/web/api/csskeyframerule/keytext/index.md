---
title: "CSSKeyframeRule: keyText-Eigenschaft"
short-title: keyText
slug: Web/API/CSSKeyframeRule/keyText
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM") }}

Die **`keyText`**-Eigenschaft des {{domxref("CSSKeyframeRule")}} Interfaces repräsentiert den Keyframe-Selektor als eine durch Kommata getrennte Liste von Prozentwerten. Die Schlüsselwörter from und to entsprechen jeweils 0% und 100%.

## Wert

Ein String.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn `keyText` mit einem ungültigen Keyframe-Selektor aktualisiert wird. In diesem Fall bleibt `keyText` unverändert.

## Beispiele

Das CSS enthält eine Keyframes-At-Regel. Dies wird die erste {{domxref("CSSRule")}}, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein {{domxref("CSSKeyframesRule")}} Objekt zurück, das einzelne {{domxref("CSSKeyFrameRule")}} Objekte für jeden Keyframe enthalten wird.

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
let myRules = document.styleSheets[0].cssRules;
let keyframes = myRules[0]; // a CSSKeyframesRule
console.log(keyframes[0].keyText); // ein String, der 0% enthält
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
