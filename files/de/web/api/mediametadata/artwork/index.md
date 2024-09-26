---
title: "MediaMetadata: artwork-Eigenschaft"
short-title: artwork
slug: Web/API/MediaMetadata/artwork
l10n:
  sourceCommit: 033bcb33784ef00e5c95c0333d51c771125f9f94
---

{{APIRef("Media Session API")}}

Die **`artwork`**-Eigenschaft der
{{domxref("MediaMetadata")}}-Schnittstelle gibt ein Array von
Objekten zurück oder setzt dieses, das Bilder darstellt, die mit der abgespielten
Medienressource assoziiert sind.

## Wert

Ein {{jsxref("Array")}} von Objekten, jedes enthält die folgenden Felder:

- `src`
  - : Die URL, von der der User-Agent die Bilddaten abruft.
- `sizes` {{optional_inline}}
  - : Gibt die Ressource in mehreren Größen an, sodass der User-Agent ein einzelnes Bild nicht skalieren muss. Standardmäßig ist es der leere String (`""`).
- `type` {{optional_inline}}
  - : Der {{Glossary("MIME type")}}-Hinweis für den User-Agent, der es ihm ermöglicht, Bilder von Typen zu ignorieren, die er nicht unterstützt. Der User-Agent kann jedoch immer noch MIME-Type-Sniffing nach dem Herunterladen des Bildes verwenden, um dessen Typ zu bestimmen. Standardmäßig ist es der leere String (`""`).

## Beispiele

Das folgende Beispiel prüft die Browserkompatibilität und setzt die aktuellen Metadaten
für die Mediensitzung.

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