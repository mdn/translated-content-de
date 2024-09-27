---
title: "SVGAnimatedLength: animVal-Eigenschaft"
short-title: animVal
slug: Web/API/SVGAnimatedLength/animVal
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`animVal`**-Eigenschaft der [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)-Schnittstelle enthält den aktuellen Wert einer SVG-Enumeration. Wenn keine Animation vorhanden ist, entspricht sie dem Wert von [`baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal).

## Wert

Ein [`SVGLength`](/de/docs/Web/API/SVGLength), das den aktuellen Wert der Enumeration enthält.

## Beispiele

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  width="200"
  height="200">
  <circle cx="50" cy="50" r="20" fill="gold" id="circle">
    <animate
      attributeName="r"
      values="20;25;10;20"
      dur="8s"
      repeatCount="indefinite" />
  </circle>
</svg>
<pre id="log"></pre>
```

```js
const circle = document.getElementById("circle");
const log = document.getElementById("log");

function displayLog() {
  const animValue = circle.r.animVal.value;
  const baseValue = circle.r.baseVal.value;
  log.textContent = `The 'circle.r.animVal' is ${animValue}.\n`;
  log.textContent += `The 'circle.r.baseVal' is ${baseValue}.`;
  requestAnimationFrame(displayLog);
}
displayLog();
```

{{EmbedLiveSample("Examples", "280", "260")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
