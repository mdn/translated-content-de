---
title: "RTCIceCandidatePairStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCIceCandidatePairStats/timestamp
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)-Wörterbuchs ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Daten im Objekt abgerufen wurden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der die Aktivität, die durch die Statistiken in diesem Objekt beschrieben wird, aufgezeichnet wurde. Der Wert ist in Millisekunden angegeben, die seit dem Beginn des 1. Januar 1970, UTC, vergangen sind.

Der Wert sollte auf einige Millisekunden genau sein, kann aber aufgrund von Hardware- oder Betriebssystemeinschränkungen oder aufgrund von [Fingerprinting](/de/docs/Glossary/Fingerprinting) Schutz in Form von verringerter Taktpräzision oder Genauigkeit nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
