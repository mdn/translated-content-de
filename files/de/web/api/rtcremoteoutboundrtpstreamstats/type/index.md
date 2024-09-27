---
title: "RTCRemoteOutboundRtpStreamStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCRemoteOutboundRtpStreamStats/type
l10n:
  sourceCommit: ffe914fa3268cbc0d84648d156d19c7df3a587b9
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)-Wörterbuchs ist ein String mit dem Wert `"remote-outbound-rtp"`.

Verschiedene Statistiken werden durch Iterieren über das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt, das von einem Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, gewonnen.
Der Typ gibt die Menge der Statistiken an, die durch das Objekt in einem bestimmten Iterationsschritt verfügbar sind.
Ein Wert von `"remote-outbound-rtp"` zeigt an, dass die im aktuellen Schritt verfügbaren Statistiken diejenigen sind, die in [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats) definiert sind.

## Wert

Ein String mit dem Wert `"remote-outbound-rtp"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
