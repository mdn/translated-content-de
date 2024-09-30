---
title: "RTCRtpScriptTransformer: options-Eigenschaft"
short-title: options
slug: Web/API/RTCRtpScriptTransformer/options
l10n:
  sourceCommit: 4799bed9382147f0b0ff642a130a1c12ed59a28e
---

{{APIRef("WebRTC")}}

Die **`options`**-Eigenschaft, die schreibgeschützt ist, der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Schnittstelle gibt das Objekt zurück, das (optional) als zweiter Parameter [während der Konstruktion](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) übergeben wurde.

## Wert

Ein Objekt.

## Beschreibung

Die einfachste Verwendung von Optionen ist, dem Hauptthread anzuzeigen, ob der entsprechende [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) zur WebRTC-Sender- oder Empfänger-Pipeline hinzugefügt werden soll. Dies ist wichtig, wenn derselbe Worker für die Verarbeitung sowohl eingehender als auch ausgehender kodierter Frames verwendet wird, da der Code dadurch bestimmen kann, welcher Transform auf die Frames angewendet werden soll.

Optionen können auch verwendet werden, um den zweiten Port eines [Nachrichtenkanals](/de/docs/Web/API/Channel_Messaging_API) an den Worker-seitigen Transform weiterzugeben. Dieser Kanal kann dann verwendet werden, um dynamische Informationen an einen Transform-Stream zu senden, etwa wenn Verschlüsselungsschlüssel geändert oder hinzugefügt werden. Beachten Sie, dass Sie auch Nachrichten an den Transform mittels [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) senden könnten, jedoch müssten Sie die Nachrichten dann entsprechend umleiten, wenn der Worker in verschiedenen Kontexten verwendet wird (während eine Nachrichtenport-Option einen direkten Kanal für einen spezifischen Transform bereitstellt).

## Beispiele

### Anleitung, wie die aktuelle WebRTC-Pipeline angezeigt wird

[`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) wird mit einem bestimmten [`Worker`](/de/docs/Web/API/Worker) und Optionen konstruiert und dann entweder in die WebRTC-Ausgangs- oder Eingangspipeline eingefügt, indem es [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) oder [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) zugewiesen wird. Wenn derselbe Worker in den Transforms für die Eingang- und Ausgangspipeline verwendet wird, müssen Sie Optionen im Konstruktor bereitstellen, um anzuzeigen, ob kodierte Frames, die transformiert werden sollen, eingehend oder ausgehend sind.

Das Beispiel unten zeigt, wie dies für einen `RTCRtpScriptTransform`, der der Sender-Pipeline hinzugefügt wird, nachdem eine Spur zur Peer-Verbindung ([`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)) hinzugefügt wurde, getan werden könnte, und dann ein weiterer Transform zur Empfänger-Pipeline hinzugefügt wird, wenn eine Spur empfangen wird.

```js
// videoSender is an RTCRtpSender.
const videoSender = peerConnection.addTrack(track, mediaStream);
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

```js
peerConnection.ontrack = (event) => {
  // event.receiver is an RTCRtpReceiver
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    someOption: "receiverTransform",
  });
};
```

In jedem der oben genannten Fälle geben wir ein Objekt mit einem unterschiedlichen Wert für die Eigenschaft `name` des Options-Objekts an, welches die Pipeline anzeigt, zu der der Transform hinzugefügt wurde. Beachten Sie, dass die Namen und Werte der Eigenschaften in `options` willkürlich sind: Wichtig ist, dass sowohl der Hauptthread als auch der Worker-Thread wissen, welche Eigenschaften und Werte verwendet werden.

Der folgende Code zeigt, wie die übergebenen Optionen im Worker verwendet werden. Zuerst implementieren wir einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignis, das beim globalen Worker-Objekt bei der Konstruktion des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) und wenn neue Frames zur Verarbeitung in die Warteschlange gestellt werden, ausgelöst wird. `event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das über die Eigenschaften `readable`, `writable` und `options` verfügt.

```js
addEventListener("rtctransform", (event) => {
  let transform;
  // Select a transform based on passed options
  if (event.transformer.options.name == "senderTransform")
    transform = createSenderTransform(); // A TransformStream
  else if (event.transformer.options.name == "receiverTransform")
    transform = createReceiverTransform(); // A TransformStream
  else return;

  // Pipe frames from the readable to writeable through TransformStream
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Der Code erstellt einen anderen [`TransformStream`](/de/docs/Web/API/TransformStream) zur Verarbeitung ausgehender und eingehender Frames, indem er `createSenderTransform()` oder `createReceiverTransform()` basierend auf den übergebenen Optionen verwendet (dann leitet er Frames vom `readable` durch den ausgewählten `TransformStream` zum `writable`).

### Übergeben eines Nachrichtenports an einen Transform

Dieses Beispiel zeigt, wie ein [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API) erstellt wird und einer seiner Ports an den WebRTC-kodierten Transform, der im Worker läuft, übertragen wird. Dieser Hauptthread kann dann Objekte und Nachrichten an den Transformator im Worker senden und übertragen, und umgekehrt.

Der folgende Code erstellt zuerst einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) und erstellt dann einen `RTCRtpScriptTransform`, indem er den [`port2`](/de/docs/Web/API/MessageChannel/port2) Wert als Eigenschaft im Optionsargument übergibt. Der Port wird auch im Array, das als drittes Argument des Konstruktors übergeben wird, eingeschlossen, damit er in den Worker-Kontext übertragen wird.

```js
const channel = new MessageChannel();

const transform = new RTCRtpScriptTransform(
  worker,
  { purpose: "encrypter", port: channel.port2 },
  [channel.port2],
);
```

Der Worker kann dann den Port aus dem `rtctransform` Ereignis erhalten, das beim globalen Worker-Objekt ausgelöst wird.

```js
let messagePort;
addEventListener("rtctransform", (event) => {
  messagePort = event.transformer.options.port;
  // ... other transformer code
});
```

Code an jedem Ende des Kanals kann Objekte an das andere Ende senden und übertragen, indem er [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) verwendet und über dessen [`message`](/de/docs/Web/API/MessagePort/message_event) Ereignis eingehende Nachrichten abhört.

Zum Beispiel, wenn wir davon ausgehen, dass wir einen Verschlüsselungsschlüssel in einem `Uint8Array` getypten Array namens `encryptionKey` hatten, könnten wir ihn vom Hauptthread an den Worker übertragen, wie gezeigt:

```js
const encryptionKeyBuffer = encryptionKey.buffer;
channel.port1.postMessage(encryptionKeyBuffer, [encryptionKeyBuffer]);
```

Der Worker würde auf das `message`-Ereignis lauschen, um den Schlüssel zu erhalten:

```js
  messagePort.addEventListener("message", (event) => {
    const encryptionKeyBuffer = event.data;
    // ... Use the encryptionKeyBuffer for encryption or any other purpose
  };
```

Siehe [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API) für weitere Informationen und Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
