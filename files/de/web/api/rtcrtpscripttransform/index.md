---
title: RTCRtpScriptTransform
slug: Web/API/RTCRtpScriptTransform
l10n:
  sourceCommit: 4799bed9382147f0b0ff642a130a1c12ed59a28e
---

{{APIRef("WebRTC")}}

Die **`RTCRtpScriptTransform`**-Schnittstelle der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um einen [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) (einen {{domxref("TransformStream")}}, der in einem Worker-Thread läuft) in die WebRTC-Sender- und -Empfänger-Pipelines einzufügen.

## Konstruktor

- {{DOMxRef("RTCRtpScriptTransform.RTCRtpScriptTransform", "RTCRtpScriptTransform()")}}
  - : Erstellt eine neue Instanz des `RTCRtpScriptTransform`-Objekts.

## Instanz-Eigenschaften

Keine.

## Instanz-Methoden

Keine.

## Beschreibung

**`RTCRtpScriptTransform`**-Instanzen werden mit einem {{domxref("Worker")}} erstellt, in dem der Transform-Stream-Code ausgeführt wird, zusammen mit einem (optional) `options`-Objekt und einem Array von [übertragbaren Objekten](/de/docs/Web/API/Web_Workers_API/Transferable_objects), die an den Worker übergeben werden.
Sie werden dann in eingehende und ausgehende RTC-Pipelines eingefügt, indem sie den {{domxref("RTCRtpReceiver.transform")}} und {{domxref("RTCRtpSender.transform")}} zugewiesen werden.

Bei der Konstruktion dieses Objekts und wann immer ein codiertes Frame ankommt, wird das {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}} Ereignis auf dem globalen Worker-Objekt ausgelöst.
Die `transformer`-Eigenschaft des Ereignisses ist ein {{DOMxRef("RTCRtpScriptTransformer")}}, das Gegenstück zum Haupthread `RTCRtpScriptTransform`.
Dieser hat `readable` ({{domxref("ReadableStream")}}) und `writable` ({{domxref("WritableStream")}}) Eigenschaften, die vom Haupthread `RTCRtpScriptTransform` geteilt wurden — wo sie nicht öffentlich sind.
Wenn das entsprechende `RTCRtpScriptTransform` mit einem `RTCRtpReceiver` verwendet wird, dann enthält die `readable` Warteschlange eingehende codierte Audio- oder Videoframes vom Paketierer.
Wenn es mit `RTCRtpSender` verwendet wird, enthält `readable` Frames, die von einem Codec kommen.

Der Event-Handler für das Worker-Thread-{{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}}-Ereignis definiert eine [Pipeline-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains).
Diese leitet codierte Frames von `event.transformer.readable`, durch einen {{DOMxRef("TransformStream")}}, der die Transformationsfunktion definiert, bis hin zu `event.transformer.writable`.
Der `event.transformer` hat auch das `options`-Objekt, das vom `RTCRtpScriptTransform` Konstruktor übergegeben wurde (falls definiert) und das verwendet werden kann, um die Quelle des Ereignisses zu bestimmen, und somit den spezifischen {{DOMxRef("TransformStream")}} zur Kette hinzuzufügen.

## Beispiele

Beachten Sie, dass diese Beispiele zeigen, wie `RTCRtpScriptTransform` definiert und verwendet wird.
Der Transformationscode im Worker-Thread ist Teil des ausführlicheren Beispiels in [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms).

### Hinzufügen einer Transformation für ausgehende Frames

Dieses Beispiel zeigt, wie man einen Videostream von der Webcam eines Nutzers über WebRTC streamen kann, indem ein WebRTC Encoded Transform hinzugefügt wird, um die ausgehenden Streams zu modifizieren.
Der Code geht davon aus, dass ein {{domxref("RTCPeerConnection")}} namens `peerConnection` vorhanden ist, der bereits mit einem entfernten Peer verbunden ist.

Zuerst erhalten wir ein {{domxref("MediaStreamTrack")}}, indem wir {{domxref("MediaDevices/getUserMedia", "getUserMedia()")}} verwenden, um einen Video-{{domxref("MediaStream")}} von einem Mediengerät zu erhalten, und dann die Methode {{domxref("MediaStream.getTracks()")}}, um die erste {{domxref("MediaStreamTrack")}} im Stream zu erhalten.

Der Track wird zur Peer-Verbindung mit {{domxref("RTCPeerConnection/addTrack()", "addTrack()")}} hinzugefügt und gesendet.
Die `addTrack()`-Methode gibt den {{domxref("RTCRtpSender")}} zurück, der verwendet wird, um den Track zu senden.

```js
// Holen Sie sich den Videostream und MediaTrack
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getTracks();
const videoSender = peerConnection.addTrack(track, stream);
```

Ein `RTCRtpScriptTransform` wird dann konstruiert, bei dem ein Workerskript verwendet wird, das die Transformation definiert, und ein optionales Objekt, das verwendet werden kann, um beliebige Nachrichten an den Worker zu übermitteln (in diesem Fall haben wir eine `name`-Eigenschaft mit dem Wert "senderTransform" verwendet, um dem Worker mitzuteilen, dass diese Transformation zum ausgehenden Stream hinzugefügt wird).
Wir fügen dann die Transformation dem Sender hinzu, indem wir sie der {{domxref("RTCRtpSender.transform")}} Eigenschaft zuweisen.

```js
// Erstellen eines Workers mit einem TransformStream
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Beachten Sie, dass Sie die Transformation jederzeit hinzufügen können.
Wenn Sie sie jedoch direkt nach dem Aufruf von `addTrack()` hinzufügen, wird die Transformation das erste codierte Frame erhalten, das gesendet wird.

### Hinzufügen einer Transformation für eingehende Frames

Dieses Beispiel zeigt, wie Sie eine WebRTC Encoded Transform hinzufügen, um einen eingehenden Stream zu modifizieren.
Der Code geht davon aus, dass ein {{domxref("RTCPeerConnection")}} namens `peerConnection` vorhanden ist, der bereits mit einem entfernten Peer verbunden ist.

Zuerst fügen wir einen `RTCPeerConnection`-[`track`-Ereignis](/de/docs/Web/API/RTCPeerConnection/track_event)-Handler hinzu, um das Ereignis abzufangen, wenn ein neuer Track gestreamt wird.
Innerhalb des Handlers konstruieren wir ein `RTCRtpScriptTransform` und fügen es `event.receiver.transform` hinzu (`event.receiver` ist ein {{domxref("RTCRtpReceiver")}}).
Wie im vorherigen Beispiel nimmt der Konstruktor ein Objekt mit `name`-Eigenschaft: aber hier verwenden wir `receiverTransform` als Wert, um dem Worker mitzuteilen, dass Frames vom Paketierer hereinkommen.

```js
peerConnection.ontrack = (event) => {
  const worker = new Worker("worker.js");
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    name: "receiverTransform",
  });
  received_video.srcObject = event.streams[0];
};
```

Beachten Sie erneut, dass Sie den Transformationsstream jederzeit hinzufügen können.
Durch das Hinzufügen im `track`-Ereignishandler wird jedoch sichergestellt, dass der Transformationsstream das erste codierte Frame für den Track erhält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- {{domxref("TransformStream")}}
- {{domxref("RTCRtpScriptTransformer")}}
