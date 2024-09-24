---
title: "RTCOutboundRtpStreamStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCOutboundRtpStreamStats/type
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des {{domxref("RTCOutboundRtpStreamStats")}} Wörterbuchs ist ein String mit dem Wert `"outbound-rtp"`.

Verschiedene Statistiken werden durch Iterieren über das {{domxref("RTCStatsReport")}}-Objekt erhalten, das von einem Aufruf von {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird. Der Typ gibt die Menge an Statistiken an, die über das Objekt in einem bestimmten Iterationsschritt verfügbar sind. Ein Wert von `"outbound-rtp"` zeigt an, dass die in dem aktuellen Schritt verfügbaren Statistiken diejenigen sind, die in {{domxref("RTCOutboundRtpStreamStats")}} definiert sind.

## Wert

Ein String mit dem Wert `"outbound-rtp"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
