---
title: "RTCRtpScriptTransformer: Methode generateKeyFrame()"
short-title: generateKeyFrame()
slug: Web/API/RTCRtpScriptTransformer/generateKeyFrame
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("WebRTC")}}

Die Methode **`generateKeyFrame()`** der Schnittstelle [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer) veranlasst einen Video-Encoder, einen Keyframe zu erzeugen.

## Syntax

```js-nolint
generateKeyFrame()
generateKeyFrame(rid)
```

### Parameter

- `rid` {{optional_inline}}
  - : Eine Zeichenfolge mit dem „Restriction Identifier“ („RID“) des Streams beziehungsweise Encoders, der den neuen Keyframe erzeugen soll.

    Der Wert muss zwischen 1 und 255 Zeichen lang sein (einschließlich) und darf nur alphanumerische Zeichen, Unterstriche und Bindestriche enthalten (`A-Z`, `a-z`, `0-9`, `-`, `_`).
    Bei RIDs wird zwischen Groß- und Kleinschreibung unterschieden; sie müssen innerhalb des Kommunikationskanals zwischen den Peers eindeutig sein.
    <!-- RFC8851 allows '-' and '_' and unlimited length. RFC 8852 disagrees (https://www.rfc-editor.org/errata/eid7132) -->

    Der erste Encoder, der mit der angegebenen `rid` übereinstimmt, wird verwendet.
    Wenn kein Encoder mit der `rid` übereinstimmt, wird der erste Encoder verwendet und `rid` auf dessen Restrictions gesetzt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem Zeitstempel des Frames erfüllt oder mit einem Ausnahmewert zurückgewiesen wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Encoder verarbeitet keine Videoframes oder ist `undefined`.
- {{jsxref("TypeError")}}
  - : Die angegebene `rid` entspricht nicht den grammatikalischen Anforderungen.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Es sind keine Video-Encoder vorhanden. Dies kann auftreten, wenn der zugehörige `RTCRtpSender` nicht aktiv oder sein Track beendet ist.

## Beschreibung

Diese Methode kann von einem Transformer aufgerufen werden, der ausgehende codierte Videoframes verarbeitet, um das Senden eines neuen vollständigen Frames (Keyframes) zu erzwingen.
Dies kann bei einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms), der Frames verschlüsselt, erforderlich sein: Wird ein neuer Verschlüsselungsschlüssel hinzugefügt, soll möglichst schnell ein mit diesem Schlüssel verschlüsselter Keyframe gesendet werden.

Der Sender kann eine RID (auch „Restriction Identifier“ oder „RTP Stream ID“ genannt) angeben, um festzulegen, welcher Codec den neuen Keyframe erzeugt.
Ein Stream kann mittels Simulcast mehrere Versionen derselben Quelle mit unterschiedlichen Eigenschaften wie Auflösung und Bildrate enthalten.
Die RID bezeichnet einen bestimmten RTP-Stream und damit den Encoder, der einen neuen Frame erzeugen muss.
Beachten Sie, dass die verfügbaren RID-Werte beim Erstellen des von der Verbindung verwendeten Transceivers festgelegt werden.
Die verwendeten RID-Werte können Sie abrufen, indem Sie [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) aufrufen und die Eigenschaft [`encodings`](/de/docs/Web/API/RTCRtpSender/getParameters#encodings) des zurückgegebenen Werts untersuchen.

Das von der Methode zurückgegebene Promise wird unmittelbar bevor der entsprechende Keyframe in den lesbaren Stream eines `RTCRtpScriptTransformer` eingereiht wird, erfüllt.

> [!NOTE]
> Das gleichzeitige Senden mehrerer Streams (RIDs) wird „Simulcast“ genannt.
> Dadurch erhält eine [Middlebox](https://en.wikipedia.org/wiki/Middlebox) denselben Stream in mehreren Videoqualitätsstufen. Sie kann so die Bandbreite steuern, indem sie gezielt geeignete Qualitätsstufen an die Teilnehmer weiterleitet, und die Auflösung bei Bedarf schnell wechseln (etwa indem sie für alle außer der gerade sprechenden Person Videos in niedriger Qualität weiterleitet).
> Der Empfänger erhält immer nur einen Stream. Deshalb muss bei der entsprechenden Empfängermethode [`RTCRtpScriptTransformer.sendKeyFrameRequest()`](/de/docs/Web/API/RTCRtpScriptTransformer/sendKeyFrameRequest) keine RID angegeben werden.

## Beispiele

### Einen Keyframe senden

Das folgende Beispiel zeigt, wie der Hauptthread einen Verschlüsselungsschlüssel an einen Sender-Transform übergeben und den Codec veranlassen kann, einen Keyframe zu erzeugen.

Der Hauptthread hat keinen direkten Zugriff auf das Objekt [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer). Daher muss er den Schlüssel und die RID an den Worker übergeben.
Hierfür verwenden wir einen `MessageChannel` und übertragen den zweiten Port an den im Worker ausgeführten Transformer-Code.
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

Der Event-Handler für [`rtctransform`](/de/docs/Web/API/DedicatedWorkerGlobalScope/rtctransform_event) im Worker erhält den Port und verwendet ihn, um auf `message`-Ereignisse zu warten.
Wenn ein Ereignis empfangen wird, liest er `rid` und `key` aus und ruft anschließend `generateKeyFrame()` auf.

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
