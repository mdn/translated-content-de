---
title: "CSSKeyframeRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSKeyframeRule/style
l10n:
  sourceCommit: c053b4b3bb0f34736e9f4402d4254830670af723
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`style`**-Eigenschaft der [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)-Schnittstelle enthält ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt, das die im Körper der {{cssxref("@keyframes")}}-Regel verfügbaren Deskriptoren darstellt.

## Wert

Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt.

Obwohl die `style`-Eigenschaft selbst in dem Sinne schreibgeschützt ist, dass Sie das `CSSStyleDeclaration`-Objekt nicht ersetzen können, können Sie dennoch direkt der `style`-Eigenschaft etwas zuweisen, was gleichbedeutend mit der Zuweisung zu ihrer [`cssText`](/de/docs/Web/API/CSSStyleDeclaration/cssText)-Eigenschaft ist. Sie können das `CSSStyleDeclaration`-Objekt auch mit den Methoden [`setProperty()`](/de/docs/Web/API/CSSStyleDeclaration/setProperty) und [`removeProperty()`](/de/docs/Web/API/CSSStyleDeclaration/removeProperty) ändern.

## Beispiele

Das CSS enthält eine {{cssxref("@keyframes")}}-At-Regel. Diese wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Objekt zurück, das einzelne [`CSSKeyFrameRule`](/de/docs/Web/API/CSSKeyframeRule)-Objekte für jedes Keyframe enthalten wird.

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
console.log(keyframes[0].style); // a CSSStyleDeclaration
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
