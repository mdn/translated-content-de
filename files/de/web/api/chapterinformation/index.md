---
title: Kapitelinformationen
slug: Web/API/ChapterInformation
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

Das **`ChapterInformation`**-Interface der {{domxref("Media Session API", "", "", "nocode")}} repräsentiert die Metadaten für ein einzelnes Kapitel einer Medienressource (d.h. einer Video- oder Audiodatei).

Die Kapitelinformationen für eine gegebene Medienressource werden beim ersten Erstellen über die `chapterInfo`-Eigenschaft des Initialisierungsobjekts des {{domxref("MediaMetadata.MediaMetadata", "MediaMetadata()")}}-Konstruktors festgelegt. Die Eigenschaft nimmt ein Array von `ChapterInformation`-Objekten als Wert an.

Sie können die Kapitelinformationen für ein bestehendes {{domxref("MediaMetadata")}}-Objekt über seine {{domxref("MediaMetadata.chapterInfo", "chapterInfo")}}-Eigenschaft abrufen. Diese gibt ein Array von `ChapterInformation`-Objekten zurück.

## Instanz-Eigenschaften

- {{domxref("ChapterInformation.artwork")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein {{jsxref("Array")}} von Objekten zurück, die Bilder repräsentieren, die mit dem Kapitel assoziiert sind.
- {{domxref("ChapterInformation.startTime")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Zahl in Sekunden zurück, die die Startzeit des Kapitels darstellt.
- {{domxref("ChapterInformation.title")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Zeichenkette zurück, die den Titel des Kapitels darstellt.

## Beispiele

Der folgende Beispielcode von [Video / Media Session Sample](https://googlechrome.github.io/samples/media-session/video.html) zeigt eine typische Struktur für das `ChapterInformation`-Objekt:

```js
const BASE_URL = "https://storage.googleapis.com/media-session/";

chapterInfo: [
  {
    title: "Chapter 1",
    startTime: 0,
    artwork: [
      {
        src: BASE_URL + "sintel/chapter1-128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: BASE_URL + "sintel/chapter1-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  {
    title: "Chapter 2",
    startTime: 37,
    artwork: [
      {
        src: BASE_URL + "sintel/chapter2-128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: BASE_URL + "sintel/chapter2-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
];
```

Das folgende Snippet zeigt, wie es innerhalb von Media Session Code verwendet werden kann (die obige Objekteigenschaft ist Teil des unten referenzierten `playlist`-Objekts):

```js
function updateMetadata() {
  let track = playlist[index];

  log("Playing " + track.title + " track...");
  navigator.mediaSession.metadata = new MediaMetadata({
    title: track.title,
    artist: track.artist,
    artwork: track.artwork,
    chapterInfo: track.chapterInfo,
  });

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaMetadata")}}
