---
title: "CSSKeyframeRule: Eigenschaft style"
short-title: style
slug: Web/API/CSSKeyframeRule/style
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`CSSKeyframeRule.style`**-Eigenschaft ist die [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Schnittstelle für den Deklarationsblock der [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule).

## Wert

Ein [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)-Objekt mit den folgenden Eigenschaften:

- computed flag
  - : Nicht gesetzt.
- declarations
  - : Die in der Regel angegebenen Deklarationen, in der Reihenfolge, in der sie spezifiziert wurden, wobei Kurzschreibweisen auf Langformen erweitert werden.
- parent CSS rule
  - : Das Kontextobjekt, welches ein Alias für [this](https://heycam.github.io/webidl/#this) ist.
- owner node
  - : Null.

## Beispiele

Das CSS enthält eine {{cssxref("@keyframes")}}-At-Regel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
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
