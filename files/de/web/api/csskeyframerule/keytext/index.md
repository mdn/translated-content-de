---
title: "CSSKeyframeRule: keyText-Eigenschaft"
short-title: keyText
slug: Web/API/CSSKeyframeRule/keyText
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("CSSOM") }}

Die **`keyText`**-Eigenschaft der Schnittstelle [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule) repräsentiert den Keyframe-Selektor als kommaseparierte Liste von Prozentwerten. Die Schlüsselwörter `from` und `to` entsprechen dabei 0 % bzw. 100 %.

## Wert

Ein String.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn `keyText` mit einem ungültigen Keyframe-Selektor aktualisiert wird. In diesem Fall bleibt `keyText` unverändert.

## Beispiele

Das CSS enthält eine `@keyframes`-Regel. Diese wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die durch `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Objekt zurück, das einzelne [`CSSKeyFrameRule`](/de/docs/Web/API/CSSKeyframeRule)-Objekte für jedes Keyframe enthalten wird.

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
let myRules = document.styleSheets[0].cssRules;
let keyframes = myRules[0]; // a CSSKeyframesRule
console.log(keyframes[0].keyText); // a string containing 0%
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
