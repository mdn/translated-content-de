---
title: "RTCRtpScriptTransformer: generateKeyFrame() Methode"
short-title: generateKeyFrame()
slug: Web/API/RTCRtpScriptTransformer/generateKeyFrame
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
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

  - : Ein String, der die "Einschränkungskennung" ("RID") des Streams/Encoders enthält, der das neue Schlüsselbild generieren muss.

    Der Wert muss zwischen 1 und 255 Zeichen (einschließlich) haben und darf nur alphanumerische Zeichen, Unterstriche und Bindestriche (`A-Z`, `a-z`, `0-9`, `-`, `_`) enthalten.
    RIDs sind groß-/kleinbuchstabensensitiv und müssen einzigartig für den Peer-Kommunikationskanal sein.
    <!-- RFC8851 erlaubt '-' und '_' und unbegrenzte Länge. RFC 8852 widerspricht (https://www.rfc-editor.org/errata/eid7132) -->

    Der erste Encoder, der mit dem angegebenen `rid` übereinstimmt, wird verwendet.
    Wenn kein Encoder mit dem `rid` übereinstimmt, wird der erste Encoder verwendet und `rid` auf die Einschränkungen des Encoders gesetzt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem Zeitstempel des Rahmens erfüllt wird oder mit einem Ausnahmefehler abgelehnt wird.

### Ausnahmen

- `InvalidStateError`
  - : Der Encoder verarbeitet keine Videoframes oder ist `undefined`.
- `TypeError`
  - : Der bereitgestellte `rid` entspricht nicht den Grammatikanforderungen.
- `NotFoundError`
  - : Es gibt keine Video-Encoder. Dies könnte auftreten, wenn der entsprechende `RTCRtpSender` nicht aktiv ist oder seine Spur beendet ist.

## Beschreibung

Diese Methode kann von einem Transformer aufgerufen werden, der ausgehende kodierte Videoframes verarbeitet, um das Senden eines neuen vollständigen (Schlüssel-)Frames zu erzwingen.
Es könnte von einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) benötigt werden, das Frames verschlüsselt, um sicherzustellen, dass, wenn ein neuer Verschlüsselungsschlüssel hinzugefügt wird, ein mit diesem Schlüssel verschlüsselter Schlüsselrahmen so schnell wie möglich gesendet wird.

Der Sender kann eine RID (auch als "Einschränkungskennung" oder "RTP-Stream-ID" bezeichnet) angeben, um zu steuern, welcher Codec den neuen Schlüsselrahmen erzeugt.
Ein Stream kann (Simulcast) mehrere Versionen derselben Quelle enthalten, jede mit unterschiedlichen Eigenschaften wie Auflösung und Bildrate.
Die RID wird verwendet, um einen bestimmten RTP-Stream anzugeben und folglich den Encoder, der einen neuen Frame generieren muss.
Beachten Sie, dass die verfügbaren RID-Werte festgelegt werden, wenn der von der Verbindung verwendete Transceiver erstellt wird.
Die verwendeten RID-Werte können durch Aufruf von [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) und Überprüfung der [`encodings`](/de/docs/Web/API/RTCRtpSender/getParameters#encodings)-Eigenschaft des zurückgegebenen Werts abgefragt werden.

Das von der Methode zurückgegebene Versprechen wird unmittelbar vor der Einreihung des entsprechenden Schlüsselbildes in einen `RTCRtpScriptTransformer`-lesbaren gelöst.

> [!NOTE]
> Das Senden mehrerer Streams (RID) gleichzeitig wird "Simulcast" genannt.
> Diese Funktion bietet einer [Middlebox](https://en.wikipedia.org/wiki/Middlebox) denselben Stream in mehreren Videoqualitätsstufen und ermöglicht es ihr, die Bandbreite zu verwalten, indem selektiv geeignete Ebenen an Teilnehmer übertragen werden und die Auflösung schnell umgeschaltet wird (d.h. Umschalten auf Weiterleitung von niedrigqualitativem Video für alle außer dem aktiven Sprecher).
> Der Empfänger erhält immer nur einen Stream, weshalb die vergleichbare Empfängermethode [`RTCRtpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest) nicht erfordert, dass ein RID angegeben wird.

## Beispiele

### Senden eines Schlüsselrahmens

Das folgende Beispiel zeigt, wie der Haupt-Thread möglicherweise einen Verschlüsselungsschlüssel an eine Sendertransformation übergibt und den Codec veranlasst, einen Schlüsselrahmen zu erzeugen.

Beachten Sie, dass der Haupt-Thread keinen direkten Zugriff auf das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt hat, daher muss er den Schlüssel und RID an den Worker übergeben.
Hier tun wir das mit einem `MessageChannel` und übertragen den zweiten Port an den Transformer-Code, der im Worker läuft.
Der Code geht davon aus, dass bereits eine Peer-Verbindung besteht und `videoSender` ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) ist.

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

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Ereignishandler im Worker erhält den Port und verwendet ihn, um auf `message`-Ereignisse zu lauschen.
Wenn ein Ereignis empfangen wird, holt es sich das `rid` und `key` und ruft dann `generateKeyFrame()` auf.

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
