---
title: "RTCDataChannelStats: type Eigenschaft"
short-title: type
slug: Web/API/RTCDataChannelStats/type
l10n:
  sourceCommit: 7e6058c754c6d38bc15a16cf8e65f1e31139f05b
---

{{APIRef("WebRTC")}}

Die **`type`** Eigenschaft des [`RTCDataChannelStats`](/de/docs/Web/API/RTCDataChannelStats) Wörterbuchs ist ein String mit dem Wert `"data-channel"`.

Verschiedene Statistiken werden durch Iterieren über das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) Objekt gewonnen, das durch einen Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird. Der Typ gibt die Menge der Statistiken an, die durch das Objekt in einem bestimmten Iterationsschritt verfügbar sind. Ein Wert von `"data-channel"` zeigt an, dass die Statistiken, die im aktuellen Schritt verfügbar sind, diejenigen sind, die in [`RTCDataChannelStats`](/de/docs/Web/API/RTCDataChannelStats) definiert sind.

## Wert

Ein String mit dem Wert `"data-channel"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
