---
title: Verwendung von WebRTC Encoded Transforms
slug: Web/API/WebRTC_API/Using_Encoded_Transforms
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("WebRTC")}}

WebRTC Encoded Transforms bieten einen Mechanismus, um eine leistungsstarke [Stream-API](/de/docs/Web/API/Streams_API) zu injizieren, um codierte Video- und Audiobilder im eingehenden und ausgehenden WebRTC-Datenfluss zu modifizieren.
Dies ermöglicht Anwendungsfälle wie die Ende-zu-Ende-Verschlüsselung von codierten Bildern durch Drittanbietercode.

Die API definiert sowohl Objekte für den Haupt-Thread als auch für Worker.
Das Interface für den Haupt-Thread ist eine Instanz von [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform), die bei der Erstellung den [`Worker`](/de/docs/Web/API/Worker) angibt, der den Transformercode implementieren soll.
Der im Worker ausgeführte Transformator wird in den eingehenden oder ausgehenden WebRTC-Datenfluss eingefügt, indem dem [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) bzw. [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) der `RTCRtpScriptTransform` hinzugefügt wird.

Ein entsprechendes [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt wird im Worker-Thread erstellt, das über eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-`readable`-Eigenschaft, eine [`WritableStream`](/de/docs/Web/API/WritableStream)-`writable`-Eigenschaft und ein `options`-Objekt verfügt, das vom zugehörigen [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Konstruktor übergeben wird.
Codierte Videoframes ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)) oder Audioframes ([`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) aus der WebRTC-Pipeline werden zur Verarbeitung in die `readable`-Warteschlange eingereiht.

Der `RTCRtpScriptTransformer` ist als `transformer`-Eigenschaft des [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignisses im Code verfügbar, das im globalen Worker-Bereich jedes Mal ausgelöst wird, wenn ein codiertes Bild zur Verarbeitung eingereiht wird (und anfänglich bei der Konstruktion des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)).
Der Worker-Code muss einen Event-Handler implementieren, der codierte Frames von `transformer.readable` liest, sie bei Bedarf modifiziert und sie in derselben Reihenfolge und ohne Duplikate auf `transformer.writable` schreibt.

Obwohl die Schnittstelle keine weiteren Einschränkungen für die Implementierung vorgibt, ist eine natürliche Möglichkeit zur Transformation der Bilder die Erstellung einer [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains), die Frames, die in der `event.transformer.readable`-Warteschlange eingereiht sind, durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zum `event.transformer.writable`-Stream sendet.
Wir können die `event.transformer.options`-Eigenschaft verwenden, um beliebigen Transformationcode zu konfigurieren, der davon abhängt, ob der Transformator eingehende Frames vom Paketierer oder ausgehende Frames von einem Codec einreiht.

Die Schnittstelle [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) bietet auch Methoden, die beim Senden von codiertem Video verwendet werden können, um den Codec zur Erzeugung eines "Schlüssel"-Frames zu veranlassen, und beim Empfangen von Video, um anzufordern, dass ein neuer Schlüssel-Frame gesendet wird.
Diese können nützlich sein, um einem Empfänger den Start der Videowiedergabe schneller zu ermöglichen, wenn er (zum Beispiel) einem Anruf beitritt, während Delta-Frames gesendet werden.

Die folgenden Beispiele bieten spezifischere Beispiele, wie das Framework unter Verwendung einer [`TransformStream`](/de/docs/Web/API/TransformStream)-basierten Implementierung verwendet werden kann.

## Testen, ob codierte Transforms unterstützt werden

Testen Sie, ob [codierte Transforms unterstützt werden](#browser-kompatibilität), indem Sie das Vorhandensein von [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) (oder [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)) prüfen:

```js
const supportsEncodedTransforms =
  window.RTCRtpSender && "transform" in RTCRtpSender.prototype;
```

## Hinzufügen eines Transforms für ausgehende Frames

Ein Transform, der in einem Worker ausgeführt wird, wird in die ausgehende WebRTC-Pipeline eingefügt, indem der entsprechende `RTCRtpScriptTransform` dem [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) für eine ausgehende Spur zugewiesen wird.

Dieses Beispiel zeigt, wie Sie Video vom Benutzer-Webcam über WebRTC streamen könnten, indem Sie einen WebRTC-Encoded-Transform hinzufügen, um die ausgehenden Streams zu modifizieren.
Der Code geht davon aus, dass eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` bereits mit einem entfernten Peer verbunden ist.

Zuerst erhalten wir eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), indem wir [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um einen Video-`MediaStream` von einem Mediengerät zu erhalten, und dann die Methode [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks), um den ersten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im Stream zu erhalten.

Die Spur wird der Peer-Verbindung mit [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) hinzugefügt, wodurch sie an den entfernten Peer gestreamt wird.
Die `addTrack()`-Methode gibt den verwendeten [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) zurück, um die Spur zu senden.

```js
// Get Video stream and MediaTrack
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getTracks();
const videoSender = peerConnection.addTrack(track, stream);
```

Ein `RTCRtpScriptTransform` wird dann erstellt, indem ein Worker-Skript übergeben wird, das den Transform definiert, und ein optionales Objekt, das zur Übermittlung beliebiger Nachrichten an den Worker verwendet werden kann (in diesem Fall haben wir eine `name`-Eigenschaft mit dem Wert "senderTransform" verwendet, um dem Worker mitzuteilen, dass dieser Transform dem ausgehenden Stream hinzugefügt wird).
Wir fügen den Transform der ausgehenden Pipeline hinzu, indem wir ihn der [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)-Eigenschaft zuweisen.

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Der Abschnitt [Verwendung separater Sender- und Empfänger-Transforms](#verwendung_separater_sender-_und_empfänger-transforms) unten zeigt, wie der `name` in einem Worker verwendet werden könnte.

Beachten Sie, dass Sie den Transform jederzeit hinzufügen können, aber indem Sie ihn direkt nach dem Aufrufen von `addTrack()` hinzufügen, erhält der Transform den ersten codierten Frame, der gesendet wird.

## Hinzufügen eines Transforms für eingehende Frames

Ein Transform, der in einem Worker ausgeführt wird, wird in die eingehende WebRTC-Pipeline eingefügt, indem der entsprechende `RTCRtpScriptTransform` dem [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) für eine eingehende Spur zugewiesen wird.

Dieses Beispiel zeigt, wie Sie einen Transform hinzufügen, um einen eingehenden Stream zu modifizieren.
Der Code geht davon aus, dass eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` bereits mit einem entfernten Peer verbunden ist.

Zuerst fügen wir einen [`track`-Event](/de/docs/Web/API/RTCPeerConnection/track_event)-Handler zur `RTCPeerConnection` hinzu, um das Ereignis abzufangen, wenn der Peer beginnt, eine neue Spur zu empfangen.
Innerhalb des Handlers konstruieren wir einen `RTCRtpScriptTransform` und fügen ihn `event.receiver.transform` hinzu (`event.receiver` ist ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)).
Wie im vorherigen Abschnitt nimmt der Konstruktor ein Objekt mit `name`-Eigenschaft, aber hier verwenden wir `receiverTransform` als Wert, um dem Worker mitzuteilen, dass Frames eingehend sind.

```js
peerConnection.ontrack = (event) => {
  const worker = new Worker("worker.js");
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    name: "receiverTransform",
  });
  received_video.srcObject = event.streams[0];
};
```

Beachten Sie erneut, dass Sie den Transform-Stream jederzeit hinzufügen können.
Allerdings wird durch das Hinzufügen im `track`-Ereignishandler sichergestellt, dass der Transform-Stream den ersten codierten Frame für die Spur erhält.

## Worker-Implementierung

Das Worker-Skript muss einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis implementieren, der eine [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) erstellt, die den `event.transformer.readable` ([`ReadableStream`](/de/docs/Web/API/ReadableStream))-Stream durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zum `event.transformer.writable` ([`WritableStream`](/de/docs/Web/API/WritableStream))-Stream leitet.

Ein Worker könnte das Transformieren von eingehenden oder ausgehenden codierten Frames unterstützen oder beides, und der Transform könnte fest kodiert oder zur Laufzeit unter Verwendung von Informationen konfiguriert werden, die von der Webanwendung übergeben werden.

### Basis-WebRTC-Encoded-Transform

Das folgende Beispiel zeigt einen Basis-WebRTC-Encoded-Transform, der alle Bits in eingereihten Frames negiert.
Er verwendet keine oder benötigt keine Optionen, die vom Haupt-Thread übergeben werden, da derselbe Algorithmus in der Senderpipeline verwendet werden kann, um die Bits zu negieren, und in der Empfängerpipeline, um sie wiederherzustellen.

Der Code implementiert einen Event-Handler für das `rtctransform`-Ereignis.
Dieser konstruiert einen [`TransformStream`](/de/docs/Web/API/TransformStream), leitet dann durch ihn mit [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) und leitet schließlich zu `event.transformer.writable` mit [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo).

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

Die Implementierung des WebRTC-Encoded-Transforms ist ähnlich einem "generischen" [`TransformStream`](/de/docs/Web/API/TransformStream), jedoch mit einigen wichtigen Unterschieden.
Wie der generische Stream nimmt sein [Konstruktor](/de/docs/Web/API/TransformStream/TransformStream#parameters) ein Objekt an, das eine _optionale_ [`start()`](/de/docs/Web/API/TransformStream/TransformStream#startcontroller)-Methode definiert, die bei der Konstruktion aufgerufen wird, eine [`flush()`](/de/docs/Web/API/TransformStream/TransformStream#flushcontroller)-Methode, die aufgerufen wird, wenn der Stream geschlossen werden soll, und eine [`transform()`](/de/docs/Web/API/TransformStream/TransformStream#transformchunk_controller)-Methode, die jedes Mal aufgerufen wird, wenn es einen Chunk zu verarbeiten gibt.
Anders als beim generischen Konstruktor werden alle `writableStrategy`- oder `readableStrategy`-Eigenschaften, die im Konstruktorobjekt übergeben werden, ignoriert, und die Warteschlangenstrategie wird vollständig vom Benutzeragenten verwaltet.

Die `transform()`-Methode unterscheidet sich auch darin, dass sie entweder ein [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder ein [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) anstelle eines generischen "Chunks" erhält.
Der tatsächlich hier gezeigte Code für die Methode ist nicht nennenswert, abgesehen davon, dass gezeigt wird, wie das Bild in eine Form konvertiert wird, in der Sie es modifizieren und anschließend im Stream einreihen können.

### Verwendung separater Sender- und Empfänger-Transforms

Das vorherige Beispiel funktioniert, wenn die Transformationsfunktion beim Senden und Empfangen dieselbe ist, jedoch sind die Algorithmen in vielen Fällen unterschiedlich.
Sie könnten separate Worker-Skripte für Sender und Empfänger verwenden oder beide Fälle in einem Worker handhaben, wie unten gezeigt.

Wenn der Worker für sowohl Sender als auch Empfänger verwendet wird, muss er wissen, ob der aktuelle codierte Frame vom Codec ausgehend oder vom Paketierer eingehend ist.
Diese Informationen können mit der zweiten Option im [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) angegeben werden.
Zum Beispiel können wir einen separaten `RTCRtpScriptTransform` für Sender und Empfänger definieren, indem wir demselben Worker eine Options-Objekt mit einer Eigenschaft `name` übergeben, das angibt, ob der Transformator im Sender oder Empfänger verwendet wird (wie in den vorherigen Abschnitten oben gezeigt).
Die Informationen sind dann im Worker in `event.transformer.options` verfügbar.

In diesem Beispiel implementieren wir den `onrtctransform`-Ereignishandler im globalen dedizierten Worker-Scope-Objekt.
Der Wert der `name`-Eigenschaft wird verwendet, um zu bestimmen, welcher `TransformStream` konstruiert werden soll (die eigentlichen Konstruktormethoden werden nicht gezeigt).

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

Beachten Sie, dass der Code zur Erstellung der Pipe-Kette derselbe ist wie im vorherigen Beispiel.

### Laufzeitkommunikation mit dem Transform

Der [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) ermöglicht es Ihnen, Optionen und Übertragungsobjekte an den Worker zu übergeben.
Im vorherigen Beispiel haben wir statische Informationen übermittelt, aber manchmal möchten Sie möglicherweise den Transformationsalgorithmus im Worker zur Laufzeit ändern oder Informationen vom Worker erhalten.
Zum Beispiel könnte ein WebRTC-Konferenzanruf, der Verschlüsselung unterstützt, einen neuen Schlüssel zum Algorithmus hinzufügen müssen, der von der Transformation verwendet wird.

Obwohl es möglich ist, Informationen zwischen dem Worker, der den Transformationscode ausführt, und dem Haupt-Thread unter Verwendung von [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) zu teilen, ist es in der Regel einfacher, einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) als Option im [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) zu teilen, da dann der Kanal-Kontext direkt in den `event.transformer.options` verfügbar ist, wenn Sie einen neuen codierten Frame verarbeiten.

Der folgende Code erstellt einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) und [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) dessen zweiten Port an den Worker.
Der Haupt-Thread und der Transformator können anschließend über den ersten und zweiten Port kommunizieren.

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
Der folgende Code zeigt, wie Sie den `message`-Event des Ports abonnieren können, um Nachrichten vom Haupt-Thread zu erhalten.
Sie können den Port auch verwenden, um Nachrichten zurück an den Haupt-Thread zu senden.

```js
event.transformer.options.port.onmessage = (event) => {
  // The message payload is in 'event.data';
  console.log(event.data);
};
```

### Auslösung eines Schlüssel-Frames

Rohes Video wird selten gesendet oder gespeichert, da es viel Platz und Bandbreite benötigt, um jedes Bild als vollständiges Bild darzustellen.
Stattdessen erzeugen Codecs regelmäßig einen "Schlüssel-Frame", der genügend Informationen enthält, um ein vollständiges Bild zu konstruieren, und zwischen den Schlüssel-Frames werden "Delta-Frames" gesendet, die nur die Änderungen seit dem letzten Delta-Frame enthalten.
Obwohl dies wesentlich effizienter ist als das Senden von rohem Video, bedeutet es, dass Sie das letzte Schlüsselbild und alle nachfolgenden Delta_frames benötigen, um das Bild anzuzeigen, das einem bestimmten Delta-Frame zugeordnet ist.

Dies kann eine Verzögerung für neue Benutzer verursachen, die einer WebRTC-Konferenzanwendung beitreten, da sie kein Video anzeigen können, bis sie ihren ersten Schlüssel-Frame erhalten haben.
Ähnlich, wenn ein kodierter Transformator verwendet wurde, um Frames zu verschlüsseln, könnte der Empfänger das Video erst anzeigen, wenn er den ersten Schlüssel-Frame erhält, der mit seinem Schlüssel verschlüsselt wurde.

Um sicherzustellen, dass ein neuer Schlüssel-Frame so früh wie möglich gesendet werden kann, wenn erforderlich, bietet das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt in `event.transformer` zwei Methoden: [`RTCRtpScriptTransformer.generateKeyFrame()`](/de/docs/Web/API/RTCRtpScriptTransformer/generateKeyFrame), das dazu führt, dass der Codec einen Schlüssel-Frame erzeugt, und [`RTCRtpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest), das ein Empfänger verwenden kann, um einen Schlüssel-Frame vom Sender anzufordern.

Das folgende Beispiel zeigt, wie der Haupt-Thread einen Verschlüsselungsschlüssel an einen Sendertransformator übermittelt und den Codec zur Erzeugung eines Schlüssel-Frames veranlasst.
Beachten Sie, dass der Haupt-Thread keinen direkten Zugriff auf das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt hat, daher muss er den Schlüssel und die Beschränkungskennung ("rid") an den Worker übermitteln (der "rid" ist eine Stream-ID, die den Encoder angibt, der den Schlüssel-Frame erstellen muss).
Hier tun wir dies mit einem `MessageChannel`, unter Verwendung desselben Musters wie im vorherigen Abschnitt.
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

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignishandler im Worker erhält den Port und verwendet ihn, um auf `message`-Ereignisse vom Haupt-Thread zu lauschen.
Wenn ein Ereignis empfangen wird, erhält es den `rid` und den `key` und ruft dann `generateKeyFrame()` auf.

```js
event.transformer.options.port.onmessage = (event) => {
  const { rid, key } = event.data;
  // key is used by the transformer to encrypt frames (not shown)

  // Get codec to generate a new key frame using the rid
  // Here 'rcEvent' is the rtctransform event.
  rcEvent.transformer.generateKeyFrame(rid);
};
```

Der Code für einen Empfänger, um einen neuen Schlüssel-Frame anzufordern, wäre fast identisch, außer dass "rid" nicht angegeben wird.
Hier ist der Code nur für den Nachrichten-Handler des Ports:

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
