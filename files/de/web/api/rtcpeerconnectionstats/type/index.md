---
title: "RTCPeerConnectionStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCPeerConnectionStats/type
l10n:
  sourceCommit: f11f0a8b40d9c41eeff21a88d6af00420808cbe6
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCPeerConnectionStats`](/de/docs/Web/API/RTCPeerConnectionStats)-Wörterbuchs ist ein String mit dem Wert `"peer-connection"`.

Unterschiedliche Statistiken werden durch das Iterieren des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekts erhalten, das von einem Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird.
Der Typ gibt die Menge der verfügbaren Statistiken durch das Objekt in einem bestimmten Iterationsschritt an.
Ein Wert von `"peer-connection"` zeigt an, dass die in diesem Schritt verfügbaren Statistiken diejenigen sind, die in [`RTCPeerConnectionStats`](/de/docs/Web/API/RTCPeerConnectionStats) definiert sind.

## Wert

Ein String mit dem Wert `"peer-connection"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
