---
title: "RTCCodecStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCCodecStats/type
l10n:
  sourceCommit: 667d3fc3409c0524a1fb97a7f3d784606d12f48d
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des {{domxref("RTCCodecStats")}}-Wörterbuchs ist ein String mit dem Wert `"codec"`.

Verschiedene Statistiken werden durch Iteration des {{domxref("RTCStatsReport")}}-Objekts erhalten, das durch einen Aufruf von {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird. Der Typ gibt die Menge an Statistiken an, die im aktuellen Iterationsschritt durch das Objekt verfügbar sind. Ein Wert von `"codec"` zeigt an, dass die in diesem Schritt verfügbaren Statistiken die sind, die in {{domxref("RTCCodecStats")}} definiert sind.

## Wert

Ein String mit dem Wert `"codec"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
