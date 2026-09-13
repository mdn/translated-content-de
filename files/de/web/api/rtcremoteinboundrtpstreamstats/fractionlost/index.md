---
title: "RTCRemoteInboundRtpStreamStats: fractionLost-Eigenschaft"
short-title: fractionLost
slug: Web/API/RTCRemoteInboundRtpStreamStats/fractionLost
l10n:
  sourceCommit: f0179562ad8e2a4dd1f0916c529792198d7e06b2
---

{{APIRef("WebRTC")}}

Die **`fractionLost`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Wörterbuchs liefert einen Wert, der verwendet werden kann, um den Bruchteil der für diese [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) im letzten Berichtsintervall verlorenen Pakete zu bestimmen.

Um den Wert in einen Prozentsatz umzuwandeln, teilen Sie ihn durch 256 und multiplizieren Sie mit 100. Beispielsweise weist ein Wert von 20 auf einen Paketverlust von 7,8 % hin.

Bitte beachten Sie, dass der Wert aufgrund der Art und Weise der Berechnung möglicherweise nicht genau ist, aber er bietet eine schnelle und bequeme Möglichkeit, die Linkqualität zu beurteilen.

## Wert

Eine Zahl, die den Bruchteil des Paketverlusts im letzten Berichtsintervall angibt, multipliziert mit 256. Der Wert ist 0, wenn der berechnete Paketverlust negativ ist.

> [!NOTE]
> Der Wert stammt aus dem 8-Bit-`fraction lost`-Feld des letzten Sender Report (SR) oder Receiver Report (RR) RTCP-Pakets.
> Der Algorithmus zur Berechnung des Wertes ist definiert in [RFC 3550, Anhang A.3: Bestimmung der erwarteten und verlorenen Pakete](https://datatracker.ietf.org/doc/html/rfc3550#appendix-A.3).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{rfc("3550", "SR: Sender Report RTCP Packet", "6.4.1")}}
- {{rfc("3550", "RR: Receiver Report RTCP Packet", "6.4.2")}}
