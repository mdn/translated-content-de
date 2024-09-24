---
title: "RTCRtpReceiver: Methode getSynchronizationSources()"
short-title: getSynchronizationSources()
slug: Web/API/RTCRtpReceiver/getSynchronizationSources
l10n:
  sourceCommit: 9716100b38b40f0f2ee8b3bfa2c692958868c5a6
---

{{APIRef("WebRTC API")}}

Die Methode **`getSynchronizationSources()`** des {{domxref("RTCRtpReceiver")}}-Interfaces gibt ein Array von Objekten zurück, von denen jedes einem SSRC (Synchronisationsquellen)-Bezeichner entspricht, der vom aktuellen `RTCRtpReceiver` in den letzten zehn Sekunden empfangen wurde.

## Syntax

```js-nolint
getSynchronizationSources()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Objekten, die jeweils eine der Synchronisationsquellen beschreiben, die in den vergangenen zehn Sekunden Daten zum eingehenden Stream bereitgestellt haben. Diese Objekte enthalten die folgenden Eigenschaften:

- `audioLevel`

  - : Ein Gleitkommawert zwischen 0,0 und 1,0, der den Audiopegel im letzten von der Synchronisationsquelle abgespielten RTP-Paket angibt.

    Der Wert befindet sich auf einer linearen Skala und wird in Einheiten von dBov, oder Dezibel (Übersteuerung), definiert. Dies ist die Amplitude relativ zu dem Punkt, an dem das Clipping des Audios beginnt. Ein Wert von 1,0 repräsentiert 0 dBov (maximale Lautstärke), ein Wert von 0,0 steht für Stille, und ein Wert von 0,5 entspricht etwa 6 dB SPL (Dezibel des Schalldruckpegels) Änderung des Schalldruckpegels von 0 dBov.

    Dieser Wert ist erforderlich und immer vorhanden.

- `rtpTimestamp` {{optional_inline}}

  - : Der RTP-Zeitstempel (ein Ganzzahl-{{domxref("DOMHighResTimeStamp")}}) der Medien. Dieser von der Quelle erzeugte Zeitstempel gibt an, zu welchem Zeitpunkt das Medium in diesem Paket, das zum im `timestamp` angegebenen Zeitpunkt abgespielt werden soll, ursprünglich abgetastet oder erzeugt wurde. Er kann für Sequenzierungs- und Synchronisationszwecke nützlich sein.

- `source` {{optional_inline}}

  - : Ein positiver Ganzzahlwert, der den SSRC-Bezeichner der Synchronisationsquelle angibt. Dieser identifiziert eindeutig die Quelle der spezifischen Stream-RTP-Pakete.

- `timestamp` {{optional_inline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der die aktuellste Zeit angibt, zu der ein von dieser Quelle stammendes Frame an den {{domxref("MediaStreamTrack")}} des Empfängers geliefert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
