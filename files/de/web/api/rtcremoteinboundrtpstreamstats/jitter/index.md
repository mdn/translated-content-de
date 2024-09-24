---
title: "RTCRemoteInboundRtpStreamStats: jitter-Eigenschaft"
short-title: jitter
slug: Web/API/RTCRemoteInboundRtpStreamStats/jitter
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`jitter`**-Eigenschaft des {{domxref("RTCRemoteInboundRtpStreamStats")}}-Wörterbuchs gibt das {{glossary("Jitter", "Paketjitter")}} für die [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) zurück, wie sie vom entfernten Endpunkt gemessen wurde.

Hohe Paketjitter-Werte deuten darauf hin, dass die Paketankunftsraten erheblich variieren, was die Qualität von Video-, Audio- und anderen Echtzeitkommunikationen über WebRTC beeinträchtigen kann.

## Wert

Paketjitter, in Sekunden.

Der Wert wird mit dem "interarrival jitter"-Algorithmus berechnet, der in {{RFC("3550", "", "6.4.1")}} beschrieben ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCRemoteInboundRtpStreamStats.ssrc")}}
- {{domxref("RTCInboundRtpStreamStats.jitter")}}
