---
title: "Element: scrollLeft Eigenschaft"
short-title: scrollLeft
slug: Web/API/Element/scrollLeft
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("DOM")}}

Die **`scrollLeft`** Eigenschaft der [`Element`](/de/docs/Web/API/Element) Schnittstelle gibt die Anzahl der Pixel an, um die der Inhalt eines Elements von seinem linken Rand gescrollt ist, oder legt diese fest. Dieser Wert ist in modernen Browsern subpixelgenau, was bedeutet, dass er nicht unbedingt eine ganze Zahl ist.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der die Anzahl der Pixel angibt, um die das Element horizontal vom Ursprung gescrollt ist, wobei ein positiver Wert bedeutet, dass das Element nach rechts gescrollt ist (um mehr Inhalt auf der rechten Seite zu zeigen). Wenn das Element überhaupt nicht nach links oder rechts gescrollt ist, dann ist `scrollLeft` 0. Wenn das Dokument nicht das aktive Dokument ist, ist der zurückgegebene Wert 0. Wenn das Dokument auf einem subpixelgenauen Gerät gerendert wird, ist der zurückgegebene Wert ebenfalls subpixelgenau und kann eine Dezimalkomponente enthalten.

Es ist möglich, dass `scrollLeft` negativ ist, wenn das Element nach links vom anfänglichen Containerblock gescrollt werden kann. Zum Beispiel, wenn die {{cssxref("direction")}} des Elements `rtl` (rechts-nach-links) ist und der Inhalt nach links wächst, dann ist `scrollLeft` `0`, wenn die Scrollleiste sich an ihrer rechten Position befindet (am Anfang des gescrollten Inhalts), und dann zunehmend negativ, wenn Sie zum Ende des Inhalts scrollen.

Safari reagiert auf ein Überscrollen, indem es `scrollLeft` über die maximale Scrollposition hinaus aktualisiert (es sei denn, der Standard-"Bounce"-Effekt ist deaktiviert, z. B. durch Setzen von {{cssxref("overscroll-behavior")}} auf `none`), während Chrome und Firefox dies nicht tun.

Die `scrollLeft` Eigenschaft kann festgelegt werden, wodurch das Element zur angegebenen horizontalen Position gescrollt wird, auf die gleiche Weise wie beim Verwenden von [`Element.scroll()`](/de/docs/Web/API/Element/scroll) mit `behavior: "auto"`.

## Beispiele

### HTML

```html
<div id="container">
  <div id="content">Click the button to slide right!</div>
</div>

<button id="slide" type="button">Slide right</button>
```

### CSS

```css
#container {
  width: 100px;
  height: 100px;
  border: 1px solid #cccccc;
  overflow-x: scroll;
}

#content {
  width: 250px;
  background-color: #cccccc;
}
```

### JavaScript

```js
const button = document.getElementById("slide");

button.onclick = () => {
  document.getElementById("container").scrollLeft += 20;
};
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bestimmung der Dimensionen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [`HTMLElement.offsetLeft`](/de/docs/Web/API/HTMLElement/offsetLeft)
- [`Element.clientLeft`](/de/docs/Web/API/Element/clientLeft)
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight)
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth)
- [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop)
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
- [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo)
