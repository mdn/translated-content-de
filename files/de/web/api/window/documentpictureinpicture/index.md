---
title: "Fenster: documentPictureInPicture-Eigenschaft"
short-title: documentPictureInPicture
slug: Web/API/Window/documentPictureInPicture
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef}}{{seecompattable}}{{SecureContext_Header}}

Die schreibgeschützte **`documentPictureInPicture`**-Eigenschaft der {{domxref("Window")}}-Schnittstelle gibt eine Referenz auf das {{domxref("DocumentPictureInPicture")}}-Objekt für den aktuellen Dokumentkontext zurück.

## Wert

Eine Instanz des {{domxref("DocumentPictureInPicture")}}-Objekts.

## Beispiele

```js
const videoPlayer = document.getElementById("player");

// ...

// Öffnen eines Picture-in-Picture-Fensters.
await window.documentPictureInPicture.requestWindow({
  width: videoPlayer.clientWidth,
  height: videoPlayer.clientHeight,
});

// ...
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}}
- [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)
