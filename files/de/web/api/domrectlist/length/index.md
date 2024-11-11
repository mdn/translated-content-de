---
title: "DOMRectList: length-Eigenschaft"
short-title: length
slug: Web/API/DOMRectList/length
l10n:
  sourceCommit: f8554061e8e76aaa3f08ba1b5f9b939d436f5ded
---

{{APIRef("Geometry Interfaces")}}

Die schreibgeschützte **`length`**-Eigenschaft des [`DOMRectList`](/de/docs/Web/API/DOMRectList)-Interfaces gibt die Anzahl der [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekte in der Liste zurück.

## Wert

Ein positiver ganzzahliger Wert, der die Anzahl der `DOMRect`-Objekte in der `DOMRectList` darstellt. Wenn keine Rechtecke in der Liste vorhanden sind, ist `length` `0`.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Rechtecke für ein {{htmlelement("div")}}-Element mithilfe von [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects) ab. Wir zeigen dann die Anzahl der Rechtecke in der Liste innerhalb eines anderen `<div>`-Elements auf der Seite an.

Zuerst das HTML:

```html
<div id="box" style="width: 50px; height: 20px; border: 1px solid black;"></div>
<div id="output"></div>
```

Nun das JavaScript:

```js
const box = document.getElementById("box");
const rects = box.getClientRects();
const output = document.getElementById("output");

output.textContent = `Number of rectangles: ${rects.length}`;
```

Das Ausgabeergebnis sieht so aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
