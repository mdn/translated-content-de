---
title: "Navigator: windowControlsOverlay-Eigenschaft"
short-title: windowControlsOverlay
slug: Web/API/Navigator/windowControlsOverlay
l10n:
  sourceCommit: b0c8b07682c8d2cecc544f60468f3cf6fc20ac99
---

{{SecureContext_Header}}{{APIRef("")}}

Die **`windowControlsOverlay`**-Schreibgeschützte Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt das [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Interface zurück, welches Informationen über die Geometrie der Titelleiste in Desktop-Progressive-Web-Apps bereitstellt, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwenden.

Progressive Web Apps, die auf Desktop-Betriebssystemen installiert sind, können die Window Controls Overlay-Funktion aktivieren, indem sie den Wert `window-controls-overlay` im [`display_override`](/de/docs/Web/Manifest/display_override) des Web-App-Manifest-Mitglieds verwenden.

Dies blendet die standardmäßige Fenstertitelleiste aus und gibt der App Zugriff auf den gesamten Bereich des App-Fensters.

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
