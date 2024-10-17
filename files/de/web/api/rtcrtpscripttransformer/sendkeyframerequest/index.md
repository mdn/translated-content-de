---
title: "RTCRtpScriptTransformer: sendKeyFrameRequest()"
short-title: sendKeyFrameRequest()
slug: Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebRTC")}}

Die **`sendKeyFrameRequest()`**-Methode des [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Interfaces kann von einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) aufgerufen werden, das ankommende kodierte Videoframes verarbeitet, um ein Schlüsselbild vom Sender anzufordern.

Die Methode darf nur aufgerufen werden, wenn _Video_- (nicht Audio-) Frames empfangen werden und der Empfänger aus irgendeinem Grund das Video ohne ein neues Schlüsselbild nicht dekodieren kann.
Beachten Sie, dass der Benutzeragent entscheiden kann, dass die Anforderung eines Schlüsselbildes nicht notwendig ist, und in diesem Fall wird das zurückgegebene Promise erfüllt, auch wenn die Anforderung tatsächlich nicht gesendet wurde.

> [!NOTE]
> Sie könnte zum Beispiel aufgerufen werden, wenn ein neuer Benutzer einer WebRTC-Konferenz beitritt, um die Zeit zu verkürzen, bis er ein Schlüsselbild empfängt und somit mit der Wiedergabe des Videos beginnen kann.
> Weitere Informationen finden Sie unter [Auslösen eines Schlüsselbildes](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms#triggering_a_key_frame) in der Verwendung von WebRTC Encoded Transforms.

## Syntax

```js-nolint
sendKeyFrameRequest()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, sobald die Anforderung gesendet wird oder der Benutzeragent entscheidet, dass diese nicht benötigt wird.

### Ausnahmen

- `InvalidStateError`
  - : Der Depaketisierer verarbeitet keine Videopakete oder ist `undefined`.

## Beispiele

Das folgende Beispiel zeigt, wie der Haupt-Thread einer WebRTC-Anwendung, die codiertes Video empfängt, einen Entschlüsselungsschlüssel an einen Empfängertransform übergeben und den Sender auffordern könnte, ein Schlüsselbild zu senden.

Beachten Sie, dass der Haupt-Thread keinen direkten Zugriff auf das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt hat, daher muss der Schlüssel an den Worker übergeben werden.
Hier erfolgt dies mit einem `MessageChannel`, wobei der zweite Port an den im Worker laufenden Transformcode übergeben wird.
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

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Event-Handler im Worker erhält den Port als `event.transformer.options.port`.
Der untenstehende Codeausschnitt zeigt, wie damit `message`-Ereignisse auf dem Channel abgehört werden.
Wenn ein Ereignis empfangen wird, holt der Handler den `key` und ruft dann `sendKeyFrameRequest()` auf dem Transformator auf.

```js
event.transformer.options.port.onmessage = (event) => {
  const { key } = event.data;
  // key is used by the transformer to decrypt frames (not shown)

  // Request sender to emit a key frame.
  // Here 'rcEvent' is the rtctransform event.
  rcEvent.transformer.sendKeyFrameRequest();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
