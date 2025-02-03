---
title: "RTCRtpScriptTransformer: sendKeyFrameRequest() Methode"
short-title: sendKeyFrameRequest()
slug: Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("WebRTC")}}

Die **`sendKeyFrameRequest()`** Methode der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) Schnittstelle kann von einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) aufgerufen werden, das eingehende kodierte Videoframes verarbeitet, um vom Sender ein Schlüsselbild anzufordern.

Die Methode kann nur aufgerufen werden, wenn _Video_- (nicht Audio-)Frames empfangen werden und wenn der Empfänger aus welchem Grund auch immer das Video ohne ein neues Schlüsselbild nicht dekodieren kann.
Beachten Sie, dass der Benutzeragent entscheiden kann, dass die Anforderung eines Schlüsselbildes nicht notwendig ist, in welchem Fall das zurückgegebene Promise erfüllt wird, auch wenn die Anforderung tatsächlich nicht gesendet wurde.

> [!NOTE]
> Sie könnte beispielsweise aufgerufen werden, wenn ein neuer Benutzer einer WebRTC-Konferenz beitritt, um die Zeit zu verkürzen, bis er ein Schlüsselbild erhält und daher mit der Videodarstellung beginnen kann.
> Weitere Informationen finden Sie unter [Ein Schlüsselbild auslösen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms#triggering_a_key_frame) in der Verwendung von WebRTC Encoded Transforms.

## Syntax

```js-nolint
sendKeyFrameRequest()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, sobald die Anforderung gesendet wurde oder der Benutzeragent entscheidet, dass sie nicht benötigt wird.

### Ausnahmen

- `InvalidStateError`
  - : Der Depaketisierer verarbeitet keine Videopakete oder ist `undefined`.

## Beispiele

Das folgende Beispiel zeigt, wie der Hauptthread einer WebRTC-Anwendung, die kodiertes Video empfängt, einen Entschlüsselungsschlüssel an einen Empfänger-Transformator übergeben und den Sender bitten könnte, ein Schlüsselbild zu senden.

Beachten Sie, dass der Hauptthread keinen direkten Zugriff auf das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) Objekt hat, daher muss der Schlüssel an den Worker übergeben werden.
Hier machen wir das mit einem `MessageChannel`, wobei der zweite Port an den im Worker laufenden Transformator-Code übertragen wird.
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

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignishandler im Worker erhält den Port als `event.transformer.options.port`.
Der untenstehende Codeausschnitt zeigt, wie dieser verwendet wird, um auf `message` Ereignisse im Kanal zu hören.
Wenn ein Ereignis empfangen wird, erhält der Handler den `key` und ruft dann `sendKeyFrameRequest()` auf dem Transformator auf.

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
