---
title: "RTCRtpScriptTransformer: Methode sendKeyFrameRequest()"
short-title: sendKeyFrameRequest()
slug: Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest
l10n:
  sourceCommit: 5b85e27155260155bd829fc6d4b98ca2c476b2d1
---

{{APIRef("WebRTC")}}

Die Methode **`sendKeyFrameRequest()`** der Schnittstelle [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) kann von einer [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) aufgerufen werden, die eingehende codierte Videoframes verarbeitet, um vom Sender einen Keyframe anzufordern.

Die Methode darf nur beim Empfang von _Video_-Frames (nicht Audioframes) aufgerufen werden und nur dann, wenn ein Empfänger das Video aus irgendeinem Grund ohne einen neuen Keyframe nicht decodieren kann.
Beachten Sie, dass der User Agent entscheiden kann, dass die Anforderung eines Keyframes nicht nötig ist. In diesem Fall wird das zurückgegebene Promise erfüllt, obwohl die Anforderung nicht tatsächlich gesendet wurde.

> [!NOTE]
> Die Methode könnte beispielsweise aufgerufen werden, wenn ein neuer Benutzer einer WebRTC-Konferenz beitritt, um die Zeit zu verkürzen, bis er einen Keyframe empfängt und damit die Videoanzeige beginnen kann.
> Weitere Informationen finden Sie unter [Einen Keyframe auslösen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms#triggering_a_key_frame) in „WebRTC Encoded Transforms verwenden“.

## Syntax

```js-nolint
sendKeyFrameRequest()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, sobald die Anforderung gesendet wurde oder der User Agent entschieden hat, dass dies nicht nötig ist.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der De-Packetizer verarbeitet keine Videopakete oder ist `undefined`.

## Beispiele

Das folgende Beispiel zeigt, wie der Hauptthread einer WebRTC-Anwendung, die codierte Videodaten empfängt, einen Entschlüsselungsschlüssel an eine Empfänger-Transform übergeben und den Sender auffordern kann, einen Keyframe zu senden.

Der Hauptthread hat keinen direkten Zugriff auf das Objekt [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) und muss den Schlüssel daher an den Worker übergeben.
Hier verwenden wir dazu einen `MessageChannel` und übertragen den zweiten Port an den Transformer-Code, der im Worker ausgeführt wird.
Der Code setzt voraus, dass bereits eine Peer-Verbindung besteht und `videoReceiver` ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) ist.

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

Der Event-Handler für [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) im Worker erhält den Port als `event.transformer.options.port`.
Der folgende Codeausschnitt zeigt, wie dieser Port verwendet wird, um auf `message`-Events im Channel zu warten.
Wenn ein Event empfangen wird, liest der Handler den `key` aus und ruft anschließend `sendKeyFrameRequest()` auf dem Transformer auf.

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

- [WebRTC Encoded Transforms verwenden](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
