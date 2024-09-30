---
title: "RTCOutboundRtpStreamStats: Eigenschaft perDscpPacketsSent"
short-title: perDscpPacketsSent
slug: Web/API/RTCOutboundRtpStreamStats/perDscpPacketsSent
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`perDscpPacketsSent`**-Eigenschaft
des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein Datensatz, der aus Schlüssel/Wert-Paaren besteht, wobei jeder Schlüssel eine Zeichenkettenrepräsentation eines Differentiated Services Code Point ist und der Wert die Anzahl der gesendeten Pakete für diesen DSCP ist.

> [!NOTE]
> Nicht alle Betriebssysteme stellen Daten auf einer pro-DSCP-Basis bereit, daher sollte auf diesen Systemen nicht auf diese Eigenschaft vertraut werden.

## Wert

Ein Datensatz, der aus Zeichenketten/Wert-Paaren besteht. Jeder Schlüssel ist die Zeichenkettenrepräsentation der ID-Nummer eines einzelnen Differentiated Services Code Point (DSCP).

> [!NOTE]
> Aufgrund von Netzwerkausbleichen und Neuzuordnungen werden die in diesem Datensatz angezeigten Zahlen nicht unbedingt mit den Werten übereinstimmen, wie sie beim Senden der Daten waren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(2474)}}: Das Differentiated Service-Feld in IPv4- und IPv6-Headern
