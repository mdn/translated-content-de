---
title: "RTCRemoteInboundRtpStreamStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCRemoteInboundRtpStreamStats/timestamp
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Dictionaries ist ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Daten im Objekt erfasst wurden.

Für dieses Objekt ist der Zeitstempel die Zeit, zu der der _RTCP Receiver Report (RR)_ am lokalen Ende der Kommunikation empfangen wurde (der RR-Bericht ist definiert in {{rfc("3550","", "6.4.2")}}).

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Wert, der die Zeit angibt, zu der die durch die Statistiken in diesem Objekt beschriebene Aktivität aufgezeichnet wurde, in Millisekunden seit Beginn des 1. Januar 1970, UTC.

Der Wert sollte auf einige Millisekunden genau sein, kann aber aufgrund von Hardware- oder Betriebssystemeinschränkungen oder wegen des Schutzes vor [Fingerprinting](/de/docs/Glossary/Fingerprinting) in Form von reduzierter Taktgenauigkeit oder Präzision nicht vollkommen präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
