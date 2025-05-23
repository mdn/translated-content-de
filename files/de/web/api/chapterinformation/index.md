---
title: ChapterInformation
slug: Web/API/ChapterInformation
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

Das **`ChapterInformation`**-Interface der [Media Session API](/de/docs/Web/API/Media_Session_API) repräsentiert die Metadaten für ein einzelnes Kapitel einer Medienressource (d.h. einer Video- oder Audiodatei).

Die Kapitelinformationen für eine gegebene Medienressource werden beim erstmaligen Erstellen über die `chapterInfo`-Eigenschaft des Initialisierungsobjekts des [`MediaMetadata()`](/de/docs/Web/API/MediaMetadata/MediaMetadata)-Konstruktors festgelegt. Diese Eigenschaft nimmt ein Array von `ChapterInformation`-Objekten als Wert an.

Sie können auf die Kapitelinformationen eines bestehenden [`MediaMetadata`](/de/docs/Web/API/MediaMetadata)-Objekts über dessen [`chapterInfo`](/de/docs/Web/API/MediaMetadata/chapterInfo)-Eigenschaft zugreifen. Dies gibt ein Array von `ChapterInformation`-Objekten zurück.

## Instanz-Eigenschaften

- [`ChapterInformation.artwork`](/de/docs/Web/API/ChapterInformation/artwork) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein {{jsxref("Array")}} von Objekten zurück, die Bilder darstellen, die mit dem Kapitel verknüpft sind.
- [`ChapterInformation.startTime`](/de/docs/Web/API/ChapterInformation/startTime) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Zahl in Sekunden zurück, die die Startzeit des Kapitels darstellt.
- [`ChapterInformation.title`](/de/docs/Web/API/ChapterInformation/title) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Zeichenfolge zurück, die den Titel des Kapitels darstellt.

## Beispiele

Der untenstehende Beispielcode aus [Video / Media Session Sample](https://googlechrome.github.io/samples/media-session/video.html) zeigt eine typische Struktur für das `ChapterInformation`-Objekt:

```js
const BASE_URL = "https://storage.googleapis.com/media-session/";

const metadata = {
  // …
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
  ],
};
```

Das folgende Snippet zeigt, wie es innerhalb von Media Session-Code verwendet werden kann (die obige Objekteigenschaft ist Teil des unten referenzierten `playlist`-Objekts):

```js
function updateMetadata() {
  const track = playlist[index];

  log("Playing " + track.title + " track...");
  navigator.mediaSession.metadata = new MediaMetadata({
    title: track.title,
    artist: track.artist,
    artwork: track.artwork,
    chapterInfo: track.chapterInfo,
  });

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaMetadata`](/de/docs/Web/API/MediaMetadata)
