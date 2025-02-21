---
title: "Navigator: windowControlsOverlay-Eigenschaft"
short-title: windowControlsOverlay
slug: Web/API/Navigator/windowControlsOverlay
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{SecureContext_Header}}{{APIRef("")}}

Die schreibgeschützte **`windowControlsOverlay`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Schnittstelle zurück, die Informationen über die Geometrie der Titelleiste in Desktop-Progressive Web Apps bereitstellt, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwenden.

Progressive Web Apps, die auf Desktop-Betriebssystemen installiert sind, können die Window Controls Overlay-Funktion aktivieren, indem sie den Wert `window-controls-overlay` im `display_override`-Mitglied des Web App Manifests verwenden.

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
