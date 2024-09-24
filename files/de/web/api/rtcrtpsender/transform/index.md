---
title: "RTCRtpSender: transform-Eigenschaft"
short-title: transform
slug: Web/API/RTCRtpSender/transform
l10n:
  sourceCommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{APIRef("WebRTC")}}

Die **`transform`**-Eigenschaft des {{domxref("RTCRtpSender")}}-Objekts wird verwendet, um einen Transform-Stream ({{domxref("TransformStream")}}), der in einem Worker-Thread läuft, in die Sender-Pipeline einzufügen. Dies ermöglicht es, Stream-Transformationen auf kodierte Video- und Audio-Frames anzuwenden, nachdem sie von einem Codec ausgegeben und bevor sie gesendet werden.

Der hinzuzufügende Transform wird mit einem {{domxref("RTCRtpScriptTransform")}} und seinem zugehörigen {{domxref("Worker")}} definiert. Wenn der Transform synchron unmittelbar nach der Erstellung des `RTCRtpSender` festgelegt wird, erhält er den ersten vollständig generierten Frame des Encoders des Senders.

### Wert

Ein {{domxref("RTCRtpScriptTransform")}}<!-- oder {{domxref("SFrameTransform")}} --> oder `null`, wenn der Sender keinen zugehörigen Transformstream hat.

## Beispiel

Dieses Beispiel zeigt, wie Sie einen Videostream von der Webcam eines Benutzers über WebRTC übertragen und dabei einen WebRTC-kodierten Transform hinzufügen können, um die ausgehenden Streams zu modifizieren. Beachten Sie, dass dies Teil eines größeren Beispiels im Leitfaden [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) ist.

Der Code geht davon aus, dass es eine {{domxref("RTCPeerConnection")}} namens `peerConnection` gibt, die bereits mit einem entfernten Peer verbunden ist. Zuerst wird ein {{domxref("MediaStreamTrack")}} abgerufen, indem {{domxref("MediaDevices/getUserMedia", "getUserMedia()")}} verwendet wird, um einen Video-{{domxref("MediaStream")}} von einem Mediengerät zu erhalten, und dann die Methode {{domxref("MediaStream.getTracks()")}}, um den ersten {{domxref("MediaStreamTrack")}} im Stream zu holen.

Der Track wird mit {{domxref("RTCPeerConnection/addTrack()", "addTrack()")}} zur Peer-Connection hinzugefügt. Dies gibt einen neuen {{domxref("RTCRtpSender")}} zurück, der verwendet wird, um ihn zu senden.

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = mediaStream.getTracks();
const videoSender = peerConnection.addTrack(track, mediaStream);
```

Der obige Code richtet die Verbindung ein und beginnt mit dem Senden des Tracks. Um einen Transform-Stream in die Pipeline einzufügen, müssen wir einen {{domxref("RTCRtpScriptTransform")}} konstruieren und ihn der `transform`-Eigenschaft des Senders zuweisen. Da der Transform unmittelbar nach der Erstellung des {{domxref("RTCRtpSender")}} konstruiert wird, erhält er den ersten Frame, der vom Encoder des Senders generiert wird, bevor er gesendet wird.

```js
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Beachten Sie, dass Sie den Transform jederzeit hinzufügen können. Wenn Sie ihn jedoch unmittelbar nach dem Aufruf von `addTrack()` hinzufügen, erhält der Transform den ersten kodierten Frame, der gesendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- {{domxref("RTCRtpReceiver.transform")}}
