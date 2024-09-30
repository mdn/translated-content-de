---
title: "Element: scrollTop-Eigenschaft"
short-title: scrollTop
slug: Web/API/Element/scrollTop
l10n:
  sourceCommit: c9e9d3335165b225defae2d95de6a2f7fa28e885
---

{{APIRef("DOM")}}

Die **`Element.scrollTop`**-Eigenschaft ermittelt oder setzt die Anzahl der Pixel, um die der Inhalt eines Elements von seinem oberen Rand gescrollt ist. Dieser Wert ist in modernen Browsern subpixelgenau, was bedeutet, dass es sich nicht unbedingt um eine ganze Zahl handelt.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der die Anzahl der Pixel angibt, um die das Element vertikal vom Ursprung gescrollt ist, wobei ein positiver Wert bedeutet, dass das Element nach unten gescrollt ist (um mehr Inhalt unten sichtbar zu machen). Wenn das Element überhaupt nicht nach oben oder unten gescrollt ist, beträgt der `scrollTop`-Wert 0. Wenn das Dokument nicht das aktive Dokument ist, wird der zurückgegebene Wert 0 sein. Wenn das Dokument auf einem subpixelgenauen Gerät gerendert wird, ist der zurückgegebene Wert ebenfalls subpixelgenau und kann eine Dezimalkomponente enthalten.

Es ist möglich, dass `scrollTop` negativ ist, wenn das Element aus dem anfänglichen Containing-Block nach oben gescrollt werden kann. Zum Beispiel, wenn die {{cssxref("flex-direction")}} des Elements `column-reverse` ist und der Inhalt nach oben wächst, beträgt der `scrollTop`-Wert `0`, wenn die Scrollleiste in ihrer untersten Position ist (am Anfang des gescrollten Inhalts), und wird zunehmend negativ, je weiter Sie zum Ende des Inhalts scrollen.

Safari reagiert auf Overscrolling, indem es den `scrollTop`-Wert über die maximale Scrollposition hinaus aktualisiert (es sei denn, der standardmäßige "Bounce"-Effekt ist deaktiviert, z. B. durch Setzen von {{cssxref("overscroll-behavior")}} auf `none`), während Chrome und Firefox dies nicht tun. Beispielsweise kann `scrollTop` in Safari negativ sein, indem Sie einfach weiter nach oben scrollen, wenn das Element bereits ganz oben ist.

Die `scrollTop`-Eigenschaft kann gesetzt werden, was dazu führt, dass das Element zur angegebenen vertikalen Position scrollt, in gleicher Weise wie bei der Verwendung von [`Element.scroll()`](/de/docs/Web/API/Element/scroll) mit `behavior: "auto"`.

## Beispiele

### Ein Element scrollen

In diesem Beispiel versuchen Sie, den Container mit dem gestrichelten Rand zu scrollen und sehen, wie sich der Wert von `scrollTop` ändert.

#### HTML

```html
<div id="container">
  <p>
    Far out in the uncharted backwaters of the unfashionable end of the western
    spiral arm of the Galaxy lies a small unregarded yellow sun. Orbiting this
    at a distance of roughly ninety-two million miles is an utterly
    insignificant little blue green planet whose ape-descended life forms are so
    amazingly primitive that they still think digital watches are a pretty neat
    idea.
  </p>
</div>

<div id="output">scrollTop: 0</div>
```

#### CSS

```css
#container {
  overflow: scroll;
  height: 150px;
  width: 150px;
  border: 5px dashed orange;
}

#output {
  padding: 1rem 0;
}
```

#### JavaScript

```js
const container = document.querySelector("#container");
const output = document.querySelector("#output");

container.addEventListener("scroll", (event) => {
  output.textContent = `scrollTop: ${container.scrollTop}`;
});
```

#### Ergebnis

{{EmbedLiveSample("Scrolling_an_element", 400, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
- [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo)
