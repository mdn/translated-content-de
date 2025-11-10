---
title: "RTCRtpScriptTransformer: generateKeyFrame()-Methode"
short-title: generateKeyFrame()
slug: Web/API/RTCRtpScriptTransformer/generateKeyFrame
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Die **`generateKeyFrame()`**-Methode der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Schnittstelle veranlasst einen Video-Encoder, ein Schlüsselbild zu erzeugen.

## Syntax

```js-nolint
generateKeyFrame()
generateKeyFrame(rid)
```

### Parameter

- `rid` {{optional_inline}}

  - : Ein String, der die "Einschränkungskennung" ("RID") des Streams/Encoders enthält, der das neue Schlüsselbild erzeugen muss.

    Der Wert muss zwischen 1 und 255 Zeichen lang sein (einschließlich) und darf nur alphanumerische Zeichen, Unterstrich und Bindestrich (`A-Z`, `a-z`, `0-9`, `-`, `_`) enthalten.
    RIDs sind case-sensitive und müssen einzigartig für den peer-to-peer Kommunikationskanal sein.
    <!-- RFC8851 erlaubt '-' und '_' und unbegrenzte Länge. RFC 8852 stimmt nicht zu (https://www.rfc-editor.org/errata/eid7132) -->

    Der erste Encoder, der mit dem angegebenen `rid` übereinstimmt, wird verwendet.
    Wenn kein Encoder mit dem `rid` übereinstimmt, wird der erste Encoder verwendet, und `rid` wird auf die Einschränkungen des Encoders gesetzt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit dem Timestamp des Rahmens erfüllt oder mit einem Ausnahme-Wert abgelehnt wird.

### Ausnahmen

- `InvalidStateError`
  - : Der Encoder verarbeitet keine Video-Frames oder ist `undefined`.
- `TypeError`
  - : Das bereitgestellte `rid` entspricht nicht den Grammatik-Anforderungen.
- `NotFoundError`
  - : Es gibt keinen Video-Encoder. Dies kann auftreten, wenn der entsprechende `RTCRtpSender` nicht aktiv ist oder sein Track beendet wurde.

## Beschreibung

Diese Methode kann von einem Transformer aufgerufen werden, der ausgehende kodierte Video-Frames verarbeitet, um das Senden eines neuen vollständigen (Schlüssel-)Frames zu erzwingen.
Es könnte von einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) benötigt werden, der Frames verschlüsselt, um sicherzustellen, dass, wenn ein neuer Verschlüsselungsschlüssel hinzugefügt wird, ein mit diesem Schlüssel verschlüsselter Schlüssel-Frame so schnell wie möglich gesendet wird.

Der Sender kann eine RID (auch als "Einschränkungskennung" oder "RTP-Stream-ID" bezeichnet) angeben, um zu steuern, welcher Codec den neuen Schlüssel-Frame erzeugt.
Ein Stream kann (Simulcast) mehrere Versionen derselben Quelle enthalten, jede mit unterschiedlichen Eigenschaften wie Auflösung und Bildrate.
Die RID wird verwendet, um einen bestimmten RTP-Stream anzugeben und damit den Encoder, der einen neuen Frame erzeugen soll.
Beachten Sie, dass die verfügbaren RID-Werte festgelegt werden, wenn der Transceiver, der von der Verbindung verwendet wird, erstellt wird.
Die verwendeten RID-Werte können abgefragt werden, indem [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) aufgerufen wird und die [`encodings`](/de/docs/Web/API/RTCRtpSender/getParameters#encodings)-Eigenschaft des zurückgegebenen Werts überprüft wird.

Das von der Methode zurückgegebene Promise wird kurz vor der Einreihung des entsprechenden Schlüssel-Frames in einem `RTCRtpScriptTransformer`-lesbaren Bereich erfüllt.

> [!NOTE]
> Das Senden mehrerer Streams (RID) gleichzeitig wird als "Simulcast" bezeichnet.
> Diese Funktion bietet einem [middlebox](https://en.wikipedia.org/wiki/Middlebox) denselben Stream in mehreren Qualitätsstufen, wodurch er die Bandbreite verwalten kann, indem er selektiv die entsprechenden Level an die Teilnehmer überträgt und die Auflösung schnell im laufenden Betrieb umschaltet (d.h. Umschaltung auf die Übertragung von Videos in niedriger Qualität für alle außer dem aktiven Sprecher).
> Der Empfänger erhält immer nur einen Stream, weshalb die vergleichbare Empfängermethode [`RTCRtpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest) nicht erfordert, dass eine RID festgelegt wird.

## Beispiele

### Senden eines Schlüssel-Bildes

Das untenstehende Beispiel zeigt, wie der Haupt-Thread einen Verschlüsselungsschlüssel an eine Sender-Transformation übergeben und den Codec zur Erzeugung eines Schlüssel-Frames anstoßen könnte.

Beachten Sie, dass der Haupt-Thread keinen direkten Zugriff auf das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt hat, daher muss er den Schlüssel und die RID an den Worker übermitteln.
Hier tun wir das mit einem `MessageChannel`, wobei der zweite Port an den im Worker laufenden Transformer-Code übertragen wird.
Der Code geht davon aus, dass bereits eine Peer-Verbindung besteht, und `videoSender` ist ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender).

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

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignis-Handler im Worker erhält den Port und benutzt ihn, um auf `message`-Events zu lauschen.
Wenn ein Event empfangen wird, holt er sich `rid` und `key` und ruft dann `generateKeyFrame()` auf.

```js
event.transformer.options.port.onmessage = (event) => {
  const { rid, key } = event.data;
  // key is used by the transformer to encrypt frames (not shown)

  // Get codec to generate a new key frame using the rid
  // Here 'rcEvent' is the rtctransform event.
  rcEvent.transformer.generateKeyFrame(rid);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
