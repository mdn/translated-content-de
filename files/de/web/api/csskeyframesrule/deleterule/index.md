---
title: "CSSKeyframesRule: deleteRule() Methode"
short-title: deleteRule()
slug: Web/API/CSSKeyframesRule/deleteRule
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSSOM") }}

Die **`deleteRule()`** Methode der [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule) Schnittstelle löscht die [`CSSKeyFrameRule`](/de/docs/Web/API/CSSKeyframeRule), die mit dem angegebenen Keyframe-Selektor übereinstimmt.

## Syntax

```js-nolint
deleteRule(select)
```

### Parameter

- `select`

  - : Ein String, der den Keyframe-Selektor der zu löschenden Regel enthält und muss:

    - eine kommagetrennte Liste von Prozentwerten zwischen 0% und 100% sein;
    - oder die Schlüsselwörter `from` oder `to`

    Beachten Sie, dass die Anzahl und Reihenfolge der Werte im angegebenen Keyframe-Selektor mit denen der anvisierten Keyframe-Regel(n) übereinstimmen müssen. Leerzeichen werden ignoriert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das CSS enthält eine Keyframes-At-Regel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) Objekt zurück. Das Zurückgeben der `cssRules` Eigenschaft würde eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) enthalten, die zwei Regeln beinhaltet.

Nach dem Löschen einer Regel mit `deleteRule()` gibt die `cssRules` Eigenschaft eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) zurück, die eine Regel enthält.

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
