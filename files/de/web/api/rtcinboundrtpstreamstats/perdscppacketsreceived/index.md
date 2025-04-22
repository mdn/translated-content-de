---
title: "RTCInboundRtpStreamStats: perDscpPacketsReceived-Eigenschaft"
short-title: perDscpPacketsReceived
slug: Web/API/RTCInboundRtpStreamStats/perDscpPacketsReceived
l10n:
  sourceCommit: 7c03abf6c6abaf0013f6606cae9cb97717415cce
---

{{APIRef("WebRTC")}}

Die **`perDscpPacketsReceived`**
Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Dictionaries ist ein Datensatz, der aus Schlüssel/Wert-Paaren besteht, wobei jeder Schlüssel eine String-Darstellung eines Differentiated Services Code Point und der Wert die Anzahl der für dieses DSCP empfangenen Pakete ist.

> [!NOTE]
> Nicht alle Betriebssysteme stellen Daten auf einer pro-DSCP-Basis zur Verfügung, deshalb sollte auf diesen Systemen nicht auf diese Eigenschaft vertraut werden.

## Wert

Ein Datensatz, der aus String/Wert-Paaren besteht. Jeder Schlüssel ist die String-Darstellung der ID-Nummer eines einzelnen Differentiated Services Code Point (DSCP).

> [!NOTE]
> Aufgrund von Netzwerkbleaching und -umgliederung stimmen die Zahlen in diesem Datensatz möglicherweise nicht mit den Werten überein, wie sie beim Senden der Daten waren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(2474)}}: Das Differentiated Service-Feld in IPv4- und IPv6-Headern
