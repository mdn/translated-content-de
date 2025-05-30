---
title: "HTMLElement: offsetLeft-Eigenschaft"
short-title: offsetLeft
slug: Web/API/HTMLElement/offsetLeft
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte **`offsetLeft`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle gibt die Anzahl der Pixel zurück, um die die _obere linke Ecke_ des aktuellen Elements innerhalb des [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent)-Knotens nach links versetzt ist.

Für Block-Elemente beschreiben `offsetTop`, `offsetLeft`, `offsetWidth` und `offsetHeight` die Rahmenbox eines Elements relativ zum `offsetParent`.

Für Inline-Elemente (wie `<span>`) dagegen, die von einer Zeile zur nächsten umbrechen können, beschreiben `offsetTop` und `offsetLeft` die Positionen der _ersten_ Rahmenbox (verwenden Sie [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects), um deren Breite und Höhe zu ermitteln), während `offsetWidth` und `offsetHeight` die Abmessungen der _begrenzenden_ Rahmenbox beschreiben (verwenden Sie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect), um deren Position zu ermitteln). Daher wird eine Box mit den Maßen `offsetLeft`, `offsetTop`, `offsetWidth` und `offsetHeight` keine Begrenzungsbox für ein umbrochenes Span-Element sein.

## Wert

Ein ganzzahliger Wert.

## Beispiele

```js
const colorTable = document.getElementById("t1");
const tOLeft = colorTable.offsetLeft;

if (tOLeft > 5) {
  // large left offset: do something here
}
```

Dieses Beispiel zeigt einen 'langen' Satz, der sich in einem div mit blauer Umrandung umbricht, und eine rote Box, die eigentlich die Grenzen des Spans beschreiben sollte.

![Ein Satz, der lautet: Short span. Dieser Text befindet sich vollständig innerhalb eines div mit blauer Umrandung. Ein Satz, der lautet: Long span that wraps within this div. Die Wörter "long span that wraps" befinden sich in einem Kasten mit roter Umrandung. Die Wörter "within this div" befinden sich im div mit der blauen Umrandung. ](offsetleft.jpg)

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
  box.style.left = `${longSpan.offsetLeft}${document.body.scrollLeft}px`;
  box.style.top = `${longSpan.offsetTop}${document.body.scrollTop}px`;
  box.style.width = `${longSpan.offsetWidth}px`;
  box.style.height = `${longSpan.offsetHeight}px`;
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bestimmen der Abmessungen von Elementen](/de/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [`Element.clientLeft`](/de/docs/Web/API/Element/clientLeft)
- [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
- [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight)
- [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth)
- [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop)
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
