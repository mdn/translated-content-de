---
title: "RTCAudioSourceStats: audioLevel-Eigenschaft"
short-title: audioLevel
slug: Web/API/RTCAudioSourceStats/audioLevel
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`audioLevel`**-Eigenschaft des [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats)-Dictionaries repräsentiert das Audiovolumen der Medienquelle.

Das Niveau wird über ein kleines, implementierungsabhängiges Intervall gemittelt.
Benutzer können alternativ das durchschnittliche Audiovolumen über eine beliebige Dauer mit dem im [`RTCAudioSourceStats` Beschreibung](/de/docs/Web/API/RTCAudioSourceStats#description) beschriebenen Algorithmus berechnen.

> [!NOTE]
> Für die Audiovolumen von Tracks mit entfernten Quellen siehe [`RTCInboundRtpStreamStats.audioLevel`](/de/docs/Web/API/RTCInboundRtpStreamStats/audioLevel).

## Wert

Eine Zahl zwischen 0 und 1 (linear), wobei 1,0 0 dBov ([Dezibel relativ zum Vollmaßstab (DBFS)](https://en.wikipedia.org/wiki/DBFS)) repräsentiert, 0 Stille repräsentiert und 0,5 ungefähr 6 dB SPL Änderung im [Schalldruckpegel](https://en.wikipedia.org/wiki/Sound_pressure#Sound_pressure_level) von 0 dBov darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
