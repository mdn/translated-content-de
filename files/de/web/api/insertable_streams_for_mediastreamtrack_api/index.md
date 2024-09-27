---
title: Insertable Streams for MediaStreamTrack API
slug: Web/API/Insertable_Streams_for_MediaStreamTrack_API
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{DefaultAPISidebar("Insertable Streams for MediaStreamTrack API")}}

Die **Insertable Streams für MediaStreamTrack API** bietet eine Methode zum Hinzufügen neuer Komponenten zu einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack).

## Konzepte und Nutzung

Beim Verarbeiten von Video oder Audio möchten Sie manchmal zusätzliche Elemente einfügen oder den Stream anderweitig verarbeiten. Beispielsweise könnte eine Anwendung zwei Tracks kombinieren müssen, wie eine Wetterkarte und ein Video eines Moderators, der die Karte erklärt. Oder Sie möchten einen Track verarbeiten, um Hintergründe zu verwischen, Hintergrundgeräusche zu entfernen oder andere Elemente hinzuzufügen (wie das Hinzufügen von lustigen Hüten zu Personen usw.). Diese API bietet eine Methode dazu, indem sie direkten Zugriff auf den Stream gewährt, sodass dieser manipuliert werden kann.

## Schnittstellen

- [`MediaStreamTrackGenerator`](/de/docs/Web/API/MediaStreamTrackGenerator)
  - : Erstellt einen [`WritableStream`](/de/docs/Web/API/WritableStream), der als Quelle für einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) dient.
- [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor)
  - : Nutzt die Quelle eines [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts und erzeugt einen Stream aus Medien-Frames.

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Insertable streams for MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing) und zeigt eine Barcode-Scanner-Anwendung, die einen Barcode in einem Video-Stream hervorhebt. Dies transformiert den Stream, der über [`MediaStreamTrackProcessor.readable`](/de/docs/Web/API/MediaStreamTrackProcessor/readable) zugegriffen wird.

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
