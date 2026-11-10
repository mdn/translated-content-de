---
title: MediaStreamTrackGenerator
slug: Web/API/MediaStreamTrackGenerator
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{Non-standard_Header}}

> [!NOTE]
> Erwägen Sie stattdessen die Verwendung von [`VideoTrackGenerator`](/de/docs/Web/API/VideoTrackGenerator).

Die **`MediaStreamTrackGenerator`**-Schnittstelle der [Insertable Streams for MediaStreamTrack API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) erstellt einen [`WritableStream`](/de/docs/Web/API/WritableStream), der als Quelle für einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) dient.
Das Objekt verarbeitet einen Stream von Medien-Frames als Eingabe. Dabei kann es sich um Audio- oder Video-Frames handeln.

## Konstruktor

- [`MediaStreamTrackGenerator()`](/de/docs/Web/API/MediaStreamTrackGenerator/MediaStreamTrackGenerator) {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Erstellt ein neues `MediaStreamTrackGenerator`-Objekt, das entweder [`VideoFrame`](/de/docs/Web/API/VideoFrame)- oder [`AudioData`](/de/docs/Web/API/AudioData)-Objekte akzeptiert.

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)._

- [`MediaStreamTrackGenerator.writable`](/de/docs/Web/API/MediaStreamTrackGenerator/writable) {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Instanzmethoden

_Diese Schnittstelle implementiert keine eigenen Methoden, erbt aber Methoden von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)._

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Einfügbare Streams für MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing) und zeigt eine Barcode-Scanner-Anwendung. Sie verarbeitet Barcodes und hebt sie hervor, bevor sie die transformierten Frames in den beschreibbaren Stream von [`MediaStreamTrackGenerator.writable`](/de/docs/Web/API/MediaStreamTrackGenerator/writable) schreibt.

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

## Siehe auch

- [`VideoTrackGenerator`](/de/docs/Web/API/VideoTrackGenerator)
