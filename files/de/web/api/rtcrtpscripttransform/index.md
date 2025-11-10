---
title: RTCRtpScriptTransform
slug: Web/API/RTCRtpScriptTransform
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("WebRTC")}}

Das **`RTCRtpScriptTransform`**-Interface der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um einen [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) (einen [`TransformStream`](/de/docs/Web/API/TransformStream), der in einem Worker-Thread läuft) in die WebRTC-Sender- und Empfänger-Pipelines einzufügen.

## Konstruktor

- [`RTCRtpScriptTransform()`](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform)
  - : Erstellt eine neue Instanz des `RTCRtpScriptTransform`-Objekts.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

Keine.

## Beschreibung

**`RTCRtpScriptTransform`**-Instanzen werden mit einem [`Worker`](/de/docs/Web/API/Worker) erstellt, in dem der Transform-Stream-Code ausgeführt wird, zusammen mit einem (optionalen) `options`-Objekt und einem Array von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die an den Worker übergeben werden.
Sie werden dann in eingehende und ausgehende RTC-Pipelines eingefügt, indem sie jeweils [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) und [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) zugewiesen werden.

Beim Erstellen dieses Objekts und immer wenn ein kodierter Frame ankommt, wird das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Event auf dem globalen Worker-Objekt ausgelöst.
Die `transformer`-Eigenschaft des Events ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Pendant zum `RTCRtpScriptTransform` des Haupt-Threads.
Dieser besitzt die Eigenschaften `readable` ([`ReadableStream`](/de/docs/Web/API/ReadableStream)) und `writable` ([`WritableStream`](/de/docs/Web/API/WritableStream)), die vom Haupt-Thread `RTCRtpScriptTransform` geteilt wurden — wo sie nicht öffentlich sind.
Wenn das entsprechende `RTCRtpScriptTransform` mit einem `RTCRtpReceiver` verwendet wird, dann reiht `readable` eingehende kodierte Audio- oder Videoframes vom Paketierer ein.
Wenn es mit einem `RTCRtpSender` verwendet wird, enthält `readable` Frames, die aus einem Codec kommen.

Der Worker-Thread [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Event-Handler definiert eine [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains).
Diese leitet kodierte Frames von `event.transformer.readable` durch einen [`TransformStream`](/de/docs/Web/API/TransformStream), der die Transformationsfunktion definiert, bis zu `event.transformer.writable`.
Der `event.transformer` hat auch das `options`-Objekt, das vom `RTCRtpScriptTransform`-Konstruktor übergeben wurde (falls definiert), das verwendet werden kann, um die Quelle des Events zu bestimmen, und somit den spezifischen [`TransformStream`](/de/docs/Web/API/TransformStream), der zur Kette hinzugefügt werden soll.

## Beispiele

Beachten Sie, dass diese Beispiele zeigen, wie `RTCRtpScriptTransform` definiert und verwendet wird.
Der Transformationscode im Worker-Thread wird als Teil eines vollständigeren Beispiels in [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) behandelt.

### Hinzufügen eines Transforms für ausgehende Frames

Dieses Beispiel zeigt, wie Sie Video von der Webcam eines Benutzers über WebRTC streamen und einen WebRTC-Encoded-Transform hinzufügen, um die ausgehenden Streams zu modifizieren.
Der Code geht davon aus, dass es bereits eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` gibt, die mit einem entfernten Peer verbunden ist.

Zuerst erhalten wir einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), indem wir [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um einen Video [`MediaStream`](/de/docs/Web/API/MediaStream) von einem Mediengerät zu bekommen und dann die [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks)-Methode verwenden, um den ersten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im Stream zu erhalten.

Der Track wird zur Peer-Verbindung hinzugefügt, indem [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) aufgerufen wird und gesendet.
Die `addTrack()`-Methode gibt den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) zurück, der zum Senden des Tracks verwendet wird.

```js
// Get Video stream and MediaTrack
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getTracks();
const videoSender = peerConnection.addTrack(track, stream);
```

Ein `RTCRtpScriptTransform` wird dann mit einem Worker-Skript konstruiert, das den Transform definiert, und einem optionalen Objekt, das verwendet werden kann, um beliebige Nachrichten an den Worker zu senden (in diesem Fall haben wir eine `name`-Eigenschaft mit dem Wert "senderTransform" verwendet, um dem Worker mitzuteilen, dass dieser Transform zum ausgehenden Stream hinzugefügt wird).
Wir fügen dann den Transform dem Sender hinzu, indem wir ihn der [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)-Eigenschaft zuweisen.

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Beachten Sie, dass Sie den Transform jederzeit hinzufügen können.
Wenn Sie ihn jedoch sofort nach dem Aufruf von `addTrack()` hinzufügen, erhält der Transform den ersten kodierten Frame, der gesendet wird.

### Hinzufügen eines Transforms für eingehende Frames

Dieses Beispiel zeigt, wie Sie einen WebRTC-Encoded-Transform hinzufügen, um einen eingehenden Stream zu modifizieren.
Der Code geht davon aus, dass es bereits eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` gibt, die mit einem entfernten Peer verbunden ist.

Zuerst fügen wir einen `track`-Event-Handler zur `RTCPeerConnection` hinzu, um das Event zu erfassen, wenn ein neuer Track gestreamt wird.
Innerhalb des Handlers konstruieren wir ein `RTCRtpScriptTransform` und fügen es zu `event.receiver.transform` hinzu (`event.receiver` ist ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)).
Wie im vorherigen Beispiel nimmt der Konstruktor ein Objekt mit einer `name`-Eigenschaft an: hier verwenden wir `receiverTransform` als Wert, um dem Worker mitzuteilen, dass Frames vom Paketierer eingehen.

```js
peerConnection.ontrack = (event) => {
  const worker = new Worker("worker.js");
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    name: "receiverTransform",
  });
  receivedVideo.srcObject = event.streams[0];
};
```

Beachten Sie wiederum, dass Sie den Transform-Stream jederzeit hinzufügen können.
Wenn Sie ihn jedoch im `track`-Event-Handler hinzufügen, wird sichergestellt, dass der Transform-Stream den ersten kodierten Frame für den Track erhält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
