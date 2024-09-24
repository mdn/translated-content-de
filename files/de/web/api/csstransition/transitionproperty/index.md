---
title: "CSSTransition: Eigenschaft transitionProperty"
short-title: transitionProperty
slug: Web/API/CSSTransition/transitionProperty
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("Web Animations")}}

Die **`transitionProperty`**-Eigenschaft der
{{domxref("CSSTransition")}}-Schnittstelle gibt den **erweiterten Übergangseigenschaftsnamen**
des Übergangs zurück. Dies ist die Langform der CSS-Eigenschaft, für die der
Übergang erstellt wurde.

## Wert

Ein String.

## Beispiele

### Rückgabe der transitionProperty

Der Übergang im folgenden Beispiel ändert die Breite der Box bei Hover. Der Aufruf von
{{domxref("Element.getAnimations()")}} gibt ein Array von allen {{domxref("Animation")}}
Objekten zurück. In unserem Fall ist dies ein `CSSTransition`-Objekt, das die
erstellte Animation darstellt. Die `transitionProperty`-Eigenschaft gibt die Eigenschaft
zurück, für die der Übergang erstellt wird, nämlich `width`.

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
