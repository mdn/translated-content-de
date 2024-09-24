---
title: "MediaMetadata: title-Eigenschaft"
short-title: title
slug: Web/API/MediaMetadata/title
l10n:
  sourceCommit: 033bcb33784ef00e5c95c0333d51c771125f9f94
---

{{APIRef("Media Session API")}}

Die **`title`**-Eigenschaft des {{domxref("MediaMetadata")}}-Interfaces gibt den Titel der abzuspielenden Medien zurück oder setzt ihn fest.

## Wert

Ein {{jsxref("String")}}, der den Titel der Medien enthält.

## Beispiele

Das folgende Beispiel überprüft die Browserkompatibilität und setzt die aktuellen Metadaten für die Mediensitzung.

```js
if ("mediaSession" in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Unforgettable",
    artist: "Nat King Cole",
    album: "The Ultimate Collection (Remastered)",
    artwork: [
      {
        src: "https://dummyimage.com/96x96",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/128x128",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/192x192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/256x256",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/384x384",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/512x512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
