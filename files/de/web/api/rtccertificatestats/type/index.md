---
title: "RTCCertificateStats: type-Eigenschaft"
short-title: Typ
slug: Web/API/RTCCertificateStats/type
l10n:
  sourceCommit: cc247a1dfe34f8c8a04071e9652c9c6a413870c8
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des {{domxref("RTCCertificateStats")}}-Wörterbuchs ist ein String mit dem Wert `"certificate"`.

Verschiedene Statistiken werden durch Iteration über das von einem Aufruf von {{domxref("RTCPeerConnection.getStats()")}} zurückgegebene {{domxref("RTCStatsReport")}}-Objekt abgerufen. Der Typ gibt die Menge der durch das Objekt in einem bestimmten Iterationsschritt verfügbaren Statistiken an. Ein Wert von `"certificate"` weist darauf hin, dass die in dem aktuellen Schritt verfügbaren Statistiken diejenigen sind, die in {{domxref("RTCCertificateStats")}} definiert sind.

## Wert

Ein String mit dem Wert `"certificate"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
