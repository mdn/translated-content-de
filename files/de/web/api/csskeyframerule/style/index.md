---
title: "CSSKeyframeRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSKeyframeRule/style
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`CSSKeyframeRule.style`**-Eigenschaft ist die [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Schnittstelle für den Deklarationsblock der [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule).

## Wert

Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt mit den folgenden Eigenschaften:

- berechnetes Flag
  - : Nicht gesetzt.
- Deklarationen
  - : Die in der Regel deklarierten Deklarationen, in der Reihenfolge, in der sie angegeben wurden, zusammengefasste Eigenschaften erweitert zu Einzelheiten.
- übergeordnete CSS-Regel
  - : Das Kontextobjekt, das ein Alias für [`this`](https://heycam.github.io/webidl/#this) ist.
- Eigentümerknoten
  - : Null.

## Beispiele

Das CSS enthält eine {{cssxref("@keyframes")}}-At-Regel. Diese wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Objekt zurück, das einzelne [`CSSKeyFrameRule`](/de/docs/Web/API/CSSKeyframeRule)-Objekte für jedes Keyframe enthält.

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
