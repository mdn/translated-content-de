---
title: "RTCIceCandidatePairStats: bytesDiscardedOnSend Eigenschaft"
short-title: bytesDiscardedOnSend
slug: Web/API/RTCIceCandidatePairStats/bytesDiscardedOnSend
l10n:
  sourceCommit: 2c2b213b9a7d391732c94dd35928edf9ff34d8ed
---

{{APIRef("WebRTC")}}

Die **`bytesDiscardedOnSend`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats) Wörterbuchs gibt die Gesamtzahl der Bytes an, die aufgrund von Socket-Fehlern verworfen wurden.

Die Fehler könnten beispielsweise dadurch verursacht werden, dass versucht wird, Pakete an den Socket zu übermitteln, wenn dieser voll ist.

### Wert

Ein Ganzzahlwert, der die Gesamtzahl der aufgrund von Socket-Fehlern verworfenen Bytes angibt. Dies wird berechnet, wie in {{rfc("3550","", "6.4.1")}} definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
