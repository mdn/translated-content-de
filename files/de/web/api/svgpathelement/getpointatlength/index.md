---
title: "SVGPathElement: Methode getPointAtLength()"
short-title: getPointAtLength()
slug: Web/API/SVGPathElement/getPointAtLength
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("SVG")}}

Die Methode **`getPointAtLength()`** der Schnittstelle [`SVGPathElement`](/de/docs/Web/API/SVGPathElement) gibt den Punkt in einem bestimmten Abstand entlang des Pfads zurück.

## Syntax

```js-nolint
getPointAtLength(distance)
```

### Parameter

- `distance`
  - : Eine Zahl, die den Abstand entlang des Pfads angibt.

### Rückgabewert

Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint), der den Punkt in einem bestimmten Abstand entlang des Pfads angibt.

### Beispiele

#### Den Mittelpunkt eines `<path>` ermitteln

In diesem Beispiel bestimmen wir den Mittelpunkt eines Pfads, indem wir den Punkt auf halber Länge des Pfads ermitteln.

Wir definieren ein SVG mit zwei Pfaden: einer einfachen Linie und einer komplexen Herzform.

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

Die Linie verläuft horizontal, beginnt bei `0, 30` und ist 100 Einheiten lang.
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

Wir wissen, dass die Linie 100 Einheiten lang ist und `50` daher die Hälfte ihrer Länge bezeichnet.
Mit der Methode [`SVGPathElement.getTotalLength()`](/de/docs/Web/API/SVGPathElement/getTotalLength) ermitteln wir die Länge des Herzpfads und teilen sie durch `2`, um den Abstand bis zur Hälfte des Pfads zu erhalten.
Anschließend verwenden wir die Methode `getPointAtLength()`, um diesen Punkt als `DOMPoint` zurückzugeben.
Wir zeigen die Koordinaten `x` und `y` für beide Punkte an.

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

{{EmbedLiveSample('getting_the_midpoint_of_a_path',"100%","220px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGPathElement.getTotalLength()`](/de/docs/Web/API/SVGPathElement/getTotalLength)
- [`DOMPoint.x`](/de/docs/Web/API/DOMPoint/x)
- [`DOMPoint.y`](/de/docs/Web/API/DOMPoint/y)
