---
title: "CSSTransition: transitionProperty-Eigenschaft"
short-title: transitionProperty
slug: Web/API/CSSTransition/transitionProperty
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("Web Animations")}}

Die **`transitionProperty`**-Eigenschaft der
[`CSSTransition`](/de/docs/Web/API/CSSTransition)-Schnittstelle gibt den **erweiterten Namen der Übergangseigenschaft**
des Übergangs zurück. Dies ist die Langform der CSS-Eigenschaft, für die der
Übergang erzeugt wurde.

## Wert

Ein String.

## Beispiele

### Die Eigenschaft transitionProperty zurückgeben

Der Übergang im folgenden Beispiel ändert die Breite der Box beim Hover. Der Aufruf von
[`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations) gibt ein Array von allen [`Animation`](/de/docs/Web/API/Animation)-
Objekten zurück. In unserem Fall wird ein `CSSTransition`-Objekt zurückgegeben, das die erstellte
Animation repräsentiert. Die `transitionProperty`-Eigenschaft gibt die Eigenschaft
zurück, für die der Übergang erstellt wurde, nämlich `width`.

```css
.box {
  background-color: #165baa;
  color: #fff;
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
