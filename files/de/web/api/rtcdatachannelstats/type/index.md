---
title: "RTCDataChannelStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCDataChannelStats/type
l10n:
  sourceCommit: 7e6058c754c6d38bc15a16cf8e65f1e31139f05b
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des {{domxref("RTCDataChannelStats")}}-Wörterbuchs ist ein String mit dem Wert `"data-channel"`.

Verschiedene Statistiken werden durch Iteration über das {{domxref("RTCStatsReport")}}-Objekt, das durch einen Aufruf von {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird, erhalten.
Der Typ gibt den Satz an Statistiken an, die durch das Objekt in einem bestimmten Iterationsschritt verfügbar sind.
Ein Wert von `"data-channel"` zeigt an, dass die in diesem Schritt verfügbaren Statistiken diejenigen sind, die in {{domxref("RTCDataChannelStats")}} definiert sind.

## Wert

Ein String mit dem Wert `"data-channel"`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
