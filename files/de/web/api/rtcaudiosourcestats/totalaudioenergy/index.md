---
title: "RTCAudioSourceStats: totalAudioEnergy-Eigenschaft"
short-title: totalAudioEnergy
slug: Web/API/RTCAudioSourceStats/totalAudioEnergy
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`totalAudioEnergy`**-Eigenschaft des [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats)-Wörterbuchs stellt die gesamte Audioenergie der Medienquelle über die Lebensdauer dieses Statistikobjekts dar.

Die Gesamtenergie über einen bestimmten Zeitraum kann durch Abziehen des Wertes dieser Eigenschaft, der durch zwei verschiedene `getStats()`-Aufrufe zurückgegeben wird, bestimmt werden.

> [!NOTE]
> Für die Audioenergie von remote bezogenen Spuren siehe [`RTCInboundRtpStreamStats.totalAudioEnergy`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAudioEnergy).

## Wert

Eine Zahl, die durch Summierung der Energie aller Samples über die Lebensdauer dieses Statistikobjekts erzeugt wird.

Die Energie jedes Samples wird berechnet, indem der Wert des Samples durch den höchstintensiven kodierbaren Wert geteilt, das Ergebnis quadriert und anschließend mit der Dauer des Samples in Sekunden multipliziert wird.
Dies wird in der folgenden Gleichung gezeigt:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>duration</mi><mo>×</mo><msup><mrow><mo>(</mo><mfrac><mi>sample_level</mi><mi>max_level</mi></mfrac><mo>)</mo></mrow><mn>2</mn></msup></mrow><annotation encoding="TeX">duration \times⁢ \left(\left(\right. \frac{sample{\_}level}{max{\_}level} \left.\right)\right)^{2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Beachten Sie, dass, wenn mehrere Audio-Kanäle verwendet werden, die Audioenergie eines Samples sich auf die höchste Energie eines Kanals bezieht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
