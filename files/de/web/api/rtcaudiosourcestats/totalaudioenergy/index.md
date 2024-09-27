---
title: "RTCAudioSourceStats: totalAudioEnergy-Eigenschaft"
short-title: totalAudioEnergy
slug: Web/API/RTCAudioSourceStats/totalAudioEnergy
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`totalAudioEnergy`**-Eigenschaft des [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) Dictionary repräsentiert die gesamte Audioenergie der Medienquelle über die Lebensdauer dieses Statistik-Objekts.

Die Gesamtenergie über eine bestimmte Dauer kann bestimmt werden, indem der Wert dieser Eigenschaft, der durch zwei verschiedene `getStats()`-Aufrufe zurückgegeben wird, subtrahiert wird.

> [!NOTE]
> Für Audioenergie von extern bezogenen Tracks siehe [`RTCInboundRtpStreamStats.totalAudioEnergy`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAudioEnergy).

## Wert

Eine Zahl, die durch Summieren der Energie jeder Probe über die Lebensdauer dieses Statistik-Objekts erzeugt wird.

Die Energie jeder Probe wird berechnet, indem der Wert der Probe durch den höchstmöglichen, codierbaren Wert geteilt, das Ergebnis quadriert und dann mit der Dauer der Probe in Sekunden multipliziert wird.
Dies wird als Gleichung unten dargestellt:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>duration</mi><mo>×</mo><msup><mrow><mo>(</mo><mfrac><mi>sample_level</mi><mi>max_level</mi></mfrac><mo>)</mo></mrow><mn>2</mn></msup></mrow><annotation encoding="TeX">duration \times⁢ \left(\left(\right. \frac{sample{\_}level}{max{\_}level} \left.\right)\right)^{2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Beachten Sie, dass bei Verwendung mehrerer Audiokanäle die Audioenergie einer Probe sich auf die höchste Energie eines Kanals bezieht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
