---
title: "RTCOutboundRtpStreamStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCOutboundRtpStreamStats/type
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein String mit dem Wert `"outbound-rtp"`.

Verschiedene Statistiken werden durch das Iterieren über das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt erhalten, das von einem Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird.
Der Typ gibt die Menge der Statistiken an, die durch das Objekt in einem bestimmten Iterationsschritt verfügbar sind.
Ein Wert von `"outbound-rtp"` zeigt an, dass die im aktuellen Schritt verfügbaren Statistiken jene sind, die in [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats) definiert sind.

## Wert

Ein String mit dem Wert `"outbound-rtpp"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
