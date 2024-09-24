---
title: "RTCVideoSourceStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCVideoSourceStats/timestamp
l10n:
  sourceCommit: d32ba6a7c5a4c43029b92fab2e78e3bedc00b63c
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des {{domxref("RTCVideoSourceStats")}}-Wörterbuchs ist ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das die Zeit angibt, zu der die Daten im Objekt erfasst wurden.

Die Zeit wird in Millisekunden angegeben, die seit dem ersten Moment des 1. Januar 1970, UTC, vergangen sind (auch bekannt als [Unix-Zeit](/de/docs/Glossary/Unix_time)).

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}-Wert, der die Zeit angibt, zu der die durch die Statistiken in diesem Objekt beschriebene Aktivität aufgezeichnet wurde, in Millisekunden seit dem Beginn des 1. Januar 1970, UTC.

Der Wert sollte innerhalb weniger Millisekunden genau sein, kann jedoch aufgrund von Hardware- oder Betriebssystemeinschränkungen oder aufgrund von [Fingerprinting](/de/docs/Glossary/Fingerprinting)-Schutzmaßnahmen in Form von reduzierter Uhrenpräzision oder Genauigkeit nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
