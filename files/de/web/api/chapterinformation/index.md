---
title: ChapterInformation
slug: Web/API/ChapterInformation
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

Die **`ChapterInformation`**-Schnittstelle der [Media Session API](/de/docs/Web/API/Media_Session_API) repräsentiert die Metadaten für ein einzelnes Kapitel einer Medienressource (d.h. einer Video- oder Audiodatei).

Die Kapitelinformation für eine gegebene Medienressource wird festgelegt, wenn sie zuerst erstellt wird, über die `chapterInfo`-Eigenschaft des Initialisierungsobjekts des [`MediaMetadata()`](/de/docs/Web/API/MediaMetadata/MediaMetadata)-Konstruktors. Die Eigenschaft nimmt ein Array von `ChapterInformation`-Objekten als Wert.

Sie können auf die Kapitelinformationen eines bestehenden [`MediaMetadata`](/de/docs/Web/API/MediaMetadata)-Objekts über seine [`chapterInfo`](/de/docs/Web/API/MediaMetadata/chapterInfo)-Eigenschaft zugreifen. Dies gibt ein Array von `ChapterInformation`-Objekten zurück.

## Instanz-Eigenschaften

- [`ChapterInformation.artwork`](/de/docs/Web/API/ChapterInformation/artwork) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein {{jsxref("Array")}} von Objekten zurück, die Bilder darstellen, die mit dem Kapitel verbunden sind.
- [`ChapterInformation.startTime`](/de/docs/Web/API/ChapterInformation/startTime) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine Zahl in Sekunden zurück, die die Startzeit des Kapitels darstellt.
- [`ChapterInformation.title`](/de/docs/Web/API/ChapterInformation/title) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen String zurück, der den Titel des Kapitels darstellt.

## Beispiele

Das folgende Beispiel zeigt eine typische Struktur des `ChapterInformation`-Objekts aus [Video / Media Session Sample](https://googlechrome.github.io/samples/media-session/video.html):

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
          src: `${BASE_URL}sintel/chapter1-128.png`,
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: `${BASE_URL}sintel/chapter1-512.png`,
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
          src: `${BASE_URL}sintel/chapter2-128.png`,
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: `${BASE_URL}sintel/chapter2-512.png`,
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  ],
};
```

Der folgende Ausschnitt zeigt, wie es im Media Session Code verwendet werden kann (die oben stehende Objekt-Eigenschaft ist Teil des `playlist`-Objekts, das unten referenziert wird):

```js
function updateMetadata() {
  const track = playlist[index];

  log(`Playing ${track.title} track...`);
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
