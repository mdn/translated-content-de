---
title: "WindowControlsOverlay: visible-Eigenschaft"
short-title: visible
slug: Web/API/WindowControlsOverlay/visible
l10n:
  sourceCommit: 195edecd7c4a1205562d2a984bea9e2f8895c479
---

{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

Die **`visible`** schreibgeschützte Eigenschaft des [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Interfaces gibt einen [Boolean](/de/docs/Glossary/Boolean) zurück, der angibt, ob die Fenstersteuerungüberlagerung sichtbar ist oder nicht.

Die Fenstersteuerungüberlagerung ist nicht sichtbar, wenn:

- Das Mitglied [`display_override`](/de/docs/Web/Manifest/display_override) des Web-App-Manifests nicht auf `window-controls-overlay` gesetzt ist.
- Oder, wenn der Benutzer die Funktion deaktiviert hat.

## Wert

Ein Boolean.

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
