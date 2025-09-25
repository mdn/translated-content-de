---
title: "Navigator: windowControlsOverlay-Eigenschaft"
short-title: windowControlsOverlay
slug: Web/API/Navigator/windowControlsOverlay
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{SecureContext_Header}}{{APIRef("Window Controls Overlay API")}}

Die **`windowControlsOverlay`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces ist schreibgeschützt und gibt das [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Interface zurück, welches Informationen über die Geometrie der Titelleiste in Desktop-Progressive-Web-Apps bereitstellt, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwenden.

Progressive Web Apps, die auf Desktop-Betriebssystemen installiert sind, können sich durch die Verwendung des `window-controls-overlay`-Werts im [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)-Mitglied des Web-App-Manifests für das Window Controls Overlay-Feature entscheiden.

Dadurch wird die Standard-Titelleiste des Fensters ausgeblendet und der App der Zugriff auf den gesamten Bereich des App-Fensters ermöglicht.

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
