---
title: "RTCDataChannelStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCDataChannelStats/timestamp
l10n:
  sourceCommit: 7e6058c754c6d38bc15a16cf8e65f1e31139f05b
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des {{domxref("RTCDataChannelStats")}} Wörterbuchs ist ein {{domxref("DOMHighResTimeStamp")}} Objekt, das die Zeit angibt, zu der die Daten im Objekt erfasst wurden.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}} Wert, der die Zeit angibt, zu der die Aktivität, die durch die Statistiken in diesem Objekt beschrieben wird, aufgezeichnet wurde, in Millisekunden seit dem Beginn des 1. Januar 1970, UTC.

Der Wert sollte innerhalb weniger Millisekunden genau sein, kann jedoch aufgrund von Hardware- oder Betriebssystembeschränkungen oder aufgrund von [Fingerprinting](/de/docs/Glossary/Fingerprinting) Schutzmaßnahmen in Form von reduzierter Taktgenauigkeit oder Präzision möglicherweise nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
