---
title: "RTCTransportStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCTransportStats/timestamp
l10n:
  sourceCommit: be0fee87cb391fb077053fc7ca7640b7e51d1da8
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Wörterbuchs ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Daten im Objekt abgetastet wurden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der die durch die Statistiken in diesem Objekt beschriebene Aktivität aufgezeichnet wurde, in Millisekunden seit dem Beginn des 1. Januar 1970, UTC.

Der Wert sollte bis auf wenige Millisekunden genau sein, kann jedoch aufgrund von Hardware- oder Betriebssystemeinschränkungen oder wegen Schutzmaßnahmen gegen [Fingerabdruckerstellung](/de/docs/Glossary/Fingerprinting) in Form von reduzierter Uhrenpräzision oder -genauigkeit nicht ganz präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
