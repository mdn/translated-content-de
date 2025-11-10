---
title: "ContentVisibilityAutoStateChangeEvent: skipped-Eigenschaft"
short-title: skipped
slug: Web/API/ContentVisibilityAutoStateChangeEvent/skipped
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSS Containment")}}

Die schreibgeschützte `skipped`-Eigenschaft des [`ContentVisibilityAutoStateChangeEvent`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent)-Interfaces gibt `true` zurück, wenn der User-Agent [die Inhalte des Elements überspringt](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents), andernfalls `false`.

## Wert

Ein boolean. Gibt `true` zurück, wenn der User-Agent die Inhalte des Elements überspringt, andernfalls `false`.

## Beispiele

```js
const canvasElem = document.querySelector("canvas");

canvasElem.addEventListener("contentvisibilityautostatechange", stateChanged);
canvasElem.style.contentVisibility = "auto";

function stateChanged(event) {
  if (event.skipped) {
    stopCanvasUpdates(canvasElem);
  } else {
    startCanvasUpdates(canvasElem);
  }
}

// Call this when the canvas updates need to start.
function startCanvasUpdates(canvas) {
  // …
}

// Call this when the canvas updates need to stop.
function stopCanvasUpdates(canvas) {
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)-Event
- [CSS Containment](/de/docs/Web/CSS/Guides/Containment)
- Die {{cssxref("content-visibility")}}-Eigenschaft
- Die {{cssxref("contain")}}-Eigenschaft
