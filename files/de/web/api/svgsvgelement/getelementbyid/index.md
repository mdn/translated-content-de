---
title: "SVGSVGElement: getElementById()-Methode"
short-title: getElementById()
slug: Web/API/SVGSVGElement/getElementById
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("SVG")}}

Die Methode `getElementById()` des [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-Interfaces durchsucht das SVG-Dokument-Fragment (d.h. die Suche ist auf einen Teilbaum des Dokuments beschränkt) nach einem [`Element`](/de/docs/Web/API/Element), dessen `id`-Eigenschaft mit der angegebenen Zeichenkette übereinstimmt.

## Syntax

```js-nolint
getElementById(id)
```

### Parameter

- `id`
  - : Die ID des Elements, das gesucht werden soll. Die ID ist eine Groß-/Kleinschreibung beachtende Zeichenkette, die innerhalb des SVG-Dokument-Fragments eindeutig sein muss; nur ein Element sollte eine gegebene ID besitzen.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das DOM-Element-Objekt beschreibt, das der angegebenen ID entspricht, oder `null`, wenn kein passendes Element im SVG-Dokument-Fragment gefunden wurde.

## Beispiele

### Abrufen eines Elements mittels ID

```html
<svg
  id="exampleSVG"
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <circle id="circle1" cx="100" cy="100" r="50" fill="blue" />
</svg>
<button id="getElementButton">Get Element</button>
<p id="elementDisplay"></p>
```

```js
const svgElement = document.getElementById("exampleSVG");
const getElementButton = document.getElementById("getElementButton");
const elementDisplay = document.getElementById("elementDisplay");

getElementButton.addEventListener("click", () => {
  const circleElement = svgElement.getElementById("circle1");
  if (circleElement) {
    elementDisplay.textContent = `Element found: ${circleElement.tagName}`;
  } else {
    elementDisplay.textContent = "Element not found.";
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
