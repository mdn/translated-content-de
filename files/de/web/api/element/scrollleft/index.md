---
title: "Element: scrollLeft-Eigenschaft"
short-title: scrollLeft
slug: Web/API/Element/scrollLeft
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("DOM")}}

Die **`Element.scrollLeft`**-Eigenschaft ruft die Anzahl der Pixel ab oder legt sie fest, um die der Inhalt eines Elements von seiner linken Kante gescrollt wurde. Diese Zahl ist in modernen Browsern subpixelgenau, was bedeutet, dass sie nicht unbedingt eine Ganzzahl ist.

## Wert

Ein Gleitkommawert doppelter Genauigkeit, der die Anzahl der Pixel angibt, um die das Element derzeit horizontal vom Ursprung gescrollt worden ist, wobei ein positiver Wert bedeutet, dass das Element nach rechts gescrollt wird (um mehr Inhalt auf der rechten Seite anzuzeigen). Wenn das Element überhaupt nicht nach links oder rechts gescrollt wird, ist `scrollLeft` 0. Wenn das Dokument nicht das aktive Dokument ist, beträgt der zurückgegebene Wert 0. Wenn das Dokument auf einem Gerät mit subpixelgenauer Darstellung gerendert wird, ist der zurückgegebene Wert ebenfalls subpixelgenau und kann eine Dezimalkomponente enthalten.

Es ist möglich, dass `scrollLeft` negativ ist, wenn das Element von dem initialen umschließenden Block nach links gescrollt werden kann. Zum Beispiel, wenn die {{cssxref("direction")}} des Elements `rtl` (von rechts nach links) ist und der Inhalt nach links wächst, ist `scrollLeft` `0`, wenn die Bildlaufleiste in ihrer rechten Endposition ist (am Anfang des gescrollten Inhalts), und zunehmend negativ, wenn Sie zum Ende des Inhalts scrollen.

Safari reagiert auf Überrollen, indem es `scrollLeft` über die maximale Scrollposition hinaus aktualisiert (es sei denn, der Standard-"Bounce"-Effekt ist deaktiviert, z.B. durch Setzen von {{cssxref("overscroll-behavior")}} auf `none`), während Chrome und Firefox dies nicht tun.

Die `scrollLeft`-Eigenschaft kann gesetzt werden, was dazu führt, dass das Element zur angegebenen horizontalen Position scrollt, in derselben Weise wie bei der Verwendung von [`Element.scroll()`](/de/docs/Web/API/Element/scroll) mit `behavior: "auto"`.

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
