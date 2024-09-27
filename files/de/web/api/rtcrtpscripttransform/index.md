---
title: RTCRtpScriptTransform
slug: Web/API/RTCRtpScriptTransform
l10n:
  sourceCommit: 4799bed9382147f0b0ff642a130a1c12ed59a28e
---

{{APIRef("WebRTC")}}

Die **`RTCRtpScriptTransform`**-Schnittstelle der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um einen [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) (einen in einem Worker-Thread laufenden [`TransformStream`](/de/docs/Web/API/TransformStream)) in die WebRTC-Sender- und Empfänger-Pipelines einzufügen.

## Konstruktor

- [`RTCRtpScriptTransform()`](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform)
  - : Erstellt eine neue Instanz des `RTCRtpScriptTransform`-Objekts.

## Instanzeigenschaften

Keine.

## Instanzmethoden

Keine.

## Beschreibung

**`RTCRtpScriptTransform`**-Instanzen werden mit einem [`Worker`](/de/docs/Web/API/Worker) erstellt, in dem der Transformstromcode ausgeführt wird, zusammen mit einem (optional) `options`-Objekt und einem Array von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die an den Worker übergeben werden.
Sie werden dann in eingehende und ausgehende RTC-Pipelines eingefügt, indem sie den [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) und dem [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) jeweils zugewiesen werden.

Bei der Konstruktion dieses Objekts und immer dann, wenn ein kodierter Frame eintrifft, wird das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis im globalen Objekt des Workers ausgelöst.
Die `transformer`-Eigenschaft des Ereignisses ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Gegenstück des Workers zum Hauptthread `RTCRtpScriptTransform`.
Dieser besitzt Eigenschaften `readable` ([`ReadableStream`](/de/docs/Web/API/ReadableStream)) und `writable` ([`WritableStream`](/de/docs/Web/API/WritableStream)), die vom Hauptthread `RTCRtpScriptTransform` geteilt wurden — wo sie nicht öffentlich sind.
Wenn der entsprechende `RTCRtpScriptTransform` mit einem `RTCRtpReceiver` verwendet wird, stellt das `readable` Warteschlangen für eingehende kodierte Audio- oder Videoframes vom Paketierer bereit.
Wenn es mit `RTCRtpSender` verwendet wird, enthält `readable` Frames von einem Codec.

Der Worker-Thread [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignishandler definiert eine [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains).
Diese leitet kodierte Frames von `event.transformer.readable` durch einen [`TransformStream`](/de/docs/Web/API/TransformStream), der die Transformationsfunktion definiert, bis hin zu `event.transformer.writable`.
Der `event.transformer` hat auch das vom `RTCRtpScriptTransform`-Konstruktor übergebene `options`-Objekt (falls definiert), das verwendet werden kann, um die Quelle des Ereignisses zu bestimmen und somit den spezifischen [`TransformStream`](/de/docs/Web/API/TransformStream) zur Kette hinzuzufügen.

## Beispiele

Beachten Sie, dass diese Beispiele zeigen, wie `RTCRtpScriptTransform` definiert und verwendet wird.
Transformationscode für den Worker-Thread wird als Teil des umfassenderen Beispiels in [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) behandelt.

### Hinzufügen einer Transformation für ausgehende Frames

Dieses Beispiel zeigt, wie Sie Video von der Webcam eines Benutzers über WebRTC streamen und einen WebRTC-Encoded-Transform hinzufügen, um die ausgehenden Streams zu modifizieren.
Der Code setzt voraus, dass es eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` gibt, die bereits mit einem entfernten Teilnehmer verbunden ist.

Zuerst holen wir uns einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), indem wir [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um einen Video-`MediaStream` von einem Mediengerät zu erhalten, und dann die [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks)-Methode, um den ersten `MediaStreamTrack` im Stream zu erhalten.

Der Track wird der Verbindung zum Teilnehmer hinzugefügt, indem [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) aufgerufen wird.
Die `addTrack()`-Methode gibt den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) zurück, der verwendet wird, um den Track zu senden.

```js
// Get Video stream and MediaTrack
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getTracks();
const videoSender = peerConnection.addTrack(track, stream);
```

Ein `RTCRtpScriptTransform` wird dann konstruiert, indem ein Worker-Skript, das die Transformation definiert, und ein optionales Objekt verwendet werden, das zum Senden beliebiger Nachrichten an den Worker verwendet werden kann (in diesem Fall haben wir eine `name`-Eigenschaft mit dem Wert "senderTransform" verwendet, um dem Worker mitzuteilen, dass diese Transformation zum ausgehenden Stream hinzugefügt wird).
Wir fügen dann die Transformation zum Sender hinzu, indem wir sie der [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)-Eigenschaft zuweisen.

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Beachten Sie, dass Sie die Transformation jederzeit hinzufügen können.
Indem Sie sie jedoch direkt nach dem Aufruf von `addTrack()` hinzufügen, erhält die Transformation den ersten kodierten Frame, der gesendet wird.

### Hinzufügen einer Transformation für eingehende Frames

Dieses Beispiel zeigt, wie Sie einen WebRTC-Encoded-Transform hinzufügen, um einen eingehenden Stream zu modifizieren.
Der Code setzt voraus, dass es eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` gibt, die bereits mit einem entfernten Teilnehmer verbunden ist.

Zuerst fügen wir einen `RTCPeerConnection`-[`track`-Ereignishandler](/de/docs/Web/API/RTCPeerConnection/track_event) hinzu, um das Ereignis abzufangen, wenn ein neuer Track gestreamt wird.
Innerhalb des Handlers konstruieren wir einen `RTCRtpScriptTransform` und fügen ihn `event.receiver.transform` hinzu (`event.receiver` ist ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)).
Wie im vorherigen Beispiel nimmt der Konstruktor ein Objekt mit der `name`-Eigenschaft an: hier verwenden wir jedoch `receiverTransform` als Wert, um dem Worker mitzuteilen, dass Frames vom Paketierer eingehen.

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
Indem Sie ihn jedoch im `track`-Ereignishandler hinzufügen, wird sichergestellt, dass der Transformstream den ersten kodierten Frame für den Track erhält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
