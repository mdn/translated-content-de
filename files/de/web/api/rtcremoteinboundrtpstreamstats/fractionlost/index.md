---
title: "RTCRemoteInboundRtpStreamStats: fractionLost-Eigenschaft"
short-title: fractionLost
slug: Web/API/RTCRemoteInboundRtpStreamStats/fractionLost
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`fractionLost`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs gibt einen Wert an, mit dem der Anteil der für diese [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) verlorenen Pakete im letzten Berichtszeitraum bestimmt werden kann.

Um den Wert in einen Prozentsatz umzuwandeln, teilen Sie ihn durch 256 und multiplizieren ihn mit 100. Zum Beispiel zeigt ein Wert von 20 einen Paketverlust von 7,8 % an.

Beachten Sie, dass der Wert möglicherweise nicht genau ist aufgrund der Art und Weise, wie er berechnet wird, aber er bietet ein schnelles und bequemes Maß für die Verbindungsqualität.

## Wert

Eine Zahl, die den Anteil des Paketverlusts im letzten Berichtszeitraum angibt, multipliziert mit 256. Der Wert ist 0, wenn der berechnete Paketverlust negativ ist.

> [!NOTE]
> Der Wert stammt aus dem 8-Bit-`Fraction Lost`-Feld des letzten Sender Report (SR) oder Receiver Report (RR) RTCP-Pakets. Der Algorithmus zur Berechnung des Werts ist definiert in [RFC 3550, Anhang A.3: Bestimmung der Anzahl erwarteter und verlorener Pakete](https://datatracker.ietf.org/doc/html/rfc3550#appendix-A.3).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{rfc("3550","SR: Sender Report RTCP Packet", "6.4.1")}}
- {{rfc("3550","RR: Receiver Report RTCP Packet", "6.4.2")}}
