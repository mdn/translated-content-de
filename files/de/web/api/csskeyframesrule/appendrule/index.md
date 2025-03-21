---
title: "CSSKeyframesRule: appendRule()-Methode"
short-title: appendRule()
slug: Web/API/CSSKeyframesRule/appendRule
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("CSSOM") }}

Die **`appendRule()`**-Methode des [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)-Interfaces fügt eine [`CSSKeyFrameRule`](/de/docs/Web/API/CSSKeyframeRule) am Ende der Regeln an.

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

Das CSS enthält eine Keyframes-At-Regel. Diese wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Objekt zurück. Die Rückgabe der `cssRules`-Eigenschaft würde eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) mit einer Regel enthalten zurückgeben.

Nach dem Anhängen einer weiteren Regel mit `appendRule` gibt die `cssRules`-Eigenschaft eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) mit zwei Regeln zurück.

```css
@keyframes slide-in {
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
