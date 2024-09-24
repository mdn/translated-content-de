---
title: "RTCAudioSourceStats: Eigenschaft timestamp"
short-title: timestamp
slug: Web/API/RTCAudioSourceStats/timestamp
l10n:
  sourceCommit: 33e054640393bb70c43b0ef92c3017f0aec6c05e
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des {{domxref("RTCAudioSourceStats")}}-Wörterbuchs ist ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das die Zeit angibt, zu der die Daten im Objekt erfasst wurden.

Die Zeit wird in Millisekunden angegeben, die seit dem ersten Moment des 1. Januars 1970, UTC, vergangen sind (auch bekannt als [Unix-Zeit](/de/docs/Glossary/Unix_time)).

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}-Wert, der die Zeit angibt, zu der die durch die Statistiken in diesem Objekt beschriebene Aktivität aufgezeichnet wurde, in Millisekunden seit dem Beginn des 1. Januars 1970, UTC.

Der Wert sollte innerhalb von wenigen Millisekunden genau sein, kann jedoch aufgrund von Hardware- oder Betriebssystembeschränkungen oder aufgrund von [Fingerabdruckschutz](/de/docs/Glossary/Fingerprinting) in Form reduzierter Taktpräzision oder -genauigkeit ungenau sein.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
