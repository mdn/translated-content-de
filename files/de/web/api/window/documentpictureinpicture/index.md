---
title: "Window: documentPictureInPicture-Eigenschaft"
short-title: documentPictureInPicture
slug: Web/API/Window/documentPictureInPicture
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Document Picture-in-Picture API")}}{{SecureContext_Header}}

Die **`documentPictureInPicture`**-Schreibgeschützte Eigenschaft der
[`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt eine Referenz auf das [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekt für den aktuellen Dokumentkontext zurück.

## Wert

Eine Instanz des [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekts.

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
- [Verwenden der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)
