---
title: "CSSKeyframesRule: findRule() Methode"
short-title: findRule()
slug: Web/API/CSSKeyframesRule/findRule
l10n:
  sourceCommit: a397ab763a6686a4056af755e4da32ac735b9fa5
---

{{APIRef("CSSOM") }}

Die **`findRule()`** Methode des [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule) Schnittstellen findet die [`CSSKeyFrameRule`](/de/docs/Web/API/CSSKeyframeRule), die mit dem angegebenen Keyframe-Selektor übereinstimmt.

## Syntax

```js-nolint
findRule(select)
```

### Parameter

- `select`
  - : Ein String, der den [Keyframe-Selektor](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors) der zu findenden Regel enthält. Dieser muss sein:
    - eine durch Kommas getrennte Liste von Prozentwerten zwischen 0% und 100%;
    - oder die Schlüsselwörter `from` oder `to`

    Beachten Sie, dass die Anzahl und Reihenfolge der Werte im angegebenen Keyframe-Selektor mit denen der angestrebten Keyframe-Regel(n) übereinstimmen müssen. Leerzeichen werden ignoriert.

### Rückgabewert

Eine [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule), welche die letzte übereinstimmende Regel ist. Wenn keine Regeln gefunden werden, wird nichts zurückgegeben.

## Beispiele

Das CSS enthält eine Keyframes-Regel. Dies wird die erste von `document.styleSheets[0].cssRules` zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) sein. `myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) Objekt zurück. Der Aufruf von findRule("to") gibt eine [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule) zurück, die die zweite Regel darstellt.

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
