---
title: "RTCRemoteInboundRtpStreamStats: Eigenschaft fractionLost"
short-title: fractionLost
slug: Web/API/RTCRemoteInboundRtpStreamStats/fractionLost
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`fractionLost`**-Eigenschaft des {{domxref("RTCRemoteInboundRtpStreamStats")}}-Wörterbuchs liefert einen Wert, der verwendet werden kann, um den Anteil der verlorenen Pakete für diese [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) im letzten Berichtsintervall zu bestimmen.

Um den Wert in einen Prozentsatz umzuwandeln, teilen Sie ihn durch 256 und multiplizieren Sie mit 100.
Ein Wert von 20 zeigt beispielsweise einen Paketverlust von 7,8 % an.

Beachten Sie, dass der Wert aufgrund der Art und Weise, wie er berechnet wird, möglicherweise nicht genau präzise ist, aber er bietet dennoch ein schnelles und praktisches Maß für die Verbindungsqualität.

## Wert

Eine Zahl, die den Paketverlustanteil im letzten Berichtsintervall angibt, multipliziert mit 256.
Der Wert ist 0, wenn der berechnete Paketverlust negativ ist.

> [!NOTE]
> Der Wert stammt aus dem 8-Bit-`fraction lost`-Feld des letzten Sender Report (SR) oder Receiver Report (RR) RTCP-Pakets.
> Der Algorithmus zur Berechnung des Wertes ist definiert in [RFC 3550, Anhang A.3: Bestimmung der erwarteten und verlorenen Anzahl von Paketen](https://datatracker.ietf.org/doc/html/rfc3550#appendix-A.3).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{rfc("3550","SR: Sender Report RTCP-Paket", "6.4.1")}}
- {{rfc("3550","RR: Receiver Report RTCP-Paket", "6.4.2")}}
