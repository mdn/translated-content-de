---
title: Verwendung von WebRTC Encoded Transforms
slug: Web/API/WebRTC_API/Using_Encoded_Transforms
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{DefaultAPISidebar("WebRTC")}}

WebRTC Encoded Transforms bieten einen Mechanismus zur Integration einer leistungsstarken [Stream API](/de/docs/Web/API/Streams_API) zur Modifizierung von kodierten Video- und Audiobildern in eingehenden und ausgehenden WebRTC-Pipelines.
Dies ermöglicht Anwendungsfälle wie die End-to-End-Verschlüsselung von kodierten Bildern durch Code von Drittanbietern.

Die API definiert sowohl Objekte für den Hauptthread als auch für den Worker-Bereich.
Die Schnittstelle im Hauptthread ist eine Instanz von [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform), die bei der Erstellung den [`Worker`](/de/docs/Web/API/Worker) angibt, der den Transformationscode implementieren soll.
Die Transformation, die im Worker ausgeführt wird, wird in die eingehende oder ausgehende WebRTC-Pipeline eingefügt, indem `RTCRtpScriptTransform` zu [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) oder [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) hinzugefügt wird.

Ein entsprechendes [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt wird im Worker-Thread erstellt, das über eine [`ReadableStream`](/de/docs/Web/API/ReadableStream) `readable`-Eigenschaft, eine [`WritableStream`](/de/docs/Web/API/WritableStream) `writable`-Eigenschaft und ein `options`-Objekt verfügt, das vom zugehörigen [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Konstruktor übergeben wird.
Kodierte Videobilder ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)) oder Audiobilder ([`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) aus der WebRTC-Pipeline werden zur Verarbeitung in `readable` eingereiht.

Der `RTCRtpScriptTransformer` wird dem Code als `transformer`-Eigenschaft des [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignisses zur Verfügung gestellt, das im globalen Bereich des Workers ausgelöst wird, wann immer ein kodiertes Bild zur Verarbeitung eingereiht wird (und anfangs beim Erstellen des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)).
Der Worker-Code muss einen Handler für das Ereignis implementieren, der kodierte Bilder von `transformer.readable` liest, sie nach Bedarf modifiziert und in derselben Reihenfolge ohne Duplikate zu `transformer.writable` schreibt.

Während die Schnittstelle keine weiteren Einschränkungen zur Implementierung macht, besteht eine natürliche Art, die Bilder zu transformieren, darin, eine [Pipelin-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) zu erstellen, die Bilder, die auf den `event.transformer.readable`-Stream eingereiht werden, durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zum `event.transformer.writable`-Stream sendet.
Wir können die Eigenschaft `event.transformer.options` verwenden, um beliebigen Transformationscode zu konfigurieren, der davon abhängt, ob der Transformator eingehende Bilder vom Paketierer oder ausgehende Bilder von einem Codec einreiht.

Die Schnittstelle [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) bietet auch Methoden, die beim Senden von kodierten Videos verwendet werden können, um den Codec dazu zu bringen, ein "Schlüssel"-Bild zu erzeugen, und beim Empfangen von Videos, um anzufordern, dass ein neues Schlüsselbild gesendet wird.
Diese können nützlich sein, um einem Empfänger zu ermöglichen, das Video schneller zu sehen, wenn er (zum Beispiel) einer Telefonkonferenz beitritt, während Delta-Bilder gesendet werden.

Die folgenden Beispiele bieten konkretere Beispiele dafür, wie das Framework mithilfe einer auf [`TransformStream`](/de/docs/Web/API/TransformStream) basierenden Implementierung zu verwenden ist.

## Testen, ob kodierte Transformations unterstützt werden

Testen Sie, ob [kodierte Transformationen unterstützt werden](#browser-kompatibilität), indem Sie auf die Existenz von [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) (oder [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)) prüfen:

```js
const supportsEncodedTransforms =
  window.RTCRtpSender && "transform" in RTCRtpSender.prototype;
```

## Hinzufügen einer Transformation für ausgehende Bilder

Eine in einem Worker ausgeführte Transformation wird in die ausgehende WebRTC-Pipeline eingefügt, indem ihr entsprechendes `RTCRtpScriptTransform` dem [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) für eine ausgehende Spur zugewiesen wird.

Dieses Beispiel zeigt, wie Sie Video aus der Webcam eines Benutzers über WebRTC streamen und eine WebRTC-kodierte Transformation hinzufügen, um die ausgehenden Streams zu modifizieren.
Der Code geht davon aus, dass es eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` gibt, die bereits mit einem entfernten Peer verbunden ist.

Zuerst erhalten wir ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), indem wir [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um einen Video[`MediaStream`](/de/docs/Web/API/MediaStream) von einem Mediengerät abzurufen, und dann die Methode [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks), um die erste [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im Stream zu erhalten.

Die Spur wird der Peer-Verbindung mit [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) hinzugefügt, wodurch sie mit dem entfernten Peer zu streamen beginnt.
Die Methode `addTrack()` gibt den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) zurück, der für das Senden der Spur verwendet wird.

```js
// Get Video stream and MediaTrack
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getTracks();
const videoSender = peerConnection.addTrack(track, stream);
```

Ein `RTCRtpScriptTransform` wird dann erstellt, das ein Worker-Skript, das die Transformation definiert, und ein optionales Objekt nimmt, das verwendet werden kann, um beliebige Nachrichten an den Worker zu übergeben (in diesem Fall haben wir eine `name`-Eigenschaft mit dem Wert "senderTransform" verwendet, um dem Worker mitzuteilen, dass diese Transformation zum ausgehenden Stream hinzugefügt wird).
Wir fügen die Transformation zur ausgehenden Pipeline hinzu, indem wir sie der Eigenschaft [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) zuweisen.

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Der Abschnitt [Verwendung getrennter Sender- und Empfängertransformationen](#verwendung_getrennter_sender-_und_empfängertransformationen) unten zeigt, wie der `name` im Worker verwendet werden könnte.

Beachten Sie, dass Sie die Transformation jederzeit hinzufügen können, aber indem Sie sie sofort nach dem Aufruf von `addTrack()` hinzufügen, erhält die Transformation das erste kodierte Bild, das gesendet wird.

## Hinzufügen einer Transformation für eingehende Bilder

Eine in einem Worker ausgeführte Transformation wird in die eingehende WebRTC-Pipeline eingefügt, indem ihr entsprechendes `RTCRtpScriptTransform` dem [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) für eine eingehende Spur zugewiesen wird.

Dieses Beispiel zeigt, wie man eine Transformation hinzufügt, um einen eingehenden Stream zu modifizieren.
Der Code geht davon aus, dass es eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` gibt, die bereits mit einem entfernten Peer verbunden ist.

Zuerst fügen wir einen `track`-Event-Handler zu einer `RTCPeerConnection` hinzu, um das Ereignis abzufangen, wenn der Peer beginnt, eine neue Spur zu empfangen.
Innerhalb des Handlers konstruieren wir ein `RTCRtpScriptTransform` und fügen es zu `event.receiver.transform` hinzu (`event.receiver` ist ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)).
Wie im vorherigen Abschnitt nimmt der Konstruktor ein Objekt mit der `name`-Eigenschaft auf, aber hier verwenden wir `receiverTransform` als Wert, um dem Worker mitzuteilen, dass Bilder eingehen.

```js
peerConnection.ontrack = (event) => {
  const worker = new Worker("worker.js");
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    name: "receiverTransform",
  });
  received_video.srcObject = event.streams[0];
};
```

Beachten Sie erneut, dass Sie den Transformationsstrom jederzeit hinzufügen können.
Indem Sie ihn jedoch im `track`-Event-Handler hinzufügen, wird sichergestellt, dass der Transformationsstrom das erste kodierte Bild für die Spur erhält.

## Implementierung des Workers

Das Worker-Skript muss einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis implementieren, der eine [Pipeline-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) erstellt, die den `event.transformer.readable` ([`ReadableStream`](/de/docs/Web/API/ReadableStream))-Stream durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zum `event.transformer.writable` ([`WritableStream`](/de/docs/Web/API/WritableStream))-Stream leitet.

Ein Worker könnte das Transformieren eingehender oder ausgehender kodierter Bilder oder beides unterstützen, und die Transformation könnte hart codiert oder zur Laufzeit konfiguriert werden, indem Informationen von der Webanwendung übergeben werden.

### Grundlegende WebRTC kodierte Transformation

Das untenstehende Beispiel zeigt eine grundlegende WebRTC-kodierte Transformation, die alle Bits in eingereihten Bildern negiert.
Es werden keine Optionen verwendet oder benötigt, die vom Haupt-Thread übergeben werden, da derselbe Algorithmus in der Sender-Pipeline verwendet werden kann, um die Bits zu negieren, und in der Empfänger-Pipeline, um sie wiederherzustellen.

Der Code implementiert einen Event-Handler für das `rtctransform`-Ereignis.
Dieser konstruiert einen [`TransformStream`](/de/docs/Web/API/TransformStream), leitet dann durch ihn unter Verwendung von [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough), und leitet schließlich zu `event.transformer.writable` unter Verwendung von [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo).

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

Die Implementierung der WebRTC-kodierten Transformation ist ähnlich wie ein "generischer" [`TransformStream`](/de/docs/Web/API/TransformStream), jedoch mit einigen wichtigen Unterschieden.
Wie der generische Stream nimmt sein [Konstruktor](/de/docs/Web/API/TransformStream/TransformStream#parameters) ein Objekt auf, das eine _optionale_ [`start()`](/de/docs/Web/API/TransformStream/TransformStream#startcontroller)-Methode definiert, die beim Konstruieren aufgerufen wird, eine [`flush()`](/de/docs/Web/API/TransformStream/TransformStream#flushcontroller)-Methode, die aufgerufen wird, wenn der Stream geschlossen werden soll, und eine [`transform()`](/de/docs/Web/API/TransformStream/TransformStream#transformchunk_controller)-Methode, die jedes Mal aufgerufen wird, wenn es einen zu verarbeitenden Chunk gibt.
Anders als beim generischen Konstruktor werden alle `writableStrategy`- oder `readableStrategy`-Eigenschaften, die im Konstruktor-Objekt übergeben werden, ignoriert, und die Wartestrategie wird vollständig vom Benutzeragenten verwaltet.

Die `transform()`-Methode unterscheidet sich auch darin, dass ihr entweder ein [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) übergeben wird, anstatt eines generischen "Chunks".
Der hier gezeigte Code für die Methode ist nicht bemerkenswert, abgesehen davon, dass er zeigt, wie man das Bild in eine Form umwandelt, in der man es modifizieren und danach im Stream einreihen kann.

### Verwendung getrennter Sender- und Empfängertransformationen

Das vorherige Beispiel funktioniert, wenn die Transformationsfunktion beim Senden und Empfangen dieselbe ist, aber in vielen Fällen werden die Algorithmen unterschiedlich sein.
Sie könnten separate Worker-Skripte für den Sender und Empfänger verwenden oder beide Fälle in einem Worker behandeln, wie unten gezeigt.

Wenn der Worker sowohl für Sender als auch Empfänger verwendet wird, muss er wissen, ob das aktuelle kodierte Bild aus einem Codec ausgehend oder von einem Paketierer eingehend ist.
Diese Information kann mit der zweiten Option im [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) angegeben werden.
Zum Beispiel können wir einen separaten `RTCRtpScriptTransform` für den Sender und Empfänger definieren, dabei denselben Worker verwenden, und ein Optionen-Objekt mit der Eigenschaft `name` übergeben, das angibt, ob die Transformation im Sender oder Empfänger verwendet wird (wie in den vorherigen Abschnitten oben gezeigt).
Die Informationen sind dann im Worker in `event.transformer.options` verfügbar.

In diesem Beispiel implementieren wir den `onrtctransform`-Event-Handler im globalen dedizierten Worker-Bereichsobjekt.
Der Wert der `name`-Eigenschaft wird verwendet, um zu bestimmen, welchen `TransformStream` zu konstruieren ist (die tatsächlichen Konstruktor-Methoden werden nicht gezeigt).

```js
// Code to instantiate transform and attach them to sender/receiver pipelines.
onrtctransform = (event) => {
  let transform;
  if (event.transformer.options.name === "senderTransform")
    transform = createSenderTransform(); // returns a TransformStream
  else if (event.transformer.options.name === "receiverTransform")
    transform = createReceiverTransform(); // returns a TransformStream
  else return;
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
};
```

Beachten Sie, dass der Code zum Erstellen der Pipeline-Kette derselbe ist wie im vorherigen Beispiel.

### Laufzeitkommunikation mit der Transformation

Der [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) ermöglicht es, Optionen und Übertragungsobjekte an den Worker zu übergeben.
Im vorherigen Beispiel haben wir statische Informationen übergeben, aber manchmal möchten Sie den Transformationsalgorithmus im Worker zur Laufzeit ändern oder Informationen vom Worker zurückerhalten.
Zum Beispiel könnte eine WebRTC-Telefonkonferenz die Verschlüsselung unterstützt, einen neuen Schlüssel zum Algorithmus hinzufügen müssen, der von der Transformation verwendet wird.

Obwohl es möglich ist, Informationen zwischen dem Worker, der den Transformations-Code ausführt, und dem Haupt-Thread mit [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) zu teilen, ist es im Allgemeinen einfacher, einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) als eine Option im [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) zu teilen, da der Kanal-Kontext dann direkt in `event.transformer.options` verfügbar ist, wenn Sie ein neues kodiertes Bild verarbeiten.

Der Code unten erstellt einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) und [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) seinen zweiten Port an den Worker.
Der Haupt-Thread und die Transformation können anschließend über die ersten und zweiten Ports miteinander kommunizieren.

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

Im Worker ist der Port als `event.transformer.options.port` verfügbar.
Der Code unten zeigt, wie Sie auf das `message`-Ereignis des Ports lauschen, um Nachrichten vom Haupt-Thread zu erhalten.
Sie können den Port auch verwenden, um Nachrichten zurück an den Haupt-Thread zu senden.

```js
event.transformer.options.port.onmessage = (event) => {
  // The message payload is in 'event.data';
  console.log(event.data);
};
```

### Auslösen eines Schlüsselbildes

Rohvideo wird selten gesendet oder gespeichert, da es viel Platz und Bandbreite benötigt, um jedes Bild als vollständiges Bild darzustellen.
Stattdessen erzeugen Codecs periodisch ein "Schlüsselbild", das genügend Informationen enthält, um ein vollständiges Bild zu konstruieren, und senden zwischen den Schlüsselbildern "Delta-Bilder", die nur die Änderungen seit dem letzten Delta-Bild enthalten.
Obwohl dies viel effizienter ist als das Senden von Rohvideo, bedeutet es, dass zum Anzeigen des mit einem bestimmten Delta-Bild verbundenen Bildes das letzte Schlüsselbild und alle anschließenden Delta-Bilder benötigt werden.

Dies kann zu einer Verzögerung für neue Benutzer führen, die einer WebRTC-Konferenzanwendung beitreten, da sie das Video nicht anzeigen können, bis sie ihr erstes Schlüsselbild erhalten haben.
Ähnlich würden die Empfänger bei Verwendung einer kodierten Transformation zur Verschlüsselung von Bildern das Video erst anzeigen können, wenn sie das erste mit ihrem Schlüssel verschlüsselte Schlüsselbild erhalten haben.

Um sicherzustellen, dass bei Bedarf so schnell wie möglich ein neues Schlüsselbild gesendet werden kann, verfügt das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt in `event.transformer` über zwei Methoden: [`RTCRtpScriptTransformer.generateKeyFrame()`](/de/docs/Web/API/RTCRtpScriptTransformer/generateKeyFrame), die den Codec dazu veranlasst, ein Schlüsselbild zu erzeugen, und [`RTCRtpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest), die ein Empfänger verwenden kann, um ein Schlüsselbild vom Sender anzufordern.

Das Beispiel unten zeigt, wie der Haupt-Thread einen Verschlüsselungsschlüssel an eine Sender-Transformation übergibt und den Codec dazu veranlasst, ein Schlüsselbild zu erzeugen.
Beachten Sie, dass der Haupt-Thread keinen direkten Zugriff auf das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt hat, daher muss er den Schlüssel und die Beschränkungskennzeichnung ("rid") an den Worker übergeben (die "rid" ist eine Stream-ID, die den Encoder angibt, der das Schlüsselbild generieren muss).
Hier tun wir das mit einem `MessageChannel`, wobei dasselbe Muster wie in den vorherigen Abschnitten verwendet wird.
Der Code geht davon aus, dass bereits eine Peer-Verbindung besteht und `videoSender` ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) ist.

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

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Event-Handler im Worker erhält den Port und verwendet ihn, um auf `message`-Ereignisse vom Haupt-Thread zu hören.
Wenn ein Ereignis empfangen wird, erhält es die `rid` und `key` und ruft dann `generateKeyFrame()` auf.

```js
event.transformer.options.port.onmessage = (event) => {
  const { rid, key } = event.data;
  // key is used by the transformer to encrypt frames (not shown)

  // Get codec to generate a new key frame using the rid
  // Here 'rcEvent' is the rtctransform event.
  rcEvent.transformer.generateKeyFrame(rid);
};
```

Der Code für einen Empfänger, um ein neues Schlüsselbild anzufordern, wäre fast identisch, mit Ausnahme dessen, dass "rid" nicht angegeben wird.
Hier ist der Code nur für den Port-Message-Handler:

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
