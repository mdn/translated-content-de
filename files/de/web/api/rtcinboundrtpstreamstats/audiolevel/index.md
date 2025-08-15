---
title: "RTCInboundRtpStreamStats: audioLevel-Eigenschaft"
short-title: audioLevel
slug: Web/API/RTCInboundRtpStreamStats/audioLevel
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`audioLevel`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt das Audio-Niveau des empfangenen (entfernteren) Tracks an.

Der `audioLevel` wird über einen kleinen Zeitraum gemittelt, wobei der Algorithmus verwendet wird, der unter [`totalAudioEnergy`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAudioEnergy) beschrieben ist. Der verwendete Zeitraum ist implementierungsabhängig.

> [!NOTE]
> Der Wert ist für Videostreams nicht definiert.

## Wert

Eine reelle Zahl.

Der Wert liegt zwischen 0 und 1 (linear), wobei 1.0 0 dBov ([Dezibel im Verhältnis zum Vollausgang (DBFS)](https://en.wikipedia.org/wiki/DBFS)) darstellt, 0 Stille darstellt, und 0.5 ungefähr eine Änderung von 6 dB SPL im [Schalldruckpegel](https://en.wikipedia.org/wiki/Sound_pressure#Sound_pressure_level) bei 0 dBov repräsentiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCAudioSourceStats.audioLevel`](/de/docs/Web/API/RTCAudioSourceStats/audioLevel) für Audio-Niveaus von lokalen Tracks (die gesendet werden).
