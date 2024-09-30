---
title: "RTCInboundRtpStreamStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCInboundRtpStreamStats/type
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs ist ein String mit dem Wert `"inbound-rtp"`.

Unterschiedliche Statistiken werden durch Iteration über das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt gewonnen, das durch einen Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird. Der `type` gibt die Menge an Statistiken an, die durch das Objekt in einem bestimmten Iterationsschritt verfügbar sind. Ein Wert von `"inbound-rtp"` zeigt an, dass die Statistiken, die im aktuellen Schritt verfügbar sind, diejenigen sind, die in [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) definiert sind.

## Wert

Ein String mit dem Wert `"inbound-rtp"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
