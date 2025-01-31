---
title: "Navigator: windowControlsOverlay-Eigenschaft"
short-title: windowControlsOverlay
slug: Web/API/Navigator/windowControlsOverlay
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{SecureContext_Header}}{{APIRef("")}}

Die schreibgeschützte **`windowControlsOverlay`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt das [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Interface zurück. Dieses Interface bietet Informationen über die Geometrie der Titelleiste in Desktop-Progressive-Web-Apps, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwenden.

Progressive Web Apps, die auf Desktop-Betriebssystemen installiert sind, können die Window Controls Overlay-Funktion nutzen, indem sie den Wert `window-controls-overlay` im [`display_override`](/de/docs/Web/Manifest/Reference/display_override)-Mitglied des Web-App-Manifests verwenden.

Dadurch wird die standardmäßige Fenster-Titelleiste ausgeblendet und die App erhält Zugriff auf den gesamten Bereich des App-Fensters.

## Wert

Das [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Interface.

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
