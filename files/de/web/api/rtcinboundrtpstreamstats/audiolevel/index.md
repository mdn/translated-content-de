---
title: "RTCInboundRtpStreamStats: audioLevel-Eigenschaft"
short-title: audioLevel
slug: Web/API/RTCInboundRtpStreamStats/audioLevel
l10n:
  sourceCommit: 4c2c5febdf57cb0b5bdd5d55fc44b965ff41b10f
---

{{APIRef("WebRTC")}}

Die **`audioLevel`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt das Audiolevel des empfangenen (remote) Tracks an.

Das `audioLevel` wird über ein kleines Intervall gemittelt, basierend auf dem Algorithmus, der unter [`totalAudioEnergy`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAudioEnergy) beschrieben ist. Das verwendete Intervall hängt von der Implementierung ab.

> [!NOTE]
> Der Wert ist für Videostreams nicht definiert.

## Wert

Eine reelle Zahl.

Der Wert liegt zwischen 0..1 (linear), wobei 1,0 0 dBov ([Dezibel relativ zur Vollskala (DBFS)](https://en.wikipedia.org/wiki/DBFS)) repräsentiert, 0 Stille darstellt und 0,5 ungefähr eine Änderung von 6 dB SPL im [Schalldruckpegel](https://en.wikipedia.org/wiki/Sound_pressure#Sound_pressure_level) von 0 dBov repräsentiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCAudioSourceStats.audioLevel`](/de/docs/Web/API/RTCAudioSourceStats/audioLevel) für Audiolevel von lokalen Tracks (die gesendet werden)
