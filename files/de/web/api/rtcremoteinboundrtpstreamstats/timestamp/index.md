---
title: "RTCRemoteInboundRtpStreamStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCRemoteInboundRtpStreamStats/timestamp
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des {{domxref("RTCRemoteInboundRtpStreamStats")}}-Wörterbuchs ist ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das die Zeit angibt, zu der die Daten im Objekt erfasst wurden.

Für dieses Objekt ist der Zeitstempel die Zeit, zu der der _RTCP Receiver Report (RR)_ am lokalen Ende der Kommunikation empfangen wurde (der RR-Bericht ist in {{rfc("3550","", "6.4.2")}} definiert).

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}-Wert, der die Zeit angibt, zu der die durch die Statistiken in diesem Objekt beschriebene Aktivität aufgezeichnet wurde, in Millisekunden, die seit dem Beginn des 1. Januar 1970, UTC, verstrichen sind.

Der Wert sollte bis auf wenige Millisekunden genau sein, kann aber aufgrund von Hardware- oder Betriebssystemeinschränkungen oder wegen des Schutzes vor [Fingerabdrücken](/de/docs/Glossary/Fingerprinting) in Form von verringerter Taktpräzision oder Genauigkeit möglicherweise nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
