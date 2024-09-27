---
title: ChapterInformation
slug: Web/API/ChapterInformation
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

Das **`ChapterInformation`** Interface der [Media Session API](/de/docs/Web/API/Media_Session_API) repräsentiert die Metadaten für ein einzelnes Kapitel einer Medienressource (z.B. ein Video- oder Audiodatei).

Die Kapitelinformationen für eine gegebene Medienressource werden beim ersten Erstellen über die `chapterInfo`-Eigenschaft des Initialisierungsobjekts des [`MediaMetadata()`](/de/docs/Web/API/MediaMetadata/MediaMetadata) Konstruktors festgelegt. Die Eigenschaft nimmt ein Array von `ChapterInformation`-Objekten als Wert an.

Sie können auf die Kapitelinformationen eines bestehenden [`MediaMetadata`](/de/docs/Web/API/MediaMetadata) Objekts über dessen [`chapterInfo`](/de/docs/Web/API/MediaMetadata/chapterInfo) Eigenschaft zugreifen. Dies gibt ein Array von `ChapterInformation`-Objekten zurück.

## Instanz-Eigenschaften

- [`ChapterInformation.artwork`](/de/docs/Web/API/ChapterInformation/artwork) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein {{jsxref("Array")}} von Objekten zurück, die mit dem Kapitel verknüpfte Bilder repräsentieren.
- [`ChapterInformation.startTime`](/de/docs/Web/API/ChapterInformation/startTime) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Zahl in Sekunden zurück, die die Startzeit des Kapitels repräsentiert.
- [`ChapterInformation.title`](/de/docs/Web/API/ChapterInformation/title) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der den Titel des Kapitels repräsentiert.

## Beispiele

Der folgende Beispielcode aus [Video / Media Session Sample](https://googlechrome.github.io/samples/media-session/video.html) zeigt eine typische Struktur für das `ChapterInformation`-Objekt:

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

Das folgende Codebeispiel zeigt, wie es im Media Session Code verwendet werden kann (die oben genannte Objekteigenschaft ist Teil des unten referenzierten `playlist`-Objekts):

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

- [`MediaMetadata`](/de/docs/Web/API/MediaMetadata)
