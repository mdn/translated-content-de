---
title: "RTCRtpScriptTransformer: options-Eigenschaft"
short-title: options
slug: Web/API/RTCRtpScriptTransformer/options
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebRTC")}}

Die **`options`** Schreibgeschützte Eigenschaft der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) Schnittstelle gibt das Objekt zurück, das (optional) als zweites Argument [während der Erstellung](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) übergeben wurde.

## Wert

Ein Objekt.

## Beschreibung

Die einfachste Verwendung von Optionen besteht darin, dem Hauptthread anzuzeigen, ob der entsprechende [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) zur WebRTC-Sender- oder Empfänger-Pipeline hinzugefügt werden soll. Dies ist wichtig, wenn derselbe Worker für die Verarbeitung sowohl eingehender als auch ausgehender codierter Frames verwendet wird, da der Code so bestimmen kann, welcher Transformationsschritt auf die Frames angewendet werden soll.

Optionen können auch verwendet werden, um den zweiten Port eines [Nachrichtenkanals](/de/docs/Web/API/Channel_Messaging_API) zum Worker-seitigen Transform zu senden/übertragen. Dieser Kanal kann dann genutzt werden, um dynamische Informationen an einen Transformationsstream zu senden, wie zum Beispiel wenn Verschlüsselungsschlüssel geändert oder hinzugefügt werden. Beachten Sie, dass Sie auch Nachrichten an das Transformationen nutzen können, indem Sie [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) verwenden, aber dann müssen Sie die Nachrichten entsprechend umleiten, wenn der Worker in verschiedenen Kontexten verwendet wird (während eine Nachricht an einen Port eine direkte Verbindung für eine spezifische Transformation bietet).

## Beispiele

### Anleitung zur Angabe der aktuellen WebRTC-Pipeline

[`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) wird mit einem bestimmten [`Worker`](/de/docs/Web/API/Worker) und Optionen erstellt und dann entweder in die ausgehende oder eingehende WebRTC-Pipeline eingefügt, indem es [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) oder [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) zugewiesen wird. Wenn derselbe Worker in den Transformationen für die eingehende und ausgehende Pipeline verwendet wird, müssen Sie im Konstruktor Optionen angeben, um anzugeben, ob die zu transformierenden codierten Frames eingehend oder ausgehend sind.

Das folgende Beispiel zeigt, wie dies für einen `RTCRtpScriptTransform` gemacht werden kann, der zur Sender-Pipeline hinzugefügt wird, nachdem einer Peer-Verbindung ([`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)) ein Track hinzugefügt wurde, und dann eine weitere Transformation zur Empfänger-Pipeline hinzugefügt wird, wenn ein Track empfangen wird.

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

In jedem der obigen Fälle geben wir ein Objekt mit einem anderen Wert für die `name`-Eigenschaft des Options-Objekts an, welcher angibt, zu welcher Pipeline die Transformation hinzugefügt wurde. Beachten Sie, dass die Namen und Werte der Eigenschaften in `options` beliebig sind: Wichtig ist, dass sowohl der Hauptthread als auch der Worker-Thread wissen, welche Eigenschaften und Werte verwendet werden.

Der folgende Code zeigt die Verwendung der übergebenen Optionen im Worker. Zuerst implementieren wir einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Event, das beim globalen Worker-Objekt beim Erstellen des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) ausgelöst wird und wenn neue Frames zur Verarbeitung in die Warteschlange gestellt werden. `event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), der eine `readable`, `writable` und `options` Eigenschaft hat.

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

Der Code erstellt einen unterschiedlichen [`TransformStream`](/de/docs/Web/API/TransformStream), um ausgehende und eingehende Frames zu verarbeiten, indem `createSenderTransform()` oder `createReceiverTransform()` auf Basis der übergebenen Optionen verwendet wird (anschließend leitet es Frames vom `readable`, durch den ausgewählten `TransformStream`, zum `writable` um).

### Übertragen eines Nachrichtenschnittstellenports zu einer Transformation

Dieses Beispiel zeigt, wie ein [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API) erstellt und einer seiner Ports in die WebRTC-Transformation im Worker übergeben wird. Der Hauptthread kann dann Objekte und Nachrichten an die im Worker laufende Transformation nach der Konstruktion senden und übertragen und umgekehrt.

Der folgende Code erstellt zuerst einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) und erstellt dann einen `RTCRtpScriptTransform`, indem er den [`port2`](/de/docs/Web/API/MessageChannel/port2) Wert als Eigenschaft im Options-Argument übergibt. Der Port wird auch im Array übergeben, das als drittes Argument an den Konstruktor übergeben wird, so dass er in den Worker-Kontext übertragen wird.

```js
const channel = new MessageChannel();

const transform = new RTCRtpScriptTransform(
  worker,
  { purpose: "encrypter", port: channel.port2 },
  [channel.port2],
);
```

Der Worker kann den Port dann aus dem `rtctransform` Event erhalten, das beim globalen Worker-Objekt ausgelöst wird.

```js
let messagePort;
addEventListener("rtctransform", (event) => {
  messagePort = event.transformer.options.port;
  // … other transformer code
});
```

Code an jedem Ende des Kanals kann Objekte an das andere Ende senden und übertragen, indem [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) verwendet wird, und für eingehende Nachrichten mit seinem [`message`](/de/docs/Web/API/MessagePort/message_event) Event lauschen.

Zum Beispiel, wenn wir einen Verschlüsselungsschlüssel in einem {{jsxref("Uint8Array")}} Typ-Array namens `encryptionKey` hätten, könnten wir es wie gezeigt vom Hauptthread an den Worker übertragen:

```js
const encryptionKeyBuffer = encryptionKey.buffer;
channel.port1.postMessage(encryptionKeyBuffer, [encryptionKeyBuffer]);
```

Der Worker würde auf das `message` Event lauschen, um den Schlüssel zu erhalten:

```js
messagePort.addEventListener("message", (event) => {
  const encryptionKeyBuffer = event.data;
  // … Use the encryptionKeyBuffer for encryption or any other purpose
});
```

Siehe [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API) für weitere Informationen und Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
