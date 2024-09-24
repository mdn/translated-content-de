---
title: MediaMetadata
slug: Web/API/MediaMetadata
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{APIRef("Media Session API")}}

Das **`MediaMetadata`** Interface der {{domxref("Media Session API", "", "", "nocode")}} ermöglicht es einer Webseite, reichhaltige Mediadaten für die Anzeige in einem Plattform-Benutzeroberfläche bereitzustellen.

## Konstruktor

- {{domxref("MediaMetadata.MediaMetadata", "MediaMetadata()")}}
  - : Erstellt ein neues `MediaMetaData`-Objekt.

## Instanzeigenschaften

- {{domxref("MediaMetadata.album")}}
  - : Gibt den Namen des Albums oder der Sammlung zurück oder legt diesen fest, das oder die das abzuspielende Medium enthält.
- {{domxref("MediaMetadata.artist")}}
  - : Gibt den Namen des Künstlers, der Gruppe, des Schöpfers usw. des abzuspielenden Mediums zurück oder legt diesen fest.
- {{domxref("MediaMetadata.artwork")}}
  - : Gibt ein Array von Bildern zurück oder legt dieses fest, das mit dem abzuspielenden Medium verbunden ist.
- {{domxref("MediaMetadata.chapterInfo")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein Array von Kapitelinformationen zurück, die mit dem abzuspielenden Medium verbunden sind und durch {{domxref("ChapterInformation")}}-Objektinstanzen dargestellt werden.
- {{domxref("MediaMetadata.title")}}
  - : Gibt den Titel des abzuspielenden Mediums zurück oder legt diesen fest.

## Beispiele

Das folgende Beispiel überprüft die Browserkompatibilität und setzt die aktuellen Metadaten für die Mediasitzung.

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
