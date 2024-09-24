---
title: "RTCRemoteOutboundRtpStreamStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCRemoteOutboundRtpStreamStats/type
l10n:
  sourceCommit: ffe914fa3268cbc0d84648d156d19c7df3a587b9
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des {{domxref("RTCRemoteOutboundRtpStreamStats")}}-Wörterbuchs ist ein String mit dem Wert `"remote-outbound-rtp"`.

Verschiedene Statistiken werden durch Iteration über das {{domxref("RTCStatsReport")}}-Objekt gewonnen, das durch einen Aufruf von {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird. Der Typ gibt die Menge an Statistiken an, die durch das Objekt in einem bestimmten Iterationsschritt verfügbar sind. Ein Wert von `"remote-outbound-rtp"` gibt an, dass die in diesem Schritt verfügbaren Statistiken diejenigen sind, die in {{domxref("RTCRemoteOutboundRtpStreamStats")}} definiert sind.

## Wert

Ein String mit dem Wert `"remote-outbound-rtp"`.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
