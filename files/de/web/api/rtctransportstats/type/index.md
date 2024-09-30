---
title: "RTCTransportStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCTransportStats/type
l10n:
  sourceCommit: be0fee87cb391fb077053fc7ca7640b7e51d1da8
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs ist ein String mit dem Wert `"transport"`.

Verschiedene Statistiken werden durch Iteration über das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt, das durch einen Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, gewonnen.
Der Typ gibt die Menge der Statistiken an, die über das Objekt in einem bestimmten Iterationsschritt verfügbar sind.
Ein Wert von `"transport"` zeigt an, dass die in dem aktuellen Schritt verfügbaren Statistiken diejenigen sind, die in [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) definiert sind.

## Wert

Ein String mit dem Wert `"transport"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
