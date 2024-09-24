---
title: "RTCOutboundRtpStreamStats: Eigenschaft perDscpPacketsSent"
short-title: perDscpPacketsSent
slug: Web/API/RTCOutboundRtpStreamStats/perDscpPacketsSent
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`perDscpPacketsSent`**-Eigenschaft
des {{domxref("RTCOutboundRtpStreamStats")}}-Wörterbuchs ist ein Datensatz bestehend aus
Schlüssel/Wert-Paaren, bei denen jeder Schlüssel eine String-Darstellung eines Differentiated
Services Code Points ist und der Wert die Anzahl der für diesen DCSP gesendeten Pakete darstellt.

> [!NOTE]
> Nicht alle Betriebssysteme stellen Daten auf einer per-DSCP
> Basis zur Verfügung, daher sollte auf diese Eigenschaft auf solchen Systemen nicht vertraut werden.

## Wert

Ein Datensatz bestehend aus String/Wert-Paaren. Jeder Schlüssel ist die String-Darstellung
der ID-Nummer eines einzelnen Differentiated Services Code Points (DSCP).

> [!NOTE]
> Aufgrund von Netzwerkbleiche und -remapping werden die in
> diesem Datensatz gesehenen Zahlen nicht unbedingt mit den Werten übereinstimmen, wie sie beim Senden der Daten waren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(2474)}}: Das Differentiated Service-Feld in IPv4- und IPv6-Headern
