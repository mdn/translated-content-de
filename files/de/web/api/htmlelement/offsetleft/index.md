---
title: "HTMLElement: offsetLeft-Eigenschaft"
short-title: offsetLeft
slug: Web/API/HTMLElement/offsetLeft
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{ APIRef("HTML DOM") }}

Die **`offsetLeft`** schreibgeschützte Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces gibt die Anzahl der Pixel zurück, um die die _obere linke Ecke_ des aktuellen Elements innerhalb des [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent)-Knotens nach links versetzt ist.

Für Block-Elemente beschreiben `offsetTop`, `offsetLeft`, `offsetWidth` und `offsetHeight` die Border-Box eines Elements relativ zum `offsetParent`.

Für Inline-Elemente (wie `<span>`), die von einer Zeile zur nächsten umgebrochen werden können, beschreiben `offsetTop` und `offsetLeft` die Positionen der _ersten_ Border-Box (verwenden Sie [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects), um deren Breite und Höhe zu erhalten), während `offsetWidth` und `offsetHeight` die Dimensionen der _umschließenden_ Border-Box beschreiben (verwenden Sie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect), um deren Position zu erhalten). Daher wird eine Box mit den linken, oberen, Breiten- und Höhenmaßen von `offsetLeft`, `offsetTop`, `offsetWidth` und `offsetHeight` keine Umrandungsbox für einen Span mit umbrochenem Text sein.

## Wert

Ein Integer.

## Beispiele

```js
const colorTable = document.getElementById("t1");
const tOLeft = colorTable.offsetLeft;

if (tOLeft > 5) {
  // large left offset: do something here
}
```

Dieses Beispiel zeigt einen „langen“ Satz, der innerhalb eines div mit einem blauen Rahmen umbrochen wird, und eine rote Box, die man denken könnte, sollte die Grenzen des span beschreiben.

![Ein Satz, der lautet: Kurzer Span. Dieser Text befindet sich vollständig innerhalb eines div mit einem blauen Rand. Ein Satz, der lautet: Langer Span, der sich innerhalb dieses divs umbricht. Die Worte „langer Span, der sich umbricht“ befinden sich in einer Box mit einem roten Rand. Die Worte „in diesem div“ befinden sich im div mit dem blauen Rand.](offsetleft.jpg)

```html
<div class="span-container">
  <span>Short span.</span>
  <span id="long-span">Long span that wraps within this div.</span>
</div>

<div id="box"></div>
```

```css
.span-container {
  width: 300px;
  border-color: blue;
  border-style: solid;
  border-width: 1px;
}

#box {
  position: absolute;
  border-color: red;
  border-width: 1px;
  border-style: solid;
  z-index: 10;
}
```

```js
const box = document.getElementById("box");
const longSpan = document.getElementById("long-span");
box.style.left = `${longSpan.offsetLeft}${document.body.scrollLeft}px`;
box.style.top = `${longSpan.offsetTop}${document.body.scrollTop}px`;
box.style.width = `${longSpan.offsetWidth}px`;
box.style.height = `${longSpan.offsetHeight}px`;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bestimmen der Dimensionen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [`Element.clientLeft`](/de/docs/Web/API/Element/clientLeft)
- [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight)
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth)
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop)
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
