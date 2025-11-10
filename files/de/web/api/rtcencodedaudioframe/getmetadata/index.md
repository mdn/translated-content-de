---
title: "RTCEncodedAudioFrame: getMetadata() Methode"
short-title: getMetadata()
slug: Web/API/RTCEncodedAudioFrame/getMetadata
l10n:
  sourceCommit: 23398d025295ad1eaf1663a26fbe738a8fe12883
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`getMetadata()`**-Methode des [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)-Interfaces gibt ein Objekt zurück, das die mit dem Frame verknüpften Metadaten enthält.

Dies schließt Informationen über den Frame ein, wie z.B. die verwendete Audio-Codierung, die Synchronisationsquelle und beitragende Quellen sowie die Sequenznummer (für eingehende Frames).

## Syntax

```js-nolint
getMetadata()
```

### Parameter

Keine.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `audioLevel`
  - : Eine Zahl, die den Audiopegel dieses Frames darstellt. Der Wert liegt zwischen 0 und 1 inklusive (linear), wobei 1,0 0 dBov ([Dezibel relativ zur Vollskala (DBFS)](https://en.wikipedia.org/wiki/DBFS)) darstellt, 0 Stille repräsentiert und 0,5 ungefähr eine Änderung um 6 dB SPL im [Schalldruckpegel](https://en.wikipedia.org/wiki/Sound_pressure#Sound_pressure_level) von 0 dBov darstellt. Der Wert wird von dem in [RFC6464](https://www.rfc-editor.org/rfc/rfc6464) angegebenen Bereich von -127 bis 0 durch die Gleichung `10^(-rfc_level/20)` umgerechnet. Wenn die RFC6464-Header-Erweiterung in den empfangenen Paketen des Frames nicht vorhanden ist, wird `audioLevel` `undefined` sein.
- `captureTime`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Erfassungszeit des Frames relativ zu [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) anzeigt.
- `contributingSources`
  - : Ein {{jsxref("Array")}} von Quellen (ssrc), die zum Frame beigetragen haben. Ziehen Sie den Fall einer Konferenzanwendung in Betracht, die Audio von mehreren Benutzern kombiniert. Die `synchronizationSource` würde die ssrc der Anwendung enthalten, während `contributingSources` die ssrc-Werte aller einzelnen Audioquellen enthalten würde.
- `mimeType`
  - : Ein String, der den {{Glossary("MIME_type", "MIME-Typ")}} des verwendeten Codecs wie "audio/opus" enthält.
- `payloadType`
  - : Ein positiver Ganzzahlenwert im Bereich von 0 bis 127, der das Format der RTP-Nutzlast beschreibt. Die Zuordnungen von Werten zu Formaten sind in {{rfc("3550")}} definiert, und insbesondere [Abschnitt 6: Nutzlasttyp-Definitionen](https://www.rfc-editor.org/rfc/rfc3551#section-6) von {{rfc("3551")}}.
- `receiveTime`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitstempel des zuletzt empfangenen Pakets eines eingehenden Frames (von einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)) anzeigt, das verwendet wurde, um diesen Medienframe zu erzeugen, relativ zu [`Performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin).
- `rtpTimestamp`
  - : Eine positive ganze Zahl, die den Abtastzeitpunkt des ersten Oktetts im RTP-Datenpaket widerspiegelt (siehe {{rfc("3550")}}).
- `sequenceNumber`
  - : Die Sequenznummer eines eingehenden Audio-Frames (nicht verwendet für ausgehende Frames), die zur Rekonstruktion der ursprünglichen Sende-Reihenfolge von Frames verwendet werden kann. Dies ist eine Zahl zwischen 0 und 32767. Beachten Sie, dass während Zahlen beim Senden sequentiell zugewiesen werden, sie bei 32767 überlaufen und wieder von 0 beginnen. Daher müssen Sie zur Vergleichung von zwei Frame-Sequenznummern, um zu bestimmen, ob eines nach dem anderen vermutet wird, [Seriennummer-Arithmetik](https://en.wikipedia.org/wiki/Serial_number_arithmetic) verwenden. <!-- [RFC1982] -->
- `synchronizationSource`
  - : Ein positiver Ganzzahlenwert, der die Synchronisationsquelle ("ssrc") des Stroms von RTP-Paketen angibt, die durch diesen Frame beschrieben werden. Eine Quelle könnte so etwas wie ein Mikrofon oder eine Mischanwendung sein, die mehrere Quellen kombiniert. Alle Pakete von derselben Quelle teilen dieselbe Zeitquelle und Sequenzraum und können so relativ zueinander geordnet werden. Beachten Sie, dass zwei Frames mit demselben Wert auf dieselbe Quelle verweisen.

## Beispiele

### Abrufen von Frame-Metadaten

Diese Beispiel-Implementierung eines [WebRTC-Codierungs-Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) zeigt, wie Sie die Frame-Metadaten in einer `transform()`-Funktion abrufen und protokollieren können.

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

Das resultierende Objekt von einem lokalen Mikrofon könnte wie das unten gezeigte aussehen. Beachten Sie, dass es keine beitragenden Quellen gibt, da es nur eine Quelle gibt und keine `sequenceNumber`, da dies ein ausgehender Frame ist.

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

- [Verwendung von WebRTC-Codierungs-Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
