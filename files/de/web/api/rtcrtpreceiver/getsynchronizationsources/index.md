---
title: "RTCRtpReceiver: Methode getSynchronizationSources()"
short-title: getSynchronizationSources()
slug: Web/API/RTCRtpReceiver/getSynchronizationSources
l10n:
  sourceCommit: 9716100b38b40f0f2ee8b3bfa2c692958868c5a6
---

{{APIRef("WebRTC API")}}

Die **`getSynchronizationSources()`** Methode des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Interfaces gibt ein Array von Objekten zurück, die jeweils einer SSRC (Synchronisationsquelle) entsprechen, die vom aktuellen `RTCRtpReceiver` in den letzten zehn Sekunden empfangen wurde.

## Syntax

```js-nolint
getSynchronizationSources()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Objekten, die jeweils eine der Synchronisationsquellen beschreiben, die in den letzten zehn Sekunden Daten an den eingehenden Stream geliefert haben.
Diese Objekte enthalten die folgenden Eigenschaften:

- `audioLevel`

  - : Ein Gleitkommawert zwischen 0,0 und 1,0, der den Audiopegel angibt, der im letzten von der Synchronisationsquelle gespielten RTP-Paket enthalten ist.

    Der Wert ist linear skaliert und wird in Einheiten von dBov oder Dezibel (Übersteuerung) definiert.
    Dies ist die Amplitude relativ zu dem Punkt, an dem die Übersteuerung des Audios aufzutreten beginnt.
    Ein Wert von 1,0 repräsentiert 0 dBov (maximale Lautstärke), ein Wert von 0,0 repräsentiert Stille, und ein Wert von 0,5 repräsentiert eine Änderung des Schalldruckpegels um etwa 6 dB SPL (Dezibel des Schalldruckpegels) von 0 dBov.

    Dieser Wert ist erforderlich und immer vorhanden.

- `rtpTimestamp` {{optional_inline}}

  - : Der RTP-Zeitstempel (ein Ganzzahlenwert [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) des Mediums.
    Dieser von der Quelle generierte Zeitstempel gibt die Zeit an, zu der das Medium in diesem Paket, das zur Wiedergabe zu der von `timestamp` angegebenen Zeit geplant ist, ursprünglich abgetastet oder erzeugt wurde.
    Dies kann für Sequenzierungs- und Synchronisationszwecke nützlich sein.

- `source` {{optional_inline}}

  - : Ein positiver Ganzzahlenwert, der die SSRC-Kennung der Synchronisationsquelle angibt.
    Dies identifiziert eindeutig die Quelle der spezifischen RTP-Paketströme.

- `timestamp` {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die letzte Zeit angibt, zu der ein von dieser Quelle stammendes Frame an den [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) des Empfängers geliefert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
