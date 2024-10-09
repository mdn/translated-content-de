---
title: "CSSKeyframesRule: length-Eigenschaft"
short-title: length
slug: Web/API/CSSKeyframesRule/length
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("CSSOM") }}

Die schreibgeschützte **`length`**-Eigenschaft der [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)-Schnittstelle gibt die Anzahl der [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)-Objekte in ihrer Liste zurück. Sie können dann auf jede Keyframe-Regel direkt über ihren Index auf dem `CSSKeyframeRule`-Objekt zugreifen.

## Wert

Eine nicht-negative ganze Zahl. Sie sollte denselben Wert wie die `length` der [`cssRules`](/de/docs/Web/API/CSSKeyframesRule/cssRules)-Eigenschaft haben.

## Beispiele

Das CSS enthält eine `keyframes`-at-Regel. Dies wird die erste von `document.styleSheets[0].cssRules` zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) sein. `myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Objekt zurück. Die `cssRules`-Eigenschaft gibt eine [`CSSRuleList`](/de/docs/Web/API/CSSRuleList) zurück, die zwei Regeln enthält.

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
const myRules = document.styleSheets[0].cssRules;
const keyframes = myRules[0]; // a CSSKeyframesRule
console.log(keyframes.length); // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
