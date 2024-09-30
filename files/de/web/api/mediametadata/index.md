---
title: MediaMetadata
slug: Web/API/MediaMetadata
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{APIRef("Media Session API")}}

Die **`MediaMetadata`**-Schnittstelle der [Media Session API](/de/docs/Web/API/Media_Session_API) ermöglicht es einer Webseite, umfassende Medienmetadaten zur Anzeige in einer Plattform-Benutzeroberfläche bereitzustellen.

## Konstruktor

- [`MediaMetadata()`](/de/docs/Web/API/MediaMetadata/MediaMetadata)
  - : Erstellt ein neues `MediaMetadata`-Objekt.

## Instanzeigenschaften

- [`MediaMetadata.album`](/de/docs/Web/API/MediaMetadata/album)
  - : Gibt den Namen des Albums oder der Sammlung zurück oder legt ihn fest, die oder das das abzuspielende Medium enthält.
- [`MediaMetadata.artist`](/de/docs/Web/API/MediaMetadata/artist)
  - : Gibt den Namen des Künstlers, der Gruppe, des Erstellers usw. zurück oder legt ihn fest, die oder der das abzuspielende Medium erstellt hat.
- [`MediaMetadata.artwork`](/de/docs/Web/API/MediaMetadata/artwork)
  - : Gibt ein Array von Bildern zurück oder legt dieses fest, die mit dem abzuspielenden Medium verknüpft sind.
- [`MediaMetadata.chapterInfo`](/de/docs/Web/API/MediaMetadata/chapterInfo) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein Array von Metadaten der Kapitelinformationen zurück, die mit dem abzuspielenden Medium verknüpft sind, dargestellt durch Instanzen des [`ChapterInformation`](/de/docs/Web/API/ChapterInformation)-Objekts.
- [`MediaMetadata.title`](/de/docs/Web/API/MediaMetadata/title)
  - : Gibt den Titel des abzuspielenden Mediums zurück oder legt ihn fest.

## Beispiele

Das folgende Beispiel überprüft die Browser-Kompatibilität und setzt die aktuellen Metadaten für die Mediensitzung.

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
