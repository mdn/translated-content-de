---
title: MediaStreamTrackGenerator
slug: Web/API/MediaStreamTrackGenerator
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{Non-standard_Header}}

Das **`MediaStreamTrackGenerator`**-Interface der [Insertable Streams for MediaStreamTrack API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) erstellt einen [`WritableStream`](/de/docs/Web/API/WritableStream), der als Quelle für einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) dient.
Das Objekt konsumiert einen Strom von Medienframes als Eingabe, die Audio- oder Videoframes sein können.

## Konstruktor

- [`MediaStreamTrackGenerator()`](/de/docs/Web/API/MediaStreamTrackGenerator/MediaStreamTrackGenerator) {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Erstellt ein neues `MediaStreamTrackGenerator`-Objekt, das entweder [`VideoFrame`](/de/docs/Web/API/VideoFrame) oder [`AudioData`](/de/docs/Web/API/AudioData)-Objekte akzeptiert.

## Instanz-Eigenschaften

_Das Interface erbt auch Eigenschaften von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)._

- [`MediaStreamTrackGenerator.writable`](/de/docs/Web/API/MediaStreamTrackGenerator/writable) {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Instanz-Methoden

_Das Interface implementiert keine spezifischen Methoden, erbt jedoch Methoden von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)._

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Insertable streams for MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing) und zeigt eine Barcode-Scanner-Anwendung, die Barcodes verarbeitet und hervorhebt, bevor die transformierten Frames in den writable stream von [`MediaStreamTrackGenerator.writable`](/de/docs/Web/API/MediaStreamTrackGenerator/writable) geschrieben werden.

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
