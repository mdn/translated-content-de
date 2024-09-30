---
title: "RTCIceCandidatePairStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCIceCandidatePairStats/type
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs ist ein String mit dem Wert `"candidate-pair"`.

Verschiedene Statistiken werden durch Iteration über das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt abgerufen, das durch einen Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird.
Der Typ gibt an, welche Statistikmenge durch das Objekt in einem bestimmten Iterationsschritt verfügbar ist.
Ein Wert von `"candidate-pair"` zeigt an, dass die in diesem Schritt verfügbaren Statistiken diejenigen sind, die in [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) definiert sind.

## Wert

Ein String mit dem Wert `"candidate-pair"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
