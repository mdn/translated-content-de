---
title: "RTCRtpScriptTransformer: options-Eigenschaft"
short-title: options
slug: Web/API/RTCRtpScriptTransformer/options
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("WebRTC")}}

Die **`options`**-Eigenschaft des [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Interface gibt das Objekt zurück, das (optional) als zweites Argument [während der Konstruktion](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) übergeben wurde.

## Wert

Ein Objekt.

## Beschreibung

Die einfachste Nutzung von `options` besteht darin, dass der Hauptthread anzeigt, ob der entsprechende [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) zur WebRTC-Sender- oder Empfänger-Pipeline hinzugefügt werden soll. Dies ist wichtig, wenn derselbe Worker sowohl für die Verarbeitung eingehender als auch ausgehender kodierter Frames verwendet wird, da es dem Code ermöglicht, zu bestimmen, welcher Transform auf die Frames angewendet werden soll.

Optionen können auch verwendet werden, um den zweiten Port eines [Nachrichtenkanals](/de/docs/Web/API/Channel_Messaging_API) an den Worker-seitigen Transform zu senden/übertragen. Dieser Kanal kann dann verwendet werden, um dynamische Informationen an einen Transform-Stream zu senden, zum Beispiel wenn Verschlüsselungsschlüssel geändert oder hinzugefügt werden. Beachten Sie, dass Sie Nachrichten auch mit [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) an den Transform senden könnten, jedoch müssten Sie die Nachrichten entsprechend umleiten, wenn der Worker in verschiedenen Kontexten verwendet wird (während eine Nachrichtenport-Option einen direkten Kanal für einen spezifischen Transform bietet).

## Beispiele

### Anleitung zur Angabe der aktuellen WebRTC-Pipeline

Ein [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) wird mit einem bestimmten [`Worker`](/de/docs/Web/API/Worker) und Optionen erstellt und dann entweder der WebRTC-ausgehenden oder eingehenden Pipeline zugewiesen, indem es [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) oder [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) zugewiesen wird. Wenn derselbe Worker in den Transforms für die eingehende und ausgehende Pipeline verwendet wird, müssen Sie Optionen im Konstruktor angeben, um anzugeben, ob die zu transformierenden kodierten Frames eingehend oder ausgehend sind.

Das folgende Beispiel zeigt, wie dies für ein `RTCRtpScriptTransform` gemacht werden könnte, das nach dem Hinzufügen eines Tracks zur Peerverbindung ([`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)) zur Sender-Pipeline hinzugefügt wird, und dann einen weiteren Transform zur Empfänger-Pipeline hinzufügt, wenn ein Track empfangen wird.

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

In jedem der obigen Fälle übergeben wir ein Objekt mit einem unterschiedlichen Wert für die Eigenschaft `name` des Optionsobjekts, was die Pipeline angibt, zu der der Transform hinzugefügt wurde. Beachten Sie, dass die Namen und Werte von Eigenschaften in `options` willkürlich sind: Wichtig ist, dass sowohl der Hauptthread als auch der Worker-Thread wissen, welche Eigenschaften und Werte verwendet werden.

Der folgende Code zeigt, wie die übergebenen Optionen im Worker verwendet werden. Zunächst implementieren wir einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis, das beim globalen Worker-Objekt beim Aufbau des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) und bei der Einreihung neuer Frames zur Verarbeitung ausgelöst wird. `event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das die Eigenschaften `readable`, `writable` und `options` hat.

```js
addEventListener("rtctransform", (event) => {
  let transform;
  // Select a transform based on passed options
  if (event.transformer.options.name === "senderTransform")
    transform = createSenderTransform(); // A TransformStream
  else if (event.transformer.options.name === "receiverTransform")
    transform = createReceiverTransform(); // A TransformStream
  else return;

  // Pipe frames from the readable to writeable through TransformStream
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Der Code erstellt einen anderen [`TransformStream`](/de/docs/Web/API/TransformStream), um ausgehende und eingehende Frames zu verarbeiten, basierend auf den übergebenen Optionen `createSenderTransform()` oder `createReceiverTransform()` (es leitet dann Frames vom `readable` durch den ausgewählten `TransformStream` zum `writable`).

### Übergeben eines Nachrichtenports an einen Transform

Dieses Beispiel zeigt, wie ein [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API) erstellt und einer seiner Ports an den in dem Worker laufenden WebRTC-kodierten Transform übertragen wird. Der Hauptthread kann dann Objekte und Nachrichten nach der Erstellung an den im Worker laufenden Transformer senden und übertragen und umgekehrt.

Der folgende Code erstellt zunächst einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) und dann einen `RTCRtpScriptTransform`, wobei der Wert [`port2`](/de/docs/Web/API/MessageChannel/port2) als Eigenschaft im Optionsargument übergeben wird. Der Port ist auch im Array enthalten, das als drittes Argument des Konstruktors übergeben wird, sodass er in den Worker-Kontext übertragen wird.

```js
const channel = new MessageChannel();

const transform = new RTCRtpScriptTransform(
  worker,
  { purpose: "encrypter", port: channel.port2 },
  [channel.port2],
);
```

Der Worker kann dann den Port vom `rtctransform`-Ereignis abrufen, das beim globalen Worker-Objekt ausgelöst wird.

```js
let messagePort;
addEventListener("rtctransform", (event) => {
  messagePort = event.transformer.options.port;
  // … other transformer code
});
```

Code an jedem Ende des Kanals kann Objekte an das andere Ende senden und übertragen, indem [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) verwendet wird und auf eingehenden Nachrichten mit seinem [`message`](/de/docs/Web/API/MessagePort/message_event)-Ereignis hört.

Zum Beispiel könnte, wenn wir einen Verschlüsselungsschlüssel in einem {{jsxref("Uint8Array")}}-typen Array namens `encryptionKey` hätten, es folgendermaßen vom Hauptthread an den Worker übertragen werden:

```js
const encryptionKeyBuffer = encryptionKey.buffer;
channel.port1.postMessage(encryptionKeyBuffer, [encryptionKeyBuffer]);
```

Der Worker würde auf das `message`-Ereignis hören, um den Schlüssel zu erhalten:

```js
messagePort.addEventListener("message", (event) => {
  const encryptionKeyBuffer = event.data;
  // … Use the encryptionKeyBuffer for encryption or any other purpose
});
```

Weitere Informationen und Beispiele finden Sie im [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC-Encoded-Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
