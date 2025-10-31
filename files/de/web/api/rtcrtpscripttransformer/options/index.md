---
title: "RTCRtpScriptTransformer: options-Eigenschaft"
short-title: options
slug: Web/API/RTCRtpScriptTransformer/options
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`options`**-Eigenschaft der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Schnittstelle gibt das Objekt zurück, das (optional) als zweites Argument [während der Konstruktion](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) der entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) übergeben wurde.

## Wert

Ein Objekt.

## Beschreibung

Die einfachste Verwendung von Optionen besteht darin, dem Hauptthread anzuzeigen, ob die entsprechende [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) zur WebRTC-Sender- oder -Empfänger-Pipeline hinzugefügt werden soll. Dies ist wichtig, wenn derselbe Worker sowohl für die Verarbeitung eingehender als auch ausgehender kodierter Frames verwendet wird, da auf diese Weise festgestellt werden kann, welcher Transform auf die Frames angewendet werden soll.

Optionen können auch verwendet werden, um den zweiten Port eines [Nachrichtenkanals](/de/docs/Web/API/Channel_Messaging_API) zur Worker-seitigen Transformation zu senden/übertragen. Dieser Kanal kann dann verwendet werden, um dynamische Informationen an einen Transformationsstrom zu senden, zum Beispiel, wenn Verschlüsselungsschlüssel geändert oder hinzugefügt werden. Beachten Sie, dass Sie auch Nachrichten an den Transform mithilfe von [`Worker.postMessage()`](/de/docs/Web/API/Worker/postMessage) senden können, jedoch müssten Sie dann die Nachrichten entsprechend umleiten, wenn der Worker in verschiedenen Kontexten verwendet wird (während eine Nachrichtenport-Option einen direkten Kanal für einen bestimmten Transform bietet).

## Beispiele

### Anleitung zur Angabe der aktuellen WebRTC-Pipeline

[`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) wird mit einem bestimmten [`Worker`](/de/docs/Web/API/Worker) und Optionen konstruiert und dann entweder in die WebRTC-Ausgangs- oder Eingangs-Pipeline eingefügt, indem es [`RTCRtpSender.transform`](/de/docs/Web/API/RTCRtpSender/transform) oder [`RTCRtpReceiver.transform`](/de/docs/Web/API/RTCRtpReceiver/transform) zugewiesen wird. Wenn derselbe Worker in den Transfers für die eingehende und ausgehende Pipeline verwendet wird, müssen Sie im Konstruktor Optionen angeben, um anzugeben, ob die zu transformierenden kodierten Frames eingehend oder ausgehend sind.

Das folgende Beispiel zeigt, wie dies für einen `RTCRtpScriptTransform`, der zur Senderpipeline nach dem Hinzufügen eines Tracks zur Peer-Verbindung ([`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)) hinzugefügt wurde, durchgeführt werden kann, und dann einen weiteren Transform zur Empfängerpipeline hinzufügen, wenn ein Track empfangen wird.

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

In jedem Fall oben liefern wir ein Objekt mit einem unterschiedlichen Wert für die `name`-Eigenschaft des Optionsobjekts, die angibt, zu welcher Pipeline der Transform hinzugefügt wurde. Beachten Sie, dass die Namen und Werte der Eigenschaften in `options` beliebig sind: Wichtig ist, dass sowohl der Hauptthread als auch der Worker-Thread wissen, welche Eigenschaften und Werte verwendet werden.

Der folgende Code zeigt, wie die übergebenen Optionen im Worker verwendet werden. Zuerst implementieren wir einen Handler für das [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis, das beim globalen Worker-Objekt beim Aufbau des entsprechenden [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform) und beim Enqueuen neuer Frames zur Verarbeitung ausgelöst wird. `event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das über die Eigenschaften `readable`, `writable` und `options` verfügt.

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

Der Code erstellt einen anderen [`TransformStream`](/de/docs/Web/API/TransformStream) zur Verarbeitung ausgehender und eingehender Frames, basierend auf den übergebenen Optionen (und leitet dann Frames vom `readable` durch den ausgewählten `TransformStream` zum `writable`).

### Übergeben eines Nachrichtenports an einen Transform

Dieses Beispiel zeigt, wie ein [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API) erstellt und einer seiner Ports in den WebRTC-kodierten Transformationsprozess im Worker übertragen wird. Der Hauptthread kann dann Objekte und Nachrichten an den im Worker laufenden Transform senden und übertragen, und umgekehrt.

Der folgende Code erstellt zuerst einen [`MessageChannel`](/de/docs/Web/API/MessageChannel) und konstruiert dann einen `RTCRtpScriptTransform`, der den [`port2`](/de/docs/Web/API/MessageChannel/port2)-Wert als Eigenschaft im Optionen-Argument übergibt. Der Port wird auch im Array übertragen, das als drittes Konstruktor-Argument übergeben wird, sodass er in den Worker-Kontext übertragen wird.

```js
const channel = new MessageChannel();

const transform = new RTCRtpScriptTransform(
  worker,
  { purpose: "encrypter", port: channel.port2 },
  [channel.port2],
);
```

Der Worker kann den Port dann aus dem `rtctransform`-Ereignis erhalten, das beim globalen Worker-Objekt ausgelöst wird.

```js
let messagePort;
addEventListener("rtctransform", (event) => {
  messagePort = event.transformer.options.port;
  // … other transformer code
});
```

Code an jedem Ende des Kanals kann Objekte an das andere Ende senden und übertragen, indem er [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) verwendet, und auf eingehende Nachrichten mit seinem [`message`](/de/docs/Web/API/MessagePort/message_event)-Ereignis hört.

Zum Beispiel, wenn wir einen Verschlüsselungsschlüssel in einem {{jsxref("Uint8Array")}}-typisierten Array namens `encryptionKey` hätten, könnten wir ihn wie folgt vom Hauptthread zum Worker übertragen:

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

Weitere Informationen und Beispiele finden Sie unter [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC-kodierten Transformationen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
