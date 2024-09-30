---
title: "RTCRemoteInboundRtpStreamStats: fractionLost-Eigenschaft"
short-title: fractionLost
slug: Web/API/RTCRemoteInboundRtpStreamStats/fractionLost
l10n:
  sourceCommit: cd494150381c2588d5b2f4c3425bd772eee8f29d
---

{{APIRef("WebRTC")}}

Die **`fractionLost`**-Eigenschaft des [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)-Dictionary liefert einen Wert, der verwendet werden kann, um den Anteil der verlorenen Pakete für diese [Synchronization Source (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) im letzten Berichtsintervall zu bestimmen.

Um den Wert in einen Prozentsatz umzuwandeln, teilen Sie ihn durch 256 und multiplizieren Sie mit 100.
Ein Wert von 20 entspricht beispielsweise einem Paketverlust von 7,8%.

Es ist zu beachten, dass der Wert aufgrund der Berechnungsweise möglicherweise nicht ganz genau ist, aber er bietet eine schnelle und nützliche Messung der Verbindungsqualität.

## Wert

Eine Zahl, die den Anteil des Paketverlusts im letzten Berichtszeitraum angibt, multipliziert mit 256.
Der Wert ist 0, wenn der berechnete Paketverlust negativ ist.

> [!NOTE]
> Der Wert stammt aus dem 8-Bit-`fraction lost`-Feld des letzten Sender Report (SR) oder Receiver Report (RR) RTCP-Pakets.
> Der Algorithmus zur Berechnung des Wertes ist in [RFC 3550, Anhang A.3: Determining Number of Packets Expected and Lost](https://datatracker.ietf.org/doc/html/rfc3550#appendix-A.3) definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{rfc("3550","SR: Sender Report RTCP-Paket", "6.4.1")}}
- {{rfc("3550","RR: Receiver Report RTCP-Paket", "6.4.2")}}
