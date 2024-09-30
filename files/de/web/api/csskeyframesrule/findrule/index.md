---
title: "CSSKeyframesRule: findRule() Methode"
short-title: findRule()
slug: Web/API/CSSKeyframesRule/findRule
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM") }}

Die **`findRule()`** Methode der [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule) Schnittstelle findet die [`CSSKeyFrameRule`](/de/docs/Web/API/CSSKeyFrameRule), die mit dem angegebenen Keyframe-Selektor übereinstimmt.

## Syntax

```js-nolint
findRule(select)
```

### Parameter

- `select`

  - : Ein String, der den Keyframe-Selektor der zu findenden Regel enthält. Dieser muss sein:

    - eine durch Kommas getrennte Liste von Prozentwerten zwischen 0% und 100%;
    - oder die Schlüsselwörter `from` oder `to`

    Beachten Sie, dass die Anzahl und Reihenfolge der Werte im angegebenen Keyframe-Selektor mit denen der gewünschten Keyframe-Regel(n) übereinstimmen müssen. Leerzeichen werden ignoriert.

### Rückgabewert

Eine [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule), welche die zuletzt gefundene Regel ist. Wenn keine Regeln gefunden werden, wird nichts zurückgegeben.

## Beispiele

Das CSS enthält eine Keyframes-At-Regel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) Objekt zurück. Der Aufruf von findRule("to") gibt eine [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule) zurück, die die zweite Regel darstellt.

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
console.log(keyframes.findRule("to")); // a CSSKeyframeRule object
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
