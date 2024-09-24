---
title: "RTCInboundRtpStreamStats: Eigenschaft perDscpPacketsReceived"
short-title: perDscpPacketsReceived
slug: Web/API/RTCInboundRtpStreamStats/perDscpPacketsReceived
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`perDscpPacketsReceived`**-Eigenschaft des {{domxref("RTCInboundRtpStreamStats")}}-Wörterbuchs ist ein Datensatz, der aus Schlüssel/Wert-Paaren besteht, bei denen jeder Schlüssel eine String-Darstellung eines Differentiated Services Code Point ist und der Wert die Anzahl der empfangenen Pakete für diesen DCSP ist.

> [!NOTE]
> Nicht alle Betriebssysteme stellen Daten auf einer per-DSCP-Basis zur Verfügung, daher sollte auf diesen Systemen nicht auf diese Eigenschaft vertraut werden.

## Wert

Ein Datensatz, der aus String/Wert-Paaren besteht. Jeder Schlüssel ist die String-Darstellung der ID-Nummer eines einzelnen Differentiated Services Code Point (DSCP).

> [!NOTE]
> Aufgrund von Netzwerkausbleichung und Remapping werden die in diesem Datensatz erscheinenden Zahlen nicht unbedingt mit den Werten übereinstimmen, wie sie gesendet wurden.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{RFC(2474)}}: Das Differentiated Service-Feld in IPv4- und IPv6-Headern
