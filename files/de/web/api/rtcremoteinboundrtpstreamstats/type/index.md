---
title: "RTCRemoteInboundRtpStreamStats: Typ-Eigenschaft"
short-title: Typ
slug: Web/API/RTCRemoteInboundRtpStreamStats/type
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des {{domxref("RTCRemoteInboundRtpStreamStats")}}-Wörterbuchs ist ein String mit dem Wert `"remote-inbound-rtp"`.

Verschiedene Statistiken werden durch Iteration über das {{domxref("RTCStatsReport")}}-Objekt gewonnen, das von einem Aufruf von {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird.
Der Typ gibt die Menge der über das Objekt in einem bestimmten Iterationsschritt verfügbaren Statistiken an.
Ein Wert von `"inbound-rtp"` zeigt an, dass die in dem aktuellen Schritt verfügbaren Statistiken diejenigen sind, die in {{domxref("RTCRemoteInboundRtpStreamStats")}} definiert sind.

## Wert

Ein String mit dem Wert `"inbound-rtp"`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
