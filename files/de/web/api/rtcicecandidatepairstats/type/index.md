---
title: "RTCIceCandidatePairStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCIceCandidatePairStats/type
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs ist ein String mit dem Wert `"candidate-pair"`.

Verschiedene Statistiken werden durch das Durchlaufen des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekts, welches durch einen Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, erhalten.
Der Typ gibt die Menge der durch das Objekt in einem bestimmten Iterationsschritt verfügbaren Statistiken an.
Ein Wert von `"candidate-pair"` zeigt an, dass die in dem aktuellen Schritt verfügbaren Statistiken die im [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) definierten sind.

## Wert

Ein String mit dem Wert `"candidate-pair"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
