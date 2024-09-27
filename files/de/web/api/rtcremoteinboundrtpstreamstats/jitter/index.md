---
title: "RTCRemoteInboundRtpStreamStats: jitter-Eigenschaft"
short-title: jitter
slug: Web/API/RTCRemoteInboundRtpStreamStats/jitter
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`jitter`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs gibt das [Paket-Jitter](/de/docs/Glossary/Jitter) für die [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) zurück, wie vom entfernten Endpunkt gemessen.

Hohe Werte für Paket-Jitter zeigen an, dass die Paketankunftsrate erheblich variiert, was die Video-, Audio- und andere Echtzeitkommunikation über WebRTC beeinträchtigen kann.

## Wert

Paket-Jitter, in Sekunden.

Der Wert wird mit dem "Interarrival Jitter"-Algorithmus berechnet, wie in {{RFC("3550", "", "6.4.1")}} beschrieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRemoteInboundRtpStreamStats.ssrc`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc)
- [`RTCInboundRtpStreamStats.jitter`](/de/docs/Web/API/RTCInboundRtpStreamStats/jitter)
