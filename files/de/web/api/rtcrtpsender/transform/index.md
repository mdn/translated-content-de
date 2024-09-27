---
title: "RTCRtpSender: transform-Eigenschaft"
short-title: transform
slug: Web/API/RTCRtpSender/transform
l10n:
  sourceCommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{APIRef("WebRTC")}}

Die **`transform`**-Eigenschaft des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekts wird verwendet, um einen Transformationsstrom ([`TransformStream`](/de/docs/Web/API/TransformStream)), der in einem Worker-Thread läuft, in die Sende-Pipeline einzufügen. Dies ermöglicht es, Transformationen auf kodierte Video- und Audio-Frames anzuwenden, nachdem sie von einem Codec ausgegeben wurden und bevor sie gesendet werden.

Der hinzuzufügende Transformationsprozess wird unter Verwendung eines [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) und seines zugehörigen [`Worker`](/de/docs/Web/API/Worker) definiert. Wenn die Transformation synchron sofort nach Erstellen des `RTCRtpSender` festgelegt wird, erhält sie den ersten vollständigen vom Sender-Encoder generierten Frame.

### Wert

Ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)<!-- oder [`SFrameTransform`](/de/docs/Web/API/SFrameTransform) -->, oder `null`, wenn der Sender keinen zugeordneten Transformationsstrom hat.

## Beispiel

Dieses Beispiel zeigt, wie Sie Video von der Webcam eines Nutzers über WebRTC streamen könnten, indem ein WebRTC-verschlüsselter Transformationsprozess hinzugefügt wird, um die ausgehenden Ströme zu modifizieren. Beachten Sie, dass dies Teil eines größeren Beispiels im Leitfaden [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) ist.

Der Code geht davon aus, dass eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` bereits mit einem entfernten Peer verbunden ist. Er erhält zunächst einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), indem [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet wird, um einen Video-`MediaStream` von einem Mediengerät zu erhalten, und dann die Methode [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks), um den ersten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im Stream zu bekommen.

Der Track wird der Peer-Verbindung mit [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) hinzugefügt. Dies gibt einen neuen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) zurück, der zum Senden verwendet wird.

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = mediaStream.getTracks();
const videoSender = peerConnection.addTrack(track, mediaStream);
```

Der obige Code richtet die Verbindung ein und beginnt mit dem Senden des Tracks. Um einen Transformationsstrom in die Pipeline einzufügen, müssen wir einen [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) konstruieren und ihn der `transform`-Eigenschaft des Senders zuweisen. Da die Transformation unmittelbar nach der Erstellung des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) konstruiert wird, wird sie den ersten vom Encoder des Senders erzeugten Frame erhalten, bevor er gesendet wird.

```js
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Beachten Sie, dass Sie die Transformation jederzeit hinzufügen können. Indem Sie sie jedoch unmittelbar nach dem Aufruf von `addTrack()` hinzufügen, wird die Transformation den ersten kodierten gesendeten Frame erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)
