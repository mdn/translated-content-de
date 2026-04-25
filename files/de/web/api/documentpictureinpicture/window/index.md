---
title: "DocumentPictureInPicture: Fenster-Eigenschaft"
short-title: window
slug: Web/API/DocumentPictureInPicture/window
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Document Picture-in-Picture API")}}{{SecureContext_Header}}

Die schreibgeschützte **`window`**-Eigenschaft des [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Interfaces gibt eine [`Window`](/de/docs/Web/API/Window)-Instanz zurück, die den Browsing-Kontext innerhalb des Picture-in-Picture-Fensters repräsentiert.

## Wert

Eine [`Window`](/de/docs/Web/API/Window)-Objektinstanz, wenn das Picture-in-Picture-Fenster bereits mit [`DocumentPictureInPicture.requestWindow()`](/de/docs/Web/API/DocumentPictureInPicture/requestWindow) geöffnet wurde, oder `null` andernfalls.

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
