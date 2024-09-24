---
title: MediaStreamTrackProcessor
slug: Web/API/MediaStreamTrackProcessor
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}

Die **`MediaStreamTrackProcessor`**-Schnittstelle der [Insertable Streams für die MediaStreamTrack API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) verwendet die Quelle eines {{domxref("MediaStreamTrack")}}-Objekts und erzeugt einen Strom von Medienbildern.

## Konstruktor

- {{domxref("MediaStreamTrackProcessor.MediaStreamTrackProcessor", "MediaStreamTrackProcessor()")}}
  - : Erstellt ein neues `MediaStreamTrackProcessor`-Objekt.

## Instanz-Eigenschaften

- {{domxref("MediaStreamTrackProcessor.readable")}}
  - : Gibt einen {{domxref("ReadableStream")}} zurück.

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Insertable streams for MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing) und demonstriert eine Barcode-Scanner-Anwendung, die den über {{domxref("MediaStreamTrackProcessor.readable")}} zugänglichen Strom transformiert, indem der Barcode hervorgehoben wird.

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
