---
title: "RTCInboundRtpStreamStats: packetsDiscarded-Eigenschaft"
short-title: packetsDiscarded
slug: Web/API/RTCInboundRtpStreamStats/packetsDiscarded
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`packetsDiscarded`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die kumulative Anzahl an {{Glossary("RTP", "RTP")}}-Paketen an, die vom {{Glossary("jitter", "Jitter-Puffer")}} aufgrund von verspäteter oder verfrühter Ankunft verworfen wurden und daher nicht abgespielt werden.

Der Wert schließt Pakete, die aufgrund von Paketduplikation verworfen werden, nicht ein.

## Wert

Ein positiver Ganzzahlwert.

Dieser wird gemäß {{rfc("7002",,"3.2")}} (und Anhang A.a.) berechnet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`packetsLost`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/packetsLost)
- [`packetsReceived`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/packetsReceived)
