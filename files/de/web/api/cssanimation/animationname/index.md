---
title: "CSSAnimation: animationName-Eigenschaft"
short-title: animationName
slug: Web/API/CSSAnimation/animationName
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("Web Animations")}}

Die **`animationName`**-Eigenschaft des [`CSSAnimation`](/de/docs/Web/API/CSSAnimation)-Interfaces gibt die {{CSSXref("animation-name")}} zurück. Diese Eigenschaft spezifiziert eine oder mehrere Keyframe-Regeln, die die auf das Element angewendete Animation beschreiben.

## Wert

Ein String.

## Beispiele

### Rückgabe der animationName

Die Animation im folgenden Beispiel ist im CSS mit dem Namen `slide-in` definiert. Ein Aufruf von [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück. Die `animationName`-Eigenschaft gibt den der Animation zugewiesenen Namen zurück, in unserem Fall `slide-in`.

```css
.animate {
  animation: slide-in 0.7s both;
}

@keyframes slide-in {
  0% {
    transform: translateY(-1000px);
  }
  100% {
    transform: translateY(0);
  }
}
```

```js
let animations = document.querySelector(".animate").getAnimations();
console.log(animations[0].animationName);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
