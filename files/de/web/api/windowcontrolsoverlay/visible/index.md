---
title: "WindowControlsOverlay: Eigenschaft visible"
short-title: visible
slug: Web/API/WindowControlsOverlay/visible
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

Die schreibgeschützte **`visible`**-Eigenschaft der [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Schnittstelle gibt einen {{Glossary("Boolean", "Boolean")}} zurück, der anzeigt, ob das Fenstersteuerungs-Overlay sichtbar ist oder nicht.

Das Fenstersteuerungs-Overlay ist nicht sichtbar, wenn:

- Das `display_override`-Mitglied des Web App Manifests nicht auf `window-controls-overlay` gesetzt ist.
- Oder, wenn der Benutzer sich gegen diese Funktion entschieden hat.

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

- Die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Schnittstelle, zu der sie gehört.
