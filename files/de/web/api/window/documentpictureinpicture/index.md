---
title: "Window: documentPictureInPicture-Eigenschaft"
short-title: documentPictureInPicture
slug: Web/API/Window/documentPictureInPicture
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`documentPictureInPicture`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt eine Referenz auf das [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekt für den aktuellen Dokumentkontext zurück.

## Wert

Eine Instanz eines [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekts.

## Beispiele

```js
const videoPlayer = document.getElementById("player");

// …

// Open a Picture-in-Picture window.
await window.documentPictureInPicture.requestWindow({
  width: videoPlayer.clientWidth,
  height: videoPlayer.clientHeight,
});

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API)
- [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)
