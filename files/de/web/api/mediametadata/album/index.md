---
title: "MediaMetadata: album-Eigenschaft"
short-title: album
slug: Web/API/MediaMetadata/album
l10n:
  sourceCommit: 033bcb33784ef00e5c95c0333d51c771125f9f94
---

{{APIRef("Media Session API")}}

Die **`album`**-Eigenschaft des
[`MediaMetadata`](/de/docs/Web/API/MediaMetadata)-Interfaces gibt den Namen des Albums oder der Sammlung zurück, die das abzuspielende Medium enthält, oder setzt diesen.

## Wert

Ein {{jsxref("String")}}, der den Namen des Albums enthält.

## Beispiele

Das folgende Beispiel überprüft die Browser-Kompatibilität und setzt die aktuellen Metadaten
für die Mediensitzung.

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
