---
title: "SVGSVGElement: setCurrentTime()-Methode"
short-title: setCurrentTime()
slug: Web/API/SVGSVGElement/setCurrentTime
l10n:
  sourceCommit: 6d35583226f1ca3bac852506014f973113c0a8a2
---

{{APIRef("SVG")}}

Die `setCurrentTime()`-Methode des [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-Interfaces passt die Uhr für dieses SVG-Dokumentfragment an und legt eine neue aktuelle Zeit fest.

Wenn `setCurrentTime()` aufgerufen wird, bevor die Dokument-Zeitachse begonnen hat (zum Beispiel durch ein Skript, das in einem {{SVGElement("script")}}-Element ausgeführt wird, bevor das `SVGLoad`-Ereignis des Dokuments ausgelöst wird), dann gibt der Wert der Sekunden beim letzten Aufruf der Methode die Zeit an, zu der das Dokument nach Beginn der Dokument-Zeitachse wechseln wird.

## Syntax

```js-nolint
setCurrentTime(time)
```

### Parameter

- `time`
  - : Ein Float, der die Zeit in Sekunden repräsentiert, um die aktuelle Zeit festzulegen.

### Rückgabewert

Keiner.

## Beispiele

### Die aktuelle Zeit einstellen

```html
<svg
  id="exampleSVG"
  width="200"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <circle id="circle1" cx="100" cy="100" r="50" fill="blue" />
</svg>
<button id="setTimeButton">Set Current Time</button>
<p id="currentTimeDisplay"></p>
```

```js
const svgElement = document.getElementById("exampleSVG");
const setTimeButton = document.getElementById("setTimeButton");
const currentTimeDisplay = document.getElementById("currentTimeDisplay");

setTimeButton.addEventListener("click", () => {
  // Setting the time to 5 seconds
  svgElement.setCurrentTime(5);
  const currentTime = svgElement.getCurrentTime();
  currentTimeDisplay.textContent = `Current time in the SVG: ${currentTime} seconds`;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
