---
title: "RTCOutboundRtpStreamStats: perDscpPacketsSent-Eigenschaft"
short-title: perDscpPacketsSent
slug: Web/API/RTCOutboundRtpStreamStats/perDscpPacketsSent
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`perDscpPacketsSent`**-Eigenschaft
des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist eine Aufzeichnung von
Schlüssel/Wert-Paaren, bei denen jeder Schlüssel eine String-Darstellung eines Differentiated
Services Code Points ist und der Wert die Anzahl der gesendeten Pakete für diesen DSCP.

> [!NOTE]
> Nicht alle Betriebssysteme stellen Daten auf einer pro-DSCP-Basis zur Verfügung, daher sollte diese Eigenschaft auf diesen Systemen nicht als zuverlässig betrachtet werden.

## Wert

Eine Aufzeichnung von String/Wert-Paaren. Jeder Schlüssel ist die String-Darstellung der
ID-Nummer eines einzelnen Differentiated Services Code Points (DSCP).

> [!NOTE]
> Aufgrund von Netzwerk-Bleaching und -Remapping werden die in dieser Aufzeichnung erfassten Zahlen nicht unbedingt mit den Werten übereinstimmen, wie sie beim Senden der Daten waren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(2474)}}: Das Differentiated Service-Feld in IPv4- und IPv6-Headern
