---
title: "RTCRtpSender: transform-Eigenschaft"
short-title: transform
slug: Web/API/RTCRtpSender/transform
l10n:
  sourceCommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{APIRef("WebRTC")}}

Die **`transform`**-Eigenschaft des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekts wird verwendet, um einen Transformationsstrom ([`TransformStream`](/de/docs/Web/API/TransformStream)), der in einem Worker-Thread läuft, in die Sender-Pipeline einzufügen. Dies ermöglicht die Anwendung von Transformationen auf codierte Video- und Audio-Frames, nachdem sie von einem Codec ausgegeben wurden und bevor sie gesendet werden.

Die hinzuzufügende Transformation wird mittels eines [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) und dessen zugehörigem [`Worker`](/de/docs/Web/API/Worker) definiert. Wenn die Transformation synchron unmittelbar nach der Erstellung des `RTCRtpSender` gesetzt wird, wird sie den ersten vollständigen Frame empfangen, der vom Encoder des Senders erzeugt wird.

### Wert

Ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)<!-- oder [`SFrameTransform`](/de/docs/Web/API/SFrameTransform) -->, oder `null`, wenn der Sender keinen zugeordneten Transformationsstrom hat.

## Beispiel

Dieses Beispiel zeigt, wie Sie Video von einer Webcam eines Benutzers über WebRTC streamen, wobei ein WebRTC-codierter Transformationsstrom hinzugefügt wird, um die ausgehenden Streams zu ändern. Beachten Sie, dass dies Teil eines größeren Beispiels im Leitfaden-Thema [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) ist.

Der Code geht davon aus, dass es eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` gibt, die bereits mit einem entfernten Peer verbunden ist. Es wird zunächst ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) abgerufen, indem [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet wird, um einen Video-`MediaStream` von einem Mediengerät zu erhalten, und dann die Methode [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks), um den ersten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im Stream zu erhalten.

Der Track wird mithilfe von [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) zur Peer-Verbindung hinzugefügt. Dies gibt einen neuen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) zurück, der zum Senden verwendet wird.

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = mediaStream.getTracks();
const videoSender = peerConnection.addTrack(track, mediaStream);
```

Der obige Code richtet die Verbindung ein und beginnt, den Track zu senden. Um einen Transformationsstrom in die Pipeline einzufügen, müssen wir ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) konstruieren und es der `transform`-Eigenschaft des Senders zuweisen. Da die Transformation unmittelbar nach der Erstellung des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) konstruiert wird, wird sie den ersten Frame des Senders erhalten, bevor er gesendet wird.

```js
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Beachten Sie, dass Sie die Transformation jederzeit hinzufügen können. Indem Sie sie jedoch unmittelbar nach dem Aufruf von `addTrack()` hinzufügen, erhält die Transformation den ersten codierten Frame, der gesendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)
