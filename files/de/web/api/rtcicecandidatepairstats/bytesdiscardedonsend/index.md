---
title: "RTCIceCandidatePairStats: bytesDiscardedOnSend Eigenschaft"
short-title: bytesDiscardedOnSend
slug: Web/API/RTCIceCandidatePairStats/bytesDiscardedOnSend
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`bytesDiscardedOnSend`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Dictionary gibt die Gesamtanzahl der aufgrund von Socket-Fehlern verworfenen Bytes an.

Die Fehler können beispielsweise dadurch verursacht werden, dass versucht wird, Pakete an den Socket weiterzugeben, wenn dieser voll ist.

## Wert

Ein Ganzzahlwert, der die Gesamtanzahl der aufgrund von Socket-Fehlern verworfenen Bytes angibt.
Dies wird berechnet, wie unter {{rfc("3550","", "6.4.1")}} definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
