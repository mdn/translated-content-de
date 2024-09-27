---
title: "RTCRtpReceiver: transform-Eigenschaft"
short-title: transform
slug: Web/API/RTCRtpReceiver/transform
l10n:
  sourceCommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{APIRef("WebRTC")}}

Die **`transform`**-Eigenschaft des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekts wird verwendet, um einen Transform-Stream ([`TransformStream`](/de/docs/Web/API/TransformStream)), der in einem Worker-Thread ausgeführt wird, in die Empfangspipeline einzufügen. Dies erlaubt es, Transformierungen auf codierte Video- und Audioframes anzuwenden, sobald sie vom Paketierer eintreffen (bevor sie abgespielt/gerendert werden).

Der hinzuzufügende Transform wird unter Verwendung eines [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) und seinem zugeordneten [`Worker`](/de/docs/Web/API/Worker) definiert. Wenn der Transform im Peer-Connection-Handler des [`track`-Ereignisses](/de/docs/Web/API/RTCPeerConnection/track_event) gesetzt wird, erhält der Transform-Stream den ersten vollständigen eingehenden Frame für den Track.

### Wert

Ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)<!-- or [`SFrameTransform`](/de/docs/Web/API/SFrameTransform) --> oder `null`, wenn der Empfänger keinen zugeordneten Transform-Stream hat.

## Beispiel

Beachten Sie, dass dies Teil eines größeren Beispiels im Leitfaden-Thema [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) ist.

## Hinzufügen eines Transforms für eingehende Frames

Dieses Beispiel zeigt, wie Sie einen WebRTC-codierten Transform hinzufügen, um einen eingehenden Stream zu modifizieren. Der Code geht davon aus, dass eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` vorhanden ist, die bereits mit einem entfernten Peer verbunden ist.

Um einen Transform-Stream in die Pipeline für eingehende Frames einzufügen, müssen wir ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) erstellen und es der `transform`-Eigenschaft des Empfängers zuweisen. Dies können wir im [`track`-Ereignishandler](/de/docs/Web/API/RTCPeerConnection/track_event) wie gezeigt tun. Dieses Ereignis wird ausgelöst, wenn das entfernte Ende einen Track sendet. Die `event.receiver`-Eigenschaft ist ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver).

```js
const worker = new Worker("worker.js");
peerConnection.ontrack = (event) => {
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    someOption: "receiverTransform",
  });
};
```

Da der Transform direkt nach der Erstellung des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) erstellt wird, erhält er den ersten eingehenden Frame. Das als zweiter Parameter im Konstruktor von [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) übergebene Objekt wird an den Worker-Thread gesendet und kann vom Worker-Code verwendet werden, um einen anderen Transform für die eingehenden Frames bereitzustellen als für die ausgehenden Frames.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)
