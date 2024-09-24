---
title: "RTCInboundRtpStreamStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCInboundRtpStreamStats/timestamp
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des {{domxref("RTCInboundRtpStreamStats")}}-Wörterbuchs ist ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das die Zeit angibt, zu der die Daten im Objekt abgetastet wurden.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}-Wert, der die Zeit angibt, zu der die Aktivität, die durch die Statistiken in diesem Objekt beschrieben wird, aufgezeichnet wurde, in Millisekunden seit dem Beginn des 1. Januar 1970, UTC.

Der Wert sollte bis auf wenige Millisekunden genau sein, kann jedoch aufgrund von Hardware- oder Betriebssystemeinschränkungen oder aufgrund von [Fingerabdruckschutz](/de/docs/Glossary/Fingerprinting) in Form von verringerter Taktpräzision oder Genauigkeit nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
