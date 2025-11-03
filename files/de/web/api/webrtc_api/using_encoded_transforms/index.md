---
title: Verwenden von WebRTC Encoded Transforms
slug: Web/API/WebRTC_API/Using_Encoded_Transforms
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{DefaultAPISidebar("WebRTC")}}

WebRTC Encoded Transforms bieten einen Mechanismus, um eine leistungsfähige [Stream-API](/de/docs/Web/API/Streams_API) zum Modifizieren von kodierten Video- und Audio-Frames in die eingehenden und ausgehenden WebRTC-Pipelines zu injizieren.
Dies ermöglicht Anwendungsfälle wie Ende-zu-Ende-Verschlüsselung von kodierten Frames durch Drittanbieter-Code.

Die API definiert Objekte für den Hauptthread und für Worker-Seiten.
Die Schnittstelle des Hauptthreads ist eine [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Instanz, die bei der Konstruktion den [`Worker`](/de/docs/Web/API/Worker) angibt, welcher den Transformator-Code implementieren soll.
Der im Worker laufende Transformator wird in die eingehende oder ausgehende WebRTC-Pipeline eingefügt, indem die `RTCRtpScriptTransform` zu [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) bzw. [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) hinzugefügt wird.

Ein entsprechendes [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt wird im Worker-Thread erstellt, das eine [`ReadableStream`](/de/docs/Web/API/ReadableStream) `readable`-Eigenschaft, eine [`WritableStream`](/de/docs/Web/API/WritableStream) `writable`-Eigenschaft und ein `options`-Objekt hat, welches vom zugehörigen [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Konstruktor übergeben wird.
Kodierte Videoframes ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)) oder Audioframes ([`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) aus der WebRTC-Pipeline werden zur Verarbeitung in `readable` eingereiht.

Der `RTCRtpScriptTransformer` wird als `transformer`-Eigenschaft des [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignisses bereitgestellt, welches im Worker-Globalumfang ausgelöst wird, wenn ein kodierter Frame zur Verarbeitung eingereiht wird (und anfangs bei der Konstruktion der entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)).
Der Worker-Code muss einen Handler für das Ereignis implementieren, der kodierte Frames von `transformer.readable` liest, sie bei Bedarf modifiziert und in derselben Reihenfolge und ohne Duplikation in `transformer.writable` schreibt.

Während die Schnittstelle keine weiteren Einschränkungen für die Implementierung vorschreibt, besteht eine natürliche Möglichkeit, die Frames zu transformieren darin, eine [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) zu erstellen, die Frames aus dem `event.transformer.readable`-Stream durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zum `event.transformer.writable`-Stream sendet.
Wir können die `event.transformer.options`-Eigenschaft verwenden, um jeden Transformcode zu konfigurieren, der davon abhängt, ob der Transformator eingehende Frames vom Paketierer oder ausgehende Frames von einem Codec einreiht.

Die [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Schnittstelle bietet auch Methoden, die verwendet werden können, wenn kodiertes Video gesendet wird, um den Codec dazu zu bringen, einen "Schlüssel"-Frame zu generieren, und wenn Video empfangen wird, um den Versand eines neuen Schlüssel-Frames anzufordern.
Diese können nützlich sein, damit ein Empfänger das Video schneller sehen kann, falls (zum Beispiel) er einem Konferenzgespräch beitritt, wenn Delta-Frames gesendet werden.

Die folgenden Beispiele bieten spezifischere Beispiele zur Nutzung des Frameworks mit einer auf [`TransformStream`](/de/docs/Web/API/TransformStream) basierenden Implementierung.

## Testen, ob kodierte Transforms unterstützt werden

Testen Sie, ob [kodierte Transforms unterstützt werden](#browser-kompatibilität), indem Sie auf die Existenz von [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) (oder [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)) prüfen:

```js
const supportsEncodedTransforms =
  window.RTCRtpSender && "transform" in RTCRtpSender.prototype;
```

## Hinzufügen eines Transforms für ausgehende Frames

Ein im Worker laufender Transformator wird in die ausgehende WebRTC-Pipeline eingefügt, indem seine entsprechende `RTCRtpScriptTransform` dem [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) für eine ausgehende Spur zugewiesen wird.

Dieses Beispiel zeigt, wie Sie Video von der Webcam eines Benutzers über WebRTC streamen, indem Sie einen WebRTC-kodierten Transformator hinzufügen, um die ausgehenden Streams zu modifizieren.
Der Code geht davon aus, dass eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` vorhanden ist, die bereits mit einem entfernten Peer verbunden ist.

Zuerst erhalten wir eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), indem wir [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um einen Video-[`MediaStream`](/de/docs/Web/API/MediaStream) von einem Mediengerät zu erhalten, und dann die Methode [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) verwenden, um die erste [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im Stream zu bekommen.

Die Spur wird der Peer-Verbindung mithilfe von [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) hinzugefügt, wodurch sie an den entfernten Peer gestreamt wird.
Die Methode `addTrack()` gibt den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) zurück, der verwendet wird, um die Spur zu senden.

```js
// Get Video stream and MediaTrack
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getTracks();
const videoSender = peerConnection.addTrack(track, stream);
```

Ein `RTCRtpScriptTransform` wird dann erstellt, indem ein Worker-Skript, das den Transform definiert, und ein optionales Objekt, das verwendet werden kann, um beliebige Nachrichten an den Worker zu übergeben (in diesem Fall haben wir eine `name`-Eigenschaft mit dem Wert "senderTransform" verwendet, um dem Worker mitzuteilen, dass dieser Transform zum ausgehenden Stream hinzugefügt wird), übergeben wird.
Wir fügen den Transform zum ausgehenden Pipeline hinzu, indem wir ihn der [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)-Eigenschaft zuweisen.

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Der Abschnitt [Verwenden getrennter Sender- und Empfänger-Transforms](#verwendung_getrennter_sender-_und_empfänger-transforms) weiter unten zeigt, wie der `name`-Wert in einem Worker verwendet werden könnte.

Beachten Sie, dass der Transform zu jedem Zeitpunkt hinzugefügt werden kann, jedoch durch das sofortige Hinzufügen nach Aufruf von `addTrack()` der Transform den ersten kodierten Frame erhält, der gesendet wird.

## Hinzufügen eines Transforms für eingehende Frames

Ein im Worker laufender Transformator wird in die eingehende WebRTC-Pipeline eingefügt, indem seine entsprechende `RTCRtpScriptTransform` dem [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) für eine eingehende Spur zugewiesen wird.

Dieses Beispiel zeigt, wie Sie einen Transform hinzufügen, um einen eingehenden Stream zu modifizieren.
Der Code geht davon aus, dass eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` vorhanden ist, die bereits mit einem entfernten Peer verbunden ist.

Zuerst fügen wir einen [`track`-Ereignis](/de/docs/Web/API/RTCPeerConnection/track_event)-Handler der `RTCPeerConnection` hinzu, um das Ereignis zu erfassen, wenn der Peer beginnt, eine neue Spur zu empfangen.
Innerhalb des Handlers erstellen wir ein `RTCRtpScriptTransform` und fügen es `event.receiver.transform` hinzu (`event.receiver` ist ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)).
Wie im vorherigen Abschnitt nimmt der Konstruktor ein Objekt mit einer `name`-Eigenschaft auf, verwendet jedoch hier `receiverTransform` als Wert, um dem Worker mitzuteilen, dass Frames eingehen.

```js
peerConnection.ontrack = (event) => {
  const worker = new Worker("worker.js");
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    name: "receiverTransform",
  });
  receivedVideo.srcObject = event.streams[0];
};
```

Beachten Sie erneut, dass die Transformstream jederzeit hinzugefügt werden kann.
Durch das Hinzufügen im `track`-Ereignishandler wird jedoch sichergestellt, dass der Transformstream den ersten kodierten Frame für die Spur erhält.

## Worker-Implementierung

Das Workerskript muss einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis implementieren, indem eine [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) erstellt wird, die den `event.transformer.readable` ([`ReadableStream`](/de/docs/Web/API/ReadableStream))-Stream durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zum `event.transformer.writable` ([`WritableStream`](/de/docs/Web/API/WritableStream))-Stream leitet.

Ein Worker könnte sowohl eingehende als auch ausgehende kodierte Frames transformieren oder beide Szenarien unterstützen, und der Transform könnte fest codiert sein oder zur Laufzeit unter Verwendung von Informationen aus der Webanwendung konfiguriert werden.

### Grundlegende WebRTC Encoded Transform

Das folgende Beispiel zeigt einen grundlegenden WebRTC Encoded Transform, der alle Bits in eingereihten Frames negiert.
Es verwendet oder benötigt keine vom Hauptthread übergebenen Optionen, da derselbe Algorithmus in der Sender-Pipeline verwendet werden kann, um die Bits zu negieren, und in der Empfänger-Pipeline, um sie wiederherzustellen.

Der Code implementiert einen Ereignishandler für das `rtctransform`-Ereignis.
Dieser erstellt einen [`TransformStream`](/de/docs/Web/API/TransformStream), leitet dann durch ihn unter Verwendung von [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough), und leitet schließlich zu `event.transformer.writable` unter Verwendung von [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo) weiter.

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

Die Implementierung des WebRTC Encoded Transform ist ähnlich wie ein "generischer" [`TransformStream`](/de/docs/Web/API/TransformStream), jedoch mit einigen wichtigen Unterschieden.
Wie der generische Stream nimmt sein [Konstruktor](/de/docs/Web/API/TransformStream/TransformStream#parameters) ein Objekt, das eine _optionale_ [`start()`](/de/docs/Web/API/TransformStream/TransformStream#startcontroller)-Methode definiert, die bei der Konstruktion aufgerufen wird, eine [`flush()`](/de/docs/Web/API/TransformStream/TransformStream#flushcontroller)-Methode, die aufgerufen wird, wenn der Stream geschlossen wird, und eine [`transform()`](/de/docs/Web/API/TransformStream/TransformStream#transformchunk_controller)-Methode, die jedes Mal aufgerufen wird, wenn ein Chunk verarbeitet werden muss.
Im Gegensatz zum generischen Konstruktor werden alle im Konstruktorobjekt übergebenen `writableStrategy`- oder `readableStrategy`-Eigenschaften ignoriert, und die Warteschlangenstrategie wird vollständig vom Benutzer-Agenten verwaltet.

Die `transform()`-Methode unterscheidet sich auch insoweit, als dass sie entweder einen [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) anstelle eines generischen "Chunks" erhält.
Der hier gezeigte Code für die Methode ist nicht besonders bemerkenswert, außer dass er zeigt, wie man den Frame in eine Form konvertiert, in der er modifiziert und anschließend im Stream eingereiht werden kann.

### Verwendung getrennter Sender- und Empfänger-Transforms

Das vorherige Beispiel funktioniert, wenn die Transform-Funktion beim Senden und Empfangen dieselbe ist, in vielen Fällen werden die Algorithmen jedoch unterschiedlich sein.
Sie könnten separate Worker-Skripte für den Sender und den Empfänger verwenden oder beide Fälle in einem Worker wie unten gezeigt behandeln.

Wenn der Worker sowohl für den Sender als auch den Empfänger verwendet wird, muss er wissen, ob der aktuelle kodierte Frame vom Codec ausgehend oder vom Paketierer eingehend ist.
Diese Information kann mit der zweiten Option im [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) angegeben werden.
Zum Beispiel können wir einen separaten `RTCRtpScriptTransform` für den Sender und den Empfänger definieren, indem wir denselben Worker und ein Optionsobjekt mit der Eigenschaft `name` übergeben, das angibt, ob der Transform im Sender oder Empfänger verwendet wird (wie in den vorherigen Abschnitten oben gezeigt).
Diese Information ist dann im Worker in `event.transformer.options` verfügbar.

In diesem Beispiel implementieren wir den `onrtctransform`-Ereignishandler auf dem globalen dedizierten Worker-Umfangsobjekt.
Der Wert der `name`-Eigenschaft wird verwendet, um zu bestimmen, welcher `TransformStream` konstruiert werden soll (die tatsächlichen Konstruktormethoden werden nicht gezeigt).

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

Beachten Sie, dass der Code zum Erstellen der Pipe-Kette derselbe wie im vorherigen Beispiel ist.

### Laufzeitkommunikation mit dem Transform

Der [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) erlaubt es Ihnen, Optionen und Transferobjekte an den Worker zu übergeben.
Im vorherigen Beispiel haben wir statische Informationen übergeben, aber manchmal möchte man den Transform-Algorithmus im Worker zur Laufzeit ändern oder Informationen vom Worker zurück erhalten.
Zum Beispiel könnte ein WebRTC-Konferenzanruf, der Verschlüsselung unterstützt, einen neuen Schlüssel dem Algorithmus hinzufügen müssen, der vom Transform verwendet wird.

Obwohl es möglich ist, Informationen zwischen dem Worker, der den Transform-Code ausführt, und dem Hauptthread mit [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) zu teilen, ist es im Allgemeinen einfacher, einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) als eine [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform)-Option zu teilen, da dann der Kanal-Kontext direkt in den `event.transformer.options` verfügbar ist, wenn Sie einen neuen kodierten Frame behandeln.

Der folgende Code erstellt einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) und [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) dessen zweiten Port an den Worker.
Der Hauptthread und der Transform können anschließend über den ersten und zweiten Port kommunizieren.

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
Der folgende Code zeigt, wie man am Port auf das `message`-Ereignis hört, um Nachrichten vom Hauptthread zu erhalten.
Sie können den Port auch verwenden, um Nachrichten an den Hauptthread zu senden.

```js
event.transformer.options.port.onmessage = (event) => {
  // The message payload is in 'event.data';
  console.log(event.data);
};
```

### Auslösen eines Schlüssel-Frames

Rohe Videos werden selten gesendet oder gespeichert, da sie viel Platz und Bandbreite verbrauchen, um jedes Frame als vollständiges Bild darzustellen.
Stattdessen generieren Codecs periodisch einen "Schlüssel-Frame", der genügend Informationen enthält, um ein vollständiges Bild zu konstruieren, und senden zwischen den Schlüssel-Frames "Delta-Frames", die nur die Änderungen seit dem letzten Delta-Frame einschließen.
Obwohl dies weitaus effizienter ist als das Senden von rohem Video, bedeutet es, dass, um das Bild, das mit einem bestimmten Delta-Frame assoziiert ist, anzuzeigen, Sie den letzten Schlüssel-Frame und alle nachfolgenden Delta-Frames benötigen.

Dies kann eine Verzögerung für neue Benutzer verursachen, die einer WebRTC-Konferenzanwendung beitreten, da sie das Video nicht anzeigen können, bis sie ihren ersten Schlüssel-Frame erhalten haben.
Ähnlich wäre es, wenn ein kodierter Transform zur Verschlüsselung von Frames verwendet wurde, der Empfänger nicht in der Lage, das Video anzuzeigen, bis er den ersten Schlüssel-Frame erhält, der mit seinem Schlüssel verschlüsselt wurde.

Um sicherzustellen, dass ein neuer Schlüssel-Frame so früh wie möglich bei Bedarf gesendet werden kann, hat das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt in `event.transformer` zwei Methoden: [`RTCRtpScriptTransformer.generateKeyFrame()`](/de/docs/Web/API/RTCRtpScriptTransformer/generateKeyFrame), die den Codec dazu bringt, einen Schlüssel-Frame zu erzeugen, und [`RTCRTpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest), die ein Empfänger verwenden kann, um einen Schlüssel-Frame vom Sender anzufordern.

Das folgende Beispiel zeigt, wie der Hauptthread einen Verschlüsselungsschlüssel an einen Sender-Transform übergeben und den Codec dazu veranlassen könnte, einen Schlüssel-Frame zu erzeugen.
Beachten Sie, dass der Hauptthread keinen direkten Zugriff auf das [`RTCRTpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt hat, sodass er den Schlüssel und die Einschränkungskennung ("rid") an den Worker weitergeben muss (das "rid" ist eine Stream-ID, die den Encoder angibt, der den Schlüssel-Frame erzeugen muss).
Hier tun wir das mit einem `MessageChannel`, unter Verwendung dasselbe Muster wie in der vorherigen Abschnitt.
Der Code geht davon aus, dass es bereits eine Peer-Verbindung gibt und dass `videoSender` ein [`RTCRTpSender`](/de/docs/Web/API/RTCRtpSender) ist.

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

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignishandler im Worker erhält den Port und verwendet ihn, um auf `message`-Ereignisse vom Hauptthread zu hören.
Wenn ein Ereignis empfangen wird, erhält es das `rid` und den `key` und ruft dann `generateKeyFrame()` auf.

```js
event.transformer.options.port.onmessage = (event) => {
  const { rid, key } = event.data;
  // key is used by the transformer to encrypt frames (not shown)

  // Get codec to generate a new key frame using the rid
  // Here 'rcEvent' is the rtctransform event.
  rcEvent.transformer.generateKeyFrame(rid);
};
```

Der Code für einen Empfänger, um einen neuen Schlüssel-Frame anzufordern, wäre fast identisch, außer dass "rid" nicht spezifiziert wird.
Hier ist der Code nur für den Port-Nachrichtenhandler:

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
