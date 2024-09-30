---
title: CSSAnimation
slug: Web/API/CSSAnimation
l10n:
  sourceCommit: 4f5e90f47c518afd1e3c11a9fb32b933cc8434e9
---

{{APIRef("Web Animations")}}

Die **`CSSAnimation`**-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) repräsentiert ein [`Animation`](/de/docs/Web/API/Animation)-Objekt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihrem übergeordneten Objekt, [`Animation`](/de/docs/Web/API/Animation)._

- [`CSSAnimation.animationName`](/de/docs/Web/API/CSSAnimation/animationName) {{ReadOnlyInline}}
  - : Gibt den Animationsnamen als String zurück.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von ihrem übergeordneten Objekt, [`Animation`](/de/docs/Web/API/Animation)._

## Beispiele

### Untersuchung der zurückgegebenen CSSAnimation

Die Animation im folgenden Beispiel ist in CSS mit dem Namen `slide-in` definiert. Der Aufruf von [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück. In unserem Fall wird ein `CSSAnimation`-Objekt zurückgegeben, das die in CSS erstellte Animation repräsentiert.

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
