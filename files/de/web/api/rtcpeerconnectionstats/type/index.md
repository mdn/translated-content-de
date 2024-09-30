---
title: "RTCPeerConnectionStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCPeerConnectionStats/type
l10n:
  sourceCommit: f11f0a8b40d9c41eeff21a88d6af00420808cbe6
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCPeerConnectionStats`](/de/docs/Web/API/RTCPeerConnectionStats)-Wörterbuchs ist ein String mit dem Wert `"peer-connection"`.

Verschiedene Statistiken werden durch Iteration über das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt abgerufen, das durch einen Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird.
Der Typ gibt die Menge an Statistiken an, die in einem bestimmten Iterationsschritt durch das Objekt verfügbar sind.
Ein Wert von `"peer-connection"` zeigt an, dass die in dem aktuellen Schritt verfügbaren Statistiken diejenigen sind, die in [`RTCPeerConnectionStats`](/de/docs/Web/API/RTCPeerConnectionStats) definiert sind.

## Wert

Ein String mit dem Wert `"peer-connection"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
