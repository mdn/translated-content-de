---
title: "RTCIceCandidatePairStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCIceCandidatePairStats/timestamp
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des {{domxref("RTCIceCandidatePairStats")}}-Wörterbuchs ist ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das die Zeit angibt, zu der die Daten im Objekt erfasst wurden.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}-Wert, der angibt, zu welchem Zeitpunkt die durch die Statistiken in diesem Objekt beschriebene Aktivität aufgezeichnet wurde, in Millisekunden seit dem Beginn des 1. Januar 1970, UTC.

Der Wert sollte bis auf wenige Millisekunden genau sein, könnte jedoch aufgrund von Hardware- oder Betriebssystemeinschränkungen oder aufgrund von [Fingerprinting](/de/docs/Glossary/Fingerprinting)-Schutz in Form von verminderter Präzision oder Genauigkeit der Uhr nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
