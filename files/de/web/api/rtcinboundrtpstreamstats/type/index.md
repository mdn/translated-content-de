---
title: "RTCInboundRtpStreamStats: Typ-Eigenschaft"
short-title: Typ
slug: Web/API/RTCInboundRtpStreamStats/type
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des {{domxref("RTCInboundRtpStreamStats")}} Wörterbuchs ist ein String mit dem Wert `"inbound-rtp"`.

Verschiedene Statistiken werden durch Iteration über das {{domxref("RTCStatsReport")}} Objekt erlangt, das durch einen Aufruf von {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird. Der Typ gibt an, welche Menge von Statistiken im aktuellen Iterationsschritt über das Objekt verfügbar ist. Ein Wert von `"inbound-rtp"` zeigt an, dass die im aktuellen Schritt verfügbaren Statistiken die sind, die in {{domxref("RTCInboundRtpStreamStats")}} definiert sind.

## Wert

Ein String mit dem Wert `"inbound-rtp"`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
