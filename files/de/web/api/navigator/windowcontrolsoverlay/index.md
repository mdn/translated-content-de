---
title: "Navigator: windowControlsOverlay-Eigenschaft"
short-title: windowControlsOverlay
slug: Web/API/Navigator/windowControlsOverlay
l10n:
  sourceCommit: b0c8b07682c8d2cecc544f60468f3cf6fc20ac99
---

{{SecureContext_Header}}{{APIRef("")}}

Die schreibgeschützte Eigenschaft **`windowControlsOverlay`** des {{domxref("Navigator")}}
Interfaces gibt das {{domxref("WindowControlsOverlay")}}-Interface zurück, das Informationen über die Geometrie der Titelleiste in Desktop-Progressive-Web-Apps bereitstellt, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwenden.

Progressive Web Apps, die auf Desktop-Betriebssystemen installiert sind, können das Window Controls Overlay-Feature aktivieren, indem sie den Wert `window-controls-overlay` im [`display_override`](/de/docs/Web/Manifest/display_override)-Element des Web-App-Manifests verwenden.

Dadurch wird die Standardtitelleiste des Fensters ausgeblendet und die App erhält Zugriff auf den gesamten Bereich des App-Fensters.

## Wert

Das {{domxref("WindowControlsOverlay")}}-Interface.

## Beispiele

```js
if ("windowControlsOverlay" in navigator) {
  const rect = navigator.windowControlsOverlay.getTitlebarAreaRect();
  // Machen Sie etwas mit dem Rechteck der Titelleiste.
} else {
  // Das Window Controls Overlay-Feature ist nicht verfügbar.
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
