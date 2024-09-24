---
title: CSSAnimation
slug: Web/API/CSSAnimation
l10n:
  sourceCommit: 4f5e90f47c518afd1e3c11a9fb32b933cc8434e9
---

{{APIRef("Web Animations")}}

Die **`CSSAnimation`**-Schnittstelle der {{domxref('Web Animations API','','',' ')}} repräsentiert ein {{domxref("Animation")}}-Objekt.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem Elternteil, {{domxref("Animation")}}._

- {{domxref("CSSAnimation.animationName")}} {{ReadOnlyInline}}
  - : Gibt den Animationsnamen als String zurück.

## Instanzmethoden

_Diese Schnittstelle erbt Methoden von ihrem Elternteil, {{domxref("Animation")}}._

## Beispiele

### Untersuchen der zurückgegebenen CSSAnimation

Die Animation im folgenden Beispiel ist in CSS mit dem Namen `slide-in` definiert. Der Aufruf von {{domxref("Element.getAnimations()")}} gibt ein Array aller {{domxref("Animation")}}-Objekte zurück. In unserem Fall wird ein `CSSAnimation`-Objekt zurückgegeben, das die in CSS erstellte Animation darstellt.

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
console.log(animations[0]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
