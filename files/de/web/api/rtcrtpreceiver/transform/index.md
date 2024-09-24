---
title: "RTCRtpReceiver: transform-Eigenschaft"
short-title: transform
slug: Web/API/RTCRtpReceiver/transform
l10n:
  sourceCommit: 32f666e453bdb8c93d305075453b6e304cae94de
---

{{APIRef("WebRTC")}}

Die **`transform`**-Eigenschaft des {{domxref("RTCRtpReceiver")}}-Objekts wird verwendet, um einen Transform-Stream ({{domxref("TransformStream")}}), der in einem Worker-Thread läuft, in die Empfangspipeline einzufügen.
Dies ermöglicht es, Transformierungen auf kodierte Video- und Audio-Frames anzuwenden, wenn sie vom Paketierer ankommen (bevor sie abgespielt/gerendert werden).

Der hinzuzufügende Transform wird mithilfe eines {{domxref("RTCRtpScriptTransform")}} und seinem zugehörigen {{domxref("Worker")}} definiert.
Wenn der Transform im `track`-Ereignishandler der Peer-Verbindung festgelegt wird, erhält der Transform-Stream das erste vollständige eingehende Frame für den Track.

### Wert

Ein {{domxref("RTCRtpScriptTransform")}}<!-- oder {{domxref("SFrameTransform")}} --> oder `null`, wenn der Empfänger keinen zugehörigen Transform-Stream hat.

## Beispiel

Beachten Sie, dass dies Teil eines größeren Beispiels im Leitfaden [Verwenden von WebRTC-kodierten Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) ist.

## Hinzufügen eines Transforms für eingehende Frames

Dieses Beispiel zeigt, wie Sie einen WebRTC-kodierten Transform hinzufügen, um einen eingehenden Stream zu modifizieren.
Der Code geht davon aus, dass eine {{domxref("RTCPeerConnection")}} namens `peerConnection` bereits mit einem entfernten Peer verbunden ist.

Um einen Transform-Stream in die Pipeline für eingehende Frames einzufügen, müssen wir ein {{domxref("RTCRtpScriptTransform")}} konstruieren und es der `transform`-Eigenschaft des Empfängers zuweisen.
Wir können dies im `track`-Ereignishandler tun, wie gezeigt.
Dieses Ereignis wird in der Peer-Verbindung ausgelöst, wann immer das entfernte Ende einen Track sendet.
Die `event.receiver`-Eigenschaft ist ein {{domxref("RTCRtpReceiver")}}.

```js
const worker = new Worker("worker.js");
peerConnection.ontrack = (event) => {
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    someOption: "receiverTransform",
  });
};
```

Da der Transform unmittelbar nach der Erstellung des {{domxref("RTCRtpReceiver")}} konstruiert wird, wird er das erste eingehende Frame empfangen.
Das Objekt, das als zweiter Parameter im Konstruktor des {{domxref("RTCRtpScriptTransform")}} übergeben wird, wird an den Worker-Thread gesendet und kann von Worker-Code verwendet werden, um einen anderen Transform für die eingehenden Frames bereitzustellen als für die ausgehenden Frames.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von WebRTC-kodierten Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- {{domxref("RTCRtpSender.transform")}}
