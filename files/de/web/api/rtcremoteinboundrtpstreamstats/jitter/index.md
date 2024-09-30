---
title: "RTCRemoteInboundRtpStreamStats: jitter-Eigenschaft"
short-title: jitter
slug: Web/API/RTCRemoteInboundRtpStreamStats/jitter
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`jitter`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs gibt die [Paket-Jitter](/de/docs/Glossary/Jitter) für die [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) zurück, wie sie vom entfernten Endpunkt gemessen wird.

Hohe Werte des Paket-Jitters weisen darauf hin, dass die Paketankunftsraten erheblich variieren, was die Qualität von Video-, Audio- und anderen Echtzeitkommunikationen über WebRTC beeinträchtigen kann.

## Wert

Paket-Jitter, in Sekunden.

Der Wert wird unter Verwendung des "interarrival jitter"-Algorithmus berechnet, der in {{RFC("3550", "", "6.4.1")}} beschrieben ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRemoteInboundRtpStreamStats.ssrc`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc)
- [`RTCInboundRtpStreamStats.jitter`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitter)
