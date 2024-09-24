---
title: "WindowControlsOverlay: sichtbare Eigenschaft"
short-title: sichtbar
slug: Web/API/WindowControlsOverlay/visible
l10n:
  sourceCommit: 195edecd7c4a1205562d2a984bea9e2f8895c479
---

{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

Die **`visible`** schreibgeschützte Eigenschaft der {{domxref("WindowControlsOverlay")}}-Schnittstelle gibt ein {{Glossary("Boolean")}} zurück, das anzeigt, ob das Fenstersteuerung-Overlay sichtbar ist oder nicht.

Das Fenstersteuerung-Overlay ist nicht sichtbar, wenn:

- Das `display_override`-Mitglied des Web App Manifest nicht auf `window-controls-overlay` gesetzt ist.
- Oder, wenn der Benutzer sich von der Funktion abgemeldet hat.

## Wert

Ein boolean.

## Beispiele

```js
if (navigator.windowControlsOverlay.visible) {
  // Code ausführen, wenn das Steuerung-Overlay sichtbar ist.
} else {
  // Etwas anderes tun, wenn es nicht sichtbar ist.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("WindowControlsOverlay")}}-Schnittstelle, zu der es gehört.
