---
title: "RTCRemoteOutboundRtpStreamStats: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/RTCRemoteOutboundRtpStreamStats/timestamp
l10n:
  sourceCommit: fbbef300a9a819cdda1171355da5787ad7cdbb6d
---

{{APIRef("WebRTC")}}

Die **`timestamp`**-Eigenschaft des {{domxref("RTCRemoteOutboundRtpStreamStats")}} Dictionaries ist ein {{domxref("DOMHighResTimeStamp")}} Objekt, das angibt, zu welchem Zeitpunkt die Daten in dem Objekt erfasst wurden.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}} Wert, der die Zeit angibt, zu der die durch die Statistiken in diesem Objekt beschriebene Aktivität aufgezeichnet wurde, in Millisekunden, die seit dem 1. Januar 1970, UTC, vergangen sind.

Der Wert sollte bis auf wenige Millisekunden genau sein, kann jedoch aufgrund von Hardware- oder Betriebssystemeinschränkungen oder aufgrund von Schutzmaßnahmen gegen [Fingerprinting](/de/docs/Glossary/Fingerprinting) in Form von verringerter Uhrenpräzision oder -genauigkeit nicht vollständig präzise sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
