---
title: "MediaMetadata: MediaMetadata() Konstruktor"
short-title: MediaMetadata()
slug: Web/API/MediaMetadata/MediaMetadata
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Media Session API")}}

Der **`MediaMetadata()`** Konstruktor erstellt ein neues
[`MediaMetadata`](/de/docs/Web/API/MediaMetadata) Objekt.

## Syntax

```js-nolint
new MediaMetadata()
new MediaMetadata(metadata)
```

### Parameter

- `metadata` {{optional_inline}}
  - : Die Metadatenparameter sind wie folgt:
    - `album` {{optional_inline}}
      - : Der Name des Albums oder der Sammlung, die das abzuspielende Medium enthält. Der Standardwert ist der leere String (`""`).
    - `artist` {{optional_inline}}
      - : Der Name des Künstlers, der Gruppe oder des Erstellers des abzuspielenden Mediums. Der Standardwert ist der leere String (`""`).
    - `artwork` {{optional_inline}}
      - : Ein {{jsxref("Array")}} von Objekten, die Bilder repräsentieren, die mit dem abspielenden Medium verbunden sind. Der Standardwert ist ein leeres Array. Die Objektstruktur ist:
        - `src`
          - : Die URL, von der der Benutzeragent die Bilddaten abruft.
        - `sizes` {{optional_inline}}
          - : Gibt die Ressource in mehreren Größen an, sodass der Benutzeragent kein einzelnes Bild skalieren muss. Der Standardwert ist der leere String (`""`).
        - `type` {{optional_inline}}
          - : Der {{Glossary("MIME_type", "MIME-Typ")}} Hinweis für den Benutzeragenten, der es ihm ermöglicht, Bilder von Typen zu ignorieren, die er nicht unterstützt. Der Benutzeragent kann jedoch nach dem Herunterladen des Bildes immer noch MIME-Typ-Sniffing verwenden, um dessen Typ zu bestimmen. Der Standardwert ist der leere String (`""`).
    - `chapterInfo` {{optional_inline}}
      - : Ein Array von [`ChapterInformation`](/de/docs/Web/API/ChapterInformation) Objektinstanzen, die die Kapitelinformationsmetadaten repräsentieren, die mit dem Medium verbunden sind. Die Objektstruktur ist:
        - `artwork` {{optional_inline}}
          - : Ein {{jsxref("Array")}} von `artwork` Objekten (siehe oben), die Bilder repräsentieren, die mit dem Kapitel verbunden sind. Wenn weggelassen, ist der Standardwert von `artwork` ein leeres Array.
        - `startTime` {{optional_inline}}
          - : Eine Zahl, die die Startzeit des Kapitels in Sekunden darstellt. Wenn weggelassen, ist der Standardwert von `startTime` `0`.
        - `title` {{optional_inline}}
          - : Ein String, der den Titel des Kapitels darstellt. Wenn weggelassen, ist der Standardwert von `title` der leere String (`""`).
    - `title` {{optional_inline}}
      - : Der Titel des abzuspielenden Mediums. Der Standardwert ist der leere String (`""`).

## Beispiel

Das folgende Beispiel erstellt ein neues [`MediaMetadata`](/de/docs/Web/API/MediaMetadata) Objekt mit dem
korrekten Format der Metadaten.

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
