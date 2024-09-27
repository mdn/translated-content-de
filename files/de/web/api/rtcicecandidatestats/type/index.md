---
title: "RTCIceCandidateStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCIceCandidateStats/type
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs ist ein String mit dem Wert `"local-candidate"`.

Unterschiedliche Statistiken werden durch das Iterieren des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekts erhalten, das durch einen Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird.
Der Typ gibt die Menge von Statistiken an, die in einem bestimmten Iterationsschritt durch das Objekt verfügbar sind.
Ein Wert von `"local-candidate"` zeigt an, dass die in diesem Schritt verfügbaren Statistiken diejenigen sind, die in [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats) definiert sind.

## Wert

Ein String mit dem Wert `"local-candidate"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
