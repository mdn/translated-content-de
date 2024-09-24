---
title: "RTCIceCandidatePairStats: type-Eigenschaft"
short-title: type
slug: Web/API/RTCIceCandidatePairStats/type
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`type`**-Eigenschaft des {{domxref("RTCIceCandidatePairStats")}}-Wörterbuchs ist eine Zeichenkette mit dem Wert `"candidate-pair"`.

Verschiedene Statistiken werden durch Iterieren des {{domxref("RTCStatsReport")}}-Objekts erhalten, das von einem Aufruf von {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird. Der Typ gibt die Menge der Statistiken an, die in einem bestimmten Iterationsschritt über das Objekt verfügbar sind. Ein Wert von `"candidate-pair"` zeigt an, dass die in diesem Schritt verfügbaren Statistiken diejenigen sind, die in {{domxref("RTCIceCandidatePairStats")}} definiert sind.

## Wert

Eine Zeichenkette mit dem Wert `"candidate-pair"`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
