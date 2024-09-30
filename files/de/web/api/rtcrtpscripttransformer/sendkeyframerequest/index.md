---
title: "RTCRtpScriptTransformer: sendKeyFrameRequest()"
short-title: sendKeyFrameRequest()
slug: Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("WebRTC")}}

Die **`sendKeyFrameRequest()`** Methode des [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) Interface kann von einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) aufgerufen werden, das eingehende codierte Video-Frames verarbeitet, um ein Schlüsselbild vom Sender anzufordern.

Die Methode darf nur aufgerufen werden, wenn _Video_ (nicht Audio) Frames empfangen werden und wenn der Empfänger aus irgendeinem Grund nicht in der Lage sein wird, das Video ohne ein neues Schlüsselbild zu dekodieren. Beachten Sie, dass der Benutzeragent entscheiden kann, dass die Anforderung eines Schlüsselbildes nicht erforderlich ist, in diesem Fall wird das zurückgegebene Versprechen erfüllt, auch wenn die Anforderung nicht tatsächlich gesendet wurde.

> [!NOTE]
> Dies könnte beispielsweise aufgerufen werden, wenn ein neuer Benutzer einer WebRTC-Konferenz beitritt, um die Zeit zu verkürzen, bevor er ein Schlüsselbild erhält und somit mit der Anzeige von Videos beginnen kann. Weitere Informationen finden Sie unter [Auslösen eines Schlüsselbildes](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms#triggering_a_key_frame) in der Verwendung von WebRTC Encoded Transforms.

## Syntax

```js-nolint
sendKeyFrameRequest()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, sobald die Anforderung gesendet wird oder der Benutzeragent entscheidet, dass sie nicht erforderlich ist.

### Ausnahmen

- `InvalidStateError`
  - : Der Depaketisierer verarbeitet keine Video-Pakete oder ist `undefined`.

## Beispiele

Das folgende Beispiel zeigt, wie der Hauptthread einer WebRTC-Anwendung, die codierte Videos empfängt, einen Entschlüsselungsschlüssel an einen Empfänger-Transformator übermitteln und das Senden eines Schlüsselbildes anfordern könnte.

Beachten Sie, dass der Hauptthread keinen direkten Zugriff auf das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) Objekt hat, daher muss er den Schlüssel an den Worker übergeben. Hier tun wir das mit einem `MessageChannel`, indem wir den zweiten Port an den im Worker laufenden Transformatorcode übergeben. Der Code geht davon aus, dass bereits eine Peer-Verbindung besteht und `videoReceiver` ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) ist.

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

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignishandler im Worker erhält den Port als `event.transformer.options.port`. Der folgende Codeausschnitt zeigt, wie dieser verwendet wird, um auf `message`-Ereignisse auf dem Kanal zu hören. Wenn ein Ereignis empfangen wird, erhält der Handler den `key` und ruft dann `sendKeyFrameRequest()` auf dem Transformator auf.

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

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
