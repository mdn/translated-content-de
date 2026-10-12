---
title: "RTCRtpScriptTransformer: Methode generateKeyFrame()"
short-title: generateKeyFrame()
slug: Web/API/RTCRtpScriptTransformer/generateKeyFrame
l10n:
  sourceCommit: 5b85e27155260155bd829fc6d4b98ca2c476b2d1
---

{{APIRef("WebRTC")}}

Die Methode **`generateKeyFrame()`** der Schnittstelle [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) veranlasst einen Video-Encoder, ein Keyframe zu erzeugen.

## Syntax

```js-nolint
generateKeyFrame()
generateKeyFrame(rid)
```

### Parameter

- `rid` {{optional_inline}}
  - : Ein String mit dem „Restriction Identifier“ („RID“) des Streams beziehungsweise Encoders, der das neue Keyframe erzeugen soll.

    Der Wert muss zwischen 1 und 255 Zeichen lang sein und darf nur alphanumerische Zeichen, Unterstriche und Bindestriche enthalten (`A-Z`, `a-z`, `0-9`, `-`, `_`).
    Bei RIDs wird zwischen Groß- und Kleinschreibung unterschieden; sie müssen innerhalb des Kommunikationskanals zwischen den Peers eindeutig sein.
    <!-- RFC8851 allows '-' and '_' and unlimited length. RFC 8852 disagrees (https://www.rfc-editor.org/errata/eid7132) -->

    Der erste Encoder, der mit der angegebenen `rid` übereinstimmt, wird verwendet.
    Wenn kein Encoder mit der `rid` übereinstimmt, wird der erste Encoder verwendet und `rid` auf dessen Einschränkungen gesetzt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem Zeitstempel des Frames erfüllt oder mit einem Ausnahmewert zurückgewiesen wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Encoder verarbeitet keine Videoframes oder ist `undefined`.
- `TypeError`
  - : Die angegebene `rid` entspricht nicht den Syntaxanforderungen.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Es sind keine Video-Encoder vorhanden. Dies kann auftreten, wenn der entsprechende `RTCRtpSender` nicht aktiv ist oder dessen Track beendet wurde.

## Beschreibung

Diese Methode kann von einem Transformer aufgerufen werden, der ausgehende codierte Videoframes verarbeitet, um das Senden eines neuen vollständigen Frames (Keyframes) zu erzwingen.
Dies kann bei einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) erforderlich sein, der Frames verschlüsselt: Wenn ein neuer Verschlüsselungsschlüssel hinzugefügt wird, kann so sichergestellt werden, dass möglichst bald ein mit diesem Schlüssel verschlüsseltes Keyframe gesendet wird.

Der Sender kann eine RID (auch „Restriction Identifier“ oder „RTP Stream ID“ genannt) angeben, um zu steuern, welcher Codec das neue Keyframe erzeugt.
Ein Stream kann beim Simulcast mehrere Versionen derselben Quelle mit unterschiedlichen Eigenschaften wie Auflösung und Bildrate enthalten.
Die RID bezeichnet einen bestimmten RTP-Stream und damit den Encoder, der ein neues Frame erzeugen soll.
Beachten Sie, dass die verfügbaren RID-Werte beim Erstellen des für die Verbindung verwendeten Transceivers festgelegt werden.
Die verwendeten RID-Werte können Sie abfragen, indem Sie [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) aufrufen und die Eigenschaft [`encodings`](/de/docs/Web/API/RTCRtpSender/getParameters#encodings) des zurückgegebenen Werts untersuchen.

Das von der Methode zurückgegebene Promise wird unmittelbar vor dem Einreihen des entsprechenden Keyframes in den lesbaren Stream eines `RTCRtpScriptTransformer` erfüllt.

> [!NOTE]
> Das gleichzeitige Senden mehrerer Streams (RIDs) wird „Simulcast“ genannt.
> Dadurch erhält eine [Middlebox](https://en.wikipedia.org/wiki/Middlebox) denselben Stream in mehreren Videoqualitätsstufen. Sie kann die Bandbreite steuern, indem sie gezielt geeignete Qualitätsstufen an die Teilnehmer weiterleitet und die Auflösung bei Bedarf schnell umschaltet (etwa indem sie für alle außer der gerade sprechenden Person Video in niedriger Qualität weiterleitet).
> Der Empfänger erhält jeweils nur einen Stream. Deshalb muss bei der entsprechenden Empfängermethode [`RTCRtpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest) keine RID angegeben werden.

## Beispiele

### Ein Keyframe senden

Das folgende Beispiel zeigt, wie der Hauptthread einen Verschlüsselungsschlüssel an einen Sender-Transform übergeben und den Codec veranlassen kann, ein Keyframe zu erzeugen.

Der Hauptthread hat keinen direkten Zugriff auf das Objekt [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer). Daher muss er den Schlüssel und die RID an den Worker übergeben.
Hierzu verwenden wir einen `MessageChannel` und übertragen dessen zweiten Port an den Transformer-Code, der im Worker ausgeführt wird.
Der Code setzt voraus, dass bereits eine Peer-Verbindung besteht und `videoSender` ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) ist.

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

Der Event-Handler für [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) im Worker erhält den Port und verwendet ihn, um auf `message`-Events zu warten.
Wenn ein Event empfangen wird, liest er `rid` und `key` aus und ruft anschließend `generateKeyFrame()` auf.

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

- [WebRTC Encoded Transforms verwenden](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
