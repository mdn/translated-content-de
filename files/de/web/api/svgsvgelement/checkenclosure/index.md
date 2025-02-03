---
title: "SVGSVGElement: checkEnclosure() Methode"
short-title: checkEnclosure()
slug: Web/API/SVGSVGElement/checkEnclosure
l10n:
  sourceCommit: 6d35583226f1ca3bac852506014f973113c0a8a2
---

{{APIRef("SVG")}}

Die `checkEnclosure()` Methode des [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) Interfaces überprüft, ob der gerenderte Inhalt des angegebenen Elements vollständig innerhalb des bereitgestellten Rechtecks enthalten ist.

Jedes potentielle Grafikelement wird nur dann als übereinstimmend betrachtet, wenn dasselbe Grafikelement auch ein Ziel von Zeiger-Ereignissen gemäß der Verarbeitung von {{SVGAttr("pointer-events")}} sein kann.

## Syntax

```js-nolint
checkEnclosure(element, rect)
```

### Parameter

- `element`
  - : Ein [`Element`](/de/docs/Web/API/Element), das das zu überprüfende SVG-Grafikelement darstellt.
- `rect`
  - : Ein [`SVGRect`](/de/docs/Web/API/SVGRect) Objekt, das das Rechteck definiert, gegen das überprüft wird.

### Rückgabewert

Ein Boolean.

## Beispiele

### Überprüfen, ob ein Element in einem Rechteck eingeschlossen ist

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
  <circle id="targetElement" cx="50" cy="50" r="30" fill="blue" />
</svg>
<button id="checkEnclosureBtn">Check Enclosure</button>
<pre id="result"></pre>
```

```js
const svgElement = document.getElementById("exampleSVG");
const checkRect = svgElement.getElementById("checkRect");
const targetElement = svgElement.getElementById("targetElement");
const resultDisplay = document.getElementById("result");

document.getElementById("checkEnclosureBtn").addEventListener("click", () => {
  const rect = svgElement.createSVGRect();
  rect.x = checkRect.x.baseVal.value;
  rect.y = checkRect.y.baseVal.value;
  rect.width = checkRect.width.baseVal.value;
  rect.height = checkRect.height.baseVal.value;

  const isEnclosed = svgElement.checkEnclosure(targetElement, rect);
  resultDisplay.textContent = `Is the circle enclosed in the rectangle? ${isEnclosed}`;
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGSVGElement.checkIntersection()`](/de/docs/Web/API/SVGSVGElement/checkIntersection)
