---
title: "RTCInboundRtpStreamStats: concealmentEvents-Eigenschaft"
short-title: concealmentEvents
slug: Web/API/RTCInboundRtpStreamStats/concealmentEvents
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`concealmentEvents`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Gesamtzahl der Concealment-Ereignisse für den empfangenen Audiotrack über die Lebensdauer dieses Statistikobjekts an.

Ein verdecktes Sample ist ein Sample, das verloren gegangen ist oder zu spät ankam, um abgespielt zu werden, und daher durch ein lokal erzeugtes synthetisiertes Sample ersetzt werden musste. Eine beliebige Anzahl aufeinanderfolgender verdeckter Samples nach einem nicht verdeckten Sample bildet ein einziges Concealment-Ereignis. Der Wert in dieser Eigenschaft wird daher kleiner oder gleich [`concealedSamples`](/de/docs/Web/API/RTCInboundRtpStreamStats/concealedSamples) sein, welches jedes Sample zählt.

> [!NOTE]
> Der Wert ist für Videostreams nicht definiert.

## Wert

Eine positive ganze Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCInboundRtpStreamStats.concealedSamples`](/de/docs/Web/API/RTCInboundRtpStreamStats/concealedSamples)
- [`RTCInboundRtpStreamStats.silentConcealedSamples`](/de/docs/Web/API/RTCInboundRtpStreamStats/silentConcealedSamples)
- [Paketverlust-Kompensation](https://en.wikipedia.org/wiki/Packet_loss_concealment) auf Wikipedia
