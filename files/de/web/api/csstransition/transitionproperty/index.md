---
title: "CSSTransition: transitionProperty-Eigenschaft"
short-title: transitionProperty
slug: Web/API/CSSTransition/transitionProperty
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef("Web Animations")}}

Die **`transitionProperty`**-Eigenschaft des
[`CSSTransition`](/de/docs/Web/API/CSSTransition)-Interfaces liefert den **erweiterten Übergangseigenschaftsnamen** der Transition zurück. Dies ist die ausgeschriebene CSS-Eigenschaft, für die die Transition generiert wurde.

## Wert

Ein String.

## Beispiele

### Rückgabe der transitionProperty

Die Transition im folgenden Beispiel ändert die Breite des Kastens beim Hover-Effekt. Der Aufruf von
[`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation)-
Objekte zurück. In unserem Fall wird ein `CSSTransition`-Objekt zurückgegeben, das die
erzeugte Animation darstellt. Die `transitionProperty`-Eigenschaft gibt die Eigenschaft
zurück, für die die Transition erstellt wurde, in diesem Fall `width`.

```css
.box {
  background-color: #165baa;
  color: white;
  width: 100px;
  height: 100px;
  transition: width 4s;
}

.box:hover {
  width: 200px;
}
```

```js
const item = document.querySelector(".box");
item.addEventListener("transitionrun", () => {
  let animations = document.querySelector(".box").getAnimations();
  console.log(animations[0].propertyName);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
