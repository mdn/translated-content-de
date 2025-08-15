---
title: "RTCInboundRtpStreamStats: Eigenschaft estimatedPlayoutTimestamp"
short-title: estimatedPlayoutTimestamp
slug: Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`estimatedPlayoutTimestamp`** des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die geschätzte Abspielzeit des Tracks dieses Empfängers an.

Dies ist der [Network Time Protocol (NTP)](https://en.wikipedia.org/wiki/Network_Time_Protocol)-Zeitstempel der letzten abspielbaren Audio-Sample oder Video-Frame, die einen bekannten Zeitstempel aufweisen, extrapoliert mit der Zeit, die seit dem Bereitsein zur Wiedergabe verstrichen ist. Mit anderen Worten, es ist die geschätzte aktuelle Abspielzeit des Tracks in der NTP-Uhrzeit des Senders und kann auch vorhanden sein, wenn aktuell keine Audioausgabe erfolgt.

Dies kann verwendet werden, um zu schätzen, wie stark Audio- und Video-Tracks von derselben Quelle asynchron sind.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
