---
title: "RTCRtpScriptTransformer: generateKeyFrame()"
short-title: generateKeyFrame()
slug: Web/API/RTCRtpScriptTransformer/generateKeyFrame
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`generateKeyFrame()`**-Methode der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Schnittstelle veranlasst einen Video-Encoder, einen Schlüsselrahmen zu erzeugen.

## Syntax

```js-nolint
generateKeyFrame()
generateKeyFrame(rid)
```

### Parameter

- `rid` {{optional_inline}}

  - : Ein String, der die "Einschränkungskennung" ("RID") des Streams/Encoders enthält, der den neuen Schlüsselrahmen erzeugen muss.

    Der Wert muss zwischen 1 und 255 Zeichen lang sein (einschließlich) und nur alphanumerische Zeichen, Unterstrich und Bindestrich (`A-Z`, `a-z`, `0-9`, `-`, `_`) enthalten.
    RIDs sind groß- und kleinschreibungssensitiv und müssen eindeutig für den Peer-Kommunikationskanal sein.
    <!-- RFC8851 erlaubt '-' und '_' und unbeschränkte Länge. RFC 8852 widerspricht (https://www.rfc-editor.org/errata/eid7132) -->

    Der erste Encoder, der mit dem angegebenen `rid` übereinstimmt, wird verwendet. Wenn kein Encoder mit dem `rid` übereinstimmt, wird der erste Encoder verwendet und `rid` auf die Einschränkungen des Encoders gesetzt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem Zeitstempel des Rahmens erfüllt wird oder mit einem Ausnahmefehler abgelehnt wird.

### Ausnahmen

- `InvalidStateError`
  - : Der Encoder verarbeitet keine Videorahmen oder ist `undefined`.
- `TypeError`
  - : Der bereitgestellte `rid` entspricht nicht den Grammaturanfordungen.
- `NotFoundError`
  - : Es gibt keine Video-Encoder. Dies könnte auftreten, wenn der entsprechende `RTCRtpSender` nicht aktiv ist oder dessen Track beendet ist.

## Beschreibung

Diese Methode kann von einem Transformator aufgerufen werden, der ausgehende codierte Videorahmen verarbeitet, um das Senden eines neuen vollständigen (Schlüssel-)Rahmens zu erzwingen. Dies könnte von einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) benötigt werden, das Rahmen verschlüsselt, um sicherzustellen, dass, wenn ein neuer Verschlüsselungsschlüssel hinzugefügt wird, ein mit diesem Schlüssel verschlüsselter Schlüsselrahmen so schnell wie möglich gesendet wird.

Der Sender kann ein RID (auch als "restriction identifier" oder "RTP stream ID" bezeichnet) angeben, um zu steuern, welcher Codec den neuen Schlüsselrahmen erzeugt. Ein Stream kann (Simulcast) mehrere Versionen derselben Quelle enthalten, jeweils mit unterschiedlichen Eigenschaften wie Auflösung und Bildrate. Das RID wird verwendet, um einen bestimmten RTP-Stream anzugeben und damit den Encoder, der einen neuen Rahmen erzeugen muss. Beachten Sie, dass die verfügbaren RID-Werte festgelegt werden, wenn das von der Verbindung verwendete Transceiver erstellt wird. Die verwendeten RID-Werte können durch Aufruf von [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) und Überprüfung der [`encodings`](/de/docs/Web/API/RTCRtpSender/getParameters#encodings)-Eigenschaft des zurückgegebenen Werts abgefragt werden.

Das von der Methode zurückgegebene Versprechen wird aufgelöst, kurz bevor der entsprechende Schlüsselrahmen in einem `RTCRtpScriptTransformer`-Lesestrahler eingereiht wird.

> [!NOTE]
> Das gleichzeitige Senden mehrerer Streams (RID) wird als "Simulcast" bezeichnet. Diese Funktion bietet einer [Middlebox](https://en.wikipedia.org/wiki/Middlebox) denselben Stream in mehreren Videoqualitätsstufen und ermöglicht es, die Bandbreite zu verwalten, indem selektiv geeignete Stufen an Teilnehmer übertragen werden und die Auflösung schnell im laufenden Betrieb umgeschaltet wird (d.h. umschalten, um minderwertiges Video für alle außer dem aktiven Sprecher weiterzuleiten). Der Empfänger erhält nur je einen Stream, weshalb die vergleichbare Empfängermethode [`RTCRtpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest) nicht erfordert, dass ein RID angegeben wird.

## Beispiele

### Senden eines Schlüsselrahmens

Das folgende Beispiel zeigt, wie der Hauptthread einen Verschlüsselungsschlüssel an eine Absendertransformation übergeben und den Codec dazu veranlassen könnte, einen Schlüsselrahmen zu erzeugen.

Da der Hauptthread keinen direkten Zugriff auf das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt hat, muss er den Schlüssel und RID an den Worker übergeben. Hier machen wir das mit einem `MessageChannel`, indem wir den zweiten Port in den Worker-Code übertragen, der im Worker ausgeführt wird. Der Code geht davon aus, dass bereits eine Peer-Verbindung besteht und `videoSender` ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) ist.

```js
const worker = new Worker("worker.js");
const channel = new MessageChannel();

videoSender.transform = new RTCRtpScriptTransform(
  worker,
  { name: "senderTransform", port: channel.port2 },
  [channel.port2],
);

// Post RID and new key to the sender
channel.port1.start();
channel.port1.postMessage({
  rid: "1",
  key: "93ae0927a4f8e527f1gce6d10bc6ab6c",
});
```

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignishandler im Worker erhält den Port und nutzt ihn, um auf `message`-Ereignisse zu hören. Wenn ein Ereignis empfangen wird, erhält es das `rid` und den `key` und ruft dann `generateKeyFrame()` auf.

```js
event.transformer.options.port.onmessage = (event) => {
  const { rid, key } = event.data;
  // key is used by the transformer to encrypt frames (not shown)

  // Get codec to generate a new key frame using the rid
  // Here 'rcevent' is the rtctransform event.
  rcevent.transformer.generateKeyFrame(rid);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
