---
title: "SVGSVGElement: animationsPaused() Methode"
short-title: animationsPaused()
slug: Web/API/SVGSVGElement/animationsPaused
l10n:
  sourceCommit: 6d35583226f1ca3bac852506014f973113c0a8a2
---

{{APIRef("SVG")}}

Die `animationsPaused()` Methode der [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) Schnittstelle überprüft, ob die Animationen im SVG-Dokumentfragment aktuell pausiert sind.

## Syntax

```js-nolint
animationsPaused()
```

### Parameter

Keine.

### Rückgabewert

Ein boolean. `true`, wenn dieses SVG-Dokumentfragment in einem pausierten Zustand ist.

## Beispiele

### Überprüfen, ob Animationen pausiert sind

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

<button id="pauseBtn">Pause/Resume Animations</button>
<pre id="status"></pre>
```

```js
const svgElement = document.getElementById("exampleSVG");
const pauseButton = document.getElementById("pauseBtn");
const statusDisplay = document.getElementById("status");

function updateStatus() {
  const isPaused = svgElement.animationsPaused();
  statusDisplay.textContent = `Animations paused: ${isPaused}`;
}

pauseButton.addEventListener("click", () => {
  if (svgElement.animationsPaused()) {
    svgElement.unpauseAnimations();
  } else {
    svgElement.pauseAnimations();
  }
  updateStatus();
});

// Initialize the status display
updateStatus();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGSVGElement.pauseAnimations()`](/de/docs/Web/API/SVGSVGElement/pauseAnimations)
- [`SVGSVGElement.unpauseAnimations()`](/de/docs/Web/API/SVGSVGElement/unpauseAnimations)
