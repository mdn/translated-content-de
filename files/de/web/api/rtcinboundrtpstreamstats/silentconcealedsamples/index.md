---
title: "RTCInboundRtpStreamStats: Eigenschaft silentConcealedSamples"
short-title: silentConcealedSamples
slug: Web/API/RTCInboundRtpStreamStats/silentConcealedSamples
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`silentConcealedSamples`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Gesamtanzahl der stummen verdeckten Samples für die empfangene Audiospur über die Lebensdauer dieses Statistik-Objekts an.

Ein verdecktes Sample ist ein Sample, das verloren gegangen ist oder zu spät ankam, um abgespielt zu werden, und deshalb durch ein lokal generiertes synthetisiertes Sample ersetzt werden musste. Ein stummes verdecktes Sample ist eines, bei dem das eingefügte Sample entweder stumm oder [Komfortgeräusch](https://en.wikipedia.org/wiki/Comfort_noise) ist.

> [!NOTE]
> Der Wert ist für Videostreams undefiniert.

## Wert

Eine positive ganze Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCInboundRtpStreamStats.concealedSamples`](/de/docs/Web/API/RTCInboundRtpStreamStats/concealedSamples)
- [`RTCInboundRtpStreamStats.concealmentEvents`](/de/docs/Web/API/RTCInboundRtpStreamStats/concealmentEvents)
- [Paketverlust-Verdeckung](https://en.wikipedia.org/wiki/Packet_loss_concealment) auf Wikipedia
