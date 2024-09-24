---
title: "Element: scrollTop Eigenschaft"
short-title: scrollTop
slug: Web/API/Element/scrollTop
l10n:
  sourceCommit: c9e9d3335165b225defae2d95de6a2f7fa28e885
---

{{APIRef("DOM")}}

Die **`Element.scrollTop`**-Eigenschaft gibt die Anzahl der Pixel zurück, um die der Inhalt eines Elements von seiner oberen Kante gescrollt ist, oder legt sie fest. Dieser Wert ist in modernen Browsern subpixelgenau, was bedeutet, dass es sich nicht unbedingt um eine Ganzzahl handelt.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der die Anzahl der Pixel angibt, um die das Element derzeit vertikal vom Ursprung aus gescrollt wird, wobei ein positiver Wert bedeutet, dass das Element nach unten gescrollt wird (um mehr Inhalt nach unten sichtbar zu machen). Wenn das Element überhaupt nicht nach oben oder unten gescrollt ist, beträgt `scrollTop` 0. Wenn das Dokument nicht das aktive Dokument ist, ist der zurückgegebene Wert 0. Wenn das Dokument auf einem subpixelgenauen Gerät gerendert wird, ist der zurückgegebene Wert ebenfalls subpixelgenau und kann eine Dezimalkomponente enthalten.

Es ist möglich, dass `scrollTop` negativ ist, wenn das Element vom ursprünglichen Begrenzungsblock nach oben gescrollt werden kann. Wenn zum Beispiel die {{cssxref("flex-direction")}} eines Elements `column-reverse` ist und der Inhalt nach oben wächst, dann ist `scrollTop` `0`, wenn der Bildlaufleiste sich an ihrer untersten Position befindet (am Anfang des gescrollten Inhalts), und dann zunehmend negativ, wenn Sie zum Ende des Inhalts scrollen.

Safari reagiert auf Überziehen, indem `scrollTop` über die maximale Scroll-Position hinaus aktualisiert wird (sofern der Standard-Bounce-Effekt nicht deaktiviert ist, wie z.B. durch Setzen von {{cssxref("overscroll-behavior")}} auf `none`), während Chrome und Firefox dies nicht tun. Zum Beispiel kann `scrollTop` in Safari negativ sein, wenn Sie einfach weiter nach oben scrollen, während das Element bereits am oberen Rand ist.

Die `scrollTop`-Eigenschaft kann gesetzt werden, was dazu führt, dass das Element zur angegebenen vertikalen Position scrollt, ähnlich wie mit {{domxref("Element.scroll()")}} mit `behavior: "auto"`.

## Beispiele

### Ein Element scrollen

In diesem Beispiel versuchen Sie, den Container mit der gestrichelten Umrandung zu scrollen, und sehen, wie sich der Wert von `scrollTop` ändert.

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

- {{domxref("Element.scrollLeft")}}
- {{domxref("Element.scrollTo()")}}
