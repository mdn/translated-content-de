---
title: "RTCCodecStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCCodecStats/timestamp
l10n:
  sourceCommit: 667d3fc3409c0524a1fb97a7f3d784606d12f48d
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des {{domxref("RTCCodecStats")}}-Wörterbuchs ist ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das die Zeit angibt, zu der die Daten im Objekt erfasst wurden.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}-Wert, der die Zeit angibt, zu der die durch die Statistiken in diesem Objekt beschriebene Aktivität aufgezeichnet wurde, in Millisekunden seit dem Beginn des 1. Januar 1970, UTC.

Der Wert sollte auf einige Millisekunden genau sein, kann jedoch aufgrund von Hardware- oder Betriebssystemeinschränkungen oder aufgrund von [Fingerabdruckschutz](/de/docs/Glossary/Fingerprinting) in Form von verringerter Taktgenauigkeit oder -präzision möglicherweise nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
