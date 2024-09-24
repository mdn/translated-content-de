---
title: MediaStreamTrackGenerator
slug: Web/API/MediaStreamTrackGenerator
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{Non-standard_Header}}

Die **`MediaStreamTrackGenerator`**-Schnittstelle der [Insertable Streams for MediaStreamTrack API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) erstellt einen {{domxref("WritableStream")}}, der als Quelle für einen {{domxref("MediaStreamTrack")}} dient. Das Objekt konsumiert einen Strom von Medienrahmen als Eingabe, die entweder Audio- oder Videorahmen sein können.

## Konstruktor

- {{domxref("MediaStreamTrackGenerator.MediaStreamTrackGenerator", "MediaStreamTrackGenerator()")}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Erstellt ein neues `MediaStreamTrackGenerator`-Objekt, das entweder {{domxref("VideoFrame")}}- oder {{domxref("AudioData")}}-Objekte akzeptiert.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von {{domxref("MediaStreamTrack")}}._

- {{domxref("MediaStreamTrackGenerator.writable")}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Ein {{domxref("WritableStream")}}.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt aber Methoden von {{domxref("MediaStreamTrack")}}._

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Insertable streams for MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing) und demonstriert eine Barcode-Scanner-Anwendung, die Barcodes verarbeitet und hervorhebt, bevor die transformierten Rahmen in den beschreibbaren Stream von {{domxref("MediaStreamTrackGenerator.writable")}} geschrieben werden.

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
