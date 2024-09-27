---
title: Verwendung von WebRTC Encoded Transforms
slug: Web/API/WebRTC_API/Using_Encoded_Transforms
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{DefaultAPISidebar("WebRTC")}}

WebRTC Encoded Transforms bieten einen Mechanismus zur Integration einer leistungsstarken [Stream-API](/de/docs/Web/API/Streams_API) zur Modifikation kodierter Video- und Audio-Frames in die eingehenden und ausgehenden WebRTC-Pipelines. Dies ermöglicht Anwendungsfälle wie die Ende-zu-Ende-Verschlüsselung von kodierten Frames durch Drittanbieter-Code.

Die API definiert Objekte sowohl für den Haupt-Thread als auch für Worker-Seiten. Die Haupt-Thread-Schnittstelle ist eine [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Instanz, die bei der Konstruktion den [`Worker`](/de/docs/Web/API/Worker) spezifiziert, der den Transformer-Code implementieren soll. Der im Worker laufende Transformator wird in die eingehende oder ausgehende WebRTC-Pipeline eingefügt, indem das `RTCRtpScriptTransform` dem [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) oder [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) hinzugefügt wird.

Ein entsprechendes [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt wird im Worker-Thread erstellt, das eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Eigenschaft `readable`, eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Eigenschaft `writable` und ein `options`-Objekt enthält, das vom zugehörigen [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Konstruktor übergeben wird. Kodierte Video-Frames ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)) oder Audio-Frames ([`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) aus der WebRTC-Pipeline werden zur Verarbeitung in `readable` eingereiht.

Der `RTCRtpScriptTransformer` wird dem Code als `transformer`-Eigenschaft des [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignisses zur Verfügung gestellt, das im worker global scope ausgelöst wird, wann immer ein kodierter Frame zur Verarbeitung eingereiht wird (und initial bei der Konstruktion des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)). Der Worker-Code muss einen Ereignishandler implementieren, der kodierte Frames aus `transformer.readable` liest, sie bei Bedarf ändert und sie in der gleichen Reihenfolge und ohne Duplizierung nach `transformer.writable` schreibt.

Obwohl die Schnittstelle keine weiteren Einschränkungen für die Implementierung vorgibt, ist ein natürlicher Weg, die Frames zu transformieren, eine [pipe chain](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) zu erstellen, die die eingereihten Frames im `event.transformer.readable`-Stream durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) an den `event.transformer.writable`-Stream sendet. Wir können die `event.transformer.options`-Eigenschaft verwenden, um Transformationscode zu konfigurieren, der davon abhängt, ob der Transformator eingehende Frames vom Paketierer oder ausgehende Frames von einem Codec einreiht.

Die [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Schnittstelle bietet auch Methoden, die verwendet werden können, um beim Senden kodierter Videos den Codec dazu zu bringen, einen "Schlüssel"-Frame zu generieren, und beim Empfangen von Video einen neuen Schlüssel-Frame anzufordern. Diese können nützlich sein, um einem Empfänger das schnellere Anzeigen des Videos zu ermöglichen, wenn (zum Beispiel) er sich einem Konferenzanruf anschließt, während Delta-Frames gesendet werden.

Die folgenden Beispiele bieten detailliertere Beispiele zur Verwendung des Frameworks mit einer Implementierung basierend auf [`TransformStream`](/de/docs/Web/API/TransformStream).

## Überprüfen, ob codierte Transformationen unterstützt werden

Überprüfen, ob [codierte Transformationen unterstützt werden](#browser-kompatibilität), indem Sie auf das Vorhandensein von [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) (oder [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)) testen:

```js
const supportsEncodedTransforms =
  window.RTCRtpSender && "transform" in RTCRtpSender.prototype;
```

## Hinzufügen einer Transformation für ausgehende Frames

Eine Transformation, die in einem Worker läuft, wird in die ausgehende WebRTC-Pipeline eingefügt, indem ihr entsprechendes `RTCRtpScriptTransform` dem [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) für eine ausgehende Spur zugewiesen wird.

Dieses Beispiel zeigt, wie Sie Videos vom Webcam eines Nutzers über WebRTC streamen und dabei eine WebRTC-kodierte Transformation hinzufügen, um die ausgehenden Streams zu modifizieren. Der Code geht davon aus, dass eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` bereits mit einem entfernten Peer verbunden ist.

Zuerst holen wir uns eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), indem wir [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um einen Video-`MediaStream` von einem Mediengerät zu erhalten, und dann die Methode [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks), um die erste `MediaStreamTrack` im Stream zu erhalten.

Der Track wird der Peer-Verbindung mit [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) hinzugefügt, wodurch das Streaming zum entfernten Peer gestartet wird. Die Methode `addTrack()` gibt den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) zurück, der zur Übertragung des Tracks verwendet wird.

```js
// Get Video stream and MediaTrack
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getTracks();
const videoSender = peerConnection.addTrack(track, stream);
```

Ein `RTCRtpScriptTransform` wird dann unter Verwendung eines Worker-Skripts konstruiert, das die Transformation definiert, und eines optionalen Objekts, das verwendet werden kann, um beliebige Nachrichten an den Worker zu übermitteln (in diesem Fall haben wir eine `name`-Eigenschaft mit dem Wert "senderTransform" verwendet, um dem Worker mitzuteilen, dass diese Transformation zum ausgehenden Stream hinzugefügt wird). Wir fügen die Transformation der ausgehenden Pipeline hinzu, indem wir sie der [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)-Eigenschaft zuweisen.

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Der Abschnitt [Verwendung getrennter Sender- und Empfänger-Transformationen](#verwendung_getrennter_sender-_und_empfänger-transformationen) unten zeigt, wie der `name` in einem Worker verwendet werden könnte.

Beachten Sie, dass Sie die Transformation jederzeit hinzufügen können. Indem Sie sie jedoch direkt nach dem Aufruf von `addTrack()` hinzufügen, erhält die Transformation den ersten kodierten Frame, der gesendet wird.

## Hinzufügen einer Transformation für eingehende Frames

Eine Transformation, die in einem Worker läuft, wird in die eingehende WebRTC-Pipeline eingefügt, indem ihr entsprechendes `RTCRtpScriptTransform` dem [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) für eine eingehende Spur zugewiesen wird.

Dieses Beispiel zeigt, wie Sie eine Transformation hinzufügen, um einen eingehenden Stream zu modifizieren. Der Code geht davon aus, dass eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` bereits mit einem entfernten Peer verbunden ist.

Zuerst fügen wir einen `RTCPeerConnection` [`track`-Ereignis](/de/docs/Web/API/RTCPeerConnection/track_event)-Handler hinzu, um das Ereignis abzufangen, wenn der Peer beginnt, eine neue Spur zu empfangen. Innerhalb des Handlers konstruieren wir ein `RTCRtpScriptTransform` und fügen es zu `event.receiver.transform` hinzu (`event.receiver` ist ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)). Wie im vorherigen Abschnitt nimmt der Konstruktor ein Objekt mit der `name`-Eigenschaft, aber hier verwenden wir `receiverTransform` als Wert, um dem Worker mitzuteilen, dass Frames eingehen.

```js
peerConnection.ontrack = (event) => {
  const worker = new Worker("worker.js");
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    name: "receiverTransform",
  });
  received_video.srcObject = event.streams[0];
};
```

Beachten Sie erneut, dass Sie den Transformations-Stream jederzeit hinzufügen können. Durch das Hinzufügen im `track`-Ereignis-Handler wird jedoch sichergestellt, dass der Transformations-Stream den ersten kodierten Frame für die Spur erhält.

## Worker-Implementierung

Das Worker-Skript muss einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis implementieren und eine [pipe chain](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) erstellen, die den `event.transformer.readable`-Stream ([`ReadableStream`](/de/docs/Web/API/ReadableStream)) durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) an den `event.transformer.writable`-Stream ([`WritableStream`](/de/docs/Web/API/WritableStream)) leitet.

Ein Worker kann das Transformieren von ein- oder ausgehenden kodierten Frames oder beides unterstützen, und die Transformation kann hart kodiert oder zur Laufzeit mit Informationen konfiguriert werden, die von der Webanwendung übermittelt werden.

### Einfache WebRTC-kodierte Transformation

Das folgende Beispiel zeigt eine einfache WebRTC-kodierte Transformation, die alle Bits in eingereihten Frames negiert. Es verwendet keine Optionen, die vom Haupt-Thread übermittelt werden, da derselbe Algorithmus sowohl in der Sender-Pipeline zum negieren der Bits als auch in der Empfänger-Pipeline zur Wiederherstellung der Bits verwendet werden kann.

Der Code implementiert einen Ereignishandler für das `rtctransform`-Ereignis. Dieser konstruiert einen [`TransformStream`](/de/docs/Web/API/TransformStream), leitet dann durch ihn hindurch mit [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) und leitet schließlich zu `event.transformer.writable` mit [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo).

```js
addEventListener("rtctransform", (event) => {
  const transform = new TransformStream({
    start() {}, // Called on startup.
    flush() {}, // Called when the stream is about to be closed.
    async transform(encodedFrame, controller) {
      // Reconstruct the original frame.
      const view = new DataView(encodedFrame.data);

      // Construct a new buffer
      const newData = new ArrayBuffer(encodedFrame.data.byteLength);
      const newView = new DataView(newData);

      // Negate all bits in the incoming frame
      for (let i = 0; i < encodedFrame.data.byteLength; ++i) {
        newView.setInt8(i, ~view.getInt8(i));
      }

      encodedFrame.data = newData;
      controller.enqueue(encodedFrame);
    },
  });
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Die Implementierung der WebRTC-kodierten Transformation ist ähnlich einer "generischen" [`TransformStream`](/de/docs/Web/API/TransformStream), weist aber einige wichtige Unterschiede auf. Wie der generische Stream nimmt sein [Konstruktor](/de/docs/Web/API/TransformStream/TransformStream#parameters) ein Objekt, das eine _optionale_ [`start()`](/de/docs/Web/API/TransformStream/TransformStream#startcontroller)-Methode, die bei der Konstruktion aufgerufen wird, eine [`flush()`](/de/docs/Web/API/TransformStream/TransformStream#flushcontroller)-Methode, die aufgerufen wird, wenn der Stream geschlossen werden soll, und eine [`transform()`](/de/docs/Web/API/TransformStream/TransformStream#transformchunk_controller)-Methode, die immer dann aufgerufen wird, wenn es ein Chunk zu verarbeiten gibt, definiert. Im Gegensatz zum generischen Konstruktor werden alle `writableStrategy`- oder `readableStrategy`-Eigenschaften, die im Konstruktor-Objekt übergeben werden, ignoriert, und die Warteschlangenstrategie wird vollständig vom Benutzer-Agenten verwaltet.

Die `transform()`-Methode unterscheidet sich auch darin, dass sie entweder ein [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) empfängt, anstelle eines generischen "Chunks". Der hier gezeigte tatsächliche Code für die Methode ist nicht bemerkenswert, außer dass er demonstriert, wie man den Frame in eine Form umwandelt, in der man ihn modifizieren und anschließend im Stream einreihen kann.

### Verwendung getrennter Sender- und Empfänger-Transformationen

Das vorherige Beispiel funktioniert, wenn die Transformationsfunktion beim Senden und Empfangen identisch ist, aber in vielen Fällen werden die Algorithmen unterschiedlich sein. Sie könnten separate Worker-Skripte für Sender und Empfänger verwenden oder beide Fälle in einem Worker behandeln, wie unten gezeigt.

Wenn der Worker sowohl für Sender als auch Empfänger verwendet wird, muss er wissen, ob der aktuelle kodierte Frame aus einem Codec kommt oder vom Paketierer kommt. Diese Information kann mit der zweiten Option im [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) spezifiziert werden. Zum Beispiel können wir ein separates `RTCRtpScriptTransform` für den Sender und Empfänger definieren, den gleichen Worker verwenden und ein Options-Objekt mit der Eigenschaft `name` übergeben, welches angibt, ob die Transformation im Sender oder im Empfänger verwendet wird (wie in den vorhergehenden Abschnitten gezeigt). Diese Information ist dann im Worker in `event.transformer.options` verfügbar.

In diesem Beispiel implementieren wir den `onrtctransform`-Ereignishandler im globalen dedizierten Worker-Scope-Objekt. Der Wert der `name`-Eigenschaft wird verwendet, um zu bestimmen, welcher `TransformStream` konstruiert werden soll (die eigentlichen Konstruktormethoden werden hier nicht gezeigt).

```js
// Code to instantiate transform and attach them to sender/receiver pipelines.
onrtctransform = (event) => {
  let transform;
  if (event.transformer.options.name == "senderTransform")
    transform = createSenderTransform(); // returns a TransformStream
  else if (event.transformer.options.name == "receiverTransform")
    transform = createReceiverTransform(); // returns a TransformStream
  else return;
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
};
```

Beachten Sie, dass der Code zur Erstellung der pipe chain derselbe ist wie im vorherigen Beispiel.

### Kommunikation zur Laufzeit mit der Transformation

Der [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) ermöglicht es, Optionen und Übertragungsobjekte an den Worker zu übergeben. Im vorherigen Beispiel haben wir statische Informationen übermittelt, aber manchmal möchten Sie den Transformationsalgorithmus im Worker zur Laufzeit ändern oder Informationen vom Worker zurückerhalten. Zum Beispiel könnte ein WebRTC-Konferenzanruf, der Verschlüsselung unterstützt, einen neuen Schlüssel zu dem im Transformationsalgorithmus verwendeten Algorithmus hinzufügen müssen.

Während es möglich ist, Informationen zwischen dem Worker, der den Transformationscode ausführt, und dem Haupt-Thread unter Verwendung von [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) zu teilen, ist es im Allgemeinen einfacher, einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) als Option im [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) zu teilen, weil dann der Kontext des Kanals direkt im `event.transformer.options` verfügbar ist, wenn Sie einen neuen kodierten Frame behandeln.

Der folgende Code erstellt einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) und [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) seinen zweiten Port an den Worker. Der Haupt-Thread und die Transformation können anschließend über die ersten und zweiten Ports kommunizieren.

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");

// Create a channel
// Pass channel.port2 to the transform as a constructor option
// and also transfer it to the worker
const channel = new MessageChannel();
const transform = new RTCRtpScriptTransform(
  worker,
  { purpose: "encrypt", port: channel.port2 },
  [channel.port2],
);

// Use the port1 to send a string.
// (we can send and transfer basic types/objects).
channel.port1.postMessage("A message for the worker");
channel.port1.start();
```

Im Worker ist der Port als `event.transformer.options.port` verfügbar. Der folgende Code zeigt, wie Sie auf das `message`-Ereignis des Ports hören könnten, um Nachrichten vom Haupt-Thread zu erhalten. Sie können den Port auch verwenden, um Nachrichten zurück an den Haupt-Thread zu senden.

```js
event.transformer.options.port.onmessage = (event) => {
  // The message payload is in 'event.data';
  console.log(event.data);
};
```

### Auslösen eines Schlüssel-Frames

Unkodiertes Video wird selten gesendet oder gespeichert, da es viel Platz und Bandbreite benötigt, um jedes Frame als vollständiges Bild zu repräsentieren. Stattdessen generieren Codecs periodisch einen "Schlüssel"-Frame, der genügend Informationen enthält, um ein vollständiges Bild zu konstruieren, und zwischen den Schlüssel-Frames werden "Delta-Frames" gesendet, die nur die Änderungen seit dem letzten Delta-Frame beinhalten. Während dies viel effizienter ist als das Senden von unkodiertem Video, bedeutet es auch, dass, um das Bild zu einem bestimmten Delta-Frame anzuzeigen, Sie den letzten Schlüssel-Frame und alle nachfolgenden Delta-Frames benötigen.

Dies kann eine Verzögerung für neue Benutzer bei einem WebRTC-Konferenz-Anruf verursachen, da sie das Video erst anzeigen können, nachdem sie ihren ersten Schlüssel-Frame erhalten haben. Ebenso, wenn eine kodierte Transformation verwendet wurde, um Frames zu verschlüsseln, wäre der Empfänger nicht in der Lage, das Video anzuzeigen, bis er seinen ersten Schlüssel-Frame erhält, der mit seinem Schlüssel verschlüsselt wurde.

Um sicherzustellen, dass ein neuer Schlüssel-Frame so früh wie möglich gesendet werden kann, wenn er benötigt wird, hat das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt in `event.transformer` zwei Methoden: [`RTCRtpScriptTransformer.generateKeyFrame()`](/de/docs/Web/API/RTCRtpScriptTransformer/generateKeyFrame), welche den Codec dazu veranlasst, einen Schlüssel-Frame zu generieren, und [`RTCRtpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest), die ein Empfänger verwenden kann, um einen Schlüssel-Frame vom Sender anzufordern.

Das untenstehende Beispiel zeigt, wie der Haupt-Thread einen Verschlüsselungsschlüssel an eine Sender-Transformation übergeben und den Codec veranlassen kann, einen Schlüssel-Frame zu generieren. Beachten Sie, dass der Haupt-Thread keinen direkten Zugriff auf das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt hat, daher muss er den Schlüssel und die Restriktionskennung ("rid") an den Worker übermitteln (die "rid" ist eine Stream-ID, die den Encoder angibt, der den Schlüssel-Frame generieren muss). Hier tun wir das mit einem `MessageChannel`, unter Verwendung des gleichen Musters wie im vorherigen Abschnitt. Der Code geht davon aus, dass bereits eine Peer-Verbindung besteht und dass `videoSender` ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) ist.

```js
const worker = new Worker("worker.js");
const channel = new MessageChannel();

videoSender.transform = new RTCRtpScriptTransform(
  worker,
  { name: "senderTransform", port: channel.port2 },
  [channel.port2],
);

// Post rid and new key to the sender
channel.port1.start();
channel.port1.postMessage({
  rid: "1",
  key: "93ae0927a4f8e527f1gce6d10bc6ab6c",
});
```

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignishandler im Worker erhält den Port und verwendet ihn, um auf `message`-Ereignisse vom Haupt-Thread zu hören. Wenn ein Ereignis empfangen wird, erhält er die `rid` und `key`-Werte und ruft anschließend `generateKeyFrame()` auf.

```js
event.transformer.options.port.onmessage = (event) => {
  const { rid, key } = event.data;
  // key is used by the transformer to encrypt frames (not shown)

  // Get codec to generate a new key frame using the rid
  // Here 'rcevent' is the rtctransform event.
  rcevent.transformer.generateKeyFrame(rid);
};
```

Der Code für einen Empfänger, um einen neuen Schlüssel-Frame anzufordern, wäre fast identisch, mit Ausnahme, dass die "rid" nicht angegeben wird. Hier ist der Code nur für den Port-Nachrichten-Handler:

```js
event.transformer.options.port.onmessage = (event) => {
  const { key } = event.data;
  // key is used by the transformer to decrypt frames (not shown)

  // Request sender to emit a key frame.
  transformer.sendKeyFrameRequest();
};
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)
- [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)
- [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)
- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignis
- [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)
- [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)
