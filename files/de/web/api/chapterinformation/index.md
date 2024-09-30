---
title: ChapterInformation
slug: Web/API/ChapterInformation
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

Das **`ChapterInformation`**-Interface der [Media Session API](/de/docs/Web/API/Media_Session_API) repräsentiert die Metadaten für ein individuelles Kapitel einer Medienressource (d.h. einer Video- oder Audiodatei).

Die Kapitelinformationen für eine gegebene Medienressource werden beim Erstellen über die `chapterInfo`-Eigenschaft des Initialisierungsobjekts des [`MediaMetadata()`](/de/docs/Web/API/MediaMetadata/MediaMetadata)-Konstruktors gesetzt. Die Eigenschaft nimmt ein Array von `ChapterInformation`-Objekten als Wert an.

Sie können auf die Kapitelinformationen eines bestehenden [`MediaMetadata`](/de/docs/Web/API/MediaMetadata)-Objekts über dessen [`chapterInfo`](/de/docs/Web/API/MediaMetadata/chapterInfo)-Eigenschaft zugreifen. Diese gibt ein Array von `ChapterInformation`-Objekten zurück.

## Instanzeigenschaften

- [`ChapterInformation.artwork`](/de/docs/Web/API/ChapterInformation/artwork) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein {{jsxref("Array")}} von Objekten zurück, die mit dem Kapitel verknüpfte Bilder repräsentieren.
- [`ChapterInformation.startTime`](/de/docs/Web/API/ChapterInformation/startTime) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Zahl in Sekunden zurück, die die Startzeit des Kapitels darstellt.
- [`ChapterInformation.title`](/de/docs/Web/API/ChapterInformation/title) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der den Titel des Kapitels repräsentiert.

## Beispiele

Der untenstehende Beispielcode aus dem [Video / Media Session Sample](https://googlechrome.github.io/samples/media-session/video.html) zeigt eine typische Struktur für das `ChapterInformation`-Objekt:

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

Der folgende Codeausschnitt zeigt, wie es innerhalb des Media Session-Codes verwendet werden kann (die oben angegebenen Objekt-Eigenschaften sind Teil des weiter unten referenzierten `playlist`-Objekts):

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
