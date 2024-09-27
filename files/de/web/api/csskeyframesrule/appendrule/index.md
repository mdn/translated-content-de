---
title: "CSSKeyframesRule: appendRule() Methode"
short-title: appendRule()
slug: Web/API/CSSKeyframesRule/appendRule
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM") }}

Die **`appendRule()`** Methode der [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule) Schnittstelle fügt eine [`CSSKeyFrameRule`](/de/docs/Web/API/CSSKeyFrameRule) am Ende der Regeln hinzu.

## Syntax

```js-nolint
appendRule(rule)
```

### Parameter

- `rule`
  - : Ein String, der eine Keyframe-Regel enthält.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das CSS beinhaltet eine Keyframes-At-Regel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) Objekt zurück. Die Rückgabe der `cssRules`-Eigenschaft würde eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) enthalten, die eine Regel enthält.

Nach dem Hinzufügen einer weiteren Regel mit `appendRule` gibt die `cssRules`-Eigenschaft eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) zurück, die zwei Regeln enthält.

```css
@keyframes slidein {
  from {
    transform: translateX(0%);
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let keyframes = myRules[0]; // a CSSKeyframesRule
keyframes.appendRule("to {transform: translateX(100%);}");
console.log(keyframes.cssRules); // a CSSRuleList object with two rules
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
