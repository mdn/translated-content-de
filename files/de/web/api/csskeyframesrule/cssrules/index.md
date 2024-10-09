---
title: "CSSKeyframesRule: cssRules-Eigenschaft"
short-title: cssRules
slug: Web/API/CSSKeyframesRule/cssRules
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("CSSOM") }}

Die schreibgeschützte **`cssRules`**-Eigenschaft des [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)-Interfaces gibt eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) zurück, die die Regeln der Keyframes-At-Regel enthält.

> [!NOTE]
> Die `CSSKeyframeRule` selbst ist wie ein Array indexierbar und funktioniert ähnlich wie ihre `cssRules`-Eigenschaft.

## Wert

Eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList).

## Beispiele

Das CSS enthält eine Keyframes-At-Regel. Diese wird die erste [%CODE_BLOCK](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
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
