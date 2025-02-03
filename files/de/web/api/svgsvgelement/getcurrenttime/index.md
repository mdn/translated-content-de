---
title: "SVGSVGElement: getCurrentTime()-Methode"
short-title: getCurrentTime()
slug: Web/API/SVGSVGElement/getCurrentTime
l10n:
  sourceCommit: 6d35583226f1ca3bac852506014f973113c0a8a2
---

{{APIRef("SVG")}}

Die `getCurrentTime()`-Methode des [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-Interfaces gibt die aktuelle Zeit in Sekunden relativ zur Startzeit des aktuellen SVG-Dokumentfragments zurück.

Wenn `getCurrentTime()` aufgerufen wird, bevor die Dokument-Timeline begonnen hat (beispielsweise durch ein Skript, das in einem {{SVGElement("script")}}-Element ausgeführt wird, bevor das `SVGLoad`-Ereignis des Dokuments ausgelöst wird), wird `0` zurückgegeben.

## Syntax

```js-nolint
getCurrentTime()
```

### Parameter

Keine.

### Rückgabewert

Ein Float.

## Beispiele

### Abrufen der aktuellen Zeit

```html
<svg
  id="exampleSVG"
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <circle id="circle1" cx="100" cy="100" r="50" fill="blue" />
</svg>
<button id="getTimeButton">Get Current Time</button>
<p id="currentTimeDisplay"></p>
```

```js
const svgElement = document.getElementById("exampleSVG");
const getTimeButton = document.getElementById("getTimeButton");
const currentTimeDisplay = document.getElementById("currentTimeDisplay");

getTimeButton.addEventListener("click", () => {
  const currentTime = svgElement.getCurrentTime();
  currentTimeDisplay.textContent = `Current time in the SVG: ${currentTime} seconds`;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
