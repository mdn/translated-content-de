---
title: "RTCRtpScriptTransformer: options-Eigenschaft"
short-title: options
slug: Web/API/RTCRtpScriptTransformer/options
l10n:
  sourceCommit: 4799bed9382147f0b0ff642a130a1c12ed59a28e
---

{{APIRef("WebRTC")}}

Die **`options`**-Schreibgeschützte Eigenschaft der Schnittstelle [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) gibt das Objekt zurück, das (optional) als zweites Argument [während der Konstruktion](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) übergeben wurde.

## Wert

Ein Objekt.

## Beschreibung

Die einfachste Verwendungsmöglichkeit von Optionen besteht darin, dem Haupt-Thread anzuzeigen, ob der entsprechende [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) zur WebRTC-Sender- oder -Empfänger-Pipeline hinzugefügt werden soll. Dies ist wichtig, wenn derselbe Worker zur Verarbeitung sowohl eingehender als auch ausgehender kodierter Frames verwendet wird, da ermittelt werden kann, welcher Transform auf die Frames angewendet werden soll.

Optionen können auch verwendet werden, um den zweiten Port eines [Nachrichtenkanals](/de/docs/Web/API/Channel_Messaging_API) an die Worker-Seitentranformation zu senden/übertragen. Dieser Kanal kann dann verwendet werden, um dynamische Informationen an einen Transform-Stream zu senden, beispielsweise wenn Verschlüsselungsschlüssel geändert oder hinzugefügt werden. Beachten Sie, dass Sie auch Nachrichten über [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) an die Transformation senden könnten, jedoch müssten Sie die Nachrichten dann entsprechend umleiten, wenn der Worker in verschiedenen Kontexten verwendet wird (während eine Nachrichtenportoption einen direkten Kanal für eine spezifische Transformation bietet).

## Beispiele

### Anleitung zur Angabe der aktuellen WebRTC-Pipeline

[`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) wird mit einem bestimmten [`Worker`](/de/docs/Web/API/Worker) und Optionen konstruiert und dann entweder in die ausgehende oder eingehende WebRTC-Pipeline eingefügt, indem er [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) oder [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) zugewiesen wird. Wenn derselbe Worker in den Transformationen für die eingehende und ausgehende Pipeline verwendet wird, müssen Sie Optionen im Konstruktor angeben, um anzugeben, ob die zu transformierenden kodierten Frames eingehend oder ausgehend sind.

Das untenstehende Beispiel zeigt, wie dies für einen `RTCRtpScriptTransform` durchgeführt werden könnte, der der Senderpipeline hinzugefügt wird, nachdem ein Track zur Peer-Verbindung ([`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)) hinzugefügt wurde, und dann eine weitere Transformation der Empfänger-Pipeline hinzugefügt wird, wenn ein Track empfangen wird.

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

In jedem der oben genannten Fälle übergeben wir ein Objekt mit einem unterschiedlichen Wert für die `name`-Eigenschaft des Optionsobjekts, die angibt, zu welcher Pipeline die Transformation hinzugefügt wurde. Beachten Sie, dass die Namen und Werte der Eigenschaften in `options` willkürlich sind: Wichtig ist, dass Haupt-Thread und Worker-Thread beide wissen, welche Eigenschaften und Werte verwendet werden.

Der folgende Code zeigt, wie die übergebenen Optionen im Worker verwendet werden. Zuerst implementieren wir einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignis, das beim globalen Worker-Objekt bei der Konstruktion des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) ausgelöst wird und wenn neue Frames zur Verarbeitung in die Warteschlange gestellt werden. `event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das eine `readable`, `writable` und `options`-Eigenschaft hat.

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

Der Code erstellt unterschiedliche [`TransformStream`](/de/docs/Web/API/TransformStream), um ausgehende und eingehende Frames zu verarbeiten, indem `createSenderTransform()` oder `createReceiverTransform()` basierend auf den übergebenen Optionen verwendet wird (dann leitet er Frames aus der `readable`, durch den ausgewählten `TransformStream`, an die `writable` weiter).

### Einen Nachrichtenport an eine Transformation übergeben

Dieses Beispiel zeigt, wie man einen [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API) erstellt und einen seiner Ports an die WebRTC-kodierte Transformation überträgt, die im Worker ausgeführt wird. Dieser Haupt-Thread kann dann Objekte und Nachrichten an den Transformator senden und übertragen, die nach der Konstruktion im Worker ausgeführt werden, und umgekehrt.

Der untenstehende Code erstellt zunächst einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) und konstruiert dann einen `RTCRtpScriptTransform`, wobei der [`port2`](/de/docs/Web/API/MessageChannel/port2)-Wert als Eigenschaft im Optionsargument übergeben wird. Der Port wird auch in das Array aufgenommen, das als drittes Konstruktorargument übergeben wird, sodass er in den Worker-Kontext übertragen wird.

```js
const channel = new MessageChannel();

const transform = new RTCRtpScriptTransform(
  worker,
  { purpose: "encrypter", port: channel.port2 },
  [channel.port2],
);
```

Der Worker kann den Port dann aus dem `rtctransform`-Ereignis abrufen, das beim globalen Worker-Objekt ausgelöst wird.

```js
let messagePort;
addEventListener("rtctransform", (event) => {
  messagePort = event.transformer.options.port;
  // ... other transformer code
});
```

Code in jedem Ende des Kanals kann Objekte an das andere Ende senden und übertragen, indem [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) verwendet wird, und auf eingehende Nachrichten über sein [`message`](/de/docs/Web/API/MessagePort/message_event)-Ereignis hören.

Zum Beispiel, wenn wir einen Verschlüsselungsschlüssel in einem {{jsxref("Uint8Array")}}-typisierten Array namens `encryptionKey` hätten, könnten wir es vom Haupt-Thread an den Worker wie gezeigt übertragen:

```js
const encryptionKeyBuffer = encryptionKey.buffer;
channel.port1.postMessage(encryptionKeyBuffer, [encryptionKeyBuffer]);
```

Der Worker würde auf das `message`-Ereignis hören, um den Schlüssel zu erhalten:

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
