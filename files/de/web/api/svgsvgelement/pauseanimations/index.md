---
title: "SVGSVGElement: pauseAnimations() Methode"
short-title: pauseAnimations()
slug: Web/API/SVGSVGElement/pauseAnimations
l10n:
  sourceCommit: 6d35583226f1ca3bac852506014f973113c0a8a2
---

{{APIRef("SVG")}}

Die `pauseAnimations()`-Methode der [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-Schnittstelle unterbricht (d.h. pausiert) alle derzeit laufenden Animationen, die innerhalb des SVG-Dokumentfragments definiert sind, das diesem {{SVGElement("svg")}}-Element entspricht. Dadurch bleibt die Animationsuhr, die zu diesem Dokumentfragment gehört, stehen, bis sie wieder fortgesetzt wird.

## Syntax

```js-nolint
pauseAnimations()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Pausieren von Animationen

```html
<svg id="exampleSVG" width="200" height="100">
  <circle cx="50" cy="50" r="30" fill="blue">
    <animate
      attributeName="cx"
      from="50"
      to="150"
      dur="2s"
      repeatCount="indefinite" />
  </circle>
</svg>

<button id="pauseBtn">Pause Animations</button>
<pre id="status"></pre>
```

```js
const svgElement = document.getElementById("exampleSVG");
const pauseButton = document.getElementById("pauseBtn");
const statusDisplay = document.getElementById("status");

pauseButton.addEventListener("click", () => {
  svgElement.pauseAnimations();
  statusDisplay.textContent = "Animations paused.";
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGSVGElement.unpauseAnimations()`](/de/docs/Web/API/SVGSVGElement/unpauseAnimations)
