---
title: "RTCRtpScriptTransformer: generateKeyFrame()"
short-title: generateKeyFrame()
slug: Web/API/RTCRtpScriptTransformer/generateKeyFrame
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die Methode **`generateKeyFrame()`** des {{domxref("RTCRtpScriptTransformer")}}-Interfaces veranlasst einen Video-Encoder, einen Schlüsselbild (Key Frame) zu erzeugen.

## Syntax

```js-nolint
generateKeyFrame()
generateKeyFrame(rid)
```

### Parameter

- `rid` {{optional_inline}}

  - : Ein String, der die "Bezeichnungsbeschränkung" ("RID") des Streams/Encoders enthält, der das neue Schlüsselbild erzeugen muss.

    Der Wert muss zwischen 1 und 255 Zeichen (einschließlich) haben und darf nur alphanumerische Zeichen, Unterstrich und Bindestrich (`A-Z`, `a-z`, `0-9`, `-`, `_`) enthalten.
    RIDs sind case-sensitive und müssen einzigartig für den Peer-Kommunikationskanal sein.
    <!-- RFC8851 erlaubt '-' und '_' sowie eine unbegrenzte Länge. RFC 8852 widerspricht (https://www.rfc-editor.org/errata/eid7132) -->

    Der erste Encoder, der dem angegebenen `rid` entspricht, wird verwendet.
    Wenn kein Encoder dem `rid` entspricht, wird der erste Encoder verwendet, und `rid` wird auf die Einschränkungen des Encoders gesetzt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem Zeitstempel des Rahmens erfüllt wird oder mit einem Ausnahmefehler abgelehnt wird.

### Ausnahmen

- `InvalidStateError`
  - : Der Encoder verarbeitet keine Videorahmen oder ist `undefined`.
- `TypeError`
  - : Der angegebene `rid` entspricht nicht den Grammatikvorgaben.
- `NotFoundError`
  - : Es gibt keine Video-Encoder. Dies könnte auftreten, wenn der entsprechende `RTCRtpSender` nicht aktiv ist oder sein Track beendet wurde.

## Beschreibung

Diese Methode kann von einem Transformer, der ausgehende kodierte Videobilder verarbeitet, aufgerufen werden, um das Senden eines neuen vollständigen (Schlüssel-)Bildes zu erzwingen.
Dies könnte von einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) benötigt werden, der Rahmen verschlüsselt, um sicherzustellen, dass, wenn ein neuer Verschlüsselungsschlüssel hinzugefügt wird, so schnell wie möglich ein mit diesem Schlüssel verschlüsseltes Schlüsselbild gesendet wird.

Der Sender kann ein RID (auch als "Bezeichnungsbeschränkung" oder "RTP stream ID" bezeichnet) angeben, um zu steuern, welcher Codec den neuen Schlüsselbildrahmen erzeugt.
Ein Stream könnte (Simulcast) mehrere Versionen derselben Quelle enthalten, jede mit unterschiedlichen Eigenschaften wie Auflösung und Bildrate.
Das RID wird verwendet, um einen bestimmten RTP-Stream anzugeben und somit den Encoder, der einen neuen Frame erzeugen muss.
Beachten Sie, dass die verfügbaren RID-Werte beim Erstellen des für die Verbindung verwendeten Transceivers festgelegt werden.
Die verwendeten RID-Werte können abgefragt werden, indem {{domxref("RTCRtpSender.getParameters()")}} aufgerufen und die [`encodings`](/de/docs/Web/API/RTCRtpSender/getParameters#encodings)-Eigenschaft des zurückgegebenen Wertes untersucht wird.

Das von der Methode zurückgegebene Promise wird direkt vor dem Einreihen des entsprechenden Schlüsselbildrahmens in einen `RTCRtpScriptTransformer` lesbar aufgelöst.

> [!NOTE]
> Das gleichzeitige Senden mehrerer Streams (RID) wird als "Simulcast" bezeichnet.
> Diese Funktion bietet einem [Middlebox](https://en.wikipedia.org/wiki/Middlebox) denselben Stream in mehreren Qualitätsstufen für Videos an, damit sie die Bandbreite verwalten kann, indem sie geeignete Stufen selektiv an Teilnehmer überträgt und die Auflösung schnell im laufenden Betrieb wechseln kann (d. h. Umschalten auf niedrigqualitatives Video für alle außer dem aktiven Sprecher).
> Der Empfänger erhält immer nur einen Stream, weshalb die vergleichbare Empfängermethode {{domxref("RTCRtpScriptTransformer.sendKeyFrameRequest()")}} nicht erfordert, dass ein RID angegeben wird.

## Beispiele

### Senden eines Schlüsselbildes

Das folgende Beispiel zeigt, wie der Haupt-Thread möglicherweise einen Verschlüsselungsschlüssel an eine Sendertransformation übergibt und den Codec veranlasst, ein Schlüsselbild zu erzeugen.

Beachten Sie, dass der Haupt-Thread keinen direkten Zugriff auf das {{domxref("RTCRtpScriptTransformer")}}-Objekt hat, daher muss er den Schlüssel und das RID an den Worker übergeben.
Hier tun wir dies mit einem `MessageChannel`, indem wir den zweiten Port an den im Worker laufenden Transformer-Code übergeben.
Der Code geht davon aus, dass bereits eine Peer-Verbindung vorhanden ist und `videoSender` ein {{domxref("RTCRtpSender")}} ist.

```js
const worker = new Worker("worker.js");
const channel = new MessageChannel();

videoSender.transform = new RTCRtpScriptTransform(
  worker,
  { name: "senderTransform", port: channel.port2 },
  [channel.port2],
);

// RID und neuen Schlüssel an den Sender senden
channel.port1.start();
channel.port1.postMessage({
  rid: "1",
  key: "93ae0927a4f8e527f1gce6d10bc6ab6c",
});
```

Der {{domxref("DedicatedWorkerGlobalScope/rtctransform_event", "rtctransform")}}-Ereignis-Handler im Worker erhält den Port und verwendet ihn, um auf `message`-Ereignisse zu lauschen.
Wenn ein Ereignis empfangen wird, erhält er das `rid` und den `key` und ruft dann `generateKeyFrame()` auf.

```js
event.transformer.options.port.onmessage = (event) => {
  const { rid, key } = event.data;
  // key wird vom Transformer verwendet, um Rahmen zu verschlüsseln (nicht gezeigt)

  // Codec veranlassen, einen neuen Schlüsselbildrahmen mit dem RID zu erzeugen
  // Hier ist 'rcevent' das rtctransform-Ereignis.
  rcevent.transformer.generateKeyFrame(rid);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
