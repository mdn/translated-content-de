---
title: "RTCRtpScriptTransformer: generateKeyFrame()"
short-title: generateKeyFrame()
slug: Web/API/RTCRtpScriptTransformer/generateKeyFrame
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebRTC")}}

Die Methode **`generateKeyFrame()`** der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Schnittstelle veranlasst einen Video-Encoder, ein Schlüsselbild zu erzeugen.

## Syntax

```js-nolint
generateKeyFrame()
generateKeyFrame(rid)
```

### Parameter

- `rid` {{optional_inline}}

  - : Ein String, der die "Einschränkungskennung" ("RID") des Streams/Encoders enthält, der das neue Schlüsselbild erzeugen muss.

    Der Wert muss zwischen 1 und 255 Zeichen beinhalten (einschließlich) und darf nur alphanumerische Zeichen, Unterstrich und Bindestrich (`A-Z`, `a-z`, `0-9`, `-`, `_`) enthalten.
    RIDs sind groß-/kleinschreibungssensitiv und müssen für den Peer-Kommunikationskanal eindeutig sein.
    <!-- RFC8851 erlaubt '-' und '_' und unbegrenzte Länge. RFC 8852 widerspricht (https://www.rfc-editor.org/errata/eid7132) -->

    Der erste Encoder, der mit der angegebenen `rid` übereinstimmt, wird verwendet.
    Wenn kein Encoder mit der `rid` übereinstimmt, wird der erste Encoder verwendet und `rid` wird auf die Einschränkungen des Encoders gesetzt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem Zeitstempel des Frames erfüllt wird oder mit einem Ausnahmefehler abgelehnt wird.

### Ausnahmen

- `InvalidStateError`
  - : Der Encoder verarbeitet keine Videoframes oder ist `undefined`.
- `TypeError`
  - : Das bereitgestellte `rid` entspricht nicht den formalen Anforderungen.
- `NotFoundError`
  - : Es sind keine Video-Encoder vorhanden. Dies könnte auftreten, wenn der entsprechende `RTCRtpSender` nicht aktiv ist oder sein Track beendet wurde.

## Beschreibung

Diese Methode kann von einem Transformer aufgerufen werden, der ausgehende codierte Video-Frames verarbeitet, um das Senden eines neuen vollständigen (Schlüssel-)Frames zu erzwingen.
Dies kann benötigt werden von einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms), der Frames verschlüsselt, um sicherzustellen, dass, wenn ein neuer Verschlüsselungsschlüssel hinzugefügt wird, ein mit diesem Schlüssel verschlüsseltes Schlüsselbild so schnell wie möglich gesendet wird.

Der Sender kann einen RID (auch "Einschränkungskennung" oder "RTP-Stream-ID" genannt) angeben, um zu steuern, welcher Codec das neue Schlüsselbild erzeugt.
Ein Stream kann (simulcast) mehrere Versionen derselben Quelle enthalten, jede mit unterschiedlichen Eigenschaften wie Auflösung und Bildrate.
Der RID wird verwendet, um einen bestimmten RTP-Stream anzugeben, und damit den Encoder, der ein neues Frame erzeugen muss.
Beachten Sie, dass die verfügbaren RID-Werte festgelegt werden, wenn der Transceiver, der von der Verbindung verwendet wird, erstellt wird.
Die verwendeten RID-Werte können durch Aufrufen von [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) und Überprüfen der [`encodings`](/de/docs/Web/API/RTCRtpSender/getParameters#encodings)-Eigenschaft des zurückgegebenen Werts abgefragt werden.

Das von der Methode zurückgegebene Promise wird aufgelöst, kurz bevor der entsprechende Schlüsselbildrahmen in einen `RTCRtpScriptTransformer`-lesbaren eingeplant wird.

> [!NOTE]
> Das gleichzeitige Senden mehrerer Streams (RID) wird als "Simulcast" bezeichnet.
> Diese Funktion bietet einer [Middlebox](https://en.wikipedia.org/wiki/Middlebox) denselben Stream in mehreren Qualitätsstufen, sodass sie die Bandbreite verwalten kann, indem sie geeignete Stufen selektiv an Teilnehmer überträgt und die Auflösung schnell während des Betriebs wechseln kann (z. B. Umschalten auf eine geringe Videoqualität für alle außer dem aktiven Sprecher).
> Der Empfänger erhält nur einen Stream, weshalb die vergleichbare Empfangermethode [`RTCRtpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest) nicht erfordert, dass ein RID angegeben wird.

## Beispiele

### Senden eines Schlüsselbilds

Das folgende Beispiel zeigt, wie der Haupt-Thread einen Verschlüsselungsschlüssel an einen Sender-Transform übergeben und den Codec veranlassen könnte, ein Schlüsselbild zu erzeugen.

Beachten Sie, dass der Haupt-Thread keinen direkten Zugriff auf das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt hat, daher muss er den Schlüssel und RID an den Worker übergeben.
Hier tun wir dies mit einem `MessageChannel`, wobei wir den zweiten Port an den im Worker ausgeführten Transformercode übertragen.
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

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Event-Handler im Worker erhält den Port und verwendet ihn, um auf `message`-Ereignisse zu hören.
Wenn ein Ereignis empfangen wird, erhält er das `rid` und `key` und ruft dann `generateKeyFrame()` auf.

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
