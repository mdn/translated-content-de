---
title: "SVGPathElement: Methode getTotalLength()"
short-title: getTotalLength()
slug: Web/API/SVGPathElement/getTotalLength
l10n:
  sourceCommit: 7d55f113b5a05afe6ada6bb9b76bd3b0458f077d
---

{{APIRef("SVG")}}

Die Methode **`getTotalLength()`** des Interfaces [`SVGPathElement`](/de/docs/Web/API/SVGPathElement) gibt den vom User Agent berechneten Wert für die Gesamtlänge des Pfads in Benutzereinheiten zurück.

## Syntax

```js-nolint
getTotalLength()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die die Gesamtlänge des Pfads in Benutzereinheiten angibt.

## Beispiele

### Gesamtlänge eines `<path>` ermitteln

In diesem Beispiel ermitteln wir die Gesamtlänge zweier Pfade: einer einfachen Linie und einer Herzform.

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
