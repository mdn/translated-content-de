---
title: "CSSKeyframeRule: keyText-Eigenschaft"
short-title: keyText
slug: Web/API/CSSKeyframeRule/keyText
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM") }}

Die **`keyText`**-Eigenschaft der [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)-Schnittstelle repräsentiert den Keyframe-Selektor als eine durch Kommas getrennte Liste von Prozentwerten. Die Schlüsselwörter `from` und `to` entsprechen jeweils 0 % und 100 %.

## Wert

Ein String.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn `keyText` mit einem ungültigen Keyframe-Selektor aktualisiert wird, in diesem Fall bleibt `keyText` unverändert.

## Beispiele

Das CSS beinhaltet eine Keyframes-At-Regel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Objekt zurück, das einzelne [`CSSKeyFrameRule`](/de/docs/Web/API/CSSKeyFrameRule)-Objekte für jeden Keyframe enthalten wird.

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
console.log(keyframes[0].keyText); // a string containing 0%
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
