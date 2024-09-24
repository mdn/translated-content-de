---
title: "RTCIceCandidateStats: Eigenschaft type"
short-title: type
slug: Web/API/RTCIceCandidateStats/type
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des {{domxref("RTCIceCandidateStats")}}-Wörterbuchs ist ein Zeichenkette mit dem Wert `"local-candidate"`.

Unterschiedliche Statistiken werden durch Iterieren über das {{domxref("RTCStatsReport")}}-Objekt gewonnen, das durch einen Aufruf von {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird. Der Typ gibt das Set von Statistiken an, das im aktuellen Iterationsschritt über das Objekt verfügbar ist. Ein Wert von `"local-candidate"` bedeutet, dass die im aktuellen Schritt verfügbaren Statistiken diejenigen sind, die in {{domxref("RTCIceCandidateStats")}} definiert sind.

## Wert

Ein Zeichenkette mit dem Wert `"local-candidate"`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
