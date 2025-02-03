---
title: "SVGSVGElement: checkIntersection() Methode"
short-title: checkIntersection()
slug: Web/API/SVGSVGElement/checkIntersection
l10n:
  sourceCommit: 6d35583226f1ca3bac852506014f973113c0a8a2
---

{{APIRef("SVG")}}

Die `checkIntersection()`-Methode des [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-Interfaces überprüft, ob der gerenderte Inhalt des angegebenen Elements das übergebene Rechteck schneidet.

Jedes potenzielle Grafikelement gilt nur dann als Übereinstimmung, wenn dasselbe Grafikelement das Ziel von Pointer-Ereignissen sein kann, wie im {{SVGAttr("pointer-events")}}-Prozess definiert.

## Syntax

```js-nolint
checkIntersection(element, rect)
```

### Parameter

- `element`
  - : Ein [`Element`](/de/docs/Web/API/Element), das das SVG-Grafikelement darstellt, das überprüft werden soll.
- `rect`
  - : Ein [`SVGRect`](/de/docs/Web/API/SVGRect)-Objekt, das das Rechteck definiert, gegen das geprüft wird.

### Rückgabewert

Ein boolean.

## Beispiele

### Überprüfen, ob ein Element ein Rechteck schneidet

```html
<svg id="exampleSVG" width="200" height="200">
  <rect
    id="checkRect"
    x="10"
    y="10"
    width="100"
    height="100"
    fill="none"
    stroke="red" />
  <circle id="targetElement" cx="80" cy="80" r="50" fill="blue" />
</svg>
<button id="checkIntersectionBtn">Check Intersection</button>
<pre id="result"></pre>
```

```js
const svgElement = document.getElementById("exampleSVG");
const checkRect = document.getElementById("checkRect");
const targetElement = document.getElementById("targetElement");
const resultDisplay = document.getElementById("result");

document
  .getElementById("checkIntersectionBtn")
  .addEventListener("click", () => {
    const rect = svgElement.createSVGRect();
    rect.x = checkRect.x.baseVal.value;
    rect.y = checkRect.y.baseVal.value;
    rect.width = checkRect.width.baseVal.value;
    rect.height = checkRect.height.baseVal.value;

    const isIntersecting = svgElement.checkIntersection(targetElement, rect);
    resultDisplay.textContent = `Does the circle intersect with the rectangle? ${isIntersecting}`;
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGSVGElement.checkEnclosure()`](/de/docs/Web/API/SVGSVGElement/checkEnclosure)
