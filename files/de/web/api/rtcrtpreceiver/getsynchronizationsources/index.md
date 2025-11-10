---
title: "RTCRtpReceiver: getSynchronizationSources() Methode"
short-title: getSynchronizationSources()
slug: Web/API/RTCRtpReceiver/getSynchronizationSources
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC API")}}

Die **`getSynchronizationSources()`** Methode des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) Interface gibt ein Array von Objekten zurück, die jeweils einem SSRC (Synchronisationsquellen)-Identifier entsprechen, der in den letzten zehn Sekunden von dem aktuellen `RTCRtpReceiver` empfangen wurde.

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

  - : Ein Gleitkommawert zwischen 0,0 und 1,0, der den Audiopegel des letzten RTP-Pakets angibt, das von der Synchronisationsquelle abgespielt wurde.

    Der Wert ist auf einer linearen Skala definiert und in Einheiten von dBov, oder Dezibel (Übersteuerung), angegeben.
    Dies ist die Amplitude relativ zu dem Punkt, an dem das Clipping des Audios beginnt zu erfolgen.
    Ein Wert von 1,0 entspricht 0 dBov (maximale Lautstärke), ein Wert von 0,0 entspricht Stille, und ein Wert von 0,5 entspricht ungefähr einer Änderung des Schalldruckpegels um 6 dB SPL (Dezibel des Schalldruckpegels) vom 0 dBov aus.

    Dieser Wert ist erforderlich und immer vorhanden.

- `rtpTimestamp` {{optional_inline}}

  - : Der RTP-Zeitstempel (ein ganzzahliger [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)) der Medien.
    Dieser durch die Quelle erzeugte Zeitstempel gibt die Zeit an, zu der die Medien in diesem Paket, die zum Zeitpunkt, der durch `timestamp` angezeigt wird, ausgespielt werden sollen, ursprünglich abgetastet oder erzeugt wurden.
    Er kann für Sequenzierungs- und Synchronisationszwecke nützlich sein.

- `source` {{optional_inline}}

  - : Ein positiver Ganzzahlwert, der den SSRC-Identifier der Synchronisationsquelle angibt.
    Dieser identifiziert eindeutig die Quelle der bestimmten Stream-RTP-Pakete.

- `timestamp` {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die zuletzt erfolgte Zeit angibt, zu der ein von dieser Quelle stammender Frame an den [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) des Empfängers geliefert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
