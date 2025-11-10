---
title: "RTCInboundRtpStreamStats: concealedSamples-Eigenschaft"
short-title: concealedSamples
slug: Web/API/RTCInboundRtpStreamStats/concealedSamples
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`concealedSamples`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Dictionaries gibt die Gesamtanzahl verdeckter Samples für den empfangenen Audiotrack über die Lebensdauer dieses Statistikobjekts an.

Ein verdecktes Sample ist ein Sample, das verloren ging oder zu spät ankam, um abgespielt zu werden, und daher durch ein lokal erzeugtes synthetisiertes Sample ersetzt werden musste. Beachten Sie, dass verlorene Samples in [`packetsLost`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsLost) und verspätete Pakete in [`fecPacketsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded) gemeldet werden.

> [!NOTE]
> Der Wert ist für Videostreams undefiniert.

## Wert

Eine positive Ganzzahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCInboundRtpStreamStats.silentConcealedSamples`](/de/docs/Web/API/RTCInboundRtpStreamStats/silentConcealedSamples)
- [`RTCInboundRtpStreamStats.concealmentEvents`](/de/docs/Web/API/RTCInboundRtpStreamStats/concealmentEvents)
- [Packet loss concealment](https://en.wikipedia.org/wiki/Packet_loss_concealment) auf Wikipedia
