---
title: "RTCDataChannelStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCDataChannelStats/timestamp
l10n:
  sourceCommit: 7e6058c754c6d38bc15a16cf8e65f1e31139f05b
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCDataChannelStats`](/de/docs/Web/API/RTCDataChannelStats)-Wörterbuchs ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Daten im Objekt abgerufen wurden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der den Zeitpunkt anzeigt, zu dem die durch die Statistiken in diesem Objekt beschriebene Aktivität aufgezeichnet wurde, in Millisekunden seit dem Beginn des 1. Januar 1970, UTC.

Der Wert sollte bis auf wenige Millisekunden genau sein, kann jedoch aufgrund von Hardware- oder Betriebssystemeinschränkungen oder aufgrund von [Fingerprinting](/de/docs/Glossary/Fingerprinting)-Schutz in Form von reduzierter Uhrengenauigkeit oder -präzision nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
