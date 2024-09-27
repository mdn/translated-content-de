---
title: "RTCVideoSourceStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCVideoSourceStats/timestamp
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats)-Wörterbuchs ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Daten in dem Objekt erfasst wurden.

Die Zeit wird in Millisekunden angegeben, die seit dem ersten Moment des 1. Januar 1970, UTC (auch als [Unix-Zeit](/de/docs/Glossary/Unix_time) bekannt), vergangen sind.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der angibt, zu welcher Zeit die vom Statistikobjekt beschriebene Aktivität aufgezeichnet wurde, gemessen in Millisekunden seit dem Beginn des 1. Januar 1970, UTC.

Der Wert sollte mit einer Genauigkeit von wenigen Millisekunden angegeben werden, kann jedoch aufgrund von Hardware- oder Betriebssystemeinschränkungen oder wegen des [Fingerabdruckschutzes](/de/docs/Glossary/Fingerprinting) in Form von reduzierter Genauigkeit oder Präzision der Uhr nicht ganz genau sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
