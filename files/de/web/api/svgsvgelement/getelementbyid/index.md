---
title: "SVGSVGElement: getElementById() Methode"
short-title: getElementById()
slug: Web/API/SVGSVGElement/getElementById
l10n:
  sourceCommit: 6d35583226f1ca3bac852506014f973113c0a8a2
---

{{APIRef("SVG")}}

Die `getElementById()`-Methode der [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-Schnittstelle durchsucht das SVG-Dokumentfragment (d.h. die Suche ist auf einen Teilbaum des Dokuments beschränkt) nach einem [`Element`](/de/docs/Web/API/Element), dessen `id`-Eigenschaft mit der angegebenen Zeichenkette übereinstimmt.

## Syntax

```js-nolint
getElementById(id)
```

### Parameter

- `id`
  - : Die ID des zu lokalisierenden Elements. Die ID ist eine auf Groß- und Kleinschreibung achtende Zeichenkette, die innerhalb des SVG-Dokumentfragments eindeutig ist; nur ein Element sollte eine gegebene ID haben.

### Rückgabewert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das DOM-Elementobjekt beschreibt, das mit der angegebenen ID übereinstimmt, oder `null`, wenn kein übereinstimmendes Element im SVG-Dokumentfragment gefunden wurde.

## Beispiele

### Abrufen eines Elements nach ID

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
    elementDisplay.textContent = "Element found: " + circleElement.tagName;
  } else {
    elementDisplay.textContent = "Element not found.";
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
