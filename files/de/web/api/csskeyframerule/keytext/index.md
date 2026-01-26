---
title: "CSSKeyframeRule: keyText-Eigenschaft"
short-title: keyText
slug: Web/API/CSSKeyframeRule/keyText
l10n:
  sourceCommit: a397ab763a6686a4056af755e4da32ac735b9fa5
---

{{APIRef("CSSOM") }}

Die **`keyText`**-Eigenschaft der [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)-Schnittstelle repräsentiert den [Keyframe-Selektor](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) als kommagetrennte Liste von Prozentwerten. Die Schlüsselwörter `from` und `to` entsprechen 0 % bzw. 100 %.

## Wert

Ein String.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Wird ausgelöst, wenn `keyText` mit einem ungültigen Keyframe-Selektor aktualisiert wird. In diesem Fall bleibt `keyText` unverändert.

## Beispiele

Das CSS enthält eine `@keyframes`-Regel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird. `myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Objekt zurück, das einzelne [`CSSKeyFrameRule`](/de/docs/Web/API/CSSKeyframeRule)-Objekte für jeden Keyframe enthält.

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
