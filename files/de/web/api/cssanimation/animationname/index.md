---
title: "CSSAnimation: Eigenschaft animationName"
short-title: animationName
slug: Web/API/CSSAnimation/animationName
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("Web Animations")}}

Die **`animationName`**-Eigenschaft des {{domxref("CSSAnimation")}}-Interfaces gibt den {{CSSXref("animation-name")}} zurück. Dieser spezifiziert ein oder mehrere Keyframe-At-Rules, die die auf das Element angewendete Animation beschreiben.

## Wert

Ein String.

## Beispiele

### Zurückgeben des animationName

Die Animation im folgenden Beispiel ist in CSS mit dem Namen `slide-in` definiert. Ein Aufruf von {{domxref("Element.getAnimations()")}} gibt ein Array aller {{domxref("Animation")}}-Objekte zurück. Die `animationName`-Eigenschaft gibt den Namen zurück, der der Animation gegeben wurde, in unserem Fall `slide-in`.

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
