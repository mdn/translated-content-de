---
title: "RTCRtpScriptTransformer: options-Eigenschaft"
short-title: options
slug: Web/API/RTCRtpScriptTransformer/options
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{APIRef("WebRTC")}}

Die **`options`**-Eigenschaft der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Schnittstelle gibt das Objekt zurück, das (optional) als zweites Argument [bei der Konstruktion](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) übergeben wurde.

## Wert

Ein Objekt.

## Beschreibung

Die einfachste Verwendung von Optionen besteht darin, dem Haupt-Thread anzuzeigen, ob der entsprechende [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) zur WebRTC-Sender- oder Empfänger-Pipeline hinzugefügt werden soll. Dies ist wichtig, wenn derselbe Worker für die Verarbeitung sowohl eingehender als auch ausgehender kodierter Frames verwendet wird, da es dem Code ermöglicht zu bestimmen, welche Transformationen auf die Frames angewendet werden sollen.

Optionen können auch verwendet werden, um den zweiten Port eines [Nachrichtenkanals](/de/docs/Web/API/Channel_Messaging_API) an die Worker-seitige Transformation zu senden oder zu übertragen.
Dieser Kanal kann dann verwendet werden, um dynamische Informationen an einen Transform-Stream zu senden, zum Beispiel wenn Verschlüsselungsschlüssel geändert oder hinzugefügt werden.
Beachten Sie, dass Sie möglicherweise auch Nachrichten an die Transformation mit [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) senden könnten, aber Sie müssten dann die Nachrichten angemessen umleiten, wenn der Worker in verschiedenen Kontexten verwendet wird (während eine Nachrichtenport-Option einen direkten Kanal für eine spezifische Transformation bietet).

## Beispiele

### Anleitung zur Angabe der aktuellen WebRTC-Pipeline

[`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) wird mit einem bestimmten [`Worker`](/de/docs/Web/API/Worker) und Optionen erstellt und dann entweder der ausgehenden oder eingehenden WebRTC-Pipeline zugewiesen, indem es [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) oder [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) zugewiesen wird.
Wenn derselbe Worker in den Transformationen für die eingehende und ausgehende Pipeline verwendet wird, müssen Sie Optionen im Konstruktor angeben, um anzuzeigen, ob die zu transformierenden kodierten Frames eingehend oder ausgehend sind.

Das folgende Beispiel zeigt, wie dies für einen `RTCRtpScriptTransform` getan werden könnte, der der Sender-Pipeline hinzugefügt wurde, nachdem eine Spur zur Peer-Verbindung ([`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)) hinzugefügt wurde, und anschließend eine weitere Transformation zur Empfänger-Pipeline hinzugefügt, wenn eine Spur empfangen wird.

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

In jedem der obigen Fälle geben wir ein Objekt mit einem anderen Wert für die `name`-Eigenschaft des Optionsobjekts an, das die Pipeline angibt, der die Transformation hinzugefügt wurde.
Beachten Sie, dass die Namen und Werte der Eigenschaften in `options` willkürlich sind: Wichtig ist, dass sowohl der Haupt-Thread als auch der Worker-Thread wissen, welche Eigenschaften und Werte verwendet werden.

Der folgende Code zeigt, wie die übergebenen Optionen im Worker genutzt werden.
Zuerst implementieren wir einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Event, das beim globalen Worker-Objekt bei der Konstruktion des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) und bei der Eingliederung neuer Frames zur Verarbeitung ausgelöst wird.
`event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), der eine `readable`, `writable` und `options`-Eigenschaft hat.

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

Der Code erstellt einen anderen [`TransformStream`](/de/docs/Web/API/TransformStream) zur Verarbeitung ausgehender und eingehender Frames, mit `createSenderTransform()` oder `createReceiverTransform()`, basierend auf den übergebenen Optionen (und leitet dann Frames vom `readable` durch den ausgewählten `TransformStream` zum `writable` weiter).

### Übertragen eines Nachrichtenports an eine Transformation

Dieses Beispiel zeigt, wie ein [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API) erstellt und einer seiner Ports an die im Worker ausgeführte kodierte WebRTC-Transformation übertragen wird. Der Haupt-Thread kann dann Objekte und Nachrichten an die im Worker ausgeführte Transformation senden und übertragen, nachdem sie erstellt wurde, und umgekehrt.

Der untenstehende Code erstellt zuerst einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) und erstellt dann einen `RTCRtpScriptTransform`, wobei der [`port2`](/de/docs/Web/API/MessageChannel/port2)-Wert als Eigenschaft im Optionsargument übergeben wird.
Der Port ist auch in das Array aufgenommen, das als drittes Konstruktorargument übergeben wird, sodass er in den Worker-Kontext übertragen wird.

```js
const channel = new MessageChannel();

const transform = new RTCRtpScriptTransform(
  worker,
  { purpose: "encrypter", port: channel.port2 },
  [channel.port2],
);
```

Der Worker kann dann den Port aus dem `rtctransform`-Event holen, das beim globalen Worker-Objekt ausgelöst wird.

```js
let messagePort;
addEventListener("rtctransform", (event) => {
  messagePort = event.transformer.options.port;
  // ... other transformer code
});
```

Der Code an jedem Ende des Kanals kann Objekte an das andere Ende senden und übertragen, indem er [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) verwendet und auf eingehende Nachrichten mit seinem [`message`](/de/docs/Web/API/MessagePort/message_event)-Event lauscht.

Zum Beispiel, angenommen wir hatten einen Verschlüsselungsschlüssel in einem {{jsxref("Uint8Array")}}-typisierten Array namens `encryptionKey`, könnten wir ihn vom Haupt-Thread zum Worker wie folgt übertragen:

```js
const encryptionKeyBuffer = encryptionKey.buffer;
channel.port1.postMessage(encryptionKeyBuffer, [encryptionKeyBuffer]);
```

Der Worker würde auf das `message`-Event lauschen, um den Schlüssel zu erhalten:

```js
messagePort.addEventListener("message", (event) => {
  const encryptionKeyBuffer = event.data;
  // ... Use the encryptionKeyBuffer for encryption or any other purpose
});
```

Siehe [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API) für mehr Informationen und Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
