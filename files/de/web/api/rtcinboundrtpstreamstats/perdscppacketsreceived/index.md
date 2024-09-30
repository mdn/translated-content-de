---
title: "RTCInboundRtpStreamStats: Eigenschaft perDscpPacketsReceived"
short-title: perDscpPacketsReceived
slug: Web/API/RTCInboundRtpStreamStats/perDscpPacketsReceived
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`perDscpPacketsReceived`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs ist eine Aufzeichnung bestehend aus Schlüssel/Wert-Paaren, in denen jeder Schlüssel eine Zeichenfolgenrepräsentation eines Differentiated Services Code Point ist und der Wert die Anzahl der für diesen DCSP empfangenen Pakete ist.

> [!NOTE]
> Nicht alle Betriebssysteme stellen Daten auf einer pro-DSCP-Basis zur Verfügung, daher sollte auf diesen Systemen nicht auf diese Eigenschaft vertraut werden.

## Wert

Eine Aufzeichnung, die aus Zeichenfolge/Wert-Paaren besteht. Jeder Schlüssel ist die Zeichenfolgenrepräsentation einer eindeutigen Identifikationsnummer eines Differentiated Services Code Point (DSCP).

> [!NOTE]
> Aufgrund von Netzwerkaufhellung und -umverteilung stimmen die in dieser Aufzeichnung aufgeführten Nummern möglicherweise nicht mit den Werten überein, wie sie beim Senden der Daten waren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(2474)}}: Das Differentiated Service-Feld in IPv4- und IPv6-Headern
