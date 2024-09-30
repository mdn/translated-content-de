---
title: "RTCIceCandidateStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCIceCandidateStats/type
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs ist ein String mit dem Wert `"local-candidate"`.

Unterschiedliche Statistiken werden durch das Iterieren des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekts erhalten, das von einem Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird. Der `type` zeigt den Satz von Statistiken an, die durch das Objekt in einem bestimmten Iterationsschritt verfügbar sind. Ein Wert von `"local-candidate"` zeigt an, dass die im aktuellen Schritt verfügbaren Statistiken diejenigen sind, die in [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats) definiert sind.

## Wert

Ein String mit dem Wert `"local-candidate"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
