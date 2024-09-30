---
title: "WindowControlsOverlay: visible-Eigenschaft"
short-title: visible
slug: Web/API/WindowControlsOverlay/visible
l10n:
  sourceCommit: 195edecd7c4a1205562d2a984bea9e2f8895c479
---

{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

Die **`visible`**-Eigenschaft des [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Interfaces gibt ein [Boolean](/de/docs/Glossary/Boolean) zurück, das anzeigt, ob die Fenstersteuerungsüberlagerung sichtbar ist oder nicht.

Die Fenstersteuerungsüberlagerung ist nicht sichtbar, wenn:

- Das `display_override`-Element im Web App Manifest nicht auf `window-controls-overlay` gesetzt ist.
- Oder wenn der Benutzer sich gegen das Feature entschieden hat.

## Wert

Ein boolean.

## Beispiele

```js
if (navigator.windowControlsOverlay.visible) {
  // Execute code if the controls overlay is visible.
} else {
  // Do something else when it isn't visible.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Interface, zu dem es gehört.
