---
title: "SVGPathElement: `getPointAtLength()` Methode"
short-title: getPointAtLength()
slug: Web/API/SVGPathElement/getPointAtLength
l10n:
  sourceCommit: ea24a70e5c5e3b474d683e9b0dcb8807aaba82f3
---

{{APIRef("SVG")}}

Die **`getPointAtLength()`** Methode des [`SVGPathElement`](/de/docs/Web/API/SVGPathElement) Interfaces gibt den Punkt an einer bestimmten Strecke entlang des Pfades zurück.

## Syntax

```js-nolint
getPointAtLength(distance)
```

### Parameter

- `distance`

  - : Eine Zahl, die die Distanz entlang des Pfades angibt.

### Rückgabewert

Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint), der den Punkt an einer bestimmten Strecke entlang des Pfades angibt.

### Beispiele

#### Ermitteln des Mittelpunkts eines `<path>`

In diesem Beispiel bestimmen wir den Mittelpunkt eines Pfades, indem wir den Punkt ermitteln, der sich auf halber Strecke entlang der Länge des Pfades befindet.

Wir definieren ein SVG, das zwei Pfade umfasst: eine einfache Linie und eine komplexe Herzform.

Der Pfad, der das Herz bildet, ist ungefähr 275 Einheiten lang.

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

Die Linie ist horizontal, beginnt bei `0, 30` und ist 100 Einheiten lang.
Der Pfad des Herzens beginnt bei `10, 30` und ist ungefähr 275 Einheiten lang.

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

Wir wissen, dass die Länge der Linie 100 Einheiten beträgt, und dass `50` der Mittelpunkt ist.
Wir verwenden die [`SVGPathElement.getTotalLength()`](/de/docs/Web/API/SVGPathElement/getTotalLength) Methode, um die Länge des Herzpfades zu erhalten, und teilen sie durch `2`, um die Mittelpunktsdistanz zu erhalten.
Dann verwenden wir die `getPointAtLength()` Methode, um den Mittelpunkt als `DOMPoint` zurückzugeben.
Wir zeigen die `x`- und `y`-Koordinaten für jeden Mittelpunkt an.

```js
const basicPath = document.getElementById("line");
const complexPath = document.getElementById("heart");

// Get the length of the heart and divide by 2
const halfLength = complexPath.getTotalLength() / 2;

// Access the getPointAtLength property
const basicMidPoint = basicPath.getPointAtLength(50);
const complexMidPoint = complexPath.getPointAtLength(halfLength);

// The base value of the pathLength attribute
log(`Line mid point: ${basicMidPoint.x}, ${basicMidPoint.y}`);
log(`Heart mid point: ${complexMidPoint.x}, ${complexMidPoint.y}`);
```

{{EmbedLiveSample('Getting the total length of a `<path>`',"100%","220px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGPathElement.getTotalLength()`](/de/docs/Web/API/SVGPathElement/getTotalLength)
- [`DOMPoint.x`](/de/docs/Web/API/DOMPoint/x)
- [`DOMPoint.y`](/de/docs/Web/API/DOMPoint/y)
