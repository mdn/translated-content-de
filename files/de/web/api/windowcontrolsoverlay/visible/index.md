---
title: "WindowControlsOverlay: visible Eigenschaft"
short-title: visible
slug: Web/API/WindowControlsOverlay/visible
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`visible`** des [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Interfaces gibt einen {{Glossary("Boolean", "Boolean")}} zurück, der anzeigt, ob das Fenstersteuerungs-Overlay sichtbar ist oder nicht.

Das Fenstersteuerungs-Overlay ist nicht sichtbar, wenn:

- Das Mitglied [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) des Web App Manifestes nicht auf `window-controls-overlay` gesetzt ist.
- Oder, wenn der Benutzer sich gegen die Funktion entschieden hat.

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
