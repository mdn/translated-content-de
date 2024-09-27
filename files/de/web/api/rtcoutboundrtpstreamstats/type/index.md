---
title: "RTCOutboundRtpStreamStats: type Eigenschaft"
short-title: type
slug: Web/API/RTCOutboundRtpStreamStats/type
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist eine Zeichenkette mit dem Wert `"outbound-rtp"`.

Verschiedene Statistiken werden durch Iteration über das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt erhalten, das durch einen Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird.
Der Typ gibt die Menge der Statistiken an, die durch das Objekt in einem bestimmten Iterationsschritt verfügbar sind.
Ein Wert von `"outbound-rtp"` zeigt an, dass die in diesem Schritt verfügbaren Statistiken die in [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats) definierten sind.

## Wert

Eine Zeichenkette mit dem Wert `"outbound-rtp"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
