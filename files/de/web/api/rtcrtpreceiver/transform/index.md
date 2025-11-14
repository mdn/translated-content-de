---
title: "RTCRtpReceiver: transform-Eigenschaft"
short-title: transform
slug: Web/API/RTCRtpReceiver/transform
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("WebRTC")}}

Die **`transform`**-Eigenschaft des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekts wird verwendet, um einen Transform-Stream ([`TransformStream`](/de/docs/Web/API/TransformStream)), der in einem Worker-Thread läuft, in die Empfangspipeline einzufügen. Dadurch können Transformationsprozesse auf codierte Video- und Audio-Frames angewendet werden, sobald sie vom Paketizer ankommen (bevor sie abgespielt/gerendert werden).

Die hinzuzufügende Transformation wird mithilfe eines [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) und des zugehörigen [`Worker`](/de/docs/Web/API/Worker) definiert. Wenn die Transformation im Handler des [`track`-Ereignisses](/de/docs/Web/API/RTCPeerConnection/track_event) der Peer-Verbindung gesetzt wird, erhält der Transform-Stream das erste vollständige eingehende Frame für den Track.

## Wert

Ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)<!-- oder [`SFrameTransform`](/de/docs/Web/API/SFrameTransform) --> oder `null`, wenn der Empfänger keinen zugehörigen Transform-Stream hat.

## Beispiel

Beachten Sie, dass dies Teil eines größeren Beispiels im Leitfaden-Thema [Verwendung von WebRTC codierten Transformationen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) ist.

## Hinzufügen einer Transformation für eingehende Frames

Dieses Beispiel zeigt, wie Sie eine WebRTC-codierte Transformation hinzufügen, um einen eingehenden Stream zu modifizieren. Der Code geht davon aus, dass es eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` gibt, die bereits mit einem entfernten Peer verbunden ist.

Um einen Transform-Stream in die Pipeline für eingehende Frames einzufügen, müssen wir ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) konstruieren und es der `transform`-Eigenschaft des Empfängers zuweisen. Dies können wir im [`track`-Ereignis](/de/docs/Web/API/RTCPeerConnection/track_event)-Handler wie gezeigt tun. Dieses Ereignis wird auf der Peer-Verbindung ausgelöst, wenn das entfernte Ende einen Track sendet. Die `event.receiver`-Eigenschaft ist ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver).

```js
const worker = new Worker("worker.js");
peerConnection.ontrack = (event) => {
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    someOption: "receiverTransform",
  });
};
```

Da die Transformation unmittelbar nach der Erstellung des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) konstruiert wird, wird sie das erste eingehende Frame empfangen. Das Objekt, das als zweiter Parameter im Konstruktor des [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) übergeben wird, wird an den Worker-Thread gesendet und kann von Workercode verwendet werden, um eine andere Transformation für die eingehenden Frames bereitzustellen als für die ausgehenden Frames verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC codierten Transformationen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)
