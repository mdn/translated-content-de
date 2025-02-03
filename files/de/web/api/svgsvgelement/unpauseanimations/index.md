---
title: "SVGSVGElement: unpauseAnimations() Methode"
short-title: unpauseAnimations()
slug: Web/API/SVGSVGElement/unpauseAnimations
l10n:
  sourceCommit: 6d35583226f1ca3bac852506014f973113c0a8a2
---

{{APIRef("SVG")}}

Die `unpauseAnimations()`-Methode der [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) Schnittstelle setzt derzeit laufende Animationen, die innerhalb des SVG-Dokumentfragments definiert sind, fort (d.h. sie werden fortgesetzt), sodass die Animationsuhr von der Zeit an weiterläuft, zu der sie angehalten wurde.

## Syntax

```js-nolint
unpauseAnimations()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Fortsetzen von Animationen

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
<button id="resumeBtn">Resume Animations</button>
<pre id="status"></pre>
```

```js
const svgElement = document.getElementById("exampleSVG");
const pauseButton = document.getElementById("pauseBtn");
const resumeButton = document.getElementById("resumeBtn");
const statusDisplay = document.getElementById("status");

pauseButton.addEventListener("click", () => {
  svgElement.pauseAnimations();
  statusDisplay.textContent = "Animations paused.";
});

resumeButton.addEventListener("click", () => {
  svgElement.unpauseAnimations();
  statusDisplay.textContent = "Animations resumed.";
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGSVGElement.pauseAnimations()`](/de/docs/Web/API/SVGSVGElement/pauseAnimations)
