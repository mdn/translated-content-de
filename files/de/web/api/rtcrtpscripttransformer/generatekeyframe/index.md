---
title: "RTCRtpScriptTransformer: generateKeyFrame() Methode"
short-title: generateKeyFrame()
slug: Web/API/RTCRtpScriptTransformer/generateKeyFrame
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebRTC")}}

Die **`generateKeyFrame()`** Methode der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) Schnittstelle veranlasst einen Video-Encoder, ein Schlüsselbild zu erzeugen.

## Syntax

```js-nolint
generateKeyFrame()
generateKeyFrame(rid)
```

### Parameter

- `rid` {{optional_inline}}

  - : Ein String, der die "Einschränkungskennung" ("RID") des Streams/Encoders enthält, der das neue Schlüsselbild erzeugen muss.

    Der Wert muss zwischen 1 und 255 Zeichen (einschließlich) enthalten und darf nur alphanumerische Zeichen, Unterstriche und Bindestriche (`A-Z`, `a-z`, `0-9`, `-`, `_`) enthalten.
    RIDs sind groß- und kleinschreibungssensitiv und müssen eindeutig für den Peer-Kommunikationskanal sein.
    <!-- RFC8851 erlaubt '-' und '_' und unbegrenzte Länge. RFC 8852 widerspricht (https://www.rfc-editor.org/errata/eid7132) -->

    Der erste Encoder, der zur angegebenen `rid` passt, wird verwendet.
    Wenn kein Encoder zur `rid` passt, wird der erste Encoder verwendet und `rid` wird auf die Einschränkungen des Encoders gesetzt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem Zeitstempel des Bildes erfüllt wird oder mit einem Ausnahmefehler abgelehnt wird.

### Ausnahmen

- `InvalidStateError`
  - : Der Encoder verarbeitet keine Videobilder oder ist `undefined`.
- `TypeError`
  - : Die bereitgestellte `rid` entspricht nicht den Grammatikanforderungen.
- `NotFoundError`
  - : Es gibt keine Video-Encoder. Dies könnte auftreten, wenn der entsprechende `RTCRtpSender` nicht aktiv ist oder sein Track beendet wurde.

## Beschreibung

Diese Methode kann von einem Transformator aufgerufen werden, der ausgehende, kodierte Videobilder verarbeitet, um zu erzwingen, dass ein neues vollständiges (Schlüssel-)Bild gesendet wird.
Dies könnte von einem [WebRTC Encoding-Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) benötigt werden, das Bilder verschlüsselt, um sicherzustellen, dass, falls ein neuer Verschlüsselungsschlüssel hinzugefügt wird, ein mit diesem Schlüssel verschlüsseltes Schlüsselbild so schnell wie möglich gesendet wird.

Der Sender kann eine RID angeben (auch als "Einschränkungskennung" oder "RTP-Stream-ID" bezeichnet), um zu steuern, welcher Codec das neue Schlüsselbild erzeugt.
Ein Stream könnte (Simulcast) mehrere Versionen derselben Quelle enthalten, jede mit unterschiedlichen Eigenschaften wie Auflösung und Bildrate.
Die RID wird verwendet, um einen bestimmten RTP-Stream und damit den Encoder anzugeben, der ein neues Bild erzeugen muss.
Bitte beachten Sie, dass die verfügbaren RID-Werte beim Erstellen des vom Anschluss verwendeten Transceivers festgelegt werden.
Die verwendeten RID-Werte können abgefragt werden, indem [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) aufgerufen wird und die [`encodings`](/de/docs/Web/API/RTCRtpSender/getParameters#encodings) Eigenschaft des zurückgegebenen Wertes inspiziert wird.

Das von der Methode zurückgegebene Promise wird kurz vor der Einreihung des entsprechenden Schlüsselbildes in einen `RTCRtpScriptTransformer` lesbar erfüllt.

> [!NOTE]
> Das gleichzeitige Senden mehrerer Streams (RID) wird als "Simulcast" bezeichnet.
> Diese Funktion bietet einer [Mittelbox](https://en.wikipedia.org/wiki/Middlebox) denselben Stream in mehreren Qualitätsstufen, sodass sie Bandbreite verwalten kann, indem sie geeignete Stufen selektiv an Teilnehmer überträgt und die Auflösung schnell wechseln kann (z. B. um Videos mit niedriger Qualität an alle außer den aktiven Sprecher zu senden).
> Der Empfänger erhält nur einen Stream, weshalb die vergleichbare Empfangsmethode [`RTCRtpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest) nicht erfordert, dass eine RID angegeben wird.

## Beispiele

### Senden eines Schlüsselbildes

Das folgende Beispiel zeigt, wie der Haupt-Thread einen Verschlüsselungsschlüssel an einen Sender-Transformator übergeben und den Codec zur Erzeugung eines Schlüsselbildes veranlassen könnte.

Beachten Sie, dass der Haupt-Thread keinen direkten Zugriff auf das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) Objekt hat und daher den Schlüssel und die RID an den Worker übergeben muss.
Hier tun wir das mit einem `MessageChannel`, indem wir den zweiten Port an den im Worker laufenden Transformatorcode übertragen.
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

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) Ereignishandler im Worker erhält den Port und verwendet ihn, um auf `message`-Ereignisse zu hören.
Wenn ein Ereignis empfangen wird, holt es sich die `rid` und den `key`, und ruft dann `generateKeyFrame()` auf.

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

- [Verwendung von WebRTC Encoding-Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
