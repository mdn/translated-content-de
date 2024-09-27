---
title: "RTCCodecStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCCodecStats/type
l10n:
  sourceCommit: 667d3fc3409c0524a1fb97a7f3d784606d12f48d
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats) Wörterbuchs ist ein String mit dem Wert `"codec"`.

Verschiedene Statistiken werden erhalten, indem das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt iteriert wird, das durch einen Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird. Der Typ gibt die Menge von Statistiken an, die durch das Objekt in einem bestimmten Iterationsschritt verfügbar sind. Ein Wert von `"codec"` zeigt an, dass die in diesem Schritt verfügbaren Statistiken diejenigen sind, die in [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats) definiert sind.

## Wert

Ein String mit dem Wert `"codec"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
