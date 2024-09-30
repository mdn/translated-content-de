---
title: "MediaSession: metadata-Eigenschaft"
short-title: metadata
slug: Web/API/MediaSession/metadata
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Media Session API")}}

Die **`metadata`**-Eigenschaft der [`MediaSession`](/de/docs/Web/API/MediaSession)-Schnittstelle enthält ein [`MediaMetadata`](/de/docs/Web/API/MediaMetadata) Objekt, das beschreibende Informationen zu dem aktuell abgespielten Medium bereitstellt, oder `null`, wenn die Metadaten nicht gesetzt wurden. Diese Metadaten werden vom Browser an das Gerät zur Präsentation in einer standardmäßigen Mediensteuerungsoberfläche, die das Gerät möglicherweise bietet, bereitgestellt.

## Wert

Eine Instanz von [`MediaMetadata`](/de/docs/Web/API/MediaMetadata), die Informationen über das aktuell abgespielte Medium enthält.

## Beispiel

Das folgende Beispiel prüft die Kompatibilität und erstellt eine neue Mediensitzung mit den relevanten Metadaten:

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
