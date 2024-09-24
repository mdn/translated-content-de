---
title: "CSSKeyframeRule: style-Eigenschaft"
short-title: style
slug: Web/API/CSSKeyframeRule/style
l10n:
  sourceCommit: e099e74fe5c09c46f0dfe044894692721a713d29
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`CSSKeyframeRule.style`** Eigenschaft ist das {{ domxref("CSSStyleDeclaration") }} Interface für den [Deklarationsblock](https://www.w3.org/TR/1998/REC-CSS2-19980512/syndata.html#block) der {{ domxref("CSSKeyframeRule") }}.

## Wert

Ein {{domxref("CSSStyleDeclaration")}} Objekt mit den folgenden Eigenschaften:

- computed flag
  - : Nicht gesetzt.
- declarations
  - : Die erklärten Deklarationen in der Regel, in der Reihenfolge, in der sie angegeben wurden, Kurzform-Eigenschaften erweitert zu Langformen.
- parent CSS rule
  - : Das Kontextobjekt, das ein Alias für [this](https://heycam.github.io/webidl/#this) ist.
- owner node
  - : Null.

## Beispiele

Das CSS enthält eine {{cssxref("@keyframes")}} At-Regel. Dies wird die erste {{domxref("CSSRule")}} sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein {{domxref("CSSKeyframesRule")}} Objekt zurück, welches einzelne {{domxref("CSSKeyFrameRule")}} Objekte für jedes Keyframe enthalten wird.

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
