---
title: "RTCRtpScriptTransformer: sendKeyFrameRequest()"
short-title: sendKeyFrameRequest()
slug: Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("WebRTC")}}

Die **`sendKeyFrameRequest()`**-Methode der {{domxref("RTCRtpScriptTransformer")}} Schnittstelle kann von einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) aufgerufen werden, das eingehende kodierte Videoframes verarbeitet, um einen Keyframe vom Sender anzufordern.

Die Methode darf nur aufgerufen werden, wenn _Video_- (nicht Audio-) Frames empfangen werden und wenn aus irgendeinem Grund ein Empfänger das Video ohne einen neuen Keyframe nicht dekodieren kann. Beachten Sie, dass der Benutzeragent entscheiden kann, dass die Anforderung eines Keyframes nicht notwendig ist. In diesem Fall wird das zurückgegebene Versprechen erfüllt, auch wenn die Anforderung tatsächlich nicht gesendet wurde.

> [!NOTE]
> Sie könnte beispielsweise aufgerufen werden, wenn ein neuer Benutzer einer WebRTC-Konferenz beitritt, um die Zeit zu verkürzen, bis er einen Keyframe empfängt und somit mit der Videowiedergabe beginnen kann.
> Weitere Informationen finden Sie unter [Triggering a key frame](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms#triggering_a_key_frame) in Using WebRTC Encoded Transforms.

## Syntax

```js-nolint
sendKeyFrameRequest()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit `undefined` erfüllt, sobald die Anforderung gesendet wurde oder der Benutzeragent entscheidet, dass sie nicht erforderlich ist.

### Ausnahmen

- `InvalidStateError`
  - : Der Paketizer verarbeitet keine Videopakete oder ist `undefined`.

## Beispiele

Das folgende Beispiel zeigt, wie der Hauptthread einer WebRTC-Anwendung, die kodiertes Video empfängt, einen Entschlüsselungsschlüssel an einen Empfänger-Transform weitergeben und den Sender auffordern könnte, einen Keyframe auszugeben.

Beachten Sie, dass der Hauptthread keinen direkten Zugriff auf das {{domxref("RTCRtpScriptTransformer")}}-Objekt hat, sodass er den Schlüssel an den Worker übergeben muss. Hier tun wir dies mit einem `MessageChannel`, wobei der zweite Port an den im Worker ausgeführten Transformer-Code übertragen wird. Der Code geht davon aus, dass bereits eine Peer-Verbindung besteht und `videoReceiver` ein {{domxref("RTCRtpReceiver")}} ist.

```js
const worker = new Worker("worker.js");
const channel = new MessageChannel();

videoReceiver.transform = new RTCRtpScriptTransform(
  worker,
  { name: "receiverTransform", port: channel.port2 },
  [channel.port2],
);

// Neuen Schlüssel an den Empfänger senden
channel.port1.start();
channel.port1.postMessage({
  key: "93ae0927a4f8e527f1gce6d10bc6ab6c",
});
```

Der {{domxref("DedicatedWorkerGlobalScope/rtctransform_event", "rtctransform")}}-Ereignis-Handler im Worker erhält den Port als `event.transformer.options.port`. Der unten stehende Codeausschnitt zeigt, wie dieser verwendet wird, um auf `message`-Ereignisse im Channel zu hören. Wenn ein Ereignis empfangen wird, erhält der Handler den `key` und ruft dann `sendKeyFrameRequest()` am Transformer auf.

```js
event.transformer.options.port.onmessage = (event) => {
  const { key } = event.data;
  // Schlüssel wird vom Transformer verwendet, um Frames zu entschlüsseln (nicht angezeigt)

  // Aufforderung an den Sender, einen Keyframe auszugeben.
  // Hier ist 'rcevent' das rtctransform-Ereignis.
  rcevent.transformer.sendKeyFrameRequest();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- {{DOMxRef("RTCRtpScriptTransformer")}}
