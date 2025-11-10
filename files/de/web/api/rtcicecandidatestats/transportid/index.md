---
title: "RTCIceCandidateStats: transportId-Eigenschaft"
short-title: transportId
slug: Web/API/RTCIceCandidateStats/transportId
l10n:
  sourceCommit: ef82d981d563626248276acbf9516aac7445d4fa
---

{{APIRef("WebRTC")}}

Die **`transportId`**-Eigenschaft des [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuchs ist ein String, der den Transport eindeutig identifiziert, der die [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) erzeugt hat, aus denen die Informationen über diesen Kandidaten entnommen wurden.

Dies kann beispielsweise verwendet werden, um Kandidaten zu vergleichen, die denselben Transport verwenden.

## Wert

Ein String, dessen Wert den Transport eindeutig identifiziert, aus dem alle transportbezogenen Informationen in den [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats) entnommen wurden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
