---
title: "RTCEncodedAudioFrame: Methode getMetadata()"
short-title: getMetadata()
slug: Web/API/RTCEncodedAudioFrame/getMetadata
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getMetadata()`**-Methode der {{domxref("RTCEncodedAudioFrame")}}-Schnittstelle gibt ein Objekt zurück, das die mit dem Frame verknüpften Metadaten enthält.

Diese umfassen Informationen über den Frame, einschließlich der verwendeten Audio-Codierung, der Synchronisationsquelle und beitragenden Quellen sowie der Sequenznummer (für eingehende Frames).

## Syntax

```js-nolint
getMetadata()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `synchronizationSource`
  - : Ein positiver Ganzzahlenwert, der die Synchronisationsquelle ("ssrc") des Streams von RTP-Paketen angibt, die durch diesen Frame beschrieben werden.
    Eine Quelle könnte zum Beispiel ein Mikrofon oder eine Mixer-Anwendung sein, die mehrere Quellen kombiniert.
    Alle Pakete von derselben Quelle teilen sich dieselbe Zeitquelle und Sequenzraum, und können daher relativ zueinander geordnet werden.
    Beachten Sie, dass zwei Frames mit demselben Wert auf dieselbe Quelle verweisen.
- `payloadType`
  - : Ein positiver Ganzzahlenwert im Bereich von 0 bis 127, der das Format der RTP-Nutzdaten beschreibt.
    Die Zuordnungen von Werten zu Formaten sind in RFC3550 und genauer in [Abschnitt 6: Nutzdatentyp-Definitionen](https://www.rfc-editor.org/rfc/rfc3551#section-6) von RFC3551 definiert.
- `contributingSources`
  - : Ein {{jsxref("Array")}} von Quellen (ssrc), die zum Frame beigetragen haben.
    Betrachten Sie den Fall einer Konferenzanwendung, die Audio von mehreren Benutzern kombiniert.
    Die `synchronizationSource` würde das ssrc der Anwendung beinhalten, während `contributingSources` die ssrc-Werte aller individuellen Audioquellen beinhalten würde.
- `sequenceNumber`
  - : Die Sequenznummer eines eingehenden Audioframes (nicht verwendet für ausgehende Frames), die zur Rekonstruktion der ursprünglichen Sende-Reihenfolge von Frames verwendet werden kann.
    Dies ist eine Zahl zwischen 0 und 32767.
    Beachten Sie, dass während die Nummern bei der Übertragung sequenziell zugewiesen werden, sie bei 32767 überlaufen und wieder bei 0 starten.
    Daher müssen Sie [seriellen Nummern Arithmetik](https://en.wikipedia.org/wiki/Serial_number_arithmetic) verwenden, um zwei Frame-Sequenznummern zu vergleichen und festzustellen, ob eine nach der anderen angenommen wird. <!-- [RFC1982] -->

## Beispiele

Dieses Beispiel einer [WebRTC-encoded-transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)-Implementierung zeigt, wie Sie die Frame-Metadaten in einer `transform()`-Funktion erhalten und protokollieren können.

```js
addEventListener("rtctransform", (event) => {
  const async transform = new TransformStream({
    async transform(encodedFrame, controller) {

      // Metadaten abrufen und protokollieren
      const frameMetaData = encodedFrame.getMetadata();
      console.log(frameMetaData)

      // Frame ohne Modifikation einreihen
      controller.enqueue(encodedFrame);
    },
  });
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Das resultierende Objekt von einem lokalen Mikrofon könnte wie das unten gezeigte aussehen.
Beachten Sie, dass es keine beitragenden Quellen gibt, weil es nur eine Quelle gibt, und keine `sequenceNumber`, weil es sich um ein ausgehendes Frame handelt.

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
