---
title: "ContentVisibilityAutoStateChangeEvent: Eigenschaft skipped"
short-title: skipped
slug: Web/API/ContentVisibilityAutoStateChangeEvent/skipped
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{APIRef("CSS Containment")}}

Die schreibgeschützte Eigenschaft `skipped` der Schnittstelle [`ContentVisibilityAutoStateChangeEvent`](/de/docs/Web/API/ContentVisibilityAutoStateChangeEvent) gibt `true` zurück, wenn der Benutzer-Agent [den Inhalt des Elements überspringt](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents), oder `false` andernfalls.

## Wert

Ein boolean. Gibt `true` zurück, wenn der Benutzer-Agent den Inhalt des Elements überspringt, oder `false` andernfalls.

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

- Das [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event) Ereignis
- [CSS Containment](/de/docs/Web/CSS/CSS_containment)
- Die {{cssxref("content-visibility")}} Eigenschaft
- Die {{cssxref("contain")}} Eigenschaft
