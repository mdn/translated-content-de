---
title: "Element: scrollLeft-Eigenschaft"
short-title: scrollLeft
slug: Web/API/Element/scrollLeft
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("DOM")}}

Die **`Element.scrollLeft`**-Eigenschaft liest oder setzt die Anzahl der Pixel, um die der Inhalt eines Elements von seiner linken Kante verschoben ist. Dieser Wert ist in modernen Browsern subpixeltreu, was bedeutet, dass er nicht unbedingt eine ganze Zahl ist.

## Wert

Ein doppeltpräziser Gleitkommawert, der die Anzahl der Pixel angibt, um die das Element derzeit horizontal vom Ursprung verschoben ist, wobei ein positiver Wert bedeutet, dass das Element nach rechts verschoben ist (um mehr Inhalt auf der rechten Seite anzuzeigen). Wenn das Element überhaupt nicht nach links oder rechts verschoben ist, dann ist `scrollLeft` 0. Wenn das Dokument nicht das aktive Dokument ist, wird der Wert 0 zurückgegeben. Wenn das Dokument auf einem subpixeltreuen Gerät gerendert wird, ist der zurückgegebene Wert ebenfalls subpixeltreu und kann eine Dezimalkomponente enthalten.

Es ist möglich, dass `scrollLeft` negativ ist, wenn das Element nach links vom ursprünglichen umgebenden Block verschoben werden kann. Zum Beispiel, wenn die {{cssxref("direction")}} des Elements `rtl` (rechts-nach-links) ist und der Inhalt nach links wächst, dann ist `scrollLeft` `0`, wenn die Scrollleiste an ihrer rechtesten Position ist (am Anfang des gescrollten Inhalts), und wird zunehmend negativ, wenn Sie zum Ende des Inhalts scrollen.

Safari reagiert auf Überscrollen, indem `scrollLeft` über die maximale Scrollposition hinaus aktualisiert wird (es sei denn, der Standard-"Bounce"-Effekt ist deaktiviert, z.B. durch Setzen von {{cssxref("overscroll-behavior")}} auf `none`), während Chrome und Firefox dies nicht tun.

Die `scrollLeft`-Eigenschaft kann gesetzt werden, was dazu führt, dass das Element zur angegebenen horizontalen Position scrollt, auf die gleiche Weise wie bei Verwendung von {{domxref("Element.scroll()")}} mit `behavior: "auto"`.

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

- {{domxref("Element.scrollTop")}}
- {{domxref("Element.scrollTo()")}}
