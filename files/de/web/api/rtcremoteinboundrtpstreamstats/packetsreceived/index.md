---
title: "RTCRemoteInboundRtpStreamStats: packetsReceived Eigenschaft"
short-title: packetsReceived
slug: Web/API/RTCRemoteInboundRtpStreamStats/packetsReceived
l10n:
  sourceCommit: 8bb665b943fa480ea22b22135f58d97c0caca316
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`packetsReceived`**-Eigenschaft des {{domxref("RTCRemoteInboundRtpStreamStats")}} Wörterbuchs gibt die Gesamtanzahl der {{Glossary("RTP")}}-Pakete zurück, die von der [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) dieses Streams durch den entfernten Endpunkt empfangen wurden, einschließlich der erneuten Übertragungen.

## Wert

Ein positiver ganzzahliger Wert, der die Gesamtanzahl der am entfernten Endpunkt empfangenen RTP-Pakete angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCRemoteInboundRtpStreamStats.ssrc")}}
- {{domxref("RTCInboundRtpStreamStats.packetsReceived")}}
