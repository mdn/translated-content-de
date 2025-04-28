---
title: "DocumentPictureInPicture: window-Eigenschaft"
short-title: window
slug: Web/API/DocumentPictureInPicture/window
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`window`**-Eigenschaft der [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Schnittstelle gibt eine [`Window`](/de/docs/Web/API/Window)-Instanz zurück, die den Browsing-Kontext im Picture-in-Picture-Fenster darstellt.

## Wert

Ein [`Window`](/de/docs/Web/API/Window)-Objekt, wenn das Picture-in-Picture-Fenster bereits mithilfe von [`DocumentPictureInPicture.requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow) geöffnet wurde, oder `null` andersfalls.

## Beispiele

```js
const videoPlayer = document.getElementById("player");

// …

await window.documentPictureInPicture.requestWindow({
  width: videoPlayer.clientWidth,
  height: videoPlayer.clientHeight,
});

// …

const pipWindow = window.documentPictureInPicture.window;
if (pipWindow) {
  // Mute video playing in the Picture-in-Picture window.
  const pipVideo = pipWindow.document.querySelector("#video");
  pipVideo.muted = true;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API)
- [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)
