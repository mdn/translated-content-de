---
title: "RTCInboundRtpStreamStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCInboundRtpStreamStats/timestamp
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Daten im Objekt erfasst wurden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der die Aktivität, die durch die Statistiken in diesem Objekt beschrieben wird, aufgezeichnet wurde, in Millisekunden seit dem Beginn des 1. Januar 1970, UTC.

Der Wert sollte innerhalb weniger Millisekunden genau sein, kann aber aufgrund von Hardware- oder Betriebssystembeschränkungen oder aufgrund von {{Glossary("Fingerprinting", "Fingerprinting")}}-Schutz in Form von verringerter Taktpräzision oder Genauigkeit nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
