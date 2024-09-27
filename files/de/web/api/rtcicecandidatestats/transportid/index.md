---
title: "RTCIceCandidateStats: transportId-Eigenschaft"
short-title: transportId
slug: Web/API/RTCIceCandidateStats/transportId
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`transportId`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs ist ein String, der den Transport, der die [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) erzeugt hat, eindeutig identifiziert. Aus diesen wurden Informationen über diesen Kandidaten entnommen.

## Wert

Ein String, dessen Wert den Transport, aus dem alle transportbezogenen Informationen im [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats) gesammelt wurden, eindeutig identifiziert. Dies kann verwendet werden, um Kandidaten zu vergleichen, die denselben Transport verwenden würden, zum Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
