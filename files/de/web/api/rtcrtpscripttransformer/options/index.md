---
title: "RTCRtpScriptTransformer: options-Eigenschaft"
short-title: options
slug: Web/API/RTCRtpScriptTransformer/options
l10n:
  sourceCommit: 4799bed9382147f0b0ff642a130a1c12ed59a28e
---

{{APIRef("WebRTC")}}

Die **`options`**-Eigenschaft des {{domxref("RTCRtpScriptTransformer")}}-Interfaces gibt das Objekt zurück, das (optional) als zweites Argument [während der Konstruktion](/de/docs/Web/API/RTCRtpScriptTransform/RTCRtpScriptTransform) des entsprechenden {{domxref("RTCRtpScriptTransform")}} übergeben wurde.

## Wert

Ein Objekt.

## Beschreibung

Die einfachste Verwendung von Optionen besteht darin, dem Hauptthread anzuzeigen, ob der entsprechende {{domxref("RTCRtpScriptTransform")}} zur WebRTC-Sender- oder Empfänger-Pipeline hinzugefügt werden soll. Dies ist wichtig, wenn derselbe Worker sowohl für die Verarbeitung eingehender als auch ausgehender codierter Frames verwendet wird, da es dem Code ermöglicht, zu bestimmen, welche Transformation auf die Frames angewendet werden soll.

Optionen können auch verwendet werden, um den zweiten Port eines [Nachrichtenkanals](/de/docs/Web/API/Channel_Messaging_API) an den Worker-seitigen Transformator zu senden/übertragen.
Dieser Kanal kann dann verwendet werden, um dynamische Informationen an einen Transformationsstrom zu senden, z.B. wenn Verschlüsselungsschlüssel geändert oder hinzugefügt werden.
Beachten Sie, dass Sie Nachrichten auch mit {{domxref("Worker.postMessage()")}} an den Transformation übermitteln könnten, Sie müssten die Nachrichten jedoch entsprechend umleiten, wenn der Worker in verschiedenen Kontexten verwendet wird (während eine Nachrichtenport-Option einen direkten Kanal für eine spezifische Transformation bereitstellt).

## Beispiele

### Wie man die aktuelle WebRTC-Pipeline angibt

{{domxref("RTCRtpScriptTransform")}} wird mit einem bestimmten {{domxref("Worker")}} und Optionen konstruiert und dann entweder in die WebRTC-Ausgangs- oder Eingangs-Pipeline eingefügt, indem es {{domxref("RTCRtpSender.transform")}} oder {{domxref("RTCRtpReceiver.transform")}} zugewiesen wird.
Wenn derselbe Worker in den Transformationen für die Eingangs- und Ausgangs-Pipeline verwendet wird, dann müssen Sie im Konstruktor Optionen bereitstellen, um anzugeben, ob die zu transformierenden kodierten Frames ein- oder ausgehend sind.

Das untenstehende Beispiel zeigt, wie dies für einen `RTCRtpScriptTransform` durchgeführt werden könnte, der der Sender-Pipeline hinzugefügt wird, nachdem eine Spur zur Peer-Verbindung ({{domxref("RTCPeerConnection")}}) hinzugefügt wurde, und dann eine weitere Transformation zur Empfänger-Pipeline hinzugefügt wird, wenn eine Spur empfangen wird.

```js
// videoSender ist ein RTCRtpSender.
const videoSender = peerConnection.addTrack(track, mediaStream);
videoSender.transform = new RTCRtpScriptTransform(worker, {
  name: "senderTransform",
});
```

```js
peerConnection.ontrack = (event) => {
  // event.receiver ist ein RTCRtpReceiver
  event.receiver.transform = new RTCRtpScriptTransform(worker, {
    someOption: "receiverTransform",
  });
};
```

In jedem der obigen Fälle geben wir ein Objekt mit einem unterschiedlichen Wert für die `name`-Eigenschaft des Optionsobjekts an, was die Pipeline anzeigt, zu der die Transformation hinzugefügt wurde.
Beachten Sie, dass die Namen und Werte der Eigenschaften in `options` beliebig sind: Wichtig ist, dass sowohl der Haupt- als auch der Worker-Thread wissen, welche Eigenschaften und Werte verwendet werden.

Der folgende Code zeigt, wie die übergebenen Optionen im Worker verwendet werden.
Zuerst implementieren wir einen Handler für das {{domxref("DedicatedWorkerGlobalScope.rtctransform_event", "rtctransform")}}-Ereignis, das beim globalen Worker-Objekt ausgelöst wird, wenn der entsprechende {{domxref("RTCRtpScriptTransform")}} konstruiert wird und wenn neue Frames zur Verarbeitung eingereiht werden.
`event.transformer` ist ein {{domxref("RTCRtpScriptTransformer")}}, das eine `readable`-, `writable`- und `options`-Eigenschaft hat.

```js
addEventListener("rtctransform", (event) => {
  let transform;
  // Wählen Sie eine Transformation basierend auf den übergebenen Optionen
  if (event.transformer.options.name == "senderTransform")
    transform = createSenderTransform(); // Ein TransformStream
  else if (event.transformer.options.name == "receiverTransform")
    transform = createReceiverTransform(); // Ein TransformStream
  else return;

  // Leiten Sie Frames von lesbar über TransformStream zu schreibbar
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Der Code erstellt einen unterschiedlichen {{domxref("TransformStream")}}, um ausgehende und eingehende Frames zu verarbeiten, basierend auf den übergebenen Optionen, wobei `createSenderTransform()` oder `createReceiverTransform()` verwendet wird (es leitet dann Frames vom `readable` über den ausgewählten `TransformStream` zum `writable`).

### Einen Nachrichtenport an eine Transformation übergeben

Dieses Beispiel zeigt, wie Sie einen [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API) erstellen und einen seiner Ports an die im Worker laufende WebRTC-codierte Transformation übertragen. Der Hauptthread kann dann Objekte und Nachrichten an den im Worker laufenden Transformer senden und übertragen und umgekehrt.

Der Code unten erstellt zuerst einen {{domxref("MessageChannel")}} und konstruiert dann einen `RTCRtpScriptTransform`, wobei der {{domxref("MessageChannel.port2","port2")}}-Wert als Eigenschaft im options-Argument übergeben wird.
Der Port wird auch in das Array aufgenommen, das als drittes Argument des Konstruktors übergeben wird, so dass er in den Worker-Kontext übertragen wird.

```js
const channel = new MessageChannel();

const transform = new RTCRtpScriptTransform(
  worker,
  { purpose: "encrypter", port: channel.port2 },
  [channel.port2],
);
```

Der Worker kann dann den Port aus dem `rtctransform`-Ereignis abrufen, das beim globalen Worker-Objekt ausgelöst wird.

```js
let messagePort;
addEventListener("rtctransform", (event) => {
  messagePort = event.transformer.options.port;
  // ... anderer Transformationscode
});
```

Code an jedem Ende des Kanals kann Objekte an das andere Ende senden und übertragen, indem er {{domxref("MessagePort.postMessage()")}} verwendet und auf eingehende Nachrichten mit dessen {{domxref("MessagePort/message_event", "message")}}-Ereignis lauscht.

Zum Beispiel, angenommen wir hätten einen Verschlüsselungsschlüssel in einem {{jsxref("Uint8Array")}}-typisierten Array namens `encryptionKey`, könnten wir ihn vom Hauptthread an den Worker wie gezeigt übertragen:

```js
const encryptionKeyBuffer = encryptionKey.buffer;
channel.port1.postMessage(encryptionKeyBuffer, [encryptionKeyBuffer]);
```

Der Worker würde auf das `message`-Ereignis lauschen, um den Schlüssel zu erhalten:

```js
  messagePort.addEventListener("message", (event) => {
    const encryptionKeyBuffer = event.data;
    // ... Verwenden Sie den encryptionKeyBuffer für Verschlüsselung oder andere Zwecke
  });
```

Weitere Informationen und Beispiele finden Sie im Abschnitt [Nachrichtenkanal](/de/docs/Web/API/Channel_Messaging_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
