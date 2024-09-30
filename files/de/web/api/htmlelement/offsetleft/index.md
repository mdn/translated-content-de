---
title: "HTMLElement: offsetLeft-Eigenschaft"
short-title: offsetLeft
slug: Web/API/HTMLElement/offsetLeft
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte Eigenschaft **`HTMLElement.offsetLeft`** gibt die Anzahl der Pixel zurück, um die die _obere linke Ecke_ des aktuellen Elements nach links innerhalb des [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent)-Knotens verschoben ist.

Für Block-Elemente beschreiben `offsetTop`, `offsetLeft`, `offsetWidth` und `offsetHeight` den Rahmen eines Elements relativ zum `offsetParent`.

Bei Inline-Elementen (wie **span**), die von einer Zeile zur nächsten umbrochen werden können, beschreiben `offsetTop` und `offsetLeft` die Positionen des _ersten_ Rahmenkastens (verwenden Sie [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects), um seine Breite und Höhe zu erhalten), während `offsetWidth` und `offsetHeight` die Abmessungen des _umschließenden_ Rahmenkastens beschreiben (verwenden Sie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect), um seine Position zu erhalten). Daher wird ein Kasten mit den Ecken `offsetLeft`, `offsetTop`, `offsetWidth` und `offsetHeight` kein umschließender Kasten für ein Span mit umbrochenem Text sein.

## Wert

Ein Ganzzahlwert.

## Beispiele

```js
const colorTable = document.getElementById("t1");
const tOLeft = colorTable.offsetLeft;

if (tOLeft > 5) {
  // large left offset: do something here
}
```

Dieses Beispiel zeigt einen 'langen' Satz, der innerhalb eines Div mit blauem Rahmen umbrochen wird, und eine rote Box, von der man denken könnte, dass sie die Grenzen des Spans beschreibt.

![Ein Satz, der lautet: Kurzer Span. Dieser Text befindet sich vollständig innerhalb eines Div mit blauem Rahmen. Ein Satz, der lautet: Langer Span, der innerhalb dieses Div umbrochen wird. Die Wörter "langer Span, der umbrochen wird" befinden sich in einer Box mit rotem Rahmen. Die Wörter "innerhalb dieses Div" befinden sich im Div mit dem blauen Rahmen.](offsetleft.jpg)

```html
<div
  style="width: 300px; border-color:blue; border-style:solid; border-width:1;">
  <span>Short span. </span>
  <span id="longspan">Long span that wraps within this div.</span>
</div>

<div
  id="box"
  style="position: absolute; border-color: red; border-width: 1; border-style: solid; z-index: 10"></div>

<script>
  const box = document.getElementById("box");
  const longspan = document.getElementById("longspan");
  box.style.left = longspan.offsetLeft + document.body.scrollLeft + "px";
  box.style.top = longspan.offsetTop + document.body.scrollTop + "px";
  box.style.width = longspan.offsetWidth + "px";
  box.style.height = longspan.offsetHeight + "px";
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent), [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop), [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth), [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight)
