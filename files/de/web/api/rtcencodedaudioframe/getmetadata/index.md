---
title: "RTCEncodedAudioFrame: getMetadata() Methode"
short-title: getMetadata()
slug: Web/API/RTCEncodedAudioFrame/getMetadata
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getMetadata()`** Methode des [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) Interface gibt ein Objekt zurück, das die mit dem Frame assoziierten Metadaten enthält.

Dazu gehören Informationen über den Frame, wie das verwendete Audio-Encoding, die Synchronisationsquelle und beitragende Quellen sowie die Sequenznummer (für eingehende Frames).

## Syntax

```js-nolint
getMetadata()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `audioLevel`
  - : Eine Zahl, die den Audiopegel dieses Frames darstellt. Der Wert liegt zwischen 0 und 1 inklusive (linear), wobei 1,0 0 dBov ([Dezibel relativ zur Vollskala (DBFS)](https://en.wikipedia.org/wiki/DBFS)) repräsentiert, 0 Stille und 0,5 etwa eine Änderung von 6 dB SPL im [Schalldruckpegel](https://en.wikipedia.org/wiki/Sound_pressure#Sound_pressure_level) von 0 dBov. Der Wert wird über die Gleichung `10^(-rfc_level/20)` aus dem in [RFC6464](https://www.rfc-editor.org/info/rfc6464/) spezifizierten Bereich -127 bis 0 konvertiert. Wenn die RFC6464-Header-Erweiterung in den empfangenen Paketen des Frames nicht vorhanden ist, wird `audioLevel` `undefined` sein.
- `captureTime`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Erfassungszeit des Frames relativ zur [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) angibt.
- `contributingSources`
  - : Ein {{jsxref("Array")}} von Quellen (ssrc), die zum Frame beigetragen haben. Betrachten Sie den Fall einer Konferenzanwendung, die Audio von mehreren Benutzern kombiniert. Die `synchronizationSource` würde die ssrc der Anwendung enthalten, während `contributingSources` die ssrc-Werte aller Einzelquellen enthalten würde.
- `mimeType`
  - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des verwendeten Codecs enthält, wie "audio/opus".
- `payloadType`
  - : Ein positiver Ganzzahlwert im Bereich von 0 bis 127, der das Format des RTP-Payloads beschreibt. Die Zuordnungen von Werten zu Formaten sind in {{rfc("3550")}} definiert und genauer in [Abschnitt 6: Payload-Type-Definitionen](https://www.rfc-editor.org/info/rfc3551/#section-6) von {{rfc("3551")}}.
- `receiveTime`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitstempel des letzten empfangenen Pakets eines eingehenden Frames (von einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)), der verwendet wurde, um diesen Medienframe zu produzieren, relativ zur [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) angibt.
- `rtpTimestamp`
  - : Eine positive Ganzzahl, die den Abtastzeitpunkt des ersten Oktetts im RTP-Datenpaket widerspiegelt (siehe {{rfc("3550")}}).
- `sequenceNumber`
  - : Die Sequenznummer eines eingehenden Audioframes (nicht für ausgehende Frames verwendet), die zum Rekonstruieren der ursprünglichen Sendereihenfolge von Frames verwendet werden kann. Dies ist eine Zahl zwischen 0 und 32767. Beachten Sie, dass Zahlen, während sie beim Senden nacheinander zugewiesen werden, bei 32767 überlaufen und wieder bei 0 anfangen. Daher müssen Sie zur Vergleichung zweier Frame-Sequenznummern, um festzustellen, ob eine nach einer anderen angenommen wird, [Seriennummernarithmetik](https://en.wikipedia.org/wiki/Serial_number_arithmetic) verwenden.
- `synchronizationSource`
  - : Ein positiver Ganzzahlwert, der die Synchronisationsquelle ("ssrc") des Stroms von RTP-Paketen angibt, die von diesem Frame beschrieben werden. Eine Quelle könnte etwas wie ein Mikrofon oder eine Mixeranwendung sein, die mehrere Quellen kombiniert. Alle Pakete derselben Quelle teilen dieselbe Zeitquelle und Sequenzraum und können somit relativ zueinander geordnet werden. Beachten Sie, dass zwei Frames mit demselben Wert sich auf dieselbe Quelle beziehen.

## Beispiele

### Metadaten eines Frames abrufen

Dieses Beispiel einer [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)-Implementierung zeigt, wie Sie die Metadaten eines Frames in einer `transform()` Funktion abrufen und protokollieren könnten.

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

Das resultierende Objekt von einem lokalen Mikrofon könnte wie das unten gezeigte aussehen. Beachten Sie, dass es keine beitragenden Quellen gibt, weil es nur eine Quelle gibt, und keine `sequenceNumber`, weil dies ein ausgehender Frame ist.

```json
{
  "captureTime": 19745.400000000373,
  "contributingSources": [],
  "mimeType": "audio/opus",
  "payloadType": 111,
  "rtpTimestamp": 1786045165,
  "synchronizationSource": 3365032712,
  "audioLevel": 0.001584893192461114
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
