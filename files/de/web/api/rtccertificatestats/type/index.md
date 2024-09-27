---
title: "RTCCertificateStats: Typ-Eigenschaft"
short-title: type
slug: Web/API/RTCCertificateStats/type
l10n:
  sourceCommit: cc247a1dfe34f8c8a04071e9652c9c6a413870c8
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)-Dictionaries ist ein String mit dem Wert `"certificate"`.

Verschiedene Statistiken werden durch Iteration über das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt, das durch einen Aufruf von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, abgerufen. Der Typ gibt die Menge der in einem bestimmten Iterationsschritt über das Objekt verfügbaren Statistiken an. Ein Wert von `"certificate"` zeigt an, dass die in dem aktuellen Schritt verfügbaren Statistiken diejenigen sind, die in [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats) definiert sind.

## Wert

Ein String mit dem Wert `"certificate"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
