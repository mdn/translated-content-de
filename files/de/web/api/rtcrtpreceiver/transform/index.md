---
title: "RTCRtpReceiver: transform Eigenschaft"
short-title: transform
slug: Web/API/RTCRtpReceiver/transform
l10n:
  sourceCommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{APIRef("WebRTC")}}

Die **`transform`**-Eigenschaft des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekts wird verwendet, um einen Transformations-Stream ([`TransformStream`](/de/docs/Web/API/TransformStream)), der in einem Worker-Thread läuft, in die Empfänger-Pipeline einzufügen.
Dies ermöglicht es, dass Streaming-Transformationen auf kodierte Video- und Audioframes angewendet werden, sobald sie vom Paketierer eintreffen (bevor sie abgespielt/dargestellt werden).

Die Transformation, die hinzugefügt werden soll, wird unter Verwendung eines [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) und seines zugehörigen [`Worker`](/de/docs/Web/API/Worker) definiert.
Wenn die Transformation im [`track` event](/de/docs/Web/API/RTCPeerConnection/track_event)-Handler der Peerverbindung festgelegt wird, erhält der Transformationsstream die ersten vollständigen eingehenden Frames für das Track.

### Wert

Ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)<!-- oder [`SFrameTransform`](/de/docs/Web/API/SFrameTransform) -->, oder `null`, wenn der Empfänger keinen zugeordneten Transformationsstream hat.

## Beispiel

Bitte beachten Sie, dass dies Teil eines größeren Beispiels im Leitfaden-Thema [Verwendung von WebRTC-kodierten Transformationen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) ist.

## Hinzufügen einer Transformation für eingehende Frames

Dieses Beispiel zeigt, wie Sie eine WebRTC-kodierte Transformation hinzufügen, um einen eingehenden Stream zu modifizieren.
Der Code geht davon aus, dass es eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` gibt, die bereits mit einem entfernten Peer verbunden ist.

Um einen Transformationsstream in die Pipeline für eingehende Frames hinzuzufügen, müssen wir ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) konstruieren und es der `transform`-Eigenschaft des Empfängers zuweisen.
Wir können dies im [`track` event](/de/docs/Web/API/RTCPeerConnection/track_event)-Handler wie gezeigt tun.
Dieses Ereignis wird an der Peerverbindung ausgelöst, wann immer das entfernte Ende einen Track sendet.
Die `event.receiver`-Eigenschaft ist ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver).

```js
const worker = new Worker("worker.js");
peerConnection.ontrack = (event) => {
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    someOption: "receiverTransform",
  });
};
```

Weil die Transformation unmittelbar nach der Erstellung des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) konstruiert wird, erhält sie den ersten eingehenden Frame.
Das Objekt, das als zweiter Parameter im Konstruktor von [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) übergeben wird, wird an den Worker-Thread gesendet und kann durch Worker-Code verwendet werden, um eine andere Transformation für die eingehenden Frames bereitzustellen als für die ausgehenden Frames verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC-kodierten Transformationen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)
