---
title: "Element: scrollLeft-Eigenschaft"
short-title: scrollLeft
slug: Web/API/Element/scrollLeft
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("DOM")}}

Die **`scrollLeft`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces ermittelt oder setzt die Anzahl der Pixel, um die der Inhalt eines Elements von seinem linken Rand gescrollt wird. Dieser Wert ist in modernen Browsern subpixelgenau, was bedeutet, dass er nicht unbedingt eine ganze Zahl ist.

## Wert

Ein Gleitkomma-Doppelwert, der die Anzahl der Pixel angibt, um die das Element derzeit horizontal vom Ursprung aus gescrollt ist, wobei ein positiver Wert bedeutet, dass das Element nach rechts gescrollt ist (um mehr Inhalt auf der rechten Seite anzuzeigen). Wenn das Element überhaupt nicht nach links oder rechts gescrollt ist, ist `scrollLeft` 0. Wenn das Dokument nicht das aktive Dokument ist, beträgt der zurückgegebene Wert 0. Wenn das Dokument auf einem subpixelgenauen Gerät gerendert wird, ist der zurückgegebene Wert ebenfalls subpixelgenau und kann eine Dezimalkomponente enthalten.

Es ist möglich, dass `scrollLeft` negativ ist, wenn das Element vom initialen umschließenden Block nach links gescrollt werden kann. Beispielsweise, wenn die {{cssxref("direction")}} des Elements `rtl` (rechts-nach-links) ist und der Inhalt nach links wächst, dann ist `scrollLeft` `0`, wenn die Bildlaufleiste in ihrer rechten Position ist (am Anfang des gescrollten Inhalts) und wird zunehmend negativ, während Sie zum Ende des Inhalts scrollen.

Safari reagiert auf Überscrollen, indem `scrollLeft` über die maximale Bildlaufposition hinaus aktualisiert wird (es sei denn, der Standard-"Bounce"-Effekt ist deaktiviert, indem beispielsweise {{cssxref("overscroll-behavior")}} auf `none` gesetzt wird), während Chrome und Firefox dies nicht tun.

Die `scrollLeft`-Eigenschaft kann gesetzt werden, was dazu führt, dass das Element in die angegebene horizontale Position scrollt, genau wie bei der Verwendung von [`Element.scroll()`](/de/docs/Web/API/Element/scroll) mit `behavior: "auto"`.

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
  border: 1px solid #ccc;
  overflow-x: scroll;
}

#content {
  width: 250px;
  background-color: #ccc;
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
