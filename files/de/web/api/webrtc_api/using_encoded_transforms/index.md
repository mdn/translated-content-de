---
title: Verwendung von WebRTC Encoded Transforms
slug: Web/API/WebRTC_API/Using_Encoded_Transforms
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{DefaultAPISidebar("WebRTC")}}

WebRTC Encoded Transforms bieten einen Mechanismus zur Einbindung einer leistungsstarken [Stream API](/de/docs/Web/API/Streams_API) für die Modifikation von kodierten Video- und Audio-Frames in die eingehenden und ausgehenden WebRTC-Pipelines.
Dies ermöglicht Anwendungsfälle wie die Ende-zu-Ende-Verschlüsselung von kodierten Frames durch Drittanbieter-Code.

Die API definiert sowohl Objekte für den Haupt-Thread als auch für Worker-Seiten.
Die Haupt-Thread-Schnittstelle ist eine Instanz von [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform), die bei der Erstellung den [`Worker`](/de/docs/Web/API/Worker) spezifiziert, der den Transformierungscode implementieren soll.
Der im Worker laufende Transformator wird in die eingehende oder ausgehende WebRTC-Pipeline eingefügt, indem der `RTCRtpScriptTransform` dem [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) bzw. [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) hinzugefügt wird.

Ein entsprechendes [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt wird im Worker-Thread erstellt, das über eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Eigenschaft `readable`, eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Eigenschaft `writable` sowie ein `options`-Objekt verfügt, das vom zugehörigen [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)-Konstruktor übergeben wird.
Kodierte Video-Frames ([`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)) oder Audio-Frames ([`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)) aus der WebRTC-Pipeline werden zur Verarbeitung in `readable` eingereiht.

Der `RTCRtpScriptTransformer` wird dem Code als `transformer`-Eigenschaft des [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignisses zur Verfügung gestellt, das im globalen Worker-Bereich immer dann ausgelöst wird, wenn ein kodierter Frame zur Verarbeitung eingereiht wird (und zunächst bei der Erstellung des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)).
Der Worker-Code muss einen Handler für das Ereignis implementieren, der kodierte Frames aus `transformer.readable` liest, sie nach Bedarf modifiziert und sie in der gleichen Reihenfolge ohne Duplikate in `transformer.writable` schreibt.

Obwohl die Schnittstelle keine weiteren Einschränkungen für die Implementierung vorgibt, ist eine natürliche Möglichkeit zur Transformation der Frames die Erstellung einer [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains), die Frames, die im `event.transformer.readable`-Stream eingereiht sind, durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) an den `event.transformer.writable`-Stream sendet.
Wir können die `event.transformer.options`-Eigenschaft nutzen, um jeglichen Transformationscode zu konfigurieren, der davon abhängt, ob der Transformator eingehende Frames vom Paketierer oder ausgehende Frames von einem Codec einreiht.

Die [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Schnittstelle bietet auch Methoden, die verwendet werden können, um beim Senden kodierter Videos den Codec zu veranlassen, einen "Schlüssel"-Frame zu erzeugen, und beim Empfang von Videos anzufordern, dass ein neuer Schlüssel-Frame gesendet wird.
Diese können nützlich sein, um einem Empfänger zu ermöglichen, das Video schneller anzusehen, wenn er (zum Beispiel) einem Konferenzgespräch beitritt, während delta Frames gesendet werden.

Die folgenden Beispiele bieten detailliertere Beispiele dafür, wie das Framework mit einer auf dem [`TransformStream`](/de/docs/Web/API/TransformStream) basierenden Implementierung verwendet wird.

## Testen, ob Encoded Transforms unterstützt werden

Testen Sie, ob [Encoded Transforms unterstützt werden](#browser-kompatibilität), indem Sie nach der Existenz von [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) (oder [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform)) suchen:

```js
const supportsEncodedTransforms =
  window.RTCRtpSender && "transform" in RTCRtpSender.prototype;
```

## Hinzufügen eines Transforms für ausgehende Frames

Ein Transformator, der in einem Worker läuft, wird in die ausgehende WebRTC-Pipeline eingefügt, indem sein entsprechender `RTCRtpScriptTransform` dem [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) für einen ausgehenden Track zugewiesen wird.

Dieses Beispiel zeigt, wie man Video von der Webcam eines Nutzers über WebRTC streamen könnte, mit Hinzufügen eines WebRTC Encoded Transform zur Modifikation der ausgehenden Streams.
Der Code geht davon aus, dass es eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` gibt, die bereits mit einem entfernten Peer verbunden ist.

Zuerst erhalten wir ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), indem wir [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwenden, um einen Video-[`MediaStream`](/de/docs/Web/API/MediaStream) von einem Mediengerät zu erhalten, und dann die Methode [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks), um den ersten [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) im Stream zu bekommen.

Der Track wird der Peer-Verbindung mit [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) hinzugefügt, was startet ihn zum entfernten Peer zu streamen.
Die `addTrack()`-Methode gibt den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) zurück, der verwendet wird, um den Track zu senden.

```js
// Get Video stream and MediaTrack
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getTracks();
const videoSender = peerConnection.addTrack(track, stream);
```

Ein `RTCRtpScriptTransform` wird dann erstellt, indem ein Worker-Skript übernommen wird, das den Transform definiert, und ein optionales Objekt, das verwendet werden kann, um beliebige Nachrichten an den Worker zu übermitteln (in diesem Fall haben wir eine `name`-Eigenschaft mit dem Wert "senderTransform" verwendet, um dem Worker mitzuteilen, dass dieser Transformator zum ausgehenden Stream hinzugefügt wird).
Wir fügen den Transformator der ausgehenden Pipeline hinzu, indem wir ihn der [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform)-Eigenschaft zuweisen.

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Der Abschnitt [Verwendung separater Sender- und Empfänger-Transforms](#verwendung_separater_sender-_und_empfänger-transformatore) unten zeigt, wie der `name` in einem Worker verwendet werden könnte.

Beachten Sie, dass Sie den Transformator jederzeit hinzufügen können, aber indem Sie ihn sofort nach dem Aufruf von `addTrack()` hinzufügen, erhält der Transformator den ersten kodierten Frame, der gesendet wird.

## Hinzufügen eines Transforms für eingehende Frames

Ein Transformator, der in einem Worker läuft, wird in die eingehende WebRTC-Pipeline eingefügt, indem sein entsprechender `RTCRtpScriptTransform` dem [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) für einen eingehenden Track zugewiesen wird.

Dieses Beispiel zeigt, wie Sie einen Transformator hinzufügen, um einen eingehenden Stream zu modifizieren.
Der Code geht davon aus, dass es eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) namens `peerConnection` gibt, die bereits mit einem entfernten Peer verbunden ist.

Zuerst fügen wir einen `RTCPeerConnection`-[`track`-Ereignis](/de/docs/Web/API/RTCPeerConnection/track_event)-Handler hinzu, um das Ereignis zu erfassen, wenn der Peer beginnt, einen neuen Track zu empfangen.
Innerhalb des Handlers konstruieren wir einen `RTCRtpScriptTransform` und fügen ihn `event.receiver.transform` hinzu (`event.receiver` ist ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)).
Wie im vorhergehenden Abschnitt nimmt der Konstruktor ein Objekt mit der Eigenschaft `name`, aber hier verwenden wir `receiverTransform` als Wert, um dem Worker mitzuteilen, dass Frames eingehen.

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
Durch das Hinzufügen im `track`-Ereignishandler wird jedoch sichergestellt, dass der Transform-Stream den ersten kodierten Frame für den Track erhält.

## Worker-Implementierung

Das Worker-Skript muss einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis implementieren und eine [Pipe-Kette](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) erstellen, die den `event.transformer.readable`-([`ReadableStream`](/de/docs/Web/API/ReadableStream))-Stream durch einen [`TransformStream`](/de/docs/Web/API/TransformStream) zum `event.transformer.writable`-([`WritableStream`](/de/docs/Web/API/WritableStream))-Stream piped.

Ein Worker könnte das Transformieren eintreffender oder ausgehender kodierter Frames unterstützen, oder beides, und das Transformieren könnte hart codiert werden oder zur Laufzeit mit Informationen konfiguriert werden, die von der Webanwendung übergeben werden.

### Basis-WebRTC Encoded Transform

Das folgende Beispiel zeigt einen Basis-WebRTC Encoded Transform, der alle Bits in den eingereihten Frames negiert.
Es verwendet keine Optionen, die aus dem Haupt-Thread übergeben werden, weil derselbe Algorithmus im Sender-Pipeline verwendet werden kann, um die Bits zu negieren, und in der Empfänger-Pipeline, um sie wiederherzustellen.

Der Code implementiert einen Ereignishandler für das `rtctransform`-Ereignis.
Dieser konstruiert einen [`TransformStream`](/de/docs/Web/API/TransformStream), pfad danach hindurch mit [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) und schließlich zu `event.transformer.writable` mit [`ReadableStream.pipeTo()`](/de/docs/Web/API/ReadableStream/pipeTo).

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

Die Implementierung des WebRTC Encoded Transform ist ähnlich einem „generischen“ [`TransformStream`](/de/docs/Web/API/TransformStream), aber mit einigen wichtigen Unterschieden.
Wie der generische Stream nimmt sein [Konstruktor](/de/docs/Web/API/TransformStream/TransformStream#parameters) ein Objekt, das eine _optionale_ [`start()`](/de/docs/Web/API/TransformStream/TransformStream#startcontroller)-Methode definiert, die beim Erstellen des Streams aufgerufen wird, eine [`flush()`](/de/docs/Web/API/TransformStream/TransformStream#flushcontroller)-Methode, die aufgerufen wird, wenn der Stream geschlossen wird, und eine [`transform()`](/de/docs/Web/API/TransformStream/TransformStream#transformchunk_controller)-Methode, die bei jedem zu bearbeitenden Chunk aufgerufen wird.
Im Gegensatz zum generischen Konstruktor werden alle `writableStrategy`- oder `readableStrategy`-Eigenschaften, die im Konstruktorobjekt übergeben werden, ignoriert und die Warteschlangenstrategie wird vollständig vom Nutzer-Agenten verwaltet.

Die `transform()`-Methode unterscheidet sich auch darin, dass sie entweder ein [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) oder ein [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) statt eines generischen „Chunks“ erhält.
Der tatsächliche hier gezeigte Code für die Methode ist nicht bemerkenswert, außer dass er zeigt, wie man den Frame in eine Form umwandelt, wo Sie ihn modifizieren und anschließend auf dem Stream einreihen können.

### Verwendung separater Sender- und Empfänger-Transformatore

Das vorherige Beispiel funktioniert, wenn die Transformationsfunktion beim Senden und Empfangen gleich ist, aber in vielen Fällen werden die Algorithmen unterschiedlich sein.
Sie könnten separate Worker-Skripte für den Sender und den Empfänger verwenden oder beide Fälle in einem Worker behandeln, wie unten gezeigt.

Wenn der Worker für sowohl Sender als auch Empfänger verwendet wird, muss er wissen, ob der aktuelle kodierte Frame aus einem Codec stammt oder aus dem Paketierer stammt.
Diese Informationen können mithilfe der zweiten Option im [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) angegeben werden.
Zum Beispiel können wir einen separaten `RTCRtpScriptTransform` für Sender und Empfänger definieren, den gleichen Worker übergeben und ein Optionsobjekt mit der Eigenschaft `name`, das angibt, ob der Transformator im Sender oder im Empfänger verwendet wird (wie in den vorhergehenden Abschnitten gezeigt).
Die Informationen sind dann im Worker in `event.transformer.options` verfügbar.

In diesem Beispiel implementieren wir den `onrtctransform`-Ereignishandler im globalen dedizierten Worker-Bereichsobjekt.
Der Wert der `name`-Eigenschaft wird verwendet, um zu bestimmen, welcher `TransformStream` konstruiert werden soll (die tatsächlichen Konstruktormethoden sind nicht gezeigt).

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

Beachten Sie, dass der Code zur Erstellung der Pipe-Kette der gleiche ist wie im vorhergehenden Beispiel.

### Laufzeitkommunikation mit dem Transformator

Der [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) ermöglicht es Ihnen, Optionen und Übertragungsobjekte an den Worker zu übergeben.
Im vorhergehenden Beispiel haben wir statische Informationen übergeben, aber manchmal möchten Sie den im Worker verwendeten Transformationsalgorithmus zur Laufzeit ändern oder Informationen vom Worker zurückerhalten.
Zum Beispiel könnte ein WebRTC-Konferenzgespräch, das Verschlüsselung unterstützt, einen neuen Schlüssel zum im Transformator verwendeten Algorithmus hinzufügen müssen.

Obwohl es möglich ist, Informationen zwischen dem Worker, der den Transformationscode ausführt, und dem Haupt-Thread mit [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) zu teilen, ist es im Allgemeinen einfacher, einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) als [`RTCRtpScriptTransform`-Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform)-Option zu teilen, da der Kanal-Kontext dann direkt in den `event.transformer.options` verfügbar ist, wenn Sie einen neuen kodierten Frame bearbeiten.

Der untenstehende Code erstellt einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) und [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) dessen zweiten Port an den Worker.
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
Der untenstehende Code zeigt, wie Sie auf das `message`-Ereignis des Ports hören könnten, um Nachrichten vom Haupt-Thread zu empfangen.
Sie können den Port auch verwenden, um Nachrichten zurück an den Haupt-Thread zu senden.

```js
event.transformer.options.port.onmessage = (event) => {
  // The message payload is in 'event.data';
  console.log(event.data);
};
```

### Auslösen eines Schlüssel-Frames

Rohvideos werden selten gesendet oder gespeichert, weil es viel Platz und Bandbreite erfordert, um jedes Frame als vollständiges Bild darzustellen.
Stattdessen generieren Codecs periodisch einen "Schlüssel"-Frame, der genügend Information enthält, um ein vollständiges Bild zu konstruieren, und zwischen Schlüssel-Frames werden "Delta Frames" gesendet, die einfach die Änderungen seit dem letzten Delta-Frame enthalten.
Während dies wesentlich effizienter ist als das Senden von Rohvideo, bedeutet es, dass um das Bild anzuzeigen, das mit einem bestimmten Delta-Frame verknüpft ist, Sie der letzte Schlüssel-Frame und alle nachfolgenden Delta-Frames benötigen.

Dies kann eine Verzögerung für neue Benutzer verursachen, die einer WebRTC-Konferenzanwendung beitreten, weil sie das Video nicht anzeigen können, bis sie ihren ersten Schlüssel-Frame empfangen haben.
Ähnlich, wenn ein kodierter Transformator verwendet wurde, um Frames zu verschlüsseln, wäre der Empfänger nicht in der Lage, das Video anzuzeigen, bis er den ersten Schlüssel-Frame erhält, der mit seinem Schlüssel verschlüsselt wurde.

Um sicherzustellen, dass ein neuer Schlüssel-Frame so früh wie möglich gesendet werden kann, wenn er benötigt wird, hat das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt in `event.transformer` zwei Methoden: [`RTCRtpScriptTransformer.generateKeyFrame()`](/de/docs/Web/API/RTCRtpScriptTransformer/generateKeyFrame), wodurch der Codec angeregt wird, einen Schlüssel-Frame zu erzeugen, und [`RTCRtpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest), die ein Empfänger verwenden kann, um vom Sender einen Schlüssel-Frame anzufordern.

Das folgende Beispiel zeigt, wie der Haupt-Thread einen Verschlüsselungsschlüssel an einen Sender-Transformator übermitteln und den Codec veranlassen könnte, einen Schlüssel-Frame zu erzeugen.
Beachten Sie, dass der Haupt-Thread keinen direkten Zugriff auf das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt hat, daher muss er den Schlüssel und die Einschränkungskennzeichnung ("rid") an den Worker übermitteln (der "rid" ist eine Stream-ID, die den Encoder angibt, der den Schlüssel-Frame erzeugen muss).
Hier tun wir dies mit einem `MessageChannel` und verwenden das gleiche Muster wie im vorhergehenden Abschnitt.
Der Code setzt voraus, dass bereits eine Peer-Verbindung besteht und dass `videoSender` ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) ist.

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

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignishandler im Worker erhält den Port und verwendet ihn, um auf `message`-Ereignisse vom Haupt-Thread zu hören.
Wenn ein Ereignis empfangen wird, erhält es die `rid` und `key`, und ruft dann `generateKeyFrame()` auf.

```js
event.transformer.options.port.onmessage = (event) => {
  const { rid, key } = event.data;
  // key is used by the transformer to encrypt frames (not shown)

  // Get codec to generate a new key frame using the rid
  // Here 'rcevent' is the rtctransform event.
  rcevent.transformer.generateKeyFrame(rid);
};
```

Der Code für einen Empfänger, um einen neuen Schlüssel-Frame anzufordern, wäre fast identisch, außer dass "rid" nicht spezifiziert wird.
Hier ist der Code nur für den Nachrichtenhandler des Ports:

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
