---
title: "RTCInboundRtpStreamStats: Eigenschaft estimatedPlayoutTimestamp"
short-title: estimatedPlayoutTimestamp
slug: Web/API/RTCInboundRtpStreamStats/estimatedPlayoutTimestamp
l10n:
  sourceCommit: 5f8f306587fbe25beac0d0e9c9fbda366e372f14
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`estimatedPlayoutTimestamp`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Dictionaries gibt die geschätzte Wiedergabezeit des Tracks dieses Empfängers an.

Dies ist der [Network Time Protocol (NTP)](https://en.wikipedia.org/wiki/Network_Time_Protocol)-Zeitstempel des letzten abspielbaren Audiosamples oder Videodateirahmens, das einen bekannten Zeitstempel hat, extrapoliert mit der seit der Abspielbereitschaft vergangenen Zeit.
Mit anderen Worten, es ist die geschätzte aktuelle Wiedergabezeit des Tracks in der NTP-Uhrzeit des Senders und kann vorhanden sein, auch wenn derzeit kein Audio abgespielt wird.

Dies kann verwendet werden, um abzuschätzen, wie stark Audio- und Videotracks von derselben Quelle asynchron sind.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
