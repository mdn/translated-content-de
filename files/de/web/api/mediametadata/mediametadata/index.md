---
title: "MediaMetadata: MediaMetadata() Konstruktor"
short-title: MediaMetadata()
slug: Web/API/MediaMetadata/MediaMetadata
l10n:
  sourceCommit: 033bcb33784ef00e5c95c0333d51c771125f9f94
---

{{APIRef("Media Session API")}}

Der **`MediaMetadata()`** Konstruktor erstellt ein neues
{{domxref("MediaMetadata")}} Objekt.

## Syntax

```js-nolint
new MediaMetadata()
new MediaMetadata(metadata)
```

### Parameter

- `metadata` {{optional_inline}}

  - : Die Metadatenparameter sind wie folgt:

    - `album` {{optional_inline}}
      - : Der Name des Albums oder der Sammlung, die das abzuspielende Medium enthält. Standardmäßig ist es der leere String (`""`).
    - `artist` {{optional_inline}}
      - : Der Name des Künstlers, der Gruppe oder des Schöpfers des abzuspielenden Medien. Standardmäßig ist es der leere String (`""`).
    - `artwork` {{optional_inline}}
      - : Ein {{jsxref("Array")}} von Objekten, die Bilder repräsentieren, die mit dem abzuspielenden Medium verknüpft sind, und standardmäßig ein leeres Array sind. Die Struktur des Objekts ist:
        - `src`
          - : Die URL, von der der Benutzeragent die Bilddaten abruft.
        - `sizes` {{optional_inline}}
          - : Gibt die Ressource in mehreren Größen an, sodass der Benutzeragent kein einzelnes Bild skalieren muss. Standardmäßig ist es der leere String (`""`).
        - `type` {{optional_inline}}
          - : Der {{Glossary("MIME-Typ")}} Hinweis für den Benutzeragenten, der es ihm ermöglicht, Bilder von Typen zu ignorieren, die er nicht unterstützt. Der Benutzeragent kann jedoch nach dem Herunterladen des Bildes weiterhin eine MIME-Typ-Sniffing durchführen, um dessen Typ zu bestimmen. Standardmäßig ist es der leere String (`""`).
    - `chapterInfo` {{optional_inline}}
      - : Ein Array von {{domxref("ChapterInformation")}} Objektinstanzen, die die Kapitelinformations-Metadaten darstellen, die mit dem Medium verknüpft sind. Die Objektstruktur ist:
        - `artwork` {{optional_inline}}
          - : Ein {{jsxref("Array")}} von `artwork` Objekten (siehe oben), die die mit dem Kapitel verknüpften Bilder darstellen. Wenn es weggelassen wird, ist `artwork` standardmäßig ein leeres Array.
        - `startTime` {{optional_inline}}
          - : Eine Zahl, die die Startzeit des Kapitels in Sekunden repräsentiert. Wenn weggelassen, ist `startTime` standardmäßig `0`.
        - `title` {{optional_inline}}
          - : Ein String, der den Titel des Kapitels repräsentiert. Wenn weggelassen, ist `title` standardmäßig der leere String (`""`).
    - `title` {{optional_inline}}
      - : Der Titel des abzuspielenden Mediums. Standardmäßig ist es der leere String (`""`).

## Beispiel

Das folgende Beispiel erstellt ein neues {{domxref("MediaMetadata")}} Objekt unter Verwendung des
korrekten Formats der Metadaten.

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

## Browserkompatibilität

{{Compat}}
