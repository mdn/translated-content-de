---
title: Verwenden von WebRTC Encoded Transforms
slug: Web/API/WebRTC_API/Using_Encoded_Transforms
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{DefaultAPISidebar("WebRTC")}}

WebRTC Encoded Transforms bieten einen Mechanismus zur Einführung einer leistungsstarken [Stream API](/de/docs/Web/API/Streams_API) zum Modifizieren von enkodierten Video- und Audio-Frames in den eingehenden und ausgehenden WebRTC-Pipelines.
Dies ermöglicht Anwendungsfälle wie die Ende-zu-Ende-Verschlüsselung von enkodierten Frames durch Drittanbietercode.

Die API definiert Objekte sowohl für den Hauptthread als auch für den Worker.
Die Hauptthread-Schnittstelle ist eine {{domxref("RTCRtpScriptTransform")}} Instanz, die bei der Konstruktion den {{domxref("Worker")}} angibt, der den Transformator-Code implementieren soll.
Die Transformation im Worker wird in die eingehende oder ausgehende WebRTC-Pipeline eingefügt, indem der `RTCRtpScriptTransform` zum {{domxref("RTCRtpReceiver.transform")}} oder {{domxref("RTCRtpSender.transform")}} hinzugefügt wird.

Ein entsprechendes {{domxref("RTCRtpScriptTransformer")}} Objekt wird im Worker-Thread erstellt, das über eine {{domxref("ReadableStream")}} `readable` Eigenschaft, eine {{domxref("WritableStream")}} `writable` Eigenschaft und ein `options` Objekt verfügt, das vom zugehörigen {{domxref("RTCRtpScriptTransform")}} Konstruktor übergeben wird.
Enkodierte Video-Frames ({{domxref("RTCEncodedVideoFrame")}}) oder Audio-Frames ({{domxref("RTCEncodedAudioFrame")}}) aus der WebRTC-Pipeline werden zur Verarbeitung auf `readable` enqueuet.

Der `RTCRtpScriptTransformer` wird als `transformer` Eigenschaft des {{domxref("DedicatedWorkerGlobalScope/rtctransform_event", "rtctransform")}} Ereignisses verfügbar gemacht, das global im Worker ausgelöst wird, wann immer ein enkodierter Frame zur Verarbeitung enqueued wird (und zunächst beim Erstellen des entsprechenden {{domxref("RTCRtpScriptTransform")}}).
Der Worker-Code muss einen Handler für das Ereignis implementieren, der enkodierte Frames von `transformer.readable` liest, diese bei Bedarf modifiziert und sie in der gleichen Reihenfolge ohne Duplikate zu `transformer.writable` schreibt.

Während die Schnittstelle keine weiteren Einschränkungen für die Implementierung auferlegt, ist ein natürlicher Weg, die Frames zu transformieren, eine [Pipe Chain](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) zu erstellen, die Frames auf dem `event.transformer.readable` Stream durch einen {{DOMxRef("TransformStream")}} zum `event.transformer.writable` Stream sendet.
Wir können die `event.transformer.options` Eigenschaft verwenden, um jeglichen Transformcode zu konfigurieren, der davon abhängt, ob der Transformator eingehende Frames vom Paketierer oder ausgehende Frames von einem Codec enqueueet.

Die {{domxref("RTCRtpScriptTransformer")}} Schnittstelle bietet auch Methoden, die beim Senden von enkodiertem Video verwendet werden können, um den Codec dazu zu bringen, einen "Key"-Frame zu generieren, und beim Empfangen von Video, um zu verlangen, dass ein neuer Key-Frame gesendet wird.
Diese können nützlich sein, um einem Empfänger zu ermöglichen, das Video schneller zu sehen, wenn (zum Beispiel) er einer Konferenz beitritt, während Delta-Frames gesendet werden.

Die folgenden Beispiele bieten spezifische Beispiele, wie man das Framework mit einer auf einem {{DOMxRef("TransformStream")}} basierenden Implementierung verwendet.

## Testen ob enkodierte Transformationen unterstützt werden

Testen Sie, ob [enkodierte Transformationen unterstützt werden](#browserkompatibilität), indem Sie das Vorhandensein von {{domxref("RTCRtpSender.transform")}} (oder {{domxref("RTCRtpReceiver.transform")}}) prüfen:

```js
const supportsEncodedTransforms =
  window.RTCRtpSender && "transform" in RTCRtpSender.prototype;
```

## Hinzufügen einer Transformation für ausgehende Frames

Eine im Worker laufende Transformation wird in die ausgehende WebRTC-Pipeline eingefügt, indem der entsprechende `RTCRtpScriptTransform` dem {{domxref("RTCRtpSender.transform")}} für einen ausgehenden Track zugewiesen wird.

Dieses Beispiel zeigt, wie Sie Video von der Webcam eines Benutzers über WebRTC streamen und dabei eine WebRTC-encoded Transformation hinzufügen, um die ausgehenden Streams zu modifizieren.
Der Code geht davon aus, dass es eine {{domxref("RTCPeerConnection")}} namens `peerConnection` gibt, die bereits mit einem Remote-Peer verbunden ist.

Zuerst holen wir uns einen {{domxref("MediaStreamTrack")}}, indem wir {{domxref("MediaDevices/getUserMedia", "getUserMedia()")}} verwenden, um einen Video-{{domxref("MediaStream")}} von einem Mediengerät zu erhalten, und dann die {{domxref("MediaStream.getTracks()")}} Methode, um den ersten {{domxref("MediaStreamTrack")}} im Stream zu holen.

Der Track wird der Peer-Verbindung mit {{domxref("RTCPeerConnection/addTrack()", "addTrack()")}} hinzugefügt, was damit beginnt, ihn an den Remote-Peer zu streamen.
Die `addTrack()` Methode gibt den {{domxref("RTCRtpSender")}} zurück, der verwendet wird, um den Track zu senden.

```js
// Get Video stream and MediaTrack
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getTracks();
const videoSender = peerConnection.addTrack(track, stream);
```

Ein `RTCRtpScriptTransform` wird dann unter Angabe eines Worker-Skripts, das die Transformation definiert, und eines optionalen Objekts, das verwendet werden kann, um beliebige Nachrichten an den Worker zu übermitteln (in diesem Fall haben wir eine `name` Eigenschaft mit dem Wert "senderTransform" verwendet, um dem Worker mitzuteilen, dass diese Transformation dem ausgehenden Stream hinzugefügt wird) konstruiert.
Wir fügen die Transformation zur ausgehenden Pipeline hinzu, indem wir sie der {{domxref("RTCRtpSender.transform")}} Eigenschaft zuweisen.

```js
// Create a worker containing a TransformStream
const worker = new Worker("worker.js");
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

Der Abschnitt [Verwenden separater Sender- und Empfängertransformationen](#verwenden_separater_sender-_und_empfängertransformationen) unten zeigt, wie der `name` in einem Worker verwendet werden könnte.

Beachten Sie, dass Sie die Transformation jederzeit hinzufügen können, aber indem Sie sie direkt nach dem Aufruf von `addTrack()` hinzufügen, wird die Transformation den ersten enkodierten Frame erhalten, der gesendet wird.

## Hinzufügen einer Transformation für eingehende Frames

Eine im Worker laufende Transformation wird in die eingehende WebRTC-Pipeline eingefügt, indem der entsprechende `RTCRtpScriptTransform` dem {{domxref("RTCRtpReceiver.transform")}} für einen eingehenden Track zugewiesen wird.

Dieses Beispiel zeigt, wie Sie eine Transformation hinzufügen, um einen eingehenden Stream zu modifizieren.
Der Code geht davon aus, dass es eine {{domxref("RTCPeerConnection")}} namens `peerConnection` gibt, die bereits mit einem Remote-Peer verbunden ist.

Zuerst fügen wir einen `RTCPeerConnection` [`track` Event](/de/docs/Web/API/RTCPeerConnection/track_event) Handler hinzu, um das Ereignis zu erfassen, wenn der Peer beginnt, einen neuen Track zu empfangen.
Im Handler konstruieren wir einen `RTCRtpScriptTransform` und fügen ihn `event.receiver.transform` hinzu (`event.receiver` ist ein {{domxref("RTCRtpReceiver")}}).
Wie im vorherigen Abschnitt nimmt der Konstruktor ein Objekt mit `name` Eigenschaft, aber hier verwenden wir `receiverTransform` als Wert, um dem Worker mitzuteilen, dass Frames eingehend sind.

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
Das Hinzufügen im `track` Event-Handler stellt jedoch sicher, dass der Transformstream den ersten enkodierten Frame für den Track erhält.

## Worker-Implementierung

Das Worker-Skript muss einen Handler für das {{domxref("DedicatedWorkerGlobalScope/rtctransform_event", "rtctransform")}} Ereignis implementieren, indem eine [Pipe-Chain](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) erstellt wird, die den `event.transformer.readable` ({{DOMxRef("ReadableStream")}}) Stream durch einen {{DOMxRef("TransformStream")}} zum `event.transformer.writable` ({{DOMxRef("WritableStream")}}) Stream leitet.

Ein Worker könnte das Transformieren von eingehenden oder ausgehenden enkodierten Frames oder beides unterstützen, und die Transformation könnte festcodiert oder zur Laufzeit mit Informationen aus der Webanwendung konfiguriert werden.

### Basis WebRTC Encoded Transform

Das folgende Beispiel zeigt eine einfache WebRTC Encoded Transform, die alle Bits in enqueueten Frames negiert.
Es verwendet oder benötigt keine Optionen, die vom Hauptthread übergeben werden, da derselbe Algorithmus in der Sender-Pipeline verwendet werden kann, um die Bits zu negieren und in der Empfänger-Pipeline, um sie wiederherzustellen.

Der Code implementiert einen Event-Handler für das `rtctransform` Ereignis.
Dieser konstruiert einen {{DOMxRef("TransformStream")}}, leitet dann durch ihn mit {{domxref("ReadableStream.pipeThrough()")}} und leitet schließlich zu `event.transformer.writable` mit {{domxref("ReadableStream.pipeTo()")}}.

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

Die Implementierung der WebRTC encoded Transform ist ähnlich wie ein "generischer" {{DOMxRef("TransformStream")}}, aber mit einigen wichtigen Unterschieden.
Wie der generische Stream nimmt der [Konstruktor](/de/docs/Web/API/TransformStream/TransformStream#parameters) ein Objekt, das eine _optionale_ [`start()`](/de/docs/Web/API/TransformStream/TransformStream#startcontroller) Methode definiert, die beim Erstellen aufgerufen wird, eine [`flush()`](/de/docs/Web/API/TransformStream/TransformStream#flushcontroller) Methode, die aufgerufen wird, wenn der Stream kurz vor dem Schließen steht, und eine [`transform()`](/de/docs/Web/API/TransformStream/TransformStream#transformchunk_controller) Methode, die jedes Mal aufgerufen wird, wenn es einen zu verarbeitenden Chunk gibt.
Im Gegensatz zum generischen Konstruktor werden alle `writableStrategy` oder `readableStrategy` Eigenschaften, die im Konstruktorobjekt übergeben werden, ignoriert, und die Warteschlangenstrategie wird vollständig vom Benutzeragenten verwaltet.

Die `transform()` Methode unterscheidet sich auch darin, dass sie entweder ein {{domxref("RTCEncodedVideoFrame")}} oder {{domxref("RTCEncodedAudioFrame")}} und nicht einen generischen "Chunk" erhält.
Der hier gezeigte Code für die Methode ist nicht bemerkenswert, außer dass er zeigt, wie man den Frame in eine Form konvertiert, in der man ihn modifizieren und danach in der Stream-Warteschlange wieder einreihen kann.

### Verwenden separater Sender- und Empfängertransformationen

Das vorherige Beispiel funktioniert, wenn die Transformationsfunktion beim Senden und Empfangen dieselbe ist, aber in vielen Fällen werden die Algorithmen unterschiedlich sein.
Sie könnten separate Worker-Skripte für Sender und Empfänger verwenden oder beide Fälle in einem Worker wie unten gezeigt behandeln.

Wenn der Worker sowohl für den Sender als auch für den Empfänger verwendet wird, muss er wissen, ob der aktuelle enkodierte Frame ausgehend von einem Codec oder eingehend von einem Paketierer ist.
Diese Information kann mit der zweiten Option im [`RTCRtpScriptTransform` Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) angegeben werden.
Zum Beispiel können wir einen separaten `RTCRtpScriptTransform` für den Sender und den Empfänger definieren, denselben Worker übergeben und ein Optionsobjekt mit der Eigenschaft `name`, die angibt, ob die Transformation beim Sender oder Empfänger verwendet wird (wie in den vorhergehenden Abschnitten gezeigt).
Die Information ist dann im Worker in `event.transformer.options` verfügbar.

In diesem Beispiel implementieren wir den `onrtctransform` Ereignis-Handler im globalen dedizierten Workererweiterungsobjekt.
Der Wert der `name` Eigenschaft wird verwendet, um zu bestimmen, welchen `TransformStream` zu konstruieren (die eigentlichen Konstruktormethoden werden nicht gezeigt).

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

Beachten Sie, dass der Code zum Erstellen der Pipe-Chain der gleiche ist wie im vorherigen Beispiel.

### Laufzeitkommunikation mit der Transformation

Der [`RTCRtpScriptTransform` Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) erlaubt es Ihnen, Optionen und Übertragungsobjekte an den Worker zu übergeben.
Im vorherigen Beispiel haben wir statische Informationen übergeben, aber manchmal möchten Sie möglicherweise den Transformationsalgorithmus im Worker zur Laufzeit ändern oder Informationen vom Worker zurückerhalten.
Zum Beispiel könnte ein WebRTC-Konferenzanruf, der Verschlüsselung unterstützt, einen neuen Schlüssel in den Algorithmus einfügen müssen, der von der Transformation verwendet wird.

Während es möglich ist, Informationen zwischen dem Worker, der den Transformationscode ausführt, und dem Hauptthread mit {{domxref("Worker.postMessage()")}} zu teilen, ist es im Allgemeinen einfacher, einen {{domxref("MessageChannel")}} als [`RTCRtpScriptTransform` Konstruktor](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) Option zu teilen, da der Kanal-Kontext dann direkt im `event.transformer.options` verfügbar ist, wenn ein neuer enkodierter Rahmen behandelt wird.

Der Code unten erstellt einen {{domxref("MessageChannel")}} und [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) seinen zweiten Port an den Worker.
Der Hauptthread und die Transformation können anschließend über die ersten und zweiten Ports kommunizieren.

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
Der Code unten zeigt, wie Sie auf das `message` Ereignis des Ports hören könnten, um Nachrichten vom Hauptthread zu erhalten.
Sie können auch den Port verwenden, um Nachrichten zurück an den Hauptthread zu senden.

```js
event.transformer.options.port.onmessage = (event) => {
  // The message payload is in 'event.data';
  console.log(event.data);
};
```

### Auslösen eines Key-Frames

Rohvideo wird selten gesendet oder gespeichert, da es viel Platz und Bandbreite beansprucht, um jedes Frame als vollständiges Bild darzustellen.
Stattdessen erzeugen Codecs periodisch einen "Key-Frame", der ausreichend Information enthält, um ein vollständiges Bild zu konstruieren, und zwischen den Key-Frames werden "Delta-Frames" gesendet, die nur die Änderungen seit dem letzten Delta-Frame enthalten.
Obwohl dies wesentlich effizienter ist als das Senden von Rohvideo, bedeutet es, dass, um das mit einem bestimmten Delta-Frame verbundene Bild anzuzeigen, der letzte Key-Frame und alle nachfolgenden Delta-Frames benötigt werden.

Das kann zu Verzögerungen für neue Benutzer führen, die einer WebRTC-Konferenzanwendung beitreten, da sie erst Video anzeigen können, wenn sie den ersten Key-Frame erhalten haben.
Ebenso würde ein Empfangsteilnehmer erst in der Lage sein, Video anzuzeigen, wenn er den ersten Key-Frame empfängt, der mit seinem Schlüssel verschlüsselt ist, wenn ein enkodierter Transform zur Verschlüsselung von Frames verwendet wurde.

Um sicherzustellen, dass ein neuer Key-Frame so früh wie möglich gesendet werden kann, wenn er benötigt wird, hat das {{domxref("RTCRtpScriptTransformer")}} Objekt im `event.transformer` zwei Methoden: {{domxref("RTCRtpScriptTransformer.generateKeyFrame()")}}, die den Codec dazu bringt, einen Key-Frame zu generieren, und {{domxref("RTCRtpScriptTransformer.sendKeyFrameRequest()")}}, die ein Empfänger verwenden kann, um einen Key-Frame vom Sender zu verlangen.

Das folgende Beispiel zeigt, wie der Hauptthread einen Verschlüsselungsschlüssel an eine Sendertransformation übermitteln und den Codec dazu bringen könnte, einen Key-Frame zu generieren.
Beachten Sie, dass der Hauptthread keinen direkten Zugriff auf das {{domxref("RTCRtpScriptTransformer")}} Objekt hat, also muss er den Schlüssel und die restriktionskennzeichner ("rid") an den Worker übergeben (die "rid" ist eine Stream-ID, die den Encoder angibt, der den Key-Frame generieren muss).
Hier machen wir das mit einem `MessageChannel`, unter Verwendung desselben Musters wie im vorherigen Abschnitt.
Der Code geht davon aus, dass es bereits eine Peer-Verbindung gibt, und dass `videoSender` ein {{domxref("RTCRtpSender")}} ist.

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

Der {{domxref("DedicatedWorkerGlobalScope/rtctransform_event", "rtctransform")}} Event-Handler im Worker erhält den Port und nutzt ihn, um auf `message` Ereignisse vom Hauptthread zu hören.
Wenn ein Ereignis empfangen wird, erhält er die `rid` und `key` und ruft dann `generateKeyFrame()` auf.

```js
event.transformer.options.port.onmessage = (event) => {
  const { rid, key } = event.data;
  // key is used by the transformer to encrypt frames (not shown)

  // Get codec to generate a new key frame using the rid
  // Here 'rcevent' is the rtctransform event.
  rcevent.transformer.generateKeyFrame(rid);
};
```

Der Code für einen Empfänger, um einen neuen Key-Frame anzufordern, wäre fast identisch, nur dass "rid" nicht angegeben wird.
Hier ist der Code nur für den Portnachrichten-Handler:

```js
event.transformer.options.port.onmessage = (event) => {
  const { key } = event.data;
  // key is used by the transformer to decrypt frames (not shown)

  // Request sender to emit a key frame.
  transformer.sendKeyFrameRequest();
};
```

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCRtpScriptTransform")}}
- {{domxref("RTCRtpReceiver.transform")}}
- {{domxref("RTCRtpSender.transform")}}
- {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}} Ereignis
- {{domxref("RTCTransformEvent")}}
- {{domxref("RTCRtpScriptTransformer")}}
- {{domxref("RTCEncodedVideoFrame")}}
- {{domxref("RTCEncodedAudioFrame")}}
