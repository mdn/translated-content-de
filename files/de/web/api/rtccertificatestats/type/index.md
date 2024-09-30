---
title: "RTCCertificateStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCCertificateStats/type
l10n:
  sourceCommit: cc247a1dfe34f8c8a04071e9652c9c6a413870c8
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)-Wörterbuchs ist ein String mit dem Wert `"certificate"`.

Verschiedene Statistiken werden durch das Iterieren des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekts erhalten, das durch einen Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird. Der `type` gibt an, welche Statistikdatensätze im Objekt während eines bestimmten Iterationsschritts verfügbar sind. Ein Wert von `"certificate"` zeigt an, dass die Statistiken, die im aktuellen Schritt verfügbar sind, diejenigen sind, die in [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats) definiert sind.

## Wert

Ein String mit dem Wert `"certificate"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
