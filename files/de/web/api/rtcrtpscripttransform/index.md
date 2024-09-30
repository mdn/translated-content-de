---
title: RTCRtpScriptTransform
slug: Web/API/RTCRtpScriptTransform
l10n:
  sourceCommit: 4799bed9382147f0b0ff642a130a1c12ed59a28e
---

{{APIRef("WebRTC")}}

Das **`RTCRtpScriptTransform`**-Interface der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um einen [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) (ein [`TransformStream`](/de/docs/Web/API/TransformStream), das in einem Worker-Thread ausgeführt wird) in die WebRTC-Sender- und Empfänger-Pipelines einzufügen.

## Konstruktor

- [`RTCRtpScriptTransform()`](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform)
  - : Erstellt eine neue Instanz des `RTCRtpScriptTransform`-Objekts.

## Instanzeigenschaften

Keine.

## Instanzmethoden

Keine.

## Beschreibung

**`RTCRtpScriptTransform`**-Instanzen werden mit einem [`Worker`](/de/docs/Web/API/Worker) konstruiert, in dem der Transformstream-Code ausgeführt wird, zusammen mit einem (optional) `options`-Objekt und einem Array von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die an den Worker übergeben werden.
Sie werden dann den eingehenden und ausgehenden RTC-Pipelines hinzugefügt, indem sie dem [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) und dem [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) zugewiesen werden.

Beim Erstellen dieses Objekts und immer, wenn ein kodierter Frame eintrifft, wird das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis auf dem Worker-Globalobjekt ausgelöst.
Die `transformer`-Eigenschaft des Ereignisses ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Pendant auf der Worker-Seite zum `RTCRtpScriptTransform` im Hauptthread.
Dieser verfügt über `readable` ([`ReadableStream`](/de/docs/Web/API/ReadableStream)) und `writable` ([`WritableStream`](/de/docs/Web/API/WritableStream)) Eigenschaften, die vom Hauptthread `RTCRtpScriptTransform` geteilt wurden – wo sie nicht öffentlich sind.
Wenn das entsprechende `RTCRtpScriptTransform` mit einem `RTCRtpReceiver` verwendet wird, dann reiht `readable` eingehende kodierte Audio- oder Video-Frames vom Paketisierer ein.
Wenn es mit `RTCRtpSender` verwendet wird, enthält `readable` Frames, die von einem Codec kommen.

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignishandler im Worker-Thread definiert eine [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains).
Diese leitet kodierte Frames von `event.transformer.readable` durch einen [`TransformStream`](/de/docs/Web/API/TransformStream), der die Transformationsfunktion definiert, zu `event.transformer.writable`.
`event.transformer` hat auch das `options`-Objekt, das vom `RTCRtpScriptTransform`-Konstruktor übergeben wurde (falls definiert), welches verwendet werden kann, um die Quelle des Ereignisses zu bestimmen, und somit den spezifischen [`TransformStream`](/de/docs/Web/API/TransformStream) zur Kette hinzuzufügen.

## Beispiele

Beachten Sie, dass diese Beispiele zeigen, wie `RTCRtpScriptTransform` definiert und verwendet wird.
Der Transforschungscode im Worker-Thread wird als Teil eines umfassenderen Beispiels in [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) behandelt.

### Hinzufügen einer Transformation für ausgehende Frames

Dieses Beispiel zeigt, wie Sie Videostreams von einer Webcam eines Nutzers über WebRTC streamen können, wobei ein WebRTC-kodierter Transform hinzugefügt wird, um die ausgehenden Streams zu modifizieren.
Der Code geht davon aus, dass es eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` gibt, die bereits mit einem entfernten Peer verbunden ist.

Zuerst erhält man einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), indem [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet wird, um einen Video-[`MediaStream`](/de/docs/Web/API/MediaStream) von einem Mediengerät zu erhalten und dann die Methode [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks), um den ersten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im Stream zu bekommen.

Der Track wird mit [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) zur Peer-Verbindung hinzugefügt und gesendet.
Die Methode `addTrack()` gibt den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) zurück, der verwendet wird, um den Track zu senden.

```js
// Get Video stream and MediaTrack
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getTracks();
const videoSender = peerConnection.addTrack(track, stream);
```

Ein `RTCRtpScriptTransform` wird dann konstruiert, indem ein Worker-Skript übergeben wird, das die Transformation definiert, sowie ein optionales Objekt, das verwendet werden kann, um beliebige Nachrichten an den Worker zu übergeben (in diesem Fall haben wir eine `name`-Eigenschaft mit dem Wert "senderTransform" verwendet, um dem Worker mitzuteilen, dass diese Transformation dem ausgehenden Stream hinzugefügt wird).
Wir fügen dann die Transformation dem Sender hinzu, indem wir sie der [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)-Eigenschaft zuweisen.

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Beachten Sie, dass Sie die Transformation jederzeit hinzufügen können.
Jedoch stellt das sofortige Hinzufügen nach dem Aufruf von `addTrack()` sicher, dass die Transformation den ersten kodierten Frame erhält, der gesendet wird.

### Hinzufügen einer Transformation für eingehende Frames

Dieses Beispiel zeigt, wie Sie eine WebRTC-kodierte Transformation hinzufügen, um einen eingehenden Stream zu modifizieren.
Der Code geht davon aus, dass es eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` gibt, die bereits mit einem entfernten Peer verbunden ist.

Zuerst fügen wir einen [`track`-Ereignishandler der RTCPeerConnection](/de/docs/Web/API/RTCPeerConnection/track_event) hinzu, um das Ereignis abzufangen, wenn ein neuer Track gestreamt wird.
Innerhalb des Handlers konstruieren wir ein `RTCRtpScriptTransform` und fügen es dem `event.receiver.transform` hinzu (`event.receiver` ist ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)).
Wie im vorherigen Beispiel nimmt der Konstruktor ein Objekt mit der `name`-Eigenschaft: hier verwenden wir jedoch `receiverTransform` als Wert, um dem Worker mitzuteilen, dass Frames vom Paketisierer eingehen.

```js
peerConnection.ontrack = (event) => {
  const worker = new Worker("worker.js");
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    name: "receiverTransform",
  });
  received_video.srcObject = event.streams[0];
};
```

Beachten Sie erneut, dass Sie den Transformstream jederzeit hinzufügen können.
Durch das Hinzufügen im `track`-Ereignishandler wird jedoch sichergestellt, dass der Transformstream den ersten kodierten Frame für den Track erhält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
