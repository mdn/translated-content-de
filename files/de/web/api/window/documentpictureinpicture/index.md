---
title: "Window: documentPictureInPicture-Eigenschaft"
short-title: documentPictureInPicture
slug: Web/API/Window/documentPictureInPicture
l10n:
  sourceCommit: bac20b9ed34bf5b6427ba9274c99c1737dc309ff
---

{{APIRef("Document Picture-in-Picture API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`documentPictureInPicture`**-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces ist eine schreibgeschützte Eigenschaft, die eine Referenz auf das [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekt des aktuellen Dokumentkontexts zurückgibt.

## Wert

Eine Instanz eines [`DocumentPictureInPicture`](/de/docs/Web/API/DocumentPictureInPicture)-Objekts.

## Beispiele

```js
const videoPlayer = document.getElementById("player");

// ...

// Open a Picture-in-Picture window.
await window.documentPictureInPicture.requestWindow({
  width: videoPlayer.clientWidth,
  height: videoPlayer.clientHeight,
});

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API)
- [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using)
