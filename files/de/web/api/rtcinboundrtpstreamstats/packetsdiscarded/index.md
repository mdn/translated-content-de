---
title: "RTCInboundRtpStreamStats: packetsDiscarded-Eigenschaft"
short-title: packetsDiscarded
slug: Web/API/RTCInboundRtpStreamStats/packetsDiscarded
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebRTC")}}

Die **`packetsDiscarded`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die kumulierte Anzahl der {{Glossary("RTP", "RTP")}}-Pakete an, die vom {{Glossary("jitter", "Jitter-Puffer")}} aufgrund verspäteter oder zu früher Ankunft verworfen wurden und daher nicht abgespielt werden.

Der Wert schließt keine Pakete ein, die aufgrund von Paketduplikation verworfen werden.

## Wert

Ein positiver ganzzahliger Wert.

Dies wird berechnet wie in {{rfc("7002",,"3.2")}} (und Anhang A.a.) definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`packetsLost`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/packetsLost)
- [`packetsReceived`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/packetsReceived)
