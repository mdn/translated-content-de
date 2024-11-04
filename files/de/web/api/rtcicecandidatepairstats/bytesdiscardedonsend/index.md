---
title: "RTCIceCandidatePairStats: bytesDiscardedOnSend-Eigenschaft"
short-title: bytesDiscardedOnSend
slug: Web/API/RTCIceCandidatePairStats/bytesDiscardedOnSend
l10n:
  sourceCommit: 1ea99c8e68a85aac13ba846bbe95a6f686771221
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`bytesDiscardedOnSend`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs gibt die Gesamtanzahl der aufgrund von Socket-Fehlern verworfenen Bytes an.

Die Fehler könnten beispielsweise dadurch verursacht werden, dass versucht wurde, Pakete an den Socket zu übergeben, wenn dieser voll ist.

### Wert

Ein ganzzahliger Wert, der die Gesamtanzahl der aufgrund von Socket-Fehlern verworfenen Bytes angibt.
Dies wird berechnet, wie in {{rfc("3550","", "6.4.1")}} definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
