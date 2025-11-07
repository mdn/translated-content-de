---
title: "CSSKeyframesRule: cssRules-Eigenschaft"
short-title: cssRules
slug: Web/API/CSSKeyframesRule/cssRules
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{APIRef("CSSOM") }}

Die schreibgeschützte **`cssRules`**-Eigenschaft der [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)-Schnittstelle gibt eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) zurück, die die Regeln im Keyframes-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) enthält.

> [!NOTE]
> Die `CSSKeyframeRule` selbst ist wie ein Array indizierbar und funktioniert ähnlich wie ihre `cssRules`-Eigenschaft.

## Wert

Eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList).

## Beispiele

Das CSS enthält eine Keyframes-At-Regel. Diese wird die erste von `document.styleSheets[0].cssRules` zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) sein.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Objekt zurück. Die `cssRules`-Eigenschaft gibt eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) zurück, die zwei Regeln enthält.

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
console.log(keyframes.cssRules); // a CSSRuleList object with two rules
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
