---
title: "CSSKeyframesRule: name-Eigenschaft"
short-title: name
slug: Web/API/CSSKeyframesRule/name
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM") }}

Die **`name`**-Eigenschaft der {{domxref("CSSKeyframeRule")}}-Schnittstelle ruft den Namen der Animation ab und setzt diesen, wie er von der {{cssxref("animation-name")}}-Eigenschaft verwendet wird.

## Wert

Ein String.

## Beispiele

Das CSS enthält eine Keyframes-At-Regel. Dies wird die erste {{domxref("CSSRule")}} sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein {{domxref("CSSKeyframesRule")}}-Objekt zurück, mit dem `name` auf "slidein" gesetzt.

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
