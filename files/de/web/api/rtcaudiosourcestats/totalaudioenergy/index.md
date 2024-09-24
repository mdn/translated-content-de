---
title: "RTCAudioSourceStats: totalAudioEnergy-Eigenschaft"
short-title: totalAudioEnergy
slug: Web/API/RTCAudioSourceStats/totalAudioEnergy
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`totalAudioEnergy`**-Eigenschaft des {{domxref("RTCAudioSourceStats")}}-Dictionary stellt die gesamte Audioenergie der Medienquelle über die Lebensdauer dieses Statistikobjekts dar.

Die gesamte Energie über einen bestimmten Zeitraum kann ermittelt werden, indem der Wert dieser Eigenschaft, der durch zwei verschiedene `getStats()`-Aufrufe zurückgegeben wird, subtrahiert wird.

> [!NOTE]
> Für die Audioenergie von Remote-Quellen-Tracks siehe {{domxref("RTCInboundRtpStreamStats.totalAudioEnergy")}}.

## Wert

Eine Zahl, die durch die Summierung der Energie jeder Probe über die Lebensdauer dieses Statistikobjekts produziert wird.

Die Energie jeder Probe wird berechnet, indem der Wert der Probe durch den am höchsten kodierbaren Intensitätswert geteilt, das Ergebnis quadriert und dann mit der Dauer der Probe in Sekunden multipliziert wird. Dies wird unten als Gleichung dargestellt:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>Dauer</mi><mo>×</mo><msup><mrow><mo>(</mo><mfrac><mi>sample_level</mi><mi>max_level</mi></mfrac><mo>)</mo></mrow><mn>2</mn></msup></mrow><annotation encoding="TeX">Dauer \times⁢ \left(\left(\right. \frac{sample{\_}level}{max{\_}level} \left.\right)\right)^{2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Beachten Sie, dass bei Verwendung mehrerer Audiokanäle die Audioenergie einer Probe die höchste Energie eines beliebigen Kanals bezeichnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
