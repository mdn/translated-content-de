---
title: "HTMLElement: offsetLeft-Eigenschaft"
short-title: offsetLeft
slug: Web/API/HTMLElement/offsetLeft
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.offsetLeft`** Nur-Lese-Eigenschaft gibt die Anzahl der Pixel zurück, um die die _obere linke Ecke_ des aktuellen Elements innerhalb des [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent)-Knotens nach links versetzt ist.

Für Block-Elemente beschreiben `offsetTop`, `offsetLeft`, `offsetWidth` und `offsetHeight` den Rahmenkasten eines Elements relativ zum `offsetParent`.

Für Inline-Elemente (wie **span**), die von einer Zeile zur nächsten umbrochen werden können, beschreiben `offsetTop` und `offsetLeft` jedoch die Positionen des _ersten_ Rahmenkastens (verwenden Sie [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects), um dessen Breite und Höhe zu ermitteln), während `offsetWidth` und `offsetHeight` die Abmessungen des _umschließenden_ Rahmenkastens beschreiben (verwenden Sie [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect), um dessen Position zu ermitteln). Daher wird eine Box mit den Werten `offsetLeft`, `offsetTop`, `offsetWidth` und `offsetHeight` kein Begrenzungsrahmen für einen span mit umbrochenem Text sein.

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

Dieses Beispiel zeigt einen 'langen' Satz, der innerhalb eines div mit einem blauen Rahmen umbrochen wird, und einen roten Kasten, von dem man meinen könnte, er sollte die Grenzen des span beschreiben.

![Ein Satz, der lautet: Kurzer span. Dieser Text befindet sich vollständig innerhalb eines div mit einem blauen Rahmen. Ein Satz, der lautet: Langer span, der innerhalb dieses div umbricht. Die Worte "langer span, der umbricht" befinden sich in einem Kasten mit rotem Rahmen. Die Worte "innerhalb dieses div" befinden sich innerhalb des div mit dem blauen Rahmen.](offsetleft.jpg)

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

- [`HTMLElement.offsetParent`](/de/docs/Web/API/HTMLElement/offsetParent), [`HTMLElement.offsetTop`](/de/docs/Web/API/HTMLElement/offsetTop), [`HTMLElement.offsetWidth`](/de/docs/Web/API/HTMLElement/offsetWidth), [`HTMLElement.offsetHeight`](/de/docs/Web/API/HTMLElement/offsetHeight)
