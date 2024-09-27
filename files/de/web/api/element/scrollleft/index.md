---
title: "Element: scrollLeft-Eigenschaft"
short-title: scrollLeft
slug: Web/API/Element/scrollLeft
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("DOM")}}

Die **`Element.scrollLeft`**-Eigenschaft ermittelt oder setzt die Anzahl der Pixel, um die der Inhalt eines Elements von seinem linken Rand aus gescrollt wurde. Dieser Wert ist in modernen Browsern subpixelgenau, was bedeutet, dass es sich nicht unbedingt um eine Ganzzahl handelt.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der die Anzahl der Pixel angibt, um die das Element derzeit horizontal vom Ursprung aus gescrollt ist, wobei ein positiver Wert bedeutet, dass das Element nach rechts gescrollt wurde (um mehr Inhalt rechts zu zeigen). Wenn das Element überhaupt nicht nach links oder rechts gescrollt ist, beträgt `scrollLeft` 0. Wenn das Dokument nicht das aktive Dokument ist, beträgt der zurückgegebene Wert 0. Wenn das Dokument auf einem subpixelgenauen Gerät gerendert wird, ist der zurückgegebene Wert ebenfalls subpixelgenau und kann eine Dezimalkomponente enthalten.

Es ist möglich, dass `scrollLeft` negativ ist, wenn das Element von dem ursprünglich enthaltenden Block nach links gescrollt werden kann. Wenn beispielsweise die {{cssxref("direction")}} des Elements `rtl` (von rechts nach links) ist und der Inhalt nach links wächst, ist `scrollLeft` `0`, wenn die Bildlaufleiste an ihrer äußersten rechten Position ist (am Anfang des gescrollten Inhalts) und wird dann zunehmend negativ, während man sich dem Ende des Inhalts nähert.

Safari reagiert auf das Überscrollen, indem `scrollLeft` über die maximale Scrollposition hinaus aktualisiert wird (es sei denn, der Standard-"Bounce"-Effekt ist deaktiviert, zum Beispiel durch Setzen von {{cssxref("overscroll-behavior")}} auf `none`), während Chrome und Firefox dies nicht tun.

Die `scrollLeft`-Eigenschaft kann gesetzt werden, was dazu führt, dass das Element an die angegebene horizontale Position scrollt, in der gleichen Weise, wie wenn [`Element.scroll()`](/de/docs/Web/API/Element/scroll) mit `behavior: "auto"` verwendet wird.

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

- [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop)
- [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo)
