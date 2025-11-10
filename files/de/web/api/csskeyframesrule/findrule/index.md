---
title: "CSSKeyframesRule: findRule() Methode"
short-title: findRule()
slug: Web/API/CSSKeyframesRule/findRule
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSSOM") }}

Die **`findRule()`** Methode des [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule) Interfaces sucht die [`CSSKeyFrameRule`](/de/docs/Web/API/CSSKeyframeRule), die mit dem angegebenen Keyframe-Selektor übereinstimmt.

## Syntax

```js-nolint
findRule(select)
```

### Parameter

- `select`

  - : Ein String, der den Keyframe-Selektor der zu findenden Regel enthält. Dieser muss sein:

    - eine durch Kommas getrennte Liste von Prozentwerten zwischen 0% und 100%;
    - oder die Schlüsselwörter `from` oder `to`

    Beachten Sie, dass die Anzahl und Reihenfolge der Werte im angegebenen Keyframe-Selektor mit denen der anvisierten Keyframe-Regel(n) übereinstimmen müssen. Leerzeichen werden ignoriert.

### Rückgabewert

Eine [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule), die die zuletzt gefundene Regel ist. Wenn keine Regeln gefunden werden, wird nichts zurückgegeben.

## Beispiele

Das CSS enthält eine Keyframes-At-Regel. Diese wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) Objekt zurück. Der Aufruf von findRule("to") gibt eine [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule) zurück, die die zweite Regel darstellt.

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
console.log(keyframes.findRule("to")); // a CSSKeyframeRule object
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
