---
title: "RTCEncodedAudioFrame: getMetadata() Methode"
short-title: getMetadata()
slug: Web/API/RTCEncodedAudioFrame/getMetadata
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getMetadata()`** Methode des [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) Interface gibt ein Objekt zurück, das die mit dem Frame verknüpften Metadaten enthält.

Dies umfasst Informationen über den Frame, einschließlich der verwendeten Audio-Kodierung, der Synchronquelle und der beitragenden Quellen sowie der Sequenznummer (für eingehende Frames).

## Syntax

```js-nolint
getMetadata()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `synchronizationSource`
  - : Ein positiver Ganzzahlenwert, der die Synchronquelle ("ssrc") des Streams von RTP-Paketen angibt, die durch diesen Frame beschrieben werden.
    Eine Quelle könnte z. B. ein Mikrofon oder eine Mixer-Anwendung sein, die mehrere Quellen kombiniert.
    Alle Pakete von derselben Quelle teilen sich denselben Zeit- und Sequenzraum und können daher relativ zueinander geordnet werden.
    Beachten Sie, dass zwei Frames mit demselben Wert auf dieselbe Quelle verweisen.
- `payloadType`
  - : Ein positiver Ganzzahlenwert im Bereich von 0 bis 127, der das Format der RTP-Nutzlast beschreibt.
    Die Zuordnungen von Werten zu Formaten sind in RFC3550 definiert, insbesondere [Abschnitt 6: Nutzlasttyp-Definitionen](https://www.rfc-editor.org/rfc/rfc3551#section-6) von RFC3551.
- `contributingSources`
  - : Ein {{jsxref("Array")}} von Quellen (ssrc), die zum Frame beigetragen haben.
    Betrachten Sie den Fall einer Konferenzanwendung, die Audio von mehreren Benutzern kombiniert.
    Die `synchronizationSource` würde das ssrc der Anwendung enthalten, während `contributingSources` die ssrc-Werte aller einzelnen Audioquellen enthalten würde.
- `sequenceNumber`
  - : Die Sequenznummer eines eingehenden Audioframes (nicht für ausgehende Frames verwendet), die zur Rekonstruktion der ursprünglichen Sendereihenfolge von Frames verwendet werden kann.
    Dies ist eine Zahl zwischen 0 und 32767.
    Beachten Sie, dass, obwohl die Nummern bei der Sendung sequentiell zugeordnet werden, sie bei 32767 überlaufen und wieder bei 0 beginnen.
    Um zwei Frame-Sequenznummern zu vergleichen, um festzustellen, ob eine nach der anderen angenommen wird, müssen Sie [Seriennummern-Arithmetik](https://en.wikipedia.org/wiki/Serial_number_arithmetic) verwenden. <!-- [RFC1982] -->

## Beispiele

Dieses Beispiel einer [WebRTC-kodierten Transformation](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) zeigt, wie Sie Metadaten eines Frames in einer `transform()`-Funktion abrufen und protokollieren könnten.

```js
addEventListener("rtctransform", (event) => {
  const transform = new TransformStream({
    async transform(encodedFrame, controller) {
      // Get the metadata and log
      const frameMetaData = encodedFrame.getMetadata();
      console.log(frameMetaData);

      // Enqueue the frame without modifying
      controller.enqueue(encodedFrame);
    },
  });
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Das resultierende Objekt von einem lokalen Mikrofon könnte wie das unten gezeigte aussehen.
Beachten Sie, dass es keine beitragenden Quellen gibt, da nur eine Quelle vorhanden ist, und keine `sequenceNumber`, da dies ein ausgehender Frame ist.

```json
{
  "payloadType": 109,
  "synchronizationSource": 1876443470
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC-kodierten Transformationen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
