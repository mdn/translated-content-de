---
title: "CSSKeyframesRule: name-Eigenschaft"
short-title: name
slug: Web/API/CSSKeyframesRule/name
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("CSSOM") }}

Die **`name`**-Eigenschaft der Schnittstelle [`CSSKeyframeRule`](/de/docs/Web/API/CSSKeyframeRule) ruft den Namen der Animation ab und setzt ihn, wie er von der {{cssxref("animation-name")}}-Eigenschaft verwendet wird.

## Wert

Ein String.

## Beispiele

Das CSS enthält eine Keyframes-At-Regel. Dies wird die erste [`CSSRule`](/de/docs/Web/API/CSSRule) sein, die von `document.styleSheets[0].cssRules` zurückgegeben wird.
`myRules[0]` gibt ein [`CSSKeyframesRule`](/de/docs/Web/API/CSSKeyframesRule)-Objekt zurück, bei dem `name` auf `"slide-in"` gesetzt ist.

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
console.log(keyframes.name); // "slide-in"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
