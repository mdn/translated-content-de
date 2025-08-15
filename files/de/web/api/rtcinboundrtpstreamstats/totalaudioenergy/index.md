---
title: "RTCInboundRtpStreamStats: totalAudioEnergy-Eigenschaft"
short-title: totalAudioEnergy
slug: Web/API/RTCInboundRtpStreamStats/totalAudioEnergy
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`totalAudioEnergy`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs repräsentiert die gesamte Audioenergie eines empfangenen Audiotracks über die Lebensdauer dieses Statistik-Objekts.

Die gesamte Energie über eine bestimmte Dauer kann ermittelt werden, indem der Wert dieser Eigenschaft, der durch zwei unterschiedliche `getStats()`-Aufrufe zurückgegeben wird, subtrahiert wird.

> [!NOTE]
> Der Wert ist für Videostreams nicht definiert.

## Wert

Eine Zahl, die durch Summieren der Energie jedes Samples über die Lebensdauer dieses Statistik-Objekts erzeugt wird.

Die Energie jedes Samples wird berechnet, indem der Wert des Samples durch den höchstkodierbaren Intensitätswert geteilt, das Ergebnis quadriert und dann mit der Dauer des Samples in Sekunden multipliziert wird.
Dies wird in der folgenden Gleichung gezeigt:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>duration</mi><mo>×</mo><msup><mrow><mo>(</mo><mfrac><mi>sample_level</mi><mi>max_level</mi></mfrac><mo>)</mo></mrow><mn>2</mn></msup></mrow><annotation encoding="TeX">duration \times⁢ \left(\left(\right. \frac{sample{\_}level}{max{\_}level} \left.\right)\right)^{2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Beachten Sie, dass, wenn mehrere Audiokanäle verwendet werden, die Audioenergie eines Samples sich auf die höchste Energie eines beliebigen Kanals bezieht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCAudioSourceStats.totalAudioEnergy`](/de/docs/Web/API/RTCAudioSourceStats/totalAudioEnergy) für die Audioenergie von lokal gesendeten Tracks.
