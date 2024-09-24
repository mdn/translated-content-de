---
title: "HTMLElement: offsetLeft-Eigenschaft"
short-title: offsetLeft
slug: Web/API/HTMLElement/offsetLeft
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte Eigenschaft **`HTMLElement.offsetLeft`** gibt die Anzahl der Pixel zurück, um die die _obere linke Ecke_ des aktuellen Elements nach links innerhalb des {{domxref("HTMLElement.offsetParent")}}-Knotens versetzt ist.

Für Block-Elemente beschreiben `offsetTop`, `offsetLeft`, `offsetWidth` und `offsetHeight` die Rahmenbox eines Elements relativ zum `offsetParent`.

Für Inline-Elemente (wie **span**), die von einer Zeile zur nächsten umbrechen können, beschreiben `offsetTop` und `offsetLeft` die Positionen der _ersten_ Rahmenbox (verwenden Sie {{domxref("Element.getClientRects()")}}, um ihre Breite und Höhe zu erhalten), während `offsetWidth` und `offsetHeight` die Abmessungen der _umfassenden_ Rahmenbox beschreiben (verwenden Sie {{domxref("Element.getBoundingClientRect()")}}, um ihre Position zu erhalten). Daher wird eine Box mit den Werten `offsetLeft`, `offsetTop`, `offsetWidth` und `offsetHeight` keine Begrenzungsbox für einen span mit umgebrochenem Text sein.

## Wert

Ein Ganzzahlwert.

## Beispiele

```js
const colorTable = document.getElementById("t1");
const tOLeft = colorTable.offsetLeft;

if (tOLeft > 5) {
  // großer linker Versatz: etwas tun
}
```

Dieses Beispiel zeigt einen 'langen' Satz, der innerhalb eines Divs mit blauem Rand umbricht, und eine rote Box, von der man denken könnte, sie beschreibt die Grenzen des span.

![Ein Satz, der lautet: Kurzer Span. Dieser Text befindet sich vollständig innerhalb eines Divs mit blauem Rand. Ein Satz, der lautet: Langer Span, der innerhalb dieses Divs umbricht. Die Wörter "langer Span, der umbricht" befinden sich innerhalb einer Box mit rotem Rand. Die Wörter "innerhalb dieses Divs" befinden sich innerhalb des Divs mit blauem Rand.](offsetleft.jpg)

```html
<div
  style="width: 300px; border-color:blue; border-style:solid; border-width:1;">
  <span>Kurzer Span. </span>
  <span id="longspan">Langer Span, der innerhalb dieses Divs umbricht.</span>
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

- {{domxref("HTMLElement.offsetParent")}}, {{domxref("HTMLElement.offsetTop")}}, {{domxref("HTMLElement.offsetWidth")}}, {{domxref("HTMLElement.offsetHeight")}}
