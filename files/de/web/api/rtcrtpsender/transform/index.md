---
title: "RTCRtpSender: transform-Eigenschaft"
short-title: transform
slug: Web/API/RTCRtpSender/transform
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("WebRTC")}}

Die **`transform`**-Eigenschaft des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekts wird verwendet, um einen Transform-Stream ([`TransformStream`](/de/docs/Web/API/TransformStream)), der in einem Worker-Thread läuft, in die Sender-Pipeline einzufügen.
Dies ermöglicht es, Stream-Transformationen auf kodierte Video- und Audioframes anzuwenden, nachdem sie von einem Codec ausgegeben wurden und bevor sie gesendet werden.

Der Transform, der hinzugefügt werden soll, wird mit einem [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) und seinem zugehörigen [`Worker`](/de/docs/Web/API/Worker) definiert.
Wenn der Transform synchron unmittelbar nach der Erstellung des `RTCRtpSender` gesetzt wird, erhält er den ersten vollständigen Frame, der vom Encoder des Senders erzeugt wird.

## Wert

Ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)<!-- oder [`SFrameTransform`](/de/docs/Web/API/SFrameTransform) --> oder `null`, wenn der Sender keinen zugehörigen Transform-Stream hat.

## Beispiel

Dieses Beispiel zeigt, wie Sie Video von der Webcam eines Benutzers über WebRTC streamen können, indem ein WebRTC-kodierter Transform hinzugefügt wird, um die ausgehenden Streams zu modifizieren.
Beachten Sie, dass dies Teil eines größeren Beispiels im Leitfaden [Verwendung von WebRTC-kodierten Transformationen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) ist.

Der Code geht davon aus, dass eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` bereits mit einem Remote-Peer verbunden ist.
Zunächst wird ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) erhalten, indem [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet wird, um einen Video-[`MediaStream`](/de/docs/Web/API/MediaStream) von einem Mediengerät zu erhalten, und dann die Methode [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) aufgerufen wird, um den ersten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im Stream zu erhalten.

Der Track wird mit [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) zur Peer-Verbindung hinzugefügt. Dies gibt einen neuen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) zurück, der verwendet wird, um ihn zu senden.

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = mediaStream.getTracks();
const videoSender = peerConnection.addTrack(track, mediaStream);
```

Der oben gezeigte Code richtet die Verbindung ein und beginnt, den Track zu senden.
Um einen Transform-Stream in die Pipeline einzufügen, müssen wir einen [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) konstruieren und dem `transform`-Eigenschaft des Senders zuweisen.
Da der Transform unmittelbar nach der Erstellung des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) konstruiert wird, erhält er den ersten Frame, der vom Encoder des Senders erzeugt wird, bevor er gesendet wird.

```js
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Beachten Sie, dass Sie den Transform jederzeit hinzufügen können.
Indem Sie ihn jedoch unmittelbar nach dem Aufruf von `addTrack()` hinzufügen, erhält der Transform den ersten kodierten Frame, der gesendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC-kodierten Transformationen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)
