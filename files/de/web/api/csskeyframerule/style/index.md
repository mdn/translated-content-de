---
title: "CSSKeyframeRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSKeyframeRule/style
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte Eigenschaft **`CSSKeyframeRule.style`** ist die Schnittstelle [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) für den [Deklarationsblock](https://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block) der [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule).

## Wert

Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) Objekt mit den folgenden Eigenschaften:

- berechnetes Flag
  - : Nicht gesetzt.
- Deklarationen
  - : Die deklarierten Deklarationen in der Regel, in der Reihenfolge, in der sie angegeben wurden, Kurzschreibweisen erweitert zu Langformen.
- übergeordnete CSS-Regel
  - : Das Kontextobjekt, das ein Alias für [dieses](https://heycam.github.io/webidl/#this) ist.
- Eigentümerknoten
  - : Null.

## Beispiele

Das CSS enthält eine {{cssxref("@keyframes")}}-At-Regel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die durch `document.styleSheets[0].cssRules` zurückgegeben wird. `myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule) Objekt zurück, das einzelne [`CSSKeyFrameRule`](/de/docs/Web/API/CSSKeyFrameRule) Objekte für jedes Keyframe enthalten wird.

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
