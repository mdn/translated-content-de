---
title: "RTCEncodedAudioFrame: getMetadata()-Methode"
short-title: getMetadata()
slug: Web/API/RTCEncodedAudioFrame/getMetadata
l10n:
  sourceCommit: 28480730932143e1861017f01db165ce28f67803
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getMetadata()`**-Methode des [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)-Interfaces gibt ein Objekt zurück, das die mit dem Frame verknüpften Metadaten enthält.

Dies umfasst Informationen über den Frame, einschließlich der verwendeten Audio-Codierung, der Synchronisationsquelle und der beitragenden Quellen sowie der Sequenznummer (für eingehende Frames).

## Syntax

```js-nolint
getMetadata()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `audioLevel`
  - : Eine Zahl, die den Audiopegel dieses Frames darstellt. Der Wert liegt zwischen 0 und 1 inklusive (linear), wobei 1,0 0 dBov ([Dezibel relativ zur Vollaussteuerung](https://en.wikipedia.org/wiki/DBFS)) darstellt, 0 Stille und 0,5 eine Änderung des [Schalldruckpegels](https://en.wikipedia.org/wiki/Sound_pressure#Sound_pressure_level) um ca. 6 dB SPL von 0 dBov. Der Wert wird aus dem in [RFC6464](https://www.rfc-editor.org/rfc/rfc6464) spezifizierten Bereich von -127 bis 0 über die Gleichung `10^(-rfc_level/20)` umgerechnet. Wenn die RFC6464-Header-Erweiterung in den empfangenen Paketen des Frames nicht vorhanden ist, wird `audioLevel` `undefined` sein.
- `synchronizationSource`
  - : Ein positiver ganzzahliger Wert, der die Synchronisationsquelle ("ssrc") des RTP-Paketstroms angibt, der von diesem Frame beschrieben wird.
    Eine Quelle könnte so etwas wie ein Mikrofon sein oder eine Mix-Anwendung, die mehrere Quellen kombiniert.
    Alle Pakete von derselben Quelle teilen dieselbe Zeitquelle und Sequenzraum und können daher relativ zueinander geordnet werden.
    Beachten Sie, dass zwei Frames mit demselben Wert dieselbe Quelle referenzieren.
- `payloadType`
  - : Ein positiver ganzzahliger Wert im Bereich von 0 bis 127, der das Format der RTP-Nutzlast beschreibt.
    Die Zuordnungen der Werte zu Formaten sind in RFC3550 und genauer in [Abschnitt 6: Definitionen des Nutzlasttyps](https://www.rfc-editor.org/rfc/rfc3551#section-6) von RFC3551 definiert.
- `contributingSources`
  - : Ein {{jsxref("Array")}} von Quellen (ssrc), die zum Frame beigetragen haben.
    Betrachten Sie den Fall einer Konferenzanwendung, die Audio von mehreren Benutzern kombiniert.
    Die `synchronizationSource` würde die ssrc der Anwendung enthalten, während `contributingSources` die ssrc-Werte aller einzelnen Audioquellen enthalten würde.
- `sequenceNumber`
  - : Die Sequenznummer eines eingehenden Audio-Frames (nicht für ausgehende Frames verwendet), die zum Wiederherstellen der ursprünglichen Sende-Reihenfolge von Frames verwendet werden kann.
    Dies ist eine Zahl zwischen 0 und 32767.
    Beachten Sie, dass während die Zahlen bei der Sendung sequentiell zugewiesen werden, sie bei 32767 überlaufen und wieder bei 0 beginnen.
    Daher müssen Sie [serielle Nummernarithmetik](https://en.wikipedia.org/wiki/Serial_number_arithmetic) verwenden, um zwei Frame-Sequenznummern zu vergleichen, um festzustellen, ob eine als nach der anderen angenommen wird. <!-- [RFC1982] -->

## Beispiele

Dieses Beispiel einer [WebRTC-codierten Transformation](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) Implementierung zeigt, wie Sie die Frame-Metadaten in einer `transform()`-Funktion erhalten und protokollieren können.

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

- [Verwendung von WebRTC-codierten Transformationen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
