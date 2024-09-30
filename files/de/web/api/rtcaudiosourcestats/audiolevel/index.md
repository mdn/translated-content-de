---
title: "RTCAudioSourceStats: audioLevel-Eigenschaft"
short-title: audioLevel
slug: Web/API/RTCAudioSourceStats/audioLevel
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`audioLevel`**-Eigenschaft des [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats)-Dictionaries repräsentiert das Audiolevel der Medienquelle.

Das Level wird über ein kleines, implementationsabhängiges Intervall gemittelt. Benutzer können alternativ das durchschnittliche Audiolevel über eine beliebige Dauer mithilfe des im [Beschreibungstext von `RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats#description) beschriebenen Algorithmus berechnen.

> [!NOTE]
> Für Audiolevel von aus der Ferne stammenden Spuren, siehe [`RTCInboundRtpStreamStats.audioLevel`](/de/docs/Web/API/RTCInboundRtpStreamStats/audioLevel).

## Wert

Eine Zahl zwischen 0 und 1 (linear), wobei 1.0 0 dBov ([Dezibel relativ zur Vollaussteuerung (DBFS)](https://en.wikipedia.org/wiki/DBFS)) repräsentiert, 0 Stille darstellt und 0.5 ungefähr eine Veränderung von 6 dB SPL im [Schalldruckpegel](https://en.wikipedia.org/wiki/Sound_pressure#Sound_pressure_level) von 0 dBov darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
