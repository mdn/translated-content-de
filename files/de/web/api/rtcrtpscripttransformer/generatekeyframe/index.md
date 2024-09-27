---
title: "RTCRtpScriptTransformer: generateKeyFrame()"
short-title: generateKeyFrame()
slug: Web/API/RTCRtpScriptTransformer/generateKeyFrame
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`generateKeyFrame()`**-Methode der [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Schnittstelle veranlasst einen Video-Encoder, einen Schlüsselbildrahmen zu erzeugen.

## Syntax

```js-nolint
generateKeyFrame()
generateKeyFrame(rid)
```

### Parameter

- `rid` {{optional_inline}}

  - : Ein String, der die "Restriction Identifier" ("RID") des Streams/Encoders enthält, der den neuen Schlüsselbildrahmen erzeugen muss.

    Der Wert muss zwischen 1 und 255 Zeichen (einschließlich) lang sein und darf nur die alphanumerischen Zeichen, Unterstriche und Bindestriche (`A-Z`, `a-z`, `0-9`, `-`, `_`) enthalten.
    RIDs sind groß- und kleinschreibungssensitiv und müssen für den Peer-Kommunikationskanal eindeutig sein.
    <!-- RFC8851 erlaubt '-' und '_' und unbegrenzte Länge. RFC 8852 widerspricht (https://www.rfc-editor.org/errata/eid7132) -->

    Der erste Encoder, der mit dem angegebenen `rid` übereinstimmt, wird verwendet.
    Wenn kein Encoder dem `rid` entspricht, wird der erste Encoder verwendet, und `rid` wird auf die Einschränkungen des Encoders gesetzt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit dem Zeitstempel des Rahmens erfüllt oder mit einem Ausnahmefehler abgelehnt wird.

### Ausnahmen

- `InvalidStateError`
  - : Der Encoder verarbeitet keine Videobilder oder ist `undefined`.
- `TypeError`
  - : Das bereitgestellte `rid` entspricht nicht den Grammatikanforderungen.
- `NotFoundError`
  - : Es sind keine Video-Encoder vorhanden. Dies könnte ausgelöst werden, wenn der entsprechende `RTCRtpSender` nicht aktiv ist oder sein Track beendet ist.

## Beschreibung

Diese Methode kann von einem Transformator aufgerufen werden, der ausgehende codierte Video-Frames verarbeitet, um das Senden eines neuen vollständigen (Schlüssel-)Bildrahmens zu erzwingen. Es könnte von einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) benötigt werden, das Frames verschlüsselt, um sicherzustellen, dass, wenn ein neuer Verschlüsselungsschlüssel hinzugefügt wird, ein mit diesem Schlüssel verschlüsselter Schlüsselframe so schnell wie möglich gesendet wird.

Der Sender kann ein RID (auch als "Restriction Identifier" oder "RTP Stream ID" bezeichnet) angeben, um zu steuern, welcher Codec den neuen Schlüsselbildrahmen erzeugt. Ein Stream kann (Simulcast) mehrere Versionen derselben Quelle enthalten, jeweils mit unterschiedlichen Eigenschaften wie Auflösung und Bildrate. Das RID wird verwendet, um einen bestimmten RTP-Stream anzugeben und somit den Encoder, der einen neuen Rahmen erzeugen muss. Beachten Sie, dass die verfügbaren RID-Werte festgelegt werden, wenn der von der Verbindung verwendete Transceiver erstellt wird. Die verwendeten RID-Werte können abgefragt werden, indem `RTCRtpSender.getParameters()` aufgerufen und die [`encodings`](/de/docs/Web/API/RTCRtpSender/getParameters#encodings)-Eigenschaft des zurückgegebenen Wertes inspiziert wird.

Das von der Methode zurückgegebene Promise wird aufgelöst, kurz bevor der entsprechende Schlüsselframe in eine `RTCRtpScriptTransformer`-readable eingereiht wird.

> [!NOTE]
> Das gleichzeitige Senden mehrerer Streams (RID) wird als "Simulcast" bezeichnet. Diese Funktion stellt einer [Middlebox](https://en.wikipedia.org/wiki/Middlebox) denselben Stream in mehreren Qualitätsstufen bereit, sodass diese die Bandbreite verwalten kann, indem sie geeignete Stufen selektiv an die Teilnehmer überträgt und die Auflösung schnell auf die Fliege (d. h. Umschalten auf Übertragung von niedriger Qualität für alle außer dem aktiven Sprecher) umschaltet. Der Empfänger erhält immer nur einen Stream, weshalb die vergleichbare Empfängermethode [`RTCRtpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest) nicht erfordert, dass ein RID angegeben wird.

## Beispiele

### Senden eines Schlüsselbildrahmens

Das folgende Beispiel zeigt, wie der Hauptthread einen Verschlüsselungsschlüssel an einen Sender-Transformator übergeben und den Codec dazu veranlassen könnte, einen Schlüsselbildrahmen zu erzeugen.

Beachten Sie, dass der Hauptthread keinen direkten Zugriff auf das [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)-Objekt hat, daher muss er den Schlüssel und RID an den Worker übergeben. Hier erfolgt dies über einen `MessageChannel`, wobei der zweite Port an den im Worker ausgeführten Transformationscode übergeben wird. Der Code geht davon aus, dass bereits eine Peer-Verbindung besteht und `videoSender` ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) ist.

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

Der [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event)-Event-Handler im Worker erhält den Port und verwendet ihn, um auf `message`-Ereignisse zu lauschen. Wenn ein Ereignis empfangen wird, erhält er das `rid` und den `key` und ruft dann `generateKeyFrame()` auf.

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

- [Verwendung von WebRTC Codierten Transformationen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
