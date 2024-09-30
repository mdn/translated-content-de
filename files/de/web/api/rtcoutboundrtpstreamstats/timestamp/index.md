---
title: "RTCOutboundRtpStreamStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCOutboundRtpStreamStats/timestamp
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Daten in dem Objekt abgetastet wurden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der die in diesem Objekt beschriebenen Aktivitäten durch die Statistiken erfasst wurden, in Millisekunden, die seit dem 1. Januar 1970, UTC, vergangen sind.

Der Wert sollte auf ein paar Millisekunden genau sein, kann aber aufgrund von Hardware- oder Betriebssystembeschränkungen oder wegen des Schutzes vor [Fingerprinting](/de/docs/Glossary/Fingerprinting) in Form von reduzierter Taktpräzision oder -genauigkeit nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
