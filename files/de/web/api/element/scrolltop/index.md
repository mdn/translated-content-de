---
title: "Element: scrollTop-Eigenschaft"
short-title: scrollTop
slug: Web/API/Element/scrollTop
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("DOM")}}

Die **`scrollTop`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces erhält oder setzt die Anzahl der Pixel, um die der Inhalt eines Elements von seiner oberen Kante gescrollt wird. Dieser Wert ist in modernen Browsern subpixel-genau, was bedeutet, dass er nicht unbedingt eine ganze Zahl ist.

## Wert

Ein Gleitkommawert mit doppelter Genauigkeit, der die Anzahl der Pixel angibt, um die das Element derzeit vertikal vom Ursprung gescrollt ist, wobei ein positiver Wert bedeutet, dass das Element nach unten gescrollt ist (um mehr Inhalt am unteren Rand anzuzeigen). Wenn das Element überhaupt nicht vertikal gescrollt wurde, ist `scrollTop` 0. Wenn das Dokument nicht das aktive Dokument ist, ist der zurückgegebene Wert 0. Wenn das Dokument auf einem subpixelgenauen Gerät gerendert wird, ist der zurückgegebene Wert ebenfalls subpixelgenau und kann eine Dezimalkomponente enthalten.

Es ist möglich, dass `scrollTop` negativ ist, wenn das Element aus dem anfänglichen umschließenden Block nach oben gescrollt werden kann. Zum Beispiel, wenn die {{cssxref("flex-direction")}} des Elements `column-reverse` ist und der Inhalt nach oben wächst, ist `scrollTop` `0`, wenn sich die Bildlaufleiste an ihrer untersten Position (am Anfang des gescrollten Inhalts) befindet, und wird zunehmend negativ, wenn man zum Ende des Inhalts scrollt.

Safari reagiert auf Über-Scrollen, indem es `scrollTop` über die maximale Scroll-Position hinaus aktualisiert (es sei denn, der Standard-"Bounce"-Effekt ist deaktiviert, z. B. indem man {{cssxref("overscroll-behavior")}} auf `none` setzt), während Chrome und Firefox dies nicht tun. Auf Safari kann `scrollTop` beispielsweise negativ sein, wenn man weiter nach oben scrollt, obwohl das Element bereits oben ist.

Die `scrollTop`-Eigenschaft kann gesetzt werden, wodurch das Element auf die angegebene vertikale Position scrollt, auf die gleiche Weise wie bei der Verwendung von [`Element.scroll()`](/de/docs/Web/API/Element/scroll) mit `behavior: "auto"`.

## Beispiele

### Ein Element scrollen

In diesem Beispiel versuchen Sie, den Container mit der gestrichelten Umrandung zu scrollen, und sehen Sie, wie sich der Wert von `scrollTop` ändert.

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

- [Bestimmen der Dimensionen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop)
- [`Element.clientTop`](/de/docs/Web/API/Element/clientTop)
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight)
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth)
- [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
- [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo)
