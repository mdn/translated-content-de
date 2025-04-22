---
title: "RTCInboundRtpStreamStats: packetsDuplicated-Eigenschaft"
short-title: packetsDuplicated
slug: Web/API/RTCInboundRtpStreamStats/packetsDuplicated
l10n:
  sourceCommit: 7c03abf6c6abaf0013f6606cae9cb97717415cce
---

{{APIRef("WebRTC")}}

Die **`packetsDuplicated`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Gesamtanzahl der Pakete an, die verworfen wurden, weil sie Duplikate von zuvor empfangenen Paketen waren.

Diese Pakete werden nicht von der [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded)-Eigenschaft gezählt.

## Wert

Ein ganzzahliger Wert, der angibt, wie viele doppelte Pakete bisher vom lokalen Ende dieses RTP-Streams empfangen wurden. Diese doppelten Pakete sind nicht in der [`packetsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsDiscarded)-Eigenschaft enthalten.

## Anwendungshinweise

Doppelte Pakete werden erkannt, wenn ein Paket die gleiche RTP-Sequenznummer wie ein anderes Paket hat, das zuvor verarbeitet wurde. Jedes Mal, wenn ein Paket wiederholt wird, wird der Wert von `packetsDuplicated` erhöht, selbst wenn dasselbe Paket mehr als zweimal empfangen wird.

Eine genauere Ermittlung der Anzahl der verlorenen Pakete im Stream kann erreicht werden, indem man `packetsDuplicated` zu [`packetsLost`](/de/docs/Web/API/RTCInboundRtpStreamStats/packetsLost) addiert. Der resultierende Wert wird positiv sein, obwohl er nicht mit der in {{RFC(3660)}} berechneten Anzahl übereinstimmen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
