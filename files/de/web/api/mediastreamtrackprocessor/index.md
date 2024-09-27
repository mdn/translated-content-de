---
title: MediaStreamTrackProcessor
slug: Web/API/MediaStreamTrackProcessor
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}

Die **`MediaStreamTrackProcessor`**-Schnittstelle der [Insertable Streams for MediaStreamTrack API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) verarbeitet die Quelle eines [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts und erzeugt einen Stream von Medienframes.

## Konstruktor

- [`MediaStreamTrackProcessor()`](/de/docs/Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor)
  - : Erstellt ein neues `MediaStreamTrackProcessor`-Objekt.

## Instanzeigenschaften

- [`MediaStreamTrackProcessor.readable`](/de/docs/Web/API/MediaStreamTrackProcessor/readable)
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück.

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Insertable streams for MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing) und demonstriert eine Barcode-Scanner-Anwendung, die den über [`MediaStreamTrackProcessor.readable`](/de/docs/Web/API/MediaStreamTrackProcessor/readable) zugegriffenen Stream transformiert, indem sie den Barcode hervorhebt.

```js
const stream = await getUserMedia({ video: true });
const videoTrack = stream.getVideoTracks()[0];

const trackProcessor = new MediaStreamTrackProcessor({ track: videoTrack });
const trackGenerator = new MediaStreamTrackGenerator({ kind: "video" });

const transformer = new TransformStream({
  async transform(videoFrame, controller) {
    const barcodes = await detectBarcodes(videoFrame);
    const newFrame = highlightBarcodes(videoFrame, barcodes);
    videoFrame.close();
    controller.enqueue(newFrame);
  },
});

trackProcessor.readable
  .pipeThrough(transformer)
  .pipeTo(trackGenerator.writable);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
