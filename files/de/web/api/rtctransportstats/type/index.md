---
title: "RTCTransportStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCTransportStats/type
l10n:
  sourceCommit: be0fee87cb391fb077053fc7ca7640b7e51d1da8
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs ist ein String mit dem Wert `"transport"`.

Verschiedene Statistiken werden durch das Iterieren des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekts erhalten, das von einem Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird. Der Typ gibt die Menge der Statistik an, die durch das Objekt in einem bestimmten Iterationsschritt verfügbar ist. Ein Wert von `"transport"` zeigt an, dass die in diesem Iterationsschritt verfügbaren Statistiken die im [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) definierten sind.

## Wert

Ein String mit dem Wert `"transport"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
