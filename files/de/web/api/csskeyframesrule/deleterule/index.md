---
title: "CSSKeyframesRule: deleteRule() Methode"
short-title: deleteRule()
slug: Web/API/CSSKeyframesRule/deleteRule
l10n:
  sourceCommit: a397ab763a6686a4056af755e4da32ac735b9fa5
---

{{APIRef("CSSOM") }}

Die **`deleteRule()`** Methode des [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)-Interfaces löscht die [`CSSKeyFrameRule`](/de/docs/Web/API/CSSKeyframeRule), die mit dem angegebenen Keyframe-Selektor übereinstimmt.

## Syntax

```js-nolint
deleteRule(select)
```

### Parameter

- `select`
  - : Ein String, der den [Keyframe-Selektor](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) der zu löschenden Regel enthält, der sein muss:
    - eine durch Kommas getrennte Liste von Prozentwerten zwischen 0 % und 100 %;
    - oder die Schlüsselwörter `from` oder `to`

    Beachten Sie, dass die Anzahl und Reihenfolge der Werte im angegebenen Keyframe-Selektor mit denen der anvisierten Keyframe-Regel(n) übereinstimmen müssen. Leerzeichen werden ignoriert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das CSS enthält eine Keyframes-Anweisung. Diese wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Objekt zurück. Die Rückgabe der `cssRules`-Eigenschaft würde eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) mit zwei Regeln zurückgeben.

Nach dem Löschen einer Regel mit `deleteRule()` gibt die `cssRules`-Eigenschaft eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) mit einer Regel zurück.

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
keyframes.deleteRule("to");
console.log(keyframes.cssRules); // a CSSRuleList object with one rule
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
