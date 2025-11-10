---
title: "SVGPathElement: getTotalLength() Methode"
short-title: getTotalLength()
slug: Web/API/SVGPathElement/getTotalLength
l10n:
  sourceCommit: ea24a70e5c5e3b474d683e9b0dcb8807aaba82f3
---

{{APIRef("SVG")}}

Die **`getTotalLength()`** Methode der [`SVGPathElement`](/de/docs/Web/API/SVGPathElement) Schnittstelle gibt den vom Benutzeragenten berechneten Wert für die Gesamtlänge des Pfades in Benutzereinheiten zurück.

## Syntax

```js-nolint
getTotalLength()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die die Gesamtlänge des Pfades in Benutzereinheiten angibt.

### Beispiele

### Ermitteln der Gesamtlänge eines `<path>`

In diesem Beispiel ermitteln wir die Gesamtlänge von zwei Pfaden: einer einfachen Linie und einer herzförmigen Linie.

```html
<svg width="200" height="100">
  <path
    id="heart"
    fill="red"
    d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z" />
  <path id="line" d="M 0,30 h100" stroke="black" />
</svg>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const complexPath = document.getElementById("heart");
const basicPath = document.getElementById("line");

// Access the pathLength property
const complexPathLength = complexPath.getTotalLength();
const basicPathLength = basicPath.getTotalLength();

// The base value of the pathLength attribute
log(`complexPathLength: ${complexPathLength}`);
log(`basicPathLength: ${basicPathLength}`);
```

{{EmbedLiveSample('Getting the total length of a `<path>`',"100%","220px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
