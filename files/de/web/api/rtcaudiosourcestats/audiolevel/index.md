---
title: "RTCAudioSourceStats: audioLevel-Eigenschaft"
short-title: audioLevel
slug: Web/API/RTCAudioSourceStats/audioLevel
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`audioLevel`**-Eigenschaft des {{domxref("RTCAudioSourceStats")}}-Wörterbuchs stellt das Audiopegel des Medienquellenelements dar.

Das Pegel wird über ein kleines, implementationsabhängiges Intervall gemittelt. Benutzer können alternativ den durchschnittlichen Audiopegel über eine beliebige Dauer mit dem Algorithmus berechnen, der in der [Beschreibung von `RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats#description) beschrieben ist.

> [!NOTE]
> Für Audiostufen von Remote-Quellenspuren siehe {{domxref("RTCInboundRtpStreamStats.audioLevel")}}.

## Wert

Eine Zahl zwischen 0 und 1 (linear), wobei 1,0 0 dBov ([Dezibel relativ zur Vollaussteuerung (DBFS)](https://en.wikipedia.org/wiki/DBFS)) darstellt, 0 Stille repräsentiert und 0,5 eine ungefähr 6 dB SPL-Änderung im [Schalldruckpegel](https://en.wikipedia.org/wiki/Sound_pressure#Sound_pressure_level) von 0 dBov darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
