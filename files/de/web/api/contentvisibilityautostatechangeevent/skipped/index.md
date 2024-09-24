---
title: "ContentVisibilityAutoStateChangeEvent: 'skipped'-Eigenschaft"
short-title: übersprungen
slug: Web/API/ContentVisibilityAutoStateChangeEvent/skipped
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{APIRef("CSS Containment")}}

Die schreibgeschützte Eigenschaft `skipped` der {{ domxref("ContentVisibilityAutoStateChangeEvent") }}-Schnittstelle gibt `true` zurück, wenn der User-Agent [den Inhalt des Elements überspringt](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) oder `false` anderweitig.

## Wert

Ein boolescher Wert. Gibt `true` zurück, wenn der User-Agent den Inhalt des Elements überspringt, oder `false` anderweitig.

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

// Aufrufen, wenn die Canvas-Updates gestartet werden müssen.
function startCanvasUpdates(canvas) {
  // …
}

// Aufrufen, wenn die Canvas-Updates gestoppt werden müssen.
function stopCanvasUpdates(canvas) {
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} Ereignis
- [CSS Containment](/de/docs/Web/CSS/CSS_containment)
- Die {{cssxref("content-visibility")}} Eigenschaft
- Die {{cssxref("contain")}} Eigenschaft
