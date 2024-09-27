---
title: "CSSKeyframeRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSKeyframeRule/style
l10n:
  sourceCommit: e099e74fe5c09c46f0dfe044894692721a713d29
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`CSSKeyframeRule.style`**-Eigenschaft ist das [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Interface für den [Deklarationsblock](https://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block) der [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule).

## Wert

Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt, mit den folgenden Eigenschaften:

- computed flag
  - : Nicht gesetzt.
- declarations
  - : Die in der Regel deklarierten Deklarationen, in der Reihenfolge, in der sie angegeben wurden, abgekürzte Eigenschaften auf Langformen erweitert.
- parent CSS rule
  - : Das Kontextobjekt, welches ein Alias für [dies](https://heycam.github.io/webidl/#this) ist.
- owner node
  - : Null.

## Beispiele

Das CSS enthält eine {{cssxref("@keyframes")}}-At-Regel. Diese wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die durch `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Objekt zurück, welches einzelne [`CSSKeyFrameRule`](/de/docs/Web/API/CSSKeyFrameRule)-Objekte für jedes Keyframe enthalten wird.

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
console.log(keyframes[0].style); // a CSSStyleDeclaration
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
