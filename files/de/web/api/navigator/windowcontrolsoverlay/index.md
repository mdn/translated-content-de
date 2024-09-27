---
title: "Navigator: windowControlsOverlay-Eigenschaft"
short-title: windowControlsOverlay
slug: Web/API/Navigator/windowControlsOverlay
l10n:
  sourceCommit: b0c8b07682c8d2cecc544f60468f3cf6fc20ac99
---

{{SecureContext_Header}}{{APIRef("")}}

Die **`windowControlsOverlay`**-schreibgeschützte Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle liefert die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Schnittstelle, die Informationen über die Geometrie der Titelleiste in Desktop-Progressive Web Apps bereitstellt, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) nutzen.

Progressive Web Apps, die auf Desktop-Betriebssystemen installiert sind, können die Window Controls Overlay-Funktion durch Verwendung des Werts `window-controls-overlay` im `display_override`-Mitglied des Web-App-Manifests aktivieren.

Dadurch wird die standardmäßige Fenstertitelleiste ausgeblendet und die App erhält Zugriff auf den gesamten Bereich des App-Fensters.

## Wert

Die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Schnittstelle.

## Beispiele

```js
if ("windowControlsOverlay" in navigator) {
  const rect = navigator.windowControlsOverlay.getTitlebarAreaRect();
  // Do something with the title bar area rectangle.
} else {
  // The Window Controls Overlay feature is not available.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
