---
title: Insertierbare Streams für die MediaStreamTrack API
slug: Web/API/Insertable_Streams_for_MediaStreamTrack_API
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{DefaultAPISidebar("Insertable Streams for MediaStreamTrack API")}}

Die **Insertierbare Streams für die MediaStreamTrack API** bietet eine Methode zum Hinzufügen neuer Komponenten zu einem {{domxref("MediaStreamTrack")}}.

## Konzepte und Verwendung

Beim Verarbeiten von Video- oder Audiodaten möchten Sie manchmal zusätzliche Elemente einfügen oder den Stream anderweitig verarbeiten. Beispielsweise könnte eine Anwendung zwei Tracks umfassen, die kombiniert werden müssen, wie eine Wetterkarte und ein Video eines Moderators, der die Karte erklärt. Oder Sie möchten einen Track bearbeiten, um Hintergründe zu verwischen, Hintergrundgeräusche zu entfernen oder andere Elemente einzuführen (wie das Hinzufügen lustiger Hüte zu Personen usw.). Diese API bietet eine Methode, dies zu tun, indem sie direkten Zugriff auf den Stream ermöglicht und somit dessen Manipulation erlaubt.

## Schnittstellen

- {{domxref("MediaStreamTrackGenerator")}}
  - : Erstellt einen {{domxref("WritableStream")}}, der als Quelle für ein {{domxref("MediaStreamTrack")}} dient.
- {{domxref("MediaStreamTrackProcessor")}}
  - : Verbraucht die Quelle eines {{domxref("MediaStreamTrack")}}-Objekts und erzeugt einen Stream von Medien-Frames.

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Insertable streams for MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing) und zeigt eine Barcode-Scanner-Anwendung, die einen Barcode in einem Videostream hervorhebt. Dies verwandelt den Stream, der über {{domxref("MediaStreamTrackProcessor.readable")}} zugegriffen wird.

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
