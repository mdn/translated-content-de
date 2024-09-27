---
title: "RTCEncodedAudioFrame: getMetadata() Methode"
short-title: getMetadata()
slug: Web/API/RTCEncodedAudioFrame/getMetadata
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getMetadata()`**-Methode der [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)-Schnittstelle gibt ein Objekt zurück, das die Metadaten enthält, die mit dem Frame verbunden sind.

Dies schließt Informationen zum Frame ein, einschließlich der verwendeten Audio-Codierung, der Synchronisationsquelle und beitragenden Quellen sowie der Sequenznummer (für eingehende Frames).

## Syntax

```js-nolint
getMetadata()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `synchronizationSource`
  - : Ein positiver Ganzzahlwert, der die Synchronisationsquelle ("ssrc") des Streams von RTP-Paketen angibt, die durch diesen Frame beschrieben werden.
    Eine Quelle könnte beispielsweise ein Mikrofon oder eine Mixer-Anwendung sein, die mehrere Quellen kombiniert.
    Alle Pakete von derselben Quelle teilen dieselbe Zeitquelle und Sequenzraum und können daher relativ zueinander geordnet werden.
    Beachten Sie, dass zwei Frames mit demselben Wert sich auf dieselbe Quelle beziehen.
- `payloadType`
  - : Ein positiver Ganzzahlwert im Bereich von 0 bis 127, der das Format der RTP-Nutzlast beschreibt.
    Die Zuordnungen von Werten zu Formaten sind in RFC3550 definiert und speziell in [Abschnitt 6: Nutzlasttypdefinitionen](https://www.rfc-editor.org/rfc/rfc3551#section-6) von RFC3551.
- `contributingSources`
  - : Ein {{jsxref("Array")}} von Quellen (ssrc), die zu dem Frame beigetragen haben.
    Betrachten Sie den Fall einer Konferenzanwendung, die Audio von mehreren Benutzern kombiniert.
    Die `synchronizationSource` würde die ssrc der Anwendung einschließen, während `contributingSources` die ssrc-Werte aller individuellen Audioquellen einschließen würde.
- `sequenceNumber`
  - : Die Sequenznummer eines eingehenden Audio-Frames (nicht für ausgehende Frames verwendet), die zur Rekonstruktion der ursprünglichen Sende-Reihenfolge von Frames verwendet werden kann.
    Dies ist eine Zahl zwischen 0 und 32767.
    Beachten Sie, dass während die Zahlen bei der Sendung sequentiell zugewiesen werden, sie bei 32767 überlaufen und wieder bei 0 beginnen.
    Um zwei Frame-Sequenznummern zu vergleichen und festzustellen, ob eine nach der anderen angenommen wird, müssen Sie die [arithmetische Sequenznummer](https://en.wikipedia.org/wiki/Serial_number_arithmetic) verwenden. <!-- [RFC1982] -->

## Beispiele

Dieses Beispiel einer [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)-Implementierung zeigt, wie Sie die Frame-Metadaten in einer `transform()`-Funktion abrufen und protokollieren könnten.

```js
addEventListener("rtctransform", (event) => {
  const async transform = new TransformStream({
    async transform(encodedFrame, controller) {

      // Get the metadata and log
      const frameMetaData = encodedFrame.getMetadata();
      console.log(frameMetaData)

      // Enqueue the frame without modifying
      controller.enqueue(encodedFrame);
    },
  });
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Das resultierende Objekt von einem lokalen Mikrofon könnte ähnlich dem unten gezeigten aussehen.
Beachten Sie, dass es keine beitragenden Quellen gibt, da es nur eine Quelle gibt, und keine `sequenceNumber`, da es sich um einen ausgehenden Frame handelt.

```js
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

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
