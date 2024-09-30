---
title: "CSSKeyframesRule: name-Eigenschaft"
short-title: name
slug: Web/API/CSSKeyframesRule/name
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM") }}

Die **`name`**-Eigenschaft des [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule)-Interfaces ruft den Namen der Animation ab und legt ihn fest, wie er von der {{cssxref("animation-name")}}-Eigenschaft verwendet wird.

## Wert

Ein String.

## Beispiele

Das CSS enthält eine Schlüsselbild-At-Regel. Dies wird die erste von `document.styleSheets[0].cssRules` zurückgegebene [`CSSRule`](/de/docs/Web/API/CSSRule) sein.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Objekt zurück, dessen `name` auf "slidein" gesetzt ist.

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
console.log(keyframes.name); // "slidein"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
