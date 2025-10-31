---
title: Verwendung von WebRTC Encoded Transforms
slug: Web/API/WebRTC_API/Using_Encoded_Transforms
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("WebRTC")}}

WebRTC Encoded Transforms bieten einen Mechanismus, um eine leistungsstarke [Stream-API](/de/docs/Web/API/Streams_API) zur Modifikation von kodierten Video- und Audiorahmen in die eingehenden und ausgehenden WebRTC-Pipelines einzubinden. Dies ermöglicht Anwendungsfälle wie die Ende-zu-Ende-Verschlüsselung von kodierten Rahmen durch Drittanbieter-Code.

Die API definiert sowohl Objekte auf der Hauptthread- als auch auf der Worker-Seite. Die Schnittstelle für den Hauptthread ist eine [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Instanz, die beim Erstellen den [`Worker`](/de/docs/Web/API/Worker) angibt, der den Transformercode implementieren soll. Der im Worker laufende Transformator wird in die eingehende oder ausgehende WebRTC-Pipeline eingefügt, indem das `RTCRtpScriptTransform` zu [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) oder [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) hinzugefügt wird.

Ein entsprechendes [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt wird im Worker-Thread erstellt, das über eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Eigenschaft `readable`, eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Eigenschaft `writable` und ein `options`-Objekt verfügt, das aus dem zugehörigen [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Konstruktor übergeben wird. Kodierte Videoräume ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)) oder Audioräume ([`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) aus der WebRTC-Pipeline werden zur Verarbeitung in `readable` eingereiht.

Das `RTCRtpScriptTransformer` wird dem Code als Eigenschaft `transformer` des [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignisses zur Verfügung gestellt, das im globalen Worker-Kontext ausgelöst wird, sobald ein kodierter Rahmen zur Verarbeitung eingereiht wird (und anfänglich beim Erstellen des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)). Der Worker-Code muss einen Handler für das Ereignis implementieren, der kodierte Rahmen aus `transformer.readable` liest, sie bei Bedarf modifiziert und sie in der gleichen Reihenfolge und ohne Duplikate in `transformer.writable` schreibt.

Während die Schnittstelle keine weiteren Einschränkungen für die Implementierung macht, besteht eine natürliche Methode zur Transformation der Rahmen darin, eine [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) zu erstellen, die Rahmen, die im `event.transformer.readable`-Stream eingereiht sind, durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) an den `event.transformer.writable`-Stream sendet. Wir können die `event.transformer.options`-Eigenschaft verwenden, um Transformationscode zu konfigurieren, der davon abhängt, ob der Transformator eingehende Rahmen von der Paketierung oder ausgehende Rahmen von einem Codec einreiht.

Die [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Schnittstelle bietet auch Methoden, die beim Senden von kodiertem Video verwendet werden können, um den Codec dazu zu bringen, einen "Schlüssel"-Rahmen zu erzeugen, und beim Empfang von Video, um zu verlangen, dass ein neuer Schlüsselrahmen gesendet wird. Diese können nützlich sein, um einem Empfänger zu ermöglichen, das Video schneller anzuzeigen, z. B. wenn er an einem Videoanruf teilnimmt, während Delta-Rahmen gesendet werden.

Die folgenden Beispiele bieten spezifischere Anwendungsbeispiele für die Verwendung des Frameworks mit einer auf [`TransformStream`](/de/docs/Web/API/TransformStream) basierenden Implementierung.

## Testen, ob kodierte Transformationen unterstützt werden

Testen Sie, ob [kodierte Transformationen unterstützt](#browser-kompatibilität) werden, indem Sie auf das Vorhandensein von [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) (oder [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)) prüfen:

```js
const supportsEncodedTransforms =
  window.RTCRtpSender && "transform" in RTCRtpSender.prototype;
```

## Hinzufügen eines Transformators für ausgehende Rahmen

Ein im Worker laufender Transformator wird in die ausgehende WebRTC-Pipeline eingefügt, indem sein entsprechendes `RTCRtpScriptTransform` dem [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) für eine ausgehende Spur zugewiesen wird.

Dieses Beispiel zeigt, wie Sie ein Video von der Webcam eines Benutzers über WebRTC streamen und einen WebRTC-kodierten Transformator hinzufügen können, um die ausgehenden Streams zu modifizieren. Der Code geht davon aus, dass es eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` gibt, die bereits mit einem Remote-Peer verbunden ist.

Zuerst erhalten wir eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), indem wir [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um einen Video-[`MediaStream`](/de/docs/Web/API/MediaStream) von einem Mediengerät zu erhalten, und dann die Methode [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks), um die erste [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im Stream zu erhalten.

Die Spur wird der Peer-Verbindung mit [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) hinzugefügt, was das Streaming zum Remote-Peer startet. Die `addTrack()`-Methode gibt den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) zurück, der verwendet wird, um die Spur zu senden.

```js
// Get Video stream and MediaTrack
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getTracks();
const videoSender = peerConnection.addTrack(track, stream);
```

Ein `RTCRtpScriptTransform` wird dann konstruiert, wobei ein Worker-Skript, das den Transformator definiert, und ein optionales Objekt, das verwendet werden kann, um beliebige Nachrichten an den Worker zu senden (in diesem Fall haben wir eine `name`-Eigenschaft mit dem Wert "senderTransform" verwendet, um dem Worker mitzuteilen, dass dieser Transformator dem ausgehenden Stream hinzugefügt wird), eingefügt wird. Wir fügen den Transformator der ausgehenden Pipeline hinzu, indem wir ihn der [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)-Eigenschaft zuweisen.

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Der Abschnitt [Verwendung separater Sende- und Empfangstransformationen](#verwendung_separater_sende-_und_empfangstransformationen) weiter unten zeigt, wie der `name` im Worker verwendet werden könnte.

Beachten Sie, dass Sie den Transformator jederzeit hinzufügen können, aber indem Sie ihn direkt nach dem Aufruf von `addTrack()` hinzufügen, erhält der Transformator den ersten kodierten Rahmen, der gesendet wird.

## Hinzufügen eines Transformators für eingehende Rahmen

Ein im Worker laufender Transformator wird in die eingehende WebRTC-Pipeline eingefügt, indem sein entsprechendes `RTCRtpScriptTransform` dem [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) für eine eingehende Spur zugewiesen wird.

Dieses Beispiel zeigt, wie Sie einen Transformator hinzufügen, um einen eingehenden Stream zu modifizieren. Der Code geht davon aus, dass es eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` gibt, die bereits mit einem Remote-Peer verbunden ist.

Zuerst fügen wir einen `RTCPeerConnection`-Handler für das [`track`-Ereignis](/de/docs/Web/API/RTCPeerConnection/track_event) hinzu, um das Ereignis zu verarbeiten, wenn der Peer beginnt, eine neue Spur zu empfangen. Innerhalb des Handlers konstruieren wir ein `RTCRtpScriptTransform` und fügen es dem `event.receiver.transform` hinzu (`event.receiver` ist ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)). Wie im vorherigen Abschnitt nimmt der Konstruktor ein Objekt mit einer `name`-Eigenschaft an, aber hier verwenden wir `receiverTransform` als Wert, um dem Worker mitzuteilen, dass Rahmen eingehend sind.

```js
peerConnection.ontrack = (event) => {
  const worker = new Worker("worker.js");
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    name: "receiverTransform",
  });
  received_video.srcObject = event.streams[0];
};
```

Merken Sie sich wieder, dass Sie den Transformationsstream jederzeit hinzufügen können. Durch das Hinzufügen im `track`-Ereignishandler wird jedoch sichergestellt, dass der Transformationsstream den ersten kodierten Rahmen für die Spur erhält.

## Worker-Implementierung

Das Worker-Skript muss einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis implementieren und eine [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) erstellen, die den `event.transformer.readable` ([`ReadableStream`](/de/docs/Web/API/ReadableStream)) Stream durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) an den `event.transformer.writable` ([`WritableStream`](/de/docs/Web/API/WritableStream)) Stream leitet.

Ein Worker kann entweder das Transformieren von eingehenden oder ausgehenden kodierten Rahmen oder beides unterstützen, und die Transformation kann fest codiert sein oder zur Laufzeit mit Informationen konfiguriert werden, die von der Webanwendung übermittelt werden.

### Basis WebRTC Encoded Transform

Das folgende Beispiel zeigt eine grundlegende WebRTC-kodierte Transformation, die alle Bits in eingereihten Rahmen invertiert. Es verwendet oder benötigt keine Optionen, die aus dem Hauptthread übermittelt werden, da der gleiche Algorithmus sowohl in der Sender-Pipeline zur Invertierung der Bits als auch in der Empfänger-Pipeline zu deren Wiederherstellung verwendet werden kann.

Der Code implementiert einen Ereignishandler für das `rtctransform`-Ereignis. Dieser erstellt einen [`TransformStream`](/de/docs/Web/API/TransformStream), leitet ihn dann durch [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) und schließlich durch [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo) zum `event.transformer.writable`.

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

Die Implementierung der WebRTC kodierten Transformation ähnelt einem "generischen" [`TransformStream`](/de/docs/Web/API/TransformStream), aber mit einigen wichtigen Unterschieden. Wie der generische Stream nimmt der [Konstruktor](/de/docs/Web/API/TransformStream/TransformStream#parameters) ein Objekt an, das eine _optionale_ [`start()`](/de/docs/Web/API/TransformStream/TransformStream#startcontroller)-Methode definiert, die beim Erstellen aufgerufen wird, eine [`flush()`](/de/docs/Web/API/TransformStream/TransformStream#flushcontroller)-Methode, die aufgerufen wird, wenn der Stream kurz vor dem Schließen steht, und eine [`transform()`](/de/docs/Web/API/TransformStream/TransformStream#transformchunk_controller)-Methode, die aufgerufen wird, sobald es ein zu verarbeitendes Chunk gibt. Anders als beim generischen Konstruktor werden etwaige `writableStrategy`- oder `readableStrategy`-Eigenschaften, die im Konstruktorobjekt übergeben werden, ignoriert, und die Einreihstrategie wird vollständig vom Benutzeragenten verwaltet.

Die `transform()`-Methode unterscheidet sich auch insofern, als sie einen [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) übergeben bekommt und nicht ein generisches "Chunk". Der tatsächliche hier gezeigte Code für die Methode ist nicht von Bedeutung, abgesehen davon, dass er zeigt, wie man den Rahmen in eine Form konvertiert, in der man ihn modifizieren kann und ihn danach im Stream einreihen kann.

### Verwendung separater Sende- und Empfangstransformationen

Das vorherige Beispiel funktioniert, wenn die Transformationsfunktion beim Senden und Empfangen gleich ist, aber in vielen Fällen werden die Algorithmen unterschiedlich sein. Sie könnten separate Worker-Skripte für Sender und Empfänger verwenden oder beide Fälle in einem Worker behandeln, wie unten gezeigt.

Wenn der Worker sowohl für Sender als auch Empfänger verwendet wird, muss er wissen, ob der aktuelle kodierte Rahmen aus einem Codec ausgehend oder von der Paketierung eingehend ist. Diese Information kann durch die zweite Option im [`RTCRtpScriptTransform` Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) angegeben werden. Beispielsweise können wir einen separaten `RTCRtpScriptTransform` für Sender und Empfänger definieren, den gleichen Worker übergeben und ein Optionsobjekt mit einer `name`-Eigenschaft, die angibt, ob der Transformator im Sender oder Empfänger verwendet wird, übergeben (wie in den vorherigen Abschnitten oben gezeigt). Die Information ist dann im Worker in `event.transformer.options` verfügbar.

In diesem Beispiel implementieren wir den `onrtctransform` Ereignishandler im globalen dedizierten Worker-Scope-Objekt. Der Wert der `name`-Eigenschaft wird verwendet, um zu bestimmen, welchen `TransformStream` zu konstruieren (die tatsächlichen Konstruktormethoden werden nicht gezeigt).

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

Beachten Sie, dass der Code zur Erstellung der Pipe-Kette der gleiche wie im vorherigen Beispiel ist.

### Kommunikation zur Laufzeit mit dem Transformator

Der [`RTCRtpScriptTransform` Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) erlaubt es, Optionen und Transferobjekte an den Worker zu übergeben. Im vorherigen Beispiel haben wir statische Informationen übermittelt, aber manchmal möchten Sie den Algorithmus zur Laufzeit im Worker ändern oder Informationen vom Worker zurückerhalten. Beispielsweise könnte ein WebRTC-Konferenzanruf, der die Verschlüsselung unterstützt, einen neuen Schlüssel zum Algorithmus hinzufügen müssen, der vom Transformator verwendet wird.

Während es möglich ist, Informationen zwischen dem Worker, der den Transform-Code ausführt, und dem Hauptthread mittels [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) zu teilen, ist es im Allgemeinen einfacher, einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) als eine Option des [`RTCRtpScriptTransform`-Konstruktors](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) zu teilen, weil dann der Kanal-Kontext direkt in `event.transformer.options` verfügbar ist, wenn Sie einen neuen kodierten Rahmen behandeln.

Der folgende Code erstellt einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) und [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) dessen zweiten Port an den Worker. Der Hauptthread und der Transformator können anschließend über den ersten und zweiten Port kommunizieren.

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

Im Worker ist der Port als `event.transformer.options.port` verfügbar. Der folgende Code zeigt, wie Sie im Port's `message`-Ereignis lauschen könnten, um Nachrichten vom Hauptthread zu erhalten. Sie können den Port auch verwenden, um Nachrichten zurück an den Hauptthread zu senden.

```js
event.transformer.options.port.onmessage = (event) => {
  // The message payload is in 'event.data';
  console.log(event.data);
};
```

### Auslösen eines Schlüsselrahmens

Rohvideo wird selten gesendet oder gespeichert, da es viel Speicherplatz und Bandbreite benötigt, um jedes Bild als vollständiges Bild darzustellen. Stattdessen erzeugen Codecs periodisch einen "Schlüsselrahmen", der genügend Informationen enthält, um ein vollständiges Bild zu erstellen, und zwischen den Schlüsselrahmen "Delta-Rahmen", die nur die Änderungen seit dem letzten Delta-Rahmen enthalten. Während dies wesentlich effizienter als das Senden von Rohvideo ist, bedeutet es auch, dass zur Anzeige des Bildes, das mit einem bestimmten Delta-Rahmen verbunden ist, der letzte Schlüsselrahmen und alle nachfolgenden Delta-Rahmen benötigt werden.

Dies kann bei neuen Benutzern, die einer WebRTC-Konferenzanwendung beitreten, zu einer Verzögerung führen, da sie das Video nicht anzeigen können, bis sie ihren ersten Schlüsselrahmen erhalten haben. Ebenso wäre der Empfänger nicht in der Lage, Video anzuzeigen, bis sie den ersten Schlüsselrahmen erhalten haben, wenn ein kodierter Transformator verwendet wurde, um das Video zu verschlüsseln.

Um sicherzustellen, dass ein neuer Schlüsselrahmen so früh wie möglich gesendet werden kann, wenn er benötigt wird, hat das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt in `event.transformer` zwei Methoden: [`RTCRtpScriptTransformer.generateKeyFrame()`](/de/docs/Web/API/RTCRtpScriptTransformer/generateKeyFrame), das den Codec dazu veranlasst, einen Schlüsselrahmen zu erzeugen, und [`RTCRtpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest), das ein Empfänger verwenden kann, um vom Sender einen Schlüsselrahmen anzufordern.

Das folgende Beispiel zeigt, wie der Hauptthread einen Verschlüsselungsschlüssel an einen Sender-Transformator übermitteln und den Codec zum Erzeugen eines Schlüsselrahmens veranlassen könnte. Beachten Sie, dass der Hauptthread keinen direkten Zugriff auf das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt hat, sodass er den Schlüssel und die Restriktionskennung ("rid") an den Worker übermitteln muss (das "rid" ist eine Stream-ID, die angibt, welcher Encoder den Schlüsselrahmen erzeugen soll). Hier tun wir das mit einem `MessageChannel`, unter Verwendung des gleichen Musters wie im vorherigen Abschnitt. Der Code geht davon aus, dass es bereits eine Peer-Verbindung gibt und dass `videoSender` ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) ist.

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

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignishandler im Worker erhält den Port und verwendet ihn, um auf `message`-Ereignisse vom Hauptthread zu lauschen. Wenn ein Ereignis empfangen wird, erhält er das `rid` und den `key` und ruft dann `generateKeyFrame()` auf.

```js
event.transformer.options.port.onmessage = (event) => {
  const { rid, key } = event.data;
  // key is used by the transformer to encrypt frames (not shown)

  // Get codec to generate a new key frame using the rid
  // Here 'rcEvent' is the rtctransform event.
  rcEvent.transformer.generateKeyFrame(rid);
};
```

Der Code für einen Empfänger, um einen neuen Schlüsselrahmen anzufordern, wäre fast identisch, außer dass "rid" nicht angegeben ist. Hier ist der Code nur für den Portnachrichten-Handler:

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
- [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis
- [`RTCTransformEvent`](/de/docs/Web/API/RTCTransformEvent)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)
- [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)
