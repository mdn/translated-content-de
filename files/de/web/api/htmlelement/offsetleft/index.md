---
title: "HTMLElement: offsetLeft-Eigenschaft"
short-title: offsetLeft
slug: Web/API/HTMLElement/offsetLeft
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{ APIRef("HTML DOM") }}

Die **`offsetLeft`** schreibgeschützte Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces gibt die Anzahl der Pixel zurück, um die die _obere linke Ecke_ des aktuellen Elements nach links innerhalb des [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent)-Knotens verschoben ist.

Für Block-Level-Elemente beschreiben `offsetTop`, `offsetLeft`, `offsetWidth` und `offsetHeight` die Begrenzungsbox eines Elements relativ zum `offsetParent`.

Jedoch beschreiben `offsetTop` und `offsetLeft` für Inline-Level-Elemente (wie `<span>`), die von einer Zeile zur nächsten umgebrochen werden können, die Positionen der _ersten_ Begrenzungsbox (verwenden Sie [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects), um deren Breite und Höhe zu erhalten), während `offsetWidth` und `offsetHeight` die Abmessungen der _umgebenden_ Begrenzungsbox beschreiben (verwenden Sie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect), um deren Position zu erhalten). Daher wird eine Box mit der linken Position, der oberen Position, der Breite und der Höhe von `offsetLeft`, `offsetTop`, `offsetWidth` und `offsetHeight` keine Begrenzungsbox für ein Span mit umbrochenem Text sein.

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

Dieses Beispiel zeigt einen 'langen' Satz, der innerhalb eines Divs mit blauem Rand umbrochen wird, und eine rote Box, die die Grenzen des Span beschreiben sollte.

![Ein Satz, der lautet: Kurzes Span. Dieser Text befindet sich vollständig innerhalb eines Divs mit blauem Rand. Ein Satz, der lautet: Langes Span, das innerhalb dieses Divs umbrochen wird. Die Wörter "langes Span, das umbrochen wird" befinden sich in einer Box mit rotem Rand. Die Wörter "innerhalb dieses Divs" befinden sich innerhalb des Divs mit blauem Rand. ](offsetleft.jpg)

```html
<div
  style="width: 300px; border-color:blue; border-style:solid; border-width:1;">
  <span>Short span. </span>
  <span id="long-span">Long span that wraps within this div.</span>
</div>

<div
  id="box"
  style="position: absolute; border-color: red; border-width: 1; border-style: solid; z-index: 10"></div>

<script>
  const box = document.getElementById("box");
  const longSpan = document.getElementById("long-span");
  box.style.left = longSpan.offsetLeft + document.body.scrollLeft + "px";
  box.style.top = longSpan.offsetTop + document.body.scrollTop + "px";
  box.style.width = longSpan.offsetWidth + "px";
  box.style.height = longSpan.offsetHeight + "px";
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bestimmung der Abmessungen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [`Element.clientLeft`](/de/docs/Web/API/Element/clientLeft)
- [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight)
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth)
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop)
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
