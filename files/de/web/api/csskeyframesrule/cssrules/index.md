---
title: "CSSKeyframesRule: cssRules-Eigenschaft"
short-title: cssRules
slug: Web/API/CSSKeyframesRule/cssRules
l10n:
  sourceCommit: b3ade406be0ad8a0dcbff00889d9a48d77f8dff1
---

{{APIRef("CSSOM") }}

Die schreibgeschützte **`cssRules`**-Eigenschaft der [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)-Schnittstelle gibt eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) zurück, die die Regeln in den Keyframes [at-rule](/de/docs/Web/CSS/At-rule) enthält.

> [!NOTE]
> Die `CSSKeyframeRule` selbst ist wie ein Array indexierbar und funktioniert ähnlich wie ihre `cssRules`-Eigenschaft.

## Wert

Eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList).

## Beispiele

Das CSS enthält eine Keyframes-At-Regel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
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
let myRules = document.styleSheets[0].cssRules;
let keyframes = myRules[0]; // a CSSKeyframesRule
console.log(keyframes.cssRules); // a CSSRuleList object with two rules
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
