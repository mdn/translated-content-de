---
title: "RTCRtpScriptTransformer: sendKeyFrameRequest()"
short-title: sendKeyFrameRequest()
slug: Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("WebRTC")}}

Die Methode **`sendKeyFrameRequest()`** der Schnittstelle [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) kann von einer [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) aufgerufen werden, die eingehende codierte Videoframes verarbeitet, um ein Schlüsselbild vom Sender anzufordern.

Die Methode darf nur aufgerufen werden, wenn _Video_- (nicht Audio-) frames empfangen werden und wenn der Empfänger aus irgendeinem Grund das Video nicht ohne ein neues Schlüsselbild decodieren kann.
Beachten Sie, dass der Benutzeragent entscheiden kann, dass eine Anfrage nach einem Schlüsselbild nicht notwendig ist. In diesem Fall wird das zurückgegebene Versprechen erfüllt, auch wenn die Anfrage tatsächlich nicht gesendet wurde.

> [!NOTE]
> Dies kann zum Beispiel aufgerufen werden, wenn ein neuer Benutzer einem WebRTC-Meeting beitritt, um die Zeit zu verkürzen, bis er ein Schlüsselbild erhält und somit mit der Videowiedergabe beginnen kann.
> Weitere Informationen finden Sie unter [Auslösen eines Schlüsselbildes](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms#triggering_a_key_frame) im Abschnitt Verwenden von WebRTC Encoded Transforms.

## Syntax

```js-nolint
sendKeyFrameRequest()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit `undefined` erfüllt wird, sobald die Anfrage gesendet wird oder der Benutzeragent entscheidet, dass es nicht erforderlich ist.

### Ausnahmen

- `InvalidStateError`
  - : Der Depacketizer verarbeitet keine Videopakete oder ist `undefined`.

## Beispiele

Das folgende Beispiel zeigt, wie der Hauptthread einer WebRTC-Anwendung, die codiertes Video empfängt, einen Entschlüsselungsschlüssel an eine Empfangs-Transformation übergeben und den Sender auffordern könnte, ein Schlüsselbild zu senden.

Beachten Sie, dass der Hauptthread keinen direkten Zugriff auf das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt hat, daher muss der Schlüssel an den Worker übergeben werden.
Hier tun wir das mit einem `MessageChannel`, wobei der zweite Port an den Transformatorcode übertragen wird, der im Worker läuft.
Der Code geht davon aus, dass bereits eine Peer-Verbindung besteht und `videoReceiver` ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) ist.

```js
const worker = new Worker("worker.js");
const channel = new MessageChannel();

videoReceiver.transform = new RTCRtpScriptTransform(
  worker,
  { name: "receiverTransform", port: channel.port2 },
  [channel.port2],
);

// Post new key to the receiver
channel.port1.start();
channel.port1.postMessage({
  key: "93ae0927a4f8e527f1gce6d10bc6ab6c",
});
```

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis-Handler im Worker erhält den Port als `event.transformer.options.port`.
Der folgende Codeausschnitt zeigt, wie dieser verwendet wird, um auf `message`-Ereignisse auf dem Kanal zu hören.
Wenn ein Ereignis empfangen wird, erhält der Handler den `key` und ruft dann `sendKeyFrameRequest()` am Transformer auf.

```js
event.transformer.options.port.onmessage = (event) => {
  const { key } = event.data;
  // key is used by the transformer to decrypt frames (not shown)

  // Request sender to emit a key frame.
  // Here 'rcevent' is the rtctransform event.
  rcevent.transformer.sendKeyFrameRequest();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
