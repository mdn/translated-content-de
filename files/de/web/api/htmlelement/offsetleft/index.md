---
title: "HTMLElement: offsetLeft-Eigenschaft"
short-title: offsetLeft
slug: Web/API/HTMLElement/offsetLeft
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.offsetLeft`** schreibgeschützte Eigenschaft gibt die Anzahl der Pixel zurück, um die die _obere linke Ecke_ des aktuellen Elements innerhalb des [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent)-Knotens nach links verschoben ist.

Für Block-Elemente beschreiben `offsetTop`, `offsetLeft`, `offsetWidth` und `offsetHeight` die Border-Box eines Elements relativ zum `offsetParent`.

Für Inline-Elemente (wie **span**), die von einer Linie zur nächsten umbrechen können, beschreiben `offsetTop` und `offsetLeft` die Positionen der _ersten_ Border-Box (verwenden Sie [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects), um deren Breite und Höhe zu erhalten), während `offsetWidth` und `offsetHeight` die Abmessungen der _umgebenden_ Border-Box beschreiben (verwenden Sie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect), um deren Position zu erhalten). Daher wird eine Box mit dem linken, oberen, breiten und hohen Wert von `offsetLeft`, `offsetTop`, `offsetWidth` und `offsetHeight` keine Begrenzungsbox für ein span mit umbrochenem Text darstellen.

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

Dieses Beispiel zeigt einen 'langen' Satz, der innerhalb eines div mit einem blauen Rand umbrochen wird, und ein rotes Kästchen, das die Grenzen des span beschreiben sollte.

![Ein Satz, der lautet: Kurzes span. Dieser Text befindet sich vollständig innerhalb eines div mit einem blauen Rand. Ein Satz, der lautet: Langer span, der innerhalb dieses div umbrochen wird. Die Wörter "langer span, der umbrochen wird" befinden sich innerhalb eines Kästchens mit einem roten Rand. Die Wörter "innerhalb dieses div" befinden sich innerhalb des div mit dem blauen Rand. ](offsetleft.jpg)

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
