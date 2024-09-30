---
title: "RTCEncodedAudioFrame: getMetadata() Methode"
short-title: getMetadata()
slug: Web/API/RTCEncodedAudioFrame/getMetadata
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getMetadata()`**-Methode des [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)-Interfaces gibt ein Objekt zurück, das die mit dem Frame verbundenen Metadaten enthält.

Dies umfasst Informationen über den Frame, einschließlich der verwendeten Audio-Codierung, der Synchronisationsquelle und der beitragenden Quellen sowie der Sequenznummer (bei eingehenden Frames).

## Syntax

```js-nolint
getMetadata()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `synchronizationSource`
  - : Ein positiver ganzzahliger Wert, der die Synchronisationsquelle ("ssrc") des Stroms von RTP-Paketen angibt, die durch diesen Frame beschrieben werden.
    Eine Quelle könnte beispielsweise ein Mikrofon oder eine Mixer-Anwendung sein, die mehrere Quellen kombiniert.
    Alle Pakete von derselben Quelle teilen dieselbe Zeitquelle und Sequenzraum und können daher relativ zueinander geordnet werden.
    Beachten Sie, dass zwei Frames mit demselben Wert auf dieselbe Quelle verweisen.
- `payloadType`
  - : Ein positiver ganzzahliger Wert im Bereich von 0 bis 127, der das Format der RTP-Nutzlast beschreibt.
    Die Zuordnungen von Werten zu Formaten sind in RFC3550 definiert und genauer in [Abschnitt 6: Definitionen der Nutzlasttypen](https://www.rfc-editor.org/rfc/rfc3551#section-6) von RFC3551.
- `contributingSources`
  - : Ein {{jsxref("Array")}} von Quellen (ssrc), die zum Frame beigetragen haben.
    Betrachten Sie den Fall einer Konferenzanwendung, die Audio von mehreren Benutzern kombiniert.
    Die `synchronizationSource` würde die ssrc der Anwendung enthalten, während `contributingSources` die ssrc-Werte aller einzelnen Audioquellen enthalten würde.
- `sequenceNumber`
  - : Die Sequenznummer eines eingehenden Audio-Frames (nicht für ausgehende Frames verwendet), die zum Rekonstruieren der ursprünglichen Sendereihenfolge von Frames verwendet werden kann.
    Dies ist eine Zahl zwischen 0 und 32767.
    Beachten Sie, dass, obwohl die Zahlen beim Senden sequenziell zugewiesen werden, sie bei 32767 überlaufen und wieder bei 0 beginnen.
    Daher müssen Sie zur Vergleichung zweier Frame-Sequenznummern, um zu bestimmen, ob eine als nach einer anderen angenommen wird, [Seriennummern-Arithmetik](https://en.wikipedia.org/wiki/Serial_number_arithmetic) verwenden.

## Beispiele

Diese [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)-Implementierung zeigt, wie Sie in einer `transform()`-Funktion möglicherweise die Frame-Metadaten abrufen und protokollieren können.

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

Das resultierende Objekt von einem lokalen Mikrofon könnte wie das unten gezeigte aussehen.
Beachten Sie, dass es keine beitragenden Quellen gibt, da es nur eine Quelle gibt, und keine `sequenceNumber`, da dies ein ausgehender Frame ist.

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
