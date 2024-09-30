---
title: Verwendung von WebRTC Encoded Transforms
slug: Web/API/WebRTC_API/Using_Encoded_Transforms
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{DefaultAPISidebar("WebRTC")}}

WebRTC Encoded Transforms bieten einen Mechanismus, um eine hochleistungsfähige [Stream API](/de/docs/Web/API/Streams_API) in die eingehenden und ausgehenden WebRTC-Pipelines einzufügen, um kodierte Video- und Audioframes zu modifizieren.
Dies ermöglicht Anwendungsfälle wie die End-to-End-Verschlüsselung kodierter Frames durch Drittpartei-Code.

Die API definiert sowohl Objekte für den Hauptthread als auch für Arbeiter.
Das Schnittstellenobjekt für den Hauptthread ist eine [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Instanz, die bei der Konstruktion den [`Worker`](/de/docs/Web/API/Worker) angibt, der den Transformatorcode implementieren soll.
Der im Worker laufende Transformator wird in die eingehende oder ausgehende WebRTC-Pipeline eingefügt, indem `RTCRtpScriptTransform` zu [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) oder [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) hinzugefügt wird.

Ein entsprechendes [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt wird im Arbeitsthread erstellt, welches eine [`ReadableStream`](/de/docs/Web/API/ReadableStream) `readable` Eigenschaft, eine [`WritableStream`](/de/docs/Web/API/WritableStream) `writable` Eigenschaft sowie ein `options` Objekt, das vom zugehörigen [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Konstruktor übergeben wird, hat.
Kodierte Video- ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)) oder Audioframes ([`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) aus der WebRTC-Pipeline werden in `readable` zur Verarbeitung eingereiht.

Der `RTCRtpScriptTransformer` wird dem Code als `transformer`-Eigenschaft des [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignisses zur Verfügung gestellt, das im globalen Scope des Arbeiters ausgelöst wird, wann immer ein kodierter Frame zur Verarbeitung eingereiht wird (und anfänglich bei der Konstruktion der entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)).
Der Arbeiter-Code muss einen Ereignis-Handler implementieren, der kodierte Frames von `transformer.readable` liest, sie bei Bedarf modifiziert und sie in derselben Reihenfolge und ohne Duplikationen nach `transformer.writable` schreibt.

Obwohl die Schnittstelle keine weiteren Einschränkungen für die Implementierung auferlegt, ist eine natürliche Möglichkeit, die Frames zu transformieren, eine [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) zu erstellen, die die in `event.transformer.readable` eingereihten Frames durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zum `event.transformer.writable`-Stream sendet.
Wir können die `event.transformer.options`-Eigenschaft verwenden, um jeglichen Transformationscode zu konfigurieren, der davon abhängt, ob der Transformator eingehende Frames vom Paketierer oder ausgehende Frames von einem Codec einreiht.

Schnittstelle [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) bietet auch Methoden, die verwendet werden können, wenn kodiertes Video gesendet wird, um den Codec dazu zu bringen, einen "Key"-Frame zu generieren, und wenn Video empfangen wird, um zu verlangen, dass ein neuer Key-Frame gesendet wird.
Diese können nützlich sein, um einem Empfänger zu ermöglichen, das Video schneller anzusehen, wenn er beispielsweise einem Konferenzanruf beitritt, während Delta-Frames gesendet werden.

Die folgenden Beispiele bieten spezifischere Beispiele, wie das Framework mit einer Implementierung basierend auf [`TransformStream`](/de/docs/Web/API/TransformStream) verwendet werden kann.

## Überprüfen, ob kodierte Transforms unterstützt werden

Überprüfen Sie, ob [kodierte Transforms unterstützt werden](#browser-kompatibilität), indem Sie das Vorhandensein von [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) (oder [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)) überprüfen:

```js
const supportsEncodedTransforms =
  window.RTCRtpSender && "transform" in RTCRtpSender.prototype;
```

## Hinzufügen eines Transforms für ausgehende Frames

Ein Transform, der in einem Worker ausgeführt wird, wird in die ausgehende WebRTC-Pipeline eingefügt, indem sein entsprechendes `RTCRtpScriptTransform` dem [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) für einen ausgehenden Track zugewiesen wird.

Dieses Beispiel zeigt, wie Sie möglicherweise Video von der Webcam eines Nutzers über WebRTC streamen und einen WebRTC-kodierten Transformator hinzufügen, um die ausgehenden Streams zu modifizieren.
Der Code geht davon aus, dass es eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` gibt, die bereits mit einem entfernten Peer verbunden ist.

Zuerst erhalten wir einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), indem wir [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um einen Video-`MediaStream` von einem Mediengerät zu bekommen, und dann die [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks)-Methode verwenden, um den ersten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im Stream zu erhalten.

Der Track wird mittels [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) zur Peer-Verbindung hinzugefügt, wodurch er an den entfernten Peer zu streamen beginnt.
Die `addTrack()`-Methode gibt den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) zurück, der verwendet wird, um den Track zu senden.

```js
// Get Video stream and MediaTrack
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getTracks();
const videoSender = peerConnection.addTrack(track, stream);
```

Ein `RTCRtpScriptTransform` wird dann konstruiert, indem ein Worker-Skript, das den Transform definiert, und ein optionales Objekt, das verwendet werden kann, um beliebige Nachrichten an den Worker zu übermitteln, übergeben wird (in diesem Fall haben wir eine `name`-Eigenschaft mit dem Wert "senderTransform" verwendet, um dem Worker mitzuteilen, dass dieser Transform zum ausgehenden Stream hinzugefügt wird).
Wir fügen den Transform der ausgehenden Pipeline hinzu, indem wir ihn der [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)-Eigenschaft zuweisen.

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Der Abschnitt [Verwendung separater Sender- und Empfängertransforms](#verwendung_getrennter_sender-_und_empfängertransforms) weiter unten zeigt, wie der `name` im Worker verwendet werden könnte.

Beachten Sie, dass Sie den Transform jederzeit hinzufügen können, aber indem Sie ihn unmittelbar nach dem Aufruf von `addTrack()` hinzufügen, bekommt der Transform den ersten kodierten Frame, der gesendet wird.

## Hinzufügen eines Transforms für eingehende Frames

Ein Transform, der in einem Worker läuft, wird in die eingehende WebRTC-Pipeline eingefügt, indem sein entsprechendes `RTCRtpScriptTransform` dem [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) für einen eingehenden Track zugewiesen wird.

Dieses Beispiel zeigt, wie Sie einen Transform hinzufügen, um einen eingehenden Stream zu modifizieren.
Der Code nimmt an, dass es eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` gibt, die bereits mit einem entfernten Peer verbunden ist.

Zuerst fügen wir einen `RTCPeerConnection` [`track`-Event](/de/docs/Web/API/RTCPeerConnection/track_event)-Handler hinzu, um das Ereignis abzufangen, wenn der Peer beginnt, einen neuen Track zu empfangen.
Innerhalb des Handlers konstruieren wir ein `RTCRtpScriptTransform` und fügen es `event.receiver.transform` hinzu (`event.receiver` ist ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)).
Wie im vorherigen Abschnitt nimmt der Konstruktor ein Objekt mit einer `name`-Eigenschaft, hier verwenden wir jedoch `receiverTransform` als den Wert, um dem Worker mitzuteilen, dass Frames eingehend sind.

```js
peerConnection.ontrack = (event) => {
  const worker = new Worker("worker.js");
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    name: "receiverTransform",
  });
  received_video.srcObject = event.streams[0];
};
```

Beachten Sie erneut, dass Sie den Transform-Stream jederzeit hinzufügen können. Durch das Hinzufügen im `track`-Event-Handler wird jedoch sichergestellt, dass der Transform-Stream den ersten kodierten Frame für den Track erhält.

## Implementierung des Workers

Das Worker-Skript muss einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis implementieren, indem es eine [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) erstellt, die den `event.transformer.readable` ([`ReadableStream`](/de/docs/Web/API/ReadableStream))-Stream durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zum `event.transformer.writable` ([`WritableStream`](/de/docs/Web/API/WritableStream))-Stream piped.

Ein Worker könnte das Transformieren von eingehenden oder ausgehenden kodierten Frames unterstützen, oder beides, und der Transform könnte fest codiert sein oder zur Laufzeit mit Informationen konfiguriert werden, die von der Webanwendung übergeben werden.

### Basis-WebRTC Encoded Transform

Das folgende Beispiel zeigt einen einfachen WebRTC Encoded Transform, der alle Bits in an die Warteschlange gestellten Frames negiert.
Es werden keine Optionen verwendet oder benötigt, die vom Hauptthread übergeben werden, da derselbe Algorithmus in der Sender-Pipeline verwendet werden kann, um die Bits zu negieren, und in der Empfänger-Pipeline, um sie wiederherzustellen.

Der Code implementiert einen Ereignis-Handler für das `rtctransform`-Ereignis.
Dieser konstruiert einen [`TransformStream`](/de/docs/Web/API/TransformStream), leitet dann mittels [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) hindurch und leitet schließlich mit [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo) zu `event.transformer.writable`.

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

Die Implementierung des WebRTC Encoded Transform ist ähnlich einem "generischen" [`TransformStream`](/de/docs/Web/API/TransformStream), aber mit einigen wichtigen Unterschieden.
Wie der generische Stream nimmt sein [Konstruktor](/de/docs/Web/API/TransformStream/TransformStream#parameters) ein Objekt an, das eine _optionale_ [`start()`](/de/docs/Web/API/TransformStream/TransformStream#startcontroller)-Methode definiert, die beim Konstruktion aufgerufen wird, eine [`flush()`](/de/docs/Web/API/TransformStream/TransformStream#flushcontroller)-Methode, die aufgerufen wird, wenn der Stream geschlossen wird, und eine [`transform()`](/de/docs/Web/API/TransformStream/TransformStream#transformchunk_controller)-Methode, die jedes Mal aufgerufen wird, wenn es einen zu verarbeitenden Chunk gibt.
Im Gegensatz zum generischen Konstruktor werden alle `writableStrategy` oder `readableStrategy`-Eigenschaften, die im Konstruktorobjekt übergeben werden, ignoriert, und die Warteschlangenstrategie wird vollständig vom Benutzeragent gehandhabt.

Die `transform()`-Methode unterscheidet sich auch insofern, als sie entweder ein [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) anstelle eines generischen "Chunks" erhält.
Der hier gezeigte tatsächliche Code für die Methode ist nicht bemerkenswert, außer dass er zeigt, wie man den Frame in eine Form umwandeln kann, in der man ihn modifizieren und anschließend in die Warteschlange des Streams einreihen kann.

### Verwendung getrennter Sender- und Empfängertransforms

Das vorherige Beispiel funktioniert, wenn die Transformationsfunktion beim Senden und Empfangen dieselbe ist, aber in vielen Fällen werden die Algorithmen unterschiedlich sein.
Man könnte separate Worker-Skripte für den Sender und Empfänger verwenden oder beide Fälle in einem Worker behandeln, wie unten gezeigt.

Wenn der Worker sowohl für den Sender als auch für den Empfänger verwendet wird, muss er wissen, ob der aktuelle kodierte Frame aus einem Codec ausgehend oder von einem Paketierer eingehend ist.
Diese Information kann mit der zweiten Option im [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) angegeben werden.
Zum Beispiel können wir einen separaten `RTCRtpScriptTransform` für den Sender und Empfänger definieren, der denselben Worker und ein Optionen-Objekt mit der Eigenschaft `name` verwendet, das angibt, ob der Transform im Sender oder Empfänger verwendet wird (wie in den obigen Abschnitten gezeigt).
Die Information ist dann im Worker in `event.transformer.options` verfügbar.

In diesem Beispiel implementieren wir den `onrtctransform`-Ereignis-Handler für das globale dedizierte Worker-Scope-Objekt.
Der Wert der `name`-Eigenschaft wird verwendet, um zu bestimmen, welcher `TransformStream` konstruiert werden soll (die tatsächlichen Konstruktormethoden werden nicht gezeigt).

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

Beachten Sie, dass der Code zum Erstellen der Pipe-Kette derselbe ist wie im vorherigen Beispiel.

### Laufzeitkommunikation mit dem Transform

Der [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) ermöglicht es, Optionen und transferierbare Objekte an den Worker zu übergeben.
Im vorherigen Beispiel haben wir statische Informationen übergeben, aber manchmal möchten Sie möglicherweise den Transformationsalgorithmus im Worker zur Laufzeit ändern oder Informationen vom Worker zurückbekommen.
Beispielsweise könnte ein WebRTC-Konferenzgespräch, das Verschlüsselung unterstützt, einen neuen Schlüssel zum Algorithmus hinzufügen müssen, der vom Transform verwendet wird.

Während es möglich ist, Informationen zwischen dem Worker, der den Transformationscode ausführt, und dem Hauptthread mit [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) auszutauschen, ist es in der Regel einfacher, einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) als [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform)-Option zu teilen, weil dann der Kanal-Kontext direkt verfügbar ist im `event.transformer.options`, wenn Sie einen neuen kodierten Frame bearbeiten.

Der folgende Code erstellt einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) und [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) seinen zweiten Port an den Worker.
Der Hauptthread und Transformationsprozessor können anschließend über den ersten und zweiten Port kommunizieren.

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

Im Worker ist der Port verfügbar als `event.transformer.options.port`.
Der folgende Code zeigt, wie Sie möglicherweise auf das `message`-Ereignis des Ports hören, um Nachrichten vom Hauptthread zu erhalten.
Sie können den Port auch verwenden, um Nachrichten zurück an den Hauptthread zu senden.

```js
event.transformer.options.port.onmessage = (event) => {
  // The message payload is in 'event.data';
  console.log(event.data);
};
```

### Auslösen eines Key-Frames

Rohes Video wird selten gesendet oder gespeichert, weil es viel Platz und Bandbreite benötigt, um jedes Frame als komplettes Bild darzustellen.
Stattdessen erzeugen Codecs periodisch einen "Key-Frame", der genügend Informationen enthält, um ein vollständiges Bild zu konstruieren, und senden zwischen den Key-Frames "Delta-Frames", die nur die Änderungen seit dem letzten Delta-Frame enthalten.
Während dies weit effizienter ist als rohes Video zu senden, bedeutet es, dass Sie, um das Bild eines bestimmten Delta-Frames darzustellen, den letzten Key-Frame und alle folgenden Delta-Frames benötigen.

Dies kann zu Verzögerungen für neue Benutzer führen, die einer WebRTC-Konferenzanwendung beitreten, weil sie das Video nicht darstellen können, bis sie ihren ersten Key-Frame erhalten haben.
Ähnlich, wenn ein kodierter Transformator verwendet wurde, um Frames zu verschlüsseln, könnte der Empfänger das Video nicht darstellen, bis er den ersten Key-Frame erhält, der mit seinem Schlüssel verschlüsselt wurde.

Um sicherzustellen, dass ein neuer Key-Frame so früh wie möglich gesendet werden kann, wenn er benötigt wird, verfügt das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt in `event.transformer` über zwei Methoden: [`RTCRtpScriptTransformer.generateKeyFrame()`](/de/docs/Web/API/RTCRtpScriptTransformer/generateKeyFrame), die den Codec veranlasst, einen Key-Frame zu generieren, und [`RTCRtpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest), die ein Empfänger verwenden kann, um einen Key-Frame vom Sender anzufordern.

Das folgende Beispiel zeigt, wie der Hauptthread einen Verschlüsselungsschlüssel an einen Sender-Transformator übergeben und den Codec veranlassen kann, einen Key-Frame zu generieren.
Beachten Sie, dass der Hauptthread keinen direkten Zugriff auf das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt hat, also muss er den Schlüssel und die Restriktion-Identifikation ("rid") an den Worker übergeben (die "rid" ist eine Stream-ID, die den Encoder angibt, der den Key-Frame generieren muss).
Hier machen wir das mit einem `MessageChannel`, indem wir das gleiche Muster wie im vorherigen Abschnitt verwenden.
Der Code geht davon aus, dass bereits eine Peer-Verbindung besteht und dass `videoSender` ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) ist.

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

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis-Handler im Worker erhält den Port und verwendet ihn, um auf `message`-Ereignisse vom Hauptthread zu lauschen.
Wenn ein Ereignis empfangen wird, erhält es die `rid` und `key` und ruft dann `generateKeyFrame()` auf.

```js
event.transformer.options.port.onmessage = (event) => {
  const { rid, key } = event.data;
  // key is used by the transformer to encrypt frames (not shown)

  // Get codec to generate a new key frame using the rid
  // Here 'rcevent' is the rtctransform event.
  rcevent.transformer.generateKeyFrame(rid);
};
```

Der Code für einen Empfänger, um einen neuen Key-Frame anzufordern, wäre fast identisch, außer dass die "rid" nicht spezifiziert würde.
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
