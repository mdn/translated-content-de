---
title: "DOMRectList: length-Eigenschaft"
short-title: length
slug: Web/API/DOMRectList/length
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("Geometry Interfaces")}}

Die schreibgeschützte **`length`**-Eigenschaft der [`DOMRectList`](/de/docs/Web/API/DOMRectList)-Schnittstelle gibt die Anzahl der [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekte in der Liste zurück.

## Wert

Eine positive ganze Zahl, die die Anzahl der `DOMRect`-Objekte in der `DOMRectList` darstellt. Wenn keine Rechtecke in der Liste vorhanden sind, ist `length` `0`.

## Beispiele

Im folgenden Beispiel rufen wir die Liste der Rechtecke für ein {{htmlelement("div")}}-Element mit [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects) ab. Anschließend zeigen wir die Anzahl der Rechtecke in der Liste innerhalb eines anderen `<div>`-Elements auf der Seite an.

Zuerst das HTML:

```html
<div id="box"></div>
<div id="output"></div>
```

```css
#box {
  width: 50px;
  height: 20px;
  border: 1px solid black;
}
```

Nun der JavaScript-Code:

```js
const box = document.getElementById("box");
const rects = box.getClientRects();
const output = document.getElementById("output");

output.textContent = `Number of rectangles: ${rects.length}`;
```

Die Ausgabe sieht so aus:

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
