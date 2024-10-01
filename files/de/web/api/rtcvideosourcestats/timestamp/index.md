---
title: "RTCVideoSourceStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCVideoSourceStats/timestamp
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats)-Wörterbuchs ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Daten im Objekt abgetastet wurden.

Die Zeit wird in Millisekunden angegeben, die seit dem ersten Moment des 1. Januar 1970, UTC, vergangen sind (auch bekannt als {{Glossary("Unix_time", "Unix-Zeit")}}).

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der die Aktivität, die durch die Statistiken in diesem Objekt beschrieben wird, aufgezeichnet wurde, in Millisekunden seit dem Beginn des 1. Januar 1970, UTC.

Der Wert sollte bis auf wenige Millisekunden genau sein, kann jedoch aufgrund von Hardware- oder Betriebssystemeinschränkungen oder aufgrund von Schutzmaßnahmen gegen {{Glossary("Fingerprinting", "Fingerprinting")}} in Form von reduzierter Taktpräzision oder -genauigkeit nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
