---
title: "RTCTransportStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCTransportStats/type
l10n:
  sourceCommit: be0fee87cb391fb077053fc7ca7640b7e51d1da8
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des {{domxref("RTCTransportStats")}}-Wörterbuchs ist ein Zeichenfolgenwert mit dem Wert `"transport"`.

Verschiedene Statistiken werden durch Iteration über das {{domxref("RTCStatsReport")}}-Objekt abgerufen, das durch einen Aufruf von {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird. Der Typ gibt an, welcher Satz von Statistiken im Objekt in einem bestimmten Iterationsschritt verfügbar ist. Ein Wert von `"transport"` zeigt an, dass die Statistiken, die im aktuellen Schritt verfügbar sind, die im {{domxref("RTCTransportStats")}} definierten sind.

## Wert

Eine Zeichenfolge mit dem Wert `"transport"`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
