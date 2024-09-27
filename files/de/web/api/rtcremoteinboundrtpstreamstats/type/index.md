---
title: "RTCRemoteInboundRtpStreamStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCRemoteInboundRtpStreamStats/type
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Dictionaries ist ein String mit dem Wert `"remote-inbound-rtp"`.

Verschiedene Statistiken werden durch Iteration über das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt gewonnen, das durch einen Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird.
Der Typ gibt die Menge der Statistiken an, die über das Objekt in einem bestimmten Iterationsschritt verfügbar sind.
Ein Wert von `"inbound-rtp"` zeigt an, dass die in diesem Schritt verfügbaren Statistiken diejenigen sind, die in [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats) definiert sind.

## Wert

Ein String mit dem Wert `"inbound-rtp"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
